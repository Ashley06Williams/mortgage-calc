"use client";

import { useLoanItemsContext } from "@/contexts/LoanItemsContextProvider";
import { lableTitleString } from "@/lib/constants";
import React from "react";

export default function MortgageAmount() {
  const { setAmount, amount } = useLoanItemsContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const numberString = e.target.value;

    const cleanedValue = numberString.replace(/,/g, "");

    const numberValue = parseFloat(cleanedValue);

    if (!isNaN(numberValue)) {
      setAmount(numberValue);
    } else {
      setAmount(0);
    }
  };

  return (
    <div className="mt-6">
      <h3 className={lableTitleString}>Mortgage Amount</h3>
      <div className=" flex w-full h-10 bg-white border-grey border-2 rounded-md border-opacity-75">
        <div className="flex bg-blue-light h-full w-1/6 rounded-md items-center justify-center text-blue text-[14px] opacity-80 font-semibold ">
          ZAR
        </div>
        <input
          value={amount !== null ? amount : ""}
          onChange={handleChange}
          className="bg-white w-full p-2 text-blue rounded-tr-md rounded-br-md text-[16px] font-semibold"
        />
      </div>
    </div>
  );
}
