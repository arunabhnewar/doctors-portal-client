import React from 'react';
import Menubar from '../../Shared/Menubar/Menubar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Menubar />
            <AppointmentHeader date={date} setDate={setDate} />
            <AvailableAppointments date={date} />
        </div>
    );
};

export default Appointment;