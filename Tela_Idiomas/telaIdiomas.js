

document.addEventListener('DOMContentLoaded', () => {
    
    const languageItems = document.querySelectorAll('.language-item');

    
    languageItems.forEach(item => {
        item.addEventListener('click', () => {
            
            const language = item.querySelector('p').textContent;
            localStorage.setItem('selectedLanguage', language);

            
            window.location.href = '../Tela_intermediaria/telaIntermediario.html';
        });
    });
});





document.addEventListener('DOMContentLoaded', () => {
    const mascoteImg = document.getElementById('mascote-img');
    const audioSiim = document.getElementById('audio-siim');

    if (mascoteImg && audioSiim) {
        mascoteImg.addEventListener('mouseenter', () => {
            // Adicionando logs para verificar se o evento está sendo capturado
            console.log('Mouse entrou no mascote.');
            try {
                audioSiim.currentTime = 0; // Reinicia o áudio para garantir a reprodução completa
                audioSiim.play().then(() => {
                    console.log('Áudio reproduzido com sucesso.');
                }).catch((error) => {
                    console.error('Erro ao reproduzir o áudio:', error);
                });
            } catch (error) {
                console.error('Erro ao tentar reproduzir o áudio:', error);
            }
        });
    } else {
        console.error('Elementos não encontrados: mascoteImg ou audioSiim.');
    }
});
