import { NextResponse } from "next/server";
import { testFirestoreConnection } from "@/lib/firebase-rest";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await testFirestoreConnection();

    return NextResponse.json({
      success: true,
      message: "Firestore REST connection successful.",
    });
  } catch (error) {
    console.error("Firestore test error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Firestore connection failed.",
      },
      { status: 500 }
    );
  }
}
