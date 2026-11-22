/* ============================================================
   MELENGKAPI SEMUA MAPEL
   - B. Inggris & IPAS kelas 1–2, Koding & KA SMP
   - Muatan lokal: Bahasa Jawa, Bahasa Sunda
   - Kejuruan SMK (Dasar-dasar program keahlian): 8 bidang utama
   ============================================================ */

QB.add({
  kelas: [1, 2], mapel: "Bahasa Inggris", elemen: "Greetings, Colors, Numbers, Animals (pengenalan)",
  mc: [
    ["“Halo” in English is...", "hello", "goodbye", "sorry", "please"],
    ["“Satu” in English is...", "one", "two", "ten", "zero"],
    ["“Biru” in English is...", "blue", "red", "pink", "white"],
    ["“Ayam” in English is...", "chicken", "duck", "goat", "horse"],
    ["“Apel” in English is...", "apple", "orange", "grape", "melon"],
    ["🐶 in English is...", "dog", "cat", "cow", "pig"],
    ["What color is the sun?", "yellow", "black", "green", "purple"],
    ["“Selamat tinggal” in English is...", "goodbye", "hello", "thank you", "good morning"],
    ["“Tiga” in English is...", "three", "four", "five", "six"],
    ["“Mata” in English is...", "eye", "ear", "nose", "mouth"]
  ],
  tf: [["“Cat” artinya kucing.", true], ["“Red” artinya biru.", false], ["“Two” adalah angka 2.", true], ["“Goodbye” artinya halo.", false], ["“Fish” artinya ikan.", true]],
  pair: [[["one", "1"], ["two", "2"], ["three", "3"], ["four", "4"], ["five", "5"]], [["🐶", "dog"], ["🐱", "cat"], ["🐔", "chicken"], ["🐟", "fish"], ["🐦", "bird"]]],
  ord: [["Urutkan angka", ["one", "two", "three", "four"]]]
});

QB.add({
  kelas: [1, 2], mapel: "IPAS", elemen: "Diri sendiri, Anggota tubuh, Lingkungan sekitar, Cuaca",
  mc: [
    ["Bagian tubuh untuk melihat adalah...", "mata", "telinga", "hidung", "kaki"],
    ["Hewan yang hidup di air adalah...", "ikan", "kucing", "ayam", "kambing"],
    ["Tumbuhan membutuhkan ... agar tumbuh.", "air dan cahaya", "permen", "plastik", "kertas"],
    ["Saat hujan kita memakai...", "payung", "kacamata hitam", "topi pantai", "sandal jepit saja"],
    ["Matahari terbit pada waktu...", "pagi", "malam", "tengah malam", "sore"],
    ["Hewan yang bisa terbang adalah...", "burung", "kucing", "sapi", "ikan"],
    ["Benda yang terasa dingin adalah...", "es batu", "api", "teh panas", "setrika menyala"],
    ["Sampah daun termasuk sampah...", "organik", "anorganik", "kaca", "logam"],
    ["Hewan yang memiliki belalai adalah...", "gajah", "jerapah", "zebra", "kuda"],
    ["Tempat tinggal burung disebut...", "sarang", "kandang sapi", "akuarium", "liang semut"]
  ],
  tf: [["Ikan hidup di air.", true], ["Gajah memiliki belalai.", true], ["Matahari terbit pada malam hari.", false], ["Tumbuhan butuh air.", true], ["Plastik termasuk sampah organik.", false]],
  pair: [[["Ikan", "air"], ["Burung", "udara/sarang"], ["Cacing", "tanah"], ["Sapi", "kandang"], ["Lebah", "sarang madu"]]],
  ord: [["Urutkan waktu", ["Pagi", "Siang", "Sore", "Malam"]], ["Urutkan pertumbuhan tanaman", ["Biji", "Kecambah", "Tanaman muda", "Tanaman berbuah"]]]
});

QB.add({
  kelas: [7, 8, 9], mapel: "Koding & KA", elemen: "Berpikir komputasional, Pemrograman dasar, Literasi & etika AI",
  mc: [
    ["Kecerdasan Artifisial adalah kemampuan mesin untuk...", "meniru kecerdasan manusia", "menyala tanpa listrik", "mencetak kertas", "menyimpan air"],
    ["Cabang AI di mana komputer belajar dari contoh data disebut...", "machine learning", "hardware", "spreadsheet", "printing"],
    ["Pada program, perintah `if` digunakan untuk...", "percabangan/keputusan", "perulangan", "menyimpan file", "menggambar"],
    ["Perintah yang mengulang blok kode disebut...", "loop", "if", "print", "input"],
    ["Fungsi print() dalam Python digunakan untuk...", "menampilkan output", "menerima input", "menghapus data", "mematikan komputer"],
    ["Hasil dari 3 * 4 dalam Python adalah...", "12", "7", "34", "1"],
    ["Data berupa teks dalam pemrograman disebut...", "string", "integer", "boolean", "float"],
    ["Contoh penerapan AI pengenalan wajah adalah...", "membuka kunci ponsel", "menyalakan lampu manual", "menyapu lantai", "menulis dengan pensil"],
    ["Instruksi yang kita ketik ke chatbot AI disebut...", "prompt", "kabel", "monitor", "driver"],
    ["Sebelum menyebarkan informasi dari AI, kita harus...", "memeriksa kebenarannya", "langsung membagikan", "mengubah judulnya", "menghapus sumbernya"],
    ["Data yang tidak seimbang dapat membuat AI...", "bias", "lebih cepat", "lebih murah", "tidak butuh listrik"],
    ["Robot yang menghadap Timur lalu belok kiri, kini menghadap...", "Utara", "Selatan", "Barat", "Timur"]
  ],
  tf: [["Loop digunakan untuk perulangan.", true], ["AI selalu benar sehingga tidak perlu dicek.", false], ["Prompt adalah instruksi untuk AI.", true], ["String adalah tipe data teks.", true], ["Machine learning tidak membutuhkan data.", false], ["Menggunakan karya AI tetap perlu jujur menyebut sumbernya.", true]],
  pair: [[["if", "percabangan"], ["for/while", "perulangan"], ["print", "menampilkan"], ["input", "menerima masukan"], ["variabel", "wadah nilai"]], [["Chatbot", "percakapan"], ["Pengenalan wajah", "kamera ponsel"], ["Rekomendasi video", "aplikasi streaming"], ["Penerjemah otomatis", "terjemahan bahasa"]]],
  ord: [["Urutkan langkah membuat program", ["Pahami masalah", "Buat algoritma", "Tulis kode", "Uji program", "Perbaiki bug"]]]
});

/* ---------------- MUATAN LOKAL ---------------- */
QB.add({
  kelas: [1, 2, 3, 4, 5, 6, 7, 8, 9], mapel: "Bahasa Jawa", elemen: "Unggah-ungguh basa, Aksara Jawa, Tembang, Wayang (muatan lokal)",
  mc: [
    ["Bahasa Jawa “terima kasih” adalah...", "matur nuwun", "sugeng enjing", "nyuwun sewu", "monggo"],
    ["Angka 3 dalam bahasa Jawa adalah...", "telu", "loro", "papat", "lima"],
    ["Angka 9 dalam bahasa Jawa adalah...", "sanga", "wolu", "pitu", "sepuluh"],
    ["“Mangan” (ngoko) dalam krama alus untuk orang yang dihormati adalah...", "dhahar", "turu", "lunga", "ngombe"],
    ["“Turu” (ngoko) dalam krama inggil adalah...", "sare", "dhahar", "tindak", "ngunjuk"],
    ["“Omah” dalam krama adalah...", "griya", "sekolah", "pasar", "sawah"],
    ["Basa Jawa yang digunakan kepada orang tua atau guru adalah...", "krama", "ngoko", "slang", "kasar"],
    ["Aksara Jawa nglegena berjumlah...", "20", "26", "10", "33"],
    ["Aksara Jawa diawali dengan urutan...", "ha na ca ra ka", "a b c d e", "ka ga nga", "alif ba ta"],
    ["Tembang macapat berjumlah...", "11", "5", "20", "7"],
    ["Tembang macapat yang menggambarkan bayi dalam kandungan adalah...", "Maskumambang", "Megatruh", "Pucung", "Durma"],
    ["Anggota Pandawa yang paling kuat dan besar adalah...", "Bima", "Arjuna", "Nakula", "Yudhistira"],
    ["Punakawan terdiri atas Semar, Gareng, Petruk, dan...", "Bagong", "Bima", "Arjuna", "Cakil"],
    ["“Sugeng enjing” artinya...", "selamat pagi", "selamat malam", "selamat jalan", "selamat makan"]
  ],
  tf: [["“Matur nuwun” artinya terima kasih.", true], ["Krama digunakan untuk berbicara dengan orang yang dihormati.", true], ["Aksara Jawa berjumlah 26 huruf seperti abjad Latin.", false], ["Arjuna termasuk Pandawa.", true], ["“Papat” artinya lima.", false], ["Semar adalah salah satu punakawan.", true]],
  pair: [[["siji", "1"], ["loro", "2"], ["telu", "3"], ["papat", "4"], ["lima", "5"]], [["mangan", "dhahar"], ["turu", "sare"], ["lunga", "tindak"], ["ngombe", "ngunjuk"], ["omah", "griya"]], [["Yudhistira", "sulung Pandawa"], ["Bima", "paling kuat"], ["Arjuna", "pemanah ulung"], ["Nakula", "kembar"]]],
  ord: [["Urutkan aksara Jawa", ["ha", "na", "ca", "ra", "ka"]], ["Urutkan Pandawa dari yang tertua", ["Yudhistira", "Bima", "Arjuna", "Nakula dan Sadewa"]]]
});

QB.add({
  kelas: [1, 2, 3, 4, 5, 6, 7, 8, 9], mapel: "Bahasa Sunda", elemen: "Undak usuk basa, Kosakata, Aksara Sunda, Budaya Sunda (muatan lokal)",
  mc: [
    ["Bahasa Sunda “terima kasih” adalah...", "hatur nuhun", "wilujeng enjing", "punten", "mangga"],
    ["Angka 3 dalam bahasa Sunda adalah...", "tilu", "dua", "opat", "lima"],
    ["Angka 6 dalam bahasa Sunda adalah...", "genep", "tujuh", "dalapan", "salapan"],
    ["“Wilujeng enjing” artinya...", "selamat pagi", "selamat malam", "terima kasih", "permisi"],
    ["“Imah” dalam bahasa Indonesia artinya...", "rumah", "air", "sekolah", "jalan"],
    ["“Cai” artinya...", "air", "api", "angin", "tanah"],
    ["“Beureum” artinya warna...", "merah", "putih", "hijau", "hitam"],
    ["“Hejo” artinya warna...", "hijau", "kuning", "biru", "merah"],
    ["Ucapan permisi saat lewat di depan orang adalah...", "punten", "hatur nuhun", "wilujeng", "sampurasun"],
    ["Wayang khas Sunda yang terbuat dari kayu adalah...", "wayang golek", "wayang kulit", "wayang beber", "wayang orang"],
    ["Alat musik petik khas Sunda adalah...", "kacapi", "sasando", "tifa", "kolintang"],
    ["Tokoh cerita rakyat Sunda yang lucu dan polos adalah...", "Si Kabayan", "Malin Kundang", "Timun Mas", "Jaka Tarub"]
  ],
  tf: [["“Hatur nuhun” artinya terima kasih.", true], ["“Cai” artinya api.", false], ["Wayang golek berasal dari tanah Sunda.", true], ["“Hiji” artinya satu.", true], ["“Bodas” artinya hitam.", false]],
  pair: [[["hiji", "1"], ["dua", "2"], ["tilu", "3"], ["opat", "4"], ["lima", "5"]], [["beureum", "merah"], ["bodas", "putih"], ["hejo", "hijau"], ["hideung", "hitam"], ["koneng", "kuning"]]],
  ord: [["Urutkan angka bahasa Sunda", ["hiji", "dua", "tilu", "opat", "lima"]]]
});

/* ---------------- KEJURUAN SMK ---------------- */
const VOK = [10, 11, 12];
QB.add({
  jenjang: "SMK", kelas: VOK, mapel: "Kejuruan: TJKT", elemen: "Teknik Jaringan Komputer & Telekomunikasi: IP, perangkat, kabel, layanan",
  mc: [
    ["Subnet mask default untuk IP kelas C adalah...", "255.255.255.0", "255.0.0.0", "255.255.0.0", "255.255.255.255"],
    ["Rentang oktet pertama IP kelas C adalah...", "192–223", "1–126", "128–191", "224–239"],
    ["Port default HTTP adalah...", "80", "443", "21", "22"],
    ["Port default HTTPS adalah...", "443", "80", "53", "25"],
    ["Port default SSH adalah...", "22", "23", "21", "110"],
    ["Port default DNS adalah...", "53", "80", "8080", "3306"],
    ["Kabel UTP untuk menghubungkan PC ke switch menggunakan susunan...", "straight", "cross", "rollover", "coaxial"],
    ["Alat untuk menguji sambungan kabel UTP adalah...", "LAN tester", "crimping tool", "multimeter saja", "solder"],
    ["Perangkat yang bekerja di layer 2 OSI dan meneruskan berdasarkan MAC address adalah...", "switch", "router", "hub", "modem"],
    ["Media transmisi tercepat dan tahan interferensi adalah...", "fiber optik", "UTP", "coaxial", "kabel telepon"],
    ["Jumlah layer pada model OSI adalah...", "7", "4", "5", "9"],
    ["Alamat 127.0.0.1 disebut alamat...", "loopback", "broadcast", "gateway", "multicast"]
  ],
  tf: [["Subnet mask default kelas C adalah 255.255.255.0.", true], ["HTTPS menggunakan port 80.", false], ["Switch bekerja berdasarkan MAC address.", true], ["Model OSI terdiri dari 7 layer.", true], ["Fiber optik mudah terganggu interferensi listrik.", false]],
  pair: [[["HTTP", "80"], ["HTTPS", "443"], ["SSH", "22"], ["FTP", "21"], ["DNS", "53"]], [["Physical", "layer 1"], ["Data Link", "layer 2"], ["Network", "layer 3"], ["Transport", "layer 4"], ["Application", "layer 7"]]],
  ord: [["Urutkan layer OSI dari bawah", ["Physical", "Data Link", "Network", "Transport", "Session", "Presentation"]], ["Urutkan warna kabel T568B (awal)", ["Putih oranye", "Oranye", "Putih hijau", "Biru"]]]
});

QB.add({
  jenjang: "SMK", kelas: VOK, mapel: "Kejuruan: Akuntansi", elemen: "Akuntansi & Keuangan Lembaga: persamaan dasar, jurnal, siklus akuntansi",
  mc: [
    ["Persamaan dasar akuntansi adalah...", "Harta = Utang + Modal", "Harta = Modal − Utang", "Utang = Harta + Modal", "Modal = Harta + Utang"],
    ["Pencatatan transaksi pertama kali dilakukan di...", "jurnal umum", "neraca", "buku besar", "laporan laba rugi"],
    ["Sisi kiri suatu akun disebut...", "debit", "kredit", "saldo", "posting"],
    ["Pemindahan jurnal ke buku besar disebut...", "posting", "closing", "adjusting", "balancing"],
    ["Pengambilan uang usaha untuk keperluan pribadi pemilik disebut...", "prive", "dividen", "pendapatan", "beban"],
    ["Akun yang saldo normalnya di debit adalah...", "kas", "utang usaha", "modal", "pendapatan"],
    ["Laporan yang menunjukkan posisi harta, utang, dan modal disebut...", "neraca", "laba rugi", "arus kas", "jurnal"],
    ["Pendapatan dikurangi beban menghasilkan...", "laba/rugi", "modal awal", "aset tetap", "utang"],
    ["Penyusutan dicatat untuk aset...", "tetap", "lancar", "kas", "piutang"],
    ["Bukti transaksi penerimaan uang adalah...", "kuitansi", "memo", "faktur pembelian", "nota debit"]
  ],
  tf: [["Harta = Utang + Modal.", true], ["Kas memiliki saldo normal kredit.", false], ["Posting adalah memindahkan jurnal ke buku besar.", true], ["Prive mengurangi modal.", true], ["Neraca menunjukkan pendapatan dan beban.", false]],
  pair: [[["Kas", "harta"], ["Utang usaha", "kewajiban"], ["Modal pemilik", "ekuitas"], ["Pendapatan jasa", "pendapatan"], ["Beban gaji", "beban"]]],
  ord: [["Urutkan siklus akuntansi", ["Bukti transaksi", "Jurnal umum", "Buku besar", "Neraca saldo", "Laporan keuangan"]]]
});

QB.add({
  jenjang: "SMK", kelas: VOK, mapel: "Kejuruan: Otomotif", elemen: "Teknik Otomotif: motor bakar, kelistrikan, perawatan",
  mc: [
    ["Urutan langkah motor 4 tak adalah hisap, kompresi, usaha, dan...", "buang", "pengapian", "pendinginan", "pelumasan"],
    ["Komponen yang memercikkan bunga api pada motor bensin adalah...", "busi", "karburator", "piston", "radiator"],
    ["Tegangan aki mobil pada umumnya adalah...", "12 volt", "220 volt", "5 volt", "24 kilovolt"],
    ["Fungsi oli mesin adalah...", "melumasi komponen", "mendinginkan ban", "menambah bensin", "menyalakan lampu"],
    ["Komponen sistem pendingin air pada mobil adalah...", "radiator", "busi", "kopling", "knalpot"],
    ["Sistem bahan bakar modern pengganti karburator adalah...", "injeksi (EFI)", "dinamo", "magnet", "turbin uap"],
    ["Alat untuk mengencangkan baut sesuai spesifikasi torsi adalah...", "kunci momen", "obeng", "palu", "tang"],
    ["Sistem rem yang mencegah roda terkunci saat pengereman mendadak adalah...", "ABS", "AC", "EFI", "CVT"],
    ["Komponen pemutus dan penghubung tenaga mesin ke transmisi adalah...", "kopling", "radiator", "aki", "busi"],
    ["Motor bensin menggunakan siklus...", "Otto", "Diesel", "Rankine", "Carnot"]
  ],
  tf: [["Motor 4 tak memiliki langkah buang.", true], ["Busi terdapat pada mesin diesel konvensional.", false], ["Radiator bagian dari sistem pendingin.", true], ["ABS mencegah roda terkunci.", true], ["Oli tidak perlu diganti.", false]],
  pair: [[["Busi", "pengapian"], ["Radiator", "pendinginan"], ["Oli", "pelumasan"], ["Kopling", "penerus tenaga"], ["Aki", "sumber listrik"]]],
  ord: [["Urutkan langkah motor 4 tak", ["Hisap", "Kompresi", "Usaha", "Buang"]]]
});

QB.add({
  jenjang: "SMK", kelas: VOK, mapel: "Kejuruan: Kuliner", elemen: "Kuliner/Tata Boga: teknik memasak, sanitasi, keamanan pangan",
  mc: [
    ["Teknik memasak dengan uap air disebut...", "mengukus (steaming)", "menggoreng", "memanggang", "menumis"],
    ["Teknik memasak dalam minyak banyak hingga terendam disebut...", "deep frying", "sautéing", "boiling", "baking"],
    ["Persiapan bahan dan alat sebelum memasak disebut...", "mise en place", "garnish", "plating", "marinasi"],
    ["Hiasan pada hidangan disebut...", "garnish", "topping saja", "saus", "bumbu"],
    ["Zona suhu bahaya pertumbuhan bakteri pada makanan sekitar...", "5–60 °C", "70–100 °C", "−18 °C", "100–150 °C"],
    ["Perpindahan kuman dari bahan mentah ke makanan matang disebut...", "kontaminasi silang", "fermentasi", "karamelisasi", "emulsi"],
    ["Bumbu dasar kuning ditandai dengan penggunaan...", "kunyit", "cabai merah", "kecap", "daun pandan"],
    ["Merendam bahan dalam bumbu sebelum dimasak disebut...", "marinasi", "blansir", "plating", "glazing"],
    ["Memasak sebentar dalam air mendidih lalu didinginkan cepat disebut...", "blansir (blanching)", "frying", "roasting", "smoking"],
    ["Sistem jaminan keamanan pangan berbasis titik kendali kritis disebut...", "HACCP", "SOP", "K3", "ISO 9000 saja"]
  ],
  tf: [["Mengukus menggunakan uap air.", true], ["Mise en place dilakukan setelah memasak.", false], ["Talenan bahan mentah sebaiknya dipisah dari bahan matang.", true], ["Garnish adalah hiasan hidangan.", true], ["Suhu 30 °C aman untuk menyimpan makanan matang lama.", false]],
  pair: [[["Steaming", "mengukus"], ["Boiling", "merebus"], ["Baking", "memanggang di oven"], ["Sautéing", "menumis"], ["Deep frying", "menggoreng terendam"]]],
  ord: [["Urutkan proses memasak profesional", ["Mise en place", "Pengolahan", "Plating", "Penyajian"]]]
});

QB.add({
  jenjang: "SMK", kelas: VOK, mapel: "Kejuruan: Perkantoran", elemen: "Manajemen Perkantoran & Layanan Bisnis: korespondensi, kearsipan, pelayanan",
  mc: [
    ["Sistem kearsipan berdasarkan urutan huruf disebut sistem...", "abjad", "kronologis", "geografis", "nomor"],
    ["Sistem kearsipan berdasarkan tanggal disebut sistem...", "kronologis", "abjad", "subjek", "geografis"],
    ["Sistem kearsipan berdasarkan wilayah disebut sistem...", "geografis", "abjad", "nomor", "subjek"],
    ["Catatan jalannya rapat disebut...", "notulen", "agenda", "memo", "disposisi"],
    ["Daftar acara atau kegiatan disebut...", "agenda", "notulen", "kuitansi", "faktur"],
    ["Surat dari atasan berisi instruksi singkat penanganan surat masuk disebut lembar...", "disposisi", "kuitansi", "memo dinas", "nota"],
    ["Saat menerima telepon kantor, yang pertama diucapkan adalah...", "salam dan identitas kantor", "langsung menutup", "menanyakan gaji", "diam saja"],
    ["Jangka waktu penyimpanan arsip disebut...", "retensi", "inventaris", "registrasi", "mutasi"],
    ["Arsip yang masih sering digunakan disebut arsip...", "aktif", "inaktif", "statis", "musnah"],
    ["Surat yang dikirim ke banyak pihak dengan isi sama disebut surat...", "edaran", "kuasa", "pribadi", "lamaran"]
  ],
  tf: [["Notulen adalah catatan jalannya rapat.", true], ["Sistem kronologis berdasarkan huruf.", false], ["Arsip aktif masih sering digunakan.", true], ["Retensi adalah jangka waktu simpan arsip.", true], ["Menerima telepon kantor tidak perlu menyebut identitas.", false]],
  pair: [[["Abjad", "urutan huruf"], ["Kronologis", "urutan tanggal"], ["Geografis", "wilayah"], ["Subjek", "pokok masalah"], ["Nomor", "kode angka"]]],
  ord: [["Urutkan penanganan surat masuk", ["Menerima surat", "Mencatat di buku agenda", "Diberi disposisi", "Diteruskan ke pengolah", "Diarsipkan"]]]
});

QB.add({
  jenjang: "SMK", kelas: VOK, mapel: "Kejuruan: Pemasaran", elemen: "Bisnis Digital & Pemasaran: STP, bauran pemasaran, layanan pelanggan",
  mc: [
    ["Membagi pasar menjadi kelompok konsumen disebut...", "segmentasi", "targeting", "positioning", "branding"],
    ["Memilih segmen pasar yang dituju disebut...", "targeting", "segmentasi", "positioning", "pricing"],
    ["Membangun citra produk di benak konsumen disebut...", "positioning", "segmentasi", "distribusi", "packaging"],
    ["Harga Rp9.900 alih-alih Rp10.000 adalah strategi harga...", "psikologis", "premium", "grosir", "lelang"],
    ["Jual beli melalui platform internet disebut...", "e-commerce", "barter", "konsinyasi", "pasar tradisional"],
    ["Promosi berupa potongan harga sementara disebut...", "diskon", "garansi", "kuitansi", "retur"],
    ["Pelanggan yang membeli berulang kali disebut pelanggan...", "loyal", "potensial", "pasif", "baru"],
    ["Kata kunci agar toko online muncul di mesin pencari berkaitan dengan...", "SEO", "SOP", "HPP", "PPN"],
    ["Identitas berupa nama, logo, dan citra produk disebut...", "brand/merek", "stok", "invoice", "margin"],
    ["Penanganan keluhan pelanggan yang baik dimulai dengan...", "mendengarkan dengan empati", "menyalahkan pelanggan", "mengabaikan", "berdebat"]
  ],
  tf: [["Segmentasi adalah membagi pasar.", true], ["Positioning adalah memilih harga termahal.", false], ["E-commerce adalah jual beli lewat internet.", true], ["Pelanggan loyal membeli berulang kali.", true], ["Keluhan pelanggan sebaiknya diabaikan.", false]],
  pair: [[["Segmentasi", "membagi pasar"], ["Targeting", "memilih sasaran"], ["Positioning", "citra di benak konsumen"], ["Branding", "identitas merek"], ["SEO", "optimasi mesin pencari"]]],
  ord: [["Urutkan proses STP", ["Segmentasi", "Targeting", "Positioning"]], ["Urutkan proses penjualan", ["Menyapa pelanggan", "Menggali kebutuhan", "Menawarkan produk", "Menutup penjualan"]]]
});

QB.add({
  jenjang: "SMK", kelas: VOK, mapel: "Kejuruan: DKV", elemen: "Desain Komunikasi Visual: warna, tipografi, layout, format file",
  mc: [
    ["Mode warna untuk desain yang dicetak adalah...", "CMYK", "RGB", "HEX saja", "HSL saja"],
    ["Mode warna untuk tampilan layar adalah...", "RGB", "CMYK", "Pantone saja", "grayscale saja"],
    ["Resolusi standar untuk hasil cetak berkualitas adalah...", "300 dpi", "72 dpi", "10 dpi", "1000 dpi wajib"],
    ["Gambar yang tetap tajam saat diperbesar adalah gambar...", "vektor", "bitmap", "JPEG", "screenshot"],
    ["Format gambar yang mendukung latar transparan adalah...", "PNG", "JPG", "BMP", "PDF saja"],
    ["Huruf berkait pada ujungnya disebut jenis huruf...", "serif", "sans serif", "script", "dekoratif"],
    ["Ilmu tentang penataan huruf disebut...", "tipografi", "fotografi", "ilustrasi", "animasi"],
    ["Prinsip desain yang membuat elemen penting paling menonjol disebut...", "penekanan (emphasis)", "repetisi", "kesatuan", "ruang kosong"],
    ["Contoh perangkat lunak desain vektor gratis adalah...", "Inkscape", "Excel", "Notepad", "Audacity"],
    ["Warna yang berseberangan di lingkaran warna disebut warna...", "komplementer", "analog", "monokrom", "netral"]
  ],
  tf: [["CMYK digunakan untuk cetak.", true], ["Gambar bitmap tetap tajam saat diperbesar.", false], ["PNG mendukung latar transparan.", true], ["Times New Roman termasuk huruf serif.", true], ["RGB adalah mode warna cetak.", false]],
  pair: [[["CMYK", "cetak"], ["RGB", "layar"], ["Vektor", "tetap tajam"], ["Bitmap", "tersusun piksel"], ["PNG", "transparan"]]],
  ord: [["Urutkan proses desain", ["Brief klien", "Riset & ide", "Sketsa", "Digitalisasi", "Revisi & final"]]]
});

QB.add({
  jenjang: "SMK", kelas: VOK, mapel: "Kejuruan: Listrik", elemen: "Teknik Ketenagalistrikan: besaran listrik, instalasi, alat ukur, keselamatan",
  mc: [
    ["Tegangan listrik PLN untuk rumah tangga di Indonesia adalah...", "220 volt", "110 volt", "12 volt", "380 volt"],
    ["Frekuensi listrik PLN adalah...", "50 Hz", "60 Hz", "100 Hz", "25 Hz"],
    ["Alat pengaman instalasi yang memutus arus saat beban lebih adalah...", "MCB", "saklar", "stop kontak", "fitting"],
    ["Alat ukur serbaguna untuk tegangan, arus, dan hambatan adalah...", "multimeter", "termometer", "barometer", "tachometer"],
    ["Warna kabel netral menurut PUIL adalah...", "biru", "hijau-kuning", "merah", "hitam"],
    ["Warna kabel pembumian (grounding) menurut PUIL adalah...", "hijau-kuning", "biru", "cokelat", "putih"],
    ["Daya listrik dihitung dengan rumus P = ...", "V × I", "V ÷ I", "I ÷ V", "V + I"],
    ["Saklar untuk menyalakan satu lampu dari dua tempat adalah saklar...", "tukar (hotel)", "tunggal", "seri", "tarik"],
    ["Lampu yang paling hemat energi di antara berikut adalah...", "LED", "pijar", "halogen", "petromaks"],
    ["Sebelum memperbaiki instalasi listrik, langkah pertama adalah...", "mematikan sumber listrik", "menyentuh kabel", "menyiram air", "menyalakan semua lampu"]
  ],
  tf: [["Tegangan listrik rumah PLN 220 volt.", true], ["MCB berfungsi sebagai pengaman.", true], ["Kabel grounding berwarna biru.", false], ["P = V × I.", true], ["Memperbaiki instalasi tidak perlu memutus listrik.", false]],
  pair: [[["Volt", "tegangan"], ["Ampere", "arus"], ["Ohm", "hambatan"], ["Watt", "daya"], ["Hertz", "frekuensi"]]],
  ord: [["Urutkan langkah aman memperbaiki instalasi", ["Matikan MCB", "Uji dengan testpen", "Perbaiki instalasi", "Periksa ulang", "Nyalakan MCB"]]]
});
