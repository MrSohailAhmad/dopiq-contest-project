"use client";

import PhotoUpload from "@/components/PhotoUploader";
import { useState, ChangeEvent } from "react";

export default function AILetsGetStarted() {
  const [data, setData] = useState({
    photo: null as File | null,
    firstName: "",
    lastName: "",
    skills: [],
  });
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-16">
        <div className="flex w-[80%] items-start ">
          <h1 className="text-4xl font-semibold text-foreground mb-4">
            Basic Info
          </h1>
        </div>
        <div className="space-y-2 flex flex-col gap-1">
          <label className="text-base text-black font-light text-foreground">
            Brand Name
          </label>
          <input
            type="text"
            placeholder="Enter your first name"
            value={data.firstName}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setData((prev) => ({ ...prev, firstName: e.target.value }))
            }
            className="w-full px-6 py-3 bg-form-background border border-gray-300 rounded-full text-base placeholder:text-form-placeholder focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>
        <div className="space-y-2 flex flex-col gap-1">
          <label className="text-base font-light text-foreground">
            Tag Line (Optional)
          </label>
          <input
            type="text"
            placeholder="Enter your last name"
            value={data.lastName}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setData((prev) => ({ ...prev, lastName: e.target.value }))
            }
            className="w-full px-6 py-3 bg-form-background border border-gray-300 rounded-full text-base placeholder:text-form-placeholder focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>
      </div>
    </div>
  );
}
