"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Download, Loader2 } from "lucide-react";
import { generateCertificatePdf } from "@/lib/generateCertificatePdf";

interface DownloadPdfButtonProps {
  bgUrl: string;
  userName: string;
  educationType?: string | null;
  courseTitle?: string | null;
  primaryColor?: string;
  issueDate?: string;
  issuedBy?: string;
  verificationCode?: string;
  fileName?: string;
}

/**
 * Arka plan görseli + overlay metin ile PDF sertifika oluşturur ve indirir.
 */
export default function DownloadPdfButton({
  bgUrl,
  userName,
  educationType,
  courseTitle,
  primaryColor,
  issueDate,
  issuedBy,
  verificationCode,
  fileName = "sertifika.pdf",
}: DownloadPdfButtonProps) {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    setIsGenerating(true);
    try {
      const pdfBytes = await generateCertificatePdf({
        bgUrl,
        userName,
        educationType,
        courseTitle,
        primaryColor,
        issueDate,
        issuedBy,
        verificationCode,
      });

      const blob = new Blob([pdfBytes], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName;
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("PDF oluşturma hatası:", error);
      alert("PDF oluşturulurken bir hata oluştu. Lütfen tekrar deneyin.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Button onClick={handleDownload} disabled={isGenerating}>
      {isGenerating ? (
        <>
          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
          PDF Oluşturuluyor...
        </>
      ) : (
        <>
          <Download className="w-4 h-4 mr-2" />
          PDF İndir (Overlay)
        </>
      )}
    </Button>
  );
}

