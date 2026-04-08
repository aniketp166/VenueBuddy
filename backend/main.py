from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable CORS for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Welcome to VenueBuddy API", "status": "online"}

@app.get("/api/crowd-stats")
async def get_crowd_stats():
    # Realistic mock data for a large venue
    return {
        "stadium_occupancy": "82%",
        "active_events": ["Main Match: Team A vs Team B"],
        "facilities": [
            {"name": "Gate A", "wait_time": "4 min", "status": "clear"},
            {"name": "Gate B", "wait_time": "15 min", "status": "busy"},
            {"name": "Restroom North", "wait_time": "2 min", "status": "clear"},
            {"name": "Restroom South", "wait_time": "8 min", "status": "moderate"},
            {"name": "Food Zone 1", "wait_time": "12 min", "status": "busy"},
            {"name": "Merchandise", "wait_time": "5 min", "status": "clear"}
        ],
        "weather": "24°C, Clear Skies"
    }

@app.get("/api/seating")
async def get_seating_status():
    # Mock seating sections
    return {
        "sections": [
            {"id": "N1", "status": "full", "color": "#ef4444"},
            {"id": "N2", "status": "available", "color": "#22c55e"},
            {"id": "S1", "status": "crowded", "color": "#f59e0b"},
            {"id": "S2", "status": "available", "color": "#22c55e"}
        ]
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
