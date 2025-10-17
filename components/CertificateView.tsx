"use client";

import { Card } from "./ui/Card";
import { formatDate } from "@/lib/utils";
import { QrCode, CheckCircle } from "lucide-react";

interface CertificateViewProps {
  userName: string;
  courseTitle: string;
  issueDate: string;
  issuedBy: string;
  verificationCode: string;
  primaryColor: string;
  footerText?: string;
}

export function CertificateView({
  userName,
  courseTitle,
  issueDate,
  issuedBy,
  verificationCode,
  primaryColor,
  footerText,
}: CertificateViewProps) {
  return (
    <Card className="max-w-4xl mx-auto p-8 md:p-12">
      <div className="space-y-8">
        
        <div
          className="h-2 rounded-full"
          style={{ backgroundColor: primaryColor }}
        />

        
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Katılım Sertifikası
          </h1>
          <p className="text-gray-500">Certificate of Completion</p>
        </div>

        <div className="h-px bg-gray-200" />

        
        <div className="text-center space-y-6 py-8">
          <div className="flex items-center justify-center gap-2">
            <CheckCircle className="w-6 h-6 text-green-500" />
            <p className="text-lg text-gray-600">Bu belge ile onaylanır ki</p>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {userName}
          </h2>

          <p className="text-gray-600">başarıyla tamamlamıştır</p>

          <h3
            className="text-2xl md:text-3xl font-bold"
            style={{ color: primaryColor }}
          >
            {courseTitle}
          </h3>
        </div>

        <div className="h-px bg-gray-200" />

        
        <div className="space-y-4 text-center">
          <p className="text-gray-600">
            Veriliş Tarihi: {formatDate(issueDate)}
          </p>
          <p className="font-semibold text-foreground">{issuedBy}</p>
          {footerText && <p className="text-sm text-gray-500">{footerText}</p>}

          <div className="flex items-center justify-center gap-2 pt-4">
            <QrCode className="w-4 h-4 text-gray-400" />
            <p className="text-xs text-gray-400">
              Doğrulama Kodu: {verificationCode}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}

