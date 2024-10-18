"use client";

import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type TLoanItems = {
  setAmount: Dispatch<SetStateAction<number | null>>;
  setType: Dispatch<SetStateAction<string>>;
  setTerm: Dispatch<SetStateAction<number | null>>;
  setInterest: Dispatch<SetStateAction<number | null>>;
  type: string;
  monthlyRepayment: number | null;
  totalRepayment: number | null;
  resetFields: () => void;
  amount: number | null;
  term: number | null;
  interest: number | null;
  calculateRepayment: () => void;
};

type LoanChildren = {
  children: React.ReactNode;
};

export const LoanItemsContext = createContext<TLoanItems | null>(null);

export default function LoanItemsContextProvider({ children }: LoanChildren) {
  const [amount, setAmount] = useState<number | null>(null);
  const [type, setType] = useState<string>("repayment");
  const [term, setTerm] = useState<number | null>(null);
  const [interest, setInterest] = useState<number | null>(null);
  const [monthlyRepayment, setMonthlyRepayment] = useState<number | null>(null);
  const [totalRepayment, setTotalRepayment] = useState<number | null>(null);

  const calculateRepayment = (): void => {
    if (amount === null || term === null || interest === null) {
      console.error("Please provide valid input values.");
      return;
    }

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
    setMonthlyRepayment(roundedRepayment);

    const total =
      type === "repayment"
        ? roundedRepayment * numberOfPayments
        : amount + (amount * interest) / 100;
    setTotalRepayment(parseFloat(total.toFixed(2)));
  };

  const resetFields = () => {
    setAmount(null);
    setType("repayment");
    setTerm(null);
    setInterest(null);
    setMonthlyRepayment(null);
    setTotalRepayment(null);
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
        monthlyRepayment,
        totalRepayment,
        resetFields,
        amount,
        interest,
        term,
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
