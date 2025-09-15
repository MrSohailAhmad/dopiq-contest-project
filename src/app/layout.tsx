import type { Metadata } from "next";

import "./globals.css";
import { Providers } from "./ThemeProvider";
import { FormProvider } from "@/context/FormContext";

export const metadata: Metadata = {
  title: "Home Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <FormProvider>
          <Providers>{children}</Providers>
        </FormProvider>
      </body>
    </html>
  );
}
