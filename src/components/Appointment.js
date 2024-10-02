import Constants from '../Constants';
import Calendar from './Calendar';
import TimeSlotSelector from './TimeSlotSelector';
import { useState } from 'react';

function Appointment() {

    const[selectedClinicLocation, setSelectedClinicLocation] = useState('Palam');
    const[selectedTimeSlot, setSelectedTimeSlot] = useState('');
    const[selectedDate, setSelectedDate] = useState(new Date);
    const[patientName, setPatientName] = useState("");
    const[errors, setErrors] = useState({'patientName': "", 'timeSlot': ""})

    const clinicTimeSlots = {
        'Palam': [
            "11:00 AM - 12:00 PM",
            "12:00 PM - 01:00 PM",
            "01:00 PM - 02:00 PM",
            "02:00 PM - 03:00 PM",
            "05:00 PM - 06:00 PM",
            "06:00 PM - 07:00 PM",
            "07:00 PM - 08:00 PM",
        ],
        'Dwarka sector-21': ["9:00 a.m. to 10:00 a.m."]
    }
        
    const handleClinicChange = (clinicLocation) => {
        setSelectedClinicLocation(clinicLocation)
        setSelectedTimeSlot("")
        setErrors({})
    }

    const handleNameChange = (e) => {
        setPatientName(e.target.value);
        if(e.target.value != "") {
            setErrors({
                ...errors,
                patientName: ""
            })
        } else {
            setErrors({
                ...errors,
                patientName: "Patient Name is required"
            })
        }
    }

    const makeAppointment = (e) => {
        e.preventDefault()
        if(selectedTimeSlot === "") {
            setErrors({
                ...errors,
                'timeSlot': "Please select a time slot for the appointment."
            }) 
        }
        if(patientName === "") {
            setErrors({
                ...errors,
                'patientName': "Patient Name is required"
            }) 
        }
        if(errors.patientName === "" && errors.timeSlot === "") {
            var message = `Hi Dr Surbhi,%0A%0AMy name is ${patientName} and I would like to make an appointment at your clinic in ${selectedClinicLocation} for the time slot ${selectedTimeSlot} on ${selectedDate.toDateString()}.%0APlease confirm your availability for this time slot.%0A%0AThanks`
            setErrors({'patientName': "", 'timeSlot': ""});
            window.open(`https://wa.me/${Constants.PHONE}?text=${message}`, '_blank')
        }
    }
    
    return (
        <main id="main">
            {/* ======= Breadcrumbs ======= */}
            <section id="breadcrumbs" className="breadcrumbs">
                <div className="breadcrumb-hero">
                <div className="container">
                    <div className="breadcrumb-hero">
                    <h2>Make an Appointment through WhatsApp</h2><br/>
                    <div className="row">
                        <div className="col-md-6">
                            <p><b>321, Naval Technical Officers' CGHS Ltd, Dwarka sector 21, Delhi - 11007</b></p>
                            <p><i>Monday to Saturday</i></p>
                            <p>9:00 a.m. to 10:00 a.m. </p>
                        </div>
                        <div className='col-md-6'>
                            <p><b> D-116 Raj Nagar-2, Palam Colony, Delhi 110077 </b></p>
                            <p><i>Monday to Saturday</i></p>
                            <p>11:00 a.m. to 3:00 p.m. AND 5:00 p.m. to 8:00 p.m.</p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="container">
                <ol>
                    <li><a href="/home">Home</a></li>
                    <li>Appointment</li>
                </ol>
                </div>
            </section>
            {/* End Breadcrumbs */}

            <section>
                <form className="php-email-form container" onSubmit={makeAppointment}>
                    <div className='container portfolio mb-4'>
                        <div className="row">
                            <div className="col-lg-12 d-flex justify-content-center aos-init aos-animate" data-aos="fade-up">
                                <ul id="portfolio-flters">
                                    {Object.keys(clinicTimeSlots).map((clinicLocation) => {
                                        return <li key={clinicLocation} className={clinicLocation == selectedClinicLocation? "filter-active": ""} onClick={ () => handleClinicChange(clinicLocation)}>{clinicLocation} clinic</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="form-group mt-2 mb-2">
                            <input type="text" className="form-control" name="patientName" id="patientName" placeholder="Patient's Name" onChange={handleNameChange} value={patientName}/>
                            {errors.patientName && <span style={{ color: 'red' }}>{errors.patientName}</span>}
                        </div>
                        <div className="row">
                            <div className="row col-md-6 mb-4 justify-content-center">
                                <p style={{'textAlign':'center'}}><b>Select Date</b></p>
                                <Calendar setSelectedDate={setSelectedDate} selectedDate={selectedDate}/>
                            </div>
                            <div className="row col-md-6 mb-4 justify-content-center">
                                <p style={{'textAlign':'center'}}><b>Select Time</b></p>
                                <TimeSlotSelector timeSlots={clinicTimeSlots[selectedClinicLocation]} selectedTimeSlot={selectedTimeSlot} setSelectedTimeSlot={setSelectedTimeSlot} errors={errors} setErrors={setErrors}/>
                                {errors.timeSlot && <span style={{ color: 'red' }}>{errors.timeSlot}</span>}
                            </div>
                        </div>
                    </div>
                    <div className="text-center"><button type="submit">Make appointment</button></div>
                </form>
            </section>
        </main>
    )
}

export default Appointment;