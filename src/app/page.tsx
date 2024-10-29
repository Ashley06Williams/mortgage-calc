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
    <main className="bg-white h-screen w-screen flex md:flex-row items-center justify-center p-4">
      <LoanItemsContextProvider>
        <div className="flex flex-col 2xl:items-center md:flex-row bg-blue-light h-full md:4/5 w-full md:w-4/5 shadow-2xl md:p-10 ">
          <div className="flex flex-col 2xl:justify-center bg-white text-black w-full md:w-1/2 h-full 2xl:h-3/4 md:rounded-tl-3xl md:rounded-bl-3xl shadow-2xl p-4 md:p-6 ">
            <H1 />
            <MortgageAmount />
            <MortgageDetails />
            <MortgageType />
            <div className="flex items-center justify-center md:justify-start">
              <CalcRepayments />
            </div>
          </div>
          <div className="flex flex-col 2xl:justify-center bg-blue w-full md:w-1/2 h-full 2xl:h-3/4 md:rounded-br-3xl md:rounded-tr-3xl shadow-2xl p-4 md:p-6">
            <HeaderDisplay />
            <DisplayPayments />
          </div>
        </div>
      </LoanItemsContextProvider>
    </main>
  );
}
