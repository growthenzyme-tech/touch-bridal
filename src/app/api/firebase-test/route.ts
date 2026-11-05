import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase-admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await adminDb.listCollections();

    return NextResponse.json({
      success: true,
      message: "Firebase Admin connected successfully!",
      database: "Cloud Firestore",
    });
  } catch (error) {
    console.error("Firebase connection error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Firebase connection failed.",
      },
      { status: 500 }
    );
  }
}
