import React from 'react';
import '../css/timeSlotSelector.css';

function TimeSlotSelector({timeSlots, selectedTimeSlot, setSelectedTimeSlot, errors, setErrors}) {

  const handleSlotClick = (slot) => {
    setSelectedTimeSlot(slot);
    if(setErrors && errors) {
        setErrors({
            ...errors,
            'timeSlot': ""
        })
    }
  };

  return (
    <div className="time-slot-container">
      {timeSlots.map((slot) => (
        <div
          key={slot}
          className={`time-slot ${selectedTimeSlot === slot ? 'selected' : ''}`}
          onClick={() => handleSlotClick(slot)}
        >
          {slot}
        </div>
      ))}
    </div>
  );
}

export default TimeSlotSelector;
