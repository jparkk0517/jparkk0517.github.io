import Table from '@/components/common/Table';
import Toggle from '@/components/common/Toggle';
import IncomeChangeChart from '@/components/ui/IncomeChangeChart';
import useLoanInfoStore from '@/store/loanInfoStore';
import { debounce } from 'lodash-es';
import { useRef, useState } from 'react';
import { useStore } from 'zustand';
import dayjs from 'dayjs';

function generateMonthlyDates(start: string, end: string) {
  let startDate = dayjs(start);
  const endDate = dayjs(end);

  const datesArray = [];

  while (startDate.isBefore(endDate) || startDate.isSame(endDate, 'day')) {
    datesArray.push(startDate.format('YYYY-MM-DD'));
    startDate = startDate.add(1, 'month');
  }

  return datesArray;
}

export default function LoanInfo() {
  const [kakaoInterest, setKakaoInterest] = useState<boolean>(true);
  const { fixedInfo, setFixedInfo } = useStore(useLoanInfoStore);
  const jeonseLoanChargePerMonth = useLoanInfoStore(
    (state) =>
      (state.fixedInfo.jeonseLoanAmount * state.fixedInfo.loanRate) / 12 +
      state.fixedInfo.jeonseLoanAmount / (12 * 40) -
      (kakaoInterest
        ? ((state.fixedInfo.loanRate - 0.02) * 150000000) / 12
        : 0),
  );
  const buyLoanChargePerMonth = useLoanInfoStore(
    (state) =>
      (state.fixedInfo.buyLoanAmount * state.fixedInfo.loanRate) / 12 +
      state.fixedInfo.buyLoanAmount / (12 * 40) -
      (kakaoInterest
        ? ((state.fixedInfo.loanRate - 0.02) * 150000000) / 12
        : 0),
  );
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleChange = debounce(() => {
    const props = inputRefs.current.map((_number) =>
      Number(_number.value.replace(/[^0-9.]/g, '')),
    );
    setFixedInfo({
      income: props[0],
      outcome: props[1],
      loanRate: props[2],
      avgAnnualReturn: props[3],
      firstMoney: props[4],
      monthlyRentCharge: props[5],
      monthlyRentDeposit: props[6],
      jeonseLoanAmount: props[7],
      buyLoanAmount: props[8],
    });
  }, 500);

  const monthlyBalanceChange = [
    (fixedInfo.firstMoney * fixedInfo.avgAnnualReturn -
      fixedInfo.monthlyRentDeposit) /
      12 +
      fixedInfo.income -
      fixedInfo.outcome,
    fixedInfo.income - fixedInfo.outcome - jeonseLoanChargePerMonth,
    fixedInfo.income - fixedInfo.outcome - buyLoanChargePerMonth,
  ];
  return (
    <>
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
                    className="input max-w-[100px] text-right text-black focus:outline-none"
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
                    className="input max-w-[100px] text-right text-black focus:outline-none"
                    onChange={handleChange}
                  />
                  원
                </>
              );
            },
          },
          {
            title: '대출이자',
            key: 'loanRate',
            render(_, record) {
              return (
                <>
                  <input
                    ref={(element) => {
                      if (!element) return;
                      inputRefs.current[2] = element;
                    }}
                    defaultValue={`${record.loanRate.toLocaleString()}`}
                    className="input max-w-[100px] text-right text-black focus:outline-none"
                    onChange={handleChange}
                  />
                  %
                </>
              );
            },
          },
          {
            title: '연평균 수익률',
            key: 'avgAnnualReturn',
            render(_, record) {
              return (
                <>
                  <input
                    ref={(element) => {
                      if (!element) return;
                      inputRefs.current[3] = element;
                    }}
                    defaultValue={`${record.avgAnnualReturn.toLocaleString()}`}
                    className="input max-w-[100px] text-right text-black focus:outline-none"
                    onChange={handleChange}
                  />
                  %
                </>
              );
            },
          },
          {
            title: '최초 현금',
            key: 'firstMoney',
            render(_, record) {
              return (
                <>
                  <input
                    ref={(element) => {
                      if (!element) return;
                      inputRefs.current[4] = element;
                    }}
                    defaultValue={`${record.firstMoney.toLocaleString()}`}
                    className="input max-w-[100px] text-right text-black focus:outline-none"
                    onChange={handleChange}
                  />
                  원
                </>
              );
            },
          },
          {
            title: '월세',
            key: 'monthlyRentCharge',
            render(_, record) {
              return (
                <>
                  <input
                    ref={(element) => {
                      if (!element) return;
                      inputRefs.current[5] = element;
                    }}
                    defaultValue={`${record.monthlyRentCharge.toLocaleString()}`}
                    className="input max-w-[100px] text-right text-black focus:outline-none"
                    onChange={handleChange}
                  />
                  원
                </>
              );
            },
          },
          {
            title: '월세 보증금',
            key: 'monthlyRentDeposit',
            render(_, record) {
              return (
                <>
                  <input
                    ref={(element) => {
                      if (!element) return;
                      inputRefs.current[5] = element;
                    }}
                    defaultValue={`${record.monthlyRentDeposit.toLocaleString()}`}
                    className="input max-w-[100px] text-right text-black focus:outline-none"
                    onChange={handleChange}
                  />
                  원
                </>
              );
            },
          },
          {
            title: '전세대출',
            key: 'jeonseLoanAmount',
            render(_, record) {
              return (
                <>
                  <input
                    ref={(element) => {
                      if (!element) return;
                      inputRefs.current[6] = element;
                    }}
                    defaultValue={`${record.jeonseLoanAmount.toLocaleString()}`}
                    className="input max-w-[100px] text-right text-black focus:outline-none"
                    onChange={handleChange}
                  />
                  원
                </>
              );
            },
          },
          {
            title: '매매 대출',
            key: 'buyLoanAmount',
            render(_, record) {
              return (
                <>
                  <input
                    ref={(element) => {
                      if (!element) return;
                      inputRefs.current[7] = element;
                    }}
                    defaultValue={`${record.buyLoanAmount.toLocaleString()}`}
                    className="input max-w-[100px] text-right text-black focus:outline-none"
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
      <Table
        columns={[
          {
            title: '주거형태',
            key: 'liveEnv',
          },
          {
            title: '월세',
            key: 'monthlyRentCharge',
            render(value) {
              const _value = value as number;
              const color = `text-[${_value > 0 ? 'blue' : _value === 0 ? 'black' : 'red'}]-500`;
              return (
                <span className={color}>
                  {Number(_value.toFixed(0)).toLocaleString()}원
                </span>
              );
            },
          },
          {
            title: '전세',
            key: 'jeonseLoanAmount',
            render(value) {
              const _value = value as number;
              const color = ` text-${_value > 0 ? 'blue' : _value === 0 ? 'black' : 'red'}-500`;
              return (
                <span className={color}>
                  {Number(_value.toFixed(0)).toLocaleString()}원
                </span>
              );
            },
          },
          {
            title: '매매',
            key: 'buyLoanAmount',
            render(value) {
              const _value = value as number;
              const color = ` text-${_value > 0 ? 'blue' : _value === 0 ? 'black' : 'red'}-500`;
              return (
                <span className={color}>
                  {Number(_value.toFixed(0)).toLocaleString()}원
                </span>
              );
            },
          },
        ]}
        contents={[
          {
            liveEnv: '거주 환경에 따른 월별 지출액',
            monthlyRentCharge: -1 * fixedInfo.monthlyRentCharge,
            jeonseLoanAmount: jeonseLoanChargePerMonth * -1,
            buyLoanAmount: buyLoanChargePerMonth * -1,
          },
          {
            liveEnv: '현금 흐름에 따른 월별 수익',
            monthlyRentCharge:
              (fixedInfo.firstMoney * fixedInfo.avgAnnualReturn -
                fixedInfo.monthlyRentDeposit) /
              12,
            jeonseLoanAmount: 0,
            buyLoanAmount: 0,
          },
          {
            liveEnv: '월별 잔고 증가액',
            monthlyRentCharge: monthlyBalanceChange[0],
            jeonseLoanAmount: monthlyBalanceChange[1],
            buyLoanAmount: monthlyBalanceChange[2],
          },
        ]}
        renderKey={function (rowData: unknown): string {
          return JSON.stringify(rowData);
        }}
      />
      <IncomeChangeChart
        data={generateMonthlyDates('2024-06-01', '2026-06-01').map(
          (time, idx) => {
            return {
              time,
              monthlyRent: monthlyBalanceChange[0] * (idx + 1),
              jeonse: monthlyBalanceChange[1] * (idx + 1),
              buy: monthlyBalanceChange[2] * (idx + 1),
            };
          },
        )}
      />
    </>
  );
}
