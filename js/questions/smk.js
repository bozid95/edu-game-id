/* ============================================================
   BANK SOAL SMK – Fase E (kelas 10) & Fase F (kelas 11–12)
   Kurikulum Merdeka, CP BSKAP 046/H/KR/2025
   Mata pelajaran umum + lintas jurusan (K3 & budaya kerja)
   ============================================================ */
const SMK = [10, 11, 12];

QB.add({
  kelas: SMK, mapel: "Bahasa Indonesia", elemen: "Teks LHO, Anekdot, Negosiasi, Debat, Surat lamaran & CV",
  mc: [
    ["Teks berisi hasil pengamatan umum tentang suatu objek adalah...", "laporan hasil observasi", "anekdot", "negosiasi", "hikayat"],
    ["Teks anekdot berisi...", "cerita lucu yang mengandung kritik", "petunjuk melakukan sesuatu", "biografi tokoh", "iklan produk"],
    ["Interaksi untuk mencapai kesepakatan dua pihak disebut...", "negosiasi", "debat", "pidato", "wawancara"],
    ["Dalam debat, tim yang menolak mosi disebut tim...", "oposisi", "afirmasi", "netral", "moderator"],
    ["Surat lamaran kerja termasuk surat...", "resmi", "pribadi", "undangan", "niaga penawaran"],
    ["Bagian CV yang memuat jenjang sekolah adalah...", "riwayat pendidikan", "data pribadi", "pengalaman kerja", "referensi"],
    ["Hikayat termasuk karya sastra...", "Melayu klasik", "modern", "terjemahan", "ilmiah"],
    ["Kalimat efektif adalah kalimat yang...", "singkat, jelas, tidak ambigu", "panjang dan berbelit", "tanpa subjek", "berbahasa daerah"],
    ["Proposal kegiatan dibuat untuk...", "mengajukan rencana kegiatan", "menceritakan pengalaman", "menghibur pembaca", "memberi kritik"],
    ["Penulisan gelar akademik yang benar adalah...", "S.Kom.", "S.kom", "Skom.", "s.Kom"],
    ["Laporan setelah praktik kerja lapangan disebut laporan...", "PKL", "cerpen", "puisi", "pantun"],
    ["Teks yang menjelaskan proses ilmiah terjadinya fenomena adalah...", "eksplanasi", "anekdot", "cerpen", "pantun"]
  ],
  tf: [
    ["Teks negosiasi bertujuan mencapai kesepakatan.", true], ["Anekdot selalu berisi cerita sedih.", false],
    ["Surat lamaran kerja menggunakan bahasa baku.", true], ["CV berisi data diri, pendidikan, dan pengalaman.", true],
    ["Moderator debat berpihak pada tim afirmasi.", false], ["Kalimat efektif minimal memiliki subjek dan predikat.", true],
    ["Hikayat menceritakan kehidupan modern di kota.", false], ["Laporan PKL memuat kegiatan siswa selama praktik kerja.", true],
    ["Proposal tidak perlu mencantumkan anggaran.", false], ["Teks eksplanasi disusun berdasarkan fakta.", true]
  ],
  pair: [
    [["Negosiasi", "kesepakatan"], ["Anekdot", "humor dan kritik"], ["Debat", "adu argumen"], ["Eksposisi", "gagasan dan argumen"], ["Hikayat", "cerita Melayu klasik"]],
    [["Afirmasi", "pendukung mosi"], ["Oposisi", "penolak mosi"], ["Netral", "tidak memihak"], ["Moderator", "pemandu debat"], ["Mosi", "topik debat"]]
  ],
  ord: [
    ["Urutkan bagian surat lamaran kerja", ["Tempat dan tanggal", "Alamat tujuan", "Salam pembuka", "Isi surat", "Salam penutup"]],
    ["Urutkan struktur teks negosiasi", ["Orientasi", "Pengajuan", "Penawaran", "Persetujuan", "Penutup"]],
    ["Urutkan struktur teks anekdot", ["Abstraksi", "Orientasi", "Krisis", "Reaksi", "Koda"]],
    ["Urutkan jalannya debat", ["Pembukaan moderator", "Penyampaian argumen", "Sanggahan", "Kesimpulan"]]
  ]
});

QB.add({
  kelas: SMK, mapel: "Bahasa Inggris", elemen: "Job interview, Application letter, Passive voice, Workplace English",
  mc: [
    ["“Why do you want to work here?” is a common question in a...", "job interview", "birthday party", "football match", "restaurant menu"],
    ["A letter to apply for a job is called...", "application letter", "invitation letter", "love letter", "memo"],
    ["If I ... rich, I would buy a house.", "were", "am", "will be", "be"],
    ["The report ... by the manager yesterday.", "was written", "wrote", "is writing", "writes"],
    ["She said that she ... tired.", "was", "is", "be", "being"],
    ["“Please fasten your seatbelt” is an example of...", "instruction", "compliment", "apology", "complaint"],
    ["Which expression is a complaint?", "I'm not satisfied with the service.", "Congratulations!", "Nice to meet you.", "Thank you so much."],
    ["A “deadline” is...", "the last time to finish a task", "a type of rope", "a broken line", "a holiday"],
    ["A caption text is usually found under...", "a picture", "a song", "a recipe", "a calendar"],
    ["The word “colleague” means...", "rekan kerja", "atasan", "pelanggan", "pesaing"],
    ["In a hotel, guests check in at the...", "front desk", "kitchen", "parking lot", "laundry"],
    ["An “invoice” is a...", "bill for goods or services", "job vacancy", "meeting room", "product catalog"]
  ],
  tf: [
    ["A CV is also called a resume.", true], ["“The letter was sent” is a passive sentence.", true],
    ["In a job interview, you should talk badly about your old boss.", false], ["“If I were you” is a conditional expression.", true],
    ["“Customer” means pelanggan.", true], ["“Salary” means jadwal kerja.", false],
    ["Procedure text uses imperative sentences.", true], ["An invoice is a greeting card.", false],
    ["“I look forward to hearing from you” closes a formal letter.", true], ["A “shift” can mean a period of working time.", true]
  ],
  pair: [
    [["salary", "gaji"], ["colleague", "rekan kerja"], ["customer", "pelanggan"], ["schedule", "jadwal"], ["invoice", "tagihan"]],
    [["write", "was written"], ["send", "was sent"], ["make", "was made"], ["build", "was built"], ["repair", "was repaired"]],
    [["Front desk", "resepsionis"], ["Warehouse", "gudang"], ["Workshop", "bengkel"], ["Meeting room", "ruang rapat"], ["Cashier", "kasir"]]
  ],
  ord: [
    ["Arrange the job interview flow", ["Greeting", "Introduce yourself", "Answer questions", "Ask questions", "Closing"]],
    ["Arrange the application letter", ["Date", "Inside address", "Salutation", "Body", "Closing"]],
    ["Arrange the sentence", ["The", "meeting", "will be", "held", "tomorrow"]],
    ["Arrange the sentence", ["I", "have", "worked", "here", "since", "2020"]]
  ]
});

QB.add({
  jenjang: "SMK", kelas: SMK, mapel: "Informatika & KA", elemen: "Jaringan, Pemrograman, Basis data, Koding & Kecerdasan Artifisial",
  mc: [
    ["Alamat unik perangkat dalam jaringan disebut...", "IP address", "URL", "email", "password"],
    ["Topologi dengan semua perangkat terhubung ke satu switch pusat adalah...", "star", "bus", "ring", "mesh"],
    ["Kabel jaringan yang umum dipakai untuk LAN adalah...", "UTP", "HDMI", "VGA", "USB"],
    ["Protokol untuk membuka halaman web secara aman adalah...", "HTTPS", "FTP", "SMTP", "DHCP"],
    ["Layanan pemberi IP address otomatis adalah...", "DHCP", "DNS", "FTP", "HTTP"],
    ["DNS berfungsi untuk...", "menerjemahkan nama domain ke IP", "mengirim email", "mengunduh file", "mengenkripsi data"],
    ["Tipe data untuk nilai benar/salah adalah...", "boolean", "string", "float", "integer"],
    ["Machine learning adalah cabang AI di mana komputer...", "belajar dari data", "dirakit manual", "tidak butuh listrik", "hanya menyimpan file"],
    ["Data untuk melatih model AI disebut data...", "latih", "uji", "sampah", "cadangan"],
    ["Model AI yang menjawab meyakinkan tetapi salah disebut...", "halusinasi", "enkripsi", "kompilasi", "overclock"],
    ["Bias pada AI dapat terjadi karena...", "data latih tidak seimbang", "listrik padam", "layar terlalu terang", "keyboard rusak"],
    ["SQL digunakan untuk mengelola...", "basis data", "gambar", "suara", "jaringan listrik"],
    ["Perintah SQL untuk mengambil data adalah...", "SELECT", "DELETE", "DROP", "INSERT"],
    ["Output dari for i in range(3): print(i) adalah...", "0 1 2", "1 2 3", "0 1 2 3", "3"],
    ["Membuat salinan data untuk berjaga-jaga disebut...", "backup", "hacking", "spam", "format"],
    ["Instruksi yang kita berikan kepada model AI generatif disebut...", "prompt", "router", "driver", "firmware"]
  ],
  tf: [
    ["HTTPS lebih aman daripada HTTP.", true], ["Topologi ring berbentuk seperti bintang.", false],
    ["Boolean hanya bernilai True atau False.", true], ["AI tidak mungkin memiliki bias.", false],
    ["DNS mengubah nama domain menjadi IP address.", true], ["Perintah DELETE pada SQL digunakan untuk menambah data.", false],
    ["Machine learning membutuhkan data untuk belajar.", true], ["Kabel UTP memiliki 8 helai kabel kecil.", true],
    ["Hasil karya AI selalu bebas dari masalah hak cipta.", false], ["IPv4 terdiri atas 32 bit.", true],
    ["Prompt adalah instruksi yang diberikan kepada model AI.", true]
  ],
  pair: [
    [["HTTP", "halaman web"], ["FTP", "transfer file"], ["SMTP", "kirim email"], ["DNS", "nama domain"], ["DHCP", "IP otomatis"]],
    [["SELECT", "ambil data"], ["INSERT", "tambah data"], ["UPDATE", "ubah data"], ["DELETE", "hapus data"], ["CREATE", "buat tabel"]],
    [["Integer", "bilangan bulat"], ["Float", "bilangan desimal"], ["String", "teks"], ["Boolean", "benar/salah"], ["Array", "kumpulan data"]]
  ],
  ord: [
    ["Urutkan siklus pengembangan model AI", ["Kumpulkan data", "Bersihkan data", "Latih model", "Uji model", "Gunakan model"]],
    ["Urutkan lapisan TCP/IP dari bawah", ["Network Access", "Internet", "Transport", "Application"]],
    ["Urutkan langkah crimping kabel UTP", ["Kupas kulit kabel", "Susun warna kabel", "Ratakan ujung kabel", "Masukkan ke RJ45", "Crimping"]],
    ["Urutkan satuan kecepatan data", ["bps", "Kbps", "Mbps", "Gbps"]]
  ]
});

QB.add({
  jenjang: "SMK", kelas: [10], mapel: "Projek IPAS", elemen: "Energi, Lingkungan, Bioteknologi, Kewirausahaan",
  mc: [
    ["Contoh energi terbarukan adalah...", "tenaga surya", "batu bara", "minyak bumi", "gas alam"],
    ["Gas rumah kaca utama penyebab pemanasan global adalah...", "karbon dioksida", "oksigen", "nitrogen", "helium"],
    ["Prinsip 3R dalam pengelolaan sampah adalah...", "Reduce, Reuse, Recycle", "Read, Write, Run", "Repair, Rest, Relax", "Run, Return, Repeat"],
    ["Mengolah sampah organik menjadi pupuk disebut...", "pengomposan", "pembakaran", "penimbunan", "pengeringan"],
    ["Alat pengubah energi gerak menjadi listrik adalah...", "generator", "motor listrik", "baterai", "transformator"],
    ["Bahan rumah tangga yang bersifat basa adalah...", "sabun", "cuka", "air jeruk", "minuman bersoda"],
    ["Satuan daya listrik adalah...", "watt", "volt", "ohm", "ampere"],
    ["Tagihan listrik dihitung dalam satuan...", "kWh", "volt", "ampere", "ohm"],
    ["Pembangkit listrik tenaga panas bumi disingkat...", "PLTP", "PLTA", "PLTU", "PLTD"],
    ["Jamur yang digunakan untuk membuat tempe adalah...", "Rhizopus", "Penicillium", "Saccharomyces", "Aspergillus"],
    ["Usaha yang baik diawali dengan...", "melihat peluang dan masalah", "meminjam uang sebanyaknya", "menunggu perintah", "meniru produk orang"]
  ],
  tf: [
    ["Batu bara adalah energi terbarukan.", false], ["Pemanasan global menyebabkan es kutub mencair.", true],
    ["Sampah plastik sebaiknya dibakar di halaman rumah.", false], ["Tempe dibuat dengan bantuan jamur Rhizopus.", true],
    ["Lampu LED lebih hemat energi daripada lampu pijar.", true], ["Watt adalah satuan tegangan listrik.", false],
    ["Kompos dibuat dari sampah organik.", true], ["Indonesia memiliki potensi panas bumi yang besar.", true],
    ["Air sungai tercemar aman diminum langsung.", false]
  ],
  pair: [
    [["PLTA", "air"], ["PLTS", "matahari"], ["PLTB", "angin"], ["PLTP", "panas bumi"], ["PLTU", "uap"]],
    [["Reduce", "mengurangi"], ["Reuse", "memakai ulang"], ["Recycle", "mendaur ulang"], ["Organik", "mudah terurai"], ["Anorganik", "sulit terurai"]],
    [["Tempe", "Rhizopus"], ["Yoghurt", "Lactobacillus"], ["Roti", "Saccharomyces"], ["Nata de coco", "Acetobacter"], ["Kecap", "Aspergillus"]]
  ],
  ord: [
    ["Urutkan langkah membuat kompos", ["Pilah sampah organik", "Cacah sampah", "Campur aktivator", "Tutup dan diamkan", "Panen kompos"]],
    ["Urutkan alur energi PLTA", ["Air dibendung", "Air mengalir deras", "Turbin berputar", "Generator menghasilkan listrik"]],
    ["Urutkan langkah metode ilmiah", ["Observasi", "Rumusan masalah", "Hipotesis", "Eksperimen", "Kesimpulan"]]
  ]
});

QB.add({
  jenjang: "SMK", kelas: SMK, mapel: "K3 & Budaya Kerja", elemen: "Keselamatan & Kesehatan Kerja, APD, Budaya 5R (lintas jurusan)",
  mc: [
    ["K3 adalah singkatan dari...", "Keselamatan dan Kesehatan Kerja", "Kebersihan Keamanan Kenyamanan", "Kerja Keras Konsisten", "Komite Kerja Karyawan"],
    ["APD adalah singkatan dari...", "Alat Pelindung Diri", "Alat Pemadam Darurat", "Area Pekerja Dilarang", "Aturan Pakai Darurat"],
    ["APD untuk melindungi kepala adalah...", "helm safety", "sarung tangan", "masker", "sepatu boot"],
    ["APAR digunakan untuk...", "memadamkan api kecil", "mengukur suhu", "menyiram tanaman", "membersihkan lantai"],
    ["Pada teknik PASS, huruf P pertama artinya...", "Pull (tarik pin)", "Push", "Press", "Point"],
    ["Budaya kerja 5R: Ringkas, Rapi, Resik, Rawat, dan...", "Rajin", "Ramah", "Rapat", "Riang"],
    ["Rambu K3 berwarna merah biasanya berarti...", "larangan", "petunjuk arah", "informasi umum", "jalur evakuasi"],
    ["Rambu berwarna hijau biasanya berarti...", "aman / jalur evakuasi", "larangan", "bahaya", "kewajiban"],
    ["Rambu berwarna biru biasanya berarti...", "kewajiban", "larangan", "bahaya", "evakuasi"],
    ["Saat terjadi kebakaran, tindakan pertama adalah...", "bunyikan alarm dan evakuasi", "ambil barang berharga", "bersembunyi di toilet", "siram listrik dengan air"],
    ["Kebakaran akibat listrik TIDAK boleh dipadamkan dengan...", "air", "APAR CO₂", "APAR powder", "memutus aliran listrik"],
    ["Sikap profesional di tempat kerja adalah...", "datang tepat waktu", "bermain HP saat bekerja", "menunda pekerjaan", "mengabaikan SOP"],
    ["SOP adalah singkatan dari...", "Standard Operating Procedure", "Sistem Operasi Pusat", "Surat Order Pembelian", "Standar Organisasi Pekerja"]
  ],
  tf: [
    ["Sarung tangan melindungi tangan dari bahaya.", true], ["Kebakaran listrik boleh disiram air.", false],
    ["APD wajib digunakan sesuai jenis pekerjaan.", true], ["Rambu hijau menunjukkan jalur evakuasi.", true],
    ["Bercanda di dekat mesin yang menyala itu aman.", false], ["Budaya 5R membuat tempat kerja rapi dan efisien.", true],
    ["SOP boleh diabaikan jika terburu-buru.", false], ["Kacamata safety melindungi mata dari percikan.", true],
    ["Kotak P3K harus mudah dijangkau.", true], ["Lantai licin harus diberi tanda peringatan.", true]
  ],
  pair: [
    [["Helm safety", "kepala"], ["Kacamata safety", "mata"], ["Ear plug", "telinga"], ["Masker", "pernapasan"], ["Safety shoes", "kaki"]],
    [["Ringkas", "memilah barang"], ["Rapi", "menata di tempatnya"], ["Resik", "membersihkan"], ["Rawat", "mempertahankan"], ["Rajin", "membiasakan"]],
    [["Merah", "larangan"], ["Kuning", "peringatan"], ["Biru", "kewajiban"], ["Hijau", "aman/evakuasi"]]
  ],
  ord: [
    ["Urutkan teknik PASS memakai APAR", ["Pull (tarik pin)", "Aim (arahkan)", "Squeeze (tekan)", "Sweep (sapukan)"]],
    ["Urutkan budaya kerja 5R", ["Ringkas", "Rapi", "Resik", "Rawat", "Rajin"]],
    ["Urutkan langkah evakuasi", ["Dengar alarm", "Hentikan pekerjaan", "Ikuti jalur evakuasi", "Berkumpul di titik kumpul"]]
  ]
});

QB.add({
  kelas: SMK, mapel: "Pendidikan Pancasila", elemen: "Ideologi, Konstitusi, HAM, Wawasan Nusantara",
  mc: [
    ["Pancasila sebagai ideologi terbuka artinya...", "nilai dasar tetap, penerapan mengikuti zaman", "boleh diganti kapan saja", "tertutup dari pengaruh luar", "hanya untuk generasi tua"],
    ["Lembaga penyelenggara pemilu adalah...", "KPU", "KPK", "BPK", "MK"],
    ["Lembaga pemberantas korupsi adalah...", "KPK", "KPU", "Bawaslu", "BI"],
    ["Lembaga pengawas pemilu adalah...", "Bawaslu", "KPU", "DPR", "MA"],
    ["Kebebasan beragama diatur dalam UUD 1945 Pasal...", "29", "33", "27", "31"],
    ["Hak mendapatkan pendidikan diatur dalam UUD 1945 Pasal...", "31", "29", "33", "34"],
    ["Deklarasi Djuanda (1957) berkaitan dengan...", "batas wilayah laut Indonesia", "pendirian ASEAN", "pembentukan BPUPKI", "Sumpah Pemuda"],
    ["Contoh pelanggaran HAM berat adalah...", "genosida", "mencontek", "terlambat sekolah", "tidak piket"],
    ["Lembaga yang menangani pelanggaran HAM adalah...", "Komnas HAM", "KPU", "BPS", "Basarnas"],
    ["Contoh sikap antikorupsi di sekolah adalah...", "jujur saat ujian", "menitip absen", "memalsukan nilai", "memakai uang kas pribadi"],
    ["Wawasan Nusantara adalah cara pandang bangsa tentang...", "diri dan lingkungannya", "negara tetangga", "budaya asing", "politik global saja"]
  ],
  tf: [
    ["KPU adalah penyelenggara pemilu.", true], ["Nilai dasar Pancasila boleh diubah.", false],
    ["Pasal 31 UUD 1945 mengatur pendidikan.", true], ["Genosida termasuk pelanggaran HAM berat.", true],
    ["Gratifikasi kepada pejabat adalah perilaku yang dibolehkan.", false], ["Deklarasi Djuanda menyatukan wilayah laut Indonesia.", true],
    ["Bawaslu mengawasi pemilu.", true], ["Warga negara asing boleh memilih dalam Pemilu Indonesia.", false],
    ["Menitip absen termasuk perilaku koruptif kecil.", true]
  ],
  pair: [
    [["KPU", "penyelenggara pemilu"], ["Bawaslu", "pengawas pemilu"], ["KPK", "pemberantasan korupsi"], ["Komnas HAM", "hak asasi manusia"], ["BPK", "audit keuangan negara"]],
    [["Pasal 27", "persamaan di hukum"], ["Pasal 29", "kebebasan beragama"], ["Pasal 31", "pendidikan"], ["Pasal 33", "perekonomian"], ["Pasal 34", "fakir miskin"]]
  ],
  ord: [
    ["Urutkan tahapan pemilu", ["Pemutakhiran data pemilih", "Pencalonan", "Kampanye", "Masa tenang", "Pemungutan suara"]],
    ["Urutkan peristiwa sejarah", ["Sumpah Pemuda", "Proklamasi", "Deklarasi Djuanda", "Reformasi"]],
    ["Urutkan proses peradilan pidana", ["Penyelidikan", "Penyidikan", "Penuntutan", "Persidangan", "Putusan"]]
  ]
});

QB.add({
  kelas: SMK, mapel: "Sejarah", elemen: "Praaksara, Hindu-Buddha, Islam, Kolonialisme, Revolusi kemerdekaan",
  mc: [
    ["Zaman sebelum manusia mengenal tulisan disebut...", "praaksara", "sejarah", "modern", "klasik"],
    ["Prasasti Yupa berasal dari kerajaan...", "Kutai", "Tarumanegara", "Majapahit", "Demak"],
    ["Candi Borobudur dibangun oleh Dinasti...", "Syailendra", "Sanjaya", "Rajasa", "Isyana"],
    ["Sumpah Palapa diucapkan oleh...", "Gajah Mada", "Hayam Wuruk", "Ken Arok", "Raden Wijaya"],
    ["Kerajaan Islam pertama di Jawa adalah...", "Demak", "Mataram Islam", "Banten", "Cirebon"],
    ["Bangsa Eropa pertama yang datang ke Nusantara adalah...", "Portugis", "Belanda", "Inggris", "Spanyol"],
    ["Persekutuan dagang Belanda adalah...", "VOC", "EIC", "KNIL", "NICA"],
    ["Sistem tanam paksa diperkenalkan oleh...", "Van den Bosch", "Daendels", "Raffles", "Van Mook"],
    ["Pertempuran 10 November 1945 terjadi di...", "Surabaya", "Bandung", "Semarang", "Ambarawa"],
    ["Konferensi Asia Afrika 1955 diselenggarakan di...", "Bandung", "Jakarta", "Yogyakarta", "Bogor"],
    ["Perundingan 1949 yang berujung pengakuan kedaulatan adalah...", "Konferensi Meja Bundar", "Renville", "Linggarjati", "Roem-Royen"],
    ["Reformasi di Indonesia terjadi pada tahun...", "1998", "1966", "1945", "2004"]
  ],
  tf: [
    ["Kutai adalah kerajaan Hindu tertua di Indonesia.", true], ["Borobudur adalah candi Hindu.", false],
    ["VOC dibubarkan pada tahun 1799.", true], ["Gajah Mada adalah mahapatih Majapahit.", true],
    ["Ekspedisi Belanda pertama ke Nusantara dipimpin Cornelis de Houtman.", true], ["Konferensi Asia Afrika diadakan di Surabaya.", false],
    ["Reformasi 1998 menandai berakhirnya Orde Baru.", true], ["Raffles adalah gubernur jenderal dari Belanda.", false],
    ["Kerajaan Sriwijaya bercorak Buddha.", true]
  ],
  pair: [
    [["Kutai", "Yupa"], ["Majapahit", "Gajah Mada"], ["Sriwijaya", "Palembang"], ["Demak", "Raden Patah"], ["Mataram Kuno", "Prambanan"]],
    [["Daendels", "Jalan Anyer–Panarukan"], ["Van den Bosch", "tanam paksa"], ["Raffles", "Inggris di Jawa"], ["Cornelis de Houtman", "Belanda pertama"], ["VOC", "kongsi dagang"]],
    [["Surabaya", "10 November"], ["Bandung", "Lautan Api"], ["Ambarawa", "Palagan"], ["Medan", "Medan Area"], ["Rengasdengklok", "Soekarno-Hatta diamankan"]]
  ],
  ord: [
    ["Urutkan masa (paling awal)", ["Praaksara", "Hindu-Buddha", "Islam", "Kolonial", "Kemerdekaan"]],
    ["Urutkan kerajaan (paling awal)", ["Kutai", "Sriwijaya", "Majapahit", "Demak"]],
    ["Urutkan peristiwa revolusi", ["Proklamasi", "Pertempuran Surabaya", "Perjanjian Linggarjati", "Konferensi Meja Bundar"]],
    ["Urutkan periode pemerintahan", ["Orde Lama", "Orde Baru", "Reformasi"]]
  ]
});
