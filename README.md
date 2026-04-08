# VenueBuddy - Smart Stadium Assistant

**VenueBuddy** is a smart, real-time assistant designed to enhance the physical event experience at large-scale sporting venues. Built as part of the **Virtual: PromptWars** challenge.

## 🏆 Challenge Vertical
**Vertical**: The Smart Fan (Experience Manager)
**Persona**: An attendee looking for a frictionless, data-driven match day experience.

## 🚀 Approach and Logic
VenueBuddy uses a dual-engine approach to solve venue congestion:
1.  **Direct Data Insights**: Real-time monitoring of crowd density at gates and concession stands to provide live "wait-time" estimates.
2.  **AI-Powered Concierge**: A Gemini-based chat interface that understands natural language queries about the venue, helping users find the nearest/fastest facilities.

## 🛠️ How it Works
-   **Backend**: A FastAPI server provides endpoints for real-time crowd statistics.
-   **Frontend**: A modern React dashboard with a premium glassmorphic UI, offering a high-end feel for attendees.
-   **Real-time Simulation**: The system simulates crowd flow to demonstrate the "Live Crowd Pulse" feature.

## ⚙️ How to Run

### Backend (FastAPI)
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Start the server:
   ```bash
   uvicorn main:app --reload
   ```
   *The backend will be available at `http://localhost:8000`.*

### Frontend (React)
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   *The frontend will be available at `http://localhost:5173` (or the port shown in your terminal).*

## 📝 Assumptions
-   The stadium has IoT sensors or camera-based counting at major bottlenecks (gates, restrooms, food courts).
-   Attendees have mobile access to the web app within the stadium (low-latency).

---
*Created by [Aniket Patil](https://github.com/aniketp166) for Hack2Skill Virtual PromptWars.*
