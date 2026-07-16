// ============================================================
// KONFIGURASI SUMBER DATA
// ============================================================
// Isi link di bawah dengan URL "Publish to web" (format CSV)
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
// UNTUK TAB "DASHBOARD KINERJA" (data bulanan per indikator, sheet UP3):
// 6. Buka file Excel sumber "Dashboard Kinerja" (KM_MDN...xlsx) di Google Sheets
// 7. Menu File > Share > Publish to web -> pilih sheet "UP3" (BUKAN "Entire Document")
//    -> format "Comma-separated values (.csv)" -> Publish
// 8. Salin link yang muncul -> tempel ke UP3_CSV_URL di bawah
// PENTING: jangan ubah urutan/posisi kolom di sheet UP3 (kolom R:AC = target,
// AE:AP = realisasi, AR:BC = pencapaian, per Jan-Des) -- dashboard membaca
// data berdasarkan POSISI kolom tersebut, bukan nama header.
//
// Jika link masih kosong (""), dashboard akan memakai data
// bawaan di data.js / index.html sebagai fallback.
// ============================================================

const CONFIG = {
  NKO_CSV_URL: "https://docs.google.com/spreadsheets/d/e/2PACX-1vR2hHu9XdLJR1tnYthzECx0armrL40W8POGagzfnjnmMO_yGVERHqccySMs57KKQA/pub?gid=234297028&single=true&output=csv",
  INDIKATOR_CSV_URL: "https://docs.google.com/spreadsheets/d/e/2PACX-1vR2hHu9XdLJR1tnYthzECx0armrL40W8POGagzfnjnmMO_yGVERHqccySMs57KKQA/pub?gid=2060928322&single=true&output=csv",
  UP3_CSV_URL: ""
};
