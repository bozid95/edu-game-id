/* ============================================================
   BANK SOAL SMP – Fase D (kelas 7–9)
   Kurikulum Merdeka, CP BSKAP 046/H/KR/2025
   ============================================================ */
const SMP = [7, 8, 9];

QB.add({
  kelas: SMP, mapel: "IPA", elemen: "Pengukuran, Sel, Zat, Gerak & gaya, Listrik, Tubuh manusia, Bumi",
  mc: [
    ["Satuan SI untuk massa adalah...", "kilogram", "gram", "newton", "meter"],
    ["Satuan SI untuk suhu adalah...", "kelvin", "celsius", "fahrenheit", "reamur"],
    ["Bagian sel yang mengatur seluruh kegiatan sel adalah...", "nukleus", "mitokondria", "vakuola", "dinding sel"],
    ["Organel tempat respirasi sel adalah...", "mitokondria", "ribosom", "lisosom", "kloroplas"],
    ["Ciri sel tumbuhan yang tidak dimiliki sel hewan adalah...", "dinding sel", "membran sel", "sitoplasma", "inti sel"],
    ["Rumus kimia air adalah...", "H₂O", "CO₂", "O₂", "NaCl"],
    ["Contoh perubahan kimia adalah...", "kayu terbakar", "es mencair", "air menguap", "kertas digunting"],
    ["Rumus kecepatan adalah...", "jarak ÷ waktu", "jarak × waktu", "waktu ÷ jarak", "massa × percepatan"],
    ["Hukum Newton III menyatakan...", "aksi = reaksi", "kelembaman", "F = m × a", "gravitasi universal"],
    ["Satuan gaya adalah...", "newton", "joule", "watt", "pascal"],
    ["Satuan energi adalah...", "joule", "newton", "volt", "ampere"],
    ["Menurut hukum Ohm, V = ...", "I × R", "I ÷ R", "R ÷ I", "I + R"],
    ["Enzim di mulut yang mengubah amilum menjadi gula adalah...", "ptialin", "pepsin", "lipase", "tripsin"],
    ["Pembuluh darah yang membawa darah dari jantung adalah...", "arteri", "vena", "kapiler", "limfa"],
    ["Lapisan bumi paling luar disebut...", "kerak", "mantel", "inti luar", "inti dalam"],
    ["Ilmu tentang pewarisan sifat disebut...", "genetika", "ekologi", "astronomi", "geologi"],
    ["Gelombang bunyi termasuk gelombang...", "longitudinal", "transversal", "elektromagnetik", "mikro"],
    ["Larutan dengan pH kurang dari 7 bersifat...", "asam", "basa", "netral", "garam"],
    ["Alat optik yang digunakan untuk melihat benda renik adalah...", "mikroskop", "teleskop", "periskop", "lup"],
    ["Proses tumbuhan membuat makanan disebut...", "fotosintesis", "respirasi", "transpirasi", "osmosis"]
  ],
  tf: [
    ["Sel hewan memiliki dinding sel.", false], ["Kloroplas adalah tempat fotosintesis.", true],
    ["Es mencair adalah perubahan kimia.", false], ["1 kilometer = 1.000 meter.", true],
    ["Satuan kuat arus listrik adalah ampere.", true], ["Vena membawa darah menuju jantung.", true],
    ["Lakmus merah berubah biru dalam larutan asam.", false], ["Benda bermassa besar memiliki kelembaman besar.", true],
    ["Cahaya merambat lebih lambat daripada bunyi.", false], ["Gerhana bulan terjadi saat bumi di antara matahari dan bulan.", true],
    ["Rumus kimia garam dapur adalah NaCl.", true], ["Jantung manusia memiliki 3 ruang.", false],
    ["Paru-paru adalah organ pernapasan.", true], ["Air murni memiliki pH 7.", true]
  ],
  pair: [
    [["Massa", "kilogram"], ["Panjang", "meter"], ["Waktu", "sekon"], ["Suhu", "kelvin"], ["Arus listrik", "ampere"]],
    [["Mitokondria", "respirasi sel"], ["Ribosom", "sintesis protein"], ["Kloroplas", "fotosintesis"], ["Nukleus", "pengatur sel"], ["Vakuola", "penyimpan zat"]],
    [["H₂O", "air"], ["CO₂", "karbon dioksida"], ["NaCl", "garam dapur"], ["O₂", "oksigen"], ["C₆H₁₂O₆", "glukosa"]],
    [["Gaya", "newton"], ["Energi", "joule"], ["Daya", "watt"], ["Tekanan", "pascal"], ["Tegangan", "volt"]]
  ],
  ord: [
    ["Urutkan organisasi kehidupan", ["Sel", "Jaringan", "Organ", "Sistem organ", "Organisme"]],
    ["Urutkan saluran pencernaan", ["Mulut", "Kerongkongan", "Lambung", "Usus halus", "Usus besar"]],
    ["Urutkan lapisan bumi dari luar", ["Kerak", "Mantel", "Inti luar", "Inti dalam"]],
    ["Urutkan langkah metode ilmiah", ["Merumuskan masalah", "Membuat hipotesis", "Melakukan eksperimen", "Menarik kesimpulan"]],
    ["Urutkan jalur udara pernapasan", ["Hidung", "Tenggorokan", "Bronkus", "Paru-paru"]]
  ]
});

QB.add({
  kelas: SMP, mapel: "IPS", elemen: "Keruangan, Sejarah pergerakan & kemerdekaan, Ekonomi",
  mc: [
    ["Garis khayal yang membagi bumi menjadi utara dan selatan adalah...", "khatulistiwa", "garis bujur", "garis tanggal", "meridian"],
    ["Secara geografis Indonesia terletak di antara benua...", "Asia dan Australia", "Asia dan Afrika", "Eropa dan Asia", "Amerika dan Australia"],
    ["Indonesia terletak di antara samudra...", "Hindia dan Pasifik", "Atlantik dan Hindia", "Pasifik dan Arktik", "Atlantik dan Pasifik"],
    ["Indonesia memiliki iklim...", "tropis", "subtropis", "sedang", "kutub"],
    ["Naskah Proklamasi diketik oleh...", "Sayuti Melik", "Soekarno", "Moh. Hatta", "Ahmad Soebardjo"],
    ["Proklamasi dibacakan di Jalan...", "Pegangsaan Timur 56", "Imam Bonjol 1", "Merdeka Utara", "Diponegoro 10"],
    ["Soekarno-Hatta diamankan para pemuda dalam peristiwa...", "Rengasdengklok", "Bandung Lautan Api", "Pertempuran Surabaya", "Linggarjati"],
    ["Kebutuhan primer manusia meliputi...", "sandang, pangan, papan", "mobil, ponsel, TV", "perhiasan, jam tangan", "liburan, hiburan"],
    ["Kelangkaan terjadi karena kebutuhan tidak terbatas, sedangkan...", "sumber daya terbatas", "uang berlebih", "barang melimpah", "harga turun"],
    ["Pasar tempat penjual dan pembeli bertemu langsung disebut pasar...", "konkret", "abstrak", "modal", "tenaga kerja"],
    ["Hari Pahlawan diperingati setiap...", "10 November", "17 Agustus", "1 Juni", "20 Mei"],
    ["Organisasi pergerakan nasional pertama adalah...", "Budi Utomo", "Sarekat Islam", "Indische Partij", "PNI"],
    ["Gunung tertinggi di Indonesia adalah...", "Puncak Jaya", "Semeru", "Rinjani", "Kerinci"],
    ["Danau vulkanik terbesar di Indonesia adalah...", "Danau Toba", "Danau Poso", "Danau Sentani", "Danau Batur"],
    ["Bapak Koperasi Indonesia adalah...", "Moh. Hatta", "Soekarno", "Ki Hajar Dewantara", "Sutan Sjahrir"],
    ["Lembaga yang menghimpun dan menyalurkan dana masyarakat adalah...", "bank", "museum", "terminal", "pelabuhan"]
  ],
  tf: [
    ["Indonesia dilalui garis khatulistiwa.", true], ["Indonesia memiliki 4 musim.", false],
    ["Budi Utomo berdiri pada 20 Mei 1908.", true], ["Teks Proklamasi ditandatangani Soekarno dan Hatta.", true],
    ["Koperasi berasaskan kekeluargaan.", true], ["Jika permintaan naik dan barang tetap, harga cenderung turun.", false],
    ["Indonesia berbatasan darat dengan Malaysia di Kalimantan.", true], ["Sumpah Pemuda terjadi pada tahun 1945.", false],
    ["Jakarta terletak di Pulau Sumatera.", false], ["Konferensi Asia Afrika diadakan di Bandung tahun 1955.", true]
  ],
  pair: [
    [["Budi Utomo", "1908"], ["Sumpah Pemuda", "1928"], ["Proklamasi", "1945"], ["Konferensi Asia Afrika", "1955"], ["Reformasi", "1998"]],
    [["Produsen", "pembuat barang"], ["Konsumen", "pemakai barang"], ["Distributor", "penyalur barang"], ["Permintaan", "keinginan membeli"], ["Penawaran", "barang yang dijual"]],
    [["dr. Soetomo", "Budi Utomo"], ["Ki Hajar Dewantara", "Taman Siswa"], ["H. Samanhudi", "Sarekat Dagang Islam"], ["K.H. Ahmad Dahlan", "Muhammadiyah"], ["K.H. Hasyim Asy'ari", "Nahdlatul Ulama"]]
  ],
  ord: [
    ["Urutkan peristiwa menjelang proklamasi", ["Jepang menyerah", "Peristiwa Rengasdengklok", "Perumusan teks proklamasi", "Pembacaan proklamasi"]],
    ["Urutkan kegiatan ekonomi", ["Produksi", "Distribusi", "Konsumsi"]],
    ["Urutkan zaman (paling awal)", ["Praaksara", "Hindu-Buddha", "Islam", "Kolonial"]],
    ["Urutkan pulau dari yang terbesar", ["Papua", "Kalimantan", "Sumatera", "Sulawesi", "Jawa"]]
  ]
});

QB.add({
  kelas: SMP, mapel: "Bahasa Indonesia", elemen: "Teks LHO, Eksposisi, Berita, Cerpen, Puisi lama",
  mc: [
    ["Teks yang bertujuan membujuk pembaca disebut teks...", "persuasi", "deskripsi", "narasi", "prosedur"],
    ["Bagian berita yang berisi inti berita disebut...", "teras berita", "tubuh berita", "ekor berita", "judul"],
    ["Teks yang berisi hasil pengamatan disebut...", "laporan hasil observasi", "eksposisi", "cerpen", "fabel"],
    ["Teks eksposisi bertujuan...", "menyampaikan gagasan dengan argumen", "menceritakan pengalaman", "memberi petunjuk", "menghibur pembaca"],
    ["Puisi lama 4 baris bersajak a-a-a-a adalah...", "syair", "pantun", "gurindam", "karmina"],
    ["Gurindam terdiri atas ... baris tiap bait.", "2", "4", "3", "6"],
    ["Kalimat pasif adalah...", "Buku itu dibaca oleh Rina.", "Rina membaca buku.", "Rina sedang membaca.", "Rina suka buku."],
    ["Kata serapan baku dari “system” adalah...", "sistem", "sistim", "sestem", "system"],
    ["Unsur cerpen berupa waktu, tempat, dan suasana disebut...", "latar", "alur", "tema", "amanat"],
    ["Pesan moral dalam cerita disebut...", "amanat", "tema", "tokoh", "sudut pandang"],
    ["Penulisan kata depan yang benar adalah...", "di rumah", "dirumah", "di-rumah", "Dirumah"],
    ["Konjungsi “meskipun” menyatakan hubungan...", "pertentangan", "sebab", "tujuan", "waktu"],
    ["Teks ulasan karya disebut juga...", "resensi", "iklan", "pidato", "biografi"]
  ],
  tf: [
    ["Syair bersajak a-a-a-a.", true], ["Penulisan “dirumah” sudah benar.", false],
    ["Amanat adalah pesan dari pengarang.", true], ["Teks prosedur bertujuan membujuk pembaca.", false],
    ["Kata “diambil” adalah kata kerja pasif.", true], ["Cerpen memiliki unsur intrinsik.", true],
    ["Pantun tidak memiliki sampiran.", false], ["Teks berita harus faktual.", true],
    ["“Analisa” adalah kata baku.", false], ["Latar meliputi tempat, waktu, dan suasana.", true]
  ],
  pair: [
    [["Tema", "gagasan utama"], ["Alur", "rangkaian peristiwa"], ["Latar", "tempat dan waktu"], ["Tokoh", "pelaku cerita"], ["Amanat", "pesan moral"]],
    [["Pantun", "a-b-a-b"], ["Syair", "a-a-a-a"], ["Gurindam", "2 baris"], ["Karmina", "pantun kilat"], ["Talibun", "lebih dari 4 baris"]],
    [["analisa", "analisis"], ["praktek", "praktik"], ["kwalitas", "kualitas"], ["jadual", "jadwal"], ["ijin", "izin"]]
  ],
  ord: [
    ["Urutkan struktur teks eksposisi", ["Tesis", "Argumentasi", "Penegasan ulang"]],
    ["Urutkan struktur cerpen", ["Abstrak", "Orientasi", "Komplikasi", "Resolusi", "Koda"]],
    ["Urutkan struktur teks berita", ["Judul", "Teras berita", "Tubuh berita", "Ekor berita"]],
    ["Susun kalimat", ["Para siswa", "mengikuti", "lomba", "dengan", "semangat"]]
  ]
});

QB.add({
  kelas: SMP, mapel: "Bahasa Inggris", elemen: "Tenses, Degrees of comparison, Text types, Expressions",
  mc: [
    ["She ... to school every day.", "goes", "go", "going", "gone"],
    ["Yesterday I ... a movie.", "watched", "watch", "watching", "watches"],
    ["They have ... their homework.", "finished", "finish", "finishing", "finishes"],
    ["Look! The children ... in the yard.", "are playing", "play", "played", "plays"],
    ["This book is ... than that one.", "thicker", "thick", "thickest", "more thick"],
    ["Mount Everest is the ... mountain in the world.", "highest", "higher", "high", "most high"],
    ["“Could you help me?” is used for...", "asking for help", "giving advice", "apologizing", "greeting"],
    ["A text that tells past experiences is...", "recount text", "procedure text", "descriptive text", "report text"],
    ["A text that describes a particular person or thing is...", "descriptive text", "recount text", "narrative text", "procedure text"],
    ["Narrative text aims to...", "entertain readers", "give instructions", "report news", "sell products"],
    ["I will ... you tomorrow.", "call", "called", "calling", "calls"],
    ["If it rains, we ... at home.", "will stay", "stayed", "staying", "stays"],
    ["“You should see a doctor” expresses...", "giving advice", "asking opinion", "congratulating", "thanking"]
  ],
  tf: [
    ["“He go to school” is grammatically correct.", false], ["The past tense of “write” is “wrote”.", true],
    ["Recount text tells past events.", true], ["“Better” is the comparative form of “good”.", true],
    ["Procedure text tells a funny story.", false], ["“Congratulations!” expresses sympathy.", false],
    ["Narrative text has orientation, complication, and resolution.", true], ["We use “is” with “they”.", false],
    ["Future tense can use “will”.", true], ["“Children” is the plural of “child”.", true]
  ],
  pair: [
    [["go", "went"], ["take", "took"], ["make", "made"], ["think", "thought"], ["bring", "brought"]],
    [["good", "better"], ["bad", "worse"], ["big", "bigger"], ["far", "farther"], ["happy", "happier"]],
    [["Recount", "past experience"], ["Procedure", "how to make"], ["Descriptive", "describe something"], ["Narrative", "folktale"], ["Report", "general facts"]]
  ],
  ord: [
    ["Arrange the sentence", ["She", "has", "lived", "here", "for", "ten years"]],
    ["Structure of narrative text", ["Orientation", "Complication", "Resolution"]],
    ["Arrange the sentence", ["Did", "you", "go", "to", "school", "yesterday?"]],
    ["Structure of recount text", ["Orientation", "Events", "Reorientation"]]
  ]
});

QB.add({
  kelas: SMP, mapel: "Informatika", elemen: "Berpikir komputasional, Sistem komputer, Jaringan, Analisis data, Dampak sosial",
  mc: [
    ["Pilar berpikir komputasional yang mencari kesamaan disebut...", "pengenalan pola", "dekomposisi", "abstraksi", "algoritma"],
    ["Mengambil informasi penting dan mengabaikan detail disebut...", "abstraksi", "dekomposisi", "debugging", "enkripsi"],
    ["1 byte sama dengan ... bit.", "8", "4", "16", "10"],
    ["1 kilobyte sama dengan ... byte.", "1.024", "100", "1.000.000", "512"],
    ["Bilangan biner hanya terdiri atas angka...", "0 dan 1", "0 sampai 9", "1 dan 2", "A sampai F"],
    ["Bilangan biner 101 sama dengan desimal...", "5", "3", "6", "101"],
    ["Contoh sistem operasi adalah...", "Windows", "Microsoft Word", "Google Chrome", "Photoshop"],
    ["Fungsi SUM pada spreadsheet digunakan untuk...", "menjumlahkan", "mencari rata-rata", "mencari nilai terbesar", "menghitung banyak data"],
    ["Fungsi AVERAGE digunakan untuk mencari...", "rata-rata", "jumlah", "nilai terkecil", "nilai terbesar"],
    ["Jaringan komputer dalam satu gedung disebut...", "LAN", "WAN", "MAN", "internet"],
    ["Penipuan mencuri data lewat tautan palsu disebut...", "phishing", "backup", "update", "download"],
    ["Perangkat yang menghubungkan jaringan berbeda adalah...", "router", "monitor", "printer", "scanner"],
    ["Hasil dari print(2+3) di Python adalah...", "5", "2+3", "23", "error"],
    ["Hak cipta melindungi...", "karya ciptaan seseorang", "perangkat keras", "listrik", "jalan raya"]
  ],
  tf: [
    ["1 byte = 8 bit.", true], ["Mouse termasuk perangkat lunak.", false],
    ["Biner 11 sama dengan desimal 3.", true], ["Phishing adalah cara aman berbagi data.", false],
    ["Sistem operasi mengatur kerja perangkat keras.", true], ["Algoritma harus jelas dan berhingga.", true],
    ["Menyebarkan hoaks boleh jika sedang viral.", false], ["RAM menyimpan data permanen walau komputer mati.", false],
    ["Fungsi MAX mencari nilai terbesar.", true], ["Kata sandi kuat berisi huruf, angka, dan simbol.", true]
  ],
  pair: [
    [["CPU", "otak komputer"], ["RAM", "memori sementara"], ["SSD", "penyimpanan"], ["Router", "penghubung jaringan"], ["OS", "sistem operasi"]],
    [["SUM", "jumlah"], ["AVERAGE", "rata-rata"], ["MAX", "terbesar"], ["MIN", "terkecil"], ["COUNT", "banyak data"]],
    [["10₂", "2"], ["11₂", "3"], ["100₂", "4"], ["101₂", "5"], ["110₂", "6"]]
  ],
  ord: [
    ["Urutkan satuan data dari terkecil", ["Bit", "Byte", "Kilobyte", "Megabyte", "Gigabyte"]],
    ["Urutkan pilar berpikir komputasional", ["Dekomposisi", "Pengenalan pola", "Abstraksi", "Algoritma"]],
    ["Urutkan langkah mengirim email", ["Buka aplikasi email", "Tulis alamat penerima", "Tulis subjek dan isi", "Klik kirim"]]
  ]
});

QB.add({
  kelas: SMP, mapel: "Pendidikan Pancasila", elemen: "Pancasila, UUD 1945, Bhinneka Tunggal Ika, NKRI",
  mc: [
    ["Pancasila sebagai pandangan hidup bangsa berarti...", "pedoman bersikap dan bertingkah laku", "hanya hafalan upacara", "aturan negara lain", "lambang negara saja"],
    ["UUD 1945 telah diamandemen sebanyak...", "4 kali", "2 kali", "3 kali", "5 kali"],
    ["Lembaga yang berwenang mengubah UUD adalah...", "MPR", "DPR", "Presiden", "MK"],
    ["Lembaga yang menguji UU terhadap UUD adalah...", "Mahkamah Konstitusi", "Mahkamah Agung", "Komisi Yudisial", "DPD"],
    ["Sumpah Pemuda menegaskan satu tanah air, satu bangsa, dan satu...", "bahasa", "agama", "suku", "budaya"],
    ["Cinta tanah air berlebihan dan merendahkan bangsa lain disebut...", "chauvinisme", "patriotisme", "nasionalisme", "humanisme"],
    ["“Negara Indonesia adalah negara hukum” tercantum dalam UUD 1945 Pasal...", "1 ayat 3", "1 ayat 1", "28", "33"],
    ["Pemilu di Indonesia dilaksanakan setiap...", "5 tahun", "4 tahun", "3 tahun", "6 tahun"],
    ["Asas pemilu LUBER JURDIL, huruf R artinya...", "rahasia", "resmi", "rakyat", "rutin"],
    ["Contoh ancaman nonmiliter bidang ideologi adalah...", "masuknya paham radikal", "perang terbuka", "pembajakan kapal", "pelanggaran wilayah udara"],
    ["Otonomi daerah memberi kewenangan daerah untuk...", "mengatur urusan pemerintahannya", "mencetak uang sendiri", "membentuk tentara sendiri", "membuat UUD sendiri"],
    ["Bendera pusaka Merah Putih dijahit oleh...", "Fatmawati", "Cut Nyak Dien", "R.A. Kartini", "Dewi Sartika"]
  ],
  tf: [
    ["UUD 1945 diamandemen sebanyak 4 kali.", true], ["Mahkamah Konstitusi termasuk lembaga yudikatif.", true],
    ["Chauvinisme adalah sikap terpuji.", false], ["Pemilu dilaksanakan setiap 5 tahun sekali.", true],
    ["Sumpah Pemuda dibacakan pada 28 Oktober 1928.", true], ["Daerah otonom boleh mencetak mata uang sendiri.", false],
    ["Indonesia adalah negara kesatuan berbentuk republik.", true], ["Pancasila hanya berlaku untuk pejabat negara.", false],
    ["Musyawarah mencerminkan sila keempat.", true], ["Bendera Merah Putih pertama dijahit oleh Fatmawati.", true]
  ],
  pair: [
    [["MPR", "mengubah UUD"], ["DPR", "membuat UU"], ["MK", "menguji UU"], ["MA", "pengadilan tertinggi"], ["BPK", "memeriksa keuangan"]],
    [["Langsung", "memilih sendiri"], ["Umum", "semua warga cukup umur"], ["Bebas", "tanpa paksaan"], ["Rahasia", "tidak diketahui orang lain"], ["Jujur", "sesuai aturan"]]
  ],
  ord: [
    ["Urutkan isi Sumpah Pemuda", ["Satu tanah air", "Satu bangsa", "Satu bahasa"]],
    ["Urutkan peristiwa sejarah", ["Kebangkitan Nasional 1908", "Sumpah Pemuda 1928", "Proklamasi 1945", "Reformasi 1998"]],
    ["Urutkan tahapan pemilu", ["Pendaftaran pemilih", "Kampanye", "Pemungutan suara", "Penghitungan suara", "Penetapan hasil"]]
  ]
});
