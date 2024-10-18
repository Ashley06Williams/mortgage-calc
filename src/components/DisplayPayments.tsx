"use client";

import { useLoanItemsContext } from "@/contexts/LoanItemsContextProvider";
import React from "react";

export default function DisplayPayments() {
  const { monthlyRepayment, totalRepayment } = useLoanItemsContext();

  return (
    <div className="mt-9 w-full bg-blue-dark rounded-lg border-t-2 border-yellow h-1/2 p-4">
      <div className="w-full h-1/2 border-b-[2px] border-grey border-opacity-30 flex flex-col justify-center">
        <p className="mb-1 text-slate-300 text-[14px] ">
          Your monthly repayments
        </p>
        <h2 className="text-[35px] font-bold text-yellow ">
          R{monthlyRepayment !== null ? monthlyRepayment : ""}
        </h2>
      </div>

      <p className="mb-1 text-slate-300 text-[14px] mt-6">
        Total you'll repay over the term
      </p>
      <h3 className="text-[20px] text-white font-bold">
        R{totalRepayment !== null ? totalRepayment : ""}
      </h3>
    </div>
  );
}
