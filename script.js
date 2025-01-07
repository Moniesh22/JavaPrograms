document.getElementById('show-message-btn').addEventListener('click', function() {
    if (confirm('Are you sure you want to show the message?')) {
        document.getElementById('show-message-btn').style.display = 'none';
        document.getElementById('page-flip-container').style.display = 'flex';
        setTimeout(function() {
            document.getElementById('page-flip-container').style.display = 'none';
            document.getElementById('sparkles-container').style.display = 'flex';
            document.getElementById('papers-container').style.display = 'flex';
