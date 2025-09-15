import { useState } from "react";

interface EmailVerificationProps {
  email: string;
  onEmailChange: (email: string) => void;
  verificationCode: string;
  onCodeChange: (code: string) => void;
}

export const EmailVerification = ({
  email,
  onEmailChange,
  onCodeChange,
}: EmailVerificationProps) => {
  const [codeInputs, setCodeInputs] = useState(Array(6).fill(""));

  const handleCodeInputChange = (index: number, value: string) => {
    if (value.length > 1) return;

    const newInputs = [...codeInputs];
    newInputs[index] = value;
    setCodeInputs(newInputs);
    onCodeChange(newInputs.join(""));

    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-input-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !codeInputs[index] && index > 0) {
      const prevInput = document.getElementById(`code-input-${index - 1}`);
      prevInput?.focus();
    }
  };

  return (
    <div className="flex flex-col w-[80%]">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold text-foreground mb-4">
          Verify your Email
        </h1>
        <p className="text-md text-gray-500">
          Weve sent a 6-digit code to your email
        </p>
      </div>

      <div className="w-full mx-auto space-y-8 mb-16">
        <div className="w-full flex flex-col items-start justify-center gap-3">
          <label className="text-md font-light text-gray-500 text-foreground">
            Email Address
          </label>
          <div className="w-full py-3 px-2  flex items-center justify-between  bg-form-background border border-gray-300 rounded-full  placeholder:text-form-placeholder focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all">
            <input
              type="url"
              placeholder="Paste a link"
              value={email}
              onChange={(e) => onEmailChange(e.target.value)}
              className="w-full   bg-form-background !outline-none ml-2 focus:outline-none !border-0 border-gray-300 border-r-0 rounded-full text-base placeholder:text-form-placeholder focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
            <button className="cursor-pointer mr-5 text-blue-400 w-[15rem] outline-none !border-0 bg-background  border-l-0 border-form-border rounded-r-full text-primary font-medium hover:bg-muted/50 transition-all">
              Send Verification Code
            </button>
          </div>
        </div>

        <div className="text-center">
          <label className="text-base font-light text-foreground mb-6 block">
            Enter 6-digit code
          </label>
          <div className="flex justify-center gap-3 mb-6">
            {codeInputs.map((value, index) => (
              <input
                key={index}
                id={`code-input-${index}`}
                type="text"
                maxLength={1}
                value={value}
                onChange={(e) => handleCodeInputChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="w-14 h-14 text-center text-xl font-medium bg-form-background border border-gray-400 rounded-xl outline-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            ))}
          </div>
          <button className="text-blue-500 font-medium hover:text-primary/80 transition-colors">
            Resend Code
          </button>
        </div>
      </div>
    </div>
  );
};
