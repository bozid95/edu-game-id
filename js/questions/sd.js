/* ============================================================
   BANK SOAL SD – Kurikulum Merdeka, CP BSKAP 046/H/KR/2025
   Fase A (kelas 1–2) · Fase B (kelas 3–4) · Fase C (kelas 5–6)
   ============================================================ */

/* ---------------- BAHASA INDONESIA ---------------- */
QB.add({
  kelas: [1, 2], mapel: "Bahasa Indonesia", elemen: "Menyimak, Membaca, Menulis permulaan",
  mc: [
    ["Huruf vokal adalah...", "a, i, u, e, o", "b, c, d, f, g", "k, l, m, n, p", "r, s, t, w, y"],
    ["Suku kata pertama dari kata “BUKU” adalah...", "BU", "KU", "UK", "BK"],
    ["Kata “ma-kan” terdiri dari berapa suku kata?", "2", "1", "3", "4"],
    ["Lawan kata “besar” adalah...", "kecil", "tinggi", "luas", "berat"],
    ["Lawan kata “panas” adalah...", "dingin", "hangat", "terang", "basah"],
    ["Hewan yang berkokok di pagi hari adalah...", "ayam", "kucing", "sapi", "ikan"],
    ["Kalimat yang benar adalah...", "Adik minum susu.", "Susu minum adik.", "minum Adik susu", "adik susu minum."],
    ["Huruf awal nama orang ditulis dengan huruf...", "kapital", "kecil", "miring", "tebal"],
    ["Tanda baca di akhir kalimat tanya adalah...", "?", ".", "!", ","],
    ["Ucapan saat menerima hadiah adalah...", "terima kasih", "maaf", "permisi", "selamat tidur"],
    ["Bagian tubuh untuk mencium bau adalah...", "hidung", "telinga", "mata", "lidah"],
    ["Huruf setelah “D” adalah...", "E", "C", "F", "B"],
    ["Benda untuk menulis adalah...", "pensil", "piring", "sapu", "bantal"],
    ["🍎 adalah buah...", "apel", "jeruk", "pisang", "mangga"],
    ["Sapaan sopan untuk guru perempuan adalah...", "Ibu Guru", "Kamu", "Hei", "Dik"],
    ["Kata yang diawali huruf “S” adalah...", "sapi", "kuda", "domba", "ayam"],
    ["Hari setelah Senin adalah...", "Selasa", "Minggu", "Rabu", "Sabtu"],
    ["Kata “bola” terdiri dari ... huruf.", "4", "3", "5", "2"]
  ],
  tf: [
    ["Huruf “a” adalah huruf vokal.", true], ["Huruf “b” adalah huruf vokal.", false],
    ["Kalimat diawali dengan huruf kapital.", true], ["Kata “kucing” diawali huruf K.", true],
    ["Lawan kata “tinggi” adalah “pendek”.", true], ["Lawan kata “siang” adalah “pagi”.", false],
    ["Kata “sa-pu” terdiri dari 2 suku kata.", true], ["Kalimat tanya diakhiri tanda seru (!).", false],
    ["Kita mengucapkan “maaf” jika berbuat salah.", true], ["Ikan hidup di dalam air.", true],
    ["Huruf terakhir dalam abjad adalah Z.", true], ["Kata “sekolah” terdiri dari 2 suku kata.", false],
    ["Satu minggu ada 7 hari.", true], ["Kata “meja” diawali huruf M.", true]
  ],
  pair: [
    [["besar", "kecil"], ["panas", "dingin"], ["siang", "malam"], ["tinggi", "pendek"], ["cepat", "lambat"]],
    [["🐔", "ayam"], ["🐟", "ikan"], ["🐱", "kucing"], ["🐄", "sapi"], ["🐘", "gajah"]],
    [["mata", "melihat"], ["telinga", "mendengar"], ["hidung", "mencium"], ["lidah", "mengecap"], ["kulit", "meraba"]],
    [["🍌", "pisang"], ["🍊", "jeruk"], ["🍇", "anggur"], ["🍉", "semangka"], ["🥭", "mangga"]]
  ],
  ord: [
    ["Urutkan huruf sesuai abjad", ["K", "L", "M", "N", "O"]],
    ["Susun menjadi kalimat", ["Saya", "suka", "membaca", "buku"]],
    ["Susun menjadi kalimat", ["Ibu", "pergi", "ke", "pasar"]],
    ["Susun suku kata menjadi “SEPATU”", ["SE", "PA", "TU"]],
    ["Urutan kegiatan pagi", ["Bangun tidur", "Mandi", "Sarapan", "Berangkat sekolah"]],
    ["Susun suku kata menjadi “KELINCI”", ["KE", "LIN", "CI"]],
    ["Urutkan nama hari", ["Senin", "Selasa", "Rabu", "Kamis"]]
  ]
});

QB.add({
  kelas: [3, 4], mapel: "Bahasa Indonesia", elemen: "Membaca, Menulis, Berbicara",
  mc: [
    ["Sinonim kata “pandai” adalah...", "pintar", "bodoh", "malas", "lambat"],
    ["Antonim kata “rajin” adalah...", "malas", "tekun", "giat", "pintar"],
    ["Ide pokok paragraf terdapat pada kalimat...", "utama", "penjelas", "tanya", "seru"],
    ["Kalimat ajakan biasanya diawali kata...", "Ayo", "Jangan", "Apakah", "Karena"],
    ["Kata tanya untuk menanyakan tempat adalah...", "di mana", "siapa", "kapan", "berapa"],
    ["Kata tanya untuk menanyakan waktu adalah...", "kapan", "di mana", "siapa", "mengapa"],
    ["Cerita binatang yang berperilaku seperti manusia disebut...", "fabel", "legenda", "mite", "puisi"],
    ["Cerita asal-usul suatu tempat disebut...", "legenda", "fabel", "biografi", "pantun"],
    ["Penulisan nama hari yang benar adalah...", "Senin", "senin", "SENin", "seNin"],
    ["Kata “tulis” mendapat imbuhan me- menjadi...", "menulis", "metulis", "mentulis", "mengtulis"],
    ["Pantun terdiri atas sampiran dan...", "isi", "judul", "rima", "bait"],
    ["Cerita Malin Kundang berasal dari...", "Sumatera Barat", "Jawa Barat", "Bali", "Papua"],
    ["Sinonim kata “hadiah” adalah...", "kado", "hukuman", "tugas", "pesan"],
    ["Kalimat perintah yang tepat adalah...", "Tutuplah pintu itu!", "Pintu itu tertutup.", "Apakah pintu tertutup?", "Pintu itu besar."]
  ],
  tf: [
    ["Fabel adalah cerita tentang binatang.", true], ["Sinonim “senang” adalah “gembira”.", true],
    ["Nama kota “Jakarta” ditulis dengan huruf kecil di awal.", false], ["Pantun memiliki rima a-b-a-b.", true],
    ["Kalimat tanya diakhiri tanda titik.", false], ["Kata “berlari” memiliki imbuhan ber-.", true],
    ["Antonim “terang” adalah “gelap”.", true], ["Legenda Sangkuriang berasal dari Jawa Barat.", true],
    ["Kata “mengapa” menanyakan alasan.", true], ["Sinonim “besar” adalah “mungil”.", false],
    ["Pantun terdiri dari 4 baris.", true], ["Puisi tidak memiliki bait.", false]
  ],
  pair: [
    [["pandai", "pintar"], ["senang", "gembira"], ["indah", "cantik"], ["cepat", "lekas"], ["hadiah", "kado"]],
    [["siapa", "orang"], ["di mana", "tempat"], ["kapan", "waktu"], ["mengapa", "alasan"], ["berapa", "jumlah"]],
    [["Malin Kundang", "Sumatera Barat"], ["Sangkuriang", "Jawa Barat"], ["Danau Toba", "Sumatera Utara"], ["Roro Jonggrang", "Prambanan"], ["Batu Menangis", "Kalimantan Barat"]]
  ],
  ord: [
    ["Susun menjadi kalimat", ["Kami", "belajar", "bersama", "di", "perpustakaan"]],
    ["Urutan bagian surat pribadi", ["Tanggal surat", "Salam pembuka", "Isi surat", "Salam penutup", "Nama pengirim"]],
    ["Urutan alur cerita", ["Pengenalan", "Masalah", "Puncak masalah", "Penyelesaian"]],
    ["Susun menjadi kalimat", ["Ayah", "membaca", "koran", "setiap", "pagi"]]
  ]
});

QB.add({
  kelas: [5, 6], mapel: "Bahasa Indonesia", elemen: "Membaca teks, Menulis, Kebahasaan",
  mc: [
    ["Kalimat fakta adalah kalimat yang...", "dapat dibuktikan kebenarannya", "berisi pendapat pribadi", "tidak masuk akal", "berisi khayalan"],
    ["Kata baku yang benar adalah...", "apotek", "apotik", "aktifitas", "nasehat"],
    ["Penulisan kata baku yang benar adalah...", "nasihat", "nasehat", "sekedar", "resiko"],
    ["Teks berisi langkah-langkah membuat sesuatu disebut teks...", "prosedur", "narasi", "eksplanasi", "deskripsi"],
    ["Teks yang menggambarkan objek secara rinci disebut teks...", "deskripsi", "prosedur", "argumentasi", "berita"],
    ["Unsur berita “When” artinya...", "kapan", "di mana", "siapa", "mengapa"],
    ["Majas yang membandingkan dengan kata “seperti” disebut majas...", "perumpamaan", "personifikasi", "hiperbola", "ironi"],
    ["“Angin berbisik di telingaku” adalah majas...", "personifikasi", "hiperbola", "litotes", "perumpamaan"],
    ["Kalimat opini ditandai dengan kata...", "menurut saya", "pada tahun 2020", "sebanyak 30 orang", "terletak di"],
    ["Riwayat hidup seseorang yang ditulis orang lain disebut...", "biografi", "autobiografi", "novel", "dongeng"],
    ["Kata penghubung yang menyatakan sebab adalah...", "karena", "tetapi", "lalu", "dan"],
    ["Teks yang menjelaskan proses terjadinya fenomena alam disebut teks...", "eksplanasi", "prosedur", "fabel", "pantun"],
    ["Paragraf dengan kalimat utama di awal disebut paragraf...", "deduktif", "induktif", "campuran", "naratif"]
  ],
  tf: [
    ["Teks prosedur berisi langkah-langkah.", true], ["“Apotik” adalah kata baku.", false],
    ["Autobiografi ditulis oleh tokohnya sendiri.", true], ["Kalimat opini selalu dapat dibuktikan.", false],
    ["“Suaranya menggelegar membelah angkasa” adalah majas hiperbola.", true], ["Kata “tetapi” menyatakan pertentangan.", true],
    ["Puisi terdiri dari bait dan larik.", true], ["“Risiko” adalah penulisan kata baku.", true],
    ["Teks eksplanasi menjelaskan proses terjadinya fenomena.", true], ["Paragraf deduktif memiliki kalimat utama di akhir.", false],
    ["Iklan bertujuan membujuk pembaca.", true], ["Kata “aktifitas” adalah kata baku.", false]
  ],
  pair: [
    [["apotik", "apotek"], ["nasehat", "nasihat"], ["resiko", "risiko"], ["sekedar", "sekadar"], ["aktifitas", "aktivitas"]],
    [["Prosedur", "langkah-langkah"], ["Deskripsi", "gambaran objek"], ["Narasi", "rangkaian cerita"], ["Eksplanasi", "proses fenomena"], ["Persuasi", "ajakan"]],
    [["What", "apa"], ["Who", "siapa"], ["Where", "di mana"], ["When", "kapan"], ["Why", "mengapa"]]
  ],
  ord: [
    ["Urutkan langkah membuat teh", ["Siapkan gelas", "Masukkan teh dan gula", "Tuang air panas", "Aduk rata"]],
    ["Urutkan struktur teks eksplanasi", ["Pernyataan umum", "Deretan penjelas", "Interpretasi"]],
    ["Urutkan langkah menulis karangan", ["Menentukan tema", "Membuat kerangka", "Mengembangkan kerangka", "Menyunting"]],
    ["Susun menjadi kalimat", ["Siswa", "kelas enam", "mengikuti", "ujian", "sekolah"]]
  ]
});

/* ---------------- PENDIDIKAN PANCASILA ---------------- */
QB.add({
  kelas: [1, 2], mapel: "Pendidikan Pancasila", elemen: "Pancasila, Bhinneka Tunggal Ika, NKRI",
  mc: [
    ["Lambang sila pertama Pancasila adalah...", "Bintang", "Rantai", "Pohon beringin", "Kepala banteng"],
    ["Lambang sila kedua adalah...", "Rantai", "Bintang", "Padi dan kapas", "Pohon beringin"],
    ["Lambang sila ketiga adalah...", "Pohon beringin", "Kepala banteng", "Rantai", "Bintang"],
    ["Lambang sila keempat adalah...", "Kepala banteng", "Padi dan kapas", "Bintang", "Rantai"],
    ["Lambang sila kelima adalah...", "Padi dan kapas", "Pohon beringin", "Rantai", "Kepala banteng"],
    ["Burung lambang negara Indonesia adalah...", "Garuda", "Merak", "Kakatua", "Merpati"],
    ["Semboyan pada lambang Garuda adalah...", "Bhinneka Tunggal Ika", "Merdeka atau Mati", "Tut Wuri Handayani", "Gotong Royong"],
    ["Warna bendera Indonesia adalah...", "Merah putih", "Merah biru", "Putih hijau", "Kuning merah"],
    ["Lagu kebangsaan Indonesia adalah...", "Indonesia Raya", "Garuda Pancasila", "Hari Merdeka", "Bagimu Negeri"],
    ["Sebelum makan sebaiknya kita...", "berdoa", "bermain", "tidur", "berlari"],
    ["Membuang sampah harus di...", "tempat sampah", "sungai", "jalan", "kolong meja"],
    ["Jika teman jatuh, kita sebaiknya...", "menolong", "menertawakan", "meninggalkan", "diam saja"],
    ["Hari Kemerdekaan Indonesia diperingati setiap tanggal...", "17 Agustus", "1 Juni", "2 Mei", "28 Oktober"],
    ["Pancasila terdiri dari ... sila.", "5", "4", "3", "6"]
  ],
  tf: [
    ["Pancasila memiliki 5 sila.", true], ["Lambang sila ketiga adalah bintang.", false],
    ["Kita harus antre saat membeli jajan.", true], ["Mencontek saat ulangan adalah perbuatan baik.", false],
    ["Bendera Indonesia berwarna merah dan putih.", true], ["Garuda adalah lambang negara Indonesia.", true],
    ["Kita boleh mengejek teman yang berbeda agama.", false], ["Menjaga kebersihan kelas adalah tugas bersama.", true],
    ["Lambang sila kelima adalah padi dan kapas.", true], ["Membantu orang tua di rumah adalah perbuatan baik.", true]
  ],
  pair: [
    [["Sila 1", "Bintang"], ["Sila 2", "Rantai"], ["Sila 3", "Pohon beringin"], ["Sila 4", "Kepala banteng"], ["Sila 5", "Padi dan kapas"]],
    [["Di rumah", "membantu orang tua"], ["Di sekolah", "menaati tata tertib"], ["Di jalan", "lewat zebra cross"], ["Di tempat ibadah", "tenang"], ["Di kelas", "mendengarkan guru"]]
  ],
  ord: [
    ["Urutkan lambang sila 1 sampai 5", ["Bintang", "Rantai", "Pohon beringin", "Kepala banteng", "Padi dan kapas"]],
    ["Urutan upacara bendera", ["Pengibaran bendera", "Mengheningkan cipta", "Pembacaan teks Pancasila", "Pembacaan Pembukaan UUD 1945"]],
    ["Urutan sebelum tidur", ["Gosok gigi", "Cuci kaki", "Berdoa", "Tidur"]]
  ]
});

QB.add({
  kelas: [3, 4], mapel: "Pendidikan Pancasila", elemen: "Pancasila, UUD 1945, Bhinneka Tunggal Ika",
  mc: [
    ["Pancasila disahkan sebagai dasar negara pada tanggal...", "18 Agustus 1945", "17 Agustus 1945", "1 Juni 1945", "28 Oktober 1928"],
    ["Hari Lahir Pancasila diperingati setiap tanggal...", "1 Juni", "17 Agustus", "2 Mei", "10 November"],
    ["Bunyi sila ketiga Pancasila adalah...", "Persatuan Indonesia", "Ketuhanan Yang Maha Esa", "Kemanusiaan yang adil dan beradab", "Keadilan sosial bagi seluruh rakyat Indonesia"],
    ["Musyawarah untuk mufakat sesuai dengan sila ke...", "4", "1", "2", "5"],
    ["Menghormati teman yang beribadah sesuai sila ke...", "1", "3", "4", "5"],
    ["Arti Bhinneka Tunggal Ika adalah...", "berbeda-beda tetapi tetap satu", "bersatu kita teguh", "merdeka atau mati", "gotong royong"],
    ["Kerja bakti membersihkan lingkungan adalah contoh...", "gotong royong", "persaingan", "individualis", "egois"],
    ["Hak anak di sekolah adalah...", "mendapat pendidikan", "membersihkan kelas sendirian", "membayar pajak", "memimpin rapat desa"],
    ["Kewajiban siswa di sekolah adalah...", "menaati tata tertib", "bermain sepanjang hari", "datang terlambat", "mengganggu teman"],
    ["Pemimpin di tingkat provinsi disebut...", "gubernur", "bupati", "camat", "lurah"],
    ["Pemimpin di tingkat kabupaten disebut...", "bupati", "gubernur", "presiden", "kepala desa"],
    ["Contoh keragaman di Indonesia adalah...", "suku, agama, budaya", "warna langit", "jumlah hari", "arah angin"]
  ],
  tf: [
    ["Hari Lahir Pancasila adalah 1 Juni.", true], ["Sila keempat berlambang rantai.", false],
    ["Musyawarah dilakukan untuk mencapai mufakat.", true], ["Indonesia hanya memiliki satu suku bangsa.", false],
    ["Gotong royong mencerminkan sila ketiga.", true], ["Kita wajib menghormati pendapat orang lain.", true],
    ["Presiden adalah pemimpin negara Indonesia.", true], ["Membeda-bedakan teman karena sukunya adalah sikap terpuji.", false],
    ["Tulisan Bhinneka Tunggal Ika ada pada pita yang dicengkeram Garuda.", true], ["Bupati memimpin sebuah kabupaten.", true]
  ],
  pair: [
    [["Negara", "Presiden"], ["Provinsi", "Gubernur"], ["Kabupaten", "Bupati"], ["Kota", "Wali kota"], ["Desa", "Kepala desa"]],
    [["Sila 1", "Ketuhanan"], ["Sila 2", "Kemanusiaan"], ["Sila 3", "Persatuan"], ["Sila 4", "Kerakyatan"], ["Sila 5", "Keadilan sosial"]]
  ],
  ord: [
    ["Urutkan wilayah dari yang terkecil", ["RT", "RW", "Desa/Kelurahan", "Kecamatan", "Kabupaten/Kota"]],
    ["Urutkan langkah musyawarah", ["Menyampaikan masalah", "Mengemukakan pendapat", "Menimbang pendapat", "Mengambil keputusan"]],
    ["Urutkan peristiwa", ["Sidang BPUPKI", "Proklamasi 17 Agustus", "Pengesahan Pancasila 18 Agustus"]]
  ]
});

QB.add({
  kelas: [5, 6], mapel: "Pendidikan Pancasila", elemen: "Pancasila, UUD 1945, NKRI, Norma",
  mc: [
    ["Lembaga yang merumuskan dasar negara adalah...", "BPUPKI", "PPKI", "KNIP", "DPR"],
    ["Ketua BPUPKI adalah...", "dr. Radjiman Wedyodiningrat", "Ir. Soekarno", "Moh. Hatta", "Soepomo"],
    ["Lembaga yang mengesahkan UUD 1945 adalah...", "PPKI", "BPUPKI", "DPR", "MK"],
    ["Lembaga yang membuat undang-undang bersama Presiden adalah...", "DPR", "MA", "BPK", "KY"],
    ["Presiden termasuk lembaga...", "eksekutif", "legislatif", "yudikatif", "auditif"],
    ["Piagam Jakarta disusun oleh Panitia...", "Sembilan", "Lima", "Tujuh", "Kecil"],
    ["Norma yang bersumber dari Tuhan disebut norma...", "agama", "hukum", "kesopanan", "kesusilaan"],
    ["Norma dengan sanksi tegas dari negara adalah norma...", "hukum", "agama", "kesopanan", "kebiasaan"],
    ["Organisasi negara-negara Asia Tenggara adalah...", "ASEAN", "PBB", "WHO", "UNICEF"],
    ["ASEAN didirikan di kota...", "Bangkok", "Jakarta", "Kuala Lumpur", "Manila"],
    ["Gagasan dasar negara disampaikan Ir. Soekarno pada tanggal...", "1 Juni 1945", "29 Mei 1945", "22 Juni 1945", "18 Agustus 1945"]
  ],
  tf: [
    ["PPKI mengesahkan UUD 1945 pada 18 Agustus 1945.", true], ["Mahkamah Agung termasuk lembaga legislatif.", false],
    ["Norma kesopanan bersumber dari pergaulan masyarakat.", true], ["Indonesia adalah salah satu pendiri ASEAN.", true],
    ["DPR bertugas mengadili perkara.", false], ["Persatuan dapat diwujudkan dengan menghargai perbedaan.", true],
    ["Peraturan sekolah tidak perlu ditaati.", false], ["ASEAN berdiri tahun 1967.", true],
    ["UUD 1945 tidak pernah diamandemen.", false], ["Indonesia adalah negara kepulauan.", true]
  ],
  pair: [
    [["Legislatif", "DPR"], ["Eksekutif", "Presiden"], ["Yudikatif", "Mahkamah Agung"], ["Pemeriksa keuangan", "BPK"], ["Pengawal konstitusi", "Mahkamah Konstitusi"]],
    [["Norma agama", "dari Tuhan"], ["Norma hukum", "dari negara"], ["Norma kesopanan", "dari pergaulan"], ["Norma kesusilaan", "dari hati nurani"]]
  ],
  ord: [
    ["Urutkan peristiwa (paling awal)", ["Sumpah Pemuda", "Pembentukan BPUPKI", "Proklamasi", "Sidang PPKI"]],
    ["Urutkan proses pembentukan UU", ["Rancangan UU diajukan", "Dibahas DPR dan Presiden", "Disetujui bersama", "Disahkan Presiden"]],
    ["Urutkan hierarki peraturan", ["UUD 1945", "Undang-Undang", "Peraturan Pemerintah", "Peraturan Daerah"]]
  ]
});

/* ---------------- IPAS ---------------- */
QB.add({
  kelas: [3, 4], mapel: "IPAS", elemen: "Makhluk hidup, Zat & energi, Bumi, Lingkungan sekitar",
  mc: [
    ["Bagian tumbuhan yang menyerap air dari tanah adalah...", "akar", "daun", "bunga", "buah"],
    ["Tempat fotosintesis pada tumbuhan adalah...", "daun", "akar", "batang", "biji"],
    ["Es batu mencair adalah perubahan wujud dari...", "padat ke cair", "cair ke gas", "gas ke cair", "cair ke padat"],
    ["Air dipanaskan hingga menjadi uap disebut...", "menguap", "membeku", "mengembun", "menyublim"],
    ["Contoh benda gas adalah...", "udara", "batu", "minyak", "kayu"],
    ["Sumber energi utama bagi bumi adalah...", "matahari", "bulan", "listrik", "angin"],
    ["Hewan pemakan tumbuhan disebut...", "herbivora", "karnivora", "omnivora", "predator"],
    ["Hewan pemakan daging disebut...", "karnivora", "herbivora", "omnivora", "produsen"],
    ["Tarikan atau dorongan disebut...", "gaya", "energi", "massa", "suhu"],
    ["Gaya yang membuat benda jatuh ke bawah adalah gaya...", "gravitasi", "magnet", "gesek", "pegas"],
    ["Magnet dapat menarik benda dari...", "besi", "kayu", "plastik", "kertas"],
    ["Telur → ulat → ... → kupu-kupu", "kepompong", "berudu", "larva", "nimfa"],
    ["Arah mata angin yang berlawanan dengan Utara adalah...", "Selatan", "Timur", "Barat", "Timur Laut"],
    ["Alat untuk mengukur suhu adalah...", "termometer", "penggaris", "timbangan", "barometer"],
    ["Bunyi dihasilkan oleh benda yang...", "bergetar", "diam", "dingin", "berwarna"],
    ["Ikan bernapas menggunakan...", "insang", "paru-paru", "kulit", "trakea"]
  ],
  tf: [
    ["Akar berfungsi menyerap air dan mineral.", true], ["Sapi termasuk hewan karnivora.", false],
    ["Air di dalam freezer akan membeku.", true], ["Magnet dapat menarik paku besi.", true],
    ["Matahari terbit dari arah Barat.", false], ["Katak mengalami metamorfosis.", true],
    ["Plastik mudah terurai di tanah.", false], ["Lampu mengubah energi listrik menjadi cahaya.", true],
    ["Kapur barus yang menyusut adalah contoh menyublim.", true], ["Tumbuhan butuh cahaya matahari untuk membuat makanan.", true],
    ["Ikan bernapas dengan paru-paru.", false], ["Bunyi dapat merambat melalui air.", true]
  ],
  pair: [
    [["Akar", "menyerap air"], ["Daun", "fotosintesis"], ["Batang", "menopang tumbuhan"], ["Bunga", "perkembangbiakan"], ["Buah", "melindungi biji"]],
    [["Mencair", "padat → cair"], ["Membeku", "cair → padat"], ["Menguap", "cair → gas"], ["Mengembun", "gas → cair"], ["Menyublim", "padat → gas"]],
    [["Herbivora", "kambing"], ["Karnivora", "harimau"], ["Omnivora", "ayam"], ["Produsen", "rumput"], ["Pengurai", "jamur"]]
  ],
  ord: [
    ["Urutkan metamorfosis kupu-kupu", ["Telur", "Ulat", "Kepompong", "Kupu-kupu"]],
    ["Urutkan metamorfosis katak", ["Telur", "Berudu", "Katak muda", "Katak dewasa"]],
    ["Urutkan rantai makanan", ["Padi", "Tikus", "Ular", "Elang"]],
    ["Urutkan dari hewan terkecil", ["Semut", "Kucing", "Sapi", "Gajah"]]
  ]
});

QB.add({
  kelas: [5, 6], mapel: "IPAS", elemen: "Sistem organ, Tata surya, Listrik, Keragaman budaya & sejarah",
  mc: [
    ["Organ utama pernapasan manusia adalah...", "paru-paru", "jantung", "lambung", "ginjal"],
    ["Organ yang memompa darah ke seluruh tubuh adalah...", "jantung", "paru-paru", "hati", "usus"],
    ["Penyerapan sari makanan terjadi di...", "usus halus", "lambung", "kerongkongan", "usus besar"],
    ["Planet terdekat dengan matahari adalah...", "Merkurius", "Venus", "Bumi", "Mars"],
    ["Planet terbesar di tata surya adalah...", "Yupiter", "Saturnus", "Bumi", "Neptunus"],
    ["Bahan yang dapat menghantarkan listrik disebut...", "konduktor", "isolator", "resistor", "magnet"],
    ["Contoh isolator listrik adalah...", "karet", "tembaga", "besi", "aluminium"],
    ["Ibu kota Provinsi Jawa Barat adalah...", "Bandung", "Semarang", "Serang", "Surabaya"],
    ["Tari Kecak berasal dari...", "Bali", "Aceh", "Papua", "Jawa Tengah"],
    ["Rumah Gadang berasal dari...", "Sumatera Barat", "Sulawesi Selatan", "Kalimantan Barat", "Jawa Timur"],
    ["Kerajaan Hindu tertua di Indonesia adalah...", "Kutai", "Majapahit", "Sriwijaya", "Mataram"],
    ["Kerajaan maritim yang berpusat di Palembang adalah...", "Sriwijaya", "Kutai", "Singasari", "Demak"],
    ["Kegiatan menghasilkan barang atau jasa disebut...", "produksi", "distribusi", "konsumsi", "promosi"],
    ["Rotasi bumi menyebabkan terjadinya...", "siang dan malam", "pergantian musim", "gerhana", "pasang naik"],
    ["Contoh ekosistem buatan adalah...", "sawah", "hutan hujan", "laut", "gurun"],
    ["Alat musik angklung berasal dari...", "Jawa Barat", "Sumatera Utara", "Maluku", "NTT"]
  ],
  tf: [
    ["Jantung berfungsi memompa darah.", true], ["Karet adalah konduktor listrik yang baik.", false],
    ["Revolusi bumi adalah perputaran bumi mengelilingi matahari.", true], ["Bulan adalah planet.", false],
    ["Ibu kota Provinsi Jawa Timur adalah Surabaya.", true], ["Tari Saman berasal dari Bali.", false],
    ["Indonesia memiliki 38 provinsi.", true], ["Sumpah Pemuda diikrarkan pada 28 Oktober 1928.", true],
    ["Mars dijuluki planet merah.", true], ["Pengurai menguraikan makhluk hidup yang sudah mati.", true],
    ["Kerajaan Majapahit adalah kerajaan Islam.", false], ["Tembaga adalah isolator listrik.", false]
  ],
  pair: [
    [["Jawa Tengah", "Semarang"], ["Sumatera Utara", "Medan"], ["Sulawesi Selatan", "Makassar"], ["Bali", "Denpasar"], ["Kalimantan Timur", "Samarinda"]],
    [["Tari Saman", "Aceh"], ["Tari Kecak", "Bali"], ["Tari Jaipong", "Jawa Barat"], ["Tari Piring", "Sumatera Barat"], ["Tari Yospan", "Papua"]],
    [["Paru-paru", "pernapasan"], ["Jantung", "peredaran darah"], ["Lambung", "pencernaan"], ["Ginjal", "penyaring darah"], ["Otak", "pusat saraf"]]
  ],
  ord: [
    ["Urutkan planet dari yang terdekat dengan Matahari", ["Merkurius", "Venus", "Bumi", "Mars"]],
    ["Urutkan jalur makanan dalam pencernaan", ["Mulut", "Kerongkongan", "Lambung", "Usus halus", "Usus besar"]],
    ["Urutkan peristiwa sejarah (paling awal)", ["Kerajaan Kutai", "Kerajaan Majapahit", "Sumpah Pemuda", "Proklamasi"]],
    ["Urutkan kegiatan ekonomi", ["Produksi", "Distribusi", "Konsumsi"]]
  ]
});

/* ---------------- BAHASA INGGRIS ---------------- */
QB.add({
  kelas: [3, 4], mapel: "Bahasa Inggris", elemen: "Listening, Speaking, Reading – kosakata dasar",
  mc: [
    ["“Merah” in English is...", "red", "blue", "green", "yellow"],
    ["“Kucing” in English is...", "cat", "dog", "cow", "bird"],
    ["What number is “seven”?", "7", "6", "9", "11"],
    ["“Good morning” diucapkan pada...", "pagi hari", "malam hari", "sore hari", "siang hari"],
    ["The opposite of “big” is...", "small", "tall", "long", "fat"],
    ["I use a ... to write.", "pencil", "plate", "spoon", "ball"],
    ["How many legs does a chicken have?", "two", "four", "six", "eight"],
    ["“Ibu” in English is...", "mother", "father", "sister", "brother"],
    ["The color of the sky is...", "blue", "red", "black", "brown"],
    ["“Thank you” artinya...", "terima kasih", "maaf", "permisi", "selamat"],
    ["“Monday” adalah hari...", "Senin", "Selasa", "Minggu", "Jumat"],
    ["An apple is a...", "fruit", "vegetable", "animal", "drink"],
    ["“Dapur” in English is...", "kitchen", "bedroom", "bathroom", "garden"],
    ["“Buku” in English is...", "book", "bag", "box", "bed"]
  ],
  tf: [
    ["“Dog” artinya anjing.", true], ["“Green” artinya biru.", false],
    ["Five plus two is seven.", true], ["“Good night” diucapkan pada pagi hari.", false],
    ["A banana is yellow.", true], ["“Sunday” artinya hari Minggu.", true],
    ["An elephant is small.", false], ["“Teacher” artinya guru.", true],
    ["We sleep in the kitchen.", false], ["“Ten” adalah angka 10.", true]
  ],
  pair: [
    [["red", "merah"], ["blue", "biru"], ["green", "hijau"], ["yellow", "kuning"], ["black", "hitam"]],
    [["cat", "kucing"], ["dog", "anjing"], ["bird", "burung"], ["fish", "ikan"], ["cow", "sapi"]],
    [["eye", "mata"], ["ear", "telinga"], ["nose", "hidung"], ["hand", "tangan"], ["foot", "kaki"]],
    [["one", "1"], ["three", "3"], ["five", "5"], ["eight", "8"], ["twelve", "12"]]
  ],
  ord: [
    ["Urutkan angka", ["one", "two", "three", "four", "five"]],
    ["Urutkan hari", ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]],
    ["Susun kalimat", ["I", "like", "to", "eat", "apples"]],
    ["Susun kalimat", ["My", "name", "is", "Budi"]]
  ]
});

QB.add({
  kelas: [5, 6], mapel: "Bahasa Inggris", elemen: "Simple present & past, Jobs, Weather, Directions",
  mc: [
    ["She ... a student.", "is", "am", "are", "be"],
    ["They ... playing football.", "are", "is", "am", "was"],
    ["07.30 = ...", "half past seven", "seven fifteen", "half past eight", "a quarter to seven"],
    ["The past tense of “go” is...", "went", "goed", "gone", "going"],
    ["I ... breakfast every morning.", "have", "has", "having", "haves"],
    ["A doctor works in a...", "hospital", "school", "bank", "farm"],
    ["The plural of “child” is...", "children", "childs", "childes", "childrens"],
    ["“Rainy” artinya...", "hujan", "cerah", "berangin", "berawan"],
    ["“Turn left” artinya...", "belok kiri", "belok kanan", "lurus", "berhenti"],
    ["Which one is a vegetable?", "carrot", "mango", "orange", "grape"],
    ["The fourth month of the year is...", "April", "March", "May", "June"],
    ["“Library” adalah tempat untuk...", "membaca buku", "berobat", "berbelanja", "berenang"]
  ],
  tf: [
    ["“He are my friend” is correct.", false], ["The past tense of “eat” is “ate”.", true],
    ["A pilot flies a plane.", true], ["“Sunny” artinya hujan.", false],
    ["There are 12 months in a year.", true], ["The plural of “mouse” is “mice”.", true],
    ["“Go straight” artinya belok kanan.", false], ["A farmer works in a rice field.", true],
    ["Saturday comes after Sunday.", false], ["“Expensive” artinya mahal.", true]
  ],
  pair: [
    [["doctor", "hospital"], ["teacher", "school"], ["farmer", "rice field"], ["chef", "kitchen"], ["pilot", "airplane"]],
    [["go", "went"], ["eat", "ate"], ["see", "saw"], ["write", "wrote"], ["buy", "bought"]],
    [["sunny", "cerah"], ["rainy", "hujan"], ["cloudy", "berawan"], ["windy", "berangin"], ["hot", "panas"]]
  ],
  ord: [
    ["Urutkan bulan", ["January", "February", "March", "April"]],
    ["Susun kalimat", ["She", "goes", "to", "school", "by", "bus"]],
    ["Susun kalimat", ["We", "are", "playing", "in", "the", "park"]],
    ["Urutkan angka", ["ten", "twenty", "thirty", "forty", "fifty"]]
  ]
});

/* ---------------- KODING & KECERDASAN ARTIFISIAL (pilihan, mulai kelas 5) ---------------- */
QB.add({
  kelas: [5, 6], mapel: "Koding & KA", elemen: "Berpikir komputasional, Algoritma, Literasi digital & AI",
  mc: [
    ["Urutan langkah untuk menyelesaikan masalah disebut...", "algoritma", "komputer", "internet", "aplikasi"],
    ["Memecah masalah besar menjadi bagian kecil disebut...", "dekomposisi", "abstraksi", "pengenalan pola", "debugging"],
    ["Mencari dan memperbaiki kesalahan program disebut...", "debugging", "coding", "printing", "scanning"],
    ["Instruksi yang diulang beberapa kali disebut...", "perulangan", "percabangan", "variabel", "input"],
    ["“JIKA hujan MAKA bawa payung” adalah contoh...", "percabangan", "perulangan", "urutan", "variabel"],
    ["Perangkat untuk memasukkan data adalah...", "keyboard", "monitor", "speaker", "printer"],
    ["Contoh perangkat output adalah...", "monitor", "mouse", "keyboard", "mikrofon"],
    ["Kecerdasan Artifisial (AI) adalah teknologi yang membuat mesin bisa...", "belajar dan menalar", "berjalan sendiri saja", "menyala tanpa listrik", "mencetak uang"],
    ["Contoh AI dalam kehidupan sehari-hari adalah...", "asisten suara di ponsel", "sepeda", "pensil", "lampu meja"],
    ["Kata sandi paling aman adalah...", "Gb7#kQ2!mz", "123456", "password", "namaku"],
    ["Robot menghadap Utara lalu belok kanan, sekarang menghadap...", "Timur", "Barat", "Selatan", "Utara"],
    ["Informasi yang TIDAK boleh dibagikan di internet adalah...", "kata sandi", "hobi", "warna favorit", "cita-cita"]
  ],
  tf: [
    ["Algoritma adalah langkah-langkah yang berurutan.", true], ["Mouse termasuk perangkat output.", false],
    ["AI dapat belajar dari data.", true], ["Kita boleh memberi kata sandi kepada orang asing.", false],
    ["Perulangan menjalankan perintah berulang kali.", true], ["Bug adalah kesalahan dalam program.", true],
    ["Semua informasi di internet pasti benar.", false], ["Printer mengeluarkan hasil cetakan.", true],
    ["Jawaban AI selalu benar sehingga tidak perlu dicek.", false], ["Scratch adalah bahasa pemrograman blok.", true]
  ],
  pair: [
    [["Input", "keyboard"], ["Output", "monitor"], ["Proses", "CPU"], ["Penyimpanan", "flashdisk"], ["Suara keluar", "speaker"]],
    [["Algoritma", "langkah berurutan"], ["Loop", "perulangan"], ["Jika-maka", "percabangan"], ["Bug", "kesalahan program"], ["Dekomposisi", "memecah masalah"]]
  ],
  ord: [
    ["Urutkan algoritma menggosok gigi", ["Ambil sikat gigi", "Beri pasta gigi", "Sikat gigi", "Berkumur"]],
    ["Urutkan siklus membuat program", ["Pahami masalah", "Rancang algoritma", "Tulis kode", "Uji dan perbaiki"]],
    ["Urutkan cara kerja komputer", ["Input", "Proses", "Output"]],
    ["Urutkan algoritma menyeberang jalan", ["Cari zebra cross", "Lihat kanan dan kiri", "Tunggu jalan sepi", "Menyeberang"]]
  ]
});
