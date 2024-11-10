document.addEventListener('DOMContentLoaded', () => {
    const wordContainer = document.getElementById('current-word');
    const imageOptions = document.querySelectorAll('.image-option');
    const feedback = document.getElementById('feedback');

    // Lista de palavras e imagens associadas
    const words = [
        { word: "Dog", dataWord: "cachorro" },
        { word: "Ball", dataWord: "bola" },
        { word: "Apple", dataWord: "maça" }
    ];
    let currentWordIndex = 0;

    // Função para carregar a palavra atual
    function loadWord() {
        if (currentWordIndex < words.length) {
            wordContainer.textContent = words[currentWordIndex].word;
            feedback.innerHTML = '';  // Limpa o feedback anterior
        } else {
            showCongratulations();
        }
    }

    imageOptions.forEach(option => {
        option.addEventListener('click', () => {
            const selectedDataWord = option.dataset.word;
            const currentDataWord = words[currentWordIndex].dataWord;

            if (selectedDataWord === currentDataWord) {
                feedback.innerHTML = '<p style="color: green;">Correto!!</p>';
                currentWordIndex++;
                setTimeout(loadWord, 1000);
            } else {
                feedback.innerHTML = '<p style="color: red;">Tente Novamente!!</p>';
            }
        });
    });

    function showCongratulations() {
        // Mostra mensagem de parabéns
        feedback.innerHTML = `
            <div class="congratulations">
                <p>Parabéns por completar!!</p>
            </div>
        `;

        // Redireciona para a página de idiomas após 3 segundos
        setTimeout(() => {
            window.location.href = '../Tela_Idiomas/telaIdiomas.html';
        }, 3000);
    }
    // Carrega a primeira palavra ao iniciar
    loadWord();
});
