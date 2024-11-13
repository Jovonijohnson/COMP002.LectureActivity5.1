// Alert button event listener that triggers only once
document.getElementById('alertButton').addEventListener('click', function() {
    alert('Button clicked!');
}, { once: true }); // The event listener will be removed after being invoked once

// Link event listener that prevents navigation and shows alert
document.getElementById('favoriteLink').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent navigation
    alert('No distractions! I’m coding!');
});
