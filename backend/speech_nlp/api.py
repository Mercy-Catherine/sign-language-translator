from fastapi import FastAPI
from speech_nlp.speech.speech_to_text import speech_to_text
from speech_nlp.nlp.text_processing import process_text
from datetime import datetime

app = FastAPI(title="Speech NLP Service")

@app.post("/speech")
def speech_endpoint():
    text = speech_to_text()
    processed_text = process_text(text)

    return {
        "module": "speech_nlp",
        "recognized_text": text,
        "processed_text": processed_text,
        "timestamp": datetime.now().isoformat()
    }
