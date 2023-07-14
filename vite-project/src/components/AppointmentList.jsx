import React from 'react';

const AppointmentList = ({ appointments, deleteAppointment }) => {
  const handleDelete = (index) => {
    deleteAppointment(index);
  };

  return (
    <div className="center-container">
      <div className="list-container">
        <table className="appointment-table">
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={index}>
                <td>
                  <div className="border-div">
                    <div className="info-container">
                      <div className="patient-info">
                        <div className="ill-info">
                      <img src="https://cdn-icons-png.flaticon.com/512/3358/3358869.png" alt="Patient" />
                        <p>{appointment.patientName}</p>
                        </div>
                        <div className="doctor-info">
                          <img src={appointment.doctorImg} alt="Doctor" />
                          <p>{appointment.doctorName}</p>
                        </div>
                      </div>
                      <div className="date-info">
                        <p>{appointment.date}</p>
                        <p>{appointment.time}</p>
                      </div>
                      <div className="del-btn">
                        <button onClick={() => handleDelete(index)}>X</button>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentList;
