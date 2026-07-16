// ============================================================
// KONFIGURASI SUMBER DATA
// ============================================================
// Isi link di bawah dengan URL "Publish to web" (format CSV)
// dari Google Sheets Anda. Setelah diisi dan file ini di-commit ke
// GitHub, dashboard otomatis membaca data terbaru dari Google Sheets
// setiap kali dibuka -- tidak perlu edit data.js atau upload ulang lagi.
//
// SEKARANG SEMUA SUMBER DATA ADA DALAM 1 FILE GOOGLE SHEETS
// (hasil import template_sumber_data.xlsx yang berisi 4 sheet:
// PETUNJUK, NKO, INDIKATOR, dan UP3). Publish tiap sheet SATU PER SATU:
//
// 1. Buka Google Sheets sumber data Anda (isi dari template_sumber_data.xlsx)
// 2. Menu File > Share > Publish to web
// 3. Pada dropdown pertama pilih sheet "NKO", dropdown kedua pilih "Comma-separated values (.csv)"
// 4. Klik Publish -> salin link yang muncul -> tempel ke NKO_CSV_URL di bawah
// 5. Ulangi langkah 3-4 untuk sheet "INDIKATOR" -> tempel ke INDIKATOR_CSV_URL
// 6. Ulangi langkah 3-4 untuk sheet "UP3" -> tempel ke UP3_CSV_URL
// (total 3 link CSV berbeda, dari 1 file Google Sheets yang sama -- pilih
// sheet yang benar di dropdown tiap kali publish, karena tiap sheet
// menghasilkan link CSV-nya sendiri-sendiri)
//
// PENTING untuk sheet UP3: jangan ubah urutan/posisi kolom (kolom R:AC =
// target, AE:AP = realisasi, AR:BC = pencapaian, per Jan-Des) -- dashboard
// membaca data berdasarkan POSISI kolom tersebut, bukan nama header.
//
// Jika link masih kosong (""), dashboard akan memakai data
// bawaan di data.js / index.html sebagai fallback.
// ============================================================

const CONFIG = {
  NKO_CSV_URL: "https://docs.google.com/spreadsheets/d/e/2PACX-1vR2hHu9XdLJR1tnYthzECx0armrL40W8POGagzfnjnmMO_yGVERHqccySMs57KKQA/pub?gid=234297028&single=true&output=csv",
  INDIKATOR_CSV_URL: "https://docs.google.com/spreadsheets/d/e/2PACX-1vR2hHu9XdLJR1tnYthzECx0armrL40W8POGagzfnjnmMO_yGVERHqccySMs57KKQA/pub?gid=2060928322&single=true&output=csv",
  UP3_CSV_URL: ""
};
