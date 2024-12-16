var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
var lockButton = document.getElementById('lock-slider');
var nascosto = document.getElementById('hidden');
var valore = document.getElementById('valore-mio')
var loading = document.getElementById('loading')
var riprova = document.getElementById('riprova')

output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}

lockButton.addEventListener('click',() => {
    slider.disabled = true;
    lockButton.disabled = true;
    loading.style.display = 'flex';
    setTimeout(() => {
        loading.style.display = 'none'; // Nasconde il messaggio dopo 5 secondi
        valore.textContent = parseInt(slider.value) + 1;
        nascosto.style.visibility = 'visible';
    }, 3000); // 5000 millisecondi = 5 secondi
    
    
})

riprova.addEventListener('click',() => {
    slider.disabled = false;
    lockButton.disabled = false;
    loading.style.display = 'none';
    nascosto.style.visibility = 'hidden'
})