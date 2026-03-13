const toggleBtn = document.getElementById('dark-toggle');
const body = document.body;

toggleBtn.addEventListener('click', function () {
  body.classList.toggle('light-mode');

  if (body.classList.contains('light-mode')) {
    toggleBtn.textContent = '🌙 Dark Mode';
  } else {
    toggleBtn.textContent = '☀ Light Mode';
  }
});
// ==============================
// FITUR 2: COUNTER
// ==============================

let count = 0;
const angkaDisplay = document.querySelector('#angka-counter');
const pesanDisplay = document.querySelector('#counter-pesan');
const btnTambah = document.querySelector('#btn-tambah');
const btnKurang = document.querySelector('#btn-kurang');

function updatePesan(n) {
  if (n === 0) pesanDisplay.textContent = 'Yuk mulai minum air!';
  else if (n < 4) pesanDisplay.textContent = 'Kurang minum nih...';
  else if (n < 8) pesanDisplay.textContent = 'Lumayan, terus tambah! 💧';
  else pesanDisplay.textContent = 'Keren! Sudah cukup minum air hari ini! 🎉';
}

btnTambah.addEventListener('click', function () {
  count++;
  angkaDisplay.textContent = count;
  updatePesan(count);
});

btnKurang.addEventListener('click', function () {
  if (count > 0) {
    count--;
    angkaDisplay.textContent = count;
    updatePesan(count);
  }
});
// ==============================
// FITUR 3: VALIDASI FORM
// ==============================

const btnKirim = document.querySelector('#btn-kirim');
const inputNama = document.querySelector('#input-nama');
const inputEmail = document.querySelector('#input-email');
const inputPesan = document.querySelector('#input-pesan');
const formFeedback = document.querySelector('#form-feedback');

function tampilkanPesan(teks, tipe) {
  formFeedback.textContent = teks;
  formFeedback.className = 'feedback ' + tipe; // set class
}

function isEmailValid(email) {
  // Regex sederhana untuk cek format email
  return email.includes('@') && email.includes('.');
}

btnKirim.addEventListener('click', function () {
  const nama = inputNama.value.trim();
  const email = inputEmail.value.trim();
  const pesan = inputPesan.value.trim();

  // Validasi: field kosong
  if (nama === '' || email === '' || pesan === '') {
    tampilkanPesan('⚠️ Semua field harus diisi!', 'error');
    return; // stop eksekusi di sini
  }

  // Validasi: format email
  if (!isEmailValid(email)) {
    tampilkanPesan('⚠️ Format email tidak valid! Contoh: nama@email.com', 'error');
    return;
  }

  // Jika semua valid
  tampilkanPesan('✅ Pesan berhasil dikirim! Terima kasih, ' + nama + '!', 'success');

  // Kosongkan form setelah berhasil
  inputNama.value = '';
  inputEmail.value = '';
  inputPesan.value = '';
});
