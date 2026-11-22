/* ============================================================
   BANK SOAL SMA – Fase E (kelas 10) & Fase F (kelas 11–12)
   Kurikulum Merdeka, CP BSKAP 046/H/KR/2025
   Kelas 10: IPA (Fisika, Kimia, Biologi) & IPS (Ekonomi, Sosiologi, Geografi, Sejarah) umum
   Kelas 11–12: mata pelajaran pilihan/peminatan
   Mapel umum (B. Indonesia, B. Inggris, Pancasila, Sejarah, PJOK, Seni, Agama)
   memakai paket bersama dengan SMK (file smk.js / smk-ext.js).
   ============================================================ */
const SMA = [10, 11, 12];

QB.add({
  jenjang: "SMA", kelas: SMA, mapel: "Fisika", elemen: "Pengukuran, Kinematika, Dinamika, Usaha-energi, Momentum, Fluida, Gelombang, Listrik-magnet, Fisika modern",
  mc: [
    ["Jumlah besaran pokok dalam Sistem Internasional adalah...", "7", "5", "6", "9"],
    ["Satuan SI untuk intensitas cahaya adalah...", "kandela", "lux", "lumen", "watt"],
    ["Satuan SI untuk jumlah zat adalah...", "mol", "kilogram", "liter", "kelvin"],
    ["Dimensi kecepatan adalah...", "[L][T]⁻¹", "[L][T]⁻²", "[M][L][T]⁻²", "[L]²"],
    ["Benda jatuh bebas mengalami gerak...", "GLBB dipercepat", "GLB", "melingkar beraturan", "harmonik"],
    ["Percepatan gravitasi bumi kira-kira...", "9,8 m/s²", "3 × 10⁸ m/s", "1,6 m/s²", "98 m/s²"],
    ["Rumus Hukum II Newton adalah...", "F = m · a", "F = m · v", "P = m · v", "W = F · s"],
    ["Usaha dihitung dengan rumus...", "W = F · s", "W = m · g", "W = ½ m v²", "W = P / t"],
    ["Energi kinetik dirumuskan...", "½ m v²", "m g h", "m v", "F · s"],
    ["Energi potensial gravitasi dirumuskan...", "m g h", "½ m v²", "½ k x²", "m c²"],
    ["Momentum dirumuskan...", "p = m · v", "p = F · t", "p = m · a", "p = W / t"],
    ["Satuan daya adalah...", "watt", "joule", "newton", "pascal"],
    ["Prinsip yang menjelaskan gaya angkat sayap pesawat adalah hukum...", "Bernoulli", "Archimedes", "Pascal", "Hooke"],
    ["Cepat rambat gelombang dirumuskan...", "v = λ · f", "v = λ / f", "v = f / λ", "v = λ + f"],
    ["Cepat rambat cahaya di ruang hampa kira-kira...", "3 × 10⁸ m/s", "340 m/s", "3 × 10⁵ m/s", "9,8 m/s"],
    ["Gaya tarik-menarik antar muatan listrik dijelaskan oleh hukum...", "Coulomb", "Ohm", "Kirchhoff", "Faraday"],
    ["Hukum yang menyatakan jumlah arus masuk = arus keluar titik cabang adalah hukum...", "Kirchhoff I", "Ohm", "Coulomb", "Lenz"],
    ["Kalor yang dibutuhkan untuk menaikkan suhu dirumuskan...", "Q = m · c · ΔT", "Q = m · L", "Q = P · t", "Q = F · s"],
    ["Persamaan kesetaraan massa-energi Einstein adalah...", "E = m c²", "E = h f", "E = ½ m v²", "E = m g h"],
    ["Bunyi tidak dapat merambat di ruang hampa karena termasuk gelombang...", "mekanik", "elektromagnetik", "transversal", "stasioner"],
    ["Pembangkit listrik yang mengubah energi cahaya matahari langsung menjadi listrik adalah...", "panel surya (sel fotovoltaik)", "turbin angin", "generator diesel", "PLTA"],
    ["Hukum Hooke berkaitan dengan...", "pegas", "fluida", "cahaya", "listrik"]
  ],
  tf: [
    ["Besaran pokok dalam SI berjumlah 7.", true], ["Satuan gaya adalah joule.", false],
    ["Energi kinetik bergantung pada kecepatan benda.", true], ["Gelombang bunyi dapat merambat di ruang hampa.", false],
    ["Momentum adalah hasil kali massa dan kecepatan.", true], ["Hukum Bernoulli menjelaskan gaya angkat pesawat.", true],
    ["Cahaya termasuk gelombang elektromagnetik.", true], ["Pada GLB, percepatan benda tidak nol.", false],
    ["Satuan daya adalah watt.", true], ["Hukum Archimedes membahas gaya apung.", true]
  ],
  pair: [
    [["Panjang", "meter"], ["Massa", "kilogram"], ["Waktu", "sekon"], ["Arus listrik", "ampere"], ["Suhu", "kelvin"]],
    [["Bernoulli", "sayap pesawat"], ["Archimedes", "kapal mengapung"], ["Pascal", "dongkrak hidrolik"], ["Hooke", "pegas"], ["Newton III", "roket"]],
    [["W = F · s", "usaha"], ["Ek = ½ m v²", "energi kinetik"], ["p = m · v", "momentum"], ["P = W / t", "daya"], ["F = m · a", "Hukum II Newton"]]
  ],
  ord: [
    ["Urutkan spektrum elektromagnetik dari panjang gelombang terbesar", ["Gelombang radio", "Gelombang mikro", "Inframerah", "Cahaya tampak", "Ultraviolet"]],
    ["Urutkan langkah metode ilmiah", ["Rumusan masalah", "Hipotesis", "Eksperimen", "Analisis data", "Kesimpulan"]]
  ]
});

QB.add({
  jenjang: "SMA", kelas: SMA, mapel: "Kimia", elemen: "Struktur atom, Sistem periodik, Ikatan kimia, Stoikiometri, Asam-basa, Laju & kesetimbangan, Kimia organik, Kimia hijau",
  mc: [
    ["Partikel bermuatan positif dalam inti atom adalah...", "proton", "elektron", "neutron", "positron"],
    ["Nomor atom menunjukkan jumlah...", "proton", "neutron", "nukleon", "molekul"],
    ["Model atom yang menyerupai roti kismis dikemukakan oleh...", "J.J. Thomson", "Dalton", "Rutherford", "Bohr"],
    ["Model atom dengan elektron pada lintasan tertentu dikemukakan oleh...", "Niels Bohr", "Dalton", "Thomson", "Democritus"],
    ["Unsur golongan VIIIA disebut...", "gas mulia", "alkali", "halogen", "alkali tanah"],
    ["Unsur golongan IA disebut...", "alkali", "halogen", "gas mulia", "transisi"],
    ["Unsur golongan VIIA disebut...", "halogen", "alkali", "gas mulia", "lantanida"],
    ["Ikatan pada NaCl adalah ikatan...", "ion", "kovalen", "logam", "hidrogen"],
    ["Ikatan pada molekul H₂O adalah ikatan...", "kovalen", "ion", "logam", "van der Waals saja"],
    ["Bilangan Avogadro adalah...", "6,02 × 10²³", "3 × 10⁸", "9,8", "1,6 × 10⁻¹⁹"],
    ["Volume 1 mol gas pada keadaan STP adalah...", "22,4 L", "24 L", "1 L", "11,2 L"],
    ["Rumus umum alkana adalah...", "CₙH₂ₙ₊₂", "CₙH₂ₙ", "CₙH₂ₙ₋₂", "CₙHₙ"],
    ["Senyawa CH₄ bernama...", "metana", "etana", "propana", "etena"],
    ["Larutan dengan pH = 7 bersifat...", "netral", "asam", "basa", "amfoter"],
    ["Contoh elektrolit kuat adalah...", "HCl", "gula", "alkohol", "urea"],
    ["Zat yang mempercepat reaksi tanpa ikut bereaksi secara permanen disebut...", "katalis", "inhibitor", "reaktan", "produk"],
    ["Pergeseran kesetimbangan akibat perubahan kondisi dijelaskan oleh asas...", "Le Chatelier", "Avogadro", "Hess", "Dalton"],
    ["Reaksi pelepasan elektron disebut...", "oksidasi", "reduksi", "netralisasi", "hidrolisis"],
    ["Plastik termasuk senyawa...", "polimer", "monomer", "unsur", "logam"],
    ["Prinsip kimia yang mengurangi limbah dan bahan berbahaya disebut kimia...", "hijau", "organik", "analitik", "inti"]
  ],
  tf: [
    ["Elektron bermuatan negatif.", true], ["Gas mulia berada di golongan IA.", false],
    ["NaCl memiliki ikatan ion.", true], ["Volume 1 mol gas pada STP adalah 22,4 L.", true],
    ["Larutan asam memiliki pH lebih dari 7.", false], ["Katalis mempercepat laju reaksi.", true],
    ["Oksidasi adalah penangkapan elektron.", false], ["Metana adalah alkana paling sederhana.", true],
    ["Gula termasuk elektrolit kuat.", false], ["Nomor massa = jumlah proton + neutron.", true]
  ],
  pair: [
    [["IA", "alkali"], ["IIA", "alkali tanah"], ["VIIA", "halogen"], ["VIIIA", "gas mulia"], ["IB–VIIIB", "transisi"]],
    [["Dalton", "bola pejal"], ["Thomson", "roti kismis"], ["Rutherford", "inti atom"], ["Bohr", "lintasan elektron"]],
    [["CH₄", "metana"], ["C₂H₆", "etana"], ["C₃H₈", "propana"], ["C₄H₁₀", "butana"], ["C₂H₄", "etena"]]
  ],
  ord: [
    ["Urutkan perkembangan model atom", ["Dalton", "Thomson", "Rutherford", "Bohr", "Mekanika kuantum"]],
    ["Urutkan alkana dari rantai terpendek", ["Metana", "Etana", "Propana", "Butana", "Pentana"]]
  ]
});

QB.add({
  jenjang: "SMA", kelas: SMA, mapel: "Biologi", elemen: "Keanekaragaman hayati, Virus, Ekologi, Sel, Sistem organ, Metabolisme, Genetika, Evolusi, Bioteknologi",
  mc: [
    ["Tingkat keanekaragaman hayati meliputi gen, jenis, dan...", "ekosistem", "sel", "organ", "jaringan"],
    ["Virus hanya dapat berkembang biak di dalam...", "sel hidup", "air", "tanah", "udara"],
    ["Penyakit yang disebabkan virus adalah...", "influenza", "tuberkulosis", "tifus", "kolera"],
    ["Organel penghasil energi (ATP) pada sel adalah...", "mitokondria", "ribosom", "badan Golgi", "nukleolus"],
    ["Jaringan tumbuhan yang selalu membelah adalah jaringan...", "meristem", "epidermis", "parenkim", "sklerenkim"],
    ["Hasil fotosintesis adalah glukosa dan...", "oksigen", "karbon dioksida", "nitrogen", "air"],
    ["Molekul pembawa informasi genetik adalah...", "DNA", "ATP", "glukosa", "lipid"],
    ["Model struktur DNA heliks ganda dikemukakan oleh...", "Watson dan Crick", "Mendel", "Darwin", "Pasteur"],
    ["Perubahan materi genetik yang dapat diwariskan disebut...", "mutasi", "adaptasi", "evolusi", "seleksi"],
    ["Teori seleksi alam dikemukakan oleh...", "Charles Darwin", "Lamarck", "Mendel", "Linnaeus"],
    ["Hormon yang mengatur kadar gula darah adalah...", "insulin", "adrenalin", "tiroksin", "estrogen"],
    ["Insulin dihasilkan oleh...", "pankreas", "hati", "ginjal", "tiroid"],
    ["Imunitas yang diperoleh dari vaksinasi disebut kekebalan...", "aktif buatan", "pasif alami", "aktif alami", "pasif buatan"],
    ["Organisme pengurai dalam ekosistem contohnya...", "bakteri dan jamur", "rumput", "elang", "kambing"],
    ["Proses penguraian glukosa untuk menghasilkan energi disebut...", "respirasi seluler", "fotosintesis", "transpirasi", "osmosis"],
    ["Enzim bekerja dengan sifat...", "spesifik terhadap substrat", "tidak terpengaruh suhu", "habis setelah reaksi", "hanya bekerja di luar sel"],
    ["Kloning domba Dolly merupakan contoh bioteknologi...", "modern", "konvensional", "tradisional", "fermentasi"],
    ["Hewan endemik Indonesia yang hidup di Pulau Komodo adalah...", "komodo", "harimau Sumatera", "badak Jawa", "orangutan"]
  ],
  tf: [
    ["Virus dapat hidup bebas tanpa sel inang.", false], ["Mitokondria menghasilkan ATP.", true],
    ["Fotosintesis menghasilkan oksigen.", true], ["DNA berbentuk heliks ganda.", true],
    ["Insulin dihasilkan oleh hati.", false], ["Mutasi dapat diwariskan bila terjadi pada sel kelamin.", true],
    ["Jamur termasuk produsen.", false], ["Vaksin merangsang tubuh membentuk antibodi.", true],
    ["Darwin mengemukakan teori seleksi alam.", true], ["Enzim bekerja tidak spesifik.", false]
  ],
  pair: [
    [["Mitokondria", "respirasi sel"], ["Kloroplas", "fotosintesis"], ["Ribosom", "sintesis protein"], ["Lisosom", "pencernaan intrasel"], ["Nukleus", "pusat kendali"]],
    [["Insulin", "gula darah"], ["Adrenalin", "respon stres"], ["Tiroksin", "metabolisme"], ["Estrogen", "hormon kelamin wanita"], ["Hormon pertumbuhan", "pertumbuhan tubuh"]],
    [["Komodo", "NTT"], ["Orangutan", "Kalimantan & Sumatera"], ["Anoa", "Sulawesi"], ["Cendrawasih", "Papua"], ["Badak bercula satu", "Ujung Kulon"]]
  ],
  ord: [
    ["Urutkan tingkat organisasi kehidupan", ["Molekul", "Sel", "Jaringan", "Organ", "Organisme"]],
    ["Urutkan tingkat organisasi ekologi", ["Individu", "Populasi", "Komunitas", "Ekosistem", "Biosfer"]]
  ]
});

QB.add({
  jenjang: "SMA", kelas: SMA, mapel: "Ekonomi", elemen: "Kelangkaan, Permintaan-penawaran, Pasar, Uang & bank, Inflasi, APBN, Pajak, Pendapatan nasional, Akuntansi",
  mc: [
    ["Inti masalah ekonomi adalah...", "kelangkaan", "kekayaan", "kemakmuran", "kelebihan barang"],
    ["Hukum permintaan: jika harga naik, jumlah barang yang diminta akan...", "turun", "naik", "tetap", "hilang"],
    ["Hukum penawaran: jika harga naik, jumlah barang yang ditawarkan akan...", "naik", "turun", "tetap", "nol"],
    ["Pasar dengan satu penjual disebut...", "monopoli", "oligopoli", "persaingan sempurna", "monopsoni"],
    ["Pasar dengan sedikit penjual disebut...", "oligopoli", "monopoli", "monopsoni", "persaingan sempurna"],
    ["Fungsi utama uang adalah sebagai...", "alat tukar", "barang mewah", "perhiasan", "alat produksi"],
    ["Bank sentral Indonesia adalah...", "Bank Indonesia", "Bank Mandiri", "BRI", "OJK"],
    ["Lembaga yang mengawasi sektor jasa keuangan adalah...", "OJK", "BPS", "KPU", "BPOM"],
    ["Kenaikan harga barang secara umum dan terus-menerus disebut...", "inflasi", "deflasi", "devaluasi", "resesi"],
    ["Penurunan nilai mata uang yang ditetapkan pemerintah terhadap mata uang asing disebut...", "devaluasi", "inflasi", "revaluasi", "apresiasi"],
    ["Anggaran pendapatan dan belanja negara disingkat...", "APBN", "APBD", "PDB", "BUMN"],
    ["Contoh pajak langsung adalah...", "pajak penghasilan (PPh)", "PPN", "bea masuk", "cukai rokok"],
    ["Nilai barang dan jasa yang diproduksi di dalam negeri dalam satu tahun disebut...", "PDB", "PNB", "APBN", "inflasi"],
    ["Tempat jual beli saham di Indonesia adalah...", "Bursa Efek Indonesia", "Bank Indonesia", "Pegadaian", "BPS"],
    ["Kebijakan moneter dilakukan oleh...", "Bank Indonesia", "DPR", "Kementerian Pendidikan", "BPS"],
    ["Persamaan dasar akuntansi adalah...", "Aset = Liabilitas + Ekuitas", "Aset = Ekuitas − Liabilitas", "Liabilitas = Aset + Ekuitas", "Ekuitas = Aset + Liabilitas"]
  ],
  tf: [
    ["Kelangkaan adalah inti masalah ekonomi.", true], ["Jika harga naik, permintaan cenderung naik.", false],
    ["Bank Indonesia adalah bank sentral.", true], ["Inflasi adalah penurunan harga umum.", false],
    ["PPh termasuk pajak langsung.", true], ["Monopoli adalah pasar dengan banyak penjual.", false],
    ["OJK mengawasi lembaga jasa keuangan.", true], ["APBN disusun pemerintah dan disetujui DPR.", true]
  ],
  pair: [
    [["Monopoli", "satu penjual"], ["Oligopoli", "sedikit penjual"], ["Monopsoni", "satu pembeli"], ["Persaingan sempurna", "banyak penjual & pembeli"]],
    [["Inflasi", "harga naik terus"], ["Deflasi", "harga turun terus"], ["Devaluasi", "nilai mata uang diturunkan"], ["Resesi", "pertumbuhan ekonomi negatif"]],
    [["Bank Indonesia", "kebijakan moneter"], ["OJK", "pengawas jasa keuangan"], ["BEI", "perdagangan saham"], ["LPS", "penjamin simpanan"], ["BPS", "statistik"]]
  ],
  ord: [
    ["Urutkan siklus akuntansi", ["Bukti transaksi", "Jurnal", "Buku besar", "Neraca saldo", "Laporan keuangan"]],
    ["Urutkan kegiatan ekonomi", ["Produksi", "Distribusi", "Konsumsi"]]
  ]
});

QB.add({
  jenjang: "SMA", kelas: SMA, mapel: "Sosiologi", elemen: "Fungsi sosiologi, Interaksi, Nilai & norma, Sosialisasi, Kelompok, Stratifikasi, Konflik & integrasi, Perubahan sosial, Penelitian sosial",
  mc: [
    ["Bapak sosiologi dunia adalah...", "Auguste Comte", "Karl Marx", "Max Weber", "Emile Durkheim"],
    ["Syarat terjadinya interaksi sosial adalah kontak sosial dan...", "komunikasi", "konflik", "imitasi", "sugesti"],
    ["Proses belajar nilai dan norma agar dapat diterima masyarakat disebut...", "sosialisasi", "stratifikasi", "mobilitas", "akulturasi"],
    ["Agen sosialisasi pertama dan utama adalah...", "keluarga", "sekolah", "media massa", "teman sebaya"],
    ["Perilaku yang tidak sesuai nilai dan norma disebut...", "penyimpangan sosial", "integrasi sosial", "mobilitas sosial", "diferensiasi"],
    ["Pengelompokan masyarakat secara bertingkat disebut...", "stratifikasi sosial", "diferensiasi sosial", "integrasi", "akomodasi"],
    ["Perpindahan status seseorang ke lapisan yang lebih tinggi disebut mobilitas...", "vertikal naik", "horizontal", "vertikal turun", "geografis"],
    ["Kelompok berdasarkan ikatan batin yang kuat (gemeinschaft) disebut...", "paguyuban", "patembayan", "kerumunan", "asosiasi"],
    ["Pembagi kelompok gemeinschaft dan gesellschaft adalah...", "Ferdinand Tönnies", "Auguste Comte", "Weber", "Soekanto"],
    ["Upaya meredakan konflik agar tercipta keseimbangan disebut...", "akomodasi", "kontravensi", "persaingan", "pertentangan"],
    ["Penyelesaian konflik dengan bantuan pihak ketiga yang tidak berwenang memutuskan disebut...", "mediasi", "arbitrase", "koersi", "ajudikasi"],
    ["Penyelesaian konflik melalui pengadilan disebut...", "ajudikasi", "mediasi", "konsiliasi", "toleransi"],
    ["Teknik pengumpulan data dengan daftar pertanyaan tertulis disebut...", "kuesioner/angket", "observasi", "wawancara", "studi pustaka"],
    ["Perubahan sosial yang berlangsung cepat dan mendasar disebut...", "revolusi", "evolusi", "reformasi", "adaptasi"],
    ["Sosiolog Indonesia yang dikenal sebagai Bapak Sosiologi Indonesia adalah...", "Selo Soemardjan", "Koentjaraningrat", "Soekanto", "Mubyarto"]
  ],
  tf: [
    ["Auguste Comte adalah Bapak Sosiologi.", true], ["Keluarga adalah agen sosialisasi pertama.", true],
    ["Mediasi melibatkan pihak ketiga yang berwenang memutuskan.", false], ["Paguyuban didasari ikatan batin yang kuat.", true],
    ["Stratifikasi adalah pembedaan masyarakat secara horizontal.", false], ["Kuesioner adalah teknik pengumpulan data.", true],
    ["Revolusi adalah perubahan sosial yang lambat.", false], ["Kontak dan komunikasi adalah syarat interaksi sosial.", true]
  ],
  pair: [
    [["Mediasi", "penengah tanpa wewenang"], ["Arbitrase", "pihak ketiga memutuskan"], ["Konsiliasi", "lembaga tertentu"], ["Ajudikasi", "pengadilan"], ["Koersi", "paksaan"]],
    [["Auguste Comte", "Bapak Sosiologi"], ["Karl Marx", "konflik kelas"], ["Max Weber", "tindakan sosial"], ["Emile Durkheim", "fakta sosial"], ["Selo Soemardjan", "sosiologi Indonesia"]]
  ],
  ord: [
    ["Urutkan langkah penelitian sosial", ["Menentukan masalah", "Merumuskan hipotesis", "Mengumpulkan data", "Menganalisis data", "Menarik kesimpulan"]],
    ["Urutkan agen sosialisasi dari yang pertama", ["Keluarga", "Teman sebaya", "Sekolah", "Dunia kerja"]]
  ]
});

QB.add({
  jenjang: "SMA", kelas: SMA, mapel: "Geografi", elemen: "Konsep geografi, Peta & SIG, Penginderaan jauh, Litosfer, Atmosfer, Hidrosfer, Mitigasi bencana, Kependudukan",
  mc: [
    ["Konsep esensial geografi berjumlah...", "10", "5", "7", "12"],
    ["Peta dengan skala 1 : 25.000 tergolong skala...", "besar", "kecil", "sedang", "geografis"],
    ["Jarak 2 cm pada peta berskala 1 : 100.000 sama dengan jarak sebenarnya...", "2 km", "20 km", "200 m", "0,2 km"],
    ["Garis pada peta yang menghubungkan tempat dengan ketinggian sama disebut...", "kontur", "isobar", "isoterm", "isohyet"],
    ["Sistem berbasis komputer untuk mengolah data spasial disebut...", "SIG", "GPS", "SMS", "VPN"],
    ["Perolehan informasi objek tanpa kontak langsung, misalnya lewat citra satelit, disebut...", "penginderaan jauh", "survei lapangan", "wawancara", "kartografi"],
    ["Tenaga dari dalam bumi disebut tenaga...", "endogen", "eksogen", "atmosferik", "biologis"],
    ["Contoh tenaga eksogen adalah...", "erosi", "vulkanisme", "gempa tektonik", "lipatan"],
    ["Indonesia rawan gempa dan gunung api karena berada di...", "pertemuan lempeng & Cincin Api Pasifik", "tengah benua", "kutub utara", "gurun"],
    ["Lapisan atmosfer tempat terjadinya cuaca adalah...", "troposfer", "stratosfer", "mesosfer", "eksosfer"],
    ["Alat untuk mengukur curah hujan adalah...", "ombrometer", "barometer", "anemometer", "higrometer"],
    ["Daerah aliran sungai disingkat...", "DAS", "DAK", "SIG", "ZEE"],
    ["Upaya mengurangi risiko bencana disebut...", "mitigasi", "evakuasi", "rehabilitasi", "rekonstruksi"],
    ["Gelombang laut besar akibat gempa di dasar laut disebut...", "tsunami", "rob", "abrasi", "pasang surut"],
    ["Perbandingan jumlah penduduk dengan luas wilayah disebut kepadatan penduduk...", "aritmetik", "agraris", "fisiologis", "kasar"],
    ["Piramida penduduk dengan alas lebar menunjukkan penduduk...", "muda (ekspansif)", "tua (konstruktif)", "stasioner", "menurun drastis"]
  ],
  tf: [
    ["Skala 1 : 25.000 termasuk skala besar.", true], ["Erosi adalah tenaga endogen.", false],
    ["Kontur menghubungkan tempat dengan ketinggian sama.", true], ["Indonesia berada di Cincin Api Pasifik.", true],
    ["Anemometer mengukur curah hujan.", false], ["Mitigasi bertujuan mengurangi risiko bencana.", true],
    ["Penginderaan jauh memerlukan kontak langsung dengan objek.", false], ["Troposfer adalah tempat terjadinya cuaca.", true]
  ],
  pair: [
    [["Barometer", "tekanan udara"], ["Anemometer", "kecepatan angin"], ["Ombrometer", "curah hujan"], ["Higrometer", "kelembapan"], ["Termometer", "suhu"]],
    [["Isobar", "tekanan udara sama"], ["Isoterm", "suhu sama"], ["Isohyet", "curah hujan sama"], ["Kontur", "ketinggian sama"], ["Isobath", "kedalaman laut sama"]],
    [["Vulkanisme", "aktivitas magma"], ["Seisme", "gempa bumi"], ["Pelapukan", "penghancuran batuan"], ["Sedimentasi", "pengendapan"], ["Abrasi", "pengikisan pantai"]]
  ],
  ord: [
    ["Urutkan siklus manajemen bencana", ["Mitigasi", "Kesiapsiagaan", "Tanggap darurat", "Rehabilitasi", "Rekonstruksi"]],
    ["Urutkan lapisan atmosfer dari bawah", ["Troposfer", "Stratosfer", "Mesosfer", "Termosfer", "Eksosfer"]]
  ]
});

QB.add({
  jenjang: "SMA", kelas: [11, 12], mapel: "Antropologi", elemen: "Konsep budaya, Unsur kebudayaan, Etnografi, Dinamika budaya, Kearifan lokal",
  mc: [
    ["Antropologi adalah ilmu yang mempelajari manusia dan...", "kebudayaannya", "bebatuan", "bintang", "tumbuhan saja"],
    ["Jumlah unsur kebudayaan universal menurut Koentjaraningrat adalah...", "7", "5", "3", "9"],
    ["Bapak antropologi Indonesia adalah...", "Koentjaraningrat", "Selo Soemardjan", "Ki Hajar Dewantara", "Soekanto"],
    ["Penelitian yang mendeskripsikan kebudayaan suatu kelompok secara mendalam disebut...", "etnografi", "demografi", "geografi", "kartografi"],
    ["Bercampurnya dua budaya tanpa menghilangkan ciri budaya asli disebut...", "akulturasi", "asimilasi", "difusi", "inovasi"],
    ["Peleburan budaya sehingga muncul budaya baru dan budaya asal hilang disebut...", "asimilasi", "akulturasi", "enkulturasi", "difusi"],
    ["Penyebaran unsur budaya dari satu masyarakat ke masyarakat lain disebut...", "difusi", "enkulturasi", "asimilasi", "invensi"],
    ["Proses individu mempelajari budaya masyarakatnya sendiri disebut...", "enkulturasi", "akulturasi", "difusi", "asimilasi"],
    ["Cerita rakyat, mitos, dan legenda termasuk...", "folklor", "artefak", "prasasti", "fosil"],
    ["Contoh kebudayaan material adalah...", "rumah adat", "nilai gotong royong", "kepercayaan", "norma adat"],
    ["Contoh akulturasi di Indonesia adalah...", "Menara Kudus", "Candi Borobudur murni", "rumah honai", "tari Saman"],
    ["Pengetahuan dan kebiasaan lokal yang bijaksana dan diwariskan disebut...", "kearifan lokal", "globalisasi", "modernisasi", "urbanisasi"]
  ],
  tf: [
    ["Koentjaraningrat adalah Bapak Antropologi Indonesia.", true], ["Unsur kebudayaan universal berjumlah 5.", false],
    ["Akulturasi tidak menghilangkan ciri budaya asli.", true], ["Rumah adat termasuk kebudayaan nonmaterial.", false],
    ["Folklor mencakup cerita rakyat.", true], ["Enkulturasi adalah mempelajari budaya sendiri.", true]
  ],
  pair: [
    [["Akulturasi", "campuran, ciri asli tetap"], ["Asimilasi", "melebur jadi budaya baru"], ["Difusi", "penyebaran budaya"], ["Enkulturasi", "belajar budaya sendiri"], ["Inovasi", "pembaruan"]],
    [["Material", "rumah adat"], ["Nonmaterial", "nilai gotong royong"], ["Folklor lisan", "legenda"], ["Kearifan lokal", "subak di Bali"]]
  ],
  ord: [["Urutkan langkah penelitian etnografi", ["Memilih lokasi", "Observasi partisipasi", "Wawancara mendalam", "Analisis data", "Menulis laporan"]]]
});

QB.add({
  jenjang: "SMA", kelas: SMA, mapel: "Informatika", elemen: "Berpikir komputasional, Algoritma & pemrograman, Analisis data, Jaringan & internet, Dampak sosial informatika",
  mc: [
    ["Langkah memecah persoalan besar menjadi bagian kecil disebut...", "dekomposisi", "abstraksi", "pengenalan pola", "enkripsi"],
    ["Struktur data LIFO adalah...", "stack", "queue", "array", "graph"],
    ["Algoritma pencarian yang memeriksa data satu per satu disebut...", "linear search", "binary search", "bubble sort", "merge sort"],
    ["Kompleksitas waktu binary search adalah...", "O(log n)", "O(n)", "O(n²)", "O(1)"],
    ["Output print(7 // 2) di Python adalah...", "3", "3,5", "4", "1"],
    ["Output print(2 ** 3) di Python adalah...", "8", "6", "9", "5"],
    ["Bahasa untuk mengelola basis data relasional adalah...", "SQL", "HTML", "CSS", "Markdown"],
    ["Visualisasi tren data dari waktu ke waktu paling cocok menggunakan diagram...", "garis", "lingkaran", "pencar", "peta"],
    ["Protokol pengiriman halaman web terenkripsi adalah...", "HTTPS", "HTTP", "FTP", "SMTP"],
    ["Penipuan dengan tautan palsu untuk mencuri data disebut...", "phishing", "spam biasa", "backup", "caching"],
    ["Lisensi perangkat lunak yang kode sumbernya terbuka disebut...", "open source", "proprietary", "trial", "shareware"],
    ["Model AI yang belajar dari data berlabel disebut supervised...", "learning", "searching", "printing", "routing"]
  ],
  tf: [
    ["Stack bersifat LIFO.", true], ["Binary search bisa dipakai pada data acak tanpa diurutkan.", false],
    ["7 // 2 di Python bernilai 3.", true], ["SQL digunakan untuk basis data.", true],
    ["HTTP lebih aman daripada HTTPS.", false], ["Open source berarti kode sumber dapat dilihat.", true]
  ],
  pair: [[["Stack", "LIFO"], ["Queue", "FIFO"], ["Linear search", "O(n)"], ["Binary search", "O(log n)"], ["Bubble sort", "O(n²)"]]],
  ord: [["Urutkan langkah berpikir komputasional", ["Dekomposisi", "Pengenalan pola", "Abstraksi", "Algoritma"]]]
});

QB.add({
  jenjang: "SMA", kelas: SMA, mapel: "Koding & KA", elemen: "Pemrograman, Data, Machine learning, AI generatif, Etika AI",
  mc: [
    ["Data yang digunakan untuk menguji model setelah dilatih disebut data...", "uji", "latih", "mentah", "cadangan"],
    ["Model AI yang menghasilkan teks seperti chatbot disebut...", "large language model (LLM)", "database", "spreadsheet", "compiler"],
    ["Ketika model terlalu hafal data latih dan buruk pada data baru disebut...", "overfitting", "underfitting", "debugging", "hashing"],
    ["Teknik menulis instruksi yang jelas untuk AI generatif disebut...", "prompt engineering", "overclocking", "defragmentasi", "routing"],
    ["Jaringan saraf tiruan berlapis banyak disebut...", "deep learning", "big data", "cloud storage", "blockchain"],
    ["Contoh tugas klasifikasi adalah...", "menentukan email spam atau bukan", "menghitung luas", "mencetak dokumen", "mengirim email"],
    ["Prinsip etika AI agar keputusan AI dapat dipertanggungjawabkan disebut...", "akuntabilitas", "kecepatan", "estetika", "popularitas"],
    ["Library Python populer untuk analisis data tabel adalah...", "pandas", "flask", "pygame", "turtle"],
    ["Konten tiruan wajah/suara yang dibuat AI disebut...", "deepfake", "firewall", "cookie", "plugin"],
    ["Langkah pertama membangun model machine learning adalah...", "mengumpulkan data", "menyebarkan aplikasi", "membeli server", "membuat logo"]
  ],
  tf: [
    ["Overfitting membuat model buruk pada data baru.", true], ["AI generatif tidak mungkin keliru.", false],
    ["Deep learning menggunakan jaringan saraf berlapis.", true], ["Data latih dan data uji sebaiknya dipisah.", true],
    ["Deepfake selalu bisa dipercaya.", false], ["Pandas digunakan untuk analisis data.", true]
  ],
  pair: [[["Klasifikasi", "spam/bukan spam"], ["Regresi", "prediksi harga"], ["Clustering", "pengelompokan pelanggan"], ["LLM", "chatbot"], ["Computer vision", "pengenalan gambar"]]],
  ord: [["Urutkan siklus machine learning", ["Kumpulkan data", "Bersihkan data", "Latih model", "Evaluasi model", "Gunakan model"]]]
});
