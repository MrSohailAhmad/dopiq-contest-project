"use client";
import { AvailSidebar } from "@/app/user-dashboard/components/AvailableBalance";
import { ContestsSection } from "@/app/user-dashboard/components/ContestsSection";
import DashboardCards from "@/app/user-dashboard/components/DashboardCards";
import { HeroSection } from "@/app/user-dashboard/components/HeroSection";
import { DesignGrid } from "@/app/user-dashboard/components/MyRecentDesign";
import { DashboardHeader } from "@/app/user-dashboard/components/UserDashboardHeader";
import { useFormData } from "@/context/FormContext";
import React from "react";

import ChatPage from "./components/Chat";
import { OngoingContests } from "./components/DesignerOngoingContest";
import { DesignerSideBar } from "./components/DesignerSideBar";
import DesignerMarketplace from "./components/DesignMarketPlace";
import FooterPage from "./components/Footer";
import MyContest from "./components/MyContest";
import LogoGallery from "./components/MyLibrary";
import PaymentHistoryPage from "./components/Payments";
import ProfileSettingsPage from "./components/ProfileSetting";
import AILogoForm from "./components/AILogoForm";
import LiveContest from "./components/LiveContest";
import { DirectHireSection } from "./components/DirectHire";
import MySubmissions from "./components/MySubmissionCard";
import DesignerPayments from "./components/DesignerPayments";

const UserDashboard = () => {
  const { userType } = useFormData();
  const [item, setItem] = React.useState(
    userType === "designer" ? "home" : "designer-home"
  );

  const returnUiComponent = (item: string) => {
    switch (item) {
      case "home":
        return (
          <div className="flex flex-col lg:flex-row items-start w-full gap-6">
            <div className="flex-1 w-full">
              <ContestsSection />
              <DesignGrid />
            </div>

            <div className="w-full lg:w-auto lg:flex-shrink-0 lg:sticky lg:top-6 lg:self-start">
              <AvailSidebar />
            </div>
          </div>
        );
      case "designer-home":
        return (
          <div className="flex flex-col lg:flex-row items-start w-full gap-6">
            <div className="flex-1 w-full">
              <OngoingContests />
              {/* <DesignGrid /> */}
            </div>

            <div className="w-full lg:w-auto lg:flex-shrink-0 lg:sticky lg:top-6 lg:self-start">
              <DesignerSideBar />
            </div>
          </div>
        );
      case "my-contest":
        return <MyContest />;
      case "live-contest":
        return <LiveContest />;
      case "designer-direct-hire":
        return <DirectHireSection />;
      case "my-submission":
        return <MySubmissions />;
      case "designer-payments":
        return <DesignerPayments />;

      case "direct-hire":
        return <DesignerMarketplace />;
      case "my-library":
        return <LogoGallery />;
      case "messages":
        return <ChatPage />;
      case "payments":
        return <PaymentHistoryPage />;
      case "profile-settings":
        return <ProfileSettingsPage />;
      case "ai-logo-generation":
        return <AILogoForm />;
    }
  };

  console.log("item", item);

  return (
    <>
      <div className="flex w-full min-h-screen items-start pt-5 justify-center bg-gray-100 dark:bg-gray-900">
        <div className="flex flex-col w-[80%]">
          <DashboardHeader />
          <HeroSection setItem={setItem} />
          {(item === "home" ||
            item === "my-contest" ||
            item === "designer-home" ||
            item === "designer-direct-hire") && <DashboardCards />}

          {returnUiComponent(item)}
        </div>
      </div>
      <FooterPage />
    </>
  );
};

export default UserDashboard;
