function enviarPergunta() {
    const pergunta = document.getElementById('pergunta-input').value;

    if (pergunta.length < 3) {
        alert("Por favor, faça uma pergunta mais específica.");
        return;
    }

    fetch('http://127.0.0.1:5000/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pergunta: pergunta }),
    })
        .then(response => response.json())
        .then(data => {
            const chatBox = document.getElementById('chat-box');
            const userMessage = `<div class='message user'>Você: ${pergunta}</div>`;
            let botMessage = "";

            if (data.resposta) {
                botMessage = `<div class='message bot'>Assistente: ${data.resposta}</div>`;
            } else if (data.erro) {
                botMessage = `<div class='message bot'>Erro: ${data.erro}</div>`;
            }

            chatBox.innerHTML += userMessage + botMessage;
            document.getElementById('pergunta-input').value = "";
        })
        .catch(error => {
            console.error('Erro:', error);
        });
}

function limparChat() {
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML = ""; // Limpa o conteúdo do chat
}

