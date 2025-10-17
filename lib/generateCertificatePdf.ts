import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

function hexToRgb(hex: string) {
  const cleaned = hex.replace("#", "");
  const bigint = parseInt(cleaned, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return rgb(r / 255, g / 255, b / 255);
}

interface GenerateCertificatePdfProps {
  bgUrl: string;
  userName: string;
  educationType?: string | null;
  courseTitle?: string | null;
  primaryColor?: string;
  issueDate?: string;
  issuedBy?: string;
  verificationCode?: string;
}

/**
 * Arka plan görseli üzerine metin yerleştirerek PDF sertifika oluşturur.
 * A4 landscape boyutu (842x595 pt).
 */
export async function generateCertificatePdf({
  bgUrl,
  userName,
  educationType,
  courseTitle,
  primaryColor = "#0F172A",
  issueDate,
  issuedBy,
  verificationCode,
}: GenerateCertificatePdfProps): Promise<Uint8Array> {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([842, 595]); // A4 landscape

  // Arka plan görseli ekle
  try {
    const bgBytes = await fetch(bgUrl).then((r) => r.arrayBuffer());
    let bg;

    if (bgUrl.toLowerCase().endsWith(".png")) {
      bg = await pdfDoc.embedPng(bgBytes);
    } else {
      bg = await pdfDoc.embedJpg(bgBytes);
    }

    page.drawImage(bg, {
      x: 0,
      y: 0,
      width: 842,
      height: 595,
    });
  } catch (error) {
    console.error("Arka plan görseli yüklenemedi:", error);
    // Arka plan olmadan devam et
    page.drawRectangle({
      x: 0,
      y: 0,
      width: 842,
      height: 595,
      color: rgb(0.96, 0.97, 0.98),
    });
  }

  // Fontlar
  const titleFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const bodyFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const color = hexToRgb(primaryColor);

  // İsim (ortada, büyük, biraz aşağıda)
  const nameSize = 36;
  const nameWidth = titleFont.widthOfTextAtSize(userName, nameSize);
  const nameX = (842 - nameWidth) / 2;
  const nameY = 320;

  page.drawText(userName, {
    x: nameX,
    y: nameY,
    size: nameSize,
    font: titleFont,
    color: color,
  });

  // Eğitim türü / Kurs adı
  const edu = educationType?.trim() || courseTitle?.trim() || "";
  if (edu) {
    const eduSize = 18;
    const eduWidth = bodyFont.widthOfTextAtSize(edu, eduSize);
    const eduX = (842 - eduWidth) / 2;
    const eduY = nameY - 36;

    page.drawText(edu, {
      x: eduX,
      y: eduY,
      size: eduSize,
      font: bodyFont,
      color: rgb(0.2, 0.22, 0.26),
    });
  }

  // Alt bilgiler (daha yukarıda)
  if (issueDate) {
    const dateText = `Tarih: ${new Date(issueDate).toLocaleDateString("tr-TR")}`;
    page.drawText(dateText, {
      x: 80,
      y: 140,
      size: 11,
      font: bodyFont,
      color: rgb(0.3, 0.3, 0.3),
    });
  }

  if (issuedBy) {
    const issuedByWidth = bodyFont.widthOfTextAtSize(issuedBy, 12);
    page.drawText(issuedBy, {
      x: (842 - issuedByWidth) / 2,
      y: 140,
      size: 12,
      font: bodyFont,
      color: rgb(0.2, 0.22, 0.26),
    });
  }

  if (verificationCode) {
    const codeText = `Kod: ${verificationCode}`;
    const codeWidth = bodyFont.widthOfTextAtSize(codeText, 9);
    page.drawText(codeText, {
      x: 842 - codeWidth - 80,
      y: 100,
      size: 9,
      font: bodyFont,
      color: rgb(0.5, 0.5, 0.5),
    });
  }

  const bytes = await pdfDoc.save();
  return bytes;
}

