"use client";

import { useLoanItemsContext } from "@/contexts/LoanItemsContextProvider";
import React from "react";

export default function CalcRepayments() {
  const { calculateRepayment } = useLoanItemsContext();

  const handleCalculate = () => {
    const repayment = calculateRepayment();

    console.log(repayment);
  };

  return (
    <button
      onClick={handleCalculate}
      className="mt-12 bg-yellow w-3/4 px-2 py-3 rounded-3xl text-blue font-semibold text-[15px] hover:bg-[#F8F887]"
    >
      Calculate Repayments
    </button>
  );
}
