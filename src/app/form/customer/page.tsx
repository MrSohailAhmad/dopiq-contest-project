"use client";

import { useFormData } from "@/app/context/FormContext";
import StepIndicator from "@/components/StepIndicator/StepIndicator";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import BusinessInformation from "./BusinessInformation";
import ContactAndPayment from "./ContactAndPayment";
import Credentials from "./Credentials";
import LetsGetStarted from "./LetsGetStarted";
import ProjectPreference from "./ProjectPreference";
import VerifyYourEmail from "./VerifyYourEmail";

export default function CustomerForm() {
  const [step, setStep] = useState(1);
  const { data } = useFormData();
  const router = useRouter();

  const totalSteps = 6;

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
    console.log("Submitting form data:", data);
    // TODO: send `data` to API or server
    // Navigate to user dashboard after successful submission
    router.push("/user-dashboard");
  };

  return (
    <div className="flex relative items-center justify-center bg-white border border-gray-200 rounded-2xl w-[70%] h-[80%]">
      <div className="w-[80%] mx-auto">
        <StepIndicator
          currentStep={step}
          totalSteps={6}
          stepTitle="Basic Info"
        />
        <div className="mb-10">
          {step === 1 && <LetsGetStarted />}
          {step === 2 && <Credentials />}
          {step === 3 && <BusinessInformation />}
          {step === 4 && <ProjectPreference />}
          {step === 5 && <ContactAndPayment />}
          {step === 6 && <VerifyYourEmail />}
        </div>
        {/* // {step === 3 && <Step3 />} */}
        <div className="flex absolute bottom-20 w-[80%] items-center justify-between">
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
            {step === 6 ? "Verify and Complete" : "Continue"}

            {step < 6 && <ArrowRight className="w-4 h-4 }ml-2" />}
          </Button>
        </div>
      </div>
    </div>
  );
}
