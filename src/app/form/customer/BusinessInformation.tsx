import { useState } from "react";

const BusinessInformation = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    companyType: "",
    industry: "",
    confirmPassword: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl font-semibold text-foreground mb-4">
          Business Information
        </h1>
        <p className="text-md font-light text-muted-foreground">
          Tell us about your Business
        </p>
      </div>
      <div className="flex flex-col gap-5 ">
        <div className="space-y-2 flex flex-col gap-1">
          <label className="text-base font-light text-foreground">
            Company/Brand Name
          </label>
          <input
            type="text"
            placeholder="Acme inc."
            value={formData.companyName}
            onChange={(e) => handleInputChange("companyName", e.target.value)}
            className="w-full px-6 py-3 bg-form-background border border-gray-300 rounded-full text-base placeholder:text-form-placeholder focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>
        <div className="flex w-full gap-4">
          <div className="space-y-2 flex w-full flex-col gap-1">
            <label className="text-base font-light text-foreground">
              Company Type
            </label>
            <select
              value={formData.companyType || ""}
              onChange={(e) => handleInputChange("companyType", e.target.value)}
              className="w-full px-6 py-3 bg-form-background border border-gray-300 rounded-full text-base placeholder:text-form-placeholder focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=US-ASCII,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'><path fill='%23666' d='M2 0L0 2h4zm0 5L0 3h4z'/></svg>')] bg-no-repeat bg-[right_1rem_center] bg-[length:12px]"
            >
              <option value="" disabled>
                Select company type
              </option>
              <option value="startup">Startup</option>
              <option value="small-business">Small Business</option>
              <option value="medium-business">Medium Business</option>
              <option value="enterprise">Enterprise</option>
              <option value="non-profit">Non-Profit</option>
              <option value="government">Government</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="space-y-2 w-full flex flex-col gap-1">
            <label className="text-base font-light text-foreground">
              Industry
            </label>
            <select
              value={formData.industry || ""}
              onChange={(e) => handleInputChange("industry", e.target.value)}
              className="w-full px-6 py-3 bg-form-background border border-gray-300 rounded-full text-base placeholder:text-form-placeholder focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=US-ASCII,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'><path fill='%23666' d='M2 0L0 2h4zm0 5L0 3h4z'/></svg>')] bg-no-repeat bg-[right_1rem_center] bg-[length:12px]"
            >
              <option value="" disabled>
                Select industry
              </option>
              <option value="technology">Technology</option>
              <option value="healthcare">Healthcare</option>
              <option value="finance">Finance</option>
              <option value="education">Education</option>
              <option value="retail">Retail</option>
              <option value="manufacturing">Manufacturing</option>
              <option value="real-estate">Real Estate</option>
              <option value="consulting">Consulting</option>
              <option value="media">Media & Entertainment</option>
              <option value="automotive">Automotive</option>
              <option value="food-beverage">Food & Beverage</option>
              <option value="fashion">Fashion & Apparel</option>
              <option value="travel">Travel & Tourism</option>
              <option value="energy">Energy</option>
              <option value="agriculture">Agriculture</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessInformation;
