from speech_nlp.video.video_to_audio import video_to_audio
from speech_nlp.speech.speech_to_text import speech_to_text

def video_to_text(video_path):
    audio_path = "temp_audio.wav"

    video_to_audio(video_path, audio_path)

    result = speech_to_text(audio_path)

    return result
