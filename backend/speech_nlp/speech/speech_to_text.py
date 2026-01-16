import speech_recognition as sr


def speech_to_text(audio_file_path=None):
    """
    Converts speech to text.
    - If audio_file_path is provided → reads audio from file
    - Else → listens from microphone
    """

    recognizer = sr.Recognizer()

    try:
        # -------- AUDIO FILE INPUT (from video) --------
        if audio_file_path:
            with sr.AudioFile(audio_file_path) as source:
                audio = recognizer.record(source)

        # -------- MICROPHONE INPUT --------
        else:
            with sr.Microphone() as source:
                recognizer.adjust_for_ambient_noise(source, duration=0.5)
                audio = recognizer.listen(
                    source,
                    timeout=5,
                    phrase_time_limit=8
                )

        text = recognizer.recognize_google(audio)

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
            "error": f"Speech recognition service error: {str(e)}"
        }

    except Exception as e:
        return {
            "success": False,
            "text": "",
            "error": f"Unexpected error: {str(e)}"
        }
