from flask import Flask, render_template, request, jsonify
from transformers import pipeline

app = Flask(__name__)

# load the translation models
en_to_fr_translator = pipeline('translation_en_to_fr', model='Helsinki-NLP/opus-mt-en-fr')
fr_to_en_translator = pipeline('translation_fr_to_en', model='Helsinki-NLP/opus-mt-fr-en')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/translate', methods=['GET', 'POST'])

def translate():

    data = request.json
    text = data.get('text')
    #english to japanese, or japanese to english
    direction = data.get('direction')

    if direction == 'en-to-fr':
        translated = en_to_fr_translator(text)
    elif direction == 'fr-to-en':
        translated = fr_to_en_translator(text)
    
    return jsonify({'translated_text': translated[0]['translation_text']})

if __name__ == '__main__':
    app.run(debug=True)
