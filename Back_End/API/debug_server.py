import uvicorn
from server import app

if __name__ == "__main__":
    uvicorn.run("debug_server:app", host="0.0.0.0", port=7878, reload=True, log_level="info")