import Table from '@/components/common/Table';
import Toggle from '@/components/common/Toggle';
// import IncomeChangeChart from '@/components/ui/IncomeChangeChart';
import useLoanInfoStore from '@/store/loanInfoStore';
import { debounce } from 'lodash-es';
import { useRef, useState } from 'react';
import { useStore } from 'zustand';
import dayjs from 'dayjs';
import Calendar from '@/components/common/Calendar';
import LoanInfoInputPopup from '@/components/ui/LoanInfoInputPopup';
import Button from '@/components/common/Button';
import LoanInfoModifyCell from '@/components/ui/LoanInfoModifyCell';

// function generateMonthlyDates(start: string, end: string) {
//   let startDate = dayjs(start);
//   const endDate = dayjs(end);

//   const datesArray = [];

//   while (startDate.isBefore(endDate) || startDate.isSame(endDate, 'day')) {
//     datesArray.push(startDate.format('YYYY-MM-DD'));
//     startDate = startDate.add(1, 'month');
//   }

//   return datesArray;
// }

export default function LoanInfo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [kakaoInterest, setKakaoInterest] = useState<boolean>(true);
  const { addLoanInfo, deleteLoanInfo, loanList, fixedInfo, setFixedInfo } =
    useStore(useLoanInfoStore);
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleChange = debounce(() => {
    const props = inputRefs.current.map((_number) =>
      Number(_number.value.replace(/[^0-9.]/g, '')),
    );
    setFixedInfo({
      income: props[0],
      outcome: props[1],
    });
  }, 800);

  return (
    <>
      {isModalOpen && (
        <LoanInfoInputPopup
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onConfirm={(props) => {
            addLoanInfo({ id: Math.random().toString(), ...props });
          }}
        />
      )}
      <Calendar startDate={dayjs('2024-06-01')} />
      <Table
        columns={[
          {
            title: '수입',
            key: 'income',
            render(_, record) {
              return (
                <>
                  <input
                    ref={(element) => {
                      if (!element) return;
                      inputRefs.current[0] = element;
                    }}
                    defaultValue={`${record.income.toLocaleString()}`}
                    className="input max-w-[400px] text-right text-black focus:outline-none"
                    onChange={handleChange}
                  />
                  원
                </>
              );
            },
          },
          {
            title: '지출',
            key: 'outcome',
            render(_, record) {
              return (
                <>
                  <input
                    ref={(element) => {
                      if (!element) return;
                      inputRefs.current[1] = element;
                    }}
                    defaultValue={`${record.outcome.toLocaleString()}`}
                    className="input max-w-[400px] text-right text-black focus:outline-none"
                    onChange={handleChange}
                  />
                  원
                </>
              );
            },
          },
        ]}
        contents={[fixedInfo]}
        renderKey={function (fixedInfo): string {
          return JSON.stringify(fixedInfo);
        }}
      />
      <div className="w-[15vw] text-left">
        <Toggle
          text="이자지원"
          checked={kakaoInterest}
          onChange={(checked) => setKakaoInterest(checked)}
        />
      </div>
      <Button onClick={() => setIsModalOpen(true)}>추가하기</Button>
      <Table
        columns={[
          { title: '항목', key: 'title' },
          {
            title: '월세',
            key: 'monthlyCharge',
            render(value, record) {
              return (
                <LoanInfoModifyCell
                  propName={'monthlyCharge'}
                  id={record.id}
                  value={value as number}
                />
              );
            },
          },
          {
            title: '대출금',
            key: 'loanAmount',
            render(value, record) {
              return (
                <LoanInfoModifyCell
                  propName={'loanAmount'}
                  id={record.id}
                  value={value as number}
                />
              );
            },
          },
          {
            title: '대출이자',
            key: 'loanInterestRate',
            render(value, record) {
              return (
                <LoanInfoModifyCell
                  propName={'loanInterestRate'}
                  id={record.id}
                  value={value as number}
                />
              );
            },
          },
          {
            title: '현금자산',
            key: 'firstMoney',
            render(value, record) {
              return (
                <LoanInfoModifyCell
                  propName={'firstMoney'}
                  id={record.id}
                  value={value as number}
                />
              );
            },
          },
          {
            title: '연 수익률',
            key: 'avgAnnualReturn',
            render(value, record) {
              return (
                <LoanInfoModifyCell
                  propName={'avgAnnualReturn'}
                  id={record.id}
                  value={value as number}
                />
              );
            },
          },
          {
            title: '월간 자금 변화',
            key: 'monthlyOutcome',
            render(_, record) {
              const monthlyChange =
                fixedInfo.income - fixedInfo.outcome - record.monthlyCharge;
              const incomeFromMoney =
                (record.firstMoney * record.avgAnnualReturn) / 12;
              const outcomePerMontylyLoan =
                (record.loanAmount * record.loanInterestRate) / 12 +
                (record.repaymentOfPrincipal
                  ? record.loanAmount / (12 * 40)
                  : 0);
              console.log(
                monthlyChange.toLocaleString(),
                incomeFromMoney.toLocaleString(),
                outcomePerMontylyLoan.toLocaleString(),
              );
              return (
                <>
                  {Number(
                    (
                      incomeFromMoney +
                      monthlyChange -
                      outcomePerMontylyLoan +
                      (kakaoInterest && record.loanAmount !== 0
                        ? ((record.loanInterestRate - 0.02) * 150000000) / 12
                        : 0)
                    ).toFixed(0),
                  ).toLocaleString()}
                  원
                </>
              );
            },
          },
          {
            title: '',
            key: '',
            render(_, record) {
              return (
                <Button onClick={() => deleteLoanInfo(record.id)}>삭제</Button>
              );
            },
          },
        ]}
        contents={loanList}
        renderKey={function (rowData: unknown): string {
          return JSON.stringify(rowData);
        }}
      />
    </>
  );
}
