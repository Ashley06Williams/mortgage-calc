"use client";

import { useLoanItemsContext } from "@/contexts/LoanItemsContextProvider";
import React from "react";

export default function H1() {
  const { setAmount, setTerm, setType, setInterest } = useLoanItemsContext();
  const handleClick = () => {
    setAmount(0);
    setTerm(0);
    setType("repayment");
    setInterest(0);
  };

  return (
    <div className="flex justify-between">
      <h1 className="text-[20px] text-blue">Mortgage Calculator</h1>
      <button
        onClick={handleClick}
        className="text-slate-500 text-[15px] underline opacity-70 hover:opacity-100"
      >
        Clear All
      </button>
    </div>
  );
}
