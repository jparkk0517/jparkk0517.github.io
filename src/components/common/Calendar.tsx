import dayjs from 'dayjs';
import { useEffect, useRef, useState } from 'react';
import Button from './Button';

interface ICalendar {
  startDate?: dayjs.Dayjs;
  onChange?: (selectedDate: dayjs.Dayjs) => void;
}

export default function Calendar({
  startDate = dayjs(),
  onChange = () => {},
}: ICalendar) {
  const [open, setOpen] = useState(false);
  const [cursor, setCursor] = useState(startDate);
  const [selectedDate, setSelectedDate] = useState(startDate);
  const calendarRef = useRef<HTMLDivElement>(null); // 캘린더 참조
  const inputRef = useRef<HTMLInputElement>(null); // 입력 박스 참조

  const toggleCalendar = () => setOpen(!open);

  const handleChangeDate = (year: number, month: number, day: number) => {
    const newSelectedDate = dayjs(new Date(year, month, day));
    setCursor(newSelectedDate);
    setSelectedDate(newSelectedDate);
    // setOpen(false); // 날짜 선택 후 달력 닫기
  };
  const handleSelecteDate = () => {
    onChange(selectedDate);
    setOpen(false);
  };

  const handleChangeMonth = (monthOffset: number) => {
    const newDate = cursor.add(monthOffset, 'month');
    setCursor(newDate);
  };
  useEffect(() => {
    setCursor(startDate);
  }, [startDate]);
  useEffect(() => {
    if (!open) return setCursor(selectedDate);
  }, [open, selectedDate, startDate]);
  useEffect(() => {
    open && setSelectedDate(startDate);
  }, [open, startDate]);

  const startDay = cursor.startOf('month').day();
  const daysInMonth = cursor.daysInMonth();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const year = cursor.year();
  const month = cursor.month();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <input
        ref={inputRef}
        type="text"
        value={startDate.format('YYYY-MM-DD')}
        readOnly
        onClick={toggleCalendar}
        className="input cursor-pointer outline-transparent"
      />
      {open && (
        <div className="fixed z-50 size-full">
          <div className="container mt-5 max-w-[400px]" ref={calendarRef}>
            <div className="rounded-lg bg-white p-4 shadow">
              <div className="mb-4 flex items-center justify-between">
                <button
                  onClick={() => handleChangeMonth(-1)}
                  // className="prev-btn"
                >
                  &#8592;
                </button>
                <span>{cursor.format('YYYY MM')}</span>
                <button
                  onClick={() => handleChangeMonth(1)}
                  // className="next-btn"
                >
                  &#8594;
                </button>
              </div>
              <div className="grid grid-cols-7 gap-4">
                {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
                  <div key={day} className="text-center font-bold">
                    {day}
                  </div>
                ))}
                {Array.from({ length: startDay }).map((_, index) => (
                  <div key={`empty-${index}`} className=""></div>
                ))}
                {daysArray.map((day) => (
                  <div
                    key={day}
                    className={`cursor-pointer py-2 text-center ${selectedDate.date() === day && selectedDate.month() === month ? 'bg-blue-500 text-white' : 'bg-transparent'}`}
                    onClick={() => handleChangeDate(year, month, day)}
                  >
                    {day}
                  </div>
                ))}
              </div>
              <div className=" text-right">
                <Button
                  disabled={selectedDate.isSame(startDate)}
                  onClick={handleSelecteDate}
                >
                  적용
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
