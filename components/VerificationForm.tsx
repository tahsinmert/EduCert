"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function VerificationForm() {
  const [code, setCode] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (code.trim()) {
      router.push(`/verify/${code.trim()}`);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto"
    >
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Doğrulama Kodunu Girin"
        className="w-full px-4 py-3 border border-white/30 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/50 font-sans focus:outline-none focus:border-white transition-colors"
        required
      />
      <button
        type="submit"
        className="w-full sm:w-auto px-8 py-3 bg-white text-foreground hover:bg-white/90 transition-colors font-sans text-sm tracking-wide whitespace-nowrap"
      >
        Doğrula
      </button>
    </form>
  );
}

