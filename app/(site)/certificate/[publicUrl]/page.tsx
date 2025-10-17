import { notFound } from "next/navigation";
import { client } from "@/lib/sanity.client";
import { certificateByPublicUrlQuery } from "@/lib/sanity.queries";
import CertificatePreview from "@/components/certificate/CertificatePreview";
import DownloadPdfButton from "@/components/certificate/DownloadPdfButton";
import { Share2, CheckCircle } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

interface CertificatePageProps {
  params: Promise<{ publicUrl: string }>;
}

export const revalidate = 0;

export async function generateMetadata({
  params,
}: CertificatePageProps): Promise<Metadata> {
  const { publicUrl } = await params;
  return {
    title: `Sertifika • ${publicUrl}`,
    description: "EduCert Sertifikası",
    openGraph: {
      title: "Sertifika",
      description: "EduCert Sertifikası",
    },
  };
}

export default async function CertificatePage({
  params,
}: CertificatePageProps) {
  const { publicUrl } = await params;

  const certificate = await client.fetch(certificateByPublicUrlQuery, {
    publicUrl,
  });

  if (!certificate || !certificate.course || !certificate.template) {
    notFound();
  }

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const verifyUrl = `${siteUrl}/verify/${certificate.verificationCode}`;

  // Arka plan görseli (template'den veya fallback)
  const bgUrl =
    certificate.template.bg ||
    "/certificates/ucuncu-binyil-bg.png";

  return (
    <div className="bg-white min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        
        <div className="border border-foreground p-8 text-center max-w-3xl mx-auto">
          <CheckCircle className="w-12 h-12 text-foreground mx-auto mb-4" />
          <h2 className="text-3xl font-serif font-bold text-foreground mb-3">
            Tebrikler! Sertifikanız Hazır
          </h2>
          <p className="text-muted font-sans leading-relaxed">
            Sertifikanız başarıyla oluşturuldu. Aşağıdan görüntüleyebilir,
            PNG veya PDF olarak indirebilirsiniz.
          </p>
        </div>

        
        <CertificatePreview
          bgUrl={bgUrl}
          userName={certificate.userName}
          educationType={certificate.course.educationType}
          courseTitle={certificate.course.title}
          primaryColor={certificate.template.primaryColor}
          issueDate={certificate.issueDate}
          issuedBy={certificate.template.issuedBy}
        />

        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 border-t border-border">
          <DownloadPdfButton
            bgUrl={bgUrl}
            userName={certificate.userName}
            educationType={certificate.course.educationType}
            courseTitle={certificate.course.title}
            primaryColor={certificate.template.primaryColor}
            issueDate={certificate.issueDate}
            issuedBy={certificate.template.issuedBy}
            verificationCode={certificate.verificationCode}
            fileName={`${certificate.userName.replace(/\s+/g, "_")}_Sertifika.pdf`}
          />

          <Link href={verifyUrl} target="_blank">
            <Button variant="outline" className="w-full sm:w-auto">
              <Share2 className="w-4 h-4 mr-2" />
              Doğrulama Sayfası
            </Button>
          </Link>
        </div>

        
        <div className="border border-border p-8 max-w-2xl mx-auto">
          <h3 className="text-xs font-sans uppercase tracking-widest text-muted mb-4">
            Sertifika Doğrulama
          </h3>
          <p className="text-muted text-sm mb-4 font-sans leading-relaxed">
            Sertifikanızın geçerliliğini aşağıdaki kod ile doğrulayabilirsiniz:
          </p>
          <code className="block bg-primary px-4 py-3 text-foreground font-mono text-sm border border-border">
            {certificate.verificationCode}
          </code>
          <p className="text-muted text-sm mt-4 font-sans">
            Doğrulama URL:{" "}
            <a
              href={verifyUrl}
              className="text-foreground underline hover:no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {verifyUrl}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

