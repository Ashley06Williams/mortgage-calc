"use client";

import { useLoanItemsContext } from "@/contexts/LoanItemsContextProvider";
import { lableTitleString } from "@/lib/constants";

import React from "react";

export default function MortgageDetails() {
  const { setTerm, setInterest, term, interest } = useLoanItemsContext();

  const handleInterestChange = (e) => {
    const value = e.target.value;

    // Allow only numbers and one decimal point
    const regex = /^[0-9]*\.?[0-9]*$/;

    // Check if the new value matches the regex
    if (regex.test(value) || value === "") {
      setInterest(value === "" ? null : parseFloat(value)); // Store as float or null for empty
    }
  };

  return (
    <div className="flex space-x-10 mt-4">
      <div className="flex-col">
        <h3 className={lableTitleString}>Mortgage Term</h3>
        <div className="flex items-center justify-center border-2 border-grey rounded-md">
          <input
            value={term !== null ? term : ""}
            onChange={(e) => {
              e.preventDefault();
              const numberString = e.target.value;
              setTerm(+numberString);
            }}
            className="bg-white w-[100px] md:w-[140px] p-2 text-blue rounded-md text-[16px] font-semibold"
          />
          <div className="p-2 bg-blue-light rounded-tr-md rounded-br-md">
            years
          </div>
        </div>
      </div>
      <div>
        <h3 className={lableTitleString}>Interest Rate</h3>
        <div className="flex items-center justify-center min-w-470px border-2 border-grey rounded-md">
          <input
            type="text"
            className="bg-white w-[100px] md:w-[140px] p-2 text-blue rounded-md text-[16px] font-semibold"
            onChange={handleInterestChange}
            value={interest !== null ? interest : ""}
          />
          <div className="p-2 bg-blue-light w-10 rounded-tr-md rounded-br-md">
            %
          </div>
        </div>
      </div>
    </div>
  );
}
