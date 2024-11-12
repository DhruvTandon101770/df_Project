// Toggle the hamburger menu
// menu1
function insertPatient(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const contact = document.getElementById('contact').value;

  fetch('/menu1/insert', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, contact }),
  })
    .then((response) => {
      if (response.ok) {
        window.location.href = '/menu1';
      } else {
        throw new Error('Error inserting patient');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

function showUpdatePatientForm(patientID, name, contact) {
  document.getElementById('update-patient-id').value = patientID;
  document.getElementById('update-name').value = name;
  document.getElementById('update-contact').value = contact;
  document.getElementById('update-patient-form').style.display = 'block';
}


function updatePatient(event) {
  event.preventDefault();
  const patientID = document.getElementById('update-patient-id').value;
  const name = document.getElementById('update-name').value;
  const contact = document.getElementById('update-contact').value;

  fetch('/menu1/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ patientID, name, contact }),
  })
    .then((response) => {
      if (response.ok) {
        window.location.href = '/menu1';
      } else {
        throw new Error('Error updating patient');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

function deletePatient(patientID) {
  if (confirm('Are you sure you want to delete this patient?')) {
    fetch('/menu1/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ patientID }),
    })
      .then((response) => {
        if (response.ok) {
          window.location.href = '/menu1';
        } else {
          throw new Error('Error deleting patient');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}


// Menu 2 (Doctors)
function insertDoctor(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const speciality = document.getElementById('speciality').value;

  fetch('/menu2/insert', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, speciality }),
  })
    .then((response) => {
      if (response.ok) {
        window.location.href = '/menu2';
      } else {
        throw new Error('Error inserting doctor');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

function showUpdateDoctorForm(doctorID, name, speciality) {
  document.getElementById('update-doctor-id').value = doctorID;
  document.getElementById('update-name').value = name;
  document.getElementById('update-speciality').value = speciality;
  document.getElementById('update-doctor-form').style.display = 'block';
}

function updateDoctor(event) {
  event.preventDefault();
  const doctorID = document.getElementById('update-doctor-id').value;
  const name = document.getElementById('update-name').value;
  const speciality = document.getElementById('update-speciality').value;

  fetch('/menu2/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ doctorID, name, speciality }),
  })
    .then((response) => {
      if (response.ok) {
        window.location.href = '/menu2';
      } else {
        throw new Error('Error updating doctor');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

function deleteDoctor(doctorID) {
  if (confirm('Are you sure you want to delete this doctor?')) {
    fetch('/menu2/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ doctorID }),
    })
      .then((response) => {
        if (response.ok) {
          window.location.href = '/menu2';
        } else {
          throw new Error('Error deleting doctor');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}


// Menu 3 (Appointments)
function insertAppointment(event) {
  event.preventDefault();
  const doctorID = document.getElementById('doctorID').value;
  const patientID = document.getElementById('patientID').value;
  const date = document.getElementById('date').value;
  const time = document.getElementById('time').value;

  fetch('/menu3/insert', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ doctorID, patientID, date, time }),
  })
    .then((response) => {
      if (response.ok) {
        window.location.href = '/menu3';
      } else {
        throw new Error('Error inserting appointment');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

function updateAppointment(appointmentID, doctorID, patientID, date, time) {
  const newDoctorID = prompt('Enter new doctor ID:', doctorID);
  const newPatientID = prompt('Enter new patient ID:', patientID);
  const newDate = prompt('Enter new date:', date);
  const newTime = prompt('Enter new time:', time);

  if (
    newDoctorID !== null &&
    newPatientID !== null &&
    newDate !== null &&
    newTime !== null
  ) {
    fetch('/menu3/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        appointmentID,
        doctorID: newDoctorID,
        patientID: newPatientID,
        date: newDate,
        time: newTime,
      }),
    })
      .then((response) => {
        if (response.ok) {
          window.location.href = '/menu3';
        } else {
          throw new Error('Error updating appointment');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}

function deleteAppointment(appointmentID) {
  if (confirm('Are you sure you want to delete this appointment?')) {
    fetch('/menu3/delete', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ appointmentID }),
    })
      .then((response) => {
        if (response.ok) {
          window.location.href = '/menu3';
        } else {
          throw new Error('Error deleting appointment');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
}