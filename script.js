function sendMessage() {

    const input = document.getElementById("messageInput");
    const messages = document.getElementById("messages");

    const text = input.value.trim();

    if (text === "") {
        return;
    }

    const message = document.createElement("div");

    message.classList.add("message", "sent");

    message.textContent = text;

    messages.appendChild(message);

    input.value = "";

    messages.scrollTop = messages.scrollHeight;
}


function openChat(name) {

    document.getElementById("contactName").textContent = name;

    const messages = document.getElementById("messages");

    messages.innerHTML = `
        <div class="message received">
            Halo, saya ${name} 👋
        </div>
    `;
}


document
    .getElementById("messageInput")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            sendMessage();
        }

    });
