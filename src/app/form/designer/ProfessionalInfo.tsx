import { useState } from "react";

interface ProfessionalInfoProps {
  professionalTitle: string;
  onTitleChange: (title: string) => void;
  portfolioLink: string;
  onPortfolioChange: (link: string) => void;
  bio: string;
  onBioChange: (bio: string) => void;
}

export const ProfessionalInfo = ({
  professionalTitle,
  onTitleChange,
  portfolioLink,
  onPortfolioChange,
  bio,
  onBioChange,
}: ProfessionalInfoProps) => {
  const [charCount, setCharCount] = useState(bio.length);

  const handleBioChange = (value: string) => {
    if (value.length <= 500) {
      onBioChange(value);
      setCharCount(value.length);
    }
  };

  return (
    <div className="flex flex-col w-[80%]">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold text-foreground mb-4">
          Tell us a bit about yourself
        </h1>
        <p className="text-md text-gray-600 dark:text-gray-400 font-light">
          Help clients understand your expertise
        </p>
      </div>

      <div className="w-full flex items-start justify-center flex-col gap-5">
        <div className="flex w-full items-center gap-4 justify-between">
          <div className="w-full flex flex-col gap-3">
            <label className="text-base font-light text-gray-600 dark:text-gray-400 mb-1">
              Professional Title
            </label>
            <input
              type="text"
              placeholder="e.g., Creative Logo Designers"
              value={professionalTitle}
              onChange={(e) => onTitleChange(e.target.value)}
              className="w-full px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full text-base placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 dark:text-gray-100"
            />
          </div>

          <div className="w-full flex flex-col gap-1">
            <label className="text-base font-light text-gray-600 dark:text-gray-400 mb-3">
              Upload Your Portfolio Or Paste A Link Below
            </label>
            <div className="w-full py-3 px-2 flex items-center justify-between bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-full placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
              <input
                type="url"
                placeholder="Paste a link"
                value={portfolioLink}
                onChange={(e) => onPortfolioChange(e.target.value)}
                className="w-full bg-white dark:bg-gray-800 !outline-none ml-2 focus:outline-none !border-0 border-r-0 rounded-full text-base placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-gray-900 dark:text-gray-100"
              />
              <button className="cursor-pointer mr-5 text-blue-600 dark:text-blue-400 outline-none !border-0 bg-white dark:bg-gray-800 border-l-0 border-gray-300 dark:border-gray-600 rounded-r-2xl font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all">
                Upload
              </button>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-1">
          <label className="text-base font-light text-gray-600 dark:text-gray-400 mb-3">
            Short Bio
          </label>
          <div className="relative">
            <textarea
              placeholder="Describe your experience, style, and what makes you unique..."
              value={bio}
              onChange={(e) => handleBioChange(e.target.value)}
              rows={6}
              className="w-full px-6 py-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-2xl text-base placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-gray-900 dark:text-gray-100"
            />
            <div className="absolute bottom-4 right-4 text-sm text-gray-500 dark:text-gray-400">
              {charCount}/500
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
