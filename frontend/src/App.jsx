import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [stats, setStats] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:8000/api/crowd-stats')
      .then(res => res.json())
      .then(data => {
        setStats(data)
        setLoading(false)
      })
      .catch(err => {
        console.error("Error fetching stats:", err)
        setLoading(false)
      })
  }, [])

  return (
    <div className="container">
      <header>
        <h1>VenueBuddy</h1>
        <p className="subtitle">Smart Stadium Assistant</p>
      </header>

      <main>
        <section className="dashboard">
          <div className="card glass">
            <h2>Live Crowd Pulse</h2>
            {loading ? (
              <p>Loading stats...</p>
            ) : stats ? (
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="label">Occupancy</span>
                  <span className="value">{stats.stadium_occupancy}</span>
                </div>
                <div className="stat-item">
                  <span className="label">Gate A Wait</span>
                  <span className="value">{stats.gate_a_wait}</span>
                </div>
                <div className="stat-item">
                  <span className="label">Food Court</span>
                  <span className="value">{stats.food_court_status}</span>
                </div>
              </div>
            ) : (
              <p>Could not connect to backend.</p>
            )}
          </div>

          <div className="card glass">
            <h2>AI Assistant</h2>
            <div className="chat-placeholder">
              <p>How can I help you today?</p>
              <input type="text" placeholder="Ask about restrooms, food, or exits..." />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>&copy; 2026 VenueBuddy - Virtual PromptWars</p>
      </footer>
    </div>
  )
}

export default App
