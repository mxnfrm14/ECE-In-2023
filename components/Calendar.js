import React, { useState } from 'react';
import { addDays, format, startOfWeek } from 'date-fns';
import fr from 'date-fns/locale/fr';

export default function Calendar({setActiveDate}) {
  const [selectedDay, setSelectedDay] = useState(null);
  const handleDayClick = (day) => {
    setSelectedDay(day);
    setActiveDate(day);
    };

  // Calculate the dates for the current week
  const today = new Date();
  const startOfCurrentWeek = startOfWeek(today);
  const weekDates = Array.from({ length: 7 }, (_, index) => addDays(startOfCurrentWeek, index));

  return (
    <div className="w-full p-4 rounded shadow overflow-x-scroll">
      <div className="flex gap-2">
        {weekDates.map((date) => (
          <div
            key={date.toString()}
            className={`flex flex-col items-center justify-center text-center font-bold cursor-pointer ${
              selectedDay && format(selectedDay, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
                // ? 'bg-primary text-white rounded-xl'
                ? 'bg-primary text-white rounded-xl'
                : ''
            }`}
            onClick={() => handleDayClick(date)}
          >
            <div className="truncate capitalize w-20">{format(date, 'EEEE', { locale: fr })}</div>
            <div className="truncate text-sm w-20">{format(date, 'dd MMMM', { locale: fr })}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
