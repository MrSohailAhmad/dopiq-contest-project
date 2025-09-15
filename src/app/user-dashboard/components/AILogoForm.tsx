"use client";

import BusinessInformation from "@/app/form/customer/BusinessInformation";
import ProjectPreference from "@/app/form/customer/ProjectPreference";
import StepIndicator from "@/components/StepIndicator/StepIndicator";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AILetsGetStarted from "./AIlogoFirstStep";
import SelectIndustry from "./AISelectIndustry";
import StylePreference from "./LogoStyle";
import LogoVariationsStep from "./GeneratedLogoVariations";

export default function AILogoForm() {
  const [step, setStep] = useState(1);

  const router = useRouter();

  const totalSteps = 5;

  const next = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const back = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    // TODO: send `data` to API or server
    // Navigate to user dashboard after successful submission
    router.push("/user-dashboard");
  };

  return (
    <div className="flex relative flex-col items-center my-10 justify-center bg-white border border-gray-200 rounded-2xl w-full py-10 h-[90vh]">
      <div className="w-[80%] mx-auto">
        {step === 5 ? (
          ""
        ) : (
          <StepIndicator
            currentStep={step}
            totalSteps={totalSteps}
            stepTitle="Basic Info"
          />
        )}
        <div className="mb-10">
          {step === 1 && <AILetsGetStarted />}
          {step === 2 && <SelectIndustry />}
          {step === 3 && <StylePreference />}
          {step === 4 && <ProjectPreference />}
          {step === 5 && <LogoVariationsStep />}
        </div>

        {step === 5 ? (
          ""
        ) : (
          <div className="flex  w-full items-center justify-between">
            <Button
              onClick={back}
              className="flex items-center justify-center p-2 rounded-full w-[8rem]  border border-gray-300 hover:bg-muted/10 transition-all"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            <Button
              onClick={next}
              className=" w-auto flex items-center gap-2 justify-center p-3  rounded-full bg-primary hover:bg-primary/90 text-primary-foreground text-white bg-blue-500 font-medium transition-all"
            >
              {step === 4 ? "Generate" : "Continue"}

              {step < 4 && <ArrowRight className="w-4 h-4 }ml-2" />}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
