document.querySelector('.login-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    try {
        const response = await fetch('http://127.0.0.1:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, senha })
        });

        const result = await response.json();
        if (response.ok) {
            alert(result.message);

            window.location.href = '../Tela_Idiomas/telaIdiomas.html';
        } else {
            alert(result.error || 'Erro ao realizar login');
        }
    } catch (error) {
        console.error('Erro:', error);
        alert('Erro ao se conectar com o servidor.');
    }
});
