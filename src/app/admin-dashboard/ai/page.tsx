import AiStatsCards from "./components/AiStatsCards";
import CreditConsumptions from "./components/CreditConsumpsion";
import LogoTrend from "./components/LogoGenTrends";
import RecentActivity from "./components/RecentUsageActivity";
import TopUserAndCreditConsumption from "./components/TopUserAndCreditConsumption";

const page = () => {
  return (
    <div className="flex items-start w-full flex-col gap-5">
      <AiStatsCards />
      <LogoTrend />
      <CreditConsumptions />
      <TopUserAndCreditConsumption />
      <RecentActivity />
    </div>
  );
};

export default page;
