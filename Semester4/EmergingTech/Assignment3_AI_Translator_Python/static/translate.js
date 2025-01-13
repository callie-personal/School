async function translateText() {
    const text = document.getElementById('inputText').value;
    const direction = document.getElementById('direction').value;

    const response = await fetch('/translate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text, direction })
    });

    const result = await response.json();
    document.getElementById('outputText').innerText = result.translated_text || result.error;
}