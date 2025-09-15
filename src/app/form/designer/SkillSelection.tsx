import { useState } from "react";

interface SkillsSelectionProps {
  selectedSkills: string[];
  onSkillToggle: (skill: string) => void;
}

export const SkillsSelection = ({
  selectedSkills,
  onSkillToggle,
}: SkillsSelectionProps) => {
  const [customSkill, setCustomSkill] = useState("");

  const predefinedSkills = [
    "Logo Design",
    "UI/UX Design",
    "Brand Identity",
    "Illustrations",
    "Motion Graphics",
    "Packaging Design",
    "3D Modeling",
    "Web Design",
    "Print Design",
    "Social media Graphics",
    "Typography",
    "Character Design",
  ];

  const handleAddCustomSkill = () => {
    if (customSkill.trim() && !selectedSkills.includes(customSkill.trim())) {
      onSkillToggle(customSkill.trim());
      setCustomSkill("");
    }
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex w-[80%] items-start flex-col justify-center">
        <div className="mb-12">
          <h1 className="text-4xl font-semibold text-foreground mb-4">
            Tell us your top skills
          </h1>
          <p className="text-md text-gray-500 font-light">
            Select at least one skill that best represents your expertise
          </p>
        </div>

        <div className="mb-8 flex flex-col">
          <div className="flex flex-wrap gap-3 mb-8">
            {predefinedSkills.map((skill) => (
              <button
                key={skill}
                onClick={() => onSkillToggle(skill)}
                className={`px-6 py-3 rounded-full cursor-pointer border border-gray-200 text-base font-light transition-all ${
                  selectedSkills.includes(skill)
                    ? "bg-blue-500 text-white"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {skill}
              </button>
            ))}
          </div>

          <div className="flex gap-3 items-center">
            <input
              type="text"
              placeholder="Add Custom Skill"
              value={customSkill}
              onChange={(e) => setCustomSkill(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleAddCustomSkill()}
              className="flex-1 px-6 py-4 bg-form-background border border-gray-400 rounded-full text-base placeholder:text-form-placeholder focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
            <button
              onClick={handleAddCustomSkill}
              className="px-8 py-4 rounded-full cursor-pointer border border-gray-200 bg-muted text-muted-foreground hover:bg-muted/80 transition-all font-medium"
            >
              + Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
