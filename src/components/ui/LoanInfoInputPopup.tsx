import { ILoanInfo } from '@/store/loanInfoStore';
import { useRef, useState } from 'react';
import Modal from '../common/Modal';
import Toggle from '../common/Toggle';

interface ILoanInfoInputPopup {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (props: Omit<ILoanInfo, 'id'>) => void;
}

export default function LoanInfoInputPopup({
  isOpen,
  onClose,
  onConfirm,
}: ILoanInfoInputPopup) {
  const titleRef = useRef<HTMLInputElement>(null);
  const monthlyChargeRef = useRef<HTMLInputElement>(null);
  const avgAnnualReturnRef = useRef<HTMLInputElement>(null);
  const loanAmountRef = useRef<HTMLInputElement>(null);
  const loanInterestRateRef = useRef<HTMLInputElement>(null);
  const firstMoneyRef = useRef<HTMLInputElement>(null);
  const [repaymentOfPrincipal, setRepaymentOfPrincipal] = useState(false);
  const handleConfirm = () => {
    if (
      !titleRef.current ||
      !monthlyChargeRef.current ||
      !avgAnnualReturnRef.current ||
      !avgAnnualReturnRef.current ||
      !loanAmountRef.current ||
      !loanInterestRateRef.current ||
      !firstMoneyRef.current
    )
      return;
    onConfirm({
      title: titleRef.current.value,
      monthlyCharge: Number(
        monthlyChargeRef.current.value.replaceAll(/[^0-9]/g, ''),
      ),
      avgAnnualReturn: Number(
        avgAnnualReturnRef.current.value.replaceAll(/[^0-9]/g, ''),
      ),
      loanInterestRate: Number(
        loanInterestRateRef.current.value.replaceAll(/[^0-9]/g, ''),
      ),
      loanAmount: Number(loanAmountRef.current.value.replaceAll(/[^0-9]/g, '')),
      firstMoney: Number(firstMoneyRef.current.value.replaceAll(/[^0-9]/g, '')),
      repaymentOfPrincipal,
    });
    onClose();
  };
  if (!isOpen) return null;
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      outsideClickClose
      onConfirm={handleConfirm}
    >
      <p>
        항목 :{' '}
        <input
          className="input max-w-[400px] rounded border border-gray-300 text-right text-black focus:outline-none"
          ref={titleRef}
        />
      </p>
      <p>
        월세 :{' '}
        <input
          className="input max-w-[400px] rounded border border-gray-300 text-right text-black focus:outline-none"
          ref={monthlyChargeRef}
          defaultValue={1500000}
        />
      </p>
      <p>
        초기자산 :{' '}
        <input
          className="input max-w-[400px] rounded border border-gray-300 text-right text-black focus:outline-none"
          ref={firstMoneyRef}
          defaultValue={2200000000}
        />
      </p>
      <p>
        연 수익률 :{' '}
        <input
          className="input max-w-[400px] rounded border border-gray-300 text-right text-black focus:outline-none"
          ref={avgAnnualReturnRef}
          defaultValue={0.04}
        />
      </p>
      <p>
        대출액 :{' '}
        <input
          className="input max-w-[400px] rounded border border-gray-300 text-right text-black focus:outline-none"
          ref={loanAmountRef}
          defaultValue={150000000}
        />
      </p>
      <p>
        대출이자 :{' '}
        <input
          className="input max-w-[400px] rounded border border-gray-300 text-right text-black focus:outline-none"
          ref={loanInterestRateRef}
          defaultValue={0.04}
        />
      </p>
      <div className="w-[200px] text-left">
        <Toggle
          text="원금상환"
          checked={repaymentOfPrincipal}
          onChange={(checked) => setRepaymentOfPrincipal(checked)}
        />
      </div>
    </Modal>
  );
}
