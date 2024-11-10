document.addEventListener('DOMContentLoaded', () => {
    const playGameButton = document.getElementById('playGame');
    const talkMascotButton = document.getElementById('talkMascot');


    const selectedLanguage = localStorage.getItem('selectedLanguage');


    let gameUrl = '../Tela_Associacao/telaAssociacao.html';
    if (selectedLanguage) {
        switch (selectedLanguage.toLowerCase()) {
            case 'espanhol':
                gameUrl = '../Tela_Espanhol/ttelaCliqueCertinhoEspanhol.html';
                break;
            case 'francês':
                gameUrl = '../Tela_Frances/telaCliqueCertinhoFrances.html';
                break;
            case 'italiano':
                gameUrl = '../Tela_Italiano/telaCliqueCertinhoItaliano.html';
                break;
            default:
                gameUrl = '../Tela_Associacao/telaAssociacao.html';
                break;
        }
    }

    playGameButton.addEventListener('click', () => {

        window.location.href = gameUrl;
    });

    talkMascotButton.addEventListener('click', () => {

        window.location.href = '../Tela_Mascote/telaMascote.html';
    });
});
