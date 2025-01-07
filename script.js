document.getElementById('show-message-btn').addEventListener('click', function() {
    if (confirm('Are you sure you want to show the message?')) {
        document.getElementById('message-container').style.display = 'block';
        document.getElementById('message').innerText = 'Happy Birthday! Wishing you a day filled with love, laughter, and all your favorite things!';
    }
});
