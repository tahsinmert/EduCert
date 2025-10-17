"use client";

import { useState, useMemo } from "react";
import { CourseCard } from "@/components/CourseCard";
import { Button } from "@/components/ui/Button";

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

interface CoursesFilterProps {
  courses: Course[];
}

export function CoursesFilter({ courses }: CoursesFilterProps) {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    courses.forEach((course) => {
      course.tags?.forEach((tag) => tagSet.add(tag));
    });
    return Array.from(tagSet);
  }, [courses]);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      if (selectedLevel && course.level !== selectedLevel) return false;
      if (selectedTag && !course.tags?.includes(selectedTag)) return false;
      return true;
    });
  }, [courses, selectedLevel, selectedTag]);

  return (
    <div className="space-y-12">
      
      <div className="border-b border-border pb-8 space-y-8">
        
        <div>
          <p className="text-xs font-sans uppercase tracking-[0.2em] text-muted mb-4">Seviye</p>
          <div className="flex flex-wrap gap-3">
            <Button
              variant={selectedLevel === null ? "primary" : "outline"}
              size="sm"
              onClick={() => setSelectedLevel(null)}
            >
              Tümü
            </Button>
            <Button
              variant={selectedLevel === "beginner" ? "primary" : "outline"}
              size="sm"
              onClick={() => setSelectedLevel("beginner")}
            >
              Başlangıç
            </Button>
            <Button
              variant={selectedLevel === "intermediate" ? "primary" : "outline"}
              size="sm"
              onClick={() => setSelectedLevel("intermediate")}
            >
              Orta
            </Button>
            <Button
              variant={selectedLevel === "advanced" ? "primary" : "outline"}
              size="sm"
              onClick={() => setSelectedLevel("advanced")}
            >
              İleri
            </Button>
          </div>
        </div>

        
        {allTags.length > 0 && (
          <div>
            <p className="text-xs font-sans uppercase tracking-[0.2em] text-muted mb-4">Etiketler</p>
            <div className="flex flex-wrap gap-3">
              <Button
                variant={selectedTag === null ? "primary" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(null)}
              >
                Tümü
              </Button>
              {allTags.slice(0, 10).map((tag) => (
                <Button
                  key={tag}
                  variant={selectedTag === tag ? "primary" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTag(tag)}
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>

      
      <div>
        <p className="text-sm text-muted mb-8 font-sans">
          {filteredCourses.length} kurs görüntüleniyor
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {filteredCourses.map((course) => (
            <CourseCard key={course._id} {...course} />
          ))}
        </div>
        {filteredCourses.length === 0 && (
          <div className="text-center py-24 border border-border">
            <p className="text-muted font-sans text-lg">
              Seçilen filtrelere uygun kurs bulunamadı.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

