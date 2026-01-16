from speech_nlp.video.video_to_text import video_to_text

if __name__ == "__main__":
    video_path = r"C:\Users\mercy\Desktop\sample.mp4"

    result = video_to_text(video_path)
    print(result)
