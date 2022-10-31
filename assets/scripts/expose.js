// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var selector = document.getElementById('horn-select');
  var volume = document.getElementById('volume-controls');
  var input = volume.querySelector('input');
  var button = document.querySelector('button');


  selector.addEventListener('change',img_audio_change);

  input.addEventListener('input',volume_img);
  
  const jsConfetti = new JSConfetti();
  const special_click = button_click(jsConfetti);
  button.addEventListener('click', special_click);
}


function img_audio_change(event){
  var img = document.querySelector('img');
  var audio = document.querySelector('.hidden');
  img.src = `assets/images/${event.target.value}.svg`;
  audio.src = `assets/audio/${event.target.value}.mp3`;
}

function volume_img(event){
  var volume_val = event.target.value;
  var img = document.getElementById('volume-controls').querySelector('img');
  var audio = document.querySelector('.hidden');
  audio.volume = volume_val/100;
  if(volume_val==0){
    img.src = "assets/icons/volume-level-0.svg"
  }
  if(volume_val < 33 && volume_val >= 1){
    img.src = "assets/icons/volume-level-1.svg"
  }
  if(volume_val < 67 && volume_val >= 33){
    img.src = "assets/icons/volume-level-2.svg"
  }
  if(volume_val >= 67){
    img.src = "assets/icons/volume-level-3.svg"
  }

}

function button_click(jsConfetti){
  return function(event) {
    var selector_val = document.getElementById('horn-select').value;
    var audio = document.querySelector('.hidden');
    audio.play();
    if(selector_val == "party-horn"){
      jsConfetti.addConfetti();
    }
  }
  
}