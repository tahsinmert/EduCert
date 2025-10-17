"use client";

import { toPng } from "html-to-image";
import { useRef, useEffect, useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface DownloadPngButtonProps {
  children: React.ReactNode;
  fileName?: string;
}

/**
 * HTML elementini PNG olarak indirir.
 * SSR uyumlu olması için client-side mount kontrolü yapar.
 */
export default function DownloadPngButton({
  children,
  fileName = "sertifika.png",
}: DownloadPngButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleDownload = async () => {
    if (!ref.current) return;

    setIsGenerating(true);
    try {
      const dataUrl = await toPng(ref.current, {
        pixelRatio: 2,
        cacheBust: true,
      });

      const a = document.createElement("a");
      a.href = dataUrl;
      a.download = fileName;
      a.click();
    } catch (error) {
      console.error("PNG oluşturma hatası:", error);
      alert("PNG oluşturulurken bir hata oluştu.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-6">
      <div ref={ref}>{mounted ? children : null}</div>

      {mounted && (
        <div className="flex justify-center">
          <Button onClick={handleDownload} disabled={isGenerating}>
            {isGenerating ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Oluşturuluyor...
              </>
            ) : (
              <>
                <Download className="w-4 h-4 mr-2" />
                PNG İndir
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
}

