import React, { Dispatch, SetStateAction } from "react";

type H1Props = {
  setAmount: Dispatch<SetStateAction<number>>;
  setTerm: Dispatch<SetStateAction<number>>;
  setType: Dispatch<SetStateAction<string>>;
  setInterest: Dispatch<SetStateAction<number>>;
};

export default function H1({
  setAmount,
  setTerm,
  setType,
  setInterest,
}: H1Props) {
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
