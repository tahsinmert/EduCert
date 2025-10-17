import { NextRequest, NextResponse } from "next/server";
import { serverClient } from "@/lib/sanity.server";
import { z } from "zod";
import { nanoid } from "nanoid";

const issueSchema = z.object({
  userName: z.string().min(2, "İsim en az 2 karakter olmalıdır"),
  courseId: z.string().min(1, "Kurs ID gereklidir"),
  templateId: z.string().min(1, "Şablon ID gereklidir"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validated = issueSchema.parse(body);

    // Generate unique codes
    const verificationCode = nanoid(12);
    const publicUrl = nanoid(16);

    // Create certificate document
    const certificate = await serverClient.create({
      _type: "issuedCertificate",
      userName: validated.userName,
      course: {
        _type: "reference",
        _ref: validated.courseId,
      },
      template: {
        _type: "reference",
        _ref: validated.templateId,
      },
      issueDate: new Date().toISOString(),
      verificationCode,
      publicUrl,
    });

    return NextResponse.json(
      {
        id: certificate._id,
        publicUrl,
        verificationCode,
      },
      { status: 201 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }

    console.error("Sertifika oluşturma hatası:", error);
    return NextResponse.json(
      { error: "Sertifika oluşturulamadı" },
      { status: 500 }
    );
  }
}

