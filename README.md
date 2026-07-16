# Dashboard Kinerja & Ranking ULP — UP3 Madiun

Dashboard statis dengan 2 tab:
- **Ranking & Tren ULP** — ranking NKO antar-ULP, prognosa (proyeksi tren), dan realisasi bulanan per indikator (tren tiap indikator per ULP, bulan per bulan).
- **Dashboard Kinerja** — infografis kinerja UP3 per indikator (gaya kartu ber-ikon), dengan pemilih bulan Januari–Desember.

Semua data diambil otomatis dari **1 file Google Sheets** (jadi Anda tinggal edit spreadsheet, tidak perlu sentuh kode), atau memakai data bawaan di `data.js`/`index.html` jika belum di-setup.

## Isi folder

| File | Fungsi | Perlu diedit rutin? |
|---|---|---|
| `index.html` | Tampilan dashboard | Tidak |
| `config.js` | Link Google Sheets sumber data | **Sekali di awal saja** |
| `data.js` | Data cadangan (dipakai jika `config.js` kosong / gagal fetch) | Opsional |
| `template_sumber_data.xlsx` | Template untuk diupload ke Google Sheets | Ini yang diisi tiap bulan |
| `README.md` | Panduan ini | — |

---

## BAGIAN 1 — Siapkan sumber data di Google Sheets

1. Buka [Google Drive](https://drive.google.com), klik **New → File upload**, upload file `template_sumber_data.xlsx`.
2. Klik kanan file yang sudah terupload → **Open with → Google Sheets**. Ini otomatis mengonversinya jadi Google Sheet.
3. Di dalamnya ada 4 sheet/tab:
   - **PETUNJUK** — cara isi (baca dulu)
   - **NKO** — skor NKO tiap ULP per bulan (Jan–Jun sudah terisi dari data terakhir)
   - **INDIKATOR** — pencapaian tiap indikator per ULP, **per bulan** (blok baris JAN–DES sudah tersedia, persis seperti sheet NKO). Blok **JUN** sudah terisi dari data terakhir; blok bulan lain sudah ada definisi indikatornya (NO/GROUP/NAMA/BOBOT), tinggal diisi angka ULP-nya saat bulan itu tiba.
   - **UP3** — sumber data untuk tab **Dashboard Kinerja** (salinan langsung struktur file kinerja UP3 Anda: kolom TARGET, REALISASI, PENCAPAIAN untuk 12 bulan Jan–Des). **Jangan sisipkan/hapus kolom atau baris** di sheet ini — dashboard membaca berdasarkan posisi kolom (R:AC=target, AE:AP=realisasi, AR:BC=pencapaian), bukan nama header.
4. Setiap bulan baru: isi kolom bulan berikutnya di sheet **NKO**, isi angka ULP pada blok bulan yang sesuai di sheet **INDIKATOR**, dan isi kolom bulan yang sesuai (TARGET/REALISASI/PENCAPAIAN) di sheet **UP3**. Baris dengan `GROUP = TRUE` (sheet INDIKATOR) adalah judul kelompok, biarkan kosong. Kosongkan blok bulan yang belum ada realisasinya — dashboard akan menampilkan bulan itu sebagai celah kosong pada grafik tren indikator.
5. Publish sheet **NKO** sebagai CSV:
   - Menu **File → Share → Publish to web**
   - Dropdown pertama: pilih **NKO** (bukan "Entire document")
   - Dropdown kedua: pilih **Comma-separated values (.csv)**
   - Klik **Publish** → klik **OK** pada konfirmasi
   - Salin link yang muncul (bentuknya seperti `https://docs.google.com/spreadsheets/d/e/xxxxx/pub?gid=xxx&single=true&output=csv`)
6. Ulangi langkah 5 untuk sheet **INDIKATOR**, lalu ulangi lagi untuk sheet **UP3** — total 3 link CSV, satu per sheet (semuanya dari file Google Sheets yang sama, cuma beda pilihan sheet di dropdown tiap kali publish).
7. Simpan ketiga link ini — akan dipakai di Bagian 3.

> Catatan: sheet perlu izin akses **"Anyone with the link"** agar bisa dibaca dashboard (izin publish to web sudah otomatis mengatur ini).

---

## BAGIAN 2 — Setup GitHub dari awal

### A. Buat akun (lewati jika sudah punya)
1. Buka [github.com](https://github.com) → **Sign up** → ikuti instruksi (email, username, password).

### B. Buat repository baru
1. Setelah login, klik ikon **+** di kanan atas → **New repository**.
2. Isi **Repository name**, misal: `kinerja-ulp-madiun`.
3. Pilih **Public** (perlu ini agar GitHub Pages gratis bisa dipakai; kalau mau Private, perlu paket GitHub Pro/Team).
4. Centang **Add a README file** → klik **Create repository**.

### C. Upload file dashboard
1. Di halaman repo, klik **Add file → Upload files**.
2. Seret/upload semua file: `index.html`, `config.js`, `data.js`, `template_sumber_data.xlsx`.
3. Scroll ke bawah, klik **Commit changes**.

### D. Isi link Google Sheets ke config.js
1. Di repo, buka file `config.js` → klik ikon **pensil (Edit)** di kanan atas.
2. Tempel ketiga link CSV dari Bagian 1 ke dalam tanda kutip:
   ```js
   const CONFIG = {
     NKO_CSV_URL: "https://docs.google.com/spreadsheets/d/e/....../pub?output=csv",
     INDIKATOR_CSV_URL: "https://docs.google.com/spreadsheets/d/e/....../pub?output=csv",
     UP3_CSV_URL: "https://docs.google.com/spreadsheets/d/e/....../pub?output=csv"
   };
   ```
3. Klik **Commit changes**.

### E. Aktifkan GitHub Pages
1. Di repo, buka **Settings → Pages** (menu di sidebar kiri).
2. Bagian **Build and deployment → Source**, pilih **Deploy from a branch**.
3. Bagian **Branch**, pilih `main` dan folder `/ (root)` → **Save**.
4. Tunggu 1–2 menit. Refresh halaman — akan muncul URL:
   `https://<username>.github.io/kinerja-ulp-madiun/`
5. Buka link itu — dashboard sudah tayang dan membaca data langsung dari Google Sheets Anda.

Badge kecil di pojok kanan atas dashboard menunjukkan sumber data yang sedang dipakai:
- **"Sumber: Google Sheets (live)"** (hijau) → berhasil tersambung
- **"Sumber: data.js (lokal)"** (abu-abu) → link belum diisi / gagal diakses, dashboard otomatis pakai data cadangan

---

## BAGIAN 3 — Update data bulanan (rutin)

Cukup buka Google Sheet Anda, isi kolom bulan baru di sheet **NKO**, angka terbaru di sheet **INDIKATOR**, dan kolom bulan yang sesuai di sheet **UP3**. **Tidak perlu apa-apa lagi di GitHub** — dashboard membaca data terbaru setiap kali dibuka (Google butuh waktu sekitar 1–5 menit untuk memperbarui cache publish-to-web setelah Anda edit).

---

## Cara kerja proyeksi/prognosa

Kolom bulan yang masih kosong di sheet **NKO** dianggap "belum ada realisasi". Dashboard menghitung proyeksinya sendiri dengan **regresi linear** dari bulan-bulan yang sudah terisi — ditampilkan sebagai kolom "Proyeksi Des" di tabel ranking dan garis putus-putus di grafik tren. Ini estimasi arah tren, bukan target resmi.

## Troubleshooting

- **Badge tetap "data.js (lokal)"** → cek kembali link di `config.js` sudah benar dan sheet sudah di-*Publish to web* (bukan sekadar "Share").
- **Angka tidak berubah setelah edit sheet** → tunggu beberapa menit (cache Google), atau buka dashboard dalam mode private/incognito.
- **Kolom di dashboard kosong/aneh** → pastikan nama kolom di sheet **NKO** dan **INDIKATOR** persis sama dengan template (`BULAN`, `NO`, `GROUP`, `NAMA`, `BOBOT`, `MDK`, `MGT`, dst.), termasuk huruf besar-kecil.
- **Grafik "Realisasi Bulanan per Indikator" bolong di beberapa bulan** → wajar jika blok bulan itu di sheet INDIKATOR belum diisi angkanya; isi angka ULP pada blok bulan tersebut agar garis tersambung.
