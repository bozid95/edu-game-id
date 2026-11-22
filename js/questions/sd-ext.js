/* ============================================================
   BANK SOAL SD – TAMBAHAN (perluasan per elemen CP 046/H/KR/2025)
   PJOK, Seni Budaya, serta pendalaman IPAS, B. Indonesia,
   Pendidikan Pancasila, B. Inggris
   ============================================================ */

/* ---------------- PJOK ---------------- */
QB.add({
  kelas: [1, 2], mapel: "PJOK", elemen: "Gerak dasar lokomotor, Kebugaran, Pola hidup sehat",
  mc: [
    ["Berjalan, berlari, dan melompat termasuk gerak...", "lokomotor", "nonlokomotor", "manipulatif", "diam"],
    ["Menendang bola termasuk gerak...", "manipulatif", "lokomotor", "nonlokomotor", "statis"],
    ["Membungkuk dan memutar badan di tempat termasuk gerak...", "nonlokomotor", "lokomotor", "manipulatif", "berpindah"],
    ["Sebelum berolahraga kita harus melakukan...", "pemanasan", "tidur", "makan banyak", "pendinginan"],
    ["Gosok gigi sebaiknya dilakukan minimal ... kali sehari.", "2", "1", "5", "0"],
    ["Makanan sehat untuk tubuh adalah...", "sayur dan buah", "permen", "minuman bersoda", "keripik"],
    ["Mencuci tangan yang benar menggunakan...", "sabun dan air mengalir", "air kolam", "tanah", "minyak"],
    ["Alat untuk bermain lompat tali adalah...", "tali", "bola", "raket", "kayu"],
    ["Setelah berolahraga kita melakukan...", "pendinginan", "pemanasan", "lari cepat", "makan permen"],
    ["Bagian tubuh untuk menendang bola adalah...", "kaki", "tangan", "kepala", "bahu"],
    ["Tidur malam yang cukup bagi anak sekitar ... jam.", "9–11", "2–3", "4–5", "15–16"],
    ["Permainan tradisional melompati kotak-kotak adalah...", "engklek", "gobak sodor", "congklak", "layangan"]
  ],
  tf: [
    ["Berlari termasuk gerak lokomotor.", true], ["Kita boleh berolahraga tanpa pemanasan.", false],
    ["Sayur dan buah baik untuk kesehatan.", true], ["Mandi cukup seminggu sekali.", false],
    ["Melempar bola termasuk gerak manipulatif.", true], ["Engklek adalah permainan tradisional.", true],
    ["Minum air putih baik untuk tubuh.", true], ["Kuku panjang dan kotor itu sehat.", false],
    ["Berjalan jongkok termasuk gerak lokomotor.", true], ["Sarapan pagi membuat kita bertenaga.", true]
  ],
  pair: [
    [["Berlari", "lokomotor"], ["Membungkuk", "nonlokomotor"], ["Menendang bola", "manipulatif"]],
    [["Lompat tali", "tali"], ["Sepak bola", "bola"], ["Engklek", "kotak di tanah"], ["Bulu tangkis", "raket dan kok"], ["Layang-layang", "benang"]],
    [["Sikat gigi", "gigi bersih"], ["Mandi", "badan bersih"], ["Potong kuku", "kuku rapi"], ["Cuci tangan", "bebas kuman"], ["Keramas", "rambut bersih"]]
  ],
  ord: [
    ["Urutan olahraga yang benar", ["Pemanasan", "Latihan inti", "Pendinginan"]],
    ["Urutan mencuci tangan", ["Basahi tangan", "Beri sabun", "Gosok sela jari", "Bilas air", "Keringkan"]],
    ["Urutan bangun pagi", ["Bangun tidur", "Merapikan tempat tidur", "Mandi", "Sarapan"]]
  ]
});

QB.add({
  kelas: [3, 4, 5, 6], mapel: "PJOK", elemen: "Permainan bola, Atletik, Senam, Renang, Kebugaran, Kesehatan",
  mc: [
    ["Jumlah pemain sepak bola dalam satu tim adalah...", "11", "5", "6", "9"],
    ["Jumlah pemain bola voli dalam satu tim adalah...", "6", "5", "7", "11"],
    ["Jumlah pemain bola basket dalam satu tim di lapangan adalah...", "5", "6", "7", "11"],
    ["Memantulkan bola basket sambil berjalan disebut...", "dribel", "smash", "servis", "passing"],
    ["Pukulan keras dan menukik dalam bola voli disebut...", "smash", "servis", "passing", "blok"],
    ["Gaya renang yang meniru katak adalah gaya...", "dada", "bebas", "punggung", "kupu-kupu"],
    ["Start yang digunakan pada lari jarak pendek adalah start...", "jongkok", "berdiri", "melayang", "duduk"],
    ["Lari jarak pendek disebut juga...", "sprint", "maraton", "estafet", "lintas alam"],
    ["Tongkat dalam lari estafet disebut...", "stik", "raket", "pemukul", "lembing"],
    ["Gerakan berguling ke depan disebut...", "guling depan", "kayang", "lompat harimau", "sikap lilin"],
    ["Permainan tradisional menjaga garis agar lawan tidak lolos adalah...", "gobak sodor", "engklek", "congklak", "egrang"],
    ["Push up melatih kekuatan otot...", "lengan", "kaki", "leher", "jari kaki"],
    ["Sit up melatih kekuatan otot...", "perut", "lengan", "betis", "leher"],
    ["Gizi seimbang terdiri atas karbohidrat, protein, lemak, vitamin, dan...", "mineral", "gula", "garam saja", "pewarna"],
    ["Contoh makanan sumber protein adalah...", "telur", "nasi", "minyak", "gula"],
    ["Pubertas pada anak ditandai dengan...", "perubahan fisik", "berhenti tumbuh", "mengecilnya tubuh", "hilangnya gigi"],
    ["Bahaya merokok bagi kesehatan adalah merusak...", "paru-paru", "rambut saja", "kuku saja", "pakaian"],
    ["Lompat jauh terdiri atas awalan, tumpuan, melayang, dan...", "mendarat", "berenang", "berguling", "menendang"]
  ],
  tf: [
    ["Satu tim sepak bola terdiri dari 11 pemain.", true], ["Bola voli dimainkan dengan kaki.", false],
    ["Dribel dalam basket adalah memantulkan bola.", true], ["Gaya dada meniru gerakan katak.", true],
    ["Lari estafet menggunakan tongkat.", true], ["Start jongkok digunakan untuk maraton.", false],
    ["Merokok baik untuk kesehatan paru-paru.", false], ["Push up melatih otot lengan.", true],
    ["Gobak sodor adalah permainan tradisional.", true], ["Nasi adalah sumber protein utama.", false],
    ["Pemanasan mencegah cedera saat olahraga.", true], ["Narkoba berbahaya bagi tubuh dan masa depan.", true]
  ],
  pair: [
    [["Sepak bola", "11 pemain"], ["Bola voli", "6 pemain"], ["Bola basket", "5 pemain"], ["Futsal", "5 pemain inti"], ["Bulu tangkis tunggal", "1 pemain"]],
    [["Dribel", "basket"], ["Smash", "voli"], ["Menyundul", "sepak bola"], ["Servis panjang", "bulu tangkis"], ["Gaya dada", "renang"]],
    [["Push up", "otot lengan"], ["Sit up", "otot perut"], ["Squat jump", "otot kaki"], ["Back up", "otot punggung"], ["Lari", "daya tahan jantung"]]
  ],
  ord: [
    ["Urutan gerakan lompat jauh", ["Awalan", "Tumpuan", "Melayang", "Mendarat"]],
    ["Urutan gerakan guling depan", ["Jongkok", "Letakkan tangan di matras", "Masukkan dagu ke dada", "Berguling ke depan"]],
    ["Urutan aba-aba start lari jarak pendek", ["Bersedia", "Siap", "Ya!"]],
    ["Urutan lari estafet", ["Pelari pertama", "Pelari kedua", "Pelari ketiga", "Pelari keempat"]]
  ]
});

/* ---------------- SENI BUDAYA ---------------- */
QB.add({
  kelas: [1, 2, 3], mapel: "Seni Budaya", elemen: "Seni rupa, Seni musik, Seni tari, Seni teater",
  mc: [
    ["Warna primer adalah merah, kuning, dan...", "biru", "hijau", "ungu", "oranye"],
    ["Campuran merah dan kuning menghasilkan warna...", "oranye", "hijau", "ungu", "cokelat"],
    ["Campuran biru dan kuning menghasilkan warna...", "hijau", "oranye", "ungu", "merah muda"],
    ["Campuran merah dan biru menghasilkan warna...", "ungu", "hijau", "oranye", "kuning"],
    ["Alat musik yang dipukul adalah...", "gendang", "seruling", "gitar", "biola"],
    ["Alat musik yang ditiup adalah...", "seruling", "gendang", "gitar", "piano"],
    ["Alat musik yang dipetik adalah...", "gitar", "seruling", "drum", "terompet"],
    ["Lagu “Balonku” bercerita tentang...", "balon", "kucing", "pelangi", "kereta"],
    ["Menggambar dengan menempelkan potongan kertas disebut...", "kolase", "mozaik", "sketsa", "patung"],
    ["Tinggi rendahnya nada dalam lagu disebut...", "melodi", "tempo", "ritme", "dinamik"],
    ["Gerak tari yang meniru hewan disebut gerak...", "imitatif", "murni", "maknawi", "spontan"],
    ["Bermain peran di atas panggung disebut...", "teater", "tari", "lukis", "nyanyi"]
  ],
  tf: [
    ["Merah, kuning, dan biru adalah warna primer.", true], ["Gitar dimainkan dengan cara ditiup.", false],
    ["Kuning dicampur biru menjadi hijau.", true], ["Gendang dimainkan dengan dipukul.", true],
    ["Kolase dibuat dengan menempel bahan.", true], ["Seruling dimainkan dengan dipetik.", false],
    ["Tari burung merak meniru gerak hewan.", true], ["Lagu “Pelangi-Pelangi” bercerita tentang pelangi.", true]
  ],
  pair: [
    [["Merah + kuning", "oranye"], ["Biru + kuning", "hijau"], ["Merah + biru", "ungu"], ["Merah + putih", "merah muda"], ["Hitam + putih", "abu-abu"]],
    [["Gendang", "dipukul"], ["Seruling", "ditiup"], ["Gitar", "dipetik"], ["Biola", "digesek"], ["Angklung", "digoyang"]]
  ],
  ord: [
    ["Urutan membuat kolase", ["Buat sketsa", "Siapkan bahan", "Oles lem", "Tempel bahan"]],
    ["Urutan tangga nada", ["do", "re", "mi", "fa", "sol"]]
  ]
});

QB.add({
  kelas: [4, 5, 6], mapel: "Seni Budaya", elemen: "Seni rupa, Musik, Tari & teater Nusantara",
  mc: [
    ["Alat musik tradisional dari Jawa Barat yang terbuat dari bambu dan digoyang adalah...", "angklung", "sasando", "tifa", "kolintang"],
    ["Sasando adalah alat musik dari...", "Nusa Tenggara Timur", "Jawa Tengah", "Sumatera Barat", "Papua"],
    ["Tifa adalah alat musik dari...", "Papua", "Bali", "Aceh", "Jawa Barat"],
    ["Kolintang adalah alat musik dari...", "Sulawesi Utara", "Kalimantan Barat", "Bali", "Riau"],
    ["Gamelan banyak dimainkan di...", "Jawa dan Bali", "Papua", "Maluku", "Aceh"],
    ["Tanda tempo “cepat” dalam musik adalah...", "allegro", "largo", "andante", "piano"],
    ["Tanda dinamik “keras” dalam musik adalah...", "forte", "piano", "lento", "moderato"],
    ["Karya seni rupa tiga dimensi contohnya...", "patung", "lukisan", "poster", "batik tulis"],
    ["Batik telah diakui UNESCO sebagai warisan budaya dari...", "Indonesia", "Malaysia", "Thailand", "India"],
    ["Alat untuk membatik tulis adalah...", "canting", "kuas", "pahat", "spidol"],
    ["Wayang kulit berasal dari...", "Jawa", "Papua", "Kalimantan", "Sumatera Utara"],
    ["Tari Tor-Tor berasal dari...", "Sumatera Utara", "Jawa Timur", "Bali", "Maluku"],
    ["Tari Pendet berasal dari...", "Bali", "Aceh", "Papua", "Jawa Barat"],
    ["Ilmu tentang tinggi-rendah dan panjang-pendek nada ditulis dalam...", "notasi", "lirik", "koreografi", "naskah"],
    ["Penata gerak tari disebut...", "koreografer", "sutradara", "dalang", "konduktor"],
    ["Pemimpin pertunjukan wayang disebut...", "dalang", "sinden", "penari", "pelukis"]
  ],
  tf: [
    ["Sasando berasal dari Nusa Tenggara Timur.", true], ["Patung adalah karya seni dua dimensi.", false],
    ["Batik diakui UNESCO sebagai warisan budaya Indonesia.", true], ["Forte berarti lembut.", false],
    ["Angklung terbuat dari bambu.", true], ["Dalang memainkan wayang.", true],
    ["Canting digunakan untuk membatik.", true], ["Tari Saman berasal dari Papua.", false],
    ["Allegro berarti cepat.", true], ["Koreografer adalah penata tari.", true]
  ],
  pair: [
    [["Angklung", "Jawa Barat"], ["Sasando", "NTT"], ["Tifa", "Papua"], ["Kolintang", "Sulawesi Utara"], ["Talempong", "Sumatera Barat"]],
    [["Tari Saman", "Aceh"], ["Tari Tor-Tor", "Sumatera Utara"], ["Tari Pendet", "Bali"], ["Tari Jaipong", "Jawa Barat"], ["Tari Gantar", "Kalimantan Timur"]],
    [["Forte", "keras"], ["Piano", "lembut"], ["Allegro", "cepat"], ["Largo", "sangat lambat"], ["Andante", "sedang"]]
  ],
  ord: [
    ["Urutan membatik tulis", ["Membuat pola", "Mencanting malam", "Mewarnai", "Melorod (lepas malam)"]],
    ["Urutan pentas tari", ["Persiapan", "Pembukaan", "Inti pertunjukan", "Penutup"]],
    ["Urutkan tempo dari paling lambat", ["Largo", "Andante", "Moderato", "Allegro"]]
  ]
});

/* ---------------- PERLUASAN IPAS ---------------- */
QB.add({
  kelas: [3, 4], mapel: "IPAS", elemen: "Pancaindra, Daur hidup, Energi, Peta & lingkungan, Keragaman",
  mc: [
    ["Indra pendengar adalah...", "telinga", "mata", "hidung", "kulit"],
    ["Indra peraba adalah...", "kulit", "lidah", "telinga", "mata"],
    ["Lidah dapat merasakan rasa manis, asin, asam, dan...", "pahit", "dingin", "keras", "licin"],
    ["Bagian mata yang mengatur banyaknya cahaya masuk adalah...", "pupil", "kornea", "lensa", "retina"],
    ["Perkembangbiakan tumbuhan dengan biji termasuk perkembangbiakan...", "generatif", "vegetatif", "stek", "tunas"],
    ["Contoh perkembangbiakan vegetatif buatan adalah...", "stek", "biji", "spora", "bertelur"],
    ["Kentang berkembang biak dengan...", "umbi batang", "umbi akar", "geragih", "rizom"],
    ["Hewan yang berkembang biak dengan bertelur disebut...", "ovipar", "vivipar", "ovovivipar", "herbivor"],
    ["Kucing berkembang biak dengan cara...", "melahirkan", "bertelur", "membelah diri", "bertunas"],
    ["Energi yang dimiliki benda bergerak adalah energi...", "kinetik", "potensial", "kimia", "panas"],
    ["Kincir angin memanfaatkan energi...", "angin", "air", "panas bumi", "nuklir"],
    ["Perpindahan panas melalui benda padat disebut...", "konduksi", "konveksi", "radiasi", "evaporasi"],
    ["Panas matahari sampai ke bumi melalui...", "radiasi", "konduksi", "konveksi", "isolasi"],
    ["Gambar permukaan bumi pada bidang datar disebut...", "peta", "globe", "atlas", "denah"],
    ["Denah adalah gambar yang menunjukkan...", "letak ruangan atau tempat", "seluruh dunia", "jumlah penduduk", "cuaca"],
    ["Mata pencaharian penduduk di daerah pantai umumnya...", "nelayan", "petani teh", "penambang batu bara", "peternak sapi perah"],
    ["Kegiatan jual beli disebut kegiatan...", "ekonomi", "politik", "olahraga", "seni"],
    ["Tumbuhan yang daunnya menutup jika disentuh adalah...", "putri malu", "kaktus", "mawar", "padi"]
  ],
  tf: [
    ["Mata adalah indra penglihat.", true], ["Kucing berkembang biak dengan bertelur.", false],
    ["Stek adalah perkembangbiakan vegetatif buatan.", true], ["Konduksi terjadi pada benda padat.", true],
    ["Energi matahari sampai ke bumi melalui radiasi.", true], ["Globe berbentuk datar seperti kertas.", false],
    ["Ayam adalah hewan ovipar.", true], ["Lidah adalah indra pencium.", false],
    ["Angin dapat menggerakkan kincir.", true], ["Penduduk pegunungan banyak yang bertani sayur.", true],
    ["Mata uang Indonesia adalah rupiah.", true], ["Putri malu menutup daunnya jika disentuh.", true]
  ],
  pair: [
    [["Mata", "melihat"], ["Telinga", "mendengar"], ["Hidung", "membau"], ["Lidah", "mengecap"], ["Kulit", "meraba"]],
    [["Ovipar", "ayam"], ["Vivipar", "kucing"], ["Ovovivipar", "kadal"], ["Membelah diri", "amoeba"], ["Bertunas", "hydra"]],
    [["Konduksi", "sendok panas"], ["Konveksi", "air mendidih"], ["Radiasi", "panas matahari"], ["Isolator", "kayu"], ["Konduktor", "besi"]]
  ],
  ord: [
    ["Urutkan daur hidup ayam", ["Telur", "Anak ayam", "Ayam remaja", "Ayam dewasa"]],
    ["Urutkan daur hidup nyamuk", ["Telur", "Jentik", "Pupa", "Nyamuk dewasa"]],
    ["Urutkan dari wilayah terkecil", ["Rumah", "Desa", "Kecamatan", "Kabupaten", "Provinsi"]]
  ]
});

QB.add({
  kelas: [5, 6], mapel: "IPAS", elemen: "Ekosistem, Cahaya & bunyi, Magnet, Bumi, Sejarah & ekonomi Indonesia",
  mc: [
    ["Cahaya merambat menurut garis...", "lurus", "melengkung", "zig-zag", "melingkar"],
    ["Pelangi terjadi karena peristiwa ... cahaya.", "penguraian", "pemantulan", "penyerapan", "pembiasan saja"],
    ["Cermin datar menghasilkan bayangan yang...", "sama besar", "lebih kecil", "lebih besar", "terbalik atas-bawah"],
    ["Sedotan tampak patah dalam gelas air karena...", "pembiasan cahaya", "pemantulan cahaya", "penyerapan bunyi", "magnet"],
    ["Kutub magnet yang sejenis jika didekatkan akan...", "tolak-menolak", "tarik-menarik", "diam", "melebur"],
    ["Alat yang memanfaatkan magnet untuk menunjukkan arah adalah...", "kompas", "termometer", "barometer", "teropong"],
    ["Bunyi yang memantul dan terdengar setelah bunyi asli disebut...", "gema", "gaung", "infrasonik", "nada"],
    ["Lapisan udara yang menyelimuti bumi disebut...", "atmosfer", "litosfer", "hidrosfer", "biosfer"],
    ["Peristiwa bulan menutupi matahari disebut gerhana...", "matahari", "bulan", "bintang", "bumi"],
    ["Bumi mengelilingi matahari dalam waktu sekitar...", "365 hari", "30 hari", "24 jam", "7 hari"],
    ["Hewan yang aktif di malam hari disebut hewan...", "nokturnal", "diurnal", "herbivora", "omnivora"],
    ["Hubungan lebah dan bunga termasuk simbiosis...", "mutualisme", "parasitisme", "komensalisme", "netralisme"],
    ["Benalu dan pohon inangnya termasuk simbiosis...", "parasitisme", "mutualisme", "komensalisme", "netralisme"],
    ["Proklamasi kemerdekaan dibacakan oleh...", "Ir. Soekarno", "Moh. Hatta", "Sutan Sjahrir", "Ahmad Soebardjo"],
    ["Penjahit bendera pusaka Merah Putih adalah...", "Fatmawati", "Kartini", "Cut Nyak Dien", "Dewi Sartika"],
    ["Pahlawan pendidikan dengan semboyan “Tut Wuri Handayani” adalah...", "Ki Hajar Dewantara", "Moh. Yamin", "Bung Tomo", "Pattimura"],
    ["Uang yang dikeluarkan untuk membeli barang disebut...", "pengeluaran", "pendapatan", "tabungan", "investasi"],
    ["Tempat menyimpan uang yang aman adalah...", "bank", "bawah bantal", "dompet saja", "laci terbuka"],
    ["Organ tempat terjadinya pertukaran oksigen dan karbon dioksida adalah...", "alveolus", "trakea", "laring", "hidung"],
    ["Gaya yang terjadi akibat dua permukaan bergesekan disebut gaya...", "gesek", "magnet", "pegas", "listrik"]
  ],
  tf: [
    ["Cahaya merambat lurus.", true], ["Kutub utara dan kutub utara magnet saling tarik.", false],
    ["Kompas memanfaatkan magnet.", true], ["Gerhana bulan terjadi saat bulan menutupi matahari.", false],
    ["Lebah dan bunga saling menguntungkan.", true], ["Kelelawar adalah hewan nokturnal.", true],
    ["Bunyi tidak dapat merambat di ruang hampa.", true], ["Pelangi terjadi karena penguraian cahaya putih.", true],
    ["Bumi berputar pada porosnya disebut revolusi.", false], ["Ki Hajar Dewantara adalah Bapak Pendidikan Nasional.", true],
    ["Menabung adalah kebiasaan baik.", true], ["Gaya gesek dapat memperlambat gerak benda.", true]
  ],
  pair: [
    [["Mutualisme", "lebah dan bunga"], ["Parasitisme", "benalu dan pohon"], ["Komensalisme", "anggrek dan pohon"], ["Predasi", "harimau dan rusa"], ["Kompetisi", "kambing dan sapi berebut rumput"]],
    [["Atmosfer", "lapisan udara"], ["Hidrosfer", "lapisan air"], ["Litosfer", "lapisan batuan"], ["Biosfer", "lapisan kehidupan"]],
    [["Ki Hajar Dewantara", "pendidikan"], ["R.A. Kartini", "emansipasi wanita"], ["Bung Tomo", "Surabaya"], ["Pattimura", "Maluku"], ["Diponegoro", "Perang Jawa"]]
  ],
  ord: [
    ["Urutkan rantai makanan sawah", ["Padi", "Belalang", "Katak", "Ular", "Elang"]],
    ["Urutkan proses terjadinya hujan", ["Penguapan", "Pengembunan", "Awan jenuh", "Hujan"]],
    ["Urutkan jalan udara pernapasan", ["Hidung", "Tenggorokan", "Bronkus", "Paru-paru"]],
    ["Urutkan planet setelah Bumi", ["Mars", "Yupiter", "Saturnus", "Uranus", "Neptunus"]]
  ]
});

/* ---------------- PERLUASAN BAHASA INDONESIA ---------------- */
QB.add({
  kelas: [1, 2], mapel: "Bahasa Indonesia", elemen: "Kosakata, Kalimat sederhana",
  mc: [
    ["Anak sapi disebut...", "pedet", "kitten", "anak ayam", "cebong"],
    ["Anak katak disebut...", "berudu", "anak bebek", "ulat", "pedet"],
    ["Benda yang dipakai di kaki adalah...", "sepatu", "topi", "kacamata", "sarung tangan"],
    ["Warna daun yang segar adalah...", "hijau", "biru", "ungu", "hitam"],
    ["Kata “ma-ta” dibaca...", "mata", "tama", "amat", "tamat"],
    ["Ayah dari ayah kita disebut...", "kakek", "paman", "adik", "kakak"],
    ["Adik dari ibu kita disebut...", "bibi atau paman", "kakek", "nenek", "sepupu"],
    ["Kita tidur di...", "kamar tidur", "dapur", "kamar mandi", "garasi"],
    ["Kata yang berawalan huruf “B” adalah...", "bola", "kuda", "meja", "sapu"],
    ["Bulan setelah Januari adalah...", "Februari", "Maret", "Desember", "April"],
    ["Ucapan saat bertemu di pagi hari adalah...", "Selamat pagi", "Selamat malam", "Selamat tidur", "Sampai jumpa"],
    ["Lawan kata “maju” adalah...", "mundur", "naik", "lari", "jalan"]
  ],
  tf: [
    ["Anak katak disebut berudu.", true], ["Topi dipakai di kaki.", false],
    ["Kakek adalah ayah dari ayah atau ibu kita.", true], ["“Selamat malam” diucapkan pagi hari.", false],
    ["Kata “bola” diawali huruf B.", true], ["Lawan kata “maju” adalah “mundur”.", true]
  ],
  pair: [
    [["Sapi", "pedet"], ["Katak", "berudu"], ["Kupu-kupu", "ulat"], ["Ayam", "anak ayam"], ["Kambing", "cempe"]],
    [["Topi", "kepala"], ["Sepatu", "kaki"], ["Sarung tangan", "tangan"], ["Kacamata", "mata"], ["Baju", "badan"]]
  ],
  ord: [
    ["Susun menjadi kalimat", ["Adik", "bermain", "bola", "di", "lapangan"]],
    ["Urutkan nama bulan", ["Januari", "Februari", "Maret", "April"]],
    ["Susun suku kata menjadi “PELANGI”", ["PE", "LA", "NGI"]]
  ]
});

QB.add({
  kelas: [3, 4, 5, 6], mapel: "Bahasa Indonesia", elemen: "Ejaan, Imbuhan, Ungkapan, Peribahasa, Teks",
  mc: [
    ["Arti peribahasa “bagai air di daun talas” adalah...", "tidak tetap pendirian", "sangat rajin", "hidup rukun", "pandai sekali"],
    ["Arti peribahasa “bersatu kita teguh, bercerai kita runtuh” adalah...", "persatuan membuat kuat", "berpisah lebih baik", "hidup sendiri", "jangan berteman"],
    ["“Rajin pangkal pandai” berarti...", "rajin belajar membuat pintar", "malas itu baik", "pandai tanpa usaha", "rajin bekerja saja"],
    ["Ungkapan “tangan panjang” berarti...", "suka mencuri", "suka menolong", "tinggi badan", "pandai menulis"],
    ["Ungkapan “keras kepala” berarti...", "sulit dinasihati", "kepala sakit", "pintar", "pemberani"],
    ["Ungkapan “buah hati” berarti...", "anak yang disayangi", "buah segar", "jantung", "hadiah"],
    ["Imbuhan “ber-” pada “sepeda” menjadi...", "bersepeda", "mensepeda", "disepeda", "kesepeda"],
    ["Kata “kebersihan” mendapat imbuhan...", "ke-an", "ber-", "me-", "di-"],
    ["Kata ulang dari “anak” yang benar adalah...", "anak-anak", "anak anak", "anak2", "anakanak"],
    ["Penulisan kalimat langsung yang benar adalah...", "Ibu berkata, “Ayo makan.”", "Ibu berkata Ayo makan.", "“Ibu berkata ayo makan”", "Ibu, berkata ayo makan"],
    ["Tanda koma digunakan untuk...", "memisahkan unsur dalam perincian", "mengakhiri kalimat", "menyatakan pertanyaan", "menyatakan seruan"],
    ["Wawancara adalah kegiatan...", "tanya jawab untuk mendapatkan informasi", "bernyanyi bersama", "menulis puisi", "membaca dongeng"],
    ["Orang yang diwawancarai disebut...", "narasumber", "pewawancara", "pembaca", "penulis"],
    ["Bagian akhir cerita yang berisi penyelesaian disebut...", "resolusi", "orientasi", "komplikasi", "judul"],
    ["Kata “meja” jika diberi imbuhan “-mu” menjadi...", "mejamu", "meja mu", "meja-mu", "mu meja"],
    ["Teks yang berisi ajakan untuk mengikuti kegiatan disebut...", "poster/iklan", "biografi", "dongeng", "laporan"]
  ],
  tf: [
    ["“Keras kepala” berarti sulit dinasihati.", true], ["“Tangan panjang” berarti suka menolong.", false],
    ["Kata ulang “anak-anak” ditulis dengan tanda hubung.", true], ["Narasumber adalah orang yang diwawancarai.", true],
    ["Kalimat langsung diapit tanda petik.", true], ["Kata “bersepeda” memiliki imbuhan me-.", false],
    ["“Buah hati” berarti anak yang disayangi.", true], ["Tanda tanya digunakan di akhir kalimat berita.", false],
    ["Peribahasa berisi nasihat atau perbandingan.", true], ["Imbuhan “ke-an” ada pada kata “kebersihan”.", true]
  ],
  pair: [
    [["Keras kepala", "sulit dinasihati"], ["Tangan panjang", "suka mencuri"], ["Buah hati", "anak tersayang"], ["Ringan tangan", "suka menolong"], ["Besar kepala", "sombong"]],
    [["Bagai air di daun talas", "tidak tetap pendirian"], ["Rajin pangkal pandai", "rajin membuat pintar"], ["Air beriak tanda tak dalam", "banyak bicara kurang ilmu"], ["Sedikit demi sedikit, lama-lama menjadi bukit", "hemat jadi banyak"], ["Ada gula ada semut", "ada rezeki banyak yang datang"]]
  ],
  ord: [
    ["Urutan melakukan wawancara", ["Menyiapkan pertanyaan", "Membuat janji", "Bertanya kepada narasumber", "Mencatat jawaban", "Menyusun laporan"]],
    ["Susun menjadi kalimat", ["Kami", "menanam", "pohon", "di", "halaman sekolah"]]
  ]
});

/* ---------------- PERLUASAN PENDIDIKAN PANCASILA ---------------- */
QB.add({
  kelas: [1, 2, 3, 4, 5, 6], mapel: "Pendidikan Pancasila", elemen: "Nilai Pancasila dalam kehidupan sehari-hari",
  mc: [
    ["Berdoa sebelum belajar mencerminkan sila ke...", "1", "2", "3", "5"],
    ["Menolong korban bencana mencerminkan sila ke...", "2", "1", "3", "4"],
    ["Bangga memakai produk dalam negeri mencerminkan sila ke...", "3", "1", "2", "5"],
    ["Memilih ketua kelas dengan musyawarah mencerminkan sila ke...", "4", "3", "2", "1"],
    ["Membagi tugas piket secara adil mencerminkan sila ke...", "5", "4", "3", "2"],
    ["Rumah adat Joglo berasal dari...", "Jawa Tengah", "Papua", "Sumatera Barat", "Kalimantan"],
    ["Rumah adat Honai berasal dari...", "Papua", "Bali", "Jawa Barat", "Aceh"],
    ["Rumah adat Tongkonan berasal dari...", "Sulawesi Selatan", "Sumatera Utara", "NTT", "Riau"],
    ["Pakaian adat Ulos berasal dari...", "Sumatera Utara", "Jawa Timur", "Bali", "Maluku"],
    ["Bahasa persatuan bangsa Indonesia adalah...", "bahasa Indonesia", "bahasa Jawa", "bahasa Inggris", "bahasa Melayu Kuno"],
    ["Pencipta lagu Indonesia Raya adalah...", "W.R. Supratman", "Ismail Marzuki", "C. Simanjuntak", "Ibu Sud"],
    ["Lambang negara Indonesia adalah...", "Garuda Pancasila", "Bendera Merah Putih", "Monas", "Bhinneka Tunggal Ika"],
    ["Jumlah bulu pada sayap Garuda Pancasila (masing-masing) adalah...", "17", "8", "45", "19"],
    ["Jumlah bulu ekor Garuda Pancasila adalah...", "8", "17", "45", "5"],
    ["Jumlah bulu leher Garuda Pancasila adalah...", "45", "17", "8", "19"],
    ["Ibu kota negara Indonesia yang baru berada di Provinsi...", "Kalimantan Timur", "Jawa Barat", "Sulawesi Selatan", "Sumatera Selatan"]
  ],
  tf: [
    ["Bulu sayap Garuda masing-masing berjumlah 17 helai.", true], ["Bulu ekor Garuda berjumlah 45 helai.", false],
    ["Honai adalah rumah adat Papua.", true], ["W.R. Supratman menciptakan lagu Indonesia Raya.", true],
    ["Bahasa persatuan Indonesia adalah bahasa Jawa.", false], ["Menolong orang lain mencerminkan sila kedua.", true],
    ["Musyawarah mencerminkan sila kelima.", false], ["Ulos adalah kain adat dari Sumatera Utara.", true],
    ["Ibu Kota Nusantara terletak di Kalimantan Timur.", true], ["Kita harus menghargai teman yang berbeda suku.", true]
  ],
  pair: [
    [["17 bulu sayap", "tanggal 17"], ["8 bulu ekor", "bulan Agustus"], ["19 bulu pangkal ekor", "angka 19 (1945)"], ["45 bulu leher", "angka 45 (1945)"]],
    [["Joglo", "Jawa Tengah"], ["Honai", "Papua"], ["Tongkonan", "Sulawesi Selatan"], ["Rumah Gadang", "Sumatera Barat"], ["Rumah Lamin", "Kalimantan Timur"]],
    [["Berdoa", "sila 1"], ["Tolong-menolong", "sila 2"], ["Cinta tanah air", "sila 3"], ["Musyawarah", "sila 4"], ["Bersikap adil", "sila 5"]]
  ],
  ord: [
    ["Urutkan bunyi sila Pancasila", ["Ketuhanan", "Kemanusiaan", "Persatuan", "Kerakyatan", "Keadilan sosial"]]
  ]
});

/* ---------------- PERLUASAN BAHASA INGGRIS ---------------- */
QB.add({
  kelas: [3, 4, 5, 6], mapel: "Bahasa Inggris", elemen: "Family, Body, Food, Places, Daily activities",
  mc: [
    ["“Kakek” in English is...", "grandfather", "uncle", "father", "brother"],
    ["“Saudara perempuan” in English is...", "sister", "brother", "aunt", "cousin"],
    ["“Bahu” in English is...", "shoulder", "knee", "elbow", "neck"],
    ["“Lutut” in English is...", "knee", "toe", "hip", "chin"],
    ["We wash our hands with...", "soap", "sugar", "salt", "sand"],
    ["“Nasi goreng” in English is...", "fried rice", "boiled rice", "rice field", "rice cake"],
    ["The animal that says “moo” is a...", "cow", "cat", "duck", "goat"],
    ["I go to school at seven o'clock in the...", "morning", "night", "evening", "midnight"],
    ["“Rumah sakit” in English is...", "hospital", "hotel", "house", "market"],
    ["“Pasar” in English is...", "market", "museum", "mosque", "station"],
    ["What color is a banana?", "yellow", "purple", "blue", "black"],
    ["How many days are there in a week?", "seven", "five", "six", "ten"],
    ["“Jerapah” in English is...", "giraffe", "zebra", "camel", "deer"],
    ["I brush my ... every morning.", "teeth", "shoes", "books", "bags"],
    ["The opposite of “hot” is...", "cold", "warm", "big", "fast"],
    ["“Saya lapar” in English is...", "I am hungry", "I am thirsty", "I am sleepy", "I am happy"]
  ],
  tf: [
    ["“Grandmother” artinya nenek.", true], ["“Knee” artinya siku.", false],
    ["A cow says “moo”.", true], ["“Market” artinya pasar.", true],
    ["There are five days in a week.", false], ["“Thirsty” artinya haus.", true],
    ["“Teeth” is the plural of “tooth”.", true], ["A giraffe has a short neck.", false]
  ],
  pair: [
    [["father", "ayah"], ["mother", "ibu"], ["grandfather", "kakek"], ["sister", "saudara perempuan"], ["uncle", "paman"]],
    [["hospital", "rumah sakit"], ["market", "pasar"], ["library", "perpustakaan"], ["mosque", "masjid"], ["station", "stasiun"]],
    [["hungry", "lapar"], ["thirsty", "haus"], ["sleepy", "mengantuk"], ["happy", "senang"], ["sad", "sedih"]]
  ],
  ord: [
    ["Susun kalimat", ["I", "wake up", "at", "five", "o'clock"]],
    ["Urutkan kegiatan pagi", ["wake up", "take a bath", "have breakfast", "go to school"]],
    ["Susun kalimat", ["This", "is", "my", "new", "bag"]]
  ]
});
