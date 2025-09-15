import React, { useState } from "react";
import {
  Palette,
  Globe,
  Smartphone,
  Zap,
  Megaphone,
  Share2,
  Plus,
  Utensils,
  Monitor,
  GraduationCap,
  Shirt,
  Building,
  HeartPulse,
} from "lucide-react";

const SelectIndustry = () => {
  const [selectedProjects, setSelectedProjects] = useState<string[]>([]);

  const industryOptions = [
    {
      type: "TECHNOLOGY",
      label: "Technology",
      icon: Monitor,
    },
    {
      type: "FOOD_BEVERAGE",
      label: "Food & Beverage",
      icon: Utensils,
    },
    {
      type: "EDUCATION",
      label: "Education",
      icon: GraduationCap,
    },
    {
      type: "FASHION",
      label: "Fashion",
      icon: Shirt,
    },
    {
      type: "REAL_ESTATE",
      label: "Real Estate",
      icon: Building,
    },
    {
      type: "HEALTH_WELLNESS",
      label: "Health & Wellness",
      icon: HeartPulse,
    },
  ];

  const handleProjectSelect = (projectType: string) => {
    setSelectedProjects((prev) => {
      if (prev.includes(projectType)) {
        return prev.filter((type) => type !== projectType);
      } else {
        return [...prev, projectType];
      }
    });
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-4xl font-semibold text-foreground mb-4">
          Select Industry
        </h1>
      </div>

      <div>
        <div className="flex flex-wrap gap-4 mt-4">
          {industryOptions.map((indus) => {
            const IconComponent = indus.icon;
            const isSelected = selectedProjects.includes(indus.type);

            return (
              <div
                key={indus.type}
                onClick={() => handleProjectSelect(indus.type)}
                className={`border-2 p-4 rounded-xl w-[10rem] flex gap-4 items-center justify-center cursor-pointer transition-all duration-200 hover:scale-105 ${
                  isSelected
                    ? "bg-blue-500 !text-white"
                    : "border-gray-200 hover:border-gray-300 text-gray-700"
                }`}
              >
                <IconComponent
                  size={24}
                  className={` ${isSelected ? "text-white" : "text-blue-500"}`}
                />
                <span
                  className={`text-sm font-medium text-center ${
                    isSelected ? "text-white" : "text-gray-700"
                  }`}
                >
                  {indus.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SelectIndustry;
