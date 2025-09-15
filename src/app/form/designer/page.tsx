"use client";

import { useState } from "react";

import { ArrowLeft, ArrowRight } from "lucide-react";

import PhotoUpload from "@/components/PhotoUploader";
import StepIndicator from "@/components/StepIndicator/StepIndicator";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { EmailVerification } from "./EmailVerification";
import { LanguageSelector } from "./Language";
import { PaymentSetup } from "./Payment";
import { PricingSetup } from "./Pricing";
import { ProfessionalInfo } from "./ProfessionalInfo";
import { SkillsSelection } from "./SkillSelection";
import { useFormData } from "@/context/FormContext";

const page = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();
  const { setUserType } = useFormData();
  const [formData, setFormData] = useState({
    skills: [] as string[],
    firstName: "",
    lastName: "",
    photo: null as File | null,
    password: "",
    confirmPassword: "",
    professionalTitle: "",
    portfolioLink: "",
    bio: "",
    languages: [] as string[],
    selectedLanguage: "English",
    dateOfBirth: "",
    email: "",
    verificationCode: "",
    pricingModel: "Hourly",
    hourlyRate: "",
    currency: "USD",
    minRate: "",
    maxRate: "",
    directHire: true,
    paymentMethod: "Paypal",
    accountDetails: "",
    taxId: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePhotoSelect = (file: File) => {
    setFormData((prev) => ({ ...prev, photo: file }));
  };

  const handleSkillToggle = (skill: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter((s) => s !== skill)
        : [...prev.skills, skill],
    }));
  };

  const handleLanguageToggle = (language: string) => {
    setFormData((prev) => ({
      ...prev,
      languages: prev.languages.includes(language)
        ? prev.languages.filter((l) => l !== language)
        : [...prev.languages, language],
    }));
  };

  // const handleSkip = () => {
  //   handleNext();
  // };

  const handleNext = () => {
    if (currentStep < 8) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setUserType("designer");
      router.push("/user-dashboard");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <SkillsSelection
            selectedSkills={formData.skills}
            onSkillToggle={handleSkillToggle}
          />
        );
      case 2:
        return (
          <div className="flex items-start w-[80%] justify-center flex-col gap-5">
            <div className="">
              <h1 className="text-4xl font-semibold text-foreground mb-4">
                What is your name?
              </h1>
              <p className="text-md font-light text-gray-400">
                Let others recognize you.
              </p>
            </div>

            <PhotoUpload onPhotoSelect={handlePhotoSelect} />

            <div className="flex w-full items-center justify-between gap-4">
              <div className="space-y-2 flex w-full flex-col gap-1">
                <label className="text-base font-light text-foreground">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  // value={data.firstName || ""}
                  // onChange={(e) => setData({ firstName: e.target.value })}
                  className="w-full px-6 py-3 bg-form-background border border-gray-300 rounded-full text-base placeholder:text-form-placeholder focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
              <div className="space-y-2 flex w-full flex-col gap-1">
                <label className="text-base font-light text-foreground">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  // value={data.lastName || ""}
                  // onChange={(e) => setData({ lastName: e.target.value })}
                  className="w-full px-6 py-3 bg-form-background border border-gray-300 rounded-full text-base placeholder:text-form-placeholder focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex items-start w-[80%] justify-center flex-col gap-5">
            <div className="mb-12">
              <h1 className="text-4xl font-semibold text-foreground mb-4">
                Set Your Credentials
              </h1>
              <p className="text-md text-gray-500 font-light">
                Keep your account secure by setting unique credentials
              </p>
            </div>

            <div className=" w-full space-y-8 mb-16">
              <div className="space-y-2">
                <label className="text-base font-medium text-foreground">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your Password"
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  className="w-full px-6 py-3 bg-form-background border border-gray-300 rounded-full text-base placeholder:text-form-placeholder focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-base font-medium text-foreground">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Re enter your Password"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    handleInputChange("confirmPassword", e.target.value)
                  }
                  className="w-full px-6 py-3 bg-form-background border border-gray-300 rounded-full text-base placeholder:text-form-placeholder focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>
            </div>
          </div>
        );
      case 4:
        return (
          <ProfessionalInfo
            professionalTitle={formData.professionalTitle}
            onTitleChange={(title) =>
              handleInputChange("professionalTitle", title)
            }
            portfolioLink={formData.portfolioLink}
            onPortfolioChange={(link) =>
              handleInputChange("portfolioLink", link)
            }
            bio={formData.bio}
            onBioChange={(bio) => handleInputChange("bio", bio)}
          />
        );
      case 5:
        return (
          <LanguageSelector
            languages={formData.languages}
            onLanguageToggle={handleLanguageToggle}
            selectedLanguage={formData.selectedLanguage}
            onLanguageChange={(lang) =>
              handleInputChange("selectedLanguage", lang)
            }
            dateOfBirth={formData.dateOfBirth}
            onDateChange={(date) => handleInputChange("dateOfBirth", date)}
          />
        );
      case 6:
        return (
          <EmailVerification
            email={formData.email}
            onEmailChange={(email) => handleInputChange("email", email)}
            verificationCode={formData.verificationCode}
            onCodeChange={(code) => handleInputChange("verificationCode", code)}
          />
        );
      case 7:
        return (
          <PricingSetup
            pricingModel={formData.pricingModel}
            onPricingModelChange={(model) =>
              handleInputChange("pricingModel", model)
            }
            hourlyRate={formData.hourlyRate}
            onHourlyRateChange={(rate) => handleInputChange("hourlyRate", rate)}
            currency={formData.currency}
            onCurrencyChange={(currency) =>
              handleInputChange("currency", currency)
            }
            minRate={formData.minRate}
            onMinRateChange={(rate) => handleInputChange("minRate", rate)}
            maxRate={formData.maxRate}
            onMaxRateChange={(rate) => handleInputChange("maxRate", rate)}
            directHire={formData.directHire}
            onDirectHireChange={(enabled) =>
              setFormData((prev) => ({ ...prev, directHire: enabled }))
            }
          />
        );
      case 8:
        return (
          <PaymentSetup
            paymentMethod={formData.paymentMethod}
            onPaymentMethodChange={(method) =>
              handleInputChange("paymentMethod", method)
            }
            accountDetails={formData.accountDetails}
            onAccountDetailsChange={(details) =>
              handleInputChange("accountDetails", details)
            }
            taxId={formData.taxId}
            onTaxIdChange={(taxId) => handleInputChange("taxId", taxId)}
          />
        );
      default:
        return (
          <div className="mb-16">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Step {currentStep}
            </h1>
            <p className="text-xl text-muted-foreground">
              More steps coming soon...
            </p>
          </div>
        );
    }
  };

  // const getStepTitle = (step: number) => {
  //   const titles = {
  //     1: "Skills",
  //     2: "Basic Info",
  //     3: "Credentials",
  //     4: "Professional Info",
  //     5: "Languages & DOB",
  //     6: "Email Verification",
  //     7: "Pricing Setup",
  //     8: "Payment Setup",
  //   };
  //   return titles[step as keyof typeof titles] || `Step ${step}`;
  // };

  return (
    <div className="flex relative items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl w-[80%] h-[80%]">
      <StepIndicator
        currentStep={currentStep}
        totalSteps={8}
        stepTitle="Basic Info"
      />

      {renderStepContent()}

      {/* // {step === 3 && <Step3 />} */}
      <div
        className={`flex absolute ${
          currentStep === 8 || currentStep === 4 ? "bottom-10" : "bottom-20"
        }  w-[80%] items-center justify-between`}
      >
        <Button
          onClick={handleBack}
          className="flex items-center justify-center p-2 rounded-full w-[8rem] border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <Button
          onClick={handleNext}
          className="w-auto flex items-center gap-2 justify-center p-3 min-w-[8rem] rounded-full bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white font-medium transition-all"
        >
          {currentStep === 8 ? "Let's go" : "Next"}

          {currentStep < 8 && <ArrowRight className="w-4 h-4 }ml-2" />}
        </Button>
      </div>
    </div>
  );
};
export default page;
