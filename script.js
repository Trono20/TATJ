const quote = document.getElementById('quoteDisplay').textContent;
let i = 0;
document.getElementById('quoteDisplay').textContent = '';

function typeWriter() {
    if (i < quote.length) {
        document.getElementById('quoteDisplay').textContent += quote.charAt(i);
        i++;
        setTimeout(typeWriter, 100); // Adjust typing speed here
    }
}

window.onload = typeWriter;