// Mendapatkan elemen konten fitur
const fitur = document.getElementById('fitur');

// Mendapatkan elemen link "Features"
const fiturLink = document.querySelector('a[href="#fitur"]');

// Mendeteksi klik pada link "Features"
fiturLink.addEventListener('click', (event) => {
    event.preventDefault(); // Menghentikan perilaku default dari link

    // Scroll ke bagian "Fitur" dengan animasi
    fitur.scrollIntoView({ behavior: 'smooth' });
});

// Mendeteksi pergerakan scroll
window.addEventListener('scroll', () => {
    // Mendapatkan posisi vertikal dari elemen fitur
    const fiturPos = fitur.getBoundingClientRect().top;

    // Menentukan kriteria untuk memicu animasi saat fitur muncul di atas layar
    const threshold = window.innerHeight - 100;

    if (fiturPos < threshold) {
        // Tambahkan kelas animasi saat fitur masuk ke dalam view
        fitur.classList.add('animate');
    }
});
