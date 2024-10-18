import { lableTitleString } from "@/lib/constants";
import React, { Dispatch, SetStateAction } from "react";

type MortgageDetailsProps = {
  setTerm: Dispatch<SetStateAction<number>>;
  setInterest: Dispatch<SetStateAction<number>>;
};

export default function MortgageDetails({
  setTerm,
  setInterest,
}: MortgageDetailsProps) {
  return (
    <div className="flex space-x-10 mt-4">
      <div className="flex-col">
        <h3 className={lableTitleString}>Mortgage Term</h3>
        <div className="flex items-center justify-center border-2 border-grey rounded-md">
          <input
            onChange={(e) => {
              e.preventDefault();
              const numberString = e.target.value;
              setTerm(+numberString);
            }}
            type="text"
            className="bg-white w-[140px] p-2 text-blue rounded-md text-[16px] font-semibold"
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
            className="bg-white w-[140px] p-2 text-blue rounded-md text-[16px] font-semibold"
            onChange={(e) => {
              e.preventDefault();
              const numberString = e.target.value;
              setInterest(+numberString);
            }}
          />
          <div className="p-2 bg-blue-light w-10 rounded-tr-md rounded-br-md">
            %
          </div>
        </div>
      </div>
    </div>
  );
}