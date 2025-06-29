document.getElementById('startBtn').addEventListener('click', () => {
    const token = document.getElementById('tokenInput').value.trim();
    const status = document.getElementById('status');

    if (!token) {
        status.textContent = 'Durum: Lütfen geçerli bir token gir.';
        return;
    }

    status.textContent = 'Durum: Bot başlatılıyor...';

    // Simülasyon: Gerçek bağlantı burada kurulacak
    setTimeout(() => {
        status.textContent = 'Durum: Bot aktif ve kazanca odaklı!';
    }, 2000);
});