import { notFound } from "next/navigation";
import { client } from "@/lib/sanity.client";
import { certificateByVerificationCodeQuery } from "@/lib/sanity.queries";
import { Card } from "@/components/ui/Card";
import { CheckCircle, XCircle, Calendar, Award, User } from "lucide-react";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface VerifyPageProps {
  params: Promise<{ verificationCode: string }>;
}

export const revalidate = 0;

export const metadata = {
  title: "Sertifika Doğrulama - EduCert",
  description: "Sertifika doğrulama kodu ile sertifika geçerliliğini kontrol edin.",
};

export default async function VerifyPage({ params }: VerifyPageProps) {
  const { verificationCode } = await params;
  
  const certificate = await client.fetch(
    certificateByVerificationCodeQuery,
    { verificationCode }
  );

  if (!certificate || !certificate.course || !certificate.template) {
    return (
      <div className="bg-white min-h-screen py-20 px-6">
        <div className="max-w-2xl mx-auto">
          <Card className="p-12 text-center space-y-8">
            <XCircle className="w-16 h-16 text-foreground mx-auto" />
            <div>
              <h1 className="text-3xl font-serif font-bold text-foreground mb-3">
                Sertifika Bulunamadı
              </h1>
              <p className="text-muted font-sans leading-relaxed">
                <code className="bg-primary px-3 py-1 text-sm border border-border">
                  {verificationCode}
                </code>{" "}
                doğrulama koduna ait geçerli bir sertifika bulunamadı.
              </p>
            </div>
            <p className="text-sm text-muted font-sans">
              Kod yanlış yazılmış olabilir veya sertifika iptal edilmiş olabilir.
            </p>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-20 px-6">
      <div className="max-w-3xl mx-auto space-y-12">
        
        <div className="text-center space-y-6 pb-8 border-b border-border">
          <CheckCircle className="w-16 h-16 text-foreground mx-auto" />
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-3 leading-tight">
              Sertifika Geçerli
            </h1>
            <p className="text-muted font-sans text-lg leading-relaxed">
              Bu sertifika doğrulanmıştır ve geçerlidir.
            </p>
          </div>
        </div>

        
        <div className="border border-border p-10 space-y-8">
          <h2 className="text-xs font-sans uppercase tracking-widest text-muted">
            Sertifika Bilgileri
          </h2>

          <div className="space-y-6">
            <div className="flex items-start gap-4 pb-4 border-b border-border">
              <User className="w-5 h-5 text-foreground mt-1 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-xs font-sans uppercase tracking-widest text-muted mb-2">Katılımcı</p>
                <p className="font-serif font-bold text-foreground text-2xl">
                  {certificate.userName}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-border">
              <Award className="w-5 h-5 text-foreground mt-1 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-xs font-sans uppercase tracking-widest text-muted mb-2">Kurs</p>
                <p className="font-serif font-bold text-foreground text-xl">
                  {certificate.course.title}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-border">
              <Calendar className="w-5 h-5 text-foreground mt-1 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-xs font-sans uppercase tracking-widest text-muted mb-2">Verilme Tarihi</p>
                <p className="font-sans font-medium text-foreground">
                  {formatDate(certificate.issueDate)}
                </p>
              </div>
            </div>

            <div className="pb-4 border-b border-border">
              <p className="text-xs font-sans uppercase tracking-widest text-muted mb-3">Doğrulama Kodu</p>
              <code className="bg-primary px-4 py-3 text-foreground font-mono block border border-border">
                {certificate.verificationCode}
              </code>
            </div>

            <div>
              <p className="text-xs font-sans uppercase tracking-widest text-muted mb-2">Veren Kuruluş</p>
              <p className="font-sans font-medium text-foreground">
                {certificate.template.issuedBy}
              </p>
            </div>
          </div>
        </div>

        
        <div className="flex justify-center pt-4">
          <Link href={`/certificate/${certificate.publicUrl}`}>
            <Button size="lg">Sertifikayı Görüntüle</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

