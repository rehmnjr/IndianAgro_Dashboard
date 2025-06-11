# 🌾 IndianAgro_Dashboard

This is a React + Vite + TypeScript application that visualizes Indian agricultural production data using a dynamic table and an interactive bar chart.

Built as part of a frontend SDE assignment, this dashboard offers insights into crop production trends across financial years.

---

## 🔍 Features

- 📋 **Crop Table**: Shows the maximum and minimum production crop per year
- 📊 **Bar Chart**: Displays the average crop production across all years
- 🌗 **Dark/Light Theme**: Theme toggle with persistent state using Mantine
- 🚀 **Fast and responsive** UI with Mantine and Apache ECharts
- 🧠 **Missing data is treated as 0**, as per assignment requirements

---

## 🔗 Live Demo

👉 [**https://indianagro-dashboard.onrender.com/**](https://indianagro-dashboard.onrender.com/)

---

## 🖼️ Screenshots

### 📋 Table View – Crop Production Extremes

> ![Table Screenshot](./screenshots/table.png)

### 📊 Bar Chart – Average Crop Production

> ![Chart Screenshot](./screenshots/graph.png)

---

## 🧩 Tech Stack

- ⚛️ **React** + **Vite** (TypeScript)
- 🎨 **Mantine UI** (v8) – Layout, theming, components
- 📊 **Apache ECharts** – Bar chart rendering (no wrapper libs used)
- 💾 JSON dataset from **Manufac India Agro**

---

## 📁 Folder Structure

```bash
src/
├── components/
│   ├── CropTable.tsx         # Table showing min/max production crops
│   └── CropBarChart.tsx      # Bar chart showing average production
├── data/
│   └── Manufac _ India Agro Dataset.json
├── App.tsx                   # Main layout
├── main.tsx                  # Mantine setup + color scheme
└── index.html



How to Run Locally
Follow these steps to set up and run the project on your local machine:

📁 1. Clone the Repository
git clone https://github.com/your-username/IndianAgro_Dashboard.git
cd IndianAgro_Dashboard


📦 2. Install Dependencies
Using Yarn:
yarn install


Or using npm:
npm install


🚀 3. Start the Development Server
Using Yarn:
yarn dev


or using npm:
npm run dev



🌐 4. Open in Browser
http://localhost:5173


The app will be live and running on your local environment.
