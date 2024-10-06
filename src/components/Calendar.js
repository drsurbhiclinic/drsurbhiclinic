import React, { useState } from 'react';
import '../css/calendar.css';

function Calendar({selectedDate, setSelectedDate}) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const handleDateClick = (day) => {
    let date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    if (date.getDay() !== 0) { // Ensure it's not Sunday (0 is Sunday)
        setSelectedDate(date);
    }    
    
  };

  const changeMonth = (direction) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1));
  };

  const renderDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysArray = Array.from({ length: daysInMonth(year, month) }, (_, i) => i + 1);
    const emptyDays = Array.from({ length: firstDayOfMonth(year, month) }, (_, i) => i + 1);

    const isSunday = currentDate.getDay() === 0;

    return (
      <>
        {emptyDays.map((_, index) => (
          <div key={`empty-${index}`} className="empty-day" />
        ))}
        {daysArray.map((day) => {
          const isSelected = selectedDate && selectedDate.getDate() === day && selectedDate.getMonth() === month && selectedDate.getFullYear() === year;
          return (
            <div
              key={day}
              className={`day ${isSunday ? 'disabled' : ''} ${isSelected ? 'selected' : ''}`}
              onClick={() => handleDateClick(day)}
            >
              {day}
            </div>
          );
        })}
      </>
    );
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={() => changeMonth(-1)} className="nav-button">{'<'}</button>
        <span>{`${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`}</span>
        <button onClick={() => changeMonth(1)} className="nav-button">{'>'}</button>
      </div>
      <div className="calendar-grid">{renderDays()}</div>
    </div>
  );
}

export default Calendar;
