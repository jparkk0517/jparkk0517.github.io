import Table from '@/components/common/Table';
import Toggle from '@/components/common/Toggle';
// import IncomeChangeChart from '@/components/ui/IncomeChangeChart';
import useLoanInfoStore from '@/store/loanInfoStore';
// import { debounce } from 'lodash-es';
import { useState } from 'react';
import { useStore } from 'zustand';
import dayjs from 'dayjs';
import Calendar from '@/components/common/Calendar';
import LoanInfoInputPopup from '@/components/ui/LoanInfoInputPopup';
import Button from '@/components/common/Button';
import LoanInfoModifyCell from '@/components/ui/LoanInfoModifyCell';

function calculateMonthlyPayment(
  loanAmount: number,
  loanTerm: number,
  interestRate: number,
  includePrincipal: boolean,
) {
  // 대출 이자율을 연이율에서 월 이자율로 변환
  const monthlyInterestRate = interestRate / 12;

  // 상환 기간(월)에 대한 월별 이자율
  const monthlyTerm = loanTerm;

  // 월별 이자액 계산
  const monthlyInterestPayment = loanAmount * monthlyInterestRate;

  // 월별 원금상환액 계산
  const totalMonthlyPayment =
    (loanAmount * monthlyInterestRate) /
    (1 - Math.pow(1 + monthlyInterestRate, -monthlyTerm));

  // 원리금 또는 이자만 반환
  let monthlyPayment;
  if (includePrincipal) {
    monthlyPayment = totalMonthlyPayment;
  } else {
    monthlyPayment = monthlyInterestPayment;
  }

  return monthlyPayment;
}

export default function LoanInfo() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [kakaoInterest, setKakaoInterest] = useState<boolean>(true);
  const {
    addLoanInfo,
    deleteLoanInfo,
    loanList,
    fixedInfo,
    setFixedInfo,
    changeLoanInfo,
  } = useStore(useLoanInfoStore);
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
            render() {
              return (
                <>
                  <LoanInfoModifyCell
                    value={fixedInfo.income}
                    onChange={(value) =>
                      setFixedInfo({ ...fixedInfo, income: value })
                    }
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
                  <LoanInfoModifyCell
                    value={fixedInfo.outcome}
                    onChange={(value) =>
                      setFixedInfo({ ...fixedInfo, outcome: value })
                    }
                  />
                  원({(record.outcome / record.income) * 100}%)
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
                  value={value as number}
                  onChange={(value) =>
                    changeLoanInfo(record.id, 'monthlyCharge', value)
                  }
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
                  value={value as number}
                  onChange={(value) =>
                    changeLoanInfo(record.id, 'loanAmount', value)
                  }
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
                  value={value as number}
                  onChange={(value) =>
                    changeLoanInfo(record.id, 'loanInterestRate', value)
                  }
                />
              );
            },
          },
          {
            title: '상환기간',
            key: 'repaymentPeriod',
            render(_, record) {
              return (
                <>
                  <LoanInfoModifyCell
                    value={record.repaymentPeriod as number}
                    onChange={(repaymentPeriod) =>
                      changeLoanInfo(
                        record.id,
                        'repaymentPeriod',
                        repaymentPeriod,
                      )
                    }
                  />
                  개월
                </>
              );
            },
          },
          {
            title: '원리금',
            key: 'principalAndInterest',
            render(_, record) {
              return (
                calculateMonthlyPayment(
                  record.loanAmount,
                  record.repaymentPeriod,
                  record.loanInterestRate,
                  record.repaymentOfPrincipal,
                ) * -1
              ).toLocaleString('ko-kr', { maximumFractionDigits: 0 });
            },
          },
          {
            title: '현금자산',
            key: 'firstMoney',
            render(value, record) {
              return (
                <LoanInfoModifyCell
                  value={value as number}
                  onChange={(value) =>
                    changeLoanInfo(record.id, 'firstMoney', value)
                  }
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
                  value={value as number}
                  onChange={(value) =>
                    changeLoanInfo(record.id, 'avgAnnualReturn', value)
                  }
                />
              );
            },
          },
          {
            title: '월간 자본 소득',
            key: 'avgAnnualReturn',
            render(_, record) {
              return (
                (record.firstMoney * record.avgAnnualReturn) /
                12
              ).toLocaleString('ko-kr', { maximumFractionDigits: 0 });
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
              const outcomePerMontylyLoan = calculateMonthlyPayment(
                record.loanAmount,
                record.repaymentPeriod,
                record.loanInterestRate,
                record.repaymentOfPrincipal,
              );
              const res =
                incomeFromMoney +
                monthlyChange -
                outcomePerMontylyLoan +
                (kakaoInterest && record.loanAmount !== 0
                  ? ((record.loanInterestRate - 0.02) * 150000000) / 12
                  : 0);
              return (
                <>
                  {res.toLocaleString('ko-kr', { maximumFractionDigits: 0 })}원
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
