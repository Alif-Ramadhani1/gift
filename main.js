let audio;

function setupBackgroundMusic() {
    audio = new Audio('sound/Taylor Swift - Lover.mp3');
    audio.loop = true;
    audio.volume = 0.5;
}

function playBackgroundMusic() {
    if (audio) {
        audio.play().catch(error => {
            console.log('Gagal memutar audio:', error);
        });
    }
}

window.onload = () => {
    document.body.classList.remove("container");
    setupBackgroundMusic();
    
    // Contoh: memulai musik saat pengguna mengklik di mana saja di halaman
    document.body.addEventListener('click', playBackgroundMusic, { once: true });
};