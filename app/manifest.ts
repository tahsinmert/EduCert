import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "EduCert - Sertifika Oluştur ve Doğrula",
    short_name: "EduCert",
    description:
      "Online kurslarınız için kolayca sertifika oluşturun ve doğrulayın.",
    start_url: "/",
    display: "standalone",
    background_color: "#F5F7FA",
    theme_color: "#818CF8",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}

