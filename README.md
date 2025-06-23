# 🏥 Healthy Haven

**Healthy Haven** is a smart healthcare web application that empowers users to easily locate nearby hospitals, conveniently book doctor appointments, and intelligently check symptoms for possible diseases. This project is built with a combination of frontend and backend technologies, aiming to make healthcare access faster, smarter, and more accessible for everyone.

---

## 📌 About the Project

Healthcare in today’s world should be fast, convenient, and intelligent. **Healthy Haven** aims to bridge the gap between patients and healthcare providers by offering a platform where users can:

- Search and find nearby hospitals based on location.
- Schedule appointments with available doctors without long waits.
- Input symptoms and receive a list of possible conditions for quicker decision-making.

This is especially useful in emergencies or in unfamiliar locations where users need to find reliable medical help quickly.

---

## 🚀 Features

### 🏥 Hospital Finder
- Locate nearby hospitals using location-based filtering.
- View hospital names, addresses, and contact details.

### 📅 Doctor Appointment Booking
- See available doctors based on specialization and schedule.
- Book appointments quickly through a simple interface.

### 🧠 Disease/Symptom Checker
- Enter symptoms in plain language.
- Receive suggestions on likely diseases (powered by Python logic).
- Get basic guidance on next steps or urgency.

---

## 🛠️ Tech Stack

### 🖥️ Frontend
- **HTML5** – Structure the content on the web.
- **CSS3** – Styling and responsiveness.
- **JavaScript** – Interactivity and client-side logic.

### 🔙 Backend
- **Java (Spring Boot)** – Main backend server for handling APIs, user data, appointment scheduling, etc.
- **Python** – Used for disease prediction/symptom analysis (e.g., machine learning or keyword matching).

### 🗃️ Database
- **MySQL** – Relational database for storing users, hospitals, appointments, and more.

---

## 📁 Project Structure

healthy-haven/
│
├── frontend/
│ ├── index.html # Homepage
│ ├── styles.css # Styling
│ └── script.js # Frontend logic
│
├── backend/
│ ├── java/ # Java Spring Boot app
│ └── python/
│ └── disease_checker.py # Symptom analysis logic
│
├── database/
│ └── schema.sql # MySQL DB schema for tables
│
└── README.md # Project documentation

---

🧪 Usage
1. Open the homepage: You’ll be presented with navigation options to locate hospitals or check symptoms.
2. Search hospitals: Enter your location or allow location access to find nearby healthcare centers.
3. Book an appointment: Choose a doctor, pick a time, and confirm your appointment.
4. Check a disease: Enter your symptoms to get a list of possible conditions and suggestions.

---

📸 Screenshots 

![image alt](https://github.com/sourasish123/project_1/blob/b0a64ce39f4ad328e7545dad938486891b1ee566/Screenshot%202025-06-24%20003924.png)

---

🙏 Acknowledgements

Google Maps API / OpenStreetMap – For hospital location data.
Spring Boot – Java backend framework.
Python libraries – For disease analysis or data processing.
All open-source tools that made this project possible.
