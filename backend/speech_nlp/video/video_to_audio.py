from moviepy import VideoFileClip
import os

def video_to_audio(video_path, audio_path):
    """
    Extract audio from a video file and save as wav
    """
    if not os.path.exists(video_path):
        raise FileNotFoundError(f"Video file not found: {video_path}")

    clip = VideoFileClip(video_path)

    if clip.audio is None:
        raise ValueError("No audio track found in video")

    clip.audio.write_audiofile(audio_path)
    clip.close()

    return audio_path
