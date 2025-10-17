import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Sanity webhook'tan gelen _type bilgisine göre revalidate
    if (body._type === "course") {
      revalidatePath("/");
      revalidatePath("/courses");
      if (body.slug?.current) {
        revalidatePath(`/courses/${body.slug.current}`);
      }
    }

    if (body._type === "certificateTemplate") {
      revalidatePath("/courses/[slug]");
    }

    return NextResponse.json({ revalidated: true, now: Date.now() });
  } catch (error) {
    console.error("Revalidation hatası:", error);
    return NextResponse.json(
      { error: "Revalidation başarısız" },
      { status: 500 }
    );
  }
}

