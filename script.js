var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var lockButton = document.getElementById('lock-slider');
var value = document.getElementById('hidden');
var valoremio = document.getElementById('valore-mio')
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

lockButton.addEventListener('click',() => {
    slider.disabled = true;
    lockButton.disabled = true;
    valoremio = this.value + 1;
    value.style.visibility = 'visible';
    
})