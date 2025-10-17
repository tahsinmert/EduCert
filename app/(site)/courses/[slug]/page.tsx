import Image from "next/image";
import { notFound } from "next/navigation";
import { client } from "@/lib/sanity.client";
import { courseBySlugQuery, templatesQuery } from "@/lib/sanity.queries";
import { Badge } from "@/components/ui/Badge";
import { PortableText } from "@portabletext/react";
import { CertificateForm } from "./CertificateForm";

interface CoursePageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  
  const course = await client.fetch(courseBySlugQuery, { slug });
  const templates = await client.fetch(templatesQuery);

  if (!course) {
    notFound();
  }

  const levelLabels: Record<string, string> = {
    beginner: "Başlangıç",
    intermediate: "Orta",
    advanced: "İleri",
  };

  return (
    <div className="bg-white min-h-screen">
      
      {course.cover && (
        <div className="relative h-[60vh] md:h-[70vh] w-full border-b border-border overflow-hidden">
          <Image
            src={course.cover}
            alt={course.title}
            fill
            className="object-cover grayscale"
            priority
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        </div>
      )}

      
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <div className="space-y-10">
          
          <div className="flex items-center gap-4 flex-wrap text-xs text-muted font-sans tracking-wide">
            <span className="uppercase tracking-[0.2em]">Kurs Detayı</span>
            {course.level && (
              <>
                <span>•</span>
                <span>{levelLabels[course.level] || course.level}</span>
              </>
            )}
            {course.duration && (
              <>
                <span>•</span>
                <span>{course.duration}</span>
              </>
            )}
          </div>

          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-[0.95]">
            {course.title}
          </h1>

          
          {course.shortDescription && (
            <p className="text-xl md:text-2xl text-muted leading-relaxed font-sans font-light max-w-3xl">
              {course.shortDescription}
            </p>
          )}

          
          {course.tags && course.tags.length > 0 && (
            <div className="flex flex-wrap gap-3 pt-6 border-t border-border">
              {course.tags.map((tag: string, idx: number) => (
                <Badge key={idx} variant="default">
                  {tag}
                </Badge>
              ))}
            </div>
          )}

          
          {course.content && (
            <div className="prose prose-lg max-w-none pt-10 border-t border-border font-sans">
              <PortableText value={course.content} />
            </div>
          )}

          
          <div className="border-2 border-foreground p-10 md:p-14 mt-20">
            <div className="text-xs font-sans uppercase tracking-[0.2em] text-muted mb-6">
              Sertifika Oluştur
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
              Kursu Tamamladınız mı?
            </h2>
            <p className="text-muted mb-10 leading-relaxed font-sans text-lg max-w-2xl">
              Eğitimi başarıyla tamamladıysanız, aşağıdaki formu kullanarak profesyonel sertifikanızı anında oluşturabilirsiniz.
            </p>
            <CertificateForm courseId={course._id} templates={templates} />
          </div>
        </div>
      </div>
    </div>
  );
}

