"use client";

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

type TLoanItems = {
  setAmount: Dispatch<SetStateAction<number>>;
  setType: Dispatch<SetStateAction<string>>;
  setTerm: Dispatch<SetStateAction<number>>;
  setInterest: Dispatch<SetStateAction<number>>;
  type: string;
  calculateRepayment: () => number;
};

type LoanChildren = {
  children: React.ReactNode;
};

export const LoanItemsContext = createContext<TLoanItems | null>(null);

export default function LoanItemsContextProvider({ children }: LoanChildren) {
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("repayment");
  const [term, setTerm] = useState(0);
  const [interest, setInterest] = useState(0);
  const [monthlyRepayment, setMonthlyRepayment] = useState<number | null>(null);

  const calculateRepayment = (): number => {
    const monthlyInterestRate = interest / 100 / 12;
    const numberOfPayments = term * 12;

    let repayment: number;

    if (type === "repayment") {
      repayment =
        (amount * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    } else {
      repayment = amount * monthlyInterestRate;
    }

    const roundedRepayment = parseFloat(repayment.toFixed(2));
    return roundedRepayment;
  };

  return (
    <LoanItemsContext.Provider
      value={{
        setAmount,
        setType,
        setTerm,
        setInterest,
        type,
        calculateRepayment,
      }}
    >
      {children}
    </LoanItemsContext.Provider>
  );
}

export function useLoanItemsContext() {
  const context = useContext(LoanItemsContext);
  if (!context) {
    throw new Error(`Loan items is not defined component`);
  }
  return context;
}
