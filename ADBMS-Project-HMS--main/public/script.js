// Authentication functions
function login(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => {
      if (response.ok) {
        window.location.href = '/';
      } else {
        throw new Error('Login failed');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      document.getElementById('error-message').textContent = 'Invalid credentials';
    });
}

function signup(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (password !== confirmPassword) {
    document.getElementById('error-message').textContent = 'Passwords do not match';
    return;
  }

  fetch('/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  })
    .then((response) => {
      if (response.ok) {
        window.location.href = '/login';
      } else {
        throw new Error('Signup failed');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
      document.getElementById('error-message').textContent = 'Signup failed';
    });
}

// Admin dashboard functions
function filterAuditLogs() {
  const searchTerm = document.getElementById('audit-search').value.toLowerCase();
  const rows = document.querySelectorAll('#audit-table tbody tr');

  rows.forEach(row => {
    const text = row.textContent.toLowerCase();
    row.style.display = text.includes(searchTerm) ? '' : 'none';
  });
}

function exportAuditLogs() {
  const table = document.getElementById('audit-table');
  const rows = Array.from(table.querySelectorAll('tr'));
  
  let csv = [];
  rows.forEach(row => {
    const cells = Array.from(row.querySelectorAll('td, th'));
    const rowData = cells.map(cell => `"${cell.textContent}"`).join(',');
    csv.push(rowData);
  });

  const csvContent = csv.join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.setAttribute('hidden', '');
  a.setAttribute('href', url);
  a.setAttribute('download', 'audit_logs.csv');
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

// Patient functions
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
      alert('Failed to add patient');
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
      alert('Failed to update patient');
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
        alert('Failed to delete patient');
      });
  }
}

// Doctor functions
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
      alert('Failed to add doctor');
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
      alert('Failed to update doctor');
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
        alert('Failed to delete doctor');
      });
  }
}

// Appointment functions
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
      alert('Failed to add appointment');
    });
}

function showUpdateAppointmentForm(appointmentID, doctorID, patientID, date, time) {
  document.getElementById('update-appointment-id').value = appointmentID;
  document.getElementById('update-doctor-id').value = doctorID;
  document.getElementById('update-patient-id').value = patientID;
  document.getElementById('update-date').value = date;
  document.getElementById('update-time').value = time;
  document.getElementById('update-appointment-form').style.display = 'block';
}

function updateAppointment(event) {
  event.preventDefault();
  const appointmentID = document.getElementById('update-appointment-id').value;
  const doctorID = document.getElementById('update-doctor-id').value;
  const patientID = document.getElementById('update-patient-id').value;
  const date = document.getElementById('update-date').value;
  const time = document.getElementById('update-time').value;

  fetch('/menu3/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ appointmentID, doctorID, patientID, date, time }),
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
      alert('Failed to update appointment');
    });
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
        alert('Failed to delete appointment');
      });
  }
}

// Utility functions
function validateForm() {
  const requiredFields = document.querySelectorAll('[required]');
  let isValid = true;

  requiredFields.forEach(field => {
    if (!field.value) {
      field.classList.add('error');
      isValid = false;
    } else {
      field.classList.remove('error');
    }
  });

  return isValid;
}

function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

function formatTime(time) {
  return new Date(`1970-01-01T${time}`).toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit'
  });
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Add form validation to all forms
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', event => {
      if (!validateForm()) {
        event.preventDefault();
        alert('Please fill in all required fields');
      }
    });
  });

  // Initialize any datepickers or timepickers
  const datePickers = document.querySelectorAll('input[type="date"]');
  const timePickers = document.querySelectorAll('input[type="time"]');

  datePickers.forEach(picker => {
    picker.min = new Date().toISOString().split('T')[0];
  });

  // Add search functionality to tables
  const searchInputs = document.querySelectorAll('.search-input');
  searchInputs.forEach(input => {
    input.addEventListener('keyup', function() {
      const searchTerm = this.value.toLowerCase();
      const tableBody = this.closest('.table-container').querySelector('tbody');
      const rows = tableBody.querySelectorAll('tr');

      rows.forEach(row => {
        const text = row.textContent.toLowerCase();
        row.style.display = text.includes(searchTerm) ? '' : 'none';
      });
    });
  });
});