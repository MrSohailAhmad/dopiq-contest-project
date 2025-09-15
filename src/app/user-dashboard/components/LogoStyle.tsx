import { BookOpen, Clock, List, Smile, Sparkles, Zap } from "lucide-react";
import { useState } from "react";

const StylePreference = () => {
  const [selectedProjects, setSelectedProjects] = useState<string[]>([]);

  const stylePreferences = [
    {
      type: "MINIMAL",
      label: "Minimal",
      icon: List,
    },
    {
      type: "MODERN",
      label: "Modern",
      icon: Zap,
    },
    {
      type: "VINTAGE",
      label: "Vintage",
      icon: Clock,
    },
    {
      type: "PLAYFUL",
      label: "Playfull",
      icon: Smile,
    },
    {
      type: "ELEGANT",
      label: "Elegant",
      icon: Sparkles, // Using Sparkles as a stand-in for an elegant icon
    },
    {
      type: "ABSTRACT",
      label: "Abstract",
      icon: BookOpen,
    },
    // Note: "Modern" appears twice in the image. I've included it once here.
    // If you need to handle duplicates or a second instance specifically, you can adjust.
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
          {stylePreferences.map((style) => {
            const IconComponent = style.icon;
            const isSelected = selectedProjects.includes(style.type);

            return (
              <div
                key={style.type}
                onClick={() => handleProjectSelect(style.type)}
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
                  {style.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StylePreference;
