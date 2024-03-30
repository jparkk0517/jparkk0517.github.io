import { useEffect, useState } from 'react';
import Button from '../common/Button';
import { useStore } from 'zustand';
import useLoanInfoStore from '@/store/loanInfoStore';

interface ILoanInfoModifyCell {
  id: string;
  propName: string;
  value: number;
}

export default function LoanInfoModifyCell({
  id,
  propName,
  value,
}: ILoanInfoModifyCell) {
  const { changeLoanInfo } = useStore(useLoanInfoStore);
  const [isChangeAble, setIsChangeAble] = useState(false);
  const [num, setNum] = useState<string>(value.toString());
  useEffect(() => {
    setNum(value.toString());
  }, [value]);
  return (
    <>
      {isChangeAble ? (
        <>
          <input
            className="input max-w-[400px] text-right text-black focus:outline-none"
            value={num}
            onChange={(e) => {
              setNum(e.target.value);
            }}
          />
          <div className="flex">
            <Button
              onClick={() => {
                changeLoanInfo(
                  id,
                  propName,
                  Number(num.replaceAll(/[^0-9.]/g, '')),
                );
                // setNum(value);
                setIsChangeAble(false);
              }}
            >
              적용
            </Button>
            <Button
              onClick={() => {
                setNum(value.toString());
                setIsChangeAble(false);
              }}
            >
              취소
            </Button>
          </div>
        </>
      ) : (
        <div onClick={() => setIsChangeAble(true)}>{num}</div>
      )}
    </>
  );
}
