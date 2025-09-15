"use client";

import { useFormData } from "@/app/context/FormContext";
import PhotoUpload from "@/components/PhotoUploader";

export default function LetsGetStarted() {
  const { data, setData } = useFormData();

  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl font-semibold text-foreground mb-4">
          Welcome! Lets get started
        </h1>
        <p className="text-md font-light text-muted-foreground">
          Select at least one skill that best represents your expertise
        </p>
      </div>

      <PhotoUpload onPhotoSelect={(file) => setData({ photo: file })} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        <div className="space-y-2 flex flex-col gap-1">
          <label className="text-base font-light text-foreground">
            First Name
          </label>
          <input
            type="text"
            placeholder="Enter your first name"
            value={data.firstName || ""}
            onChange={(e) => setData({ firstName: e.target.value })}
            className="w-full px-6 py-3 bg-form-background border border-gray-300 rounded-full text-base placeholder:text-form-placeholder focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>
        <div className="space-y-2 flex flex-col gap-1">
          <label className="text-base font-light text-foreground">
            Last Name
          </label>
          <input
            type="text"
            placeholder="Enter your last name"
            value={data.lastName || ""}
            onChange={(e) => setData({ lastName: e.target.value })}
            className="w-full px-6 py-3 bg-form-background border border-gray-300 rounded-full text-base placeholder:text-form-placeholder focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>
      </div>
    </div>
  );
}
