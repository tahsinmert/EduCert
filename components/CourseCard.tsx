"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface CourseCardProps {
  title: string;
  slug: string;
  shortDescription?: string;
  cover?: string;
  duration?: string;
  level?: string;
  tags?: string[];
  index?: number;
}

export function CourseCard({
  title,
  slug,
  shortDescription,
  cover,
  duration,
  level,
  index = 0,
}: CourseCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const levelLabels: Record<string, string> = {
    beginner: "Başlangıç",
    intermediate: "Orta",
    advanced: "İleri",
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    
    const tiltX = (y - 0.5) * 10; // -5 to 5 degrees
    const tiltY = (x - 0.5) * -10; // -5 to 5 degrees
    
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Link href={`/courses/${slug}`} className="block group">
      <article 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`h-full flex flex-col transition-all duration-700 hover:shadow-2xl ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}
        style={{ 
          transitionDelay: `${index * 100}ms`,
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${tilt.x || tilt.y ? 1.02 : 1})`,
          transition: 'transform 0.2s ease-out, box-shadow 0.3s ease-out',
        }}
      >
        
        {cover && (
          <div className="relative aspect-[4/3] w-full bg-primary mb-6 overflow-hidden border border-border">
            <Image
              src={cover}
              alt={title}
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}

        
        <div className="flex-1 flex flex-col">
          
          <div className="flex items-center gap-3 mb-4 text-xs text-muted font-sans tracking-wide">
            {level && <span>{levelLabels[level] || level}</span>}
            {duration && (
              <>
                <span>•</span>
                <span>{duration}</span>
              </>
            )}
          </div>

          
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4 line-clamp-3 leading-tight group-hover:text-muted transition-colors">
            {title}
          </h3>

          
          {shortDescription && (
            <p className="text-muted text-sm leading-relaxed line-clamp-2 font-sans">
              {shortDescription}
            </p>
          )}

          
          <div className="mt-6 pt-4 border-t border-border">
            <span className="text-xs font-sans tracking-wide text-foreground group-hover:text-muted transition-colors">
              Detayları Görüntüle →
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
}

