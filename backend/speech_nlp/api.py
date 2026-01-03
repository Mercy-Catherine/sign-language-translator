from fastapi import FastAPI
from speech_nlp.speech.speech_to_text import speech_to_text
from speech_nlp.nlp.text_processing import process_text
from datetime import datetime

app = FastAPI()

@app.post("/speech")
def speech_endpoint():
    result = speech_to_text()

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
