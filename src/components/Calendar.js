import React from 'react';
import '../css/calendar.css';

function Calendar({selectedDate, setSelectedDate}) {
  let now = new Date()
  const today = new Date(now.setHours(0,0,0,0))

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const handleDateClick = (day) => {
    let date = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day);
    if (date.getDay() !== 0 && date > today) { // Ensure it's not Sunday (0 is Sunday)
        setSelectedDate(date);
    }    
  };

  const isMonthGreaterThanToday = today.getMonth() < selectedDate.getMonth()
  const changeMonth = (event, direction) => {  
    event.preventDefault()
    if(direction === 1 || isMonthGreaterThanToday) {
      setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + direction, selectedDate.getDate()));
    } 
  };

  const renderDaysOfTheWeek = () => {
    return (
      <> 
        {
          daysOfTheWeek.map((day) => {
            return (<div key={day} className="week-day"> <i> {day} </i></div>)
          })
        }
      </>
    )
  }
  const renderDays = () => {
    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth();
    const daysArray = Array.from({ length: daysInMonth(year, month) }, (_, i) => i + 1);
    const emptyDays = Array.from({ length: firstDayOfMonth(year, month) }, (_, i) => i + 1);

    return (
      <>
        {emptyDays.map((_, index) => (
          <div key={`empty-${index}`} className="empty-day" />
        ))}
        {daysArray.map((dayOfTheMonth) => {
          const dateOfTheMonth = new Date(year, month, dayOfTheMonth)
          const isSelected = selectedDate.getTime() === dateOfTheMonth.getTime()
          
          const isSunday = dateOfTheMonth.getDay() === 0;

          return (
            <div
              key={dayOfTheMonth}
              className={`day ${isSunday || dateOfTheMonth < today ? 'disabled' : ''} ${isSelected ? 'selected' : ''}`}
              onClick={() => handleDateClick(dayOfTheMonth)}
            >
              {dayOfTheMonth}
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
  const daysOfTheWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={(e) => {changeMonth(e, -1)}} className={`${!isMonthGreaterThanToday? 'nav-button-disabled': 'nav-button'}`}>{'<'}</button>
        <span>{`${monthNames[selectedDate.getMonth()]} ${selectedDate.getFullYear()}`}</span>
        <button onClick={(e) => {changeMonth(e, 1); }} className="nav-button">{'>'}</button>
      </div>
      <div className="calendar-grid">
        {renderDaysOfTheWeek()}
        {renderDays()}
      </div>
    </div>
  );
}

export default Calendar;
