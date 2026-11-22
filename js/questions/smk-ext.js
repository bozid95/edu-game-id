/* ============================================================
   BANK SOAL SMK – TAMBAHAN (Fase E–F, CP 046/H/KR/2025)
   PJOK, Seni Budaya, PKK (Proyek Kreatif & Kewirausahaan),
   serta pendalaman mapel umum & kejuruan lintas bidang
   ============================================================ */

QB.add({
  kelas: [10, 11, 12], mapel: "PJOK", elemen: "Permainan, Atletik, Beladiri, Kebugaran, Gaya hidup sehat",
  mc: [
    ["Jumlah pemain futsal dalam satu tim di lapangan adalah...", "5", "6", "7", "11"],
    ["Lama satu babak pertandingan futsal resmi adalah...", "20 menit", "45 menit", "10 menit", "30 menit"],
    ["Dalam bola voli, satu set dimenangkan dengan poin...", "25", "21", "15", "11"],
    ["Dalam bulu tangkis sistem reli, satu gim dimenangkan dengan poin...", "21", "25", "15", "11"],
    ["Pelanggaran membawa bola lebih dari dua langkah dalam basket disebut...", "travelling", "double dribble", "foul", "offside"],
    ["Posisi pemain yang tidak sah karena berada di belakang lawan terakhir dalam sepak bola disebut...", "offside", "handball", "corner", "free kick"],
    ["Jarak lari maraton adalah...", "42,195 km", "21 km", "10 km", "100 km"],
    ["Indeks Massa Tubuh (IMT) dihitung dengan rumus...", "berat (kg) ÷ tinggi² (m²)", "tinggi ÷ berat", "berat × tinggi", "berat − tinggi"],
    ["Denyut nadi maksimal secara umum dihitung dengan...", "220 − usia", "200 + usia", "180 − usia", "usia × 2"],
    ["Zat dalam minuman beralkohol yang merusak hati adalah...", "etanol", "glukosa", "kalsium", "protein"],
    ["Pertolongan pertama pada orang pingsan adalah...", "baringkan dan longgarkan pakaian", "beri minum paksa", "biarkan berdiri", "guyur air es"],
    ["Pencak silat sebagai warisan budaya tak benda diakui UNESCO pada tahun...", "2019", "2009", "2015", "2023"],
    ["Latihan beban untuk otot dada contohnya...", "bench press", "squat", "lunges", "calf raise"],
    ["Zat adiktif yang terdapat pada kopi adalah...", "kafein", "nikotin", "morfin", "etanol"]
  ],
  tf: [
    ["Futsal dimainkan 5 lawan 5.", true], ["Satu set voli dimenangkan dengan poin 15.", false],
    ["Maraton berjarak 42,195 km.", true], ["Travelling adalah pelanggaran dalam basket.", true],
    ["Alkohol aman bagi organ hati.", false], ["Denyut nadi maksimal ≈ 220 − usia.", true],
    ["Pencak silat diakui UNESCO sebagai warisan budaya.", true], ["Merokok meningkatkan kebugaran.", false]
  ],
  pair: [
    [["Travelling", "basket"], ["Offside", "sepak bola"], ["Smash", "voli"], ["Netting", "bulu tangkis"], ["Sepak sila", "sepak takraw"]],
    [["Futsal", "5 pemain"], ["Voli", "6 pemain"], ["Sepak bola", "11 pemain"], ["Sepak takraw", "3 pemain"]]
  ],
  ord: [
    ["Urutkan sesi latihan kebugaran", ["Pemanasan", "Peregangan", "Latihan inti", "Pendinginan"]],
    ["Urutkan pertolongan pertama (DRSABC)", ["Danger", "Response", "Send for help", "Airway", "Breathing"]]
  ]
});

QB.add({
  kelas: [10, 11, 12], mapel: "Seni Budaya", elemen: "Apresiasi & kreasi seni rupa, musik, tari, teater",
  mc: [
    ["Pelukis Indonesia terkenal dengan aliran ekspresionisme adalah...", "Affandi", "Raden Saleh", "Basuki Abdullah", "Dullah"],
    ["Lukisan “Penangkapan Pangeran Diponegoro” dibuat oleh...", "Raden Saleh", "Affandi", "Sudjojono", "Hendra Gunawan"],
    ["Aliran seni yang menggambarkan objek apa adanya disebut...", "realisme", "kubisme", "surealisme", "abstrak"],
    ["Aliran seni yang menampilkan objek seperti mimpi disebut...", "surealisme", "realisme", "naturalisme", "romantisme"],
    ["Prinsip seni rupa yang berkaitan dengan keseimbangan disebut...", "balance", "irama", "kontras", "proporsi"],
    ["Pencipta lagu “Bengawan Solo” adalah...", "Gesang", "Ismail Marzuki", "W.R. Supratman", "Ibu Sud"],
    ["Komposer lagu “Rayuan Pulau Kelapa” adalah...", "Ismail Marzuki", "Gesang", "C. Simanjuntak", "Kusbini"],
    ["Akor C mayor terdiri atas nada...", "C – E – G", "C – D – E", "C – F – A", "D – F – A"],
    ["Tari kreasi baru adalah tari yang...", "dikembangkan dari tari tradisi", "tidak boleh diubah", "hanya untuk upacara adat", "tanpa musik"],
    ["Dalam teater, orang yang memimpin pementasan disebut...", "sutradara", "aktor", "penata rias", "penonton"],
    ["Pameran yang memajang karya seni disebut...", "eksibisi", "konser", "resital", "festival makanan"],
    ["Karya desain untuk iklan dan promosi termasuk seni...", "desain grafis", "seni murni", "seni tari", "seni teater"]
  ],
  tf: [
    ["Affandi dikenal dengan gaya ekspresionisme.", true], ["Raden Saleh adalah pencipta lagu Bengawan Solo.", false],
    ["Akor C mayor tersusun dari C, E, G.", true], ["Sutradara memimpin pementasan teater.", true],
    ["Surealisme menggambarkan objek apa adanya.", false], ["Desain grafis termasuk seni terapan.", true]
  ],
  pair: [
    [["Affandi", "ekspresionisme"], ["Raden Saleh", "romantisme"], ["Basuki Abdullah", "naturalisme"], ["Salvador Dalí", "surealisme"], ["Pablo Picasso", "kubisme"]],
    [["Gesang", "Bengawan Solo"], ["Ismail Marzuki", "Rayuan Pulau Kelapa"], ["W.R. Supratman", "Indonesia Raya"], ["Ibu Sud", "Berkibarlah Benderaku"], ["C. Simanjuntak", "Bagimu Negeri"]]
  ],
  ord: [["Urutkan proses berkarya seni", ["Ide/gagasan", "Sketsa", "Eksekusi karya", "Penyajian/pameran"]]]
});

QB.add({
  kelas: [11, 12], mapel: "PKK (Kewirausahaan)", elemen: "Proyek Kreatif & Kewirausahaan: peluang usaha, produksi, pemasaran, keuangan",
  mc: [
    ["Orang yang berani mengambil risiko membuka usaha disebut...", "wirausahawan", "karyawan", "konsumen", "pegawai negeri"],
    ["Analisis kekuatan, kelemahan, peluang, dan ancaman disebut analisis...", "SWOT", "BEP", "ROI", "PDCA"],
    ["Titik ketika usaha tidak untung dan tidak rugi disebut...", "BEP (titik impas)", "omzet", "laba", "aset"],
    ["Bauran pemasaran 4P terdiri atas product, price, place, dan...", "promotion", "people", "process", "profit"],
    ["Biaya yang jumlahnya tetap walau produksi berubah disebut biaya...", "tetap", "variabel", "total", "marginal"],
    ["Biaya bahan baku termasuk biaya...", "variabel", "tetap", "sewa", "penyusutan"],
    ["Laba = pendapatan − ...", "biaya", "modal", "aset", "utang"],
    ["Hak eksklusif atas merek dagang termasuk...", "HAKI", "NPWP", "SIUP", "PPN"],
    ["Dokumen rencana lengkap sebuah usaha disebut...", "business plan", "nota", "kuitansi", "faktur"],
    ["Media promosi yang paling murah dan luas saat ini adalah...", "media sosial", "baliho besar", "iklan TV nasional", "koran cetak"],
    ["Model bisnis yang menggambarkan 9 elemen usaha disebut...", "Business Model Canvas", "Gantt Chart", "Flowchart", "Fishbone"],
    ["Contoh produk inovatif dari limbah adalah...", "tas dari bungkus kopi", "membuang plastik ke sungai", "membakar sampah", "menimbun limbah"],
    ["Uang yang dipakai pertama kali untuk memulai usaha disebut...", "modal", "laba", "omzet", "dividen"],
    ["Harga jual = harga pokok produksi + ...", "keuntungan yang diinginkan", "pajak saja", "diskon", "biaya iklan saja"]
  ],
  tf: [
    ["BEP adalah titik impas.", true], ["Biaya bahan baku termasuk biaya tetap.", false],
    ["Analisis SWOT memuat kekuatan dan kelemahan.", true], ["Promosi termasuk bauran pemasaran 4P.", true],
    ["Laba = pendapatan dikurangi biaya.", true], ["Wirausahawan selalu menghindari semua risiko.", false],
    ["Merek dagang dapat dilindungi HAKI.", true], ["Business Model Canvas memiliki 9 elemen.", true]
  ],
  pair: [
    [["S", "strengths"], ["W", "weaknesses"], ["O", "opportunities"], ["T", "threats"]],
    [["Product", "produk"], ["Price", "harga"], ["Place", "tempat/distribusi"], ["Promotion", "promosi"]],
    [["Biaya tetap", "sewa tempat"], ["Biaya variabel", "bahan baku"], ["Pendapatan", "hasil penjualan"], ["Modal", "dana awal"], ["Laba", "selisih untung"]]
  ],
  ord: [
    ["Urutkan langkah memulai usaha", ["Melihat peluang", "Membuat rencana usaha", "Menyiapkan modal", "Produksi", "Pemasaran"]],
    ["Urutkan siklus PDCA", ["Plan", "Do", "Check", "Act"]]
  ]
});

QB.add({
  kelas: [10, 11, 12], mapel: "Bahasa Inggris", elemen: "Analytical exposition, Report, News item, Explanation, Conditional, Workplace vocabulary",
  mc: [
    ["A text that presents arguments to persuade readers is...", "analytical exposition", "recount", "narrative", "procedure"],
    ["News item text usually consists of newsworthy event, background events, and...", "sources", "resolution", "orientation", "goal"],
    ["If I had studied harder, I ... the exam.", "would have passed", "will pass", "pass", "passed"],
    ["If it rains tomorrow, I ... at home.", "will stay", "would stay", "stayed", "had stayed"],
    ["The man ... is standing there is my teacher.", "who", "which", "whose", "whom"],
    ["The book ... cover is red is mine.", "whose", "who", "which", "whom"],
    ["“Could you please send the report by Friday?” is a...", "polite request", "complaint", "compliment", "refusal"],
    ["A “meeting minutes” document records...", "what was discussed in a meeting", "employee salaries", "product prices", "holiday schedules"],
    ["The synonym of “purchase” is...", "buy", "sell", "rent", "lend"],
    ["The antonym of “increase” is...", "decrease", "raise", "grow", "expand"],
    ["“I'm afraid I can't attend the meeting” expresses...", "polite refusal", "agreement", "surprise", "gratitude"],
    ["An explanation text explains...", "how or why something happens", "a personal experience", "a funny story", "a product price"]
  ],
  tf: [
    ["Analytical exposition aims to persuade readers.", true], ["“Whose” shows possession.", true],
    ["“If I had known, I would have come” is the third conditional.", true], ["“Decrease” is a synonym of “increase”.", false],
    ["News items report factual events.", true], ["“Purchase” means to sell.", false]
  ],
  pair: [
    [["purchase", "buy"], ["require", "need"], ["assist", "help"], ["commence", "start"], ["obtain", "get"]],
    [["who", "person"], ["which", "thing"], ["whose", "possession"], ["where", "place"], ["when", "time"]]
  ],
  ord: [
    ["Structure of analytical exposition", ["Thesis", "Arguments", "Reiteration"]],
    ["Structure of news item", ["Newsworthy event", "Background events", "Sources"]]
  ]
});

QB.add({
  kelas: [10, 11, 12], mapel: "Informatika & KA", elemen: "Algoritma lanjut, Keamanan siber, Data, Etika & dampak AI",
  mc: [
    ["Algoritma pengurutan yang membandingkan dua elemen bersebelahan dan menukarnya adalah...", "bubble sort", "binary search", "linear search", "hashing"],
    ["Pencarian pada data terurut dengan membagi dua setiap langkah disebut...", "binary search", "linear search", "bubble sort", "DFS"],
    ["Struktur data LIFO (last in first out) adalah...", "stack", "queue", "array", "tree"],
    ["Struktur data FIFO (first in first out) adalah...", "queue", "stack", "graph", "set"],
    ["Teknik mengubah data menjadi kode rahasia disebut...", "enkripsi", "kompresi", "dekomposisi", "debugging"],
    ["Serangan membanjiri server dengan lalu lintas palsu disebut...", "DDoS", "phishing", "SQL injection", "backup"],
    ["Verifikasi login dengan kata sandi + kode OTP disebut...", "autentikasi dua faktor", "enkripsi simetris", "firewall", "VPN"],
    ["Perangkat/perangkat lunak penyaring lalu lintas jaringan adalah...", "firewall", "router saja", "printer", "scanner"],
    ["Visualisasi data proporsi bagian dari keseluruhan paling cocok memakai diagram...", "lingkaran", "garis", "pencar", "histogram"],
    ["Jenis AI yang menghasilkan teks/gambar baru disebut AI...", "generatif", "reaktif", "diskriminatif", "simbolik saja"],
    ["Konten palsu berupa video wajah tiruan yang dibuat AI disebut...", "deepfake", "deep learning", "big data", "chatbot"],
    ["Prinsip etika AI yang menuntut AI dapat dijelaskan cara kerjanya adalah...", "transparansi", "monopoli", "kecepatan", "estetika"],
    ["Bahasa pemrograman yang populer untuk data science dan AI adalah...", "Python", "HTML", "CSS", "SQL saja"],
    ["Output dari print(10 // 3) di Python adalah...", "3", "3,33", "1", "30"],
    ["Output dari print(10 % 3) di Python adalah...", "1", "3", "0", "10"]
  ],
  tf: [
    ["Stack bersifat LIFO.", true], ["Queue bersifat LIFO.", false],
    ["Binary search memerlukan data yang sudah terurut.", true], ["Deepfake selalu dapat dipercaya sebagai bukti.", false],
    ["Autentikasi dua faktor meningkatkan keamanan akun.", true], ["10 % 3 di Python menghasilkan 1.", true],
    ["Firewall berfungsi menyaring lalu lintas jaringan.", true], ["Transparansi bukan bagian dari etika AI.", false]
  ],
  pair: [
    [["Stack", "LIFO"], ["Queue", "FIFO"], ["Array", "indeks berurutan"], ["Tree", "hierarki"], ["Graph", "simpul dan sisi"]],
    [["Phishing", "tautan palsu"], ["DDoS", "banjir lalu lintas"], ["Malware", "program jahat"], ["Ransomware", "data disandera"], ["Firewall", "penyaring jaringan"]]
  ],
  ord: [
    ["Urutkan tahap analisis data", ["Mengumpulkan data", "Membersihkan data", "Menganalisis", "Visualisasi", "Menyimpulkan"]],
    ["Urutkan langkah binary search", ["Ambil elemen tengah", "Bandingkan dengan target", "Buang setengah data", "Ulangi sampai ketemu"]]
  ]
});

QB.add({
  kelas: [10, 11, 12], mapel: "Bahasa Indonesia", elemen: "Teks eksposisi, cerpen, puisi, biografi, karya ilmiah, presentasi",
  mc: [
    ["Bagian karya ilmiah yang berisi ringkasan isi disebut...", "abstrak", "daftar pustaka", "lampiran", "kata pengantar"],
    ["Daftar sumber rujukan dalam karya ilmiah disebut...", "daftar pustaka", "glosarium", "indeks", "abstrak"],
    ["Teks biografi bertujuan...", "menceritakan riwayat hidup tokoh", "membujuk pembaca", "memberi langkah kerja", "menjelaskan fenomena alam"],
    ["Kata “meskipun” termasuk konjungsi...", "konsesif", "kausal", "temporal", "final"],
    ["Penulisan angka yang benar di awal kalimat adalah...", "Lima puluh siswa hadir.", "50 siswa hadir.", "50 Siswa hadir.", "Lima Puluh siswa hadir."],
    ["Penggunaan huruf miring yang benar adalah untuk...", "istilah asing", "nama kota", "judul bab", "nama orang"],
    ["Puisi yang tidak terikat aturan rima dan jumlah baris disebut puisi...", "bebas (modern)", "lama", "pantun", "syair"],
    ["Kalimat yang menyatakan pendapat penulis disebut kalimat...", "opini", "fakta", "perintah", "tanya"],
    ["Hal pertama dalam menyusun presentasi adalah...", "menentukan tujuan dan topik", "mendesain slide", "mencetak handout", "menyiapkan konsumsi"],
    ["Sudut pandang orang pertama menggunakan kata ganti...", "aku/saya", "dia", "mereka", "beliau"]
  ],
  tf: [
    ["Abstrak berisi ringkasan karya ilmiah.", true], ["Angka di awal kalimat sebaiknya ditulis dengan huruf.", true],
    ["Istilah asing ditulis dengan huruf miring.", true], ["Puisi bebas wajib bersajak a-b-a-b.", false],
    ["Biografi ditulis oleh tokohnya sendiri.", false], ["“Meskipun” menyatakan pertentangan.", true]
  ],
  pair: [
    [["Abstrak", "ringkasan"], ["Pendahuluan", "latar belakang"], ["Metode", "cara penelitian"], ["Pembahasan", "analisis hasil"], ["Daftar pustaka", "sumber rujukan"]],
    [["karena", "kausal"], ["meskipun", "konsesif"], ["agar", "final/tujuan"], ["setelah", "temporal"], ["tetapi", "pertentangan"]]
  ],
  ord: [["Urutkan sistematika karya ilmiah", ["Pendahuluan", "Kajian teori", "Metode", "Hasil dan pembahasan", "Penutup"]]]
});

QB.add({
  kelas: [10, 11, 12], mapel: "Sejarah", elemen: "Orde Lama, Orde Baru, Reformasi, Sejarah dunia",
  mc: [
    ["Dekrit Presiden 5 Juli 1959 memberlakukan kembali...", "UUD 1945", "UUDS 1950", "Konstitusi RIS", "Piagam Jakarta"],
    ["Surat Perintah Sebelas Maret (Supersemar) dikeluarkan tahun...", "1966", "1965", "1998", "1959"],
    ["Pemilu pertama Indonesia dilaksanakan tahun...", "1955", "1945", "1971", "1999"],
    ["Perang Dunia II berakhir tahun...", "1945", "1918", "1939", "1950"],
    ["Bom atom dijatuhkan Amerika Serikat di kota Hiroshima dan...", "Nagasaki", "Tokyo", "Osaka", "Kyoto"],
    ["Revolusi Industri pertama dimulai di...", "Inggris", "Prancis", "Amerika Serikat", "Jerman"],
    ["Penemu mesin uap yang disempurnakan dalam Revolusi Industri adalah...", "James Watt", "Thomas Edison", "Alexander Bell", "Isaac Newton"],
    ["Perserikatan Bangsa-Bangsa berdiri pada tahun...", "1945", "1919", "1950", "1967"],
    ["Indonesia sempat keluar dari PBB pada tahun...", "1965", "1950", "1975", "1998"],
    ["Peristiwa Malari terjadi pada tahun...", "1974", "1966", "1998", "1984"]
  ],
  tf: [
    ["Pemilu pertama Indonesia dilaksanakan tahun 1955.", true], ["Revolusi Industri dimulai di Jepang.", false],
    ["Dekrit Presiden 1959 memberlakukan kembali UUD 1945.", true], ["Perang Dunia II berakhir tahun 1945.", true],
    ["PBB berdiri tahun 1919.", false], ["Supersemar dikeluarkan tahun 1966.", true]
  ],
  pair: [
    [["1955", "Pemilu pertama"], ["1959", "Dekrit Presiden"], ["1966", "Supersemar"], ["1998", "Reformasi"], ["1945", "Proklamasi"]],
    [["James Watt", "mesin uap"], ["Thomas Edison", "lampu pijar"], ["Alexander G. Bell", "telepon"], ["Wright bersaudara", "pesawat terbang"], ["Gutenberg", "mesin cetak"]]
  ],
  ord: [["Urutkan peristiwa (paling awal)", ["Pemilu 1955", "Dekrit Presiden 1959", "Supersemar 1966", "Reformasi 1998"]]]
});

QB.add({
  kelas: [10, 11, 12], mapel: "K3 & Budaya Kerja", elemen: "Identifikasi bahaya, Ergonomi, Etos kerja, Lingkungan kerja",
  mc: [
    ["Proses mengenali sumber bahaya di tempat kerja disebut...", "identifikasi bahaya", "promosi", "audit keuangan", "rekrutmen"],
    ["Hierarki pengendalian risiko yang paling efektif adalah...", "eliminasi", "APD", "pengendalian administrasi", "rambu peringatan"],
    ["Penggunaan APD dalam hierarki pengendalian risiko berada di urutan...", "terakhir", "pertama", "kedua", "ketiga"],
    ["Ilmu yang menyesuaikan pekerjaan dengan kemampuan tubuh manusia disebut...", "ergonomi", "ekonomi", "ekologi", "etimologi"],
    ["Posisi duduk yang ergonomis saat bekerja di komputer adalah...", "punggung tegak dan layar sejajar mata", "membungkuk", "kaki menggantung", "layar terlalu dekat"],
    ["Lembar data keselamatan bahan kimia disebut...", "SDS/MSDS", "SOP", "SPK", "SIM"],
    ["Kecelakaan kerja yang hampir terjadi disebut...", "near miss", "fatality", "first aid", "lost time"],
    ["Contoh etos kerja yang baik adalah...", "disiplin dan bertanggung jawab", "sering bolos", "menunda pekerjaan", "tidak jujur"],
    ["Lembaga jaminan sosial ketenagakerjaan di Indonesia adalah...", "BPJS Ketenagakerjaan", "BPOM", "BMKG", "BPS"],
    ["Limbah B3 adalah limbah...", "bahan berbahaya dan beracun", "bahan bangunan biasa", "bahan baku baru", "bahan bakar bensin"]
  ],
  tf: [
    ["Eliminasi adalah pengendalian risiko paling efektif.", true], ["APD adalah pengendalian risiko paling utama.", false],
    ["Ergonomi menyesuaikan kerja dengan tubuh manusia.", true], ["Near miss tidak perlu dilaporkan.", false],
    ["Limbah B3 harus dikelola khusus.", true], ["MSDS berisi informasi keselamatan bahan kimia.", true]
  ],
  pair: [
    [["Eliminasi", "hilangkan bahaya"], ["Substitusi", "ganti bahan"], ["Rekayasa teknik", "pasang pelindung mesin"], ["Administrasi", "SOP & pelatihan"], ["APD", "pelindung diri"]]
  ],
  ord: [["Urutkan hierarki pengendalian risiko", ["Eliminasi", "Substitusi", "Rekayasa teknik", "Administrasi", "APD"]]]
});
