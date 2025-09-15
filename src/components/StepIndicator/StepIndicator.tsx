interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  stepTitle?: string;
}

const StepIndicator = ({
  currentStep,
  totalSteps,
  stepTitle,
}: StepIndicatorProps) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="mb-9 absolute top-10 flex w-[80%] flex-col gap-5">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="text-lg font-semibold text-foreground">
            Step {currentStep} to {totalSteps}
          </div>
        </div>
        {stepTitle && (
          <div className="text-muted-foreground font-light">{stepTitle}</div>
        )}
      </div>
      <div className="w-full bg-gray-100 rounded-full h-2">
        <div
          className="bg-blue-500  h-2 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default StepIndicator;
