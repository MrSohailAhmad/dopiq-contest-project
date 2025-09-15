import { ChevronDown } from "lucide-react";

interface PricingSetupProps {
  pricingModel: string;
  onPricingModelChange: (model: string) => void;
  hourlyRate: string;
  onHourlyRateChange: (rate: string) => void;
  currency: string;
  onCurrencyChange: (currency: string) => void;
  minRate: string;
  onMinRateChange: (rate: string) => void;
  maxRate: string;
  onMaxRateChange: (rate: string) => void;
  directHire: boolean;
  onDirectHireChange: (enabled: boolean) => void;
}

export const PricingSetup = ({
  pricingModel,
  onPricingModelChange,
  hourlyRate,
  onHourlyRateChange,
  currency,
  onCurrencyChange,
  minRate,
  onMinRateChange,
  maxRate,
  onMaxRateChange,
}: PricingSetupProps) => {
  const pricingModels = ["Hourly", "Per Project", "Fixed Rate"];
  const currencies = ["USD", "EUR", "GBP", "CAD", "AUD"];

  return (
    <div className="flex flex-col w-[80%]">
      <div className="mb-12">
        <h1 className="text-4xl font-semibold text-foreground mb-4">
          Pricing Setup
        </h1>
        <p className="text-md text-gray-500">Setup your payments criteria..</p>
      </div>

      <div className="w-full flex flex-col gap-5 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col items-start justify-center gap-3 w-full">
            <label className="text-base font-light text-foreground">
              Pricing Model
            </label>
            <div className="relative w-full">
              <select
                value={pricingModel}
                onChange={(e) => onPricingModelChange(e.target.value)}
                className="w-full px-6 py-4 bg-form-background border border-gray-400 rounded-full text-base appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              >
                {pricingModels.map((model) => (
                  <option key={model} value={model}>
                    {model}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          <div className="flex flex-col items-start justify-center gap-3 w-full">
            <label className="text-base font-light text-foreground">
              Hourly Rate
            </label>
            <div className="flex w-full">
              <input
                type="number"
                placeholder="Amount"
                value={hourlyRate}
                onChange={(e) => onHourlyRateChange(e.target.value)}
                className="flex-1 px-6 py-4 bg-form-background border border-gray-400 rounded-l-full text-base placeholder:text-form-placeholder focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              <div className="relative">
                <select
                  value={currency}
                  onChange={(e) => onCurrencyChange(e.target.value)}
                  className="px-6 py-4 bg-form-background border border-l-0  border-gray-400 rounded-r-full text-base appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  {currencies.map((curr) => (
                    <option key={curr} value={curr}>
                      {curr}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-center gap-3 w-full">
          <label className="text-base font-light text-foreground">
            Per Project Rate Range
          </label>
          <div className="flex w-full items-center gap-4">
            <input
              type="number"
              placeholder="Min"
              value={minRate}
              onChange={(e) => onMinRateChange(e.target.value)}
              className="flex-1 px-6 py-4 bg-form-background border border-gray-400 rounded-full text-base placeholder:text-form-placeholder focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
            <span className="text-muted-foreground font-medium">To</span>
            <div className="flex flex-1">
              <input
                type="number"
                placeholder="Max"
                value={maxRate}
                onChange={(e) => onMaxRateChange(e.target.value)}
                className="flex-1 px-6 py-4 bg-form-background border border-gray-400 rounded-l-full text-base placeholder:text-form-placeholder focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              <div className="relative">
                <select
                  value={currency}
                  onChange={(e) => onCurrencyChange(e.target.value)}
                  className="px-6 py-4 bg-form-background border border-l-0 border-gray-400 rounded-r-full text-base appearance-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  {currencies.map((curr) => (
                    <option key={curr} value={curr}>
                      {curr}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            // onClick={() => {
            //   setTheme(theme === "dark" ? "light" : "dark");
            // }}
            className="relative cursor-pointer w-12 h-6 rounded-full bg-blue-400 flex items-center px-1"
          >
            <span
              className={`absolute w-4 h-4 bg-white rounded-full shadow transition-transform duration-300 ${""}`}
            />
          </button>
          <span className="text-base font-light text-gray-500">
            Available for Direct Hire
          </span>
        </div>
      </div>
    </div>
  );
};
