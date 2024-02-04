function home() {
    document.getElementById('content').innerHTML = "<center><h1>Homepage</h1></center>";
}

function link() {
    document.getElementById('content').innerHTML = "<center><h1>Links</h1></center>";
}

function test() {
    document.getElementById("content").innerHTML = "<center><h1>Test</h1></center>"
}

function Login() {
    window.location.href = "login.html"
}


// comunity chat
document.addEventListener('DOMContentLoaded', () => {
    // Retrieve chat messages from local storage
    const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];

    // Display existing messages
    const chatDisplay = document.getElementById('chat-display');
    messages.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.innerText = message;
        chatDisplay.appendChild(messageElement);
    });

    // Function to send a message
    window.sendMessage = function() {
        const messageInput = document.getElementById('message-input');
        const message = messageInput.value.trim();

        if (message !== '') {
            // Add message to the array
            messages.push(message);

            // Save messages to local storage
            localStorage.setItem('chatMessages', JSON.stringify(messages));

            // Display the new message
            const messageElement = document.createElement('div');
            messageElement.innerText = message;
            chatDisplay.appendChild(messageElement);

            // Clear the input field
            messageInput.value = '';
        }
    };
});
