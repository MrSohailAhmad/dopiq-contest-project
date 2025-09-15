import { ChevronDown, X } from "lucide-react";

interface LanguageSelectorProps {
  languages: string[];
  onLanguageToggle: (language: string) => void;
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
  dateOfBirth: string;
  onDateChange: (date: string) => void;
}

export const LanguageSelector = ({
  languages,
  onLanguageToggle,
  selectedLanguage,
  onLanguageChange,
  dateOfBirth,
  onDateChange,
}: LanguageSelectorProps) => {
  const predefinedLanguages = [
    { name: "English", level: "Fluent" },
    { name: "Hindi", level: "Native" },
    { name: "Spanish", level: "Conversational" },
    { name: "French", level: "Basic" },
  ];

  const languageOptions = [
    "English",
    "Spanish",
    "French",
    "German",
    "Italian",
    "Portuguese",
    "Hindi",
    "Chinese",
  ];

  return (
    <div className="flex flex-col w-[80%]">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold text-foreground mb-4">
          Languages & Date of Birth
        </h1>
        <p className="text-md font-light">
          Help us match you with the right clients
        </p>
      </div>

      <div className="mb-8">
        <div className="mb-6">
          <label className="text-base font-light text-foreground mb-4 block">
            Languages You Speak
          </label>
          <div className="flex flex-wrap gap-3 mb-6">
            {predefinedLanguages.map((lang) => (
              <div
                key={lang.name}
                className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-b from-[#fff] to-[#dddcdc] rounded-full bg-white border border-gray-300 transition-all ${
                  languages.includes(lang.name)
                    ? "bg-muted border-muted text-foreground"
                    : "bg-background border-form-border text-muted-foreground"
                }`}
              >
                <span>
                  {lang.name} ({lang.level})
                </span>
                <button
                  onClick={() => onLanguageToggle(lang.name)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="flex items-center gap-4 flex-col w-full">
            <label className="text-base w-full font-light text-foreground">
              Language
            </label>
            <div className="relative w-full">
              <select
                value={selectedLanguage}
                onChange={(e) => onLanguageChange(e.target.value)}
                className="w-full px-6 py-4 bg-form-background border border-gray-200 rounded-full text-base appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              >
                {languageOptions.map((lang) => (
                  <option key={lang} value={lang}>
                    {lang}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          <div className="flex items-center gap-4 flex-col w-full">
            <label className="text-base w-full font-light text-foreground">
              Date of Birth
            </label>
            <div className="relative w-full">
              <input
                type="date"
                value={dateOfBirth}
                onChange={(e) => onDateChange(e.target.value)}
                className="w-full px-6 py-4 bg-form-background border border-gray-200  rounded-full text-base focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              {/* <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" /> */}
            </div>
          </div>
        </div>

        <button
          onClick={() => onLanguageToggle(selectedLanguage)}
          className="text-blue-500 font-light hover:text-primary/80 transition-colors"
        >
          + Add another language
        </button>
      </div>
    </div>
  );
};
