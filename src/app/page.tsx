import CalcRepayments from "@/components/CalcRepayments";
import DisplayPayments from "@/components/DisplayPayments";
import H1 from "@/components/H1";
import HeaderDisplay from "@/components/HeaderDisplay";
import MortgageAmount from "@/components/MortgageAmount";
import MortgageDetails from "@/components/MortgageDetails";
import MortgageType from "@/components/MortgageType";
import LoanItemsContextProvider from "@/contexts/LoanItemsContextProvider";

export default function Home() {
  return (
    <main className="bg-white h-screen w-screen flex items-center justify-center">
      <LoanItemsContextProvider>
        <div className="flex bg-blue-light h-3/4 w-3/4 shadow-2xl p-20 mx-auto ">
          <div className=" bg-white text-black w-1/2 h-full rounded-tl-3xl rounded-bl-3xl shadow-2xl p-6">
            <H1 />
            <MortgageAmount />
            <MortgageDetails />
            <MortgageType />
            <CalcRepayments />
          </div>
          <div className=" bg-blue w-1/2 h-full rounded-br-3xl rounded-tr-3xl shadow-2xl p-6">
            <HeaderDisplay />
            <DisplayPayments />
          </div>
        </div>
      </LoanItemsContextProvider>
    </main>
  );
}
