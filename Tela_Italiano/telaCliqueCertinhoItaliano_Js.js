document.addEventListener('DOMContentLoaded', () => {
    const wordContainer = document.getElementById('current-word');
    const imageOptions = document.querySelectorAll('.image-option');
    const feedback = document.getElementById('feedback');

    const words = [
        { word: "Matita", dataWord: "matita" },
        { word: "Penna ", dataWord: "penna " },
        { word: "Gomma", dataWord: "gomma" }
    ];
    let currentWordIndex = 0;

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
                feedback.innerHTML = '<p style="color: red;">Tente Novamente!</p>';
            }
        });
    });

    function showCongratulations() {
        // Mostra mensagem de parabéns
        feedback.innerHTML = `
            <div class="congratulations">
                <p>Parabéns por Completar!!</p>
            </div>
        `;

        // Redireciona para a página de idiomas após 3 segundos
        setTimeout(() => {
            window.location.href = '../Tela_Idiomas/telaIdiomas.html';
        }, 3000);
    }

    loadWord();
});
