import json
from datetime import datetime

from speech_nlp.speech.speech_to_text import speech_to_text
from speech_nlp.nlp.text_processing import process_text


def main():
    result = speech_to_text()

    if not result["success"]:
        print(json.dumps({
            "module": "speech_nlp",
            "success": False,
            "error": result["error"],
            "timestamp": datetime.now().isoformat()
        }, indent=2))
        return

    raw_text = result["text"]
    processed_text = process_text(raw_text)

    output = {
        "module": "speech_nlp",
        "success": True,
        "recognized_text": raw_text,
        "processed_text": processed_text,
        "timestamp": datetime.now().isoformat()
    }

    print(json.dumps(output, indent=2))


if __name__ == "__main__":
    main()
