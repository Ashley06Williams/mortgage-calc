"use client";

import { useLoanItemsContext } from "@/contexts/LoanItemsContextProvider";
import React from "react";

export default function H1() {
  const { resetFields } = useLoanItemsContext();

  return (
    <div className="flex justify-between ">
      <h1 className="text-[20px] text-blue font-semibold">
        Mortgage Calculator
      </h1>
      <button
        onClick={() => resetFields()}
        className="text-slate-500 text-[15px] underline opacity-70 hover:opacity-100"
      >
        Clear All
      </button>
    </div>
  );
}
