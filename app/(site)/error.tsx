"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { AlertCircle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
            <AlertCircle className="w-10 h-10 text-red-600" />
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Bir Hata Oluştu
          </h1>
          <p className="text-gray-600">
            Bir şeyler yanlış gitti. Lütfen tekrar deneyin.
          </p>
        </div>
        <Button onClick={reset}>Tekrar Dene</Button>
      </div>
    </div>
  );
}

