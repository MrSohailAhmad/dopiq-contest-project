import { useState } from "react";

const Credentials = () => {
  // const { data, setData } = useFormData();

  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  // const handlePhotoSelect = (file: File) => {
  //   setFormData((prev) => ({ ...prev, photo: file }));
  // };

  return (
    <div>
      <div className="mb-12">
        <h1 className="text-4xl font-semibold text-foreground mb-4">
          Set Your Credentials
        </h1>
        <p className="text-md font-light text-muted-foreground">
          Keep your account secure by Setting unique credentials
        </p>
      </div>
      <div className="flex flex-col gap-5 ">
        <div className="space-y-2 flex flex-col gap-1">
          <label className="text-base font-light text-foreground">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            className="w-full px-6 py-3 bg-form-background border border-gray-300 rounded-full text-base placeholder:text-form-placeholder focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>
        <div className="space-y-2 flex flex-col gap-1">
          <label className="text-base font-light text-foreground">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Re enter your password"
            value={formData.confirmPassword}
            onChange={(e) => handleInputChange("cPassword", e.target.value)}
            className="w-full px-6 py-3 bg-form-background border border-gray-300 rounded-full text-base placeholder:text-form-placeholder focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
          />
        </div>
      </div>
    </div>
  );
};

export default Credentials;
