from fastapi import FastAPI
from pydantic import BaseModel
from speech_nlp.speech.speech_to_text import speech_to_text
from speech_nlp.nlp.text_processing import process_text
from datetime import datetime

app = FastAPI()

class SpeechInput(BaseModel):
    text: str | None = None

@app.post("/speech")
def speech_endpoint(data: SpeechInput | None = None):
    
    # Case 1: Text sent from frontend / testing
    if data and data.text:
        raw_text = data.text
        success = True
        error = None

    # Case 2: Use microphone
    else:
        result = speech_to_text()
        success = result["success"]
        raw_text = result["text"]
        error = result["error"]

    if not success:
        return {
            "module": "speech_nlp",
            "success": False,
            "error": error,
            "timestamp": datetime.utcnow().isoformat()
        }

    processed_text = process_text(raw_text)

    return {
        "module": "speech_nlp",
        "success": True,
        "recognized_text": raw_text,
        "processed_text": processed_text,
        "sign_tokens": [],   # for sign logic
        "timestamp": datetime.utcnow().isoformat()
    }

@app.get("/")
def health():
    return {"status": "Speech NLP service running"}
