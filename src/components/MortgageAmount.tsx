import { lableTitleString } from "@/lib/constants";
import React, { Dispatch, SetStateAction } from "react";

type MortgageAmountProps = {
  setAmount: Dispatch<SetStateAction<number>>;
};

export default function MortgageAmount({ setAmount }: MortgageAmountProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const numberString = e.target.value;
    setAmount(+numberString);
  };

  return (
    <div className="mt-6">
      <h3 className={lableTitleString}>Mortgage Amount</h3>
      <div className=" flex w-full h-10 bg-white border-grey border-2 rounded-md border-opacity-75">
        <div className="flex bg-blue-light h-full w-1/6 rounded-md items-center justify-center text-blue text-[14px] opacity-80 font-semibold ">
          ZAR
        </div>
        <input
          onChange={handleChange}
          className="bg-white w-full p-2 text-blue rounded-tr-md rounded-br-md text-[16px] font-semibold"
        />
      </div>
    </div>
  );
}
