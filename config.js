// ============================================================
// KONFIGURASI SUMBER DATA
// ============================================================
// Isi kedua link di bawah dengan URL "Publish to web" (format CSV)
// dari Google Sheets Anda. Setelah diisi dan file ini di-commit ke
// GitHub, dashboard otomatis membaca data terbaru dari Google Sheets
// setiap kali dibuka -- tidak perlu edit data.js atau upload ulang lagi.
//
// Cara mendapatkan link:
// 1. Buka Google Sheets sumber data Anda (isi dari template_sumber_data.xlsx)
// 2. Menu File > Share > Publish to web
// 3. Pada dropdown pertama pilih sheet "NKO", dropdown kedua pilih "Comma-separated values (.csv)"
// 4. Klik Publish -> salin link yang muncul -> tempel ke NKO_CSV_URL di bawah
// 5. Ulangi langkah 3-4 untuk sheet "INDIKATOR" -> tempel ke INDIKATOR_CSV_URL
//
// Jika kedua link masih kosong (""), dashboard akan memakai data
// bawaan di data.js sebagai fallback.
// ============================================================

const CONFIG = {
  NKO_CSV_URL: "https://docs.google.com/spreadsheets/d/e/2PACX-1vR2hHu9XdLJR1tnYthzECx0armrL40W8POGagzfnjnmMO_yGVERHqccySMs57KKQA/pub?gid=234297028&single=true&output=csv",
  INDIKATOR_CSV_URL: "https://docs.google.com/spreadsheets/d/e/2PACX-1vR2hHu9XdLJR1tnYthzECx0armrL40W8POGagzfnjnmMO_yGVERHqccySMs57KKQA/pub?gid=2060928322&single=true&output=csv"
};
