import dayjs from 'dayjs';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

interface IIncomeChangeChart {
  data: {
    time: string;
    monthlyRent: number;
    jeonse: number;
    buy: number;
  }[];
}
export default function IncomeChangeChart({ data }: IIncomeChangeChart) {
  return (
    <ResponsiveContainer width="90%" height="40%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="time"
          tickFormatter={(time) => dayjs(time).format('YYYY-MM')}
        />
        <YAxis
          width={100}
          tickFormatter={(value) => {
            return (value as number).toLocaleString() + '원';
          }}
        />
        <Tooltip
          formatter={(value, name) => {
            return [
              Number((value as number).toFixed(0)).toLocaleString() + '원',
              name,
            ];
          }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="monthlyRent"
          label="월세"
          activeDot={{ r: 8 }}
          xlinkTitle="월세"
          color="#EFBC9B"
        />
        <Line type="monotone" dataKey="jeonse" color="#FBF3D5" />
        <Line type="monotone" dataKey="buy" color="#9CAFAA" />
      </LineChart>
    </ResponsiveContainer>
  );
}
