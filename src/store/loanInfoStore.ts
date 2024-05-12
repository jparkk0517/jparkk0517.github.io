import { create } from 'zustand';
export interface IFixedInfo {
  income: number;
  outcome: number;
}
export interface ILoanInfo {
  id: string;
  title: string;
  repaymentPeriod: number;
  monthlyCharge: number;
  loanAmount: number;
  loanInterestRate: number;
  avgAnnualReturn: number;
  firstMoney: number;
  repaymentOfPrincipal: boolean;
}
interface ILoanStore {
  fixedInfo: IFixedInfo;
  loanList: ILoanInfo[];
  setFixedInfo: (state: IFixedInfo) => void;
  addLoanInfo: (loan: ILoanInfo) => void;
  deleteLoanInfo: (id: string) => void;
  changeLoanInfo: (
    id: string,
    key: Omit<keyof ILoanInfo, 'id' | 'title' | 'repaymentOfPrincipal'>,
    value: number,
  ) => void;
}

const initialState = {
  income: 7500000,
  outcome: 3000000,
  loanRate: 0.04,
  avgAnnualReturn: 0.036,
  firstMoney: 220000000,
};
const useLoanInfoStore = create<ILoanStore>((set) => ({
  fixedInfo: initialState,
  loanList: [
    {
      id: '0',
      title: '월세',
      monthlyCharge: 1400000,
      loanAmount: 0,
      repaymentPeriod: 12,
      loanInterestRate: 0.04,
      avgAnnualReturn: 0.036,
      firstMoney: 170000000,
      repaymentOfPrincipal: false,
    },
    {
      id: '1',
      title: '전세',
      monthlyCharge: 0,
      repaymentPeriod: 12,
      loanAmount: 150000000,
      loanInterestRate: 0.04,
      avgAnnualReturn: 0.036,
      firstMoney: 0,
      repaymentOfPrincipal: false,
    },
    {
      id: '2',
      title: '매매',
      monthlyCharge: 0,
      repaymentPeriod: 480,
      loanAmount: 520000000,
      loanInterestRate: 0.04,
      avgAnnualReturn: 0.036,
      firstMoney: 0,
      repaymentOfPrincipal: true,
    },
  ],
  setFixedInfo(fixedInfo) {
    set((nowState) => ({ ...nowState, fixedInfo }));
  },
  addLoanInfo(loanInfo) {
    set((state) => ({ ...state, loanList: [...state.loanList, loanInfo] }));
  },
  deleteLoanInfo(id) {
    set((state) => ({
      ...state,
      loanList: state.loanList.filter((e) => e.id !== id),
    }));
  },
  changeLoanInfo(id, key, value) {
    set((state) => ({
      ...state,
      loanList: state.loanList.map((e) =>
        e.id === id ? { ...e, [key as keyof typeof e]: value } : e,
      ),
    }));
  },
  reset() {
    set((state) => ({ ...state, fixedInfo: initialState }));
  },
}));

export default useLoanInfoStore;
