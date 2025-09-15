"use client";
import { createContext, useContext, useState, ReactNode } from "react";

type FormData = {
  firstName?: string;
  lastName?: string;
  skills?: string[];
  photo?: File | null;
  // add more fields per form
};

type FormContextType = {
  data: FormData;
  setData: (values: Partial<FormData>) => void;
  reset: () => void;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const [data, setFormData] = useState<FormData>({});

  const setData = (values: Partial<FormData>) =>
    setFormData((prev) => ({ ...prev, ...values }));

  const reset = () => setFormData({});

  return (
    <FormContext.Provider value={{ data, setData, reset }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormData = () => {
  const context = useContext(FormContext);
  if (!context) throw new Error("useFormData must be inside FormProvider");
  return context;
};
