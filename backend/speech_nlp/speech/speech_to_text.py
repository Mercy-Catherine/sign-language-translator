import speech_recognition as sr

def speech_to_text():
    r = sr.Recognizer()
    
    with sr.Microphone() as source:
        print("🎤 Speak now...")
        r.adjust_for_ambient_noise(source, duration=0.5)
        audio = r.listen(source)

    try:
        text = r.recognize_google(audio)
        print("Recognized:", text)
        return text
    except sr.UnknownValueError:
        return ""
    except sr.RequestError:
        return ""
