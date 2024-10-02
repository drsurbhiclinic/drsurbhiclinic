import React, { useEffect } from 'react';
import '../css/timeSlotSelector.css';

function TimeSlotSelector({timeSlots, selectedTimeSlot, setSelectedTimeSlot, errors, setErrors}) {

  const handleSlotClick = (slot) => {
    console.log(slot)
    setSelectedTimeSlot(slot);
    if(setErrors && errors) {
        setErrors({
            ...errors,
            'timeSlot': ""
        })
    }
    timeSlots.forEach((s) => {
        console.log(slot === s)
    })
  };

  useEffect(() => {
    console.log(selectedTimeSlot)
  })

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
