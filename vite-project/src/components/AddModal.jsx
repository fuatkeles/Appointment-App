import React, { useState } from 'react';

const AddModal = ({ selectedDoctor, showModal, onClose, onSaveChanges }) => {
  const [formData, setFormData] = useState({
    patientName: '',
    date: '',
    doctorName: selectedDoctor?.name || '',
    time: ''
  });

  const handleSaveChanges = () => {
    const appointmentData = {
      patientName: formData.patientName,
      date: formData.date,
      doctorName: formData.doctorName,
      time: formData.time,
      doctorImg: selectedDoctor?.img || ''
    };

    onSaveChanges(appointmentData);
    handleClose();
  };

  const handleClose = () => {
    setFormData({
      patientName: '',
      date: '',
      doctorName: selectedDoctor?.name || '',
      time: '', 
      doctorImg: selectedDoctor?.img || ''
    });

    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <>
      {showModal && (
        <div
          className='modal-overlay'
          role='dialog'
          aria-modal='true'
          onClick={handleOverlayClick}
        >
          <div className='modal-container'>
            <div className='modal-header'>
              <h3 className='modal-title' id='exampleModalLabel'>
                Appointment for {selectedDoctor?.name}
              </h3>
            </div>
            <div className='modal-body'>
              <div className='form-group'>
                <label>Patient Name</label>
                <input
                  type='text'
                  className='form-control'
                  value={formData.patientName}
                  onChange={(e) =>
                    setFormData({ ...formData, patientName: e.target.value })
                  }
                />
              </div>
              <div className='form-group'>
                <label>Date</label>
                <input
                  type='datetime-local'
                  className='form-control'
                  value={formData.date + 'T' + formData.time}
                  onChange={(e) => {
                    const [date, time] = e.target.value.split('T');
                    setFormData({ ...formData, date, time });
                  }}
                />
              </div>
              <hr className='modal-divider' />
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btnSave'
                onClick={handleSaveChanges}
              >
                Save changes
              </button>
              <button
                type='button'
                className='btnClose'
                data-dismiss='modal'
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddModal;
