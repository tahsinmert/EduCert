import { NextRequest, NextResponse } from "next/server";
import { client } from "@/lib/sanity.client";
import { certificateByPublicUrlQuery } from "@/lib/sanity.queries";

export async function GET(
  request: NextRequest,
  context: { params: Promise<{ publicUrl: string }> }
) {
  try {
    const { publicUrl } = await context.params;

    const certificate = await client.fetch(certificateByPublicUrlQuery, {
      publicUrl,
    });

    if (!certificate) {
      return NextResponse.json(
        { error: "Sertifika bulunamadı" },
        { status: 404 }
      );
    }

    return NextResponse.json(certificate);
  } catch (error) {
    console.error("Sertifika getirme hatası:", error);
    return NextResponse.json(
      { error: "Sertifika getirilemedi" },
      { status: 500 }
    );
  }
}

