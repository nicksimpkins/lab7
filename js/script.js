function init() {
  function event() {
    var txtinput = document.getElementById('entryinput');
    alert('Nicholas Simpkins: ' + txtinput.value);
    var textout = document.getElementById('textoutput');
    textout.innerHTML = txtinput.value;
  }
  var redbutton = document.getElementById('entrybutton');
  redbutton.addEventListener('click', event);
}
window.addEventListener('load', init);