import { useEffect, useState } from 'react';
import Button from '../common/Button';

interface ILoanInfoModifyCell {
  value: number;
  onChange: (value: number) => void;
}

export default function LoanInfoModifyCell({
  value,
  onChange,
}: ILoanInfoModifyCell) {
  const [isChangeAble, setIsChangeAble] = useState(false);
  const [num, setNum] = useState(value);
  useEffect(() => {
    setNum(value);
  }, [value]);
  return (
    <>
      {isChangeAble ? (
        <>
          <input
            className="input max-w-[400px] text-right text-black focus:outline-none"
            value={num}
            onChange={(e) => {
              setNum(Number(e.target.value));
            }}
          />
          <div className="flex">
            <Button
              onClick={() => {
                onChange(num);
                // setNum(value);
                setIsChangeAble(false);
              }}
            >
              적용
            </Button>
            <Button
              onClick={() => {
                setNum(value);
                setIsChangeAble(false);
              }}
            >
              취소
            </Button>
          </div>
        </>
      ) : (
        <div className="flex">
          {num.toLocaleString()}
          <svg
            onClick={() => setIsChangeAble(true)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
            />
          </svg>
        </div>
      )}
    </>
  );
}
