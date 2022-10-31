// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  populateVoiceList();
  if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  var button = document.querySelector('button');
  button.addEventListener('click',speak);
}

function populateVoiceList() {
  if (typeof speechSynthesis === 'undefined') {
    return;
  }

  const voices = speechSynthesis.getVoices();

  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;


    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    document.getElementById("voice-select").appendChild(option);
  }
}

function speak(event){
  const synth = window.speechSynthesis;
  let voices = synth.getVoices();
  var text = document.getElementById('text-to-speak').value;
  var selectedOption = document.getElementById("voice-select").selectedOptions[0].getAttribute('data-name');;
  var utterance = new SpeechSynthesisUtterance(text);
  for (let i = 0; i < voices.length ; i++) {
    if (voices[i].name === selectedOption) {
      utterance.voice = voices[i];
    }
  }
  synth.speak(utterance);
  if(synth.speaking){
    document.querySelector('img').src = "assets/images/smiling-open.png";
  }
  else{
    document.querySelector('img').src = "assets/images/smiling.png";
  }
}
