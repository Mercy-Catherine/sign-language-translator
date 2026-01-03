import speech_recognition as sr

def speech_to_text():
    r = sr.Recognizer()

    try:
        with sr.Microphone() as source:
            r.adjust_for_ambient_noise(source, duration=0.5)
            audio = r.listen(source, timeout=5, phrase_time_limit=8)

        text = r.recognize_google(audio)
        return {
            "success": True,
            "text": text,
            "error": None
        }

    except sr.WaitTimeoutError:
        return {
            "success": False,
            "text": "",
            "error": "Listening timed out"
        }

    except sr.UnknownValueError:
        return {
            "success": False,
            "text": "",
            "error": "Could not understand audio"
        }

    except sr.RequestError as e:
        return {
            "success": False,
            "text": "",
            "error": f"Speech API error: {str(e)}"
        }

    except Exception as e:
        return {
            "success": False,
            "text": "",
            "error": f"Unexpected error: {str(e)}"
        }
