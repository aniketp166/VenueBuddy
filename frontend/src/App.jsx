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
              <div className="stats-list">
                <div className="stat-summary">
                  <span>Occupancy: <strong>{stats.stadium_occupancy}</strong></span>
                  <span> | </span>
                  <span>{stats.weather}</span>
                </div>
                <div className="facilities-grid">
                  {stats.facilities.map((f, i) => (
                    <div key={i} className={`facility-item status-${f.status}`}>
                      <span className="name">{f.name}</span>
                      <span className="wait">{f.wait_time}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <p>Could not connect to backend.</p>
            )}
          </div>

          <div className="card glass">
            <h2>Venue Buddy AI</h2>
            <div className="chat-interface">
              <div className="message bot">
                Hello! I can help you find the shortest lines for food or restrooms. What do you need?
              </div>
              <div className="chat-input">
                <input type="text" placeholder="e.g., Where is the nearest clear restroom?" />
                <button className="btn-send">Send</button>
              </div>
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
