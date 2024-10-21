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
    <main className="bg-white h-screen w-screen flex md:flex-row items-center justify-center">
      <LoanItemsContextProvider>
        <div className="flex flex-col  md:flex-row bg-blue-light h-full md:h-3/4 w-full md:w-3/4 shadow-2xl md:p-20 mx-auto ">
          <div className=" bg-white text-black w-full md:w-1/2 h-full rounded-tl-3xl rounded-bl-3xl shadow-2xl p-6">
            <H1 />
            <MortgageAmount />
            <MortgageDetails />
            <MortgageType />
            <div className="flex items-center justify-center md:justify-start">
              <CalcRepayments />
            </div>
          </div>
          <div className=" bg-blue w-full md:w-1/2 h-full rounded-br-3xl rounded-tr-3xl shadow-2xl p-6">
            <HeaderDisplay />
            <DisplayPayments />
          </div>
        </div>
      </LoanItemsContextProvider>
    </main>
  );
}
