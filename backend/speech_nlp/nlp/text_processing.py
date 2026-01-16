import spacy

nlp = spacy.load("en_core_web_sm")

def process_text(text: str) -> str:
    if not text:
        return ""

    doc = nlp(text)
    keywords = [
        token.lemma_
        for token in doc
        if not token.is_stop and not token.is_punct
    ]

    return " ".join(keywords)
