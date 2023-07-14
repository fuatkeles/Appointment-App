import React, { useState, useEffect } from 'react';
import { doctorData } from '../helper/data';
import '../App.css';
import AddModal from './AddModal';
import AppointmentList from './AppointmentList';

const Doctors = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const storedAppointments = JSON.parse(localStorage.getItem('appointments'));

    if (storedAppointments) {
      setAppointments(storedAppointments);
    }
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleDoctorSelection = (doctor) => {
    setSelectedDoctor(doctor);
    setShowModal(true);
  };

  const addAppointment = (data) => {
    const updatedAppointments = [...appointments, data];
    setAppointments(updatedAppointments);
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
  };

  const deleteAppointment = (index) => {
    const updatedAppointments = [...appointments];
    updatedAppointments.splice(index, 1);
    setAppointments(updatedAppointments);
    localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
  };

  return (
    <>
    <h1 className='appointments-title'>Doctors</h1>
      <div className='doctor-img'>
        {doctorData.map((doctor) => (
          <div
            key={doctor.id}
            className='doctor-item'
            onClick={() => handleDoctorSelection(doctor)}
          >
            <img src={doctor.img} alt={doctor.name} />
            <h3>{doctor.name}</h3>
            <p className='doctors-name'>{doctor.dep}</p>
          </div>
        ))}
      </div>
      {showModal && (
        <>
          <AddModal
            selectedDoctor={selectedDoctor}
            showModal={showModal}
            onClose={handleCloseModal}
            onSaveChanges={addAppointment}
          />
          <div className='modal-backdrop' onClick={handleCloseModal} />
        </>
      )}
      <h1 className='appointments-title'>Appointments</h1>
      {appointments.length > 0 ? (
        <AppointmentList appointments={appointments} deleteAppointment={deleteAppointment} />
      ) : (
        <p></p>
      )}
    </>
  );
};

export default Doctors;
