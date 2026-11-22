# Arena Juara 🏆 – Game Edukasi Versus untuk TV Board Sekolah

Kumpulan **13 game edukasi 2 tim (Merah vs Biru)** untuk layar sentuh interaktif di kelas.
Soal mengacu **Capaian Pembelajaran Kurikulum Merdeka (Kep. Kepala BSKAP No. 046/H/KR/2025)**
dengan pendekatan Pembelajaran Mendalam, untuk **7 jenjang**: SD & MI (kelas 1–6), SMP & MTs (kelas 7–9),
SMA, MA & SMK (kelas 10–12).

Tanpa instalasi, tanpa internet: cukup buka `index.html` di Chrome/Edge pada TV board.

## Game
| Game | Mekanik | Format soal |
|---|---|---|
| 🪢 Tarik Tambang | Jawaban benar menarik tali | Pilihan ganda |
| 🏃 Balap Karung | Lompat menuju piala | PG / keypad angka (MTK) |
| 🫧 Tangkap Gelembung | Pecahkan gelembung benar, combo | PG |
| 🎋 Panjat Pinang | Susun urutan untuk memanjat | Mengurutkan |
| ⚡ Cocok Kilat | Jodohkan kartu | Pasangan |
| 💣 Bom Waktu | Lempar bom sebelum meledak | Benar/Salah |
| 🐍 Ular Tangga Kuis | Jawab benar = lempar dadu | PG |
| ❌ XOX Kuis | Jawab benar = pasang tanda | PG + strategi |
| 🔨 Pukul Tikus | Pukul tikus berjawaban benar | PG |
| 🃏 Kartu Ingat | Memori, buka pasangan | Pasangan |
| 🎈 Tebak Kata Balon | Eja jawaban huruf demi huruf | Jawaban satu kata |
| 🎤 Cerdas Cermat | Pilih kotak poin, rebutan soal sama | PG / B-S |
| 🏗️ Menara Juara | Susun balok, salah = jatuh | PG + B/S |

Setiap game bisa diatur **waktu** dan **target** sebelum mulai (ada nilai default ★ dan tombol ↺ Default).

## Mata pelajaran
- **SD:** Matematika (generator tak terbatas), Bahasa Indonesia, Pendidikan Pancasila, IPAS, Bahasa Inggris, PJOK, Seni Budaya, Koding & KA (kls 5–6)
- **SMP:** Matematika, IPA (per kelas 7/8/9), IPS (per kelas), Bahasa Indonesia, Bahasa Inggris, Informatika, Koding & KA, Pendidikan Pancasila, PJOK, Seni Budaya
- **SMK:** Matematika, Bahasa Indonesia, Bahasa Inggris, Informatika & KA, Projek IPAS (kls 10), Sejarah, Pendidikan Pancasila, PJOK, Seni Budaya, PKK (kls 11–12), K3 & Budaya Kerja, **Kejuruan:** TJKT, Akuntansi, Otomotif, Kuliner, Perkantoran, Pemasaran, DKV, Listrik
- **SMA:** Matematika SMA (trigonometri, matriks, vektor, limit, turunan, integral), mapel umum bersama, peminatan **Fisika, Kimia, Biologi, Ekonomi, Sosiologi, Geografi, Antropologi**, Informatika, Koding & KA
- **Madrasah (MI, MTs, MA):** mapel umum setara SD/SMP/SMA + rumpun PAI madrasah per jenjang: **Al-Qur'an Hadis, Akidah Akhlak, Fikih, Sejarah Kebudayaan Islam, Bahasa Arab**
- **Semua jenjang:** Pendidikan Agama (Islam, Kristen, Katolik, Hindu, Buddha, Khonghucu; di madrasah diganti rumpun PAI), muatan lokal Bahasa Jawa & Bahasa Sunda, mode **Campuran**

### Rekap bank soal
| Jenjang | Mapel | Paket | Butir soal statis* |
|---|---|---|---|
| SD | 16 | 31 | 875 |
| MI | 15 | 30 | 830 |
| SMP | 18 | 27 | 759 |
| MTs | 17 | 26 | 775 |
| SMA | 22 | 24 | 593 |
| MA | 21 | 23 | 557 |
| SMK | 25 | 29 | 646 |
| **Total unik** | | **98** | **2.578** |

\*Belum termasuk Matematika (generator soal tak terbatas per kelas). Mapel umum dipakai bersama antarjenjang setara, jadi angka per jenjang saling tumpang tindih.

## Bank Soal Guru ✏️
Menu **📝 Bank Soal Guru** di beranda: guru membuat paket soal sendiri (PG, Benar/Salah, Pasangan, Urutan)
lewat formulir atau **Tempel Cepat** dari Word/Excel:

```
PG: Ibu kota Jawa Barat adalah... | Bandung | Semarang | Surabaya | Serang
BS: Matahari terbit dari timur | B
PS: Akar = menyerap air ; Daun = fotosintesis ; Batang = menopang
UR: Urutkan daur air | Penguapan ; Pengembunan ; Hujan
```
Paket disimpan di browser perangkat. Gunakan **Ekspor/Impor (.json)** untuk memindahkan ke TV lain.

## Menambah soal bawaan
Edit file di `js/questions/` (format dijelaskan di `bank.js`), lalu cek tidak ada error dengan membuka `index.html`.

## Build terenkode & deploy (Vercel)
```
node tools/build.js      # menghasilkan dist/ dengan bank soal terenkode
```
`vercel.json` sudah mengatur Vercel untuk menjalankan build ini dan **hanya menyajikan `dist/`**,
jadi file soal mentah tidak ikut ter-deploy.

> **Catatan keamanan:** enkode ini *menyamarkan* kunci jawaban agar tidak terbaca langsung lewat
> Inspect/View Source. Ini bukan enkripsi yang tak bisa dibuka: semua game berjalan di browser,
> jadi orang yang paham pemrograman tetap bisa membongkarnya. Untuk permainan kelas di TV ini sudah memadai.
> Jika repo GitHub bersifat **publik**, sumber soal bisa dibaca di GitHub, jadi gunakan repo **privat** bila perlu.
