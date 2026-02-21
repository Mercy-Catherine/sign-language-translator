from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
from pathlib import Path
from typing import List, Optional

# ----------------------------------------
# App
# ----------------------------------------
app = FastAPI(title="Sign Language Translator API")

# ----------------------------------------
# Base paths
# ----------------------------------------
BASE_DIR = Path(__file__).resolve().parent
STATIC_DIR = BASE_DIR / "static"
SIGN_VIDEOS_DIR = STATIC_DIR / "signs"
LETTER_VIDEOS_DIR = STATIC_DIR / "letters"

# ----------------------------------------
# Static files mount
# ----------------------------------------
app.mount("/static", StaticFiles(directory=STATIC_DIR), name="static")

# ----------------------------------------
# Root endpoint
# ----------------------------------------
@app.get("/")
def root():
    return {"message": "Sign Language API is running"}

# ----------------------------------------
# Helper: fingerspelling logic
# ----------------------------------------
def fingerspell_word(word: str) -> List[str]:
    videos = []
    for letter in word.lower():
        # Check both .jpg and .png
        letter_file = LETTER_VIDEOS_DIR / f"{letter}.jpg"
        if not letter_file.exists():
            letter_file = LETTER_VIDEOS_DIR / f"{letter}.png"

        if letter_file.exists():
            videos.append(f"/static/letters/{letter_file.name}")
        else:
            print(f"⚠️ Letter not found for fingerspelling: '{letter}'")
    print(f"Fingerspelling videos for '{word}': {videos}")
    return videos

# ----------------------------------------
# Single word endpoint
# ----------------------------------------
@app.get("/sign/{word}")
def get_sign(word: str):
    word_file = SIGN_VIDEOS_DIR / f"{word.lower()}.mp4"
    print(f"Checking word video: {word_file}, exists? {word_file.exists()}")

    if word_file.exists():
        return {
            "word": word,
            "type": "word",
            "videos": [f"/static/signs/{word.lower()}.mp4"]
        }

    return {
        "word": word,
        "type": "fingerspelling",
        "videos": fingerspell_word(word)
    }

# ----------------------------------------
# Sentence models
# ----------------------------------------
class SentenceRequest(BaseModel):
    sentence: str

class WordVideoStatus(BaseModel):
    word: str
    video_exists: bool
    video_path: Optional[str]
    fingerspelling_needed: bool
    fingerspelling_videos: Optional[List[str]]

# ----------------------------------------
# Sentence → signs endpoint
# ----------------------------------------
@app.post("/sentence-to-signs", response_model=List[WordVideoStatus])
async def sentence_to_signs(request: SentenceRequest):
    words = request.sentence.split()
    response = []

    for word in words:
        word_file = SIGN_VIDEOS_DIR / f"{word.lower()}.mp4"
        print(f"Checking word video: {word_file}, exists? {word_file.exists()}")

        if word_file.exists():
            response.append(
                WordVideoStatus(
                    word=word,
                    video_exists=True,
                    video_path=f"/static/signs/{word.lower()}.mp4",
                    fingerspelling_needed=False,
                    fingerspelling_videos=None
                )
            )
        else:
            response.append(
                WordVideoStatus(
                    word=word,
                    video_exists=False,
                    video_path=None,
                    fingerspelling_needed=True,
                    fingerspelling_videos=fingerspell_word(word)
                )
            )

    return response