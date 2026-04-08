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
    # Placeholder for crowd data
    return {
        "stadium_occupancy": "75%",
        "gate_a_wait": "5 mins",
        "gate_b_wait": "12 mins",
        "food_court_status": "busy"
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
