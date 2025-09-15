"use client";

import { useFormData } from "@/app/context/FormContext";
import { ArrowRight } from "lucide-react";

export default function Step1({ next }: { next: () => void }) {
  const { data, setData } = useFormData();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Step 1 - Basic Info</h1>

      <input
        type="text"
        placeholder="First Name"
        value={data.firstName || ""}
        onChange={(e) => setData({ firstName: e.target.value })}
        className="w-full px-4 py-2 border rounded mb-4"
      />

      <input
        type="text"
        placeholder="Last Name"
        value={data.lastName || ""}
        onChange={(e) => setData({ lastName: e.target.value })}
        className="w-full px-4 py-2 border rounded mb-4"
      />

      <button
        onClick={next}
        className="flex items-center gap-2 px-6 py-2 bg-blue-500 text-white rounded-full"
      >
        Continue <ArrowRight size={18} />
      </button>
    </div>
  );
}
