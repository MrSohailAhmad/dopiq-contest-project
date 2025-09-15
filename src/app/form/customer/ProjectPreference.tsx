import React, { useState } from "react";
import {
  Palette,
  Globe,
  Smartphone,
  Zap,
  Megaphone,
  Share2,
  Plus,
} from "lucide-react";

const ProjectPreference = () => {
  const [selectedProjects, setSelectedProjects] = useState<string[]>([]);

  const projectTypes = [
    {
      type: "LOGO_DESIGN",
      value: "Logo Design",
      icon: Palette,
    },
    {
      type: "WEBSITE",
      value: "Website",
      icon: Globe,
    },
    {
      type: "APP",
      value: "App",
      icon: Smartphone,
    },
    {
      type: "BRANDING",
      value: "Branding",
      icon: Zap,
    },
    {
      type: "MARKETING",
      value: "Marketing",
      icon: Megaphone,
    },
    {
      type: "SOCIAL_MEDIA",
      value: "Social media",
      icon: Share2,
    },
    {
      type: "OTHER",
      value: "Other",
      icon: Plus,
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
          Project Preference
        </h1>
        <p className="text-md font-light text-muted-foreground">
          What type of project you are interested in?
        </p>
      </div>

      <div>
        <span className="text-base font-medium text-foreground">
          Project Types (Select one or more)
        </span>
        <div className="flex flex-wrap gap-4 mt-4">
          {projectTypes.map((projectType) => {
            const IconComponent = projectType.icon;
            const isSelected = selectedProjects.includes(projectType.type);

            return (
              <div
                key={projectType.type}
                onClick={() => handleProjectSelect(projectType.type)}
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
                  {projectType.value}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectPreference;
