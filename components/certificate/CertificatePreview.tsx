"use client";

import Image from "next/image";
import { useMemo } from "react";

interface CertificatePreviewProps {
  bgUrl: string;
  userName: string;
  educationType?: string | null;
  courseTitle?: string | null;
  primaryColor?: string;
  issueDate?: string;
  issuedBy?: string;
}

/**
 * A4 yatay oran (842x595 pt) ile eş oranlı bir kutu içinde
 * arka plan görseli ve üstünde isim + eğitim türü overlay.
 * Responsive ve taşma önleyici tasarım.
 */
export default function CertificatePreview({
  bgUrl,
  userName,
  educationType,
  courseTitle,
  primaryColor = "#0F172A",
  issueDate,
  issuedBy,
}: CertificatePreviewProps) {
  const aspect = 842 / 595; // A4 landscape

  const edu = useMemo(() => {
    // Öncelik educationType, yoksa courseTitle
    return educationType?.trim() || courseTitle?.trim() || "";
  }, [educationType, courseTitle]);

  return (
    <div
      className="relative w-full max-w-5xl mx-auto border border-gray-200 rounded-xl overflow-hidden shadow-lg"
      style={{ aspectRatio: `${aspect}` }}
    >
      
      <Image
        src={bgUrl}
        alt="Sertifika Arka Planı"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none px-[8%] py-[6%] pt-[12%]">
        <div className="w-full text-center space-y-3">
          
          <div
            className="font-bold leading-tight drop-shadow-sm"
            style={{
              color: primaryColor,
              fontSize: "clamp(24px, 5.5vw, 52px)",
              letterSpacing: "0.5px",
              textWrap: "balance",
              wordBreak: "break-word",
            }}
          >
            {userName}
          </div>

          
          {edu && (
            <div
              className="text-gray-800 font-medium drop-shadow-sm"
              style={{
                fontSize: "clamp(16px, 2.5vw, 24px)",
                letterSpacing: "0.3px",
              }}
            >
              {edu}
            </div>
          )}

          
          {(issueDate || issuedBy) && (
            <div className="absolute bottom-24 left-0 right-0 flex justify-around px-12 text-sm text-gray-700">
              {issueDate && (
                <div className="text-center">
                  <div className="font-semibold mb-0.5">Tarih</div>
                  <div>{new Date(issueDate).toLocaleDateString("tr-TR")}</div>
                </div>
              )}
              {issuedBy && (
                <div className="text-center">
                  <div className="font-semibold mb-0.5">Veren Kuruluş</div>
                  <div>{issuedBy}</div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

