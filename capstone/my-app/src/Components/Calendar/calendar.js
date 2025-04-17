import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";
import { useRecoilState } from 'recoil';
import { selectedDateState } from '../../Recoil/Atoms/dateatom.js';
import "./calendar.css";

const Calendar = ({ currentMonth }) => {
  const [selectedDate, setSelectedDate] = useRecoilState(selectedDateState);

  // 현재 날짜로 초기화
  const today = new Date();

  // selectedDateState가 없으면 현재 날짜로 초기화
  if (!selectedDate) {
    setSelectedDate(today);
  }

  return (
    <div className="calendar-container">
      <DatePicker
        selected={selectedDate} // 선택된 날짜
        onChange={(date) => setSelectedDate(date)} // 날짜 변경 처리
        inline
        locale={ko}
        openToDate={currentMonth}
        renderCustomHeader={() => null}
        formatWeekDay={(nameOfDay) => nameOfDay.substring(0, 1)}
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
      />
    </div>
  );
};

export default Calendar;
