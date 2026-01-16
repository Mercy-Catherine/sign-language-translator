from fastapi import FastAPI, UploadFile, File
from speech_nlp.speech.speech_to_text import speech_to_text
from speech_nlp.nlp.text_processing import process_text
from speech_nlp.video.video_to_text import video_to_text
from datetime import datetime
import shutil
import os

app = FastAPI()

@app.post("/video")
async def video_endpoint(file: UploadFile = File(...)):
    temp_video_path = "temp_video.mp4"
    
    # Save uploaded video to temp file
    with open(temp_video_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    
    # Convert video → text
    result = video_to_text(temp_video_path)
    
    # Remove temp file
    os.remove(temp_video_path)
    
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
