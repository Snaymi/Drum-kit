function playSound(e) {
  let keyCode;
  if (e.type === 'keydown') {
    keyCode = e.keyCode;
  }
  else if (e.type === 'click') {
    const keyDiv = e.currentTarget.querySelector('.key');
    if (!keyDiv) return; // If no keyDiv found, exit the function
    keyCode = keyDiv.getAttribute('data-key');
  }
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${keyCode}"]`)
  if(!audio) return; //stop the function from running all together
  audio.currentTime = 0;//rewind to the start
  audio.play();
  console.log(key);
  key.classList.add('playing'); 
}
function removeTransition(e) {
    console.log(e);
    if(e.propertyName !== 'transform') return; //skip it if it's not a transform
    this.classList.remove('playing'); //remove the class playing
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => {
  key.addEventListener('transitionend', removeTransition);
  key.parentElement.addEventListener('click', playSound); // Listener for click events on the parent element.
});
window.addEventListener('keydown', playSound);