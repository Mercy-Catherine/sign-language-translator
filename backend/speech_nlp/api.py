from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime
import shutil
import os

from speech_nlp.video.video_to_text import video_to_text
from speech_nlp.nlp.text_processing import process_text

app = FastAPI()

# CORS (required for React UI)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/video")
async def video_endpoint(file: UploadFile = File(...)):
    temp_video_path = "temp_video.mp4"

    try:
        # Save uploaded video
        with open(temp_video_path, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        # Video → Text
        result = video_to_text(temp_video_path)

        if not result["success"]:
            return {
                "module": "speech_nlp",
                "success": False,
                "error": result["error"],
                "timestamp": datetime.utcnow().isoformat()
            }

        raw_text = result["text"]
        processed_text = process_text(raw_text)

        return {
            "module": "speech_nlp",
            "success": True,
            "recognized_text": raw_text,
            "processed_text": processed_text,
            "timestamp": datetime.utcnow().isoformat()
        }

    finally:
        # Cleanup temp file
        if os.path.exists(temp_video_path):
            os.remove(temp_video_path)
