import { ChevronDown } from "lucide-react";

interface PaymentSetupProps {
  paymentMethod: string;
  onPaymentMethodChange: (method: string) => void;
  accountDetails: string;
  onAccountDetailsChange: (details: string) => void;
  taxId: string;
  onTaxIdChange: (taxId: string) => void;
}

export const PaymentSetup = ({
  paymentMethod,
  onPaymentMethodChange,
  accountDetails,
  onAccountDetailsChange,
  taxId,
  onTaxIdChange,
}: PaymentSetupProps) => {
  const paymentMethods = [
    "Paypal",
    "Bank Transfer",
    "Stripe",
    "Wise",
    "Crypto",
  ];

  return (
    <div className="flex flex-col w-[80%]">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold text-foreground">
          Pricing Setup
        </h1>
        <p className="text-md text-gray-500">Setup your payments criteria..</p>
      </div>

      <div className="w-full flex flex-col gap-5 ">
        <div className="flex flex-col items-start justify-center gap-3 w-full">
          <label className="text-base font-light text-foreground">
            Payment Method
          </label>
          <div className="relative w-full">
            <select
              value={paymentMethod}
              onChange={(e) => onPaymentMethodChange(e.target.value)}
              className="w-full px-6 py-4 bg-form-background border border-gray-400 rounded-full text-base appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            >
              {paymentMethods.map((method) => (
                <option key={method} value={method}>
                  {method}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
          </div>
        </div>

        <div className="flex flex-col items-start justify-center gap-3 w-full">
          <label className="text-base font-light text-foreground">
            Account Details
          </label>
          <input
            type="text"
            placeholder="Enter Account Details"
            value={accountDetails}
            onChange={(e) => onAccountDetailsChange(e.target.value)}
            className="w-full px-6 py-4 bg-form-background  border border-gray-400 rounded-full  text-base placeholder:text-form-placeholder focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>

        <div className="flex flex-col items-start justify-center gap-3 w-full">
          <label className="text-base font-light text-foreground">
            Tax ID / Verification (Optional)
          </label>
          <input
            type="text"
            placeholder="Enter Tax Or Identification Number"
            value={taxId}
            onChange={(e) => onTaxIdChange(e.target.value)}
            className="w-full px-6 py-4 bg-form-background border border-gray-400 rounded-full text-base placeholder:text-form-placeholder focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>
      </div>
    </div>
  );
};
