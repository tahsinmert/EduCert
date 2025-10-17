import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center space-y-4">
        <Loader2 className="w-12 h-12 text-accent animate-spin mx-auto" />
        <p className="text-gray-600">Yükleniyor...</p>
      </div>
    </div>
  );
}

