# Panduan Guru: Membuat Soal Sendiri di Arena Juara ✏️

Panduan ini menjelaskan cara Bapak/Ibu Guru membuat paket soal sendiri, lalu memainkannya di 13 game Arena Juara. Panduan yang sama bisa dibuka langsung di aplikasi: **📝 Bank Soal Guru → 📘 Panduan**.

---

## 1. Langkah cepat (5 menit)

1. Di beranda, ketuk **📝 Bank Soal Guru**, lalu **➕ Buat Paket Soal**.
2. Isi data paket:
   - **Nama paket**, misalnya *Ekosistem Kelas 5*. Maksimal 40 huruf dan tidak boleh sama dengan paket lain.
   - **Pembuat** (nama guru). Boleh dikosongkan.
   - **Untuk kelas**: pilih satu kelas atau lebih. Tombol *Semua SD/MI*, *Semua SMP/MTs*, dan *Semua SMA/MA/SMK* memilih satu jenjang sekaligus.
3. Tambahkan soal lewat tab **🅰 Pilihan Ganda**, **✔✘ Benar/Salah**, **🧩 Pasangan**, **🔢 Urutan**, atau **⚡ Tempel Cepat** untuk menempel banyak soal sekaligus.
4. Ketuk **💾 Simpan paket**.
5. Ketuk **▶ Main** pada kartu paket. Pilih game, atur waktu dan target, lalu ketuk **MULAI**.

Paket juga muncul sebagai mata pelajaran **✏️ (nama paket)** di kelompok *Guru & Campuran*. Untuk menemukannya, pilih jenjang lalu kelas yang sama dengan kelas paket.

---

## 2. Empat jenis soal dan game yang memakainya

| Jenis | Cara mengisi | Dipakai di game |
|---|---|---|
| 🅰 **Pilihan Ganda (PG)** | Soal, 1 jawaban benar, dan 1–3 pengecoh. Urutan pilihan diacak otomatis. | Tarik Tambang, Balap Karung, Tangkap Gelembung, Ular Tangga, XOX, Pukul Tikus, Cerdas Cermat, Menara |
| ✔✘ **Benar/Salah (BS)** | Pernyataan dan kuncinya, Benar atau Salah. | Bom Waktu, Cerdas Cermat, Menara |
| 🧩 **Pasangan (PS)** | Satu set berisi 3–5 pasang, misalnya istilah ↔ arti. Isi kolom kanan tidak boleh kembar. | Cocok Kilat, Kartu Ingat |
| 🔢 **Urutan (UR)** | Instruksi dan 2–6 langkah, ditulis sesuai **urutan yang benar**. Game yang mengacak urutannya. | Panjat Pinang |
| 🎈 *otomatis* | Dibuat dari soal PG yang jawabannya **satu kata** huruf saja (3–12 huruf, tanpa spasi atau angka). | Tebak Kata Balon |

**Tidak wajib mengisi semua jenis.** Kalau satu jenis kosong, game memakai pengganti:
- Soal Benar/Salah dibuat dari soal PG.
- Set pasangan dibuat dari soal PG yang jawabannya pendek.
- Begitu juga sebaliknya.

Hasil terbaik didapat kalau jenis soal diisi sesuai game yang akan dimainkan.

---

## 3. Tempel Cepat: menyiapkan soal di Word, Excel, atau Notepad

Cara ini paling cepat untuk soal yang banyak. Tulis satu soal per baris, diawali kode jenisnya:

```
PG: Ibu kota Jawa Barat adalah... | Bandung | Semarang | Surabaya | Serang
BS: Matahari terbit dari timur | B
BS: Ikan bernapas dengan paru-paru | S
PS: Akar = menyerap air ; Daun = fotosintesis ; Batang = menopang
UR: Urutkan daur air | Penguapan ; Pengembunan ; Hujan
# baris yang diawali # adalah catatan dan tidak dibaca
```

| Kode | Pola penulisan |
|---|---|
| `PG:` | `soal \| jawaban BENAR \| pengecoh 1 \| pengecoh 2 \| pengecoh 3` |
| `BS:` | `pernyataan \| B` atau `pernyataan \| S` (B, Benar, dan Ya dianggap benar) |
| `PS:` | `kiri = kanan ; kiri = kanan ; kiri = kanan` (3–5 pasang) |
| `UR:` | `instruksi \| langkah 1 ; langkah 2 ; langkah 3` (2–6 langkah) |

Aturan penting:
- Pada baris PG, bagian kedua **selalu jawaban benar**. Pilihan diacak saat dimainkan, jadi jawaban benar tidak akan selalu muncul di posisi yang sama.
- Tanda `|` dan `;` hanya dipakai sebagai pemisah, jangan dipakai di dalam kalimat soal.
- Tombol **✅ Terapkan** *mengganti* semua soal di paket dengan isi kotak. Kotak sudah berisi soal yang ada, jadi untuk menambah soal cukup ketik baris baru di bawahnya.
- Setelah menekan Terapkan, aplikasi menampilkan jumlah soal yang terbaca dan nomor baris yang salah format.

### Dari Excel

1. Buat kolom: **A** = Soal, **B** = Jawaban benar, **C, D, E** = Pengecoh.
2. Di sel **F2**, ketik rumus berikut, lalu tarik ke bawah:
   ```
   ="PG: "&A2&" | "&B2&" | "&C2&" | "&D2&" | "&E2
   ```
3. Salin seluruh kolom F, lalu tempel ke kotak **Tempel Cepat**.

Untuk soal Benar/Salah (A = pernyataan, B = B atau S): `="BS: "&A2&" | "&B2`

### Dari file templat .txt (tanpa mengetik di TV)

1. Di **Bank Soal Guru**, ketuk **📄 Templat .txt** untuk mengunduh contoh.
2. Buka file itu di Notepad atau aplikasi teks di HP/laptop, lalu ganti contohnya dengan soal Anda. Tiga baris info ini ikut terbaca:
   ```
   NAMA: Ekosistem Kelas 5
   KELAS: 5
   GURU: Bu Sari
   ```
3. Simpan dengan **Encoding UTF-8** (Notepad: *File → Save As → Encoding: UTF-8*).
4. Di TV, ketuk **📂 Impor File** dan pilih file .txt tersebut. Paket langsung jadi.

---

## 4. Tips membuat soal yang seru dan adil

- **Jumlah soal:** minimal 15–20 PG dan 10 Benar/Salah per paket. Satu ronde memakai 10–40 soal, dan soal akan berulang kalau jumlahnya kurang.
- **Singkat:** maksimal sekitar 120 huruf, supaya terbaca dari belakang kelas dan bisa dijawab cepat saat berlomba.
- **Pengecoh masuk akal:** buat sejenis dengan jawaban (sama-sama nama kota, sama-sama angka) dan dengan panjang yang mirip.
- **Hindari** pilihan "semua benar" atau "A dan B", karena posisi pilihan diacak.
- **Benar/Salah seimbang:** buat jumlah pernyataan benar dan salah kira-kira sama. Hindari kata mutlak seperti *selalu* atau *tidak pernah*, karena membuat jawaban mudah ditebak.
- **Pasangan pendek:** 1–4 kata per sisi, karena ditampilkan sebagai kartu.
- **Untuk Tebak Kata:** sertakan beberapa soal PG berjawaban satu kata, misalnya *Organ pemompa darah adalah...* → **Jantung**.
- **Pembelajaran Mendalam:** sesekali gunakan soal bernalar (*mengapa*, *bandingkan*, *simpulkan*, contoh kasus sehari-hari) supaya tidak hanya hafalan.
- **Satu paket untuk satu topik** (misalnya per bab atau per TP). Dengan begitu, guru mudah memilih materi saat pengulangan atau kuis akhir bab.

---

## 5. Menyimpan, mencadangkan, dan memindahkan

- Paket **tersimpan otomatis di browser perangkat ini**. Paket akan hilang kalau data browser dibersihkan, dan tidak tersimpan kalau memakai mode Incognito/Private.
- **💾 Ekspor Semua** menyimpan cadangan semua paket ke satu file `.json`. Simpan file itu di flashdisk atau Google Drive. Ikon **💾** di setiap kartu mengekspor satu paket saja.
- **Memindahkan ke TV atau laptop lain:** buka Arena Juara di perangkat tujuan, lalu buka **Bank Soal Guru → 📂 Impor File** dan pilih file `.json` atau `.txt`.
- Mengimpor paket yang sama dua kali akan **memperbarui** paket lama, tidak membuat salinan ganda.
- **Berbagi dengan guru lain:** kirim file `.json` lewat WhatsApp atau Drive, lalu guru lain cukup mengimpornya. Satu MGMP/KKG bisa membangun bank soal bersama dengan cara ini.

---

## 6. Memilih bab yang sudah diajarkan (untuk soal bawaan)

Kalau materi di kelas belum sampai bab tertentu, soal dari bab itu bisa dimatikan:
1. Pilih jenjang, kelas, dan mapel.
2. Di layar **Pilih Permainan**, ketuk **🎯 Pilih Bab**.
3. Centang bab yang sudah diajarkan, atau pakai tombol cepat **"sampai bab N"**.
4. Ketuk **✅ Simpan**. Pilihan ini tersimpan untuk jenjang, kelas, dan mapel tersebut.

Paket bertanda **📦** berisi ringkasan campuran beberapa bab. Hilangkan centangnya kalau ada bab di dalamnya yang belum diajarkan. Untuk Matematika, yang dipilih adalah topik, misalnya Pecahan, KPK, atau Persamaan linear.

---

## 7. Masalah yang sering terjadi

| Masalah | Penyebab dan solusi |
|---|---|
| Tombol ▶ Main tidak muncul | Paket belum memilih kelas atau belum berisi soal. Ketuk ✏️ Ubah untuk melengkapinya. |
| Paket tidak muncul di daftar mapel | Pilih kelas yang sama dengan kelas paket, lalu cari di kelompok *Guru & Campuran*. |
| "Baris tidak terbaca" di Tempel Cepat | Awalan baris harus `PG:`, `BS:`, `PS:`, atau `UR:`. Baris PG minimal berisi `soal \| jawaban`, dan baris PS minimal 2 pasang dengan tanda `=`. |
| Panjat Pinang memakai soal lain | Paket belum punya soal Urutan. Tambahkan soal di tab 🔢 Urutan. |
| Muncul huruf aneh (Ã©, â€) setelah impor .txt | Simpan ulang file .txt dengan Encoding UTF-8. |
| Soal hilang setelah browser dibersihkan atau diperbarui | Impor kembali file cadangan `.json`. Biasakan menekan Ekspor setiap selesai membuat soal. |
| Muncul "Sudah ada paket dengan nama yang sama" | Ganti nama paket, misalnya tambahkan "(2)" atau nama kelas. |

---

## Contoh paket lengkap (siap ditempel)

```
NAMA: Sistem Pernapasan Kelas 8
KELAS: 8
GURU: Pak Andi

PG: Tempat pertukaran O2 dan CO2 di paru-paru adalah... | Alveolus | Bronkus | Trakea | Laring
PG: Otot yang berperan dalam pernapasan perut adalah... | Diafragma | Bisep | Trisep | Jantung
PG: Gas yang dikeluarkan saat menghembuskan napas adalah... | Karbon dioksida | Oksigen | Nitrogen murni | Hidrogen
PG: Penyakit akibat infeksi bakteri Mycobacterium tuberculosis adalah... | TBC | Asma | Influenza | Anemia
PG: Saluran yang menghubungkan tenggorokan dengan paru-paru disebut... | Trakea | Esofagus | Faring | Alveolus
BS: Pada pernapasan dada, otot antartulang rusuk berkontraksi saat inspirasi | B
BS: Hidung tidak berperan menyaring udara | S
BS: Merokok dapat merusak alveolus | B
PS: Hidung = menyaring udara ; Trakea = saluran udara ; Alveolus = pertukaran gas ; Diafragma = otot pernapasan
UR: Urutkan jalannya udara saat bernapas | Hidung ; Faring ; Trakea ; Bronkus ; Alveolus
```

---

## Butuh bantuan? Gratis 💬
Menemukan soal yang keliru, ingin bab tertentu ditambahkan, atau punya ide fitur? Ketuk tombol hijau **Hubungi Kami** di beranda,
atau **🚩 Laporkan** di layar hasil pertandingan. WhatsApp akan terbuka dengan pesan yang sudah terisi. Nomor: **0896-2334-6046**.
