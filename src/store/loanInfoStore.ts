import { create } from 'zustand';
export interface IFixedInfo {
  income: number;
  outcome: number;
  loanRate: number;
  avgAnnualReturn: number;
  firstMoney: number;
  monthlyRentCharge: number;
  monthlyRentDeposit: number;
  jeonseLoanAmount: number;
  buyLoanAmount: number;
}
export interface ILoanInfo {}
interface ILoanStore {
  fixedInfo: IFixedInfo;
  setFixedInfo: (state: IFixedInfo) => void;
}

const initialState = {
  income: 7500000,
  outcome: 3000000,
  loanRate: 0.04,
  avgAnnualReturn: 0.04,
  firstMoney: 220000000,
  monthlyRentCharge: 1200000,
  monthlyRentDeposit: 50000000,
  jeonseLoanAmount: 150000000,
  buyLoanAmount: 450000000,
};
const useLoanInfoStore = create<ILoanStore>((set) => ({
  fixedInfo: initialState,
  setFixedInfo(fixedInfo) {
    set((nowState) => ({ ...nowState, fixedInfo }));
  },
  reset() {
    set((state) => ({ ...state, fixedInfo: initialState }));
  },
}));

export default useLoanInfoStore;
