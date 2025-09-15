import React from "react";
import WithdrawFunds from "./WithDrawFunds";
import TransactionHistory from "./TransectionHistory";

const DesignerPayments = () => {
  return (
    <div className="flex items-center mt-10 justify-center min-h-screen flex-col gap-10">
      <WithdrawFunds />
      <TransactionHistory />
    </div>
  );
};

export default DesignerPayments;
