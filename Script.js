// Function to speak predefined phrases
function speak(text) {
    const synth = window.speechSynthesis;

    if (!synth) {
        alert('Your browser does not support Text-to-Speech.');
        return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
}

// Function to speak custom input
function speakCustom() {
    const text = document.getElementById('tts-input').value;
    if (text.trim() === "") {
        alert('Please enter some text to speak.');
        return;
    }
    speak(text);
}
