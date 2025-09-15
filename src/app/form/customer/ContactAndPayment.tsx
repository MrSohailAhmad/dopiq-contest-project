import React, { useState } from "react";
import { CreditCard, Wallet, Banknote } from "lucide-react";

const ContactAndPayment = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState<string>("");

  const paymentMethods = [
    {
      type: "CREDIT_CARD",
      value: "Credit Card",
      icon: CreditCard,
    },
    {
      type: "PAYPAL",
      value: "PayPal",
      icon: Wallet,
    },
    {
      type: "BANK_TRANSFER",
      value: "Bank Transfer",
      icon: Banknote,
    },
  ];

  const handlePaymentSelect = (paymentType: string) => {
    setSelectedPaymentMethod(paymentType);
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-4xl font-semibold text-foreground mb-4">
          Contact and Payment
        </h1>
        <p className="text-md font-light text-muted-foreground">
          How can we reach you and process payments?
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex w-full items-center gap-4">
          <div className="space-y-2 flex flex-col w-full gap-1">
            <label className="text-base font-light text-foreground">
              Email
            </label>
            <input
              type="text"
              placeholder="example@gmail.com"
              // value={formData.companyName}
              // onChange={(e) => handleInputChange("companyName", e.target.value)}
              className="w-full px-6 py-3 bg-form-background border border-gray-300 rounded-full text-base placeholder:text-form-placeholder focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>
          <div className="space-y-2 flex flex-col w-full gap-1">
            <label className="text-base font-light text-foreground">
              Phone number (optional)
            </label>
            <input
              type="text"
              placeholder="+923423423423"
              // value={formData.companyName}
              // onChange={(e) => handleInputChange("companyName", e.target.value)}
              className="w-full px-6 py-3 bg-form-background border border-gray-300 rounded-full text-base placeholder:text-form-placeholder focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
          </div>
        </div>
        <div className="space-y-2 flex flex-col gap-1">
          <label className="text-base font-semibold text-foreground">
            Payment Method
          </label>
          <div className="flex flex-wrap gap-4 mt-2">
            {paymentMethods.map((paymentMethod) => {
              const IconComponent = paymentMethod.icon;
              const isSelected = selectedPaymentMethod === paymentMethod.type;

              return (
                <div
                  key={paymentMethod.type}
                  onClick={() => handlePaymentSelect(paymentMethod.type)}
                  className={`border-2 p-4 rounded-xl w-auto flex gap-3 items-center justify-center cursor-pointer transition-all duration-200 hover:scale-105 ${
                    isSelected
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300 text-gray-700"
                  }`}
                >
                  <IconComponent
                    size={24}
                    className={`${
                      isSelected ? "text-blue-600" : "text-gray-500"
                    }`}
                  />
                  <span
                    className={`text-sm font-medium text-center ${
                      isSelected ? "text-blue-600" : "text-gray-700"
                    }`}
                  >
                    {paymentMethod.value}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <input type="checkbox" />
          Skip payment setup for now
        </div>
      </div>
    </div>
  );
};

export default ContactAndPayment;
