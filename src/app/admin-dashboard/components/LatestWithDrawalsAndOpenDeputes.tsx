import React from "react";
import LatestWithDrawls from "./LatestWithDrawls";
import OpenDisputes from "./OpenDesputes";

const LatestWithDrawalsAndOpenDeputes = () => {
  return (
    <div className="flex items-center justify-center gap-5">
      <LatestWithDrawls />
      <OpenDisputes />
    </div>
  );
};

export default LatestWithDrawalsAndOpenDeputes;
