/* ============================================================
   BANK SOAL SMP – TAMBAHAN per kelas (Fase D, CP 046/H/KR/2025)
   IPA: 7 = makhluk hidup, zat, energi, tata surya
        8 = sistem organ, gaya & gerak, getaran-gelombang-cahaya, tekanan
        9 = reproduksi, pewarisan sifat, listrik, kemagnetan, bioteknologi
   ============================================================ */

/* ---------------- IPA KELAS 7 ---------------- */
QB.add({
  kelas: [7], mapel: "IPA", elemen: "Kls 7: Klasifikasi makhluk hidup, Zat & perubahannya, Kalor, Ekosistem, Tata surya",
  mc: [
    ["Sistem penamaan ganda makhluk hidup disebut...", "binomial nomenklatur", "taksonomi", "dikotomi", "filogeni"],
    ["Tokoh pencetus sistem tata nama ganda adalah...", "Carolus Linnaeus", "Charles Darwin", "Gregor Mendel", "Robert Hooke"],
    ["Nama ilmiah padi adalah...", "Oryza sativa", "Zea mays", "Musa paradisiaca", "Felis catus"],
    ["Takson tertinggi dalam klasifikasi adalah...", "kingdom", "filum", "kelas", "spesies"],
    ["Jamur termasuk kingdom...", "Fungi", "Plantae", "Animalia", "Monera"],
    ["Bakteri termasuk kingdom...", "Monera", "Protista", "Fungi", "Plantae"],
    ["Hewan bertulang belakang disebut...", "vertebrata", "invertebrata", "avertebrata", "mamalia"],
    ["Zat yang tersusun atas satu jenis atom disebut...", "unsur", "senyawa", "campuran", "larutan"],
    ["Air (H₂O) termasuk...", "senyawa", "unsur", "campuran", "koloid"],
    ["Udara termasuk...", "campuran", "unsur", "senyawa", "atom"],
    ["Pemisahan campuran berdasarkan perbedaan titik didih disebut...", "distilasi", "filtrasi", "sublimasi", "kromatografi"],
    ["Pemisahan campuran dengan kertas saring disebut...", "filtrasi", "distilasi", "evaporasi", "kristalisasi"],
    ["Massa jenis dihitung dengan rumus...", "massa ÷ volume", "volume ÷ massa", "massa × volume", "massa + volume"],
    ["Satuan kalor dalam SI adalah...", "joule", "kalori", "watt", "kelvin"],
    ["Pemuaian rel kereta diatasi dengan...", "memberi celah antar sambungan", "mengecat rel", "menyiram air", "memperpendek rel"],
    ["Termometer klinis mengukur suhu...", "tubuh", "udara luar", "air laut", "logam panas"],
    ["Air membeku pada suhu ... °C.", "0", "100", "-10", "32"],
    ["Air mendidih pada tekanan normal pada suhu ... °C.", "100", "0", "50", "212"],
    ["Komponen biotik dalam ekosistem contohnya...", "tumbuhan", "batu", "air", "cahaya"],
    ["Komponen abiotik dalam ekosistem contohnya...", "tanah", "jamur", "cacing", "bakteri"],
    ["Organisme yang dapat membuat makanan sendiri disebut...", "produsen", "konsumen", "pengurai", "detritivor"],
    ["Bintang yang menjadi pusat tata surya adalah...", "Matahari", "Sirius", "Polaris", "Bulan"],
    ["Planet yang memiliki cincin paling mencolok adalah...", "Saturnus", "Mars", "Venus", "Merkurius"],
    ["Lapisan atmosfer tempat terjadinya cuaca adalah...", "troposfer", "stratosfer", "mesosfer", "termosfer"],
    ["Lapisan ozon terdapat di lapisan...", "stratosfer", "troposfer", "eksosfer", "ionosfer"],
    ["Satelit alami Bumi adalah...", "Bulan", "Phobos", "Titan", "Europa"]
  ],
  tf: [
    ["Jamur dapat berfotosintesis.", false], ["Nama ilmiah ditulis miring atau digarisbawahi.", true],
    ["Garam dapur termasuk senyawa.", true], ["Distilasi memisahkan campuran berdasarkan titik didih.", true],
    ["Kalor berpindah dari benda dingin ke benda panas.", false], ["Benda umumnya memuai jika dipanaskan.", true],
    ["Batu termasuk komponen biotik.", false], ["Troposfer adalah lapisan atmosfer terbawah.", true],
    ["Merkurius adalah planet terjauh dari Matahari.", false], ["Bakteri termasuk organisme prokariotik.", true],
    ["Paus termasuk mamalia.", true], ["Massa jenis air sekitar 1 g/cm³.", true]
  ],
  pair: [
    [["Unsur", "emas (Au)"], ["Senyawa", "air (H₂O)"], ["Campuran", "udara"], ["Larutan", "air gula"], ["Koloid", "susu"]],
    [["Filtrasi", "kertas saring"], ["Distilasi", "titik didih"], ["Kromatografi", "pemisahan warna tinta"], ["Sublimasi", "kapur barus"], ["Evaporasi", "garam dari air laut"]],
    [["Oryza sativa", "padi"], ["Zea mays", "jagung"], ["Felis catus", "kucing"], ["Homo sapiens", "manusia"], ["Musa paradisiaca", "pisang"]]
  ],
  ord: [
    ["Urutkan takson dari tertinggi", ["Kingdom", "Filum", "Kelas", "Ordo", "Famili"]],
    ["Urutkan lapisan atmosfer dari bawah", ["Troposfer", "Stratosfer", "Mesosfer", "Termosfer"]],
    ["Urutkan wujud saat es dipanaskan terus", ["Es", "Air", "Uap air"]]
  ]
});

/* ---------------- IPA KELAS 8 ---------------- */
QB.add({
  kelas: [8], mapel: "IPA", elemen: "Kls 8: Sistem gerak, pencernaan, peredaran darah, pernapasan, ekskresi; Gaya; Tekanan; Getaran, gelombang, cahaya",
  mc: [
    ["Tulang yang melindungi otak adalah...", "tengkorak", "rusuk", "belakang", "panggul"],
    ["Otot yang bekerja di bawah kesadaran dan terdapat di jantung adalah otot...", "jantung", "rangka", "polos", "lurik"],
    ["Hubungan antartulang yang dapat digerakkan bebas disebut...", "diartrosis", "sinartrosis", "amfiartrosis", "osteoporosis"],
    ["Kelainan tulang punggung yang membengkok ke samping disebut...", "skoliosis", "lordosis", "kifosis", "rakhitis"],
    ["Penyakit kekurangan vitamin D yang membuat tulang kaki bengkok adalah...", "rakhitis", "anemia", "gondok", "rabun"],
    ["Organ yang menghasilkan cairan empedu adalah...", "hati", "pankreas", "lambung", "usus besar"],
    ["Enzim pepsin di lambung berfungsi mengubah...", "protein menjadi pepton", "lemak menjadi asam lemak", "amilum menjadi glukosa", "vitamin menjadi mineral"],
    ["Sel darah yang berfungsi mengangkut oksigen adalah...", "eritrosit", "leukosit", "trombosit", "plasma"],
    ["Sel darah yang berperan dalam pembekuan darah adalah...", "trombosit", "eritrosit", "leukosit", "limfosit"],
    ["Ruang jantung yang memompa darah ke seluruh tubuh adalah...", "bilik kiri", "bilik kanan", "serambi kiri", "serambi kanan"],
    ["Penyakit kekurangan sel darah merah disebut...", "anemia", "hipertensi", "leukemia", "varises"],
    ["Organ ekskresi yang menghasilkan urine adalah...", "ginjal", "paru-paru", "kulit", "hati"],
    ["Satuan tekanan dalam SI adalah...", "pascal", "newton", "joule", "watt"],
    ["Rumus tekanan zat padat adalah...", "P = F ÷ A", "P = F × A", "P = m × g", "P = ρ × V"],
    ["Pisau tajam memotong lebih mudah karena luas bidang tekannya...", "kecil", "besar", "tetap", "tidak ada"],
    ["Hukum Pascal diterapkan pada...", "dongkrak hidrolik", "kapal selam", "balon udara", "termometer"],
    ["Hukum Archimedes menjelaskan gaya...", "apung", "gesek", "magnet", "pegas"],
    ["Satuan frekuensi adalah...", "hertz", "meter", "sekon", "desibel"],
    ["Gelombang yang arah getarnya tegak lurus arah rambat disebut gelombang...", "transversal", "longitudinal", "bunyi", "mekanik saja"],
    ["Bunyi dengan frekuensi di atas 20.000 Hz disebut...", "ultrasonik", "infrasonik", "audiosonik", "resonansi"],
    ["Hewan yang menggunakan ultrasonik untuk navigasi adalah...", "kelelawar", "kucing", "sapi", "ayam"],
    ["Cermin cekung bersifat...", "mengumpulkan cahaya", "menyebarkan cahaya", "tidak memantulkan", "menyerap cahaya"],
    ["Kaca spion kendaraan menggunakan cermin...", "cembung", "cekung", "datar", "silinder"],
    ["Penderita rabun jauh (miopi) dibantu dengan lensa...", "cekung (negatif)", "cembung (positif)", "silinder", "datar"],
    ["Bagian mata tempat terbentuknya bayangan adalah...", "retina", "kornea", "iris", "pupil"],
    ["Hukum Newton I disebut juga hukum...", "kelembaman", "aksi-reaksi", "percepatan", "gravitasi"],
    ["Gerak lurus dengan kecepatan tetap disebut...", "GLB", "GLBB", "gerak melingkar", "gerak parabola"],
    ["Pesawat sederhana gunting termasuk jenis...", "tuas", "katrol", "bidang miring", "roda berporos"]
  ],
  tf: [
    ["Eritrosit mengangkut oksigen.", true], ["Bilik kanan memompa darah ke seluruh tubuh.", false],
    ["Ginjal menghasilkan urine.", true], ["Pisau tumpul memberi tekanan lebih besar daripada pisau tajam.", false],
    ["Dongkrak hidrolik menerapkan hukum Pascal.", true], ["Gelombang bunyi tidak dapat merambat di ruang hampa.", true],
    ["Spion kendaraan menggunakan cermin cekung.", false], ["Miopi dibantu lensa cekung.", true],
    ["Satuan tekanan adalah pascal.", true], ["Kelelawar memanfaatkan ultrasonik.", true],
    ["Hukum Newton III disebut hukum aksi-reaksi.", true], ["Leukosit berfungsi membekukan darah.", false],
    ["Bidang miring memperkecil gaya yang dibutuhkan.", true]
  ],
  pair: [
    [["Eritrosit", "angkut oksigen"], ["Leukosit", "lawan kuman"], ["Trombosit", "pembekuan darah"], ["Plasma", "cairan darah"], ["Hemoglobin", "pengikat oksigen"]],
    [["Skoliosis", "bengkok ke samping"], ["Lordosis", "bengkok ke depan"], ["Kifosis", "bengkok ke belakang"], ["Rakhitis", "kurang vitamin D"], ["Osteoporosis", "tulang keropos"]],
    [["Miopi", "lensa cekung"], ["Hipermetropi", "lensa cembung"], ["Presbiopi", "lensa rangkap"], ["Astigmatisma", "lensa silinder"]],
    [["Gunting", "tuas"], ["Tangga", "bidang miring"], ["Sumur timba", "katrol"], ["Setir mobil", "roda berporos"]]
  ],
  ord: [
    ["Urutkan peredaran darah besar", ["Bilik kiri", "Aorta", "Seluruh tubuh", "Pembuluh balik", "Serambi kanan"]],
    ["Urutkan jalan cahaya di mata", ["Kornea", "Pupil", "Lensa", "Retina", "Saraf optik"]],
    ["Urutkan proses pembentukan urine", ["Filtrasi", "Reabsorpsi", "Augmentasi"]]
  ]
});

/* ---------------- IPA KELAS 9 ---------------- */
QB.add({
  kelas: [9], mapel: "IPA", elemen: "Kls 9: Reproduksi, Pewarisan sifat, Bioteknologi, Listrik statis & dinamis, Kemagnetan, Bumi & antariksa",
  mc: [
    ["Pembawa sifat keturunan terdapat di dalam...", "kromosom", "ribosom", "mitokondria", "lisosom"],
    ["Bapak genetika adalah...", "Gregor Mendel", "Charles Darwin", "Louis Pasteur", "Robert Hooke"],
    ["Sifat yang menutupi sifat lain disebut sifat...", "dominan", "resesif", "intermediet", "mutan"],
    ["Persilangan dengan satu sifat beda disebut...", "monohibrid", "dihibrid", "trihibrid", "polihibrid"],
    ["Rasio fenotipe F2 monohibrid dominan penuh adalah...", "3 : 1", "1 : 2 : 1", "9 : 3 : 3 : 1", "1 : 1"],
    ["Sel kelamin jantan pada manusia disebut...", "sperma", "ovum", "zigot", "embrio"],
    ["Pembelahan sel yang menghasilkan sel kelamin adalah...", "meiosis", "mitosis", "amitosis", "fragmentasi"],
    ["Tempat terjadinya fertilisasi pada manusia adalah...", "tuba falopi", "rahim", "ovarium", "vagina"],
    ["Penyerbukan yang dibantu serangga disebut...", "entomogami", "anemogami", "hidrogami", "zoidiogami"],
    ["Pembuatan tempe merupakan contoh bioteknologi...", "konvensional", "modern", "rekayasa genetika", "kloning"],
    ["Contoh bioteknologi modern adalah...", "tanaman transgenik", "tapai", "yoghurt", "kecap"],
    ["Muatan listrik negatif dibawa oleh...", "elektron", "proton", "neutron", "inti atom"],
    ["Alat untuk mendeteksi muatan listrik adalah...", "elektroskop", "amperemeter", "voltmeter", "ohmmeter"],
    ["Alat untuk mengukur kuat arus listrik adalah...", "amperemeter", "voltmeter", "ohmmeter", "termometer"],
    ["Alat untuk mengukur beda potensial adalah...", "voltmeter", "amperemeter", "galvanometer", "barometer"],
    ["Jika V = 12 volt dan R = 4 ohm, maka I = ...", "3 ampere", "48 ampere", "8 ampere", "16 ampere"],
    ["Rangkaian yang jika satu lampu putus lampu lain tetap menyala adalah rangkaian...", "paralel", "seri", "tunggal", "terbuka"],
    ["Energi listrik dihitung dengan rumus W = ...", "P × t", "V ÷ I", "I × R", "F × s"],
    ["Lampu 100 watt menyala 10 jam menghabiskan energi...", "1 kWh", "10 kWh", "100 kWh", "0,1 kWh"],
    ["Bahan yang mudah ditarik magnet disebut...", "feromagnetik", "diamagnetik", "paramagnetik", "isolator"],
    ["Magnet yang dibuat dengan arus listrik disebut...", "elektromagnet", "magnet alam", "magnet tetap", "magnet batang"],
    ["Alat yang mengubah tegangan listrik bolak-balik adalah...", "transformator", "generator", "dinamo", "baterai"],
    ["Penemu hukum induksi elektromagnetik adalah...", "Michael Faraday", "Isaac Newton", "Thomas Edison", "James Watt"],
    ["Lempeng bumi yang saling menjauh disebut batas...", "divergen", "konvergen", "transform", "subduksi"],
    ["Alat pengukur gempa disebut...", "seismograf", "barometer", "anemometer", "higrometer"],
    ["Hewan yang mampu mendeteksi medan magnet bumi untuk migrasi adalah...", "burung merpati", "kucing", "kambing", "ayam"]
  ],
  tf: [
    ["Gregor Mendel dikenal sebagai Bapak Genetika.", true], ["Mitosis menghasilkan sel kelamin.", false],
    ["Fertilisasi manusia terjadi di tuba falopi.", true], ["Tanaman transgenik adalah bioteknologi konvensional.", false],
    ["Elektron bermuatan negatif.", true], ["Voltmeter mengukur kuat arus.", false],
    ["Pada rangkaian seri, jika satu lampu putus semua padam.", true], ["Transformator mengubah tegangan listrik AC.", true],
    ["Kayu adalah bahan feromagnetik.", false], ["Kutub magnet sejenis tolak-menolak.", true],
    ["Seismograf digunakan untuk mencatat gempa.", true], ["Rasio fenotipe F2 monohibrid adalah 3 : 1.", true]
  ],
  pair: [
    [["Amperemeter", "kuat arus"], ["Voltmeter", "tegangan"], ["Ohmmeter", "hambatan"], ["Elektroskop", "muatan listrik"], ["kWh meter", "energi listrik"]],
    [["Tempe", "Rhizopus"], ["Tapai", "Saccharomyces"], ["Yoghurt", "Lactobacillus"], ["Insulin buatan", "rekayasa genetika"], ["Domba Dolly", "kloning"]],
    [["Entomogami", "serangga"], ["Anemogami", "angin"], ["Hidrogami", "air"], ["Ornitogami", "burung"], ["Antropogami", "manusia"]]
  ],
  ord: [
    ["Urutkan perkembangan manusia", ["Zigot", "Embrio", "Fetus", "Bayi"]],
    ["Urutkan tahapan mitosis", ["Profase", "Metafase", "Anafase", "Telofase"]],
    ["Urutkan susunan atom dari pusat", ["Inti (proton & neutron)", "Kulit elektron dalam", "Kulit elektron luar"]]
  ]
});

/* ---------------- IPS PER KELAS ---------------- */
QB.add({
  kelas: [7], mapel: "IPS", elemen: "Kls 7: Lingkungan sekitar, Interaksi sosial, Kegiatan ekonomi, Praaksara & Hindu-Buddha",
  mc: [
    ["Letak suatu tempat berdasarkan garis lintang dan bujur disebut letak...", "astronomis", "geografis", "geologis", "sosial"],
    ["Letak astronomis Indonesia adalah 6° LU – 11° LS dan...", "95° BT – 141° BT", "90° BT – 120° BT", "100° BB – 140° BB", "6° BT – 11° BT"],
    ["Proses sosial yang mengarah pada persatuan disebut...", "asosiatif", "disosiatif", "konflik", "kontravensi"],
    ["Contoh interaksi disosiatif adalah...", "persaingan", "kerja sama", "akomodasi", "asimilasi"],
    ["Lembaga sosial pertama yang dikenal anak adalah...", "keluarga", "sekolah", "masyarakat", "negara"],
    ["Zaman praaksara disebut juga zaman...", "prasejarah", "sejarah", "modern", "klasik"],
    ["Manusia purba Pithecanthropus erectus ditemukan oleh...", "Eugene Dubois", "von Koenigswald", "Darwin", "Linnaeus"],
    ["Pada masa berburu dan meramu, manusia hidup secara...", "nomaden", "menetap", "bertani", "berdagang"],
    ["Revolusi kehidupan menetap dan bercocok tanam terjadi pada zaman...", "neolitikum", "paleolitikum", "mesolitikum", "megalitikum"],
    ["Bangunan batu besar untuk pemujaan disebut...", "menhir", "kapak genggam", "nekara", "flakes"],
    ["Prasasti tertua di Indonesia ditemukan di...", "Kutai (Kalimantan Timur)", "Bali", "Jawa Timur", "Aceh"],
    ["Candi Prambanan bercorak...", "Hindu", "Buddha", "Islam", "Kristen"],
    ["Kegiatan menyalurkan barang dari produsen ke konsumen disebut...", "distribusi", "produksi", "konsumsi", "promosi"],
    ["Motif ekonomi mencari keuntungan disebut motif...", "ekonomi", "sosial", "politik", "kekuasaan"],
    ["Faktor produksi alam contohnya...", "tanah", "mesin", "uang", "keahlian"],
    ["Daerah yang dibatasi punggung gunung dan dialiri sungai disebut...", "DAS", "delta", "teluk", "tanjung"]
  ],
  tf: [
    ["Indonesia terletak di belahan bumi utara dan selatan.", true], ["Persaingan termasuk interaksi asosiatif.", false],
    ["Keluarga adalah lembaga sosial pertama.", true], ["Manusia praaksara sudah mengenal tulisan.", false],
    ["Menhir digunakan untuk pemujaan roh leluhur.", true], ["Candi Borobudur bercorak Hindu.", false],
    ["Tanah termasuk faktor produksi alam.", true], ["Masa neolitikum ditandai kehidupan menetap.", true]
  ],
  pair: [
    [["Paleolitikum", "batu tua"], ["Mesolitikum", "batu tengah"], ["Neolitikum", "batu muda"], ["Megalitikum", "batu besar"]],
    [["Menhir", "tugu batu"], ["Dolmen", "meja batu"], ["Sarkofagus", "peti mayat batu"], ["Punden berundak", "bangunan bertingkat"], ["Arca", "patung"]]
  ],
  ord: [
    ["Urutkan zaman batu", ["Paleolitikum", "Mesolitikum", "Neolitikum", "Megalitikum"]],
    ["Urutkan masa kehidupan praaksara", ["Berburu dan meramu", "Bercocok tanam", "Perundagian"]]
  ]
});

QB.add({
  kelas: [8], mapel: "IPS", elemen: "Kls 8: Kondisi geografis & penduduk, Kolonialisme, Pergerakan nasional, Pelaku ekonomi",
  mc: [
    ["Jumlah penduduk Indonesia menempati peringkat ke-... dunia.", "4", "1", "2", "10"],
    ["Perpindahan penduduk dari desa ke kota disebut...", "urbanisasi", "transmigrasi", "emigrasi", "imigrasi"],
    ["Perpindahan penduduk dari pulau padat ke pulau jarang penduduk disebut...", "transmigrasi", "urbanisasi", "ruralisasi", "emigrasi"],
    ["Angka kelahiran tinggi dapat dikendalikan dengan program...", "Keluarga Berencana", "transmigrasi", "urbanisasi", "wajib militer"],
    ["Bangsa Eropa datang ke Nusantara terutama untuk mencari...", "rempah-rempah", "emas putih", "minyak bumi", "batu bara"],
    ["Pemimpin Perang Padri adalah...", "Tuanku Imam Bonjol", "Pangeran Diponegoro", "Teuku Umar", "Pattimura"],
    ["Perang Diponegoro berlangsung tahun...", "1825–1830", "1945–1949", "1803–1838", "1873–1904"],
    ["Organisasi Indische Partij didirikan oleh Tiga Serangkai, salah satunya...", "Ernest Douwes Dekker", "Soekarno", "Moh. Hatta", "Sutomo"],
    ["Tokoh perintis pendidikan perempuan dari Jepara adalah...", "R.A. Kartini", "Dewi Sartika", "Cut Nyak Dien", "Martha Christina Tiahahu"],
    ["Kebijakan politik etis meliputi irigasi, emigrasi, dan...", "edukasi", "eksploitasi", "ekspansi", "ekspor"],
    ["Pelaku ekonomi yang menghasilkan barang disebut...", "produsen", "konsumen", "distributor", "pemerintah"],
    ["Badan usaha milik negara disingkat...", "BUMN", "BUMS", "BUMD", "CV"],
    ["Contoh BUMN di bidang listrik adalah...", "PLN", "Indomaret", "Gojek", "Astra"],
    ["Pajak digunakan negara untuk...", "membiayai pembangunan", "keuntungan pribadi", "dibagikan ke pengusaha", "disimpan tanpa digunakan"],
    ["Iklim di Indonesia dipengaruhi angin...", "muson", "pasat saja", "fohn saja", "siklon tropis saja"],
    ["Musim hujan di Indonesia umumnya terjadi saat bertiup angin muson...", "barat", "timur", "utara", "selatan"]
  ],
  tf: [
    ["Urbanisasi adalah perpindahan dari desa ke kota.", true], ["Perang Padri dipimpin Pangeran Diponegoro.", false],
    ["Bangsa Eropa datang mencari rempah-rempah.", true], ["PLN adalah perusahaan swasta.", false],
    ["Kartini berasal dari Jepara.", true], ["Muson barat menyebabkan musim hujan.", true],
    ["Pajak digunakan untuk pembangunan.", true], ["Tiga Serangkai mendirikan Budi Utomo.", false]
  ],
  pair: [
    [["Imam Bonjol", "Perang Padri"], ["Diponegoro", "Perang Jawa"], ["Pattimura", "Maluku"], ["Teuku Umar", "Aceh"], ["Sultan Hasanuddin", "Makassar"]],
    [["Urbanisasi", "desa ke kota"], ["Ruralisasi", "kota ke desa"], ["Transmigrasi", "antarpulau"], ["Emigrasi", "keluar negeri"], ["Imigrasi", "masuk ke negara"]]
  ],
  ord: [
    ["Urutkan kedatangan bangsa Eropa", ["Portugis", "Spanyol", "Belanda", "Inggris"]],
    ["Urutkan peristiwa (paling awal)", ["Perang Diponegoro", "Politik etis", "Budi Utomo", "Sumpah Pemuda"]]
  ]
});

QB.add({
  kelas: [9], mapel: "IPS", elemen: "Kls 9: Benua & negara, Globalisasi, Perdagangan internasional, Kemerdekaan & Reformasi",
  mc: [
    ["Benua terluas di dunia adalah...", "Asia", "Afrika", "Eropa", "Amerika"],
    ["Benua terkecil di dunia adalah...", "Australia", "Eropa", "Antartika", "Afrika"],
    ["Sungai terpanjang di dunia adalah Sungai...", "Nil", "Amazon", "Mississippi", "Kapuas"],
    ["Negara ASEAN yang tidak pernah dijajah adalah...", "Thailand", "Vietnam", "Malaysia", "Filipina"],
    ["Ibu kota negara Malaysia adalah...", "Kuala Lumpur", "Putrajaya", "Johor Bahru", "Penang"],
    ["Mata uang Jepang adalah...", "yen", "won", "yuan", "baht"],
    ["Proses mendunia yang membuat batas negara seakan hilang disebut...", "globalisasi", "modernisasi", "urbanisasi", "westernisasi"],
    ["Kegiatan menjual barang ke luar negeri disebut...", "ekspor", "impor", "kuota", "tarif"],
    ["Pembatasan jumlah barang impor disebut...", "kuota", "tarif", "dumping", "subsidi"],
    ["Menjual barang di luar negeri lebih murah dari dalam negeri disebut...", "dumping", "kuota", "embargo", "proteksi"],
    ["Larangan perdagangan dengan negara tertentu disebut...", "embargo", "dumping", "tarif", "ekspor"],
    ["Organisasi perdagangan dunia adalah...", "WTO", "WHO", "UNESCO", "ILO"],
    ["Peristiwa pengakuan kedaulatan Indonesia oleh Belanda terjadi tahun...", "1949", "1945", "1950", "1955"],
    ["Agresi Militer Belanda I terjadi tahun...", "1947", "1945", "1949", "1950"],
    ["Presiden pertama masa Reformasi adalah...", "B.J. Habibie", "Gus Dur", "Megawati", "SBY"],
    ["Gerakan Non-Blok dipelopori oleh beberapa negara, termasuk...", "Indonesia", "Amerika Serikat", "Uni Soviet", "Inggris"]
  ],
  tf: [
    ["Asia adalah benua terluas.", true], ["Thailand pernah dijajah Belanda.", false],
    ["Ekspor adalah menjual barang ke luar negeri.", true], ["WTO adalah organisasi kesehatan dunia.", false],
    ["B.J. Habibie adalah presiden ketiga Indonesia.", true], ["Mata uang Korea Selatan adalah won.", true],
    ["Embargo adalah larangan perdagangan.", true], ["Globalisasi hanya berdampak positif.", false]
  ],
  pair: [
    [["Jepang", "yen"], ["Korea Selatan", "won"], ["Tiongkok", "yuan"], ["Thailand", "baht"], ["Malaysia", "ringgit"]],
    [["Kuota", "batas jumlah impor"], ["Tarif", "pajak impor"], ["Dumping", "jual murah di luar negeri"], ["Embargo", "larangan dagang"], ["Subsidi", "bantuan biaya"]],
    [["Soekarno", "presiden ke-1"], ["Soeharto", "presiden ke-2"], ["B.J. Habibie", "presiden ke-3"], ["Abdurrahman Wahid", "presiden ke-4"], ["Megawati", "presiden ke-5"]]
  ],
  ord: [
    ["Urutkan presiden Indonesia", ["Soekarno", "Soeharto", "B.J. Habibie", "Abdurrahman Wahid", "Megawati"]],
    ["Urutkan peristiwa revolusi", ["Proklamasi", "Agresi Militer I", "Agresi Militer II", "Konferensi Meja Bundar"]],
    ["Urutkan benua dari terluas", ["Asia", "Afrika", "Amerika Utara", "Amerika Selatan"]]
  ]
});

/* ---------------- PJOK SMP ---------------- */
QB.add({
  kelas: [7, 8, 9], mapel: "PJOK", elemen: "Permainan bola besar & kecil, Atletik, Beladiri, Senam, Kebugaran, Kesehatan",
  mc: [
    ["Lama waktu pertandingan sepak bola adalah...", "2 × 45 menit", "2 × 20 menit", "4 × 10 menit", "2 × 30 menit"],
    ["Ukuran lapangan bola voli adalah...", "18 m × 9 m", "28 m × 15 m", "13,4 m × 6,1 m", "100 m × 64 m"],
    ["Tinggi net bola voli putra adalah...", "2,43 m", "2,24 m", "1,55 m", "3,05 m"],
    ["Tinggi ring bola basket adalah...", "3,05 m", "2,43 m", "2,5 m", "3,5 m"],
    ["Dalam bulu tangkis, pukulan keras menukik disebut...", "smash", "lob", "dropshot", "netting"],
    ["Permainan kasti menggunakan alat pemukul dan...", "bola kecil", "kok", "bola basket", "raket"],
    ["Cabang atletik nomor lempar contohnya...", "tolak peluru", "lompat tinggi", "lari gawang", "jalan cepat"],
    ["Gaya lompat tinggi yang melewati mistar dengan punggung adalah...", "flop", "guling sisi", "gunting", "jongkok"],
    ["Pencak silat adalah beladiri asli...", "Indonesia", "Jepang", "Korea", "Tiongkok"],
    ["Komponen kebugaran untuk melakukan aktivitas lama tanpa lelah berarti adalah...", "daya tahan", "kelentukan", "kecepatan", "keseimbangan"],
    ["Kemampuan meregangkan otot dan sendi disebut...", "kelentukan", "kekuatan", "kelincahan", "koordinasi"],
    ["Shuttle run melatih...", "kelincahan", "kelentukan", "kekuatan", "daya tahan"],
    ["Gaya renang tercepat adalah gaya...", "bebas", "dada", "punggung", "kupu-kupu"],
    ["Zat adiktif dalam rokok adalah...", "nikotin", "kafein", "vitamin C", "glukosa"],
    ["Penyakit menular seksual yang menyerang kekebalan tubuh adalah...", "HIV/AIDS", "diabetes", "hipertensi", "asma"],
    ["Pertolongan pertama pada cedera terkilir menggunakan prinsip...", "RICE", "CPR", "ABC", "SOS"]
  ],
  tf: [
    ["Sepak bola dimainkan 2 × 45 menit.", true], ["Ring basket tingginya 2 meter.", false],
    ["Pencak silat adalah beladiri asli Indonesia.", true], ["Tolak peluru termasuk nomor lompat.", false],
    ["Shuttle run melatih kelincahan.", true], ["Nikotin terdapat dalam rokok.", true],
    ["Gaya dada adalah gaya renang tercepat.", false], ["RICE adalah singkatan Rest, Ice, Compression, Elevation.", true]
  ],
  pair: [
    [["Tolak peluru", "nomor lempar"], ["Lompat jauh", "nomor lompat"], ["Lari gawang", "nomor lari"], ["Jalan cepat", "nomor jalan"]],
    [["Daya tahan", "lari 12 menit"], ["Kelentukan", "sit and reach"], ["Kelincahan", "shuttle run"], ["Kekuatan lengan", "push up"], ["Kecepatan", "sprint 50 m"]]
  ],
  ord: [
    ["Urutan RICE pada cedera", ["Rest", "Ice", "Compression", "Elevation"]],
    ["Urutan gerakan tolak peluru", ["Memegang peluru", "Awalan menyamping", "Menolak peluru", "Gerakan lanjutan"]]
  ]
});

/* ---------------- SENI BUDAYA SMP ---------------- */
QB.add({
  kelas: [7, 8, 9], mapel: "Seni Budaya", elemen: "Seni rupa, Musik, Tari, Teater",
  mc: [
    ["Menggambar benda mati seperti buah dan vas disebut menggambar...", "bentuk (still life)", "ilustrasi", "karikatur", "poster"],
    ["Gambar yang memperjelas isi cerita disebut...", "ilustrasi", "mozaik", "kolase", "relief"],
    ["Gambar wajah yang dilebih-lebihkan untuk humor atau kritik disebut...", "karikatur", "potret", "lanskap", "sketsa"],
    ["Seni melipat kertas disebut...", "origami", "kolase", "makrame", "decoupage"],
    ["Lagu daerah “Ampar-Ampar Pisang” berasal dari...", "Kalimantan Selatan", "Jawa Barat", "Sumatera Utara", "Maluku"],
    ["Lagu daerah “Butet” berasal dari...", "Sumatera Utara", "Papua", "Bali", "Jawa Timur"],
    ["Lagu daerah “Yamko Rambe Yamko” berasal dari...", "Papua", "NTT", "Sulawesi Utara", "Aceh"],
    ["Lagu daerah “Rasa Sayange” berasal dari...", "Maluku", "Riau", "Jambi", "Lampung"],
    ["Paduan suara dengan banyak suara disebut...", "vokal grup/paduan suara", "solo", "duet", "trio"],
    ["Tanda birama 4/4 berarti dalam satu birama ada ... ketukan.", "4", "2", "3", "8"],
    ["Teater tradisional Betawi adalah...", "lenong", "ludruk", "ketoprak", "mamanda"],
    ["Ludruk berasal dari...", "Jawa Timur", "Jakarta", "Kalimantan Selatan", "Sumatera Barat"],
    ["Naskah drama berisi dialog dan...", "petunjuk lakuan", "notasi musik", "pola lantai", "sketsa gambar"],
    ["Pola lantai dalam tari adalah...", "garis yang dilalui penari", "kostum penari", "musik pengiring", "rias wajah"],
    ["Tari berpasangan contohnya...", "Tari Serampang Dua Belas", "Tari Saman", "Tari Kecak", "Tari Pendet"],
    ["Unsur utama tari adalah wiraga, wirama, dan...", "wirasa", "wiracarita", "wiyaga", "wisata"]
  ],
  tf: [
    ["Karikatur bersifat melebih-lebihkan.", true], ["Origami adalah seni melipat kertas.", true],
    ["“Yamko Rambe Yamko” berasal dari Papua.", true], ["Lenong adalah teater tradisional Jawa Timur.", false],
    ["Birama 3/4 memiliki 3 ketukan tiap birama.", true], ["Pola lantai adalah kostum penari.", false],
    ["Wiraga berarti raga/gerak tari.", true], ["“Rasa Sayange” berasal dari Maluku.", true]
  ],
  pair: [
    [["Ampar-Ampar Pisang", "Kalimantan Selatan"], ["Butet", "Sumatera Utara"], ["Yamko Rambe Yamko", "Papua"], ["Rasa Sayange", "Maluku"], ["Manuk Dadali", "Jawa Barat"]],
    [["Lenong", "Betawi"], ["Ludruk", "Jawa Timur"], ["Ketoprak", "Jawa Tengah"], ["Mamanda", "Kalimantan Selatan"], ["Randai", "Sumatera Barat"]],
    [["Wiraga", "gerak"], ["Wirama", "irama"], ["Wirasa", "penghayatan"]]
  ],
  ord: [
    ["Urutkan struktur drama", ["Prolog", "Dialog", "Epilog"]],
    ["Urutkan alur drama", ["Pengenalan", "Konflik", "Klimaks", "Penyelesaian"]]
  ]
});

/* ---------------- PERLUASAN B. INDONESIA, B. INGGRIS, INFORMATIKA, PANCASILA SMP ---------------- */
QB.add({
  kelas: [7, 8, 9], mapel: "Bahasa Indonesia", elemen: "Teks deskripsi, fabel, prosedur, iklan, puisi, drama, kebahasaan",
  mc: [
    ["Kata “pemandangan” mendapat imbuhan...", "pe-an", "me-kan", "ber-an", "ke-an"],
    ["Kalimat yang mengandung majas personifikasi adalah...", "Daun melambai ditiup angin.", "Wajahnya seperti bulan.", "Tangisnya membanjiri kota.", "Rumahnya gubuk derita."],
    ["Kata yang bermakna konotasi adalah...", "kambing hitam", "kambing jantan", "kambing putih", "kambing kecil"],
    ["Antonim kata “optimis” adalah...", "pesimis", "realis", "egois", "idealis"],
    ["Kata “di” yang ditulis serangkai karena awalan adalah...", "dimakan", "di pasar", "di atas", "di sana"],
    ["Iklan layanan masyarakat bertujuan...", "memberi pesan sosial", "menjual produk", "mencari untung", "menghibur saja"],
    ["Bagian surat dinas yang berisi nomor, lampiran, dan hal disebut...", "pembuka surat", "kop surat", "isi surat", "penutup"],
    ["Kalimat utama yang terletak di awal dan akhir paragraf disebut paragraf...", "campuran", "deduktif", "induktif", "naratif"],
    ["Penulisan judul yang benar adalah...", "Pengalaman Pertama ke Bandung", "pengalaman pertama ke bandung", "Pengalaman pertama Ke Bandung", "PENGALAMAN pertama ke Bandung"],
    ["Teks yang menceritakan pengalaman masa lalu secara kronologis disebut teks...", "rekon", "prosedur", "eksplanasi", "persuasi"],
    ["Kata serapan “kualitas” berasal dari bahasa...", "Inggris/Latin", "Arab", "Sanskerta", "Belanda saja"],
    ["Kalimat tidak efektif karena pleonasme adalah...", "Para siswa-siswa berbaris.", "Para siswa berbaris.", "Siswa-siswa berbaris.", "Semua siswa berbaris."]
  ],
  tf: [
    ["“Kambing hitam” adalah makna konotasi.", true], ["“Dimakan” ditulis terpisah: “di makan”.", false],
    ["Iklan layanan masyarakat berisi pesan sosial.", true], ["“Para siswa-siswa” adalah kalimat efektif.", false],
    ["Teks rekon disusun secara kronologis.", true], ["Antonim “optimis” adalah “pesimis”.", true]
  ],
  pair: [
    [["Denotasi", "makna sebenarnya"], ["Konotasi", "makna kiasan"], ["Sinonim", "persamaan makna"], ["Antonim", "lawan makna"], ["Homonim", "sama bunyi beda makna"]],
    [["Personifikasi", "benda seperti manusia"], ["Hiperbola", "melebih-lebihkan"], ["Metafora", "perbandingan langsung"], ["Litotes", "merendahkan diri"], ["Simile", "pakai kata seperti"]]
  ],
  ord: [
    ["Urutkan struktur teks prosedur", ["Tujuan", "Alat dan bahan", "Langkah-langkah", "Penutup"]],
    ["Urutkan struktur fabel", ["Orientasi", "Komplikasi", "Resolusi", "Koda"]]
  ]
});

QB.add({
  kelas: [7, 8, 9], mapel: "Bahasa Inggris", elemen: "Descriptive, Procedure, Announcement, Report, Narrative; Grammar",
  mc: [
    ["There ... a lot of books on the table.", "are", "is", "be", "was"],
    ["She has been studying English ... 2020.", "since", "for", "ago", "at"],
    ["We have lived here ... five years.", "for", "since", "ago", "on"],
    ["The cake was ... by my mother.", "made", "make", "making", "makes"],
    ["Which word is an adjective?", "beautiful", "quickly", "run", "table"],
    ["Which word is an adverb?", "slowly", "slow", "slowness", "slower"],
    ["“Don't forget to bring your book!” is an expression of...", "reminding", "apologizing", "greeting", "thanking"],
    ["A short notice to inform the public is called...", "announcement", "recount", "narrative", "biography"],
    ["The main purpose of a procedure text is to...", "tell how to do something", "tell a story", "describe a person", "report news"],
    ["“Malin Kundang” is an example of...", "narrative text", "procedure text", "report text", "descriptive text"],
    ["The past participle of “eat” is...", "eaten", "ate", "eating", "eats"],
    ["The superlative of “beautiful” is...", "the most beautiful", "beautifuller", "beautifullest", "more beautiful"],
    ["Who is the person that delivers letters?", "postman", "pilot", "farmer", "chef"],
    ["“May I borrow your pen?” is used for...", "asking permission", "giving advice", "asking opinion", "complaining"]
  ],
  tf: [
    ["“Since” is used with a point in time.", true], ["“Quickly” is an adjective.", false],
    ["The past participle of “go” is “gone”.", true], ["An announcement tells a fairy tale.", false],
    ["“The most beautiful” is a superlative form.", true], ["“May I…?” is used to ask permission.", true]
  ],
  pair: [
    [["eat", "eaten"], ["write", "written"], ["speak", "spoken"], ["take", "taken"], ["break", "broken"]],
    [["beautiful", "the most beautiful"], ["good", "the best"], ["tall", "the tallest"], ["bad", "the worst"], ["big", "the biggest"]]
  ],
  ord: [
    ["Arrange the sentence", ["The", "cake", "was", "made", "by", "my mother"]],
    ["Structure of descriptive text", ["Identification", "Description"]],
    ["Structure of procedure text", ["Goal", "Materials", "Steps"]]
  ]
});

QB.add({
  kelas: [7, 8, 9], mapel: "Informatika", elemen: "Algoritma & pemrograman, Sistem komputer, Jaringan & internet, Literasi digital, Praktik lintas bidang",
  mc: [
    ["Diagram alir algoritma disebut...", "flowchart", "pseudocode", "spreadsheet", "database"],
    ["Simbol flowchart berbentuk belah ketupat menyatakan...", "keputusan", "proses", "mulai/selesai", "input/output"],
    ["Simbol flowchart berbentuk oval menyatakan...", "mulai/selesai", "keputusan", "proses", "penyimpanan"],
    ["Bahasa pemrograman visual berbasis blok untuk pemula adalah...", "Scratch", "Python", "C++", "Java"],
    ["Wadah untuk menyimpan nilai dalam program disebut...", "variabel", "fungsi", "kompiler", "monitor"],
    ["Alamat situs web disebut...", "URL", "IP", "DNS", "HTML"],
    ["Bahasa untuk membuat struktur halaman web adalah...", "HTML", "Python", "SQL", "Excel"],
    ["Perangkat keras yang menyimpan data permanen adalah...", "hard disk/SSD", "RAM", "cache", "register"],
    ["Rumus Excel untuk mencari nilai terkecil adalah...", "=MIN()", "=MAX()", "=SUM()", "=AVERAGE()"],
    ["Bilangan desimal 6 dalam biner adalah...", "110", "101", "111", "100"],
    ["Jejak digital adalah...", "rekam aktivitas kita di internet", "sidik jari asli", "kabel jaringan", "jenis virus"],
    ["Perundungan di dunia maya disebut...", "cyberbullying", "phishing", "spamming", "hacking"],
    ["Program jahat yang dapat merusak komputer disebut...", "malware", "firmware", "freeware", "shareware"],
    ["Mencari informasi di internet menggunakan...", "mesin pencari", "printer", "scanner", "speaker"]
  ],
  tf: [
    ["Belah ketupat pada flowchart menyatakan keputusan.", true], ["RAM menyimpan data secara permanen.", false],
    ["HTML digunakan untuk membuat halaman web.", true], ["Biner 110 sama dengan desimal 6.", true],
    ["Cyberbullying adalah perilaku terpuji.", false], ["Jejak digital dapat bertahan lama.", true],
    ["Scratch adalah bahasa pemrograman berbasis blok.", true], ["Malware bermanfaat untuk mempercepat komputer.", false]
  ],
  pair: [
    [["Oval", "mulai/selesai"], ["Persegi panjang", "proses"], ["Belah ketupat", "keputusan"], ["Jajaran genjang", "input/output"], ["Panah", "arah alur"]],
    [["=SUM", "jumlah"], ["=MIN", "terkecil"], ["=MAX", "terbesar"], ["=IF", "logika jika"], ["=COUNT", "hitung data"]]
  ],
  ord: [
    ["Urutkan algoritma menghitung luas persegi", ["Mulai", "Input sisi", "Luas = sisi × sisi", "Tampilkan luas", "Selesai"]],
    ["Urutkan langkah mencari informasi yang benar", ["Tentukan kata kunci", "Cari di mesin pencari", "Bandingkan beberapa sumber", "Simpulkan"]]
  ]
});

QB.add({
  kelas: [7, 8, 9], mapel: "Pendidikan Pancasila", elemen: "Norma, Keberagaman, Kedaulatan rakyat, Gotong royong",
  mc: [
    ["Kedaulatan berada di tangan rakyat dan dilaksanakan menurut UUD, tercantum dalam Pasal...", "1 ayat 2", "1 ayat 1", "1 ayat 3", "2 ayat 1"],
    ["Lembaga perwakilan daerah di tingkat pusat adalah...", "DPD", "DPRD", "MPR", "DPR"],
    ["Jumlah anggota Panitia Sembilan adalah...", "9 orang", "5 orang", "21 orang", "62 orang"],
    ["PPKI diketuai oleh...", "Ir. Soekarno", "dr. Radjiman", "Moh. Yamin", "Soepomo"],
    ["Perubahan sila pertama Piagam Jakarta diusulkan demi...", "persatuan bangsa", "kepentingan asing", "kepentingan golongan", "kekuasaan presiden"],
    ["Keragaman suku di Indonesia merupakan...", "kekayaan bangsa", "ancaman negara", "masalah besar", "hal yang harus dihapus"],
    ["Sikap menerima perbedaan disebut...", "toleransi", "diskriminasi", "intoleransi", "primordialisme"],
    ["Sikap mengagungkan suku sendiri secara berlebihan disebut...", "primordialisme", "toleransi", "nasionalisme", "pluralisme"],
    ["Wilayah laut Indonesia yang diukur 200 mil dari garis pantai disebut...", "ZEE", "laut teritorial", "landas kontinen", "laut lepas"],
    ["Contoh norma kesusilaan adalah...", "tidak berbohong", "memakai helm", "membayar pajak", "berpakaian rapi ke pesta"],
    ["Sanksi pelanggaran norma kesopanan berupa...", "cemoohan masyarakat", "penjara", "denda negara", "hukuman mati"],
    ["Hari Konstitusi diperingati setiap tanggal...", "18 Agustus", "17 Agustus", "1 Oktober", "1 Juni"]
  ],
  tf: [
    ["DPD mewakili daerah di tingkat pusat.", true], ["Primordialisme mendukung persatuan.", false],
    ["Toleransi berarti menghargai perbedaan.", true], ["ZEE diukur 200 mil dari garis pantai.", true],
    ["Hari Kesaktian Pancasila diperingati 1 Oktober.", true], ["Norma hukum tidak memiliki sanksi.", false]
  ],
  pair: [
    [["1 Juni", "Hari Lahir Pancasila"], ["18 Agustus", "Hari Konstitusi"], ["1 Oktober", "Hari Kesaktian Pancasila"], ["28 Oktober", "Hari Sumpah Pemuda"], ["20 Mei", "Harkitnas"]],
    [["Toleransi", "menghargai perbedaan"], ["Diskriminasi", "membeda-bedakan"], ["Primordialisme", "fanatik kelompok"], ["Etnosentrisme", "menganggap suku sendiri terbaik"]]
  ],
  ord: [["Urutkan perumusan dasar negara", ["Sidang BPUPKI I", "Piagam Jakarta", "Sidang BPUPKI II", "Sidang PPKI"]]]
});
