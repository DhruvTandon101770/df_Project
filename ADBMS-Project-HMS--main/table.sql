

CREATE TABLE Doctor (
  DoctorID/PrimaryKey INT PRIMARY KEY,
  Name VARCHAR(50),
  Speciality VARCHAR(50)
);



CREATE TABLE Patient (
  PatientID/ForeignKey INT PRIMARY KEY,
  Name VARCHAR(50),
  Contact VARCHAR(50)
);



CREATE TABLE Appointment (
  AppointmentID/SuperKey INT PRIMARY KEY,
  Date DATE,
  Time TIME,
  DoctorID INT,
  PatientID INT,
  FOREIGN KEY (DoctorID) REFERENCES Doctor(DoctorID/PrimaryKey),
  FOREIGN KEY (PatientID) REFERENCES Patient(PatientID/ForeignKey)
);