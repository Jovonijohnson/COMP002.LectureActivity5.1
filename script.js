// Alert button event listener that triggers only once
document.getElementById('alertButton').addEventListener('click', function() {
    alert('Button clicked!');
}, { once: true }); // The event listener will be removed after being invoked once


