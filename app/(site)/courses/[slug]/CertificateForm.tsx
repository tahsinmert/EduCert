"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Loader2 } from "lucide-react";

interface Template {
  _id: string;
  title: string;
  slug: string;
  primaryColor: string;
}

interface CertificateFormProps {
  courseId: string;
  templates: Template[];
}

export function CertificateForm({ courseId, templates }: CertificateFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    userName: "Tahsin Mert Mutlu",
    templateId: templates[0]?._id || "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/certificates/issue", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: formData.userName,
          courseId,
          templateId: formData.templateId,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Sertifika oluşturulamadı");
      }

      router.push(`/certificate/${data.publicUrl}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Bir hata oluştu");
    } finally {
      setIsLoading(false);
    }
  };

  if (templates.length === 0) {
    return (
      <div className="text-gray-500">
        Şu anda sertifika şablonu bulunmamaktadır. Lütfen daha sonra tekrar
        deneyin.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <Input
        label="Adınız Soyadınız *"
        type="text"
        placeholder="Örn: Tahsin Mert Mutlu"
        value={formData.userName}
        onChange={(e) =>
          setFormData({ ...formData, userName: e.target.value })
        }
        required
        disabled={isLoading}
      />

      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">
          Sertifika Şablonu *
        </label>
        <select
          className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
          value={formData.templateId}
          onChange={(e) =>
            setFormData({ ...formData, templateId: e.target.value })
          }
          required
          disabled={isLoading}
        >
          {templates.map((template) => (
            <option key={template._id} value={template._id}>
              {template.title}
            </option>
          ))}
        </select>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
          {error}
        </div>
      )}

      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
        {isLoading ? "Oluşturuluyor..." : "Sertifikamı Oluştur"}
      </Button>
    </form>
  );
}

