import React from "react";

const Tabs = ({
  tabs,
  activeTab,
  setActiveTab,
}: {
  tabs: { title: string }[];
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className="flex items-center px-5  gap-2 w-full h-[4rem] rounded-xl bg-white">
      {tabs.map((tab, idx) => (
        <span
          onClick={() => setActiveTab(tab.title)}
          key={idx}
          className={`p-3 ${
            activeTab === tab.title ? "bg-black text-white" : ""
          }  rounded min-w-[8rem] flex items-center cursor-pointer justify-center`}
        >
          {tab.title}
        </span>
      ))}
    </div>
  );
};

export default Tabs;
