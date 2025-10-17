import { client } from "@/lib/sanity.client";
import { coursesQuery } from "@/lib/sanity.queries";
import { CourseCard } from "@/components/CourseCard";
import { CoursesFilter } from "./CoursesFilter";

interface Course {
  _id: string;
  title: string;
  slug: string;
  shortDescription?: string;
  cover?: string;
  duration?: string;
  level?: string;
  tags?: string[];
}

export const revalidate = 60;

export const metadata = {
  title: "Tüm Kurslar - EduCert",
  description: "Tüm online kurslarımıza göz atın ve sertifika kazanın.",
};

export default async function CoursesPage() {
  const courses: Course[] = await client.fetch(coursesQuery);

  return (
    <div className="bg-white min-h-screen">
      
      <div className="border-b border-border py-20 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs font-sans uppercase tracking-[0.2em] text-muted mb-6">
            Eğitim Kataloğu
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-foreground mb-8 leading-[0.95]">
            Tüm Kurslar
          </h1>
          <p className="text-xl text-muted font-sans max-w-2xl leading-relaxed">
            {courses.length} profesyonel eğitim programı. Her biri tamamlandığında sertifika kazanma fırsatı sunar.
          </p>
        </div>
      </div>

      
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <CoursesFilter courses={courses} />
        </div>
      </div>
    </div>
  );
}

