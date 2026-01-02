import spacy

nlp = spacy.load("en_core_web_sm")

def process_text(text):
    doc = nlp(text)
    keywords = []

    for token in doc:
        if not token.is_stop and not token.is_punct:
            keywords.append(token.lemma_)

    return " ".join(keywords)
