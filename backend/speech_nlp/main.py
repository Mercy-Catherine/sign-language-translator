from speech_nlp.speech.speech_to_text import speech_to_text
from speech_nlp.nlp.text_processing import process_text

def run_pipeline():
    text = speech_to_text()
    if not text:
        print("No speech detected")
        return

    processed_text = process_text(text)
    print("Final output for sign module:", processed_text)

if __name__ == "__main__":
    run_pipeline()

