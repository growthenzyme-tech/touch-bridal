
import { NextRequest, NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";
import { adminDb } from "@/lib/firebase-admin";

export const runtime = "nodejs";

type EnquiryType = "contact" | "appointment" | "rental";

function isValidText(value: unknown, maxLength = 1000): value is string {
  return (
    typeof value === "string" &&
    value.trim().length > 0 &&
    value.trim().length <= maxLength
  );
}

function isValidPhone(value: unknown): value is string {
  if (typeof value !== "string") return false;

  const digits = value.replace(/\D/g, "");

  return digits.length >= 10 && digits.length <= 15;
}

function isValidDate(value: unknown): boolean {
  if (value === undefined || value === "") return true;

  if (typeof value !== "string") return false;

  // Accept YYYY-MM-DD from HTML date input
  const match = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);

  if (!match) return false;

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);

  const date = new Date(year, month - 1, day);

  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

function isValidStringArray(
  value: unknown,
  maxItems = 10
): value is string[] {
  return (
    Array.isArray(value) &&
    value.length > 0 &&
    value.length <= maxItems &&
    value.every(
      (item) =>
        typeof item === "string" &&
        item.trim().length > 0 &&
        item.length <= 100
    )
  );
}

export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json();

    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json(
        { success: false, message: "Invalid request data." },
        { status: 400 }
      );
    }

    const data = body as Record<string, unknown>;

    const { type, name, phone, message, eventDate } = data;

    if (
      type !== "contact" &&
      type !== "appointment" &&
      type !== "rental"
    ) {
      return NextResponse.json(
        { success: false, message: "Invalid enquiry type." },
        { status: 400 }
      );
    }

    if (!isValidText(name, 100) || !isValidPhone(phone)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid name and phone number." },
        { status: 400 }
      );
    }

    if (message !== undefined && message !== "" &&
        !isValidText(message, 2000)) {
      return NextResponse.json(
        { success: false, message: "Message is too long or invalid." },
        { status: 400 }
      );
    }

    if (!isValidDate(eventDate)) {
      return NextResponse.json(
        { success: false, message: "Invalid event date." },
        { status: 400 }
      );
    }

    let collectionName: string;
    let documentData: Record<string, unknown>;

    if (type === "contact") {
      if (!isValidText(message, 2000)) {
        return NextResponse.json(
          { success: false, message: "Please enter your message." },
          { status: 400 }
        );
      }

      collectionName = "contactMessages";

      documentData = {
        name: name.trim(),
        phone: phone.trim(),
        message: message.trim(),
        status: "pending",
      };
    } else if (type === "appointment") {
      if (!isValidStringArray(data.selectedServices)) {
        return NextResponse.json(
          { success: false, message: "Please select at least one service." },
          { status: 400 }
        );
      }

      collectionName = "appointments";

      documentData = {
        name: name.trim(),
        phone: phone.trim(),
        selectedServices: data.selectedServices.map((item) => item.trim()),
        eventDate: eventDate || null,
        message:
          typeof message === "string" ? message.trim() : "",
        status: "pending",
      };
    } else {
      if (
        !isValidStringArray(data.selectedItems, 4) ||
        !isValidText(eventDate, 10)
      ) {
        return NextResponse.json(
          { success: false, message: "Please select rental items and provide an event date." },
          { status: 400 }
        );
      }

      collectionName = "rentalEnquiries";

      documentData = {
        name: name.trim(),
        phone: phone.trim(),
        selectedItems: data.selectedItems.map((item) => item.trim()),
        eventDate,
        message:
          typeof message === "string" ? message.trim() : "",
        status: "pending",
      };
    }

    const docRef = await adminDb
      .collection(collectionName)
      .add({
        ...documentData,
        createdAt: FieldValue.serverTimestamp(),
      });

    return NextResponse.json(
      {
        success: true,
        message: "Your enquiry has been saved successfully.",
        enquiryId: docRef.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Enquiry submission error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit your enquiry. Please try again.",
      },
      { status: 500 }
    );
  }
}
