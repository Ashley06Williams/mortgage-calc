"use client";

import { useLoanItemsContext } from "@/contexts/LoanItemsContextProvider";
import { lableTitleString } from "@/lib/constants";

import React from "react";

export default function MortgageType() {
  const { setType, type } = useLoanItemsContext();

  const handleActive = (type: "repayment" | "interest") => {
    setType(type);
  };

  return (
    <div className="mt-4">
      <h3 className={lableTitleString}>Mortgage Type</h3>

      <div
        onClick={() => handleActive("repayment")}
        className={
          type === "repayment"
            ? "mt-2 border-2 border-yellow bg-yellow-light rounded-md p-2 flex items-center cursor-pointer"
            : "mt-2 border-2 border-grey rounded-md p-2 flex items-center cursor-pointer"
        }
      >
        <div
          className={
            type === "repayment"
              ? "border-2 border-spacing-2 border-yellow bg-white rounded-full w-4 h-4"
              : "border-2 border-spacing-1 border-grey rounded-full w-4 h-4"
          }
        />
        <p className="ml-4 text-blue font-semibold text-[16px]">Repayment</p>
      </div>

      <div
        onClick={() => handleActive("interest")}
        className={
          type === "interest"
            ? "mt-2 border-2 border-yellow bg-yellow-light rounded-md p-2 flex items-center cursor-pointer"
            : "mt-2 border-2 border-grey rounded-md p-2 flex items-center cursor-pointer"
        }
      >
        <div
          className={
            type === "interest"
              ? "border-2 border-spacing-2 border-yellow bg-white rounded-full w-4 h-4"
              : "border-2 border-spacing-1 border-grey rounded-full w-4 h-4"
          }
        />
        <p className="ml-4 text-blue font-semibold text-[16px]">
          Interest Only
        </p>
      </div>
    </div>
  );
}
