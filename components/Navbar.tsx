"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { client } from "@/lib/sanity.client";
import { coursesQuery } from "@/lib/sanity.queries";

interface Course {
  _id: string;
  title: string;
  slug: string;
  level?: string;
}

export function Navbar() {
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [isVerifyOpen, setIsVerifyOpen] = useState(false);
  const [courses, setCourses] = useState<Course[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data = await client.fetch(coursesQuery);
        setCourses(data.slice(0, 6)); // İlk 6 kurs
      } catch (error) {
        console.error("Kurslar yüklenemedi:", error);
      }
    };
    fetchCourses();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);
      if (scrolled && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  return (
    <nav 
      className={`bg-white border-b fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'border-foreground shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] backdrop-blur-sm bg-white/95' 
          : 'border-border'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`flex items-center transition-all duration-500 ease-out relative ${
          isScrolled ? 'h-20 justify-center' : 'h-24 justify-between'
        }`}>
          <Link 
            href="/" 
            className={`group flex items-center hover:opacity-80 transition-all duration-700 ease-out ${
              isScrolled 
                ? 'gap-5 scale-110 absolute left-1/2 -translate-x-1/2' 
                : 'gap-4 scale-100 relative'
            }`}
          >
            <div className={`relative flex-shrink-0 transition-all duration-500 ease-out ${
              isScrolled 
                ? 'w-14 h-14 md:w-16 md:h-16 drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)]' 
                : 'w-12 h-12 md:w-14 md:h-14'
            }`}>
              <Image
                src="/logo.png"
                alt="EduCert"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <h1 className={`font-serif font-bold text-foreground tracking-tight leading-none transition-all duration-500 ease-out ${
                isScrolled ? 'text-2xl md:text-4xl' : 'text-2xl md:text-3xl'
              }`}>
                EduCert
              </h1>
              <span className={`font-sans uppercase text-muted mt-1 transition-all duration-500 ease-out ${
                isScrolled 
                  ? 'text-xs md:text-sm tracking-[0.2em] font-medium' 
                  : 'text-[10px] md:text-xs tracking-[0.15em]'
              }`}>
                Digital Certificates
              </span>
            </div>
          </Link>

          <div className={`flex items-center transition-all duration-700 ease-out ${
            isScrolled 
              ? 'gap-6 opacity-0 pointer-events-none scale-90 invisible' 
              : 'gap-10 opacity-100 pointer-events-auto scale-100 visible'
          }`}>
            <div 
              className="relative group"
              onMouseEnter={() => setIsCoursesOpen(true)}
              onMouseLeave={() => setIsCoursesOpen(false)}
            >
              <button className={`text-foreground hover:text-muted transition-all duration-300 font-sans tracking-wide flex items-center gap-1 py-2 ${
                isScrolled ? 'text-sm font-semibold' : 'text-sm'
              }`}>
                Kurslar
                <svg className={`transition-all duration-300 ${
                  isScrolled ? 'w-3.5 h-3.5' : 'w-4 h-4'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isCoursesOpen && (
                <div className="absolute top-full left-0 pt-2 w-80 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="bg-white border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="p-6">
                      <div className="text-xs font-sans uppercase tracking-[0.2em] text-muted mb-4">
                        Popüler Kurslar
                      </div>
                      <div className="space-y-3 mb-4">
                        {courses.map((course) => (
                          <Link
                            key={course._id}
                            href={`/courses/${course.slug}`}
                            className="block text-sm text-foreground hover:text-muted hover:translate-x-1 transition-all duration-200 font-sans"
                          >
                            {course.title}
                          </Link>
                        ))}
                      </div>
                      <Link
                        href="/courses"
                        className="inline-flex items-center text-xs font-sans tracking-wide text-foreground border-b border-foreground hover:text-muted hover:border-muted transition-colors"
                      >
                        Tüm Kurslar <span className="ml-2">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            
            <div 
              className="relative group"
              onMouseEnter={() => setIsVerifyOpen(true)}
              onMouseLeave={() => setIsVerifyOpen(false)}
            >
              <button className={`text-foreground hover:text-muted transition-all duration-300 font-sans tracking-wide flex items-center gap-1 py-2 ${
                isScrolled ? 'text-sm font-semibold' : 'text-sm'
              }`}>
                Doğrula
                <svg className={`transition-all duration-300 ${
                  isScrolled ? 'w-3.5 h-3.5' : 'w-4 h-4'
                }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              
              {isVerifyOpen && (
                <div className="absolute top-full right-0 pt-2 w-72 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="bg-white border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="p-6">
                      <div className="text-xs font-sans uppercase tracking-[0.2em] text-muted mb-4">
                        Sertifika Doğrulama
                      </div>
                      <p className="text-sm text-muted font-sans mb-4 leading-relaxed">
                        Sertifika doğrulama kodunu girerek bir sertifikanın geçerliliğini kontrol edin.
                      </p>
                      <form 
                        onSubmit={(e) => {
                          e.preventDefault();
                          const formData = new FormData(e.currentTarget);
                          const code = formData.get('code');
                          if (code) {
                            window.location.href = `/verify/${code}`;
                          }
                        }}
                        className="space-y-3"
                      >
                        <input
                          type="text"
                          name="code"
                          placeholder="Doğrulama Kodu"
                          className="w-full px-3 py-2 text-sm border border-border bg-white font-sans focus:outline-none focus:border-foreground transition-colors"
                          required
                        />
                        <button
                          type="submit"
                          className="w-full px-4 py-2 border border-foreground text-foreground hover:bg-foreground hover:text-white transition-colors font-sans text-xs tracking-wide"
                        >
                          Doğrula
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
            </div>

            
            <Link
              href="/about"
              className={`text-foreground hover:text-muted transition-all duration-300 font-sans tracking-wide ${
                isScrolled ? 'text-sm font-semibold' : 'text-sm'
              }`}
            >
              Hakkında
            </Link>

          </div>

          
              <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`absolute right-0 transition-all duration-700 ease-out flex items-center gap-2 px-4 py-2 border border-foreground hover:bg-foreground hover:text-white ${
                          isScrolled 
                            ? 'opacity-100 scale-100 visible' 
                            : 'opacity-0 scale-90 pointer-events-none invisible'
                        }`}
                      >
            <span className="text-xs font-sans uppercase tracking-wider">Menü</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        
        {isScrolled && isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t border-foreground shadow-xl animate-in slide-in-from-top-4 duration-300">
            <div className="max-w-7xl mx-auto px-6 py-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <div>
                  <h3 className="text-xs font-sans uppercase tracking-[0.2em] text-muted mb-4">
                    Kurslar
                  </h3>
                  <div className="space-y-3">
                    {courses.slice(0, 4).map((course) => (
                      <Link
                        key={course._id}
                        href={`/courses/${course.slug}`}
                        className="block text-sm text-foreground hover:text-muted hover:translate-x-1 transition-all duration-200 font-sans"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {course.title}
                      </Link>
                    ))}
                    <Link
                      href="/courses"
                      className="inline-flex items-center text-xs font-sans tracking-wide text-foreground border-b border-foreground hover:text-muted hover:border-muted transition-colors mt-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Tüm Kurslar <span className="ml-2">→</span>
                    </Link>
                  </div>
                </div>

                
                <div>
                  <h3 className="text-xs font-sans uppercase tracking-[0.2em] text-muted mb-4">
                    Sertifika Doğrulama
                  </h3>
                  <p className="text-sm text-muted font-sans mb-4 leading-relaxed">
                    Sertifika doğrulama kodunu girin.
                  </p>
                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      const formData = new FormData(e.currentTarget);
                      const code = formData.get('code');
                      if (code) {
                        window.location.href = `/verify/${code}`;
                      }
                    }}
                    className="space-y-3"
                  >
                    <input
                      type="text"
                      name="code"
                      placeholder="Doğrulama Kodu"
                      className="w-full px-3 py-2 text-sm border border-border bg-white font-sans focus:outline-none focus:border-foreground transition-colors"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full px-4 py-2 border border-foreground text-foreground hover:bg-foreground hover:text-white transition-colors font-sans text-xs tracking-wide"
                    >
                      Doğrula
                    </button>
                  </form>
                </div>

                
                <div>
                  <h3 className="text-xs font-sans uppercase tracking-[0.2em] text-muted mb-4">
                    Diğer
                  </h3>
                  <Link
                    href="/about"
                    className="block text-sm text-foreground hover:text-muted hover:translate-x-1 transition-all duration-200 font-sans"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Hakkımızda
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

