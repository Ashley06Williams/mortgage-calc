"use client";

import CalcRepayments from "@/components/CalcRepayments";
import H1 from "@/components/H1";
import MortgageAmount from "@/components/MortgageAmount";
import MortgageDetails from "@/components/MortgageDetails";
import MortgageType from "@/components/MortgageType";
import { useState } from "react";

export default function Home() {
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("repayment");
  const [term, setTerm] = useState(0);
  const [interest, setInterest] = useState(0);

  return (
    <main className="bg-white h-screen w-screen flex items-center justify-center">
      <div className="flex bg-blue-light h-3/4 w-3/4 shadow-2xl p-20 mx-auto ">
        <div className=" bg-white text-black w-1/2 h-full rounded-tl-3xl rounded-bl-3xl shadow-2xl p-6">
          <H1
            setAmount={setAmount}
            setType={setType}
            setTerm={setTerm}
            setInterest={setInterest}
          />
          <MortgageAmount setAmount={setAmount} />
          <MortgageDetails setTerm={setTerm} setInterest={setInterest} />
          <MortgageType setType={setType} type={type} />
          <CalcRepayments />
        </div>
        <div className=" bg-blue-dark w-1/2 h-full rounded-br-3xl rounded-tr-3xl shadow-2xl"></div>
      </div>
    </main>
  );
}
