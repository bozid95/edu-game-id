/* ============================================================
   PENDIDIKAN AGAMA DAN BUDI PEKERTI – fakta dasar per agama
   (CP Agama diperbarui Kemendikdasmen Juni 2026; guru disarankan
   menambah soal sesuai buku ajar melalui Bank Soal Guru)
   ============================================================ */
const SDK = [1, 2, 3, 4, 5, 6], MENENGAH = [7, 8, 9, 10, 11, 12], SEMUA = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

/* ---------------- ISLAM ---------------- */
QB.add({
  kelas: SDK, mapel: "PA Islam", elemen: "Al-Qur'an & hadis, Akidah, Akhlak, Fikih, Sejarah peradaban Islam",
  mc: [
    ["Rukun Islam ada ... perkara.", "5", "6", "4", "7"],
    ["Rukun Iman ada ... perkara.", "6", "5", "4", "7"],
    ["Kitab suci umat Islam adalah...", "Al-Qur'an", "Taurat", "Zabur", "Injil"],
    ["Nabi dan rasul terakhir adalah...", "Nabi Muhammad saw.", "Nabi Isa as.", "Nabi Musa as.", "Nabi Ibrahim as."],
    ["Salat fardu dikerjakan ... kali sehari semalam.", "5", "3", "4", "7"],
    ["Jumlah rakaat salat Subuh adalah...", "2", "3", "4", "1"],
    ["Jumlah rakaat salat Magrib adalah...", "3", "2", "4", "5"],
    ["Jumlah rakaat salat Isya adalah...", "4", "3", "2", "5"],
    ["Malaikat yang menyampaikan wahyu adalah...", "Jibril", "Mikail", "Israfil", "Izrail"],
    ["Kitab Taurat diturunkan kepada...", "Nabi Musa as.", "Nabi Daud as.", "Nabi Isa as.", "Nabi Muhammad saw."],
    ["Kitab Zabur diturunkan kepada...", "Nabi Daud as.", "Nabi Musa as.", "Nabi Isa as.", "Nabi Nuh as."],
    ["Surah pertama dalam Al-Qur'an adalah...", "Al-Fatihah", "Al-Baqarah", "An-Nas", "Al-Ikhlas"],
    ["Jumlah surah dalam Al-Qur'an adalah...", "114", "30", "99", "6.236"],
    ["Puasa wajib dilaksanakan pada bulan...", "Ramadan", "Syawal", "Muharam", "Rajab"],
    ["Hari Raya Idulfitri jatuh pada tanggal...", "1 Syawal", "10 Zulhijah", "1 Muharam", "27 Rajab"],
    ["Bersuci sebelum salat dengan air disebut...", "wudu", "tayamum", "mandi", "istinja"],
    ["Bersuci dengan debu sebagai pengganti wudu disebut...", "tayamum", "wudu", "mandi wajib", "istinja"],
    ["Kota kelahiran Nabi Muhammad saw. adalah...", "Makkah", "Madinah", "Thaif", "Yerusalem"]
  ],
  tf: [
    ["Rukun Islam yang pertama adalah syahadat.", true], ["Salat Magrib berjumlah 4 rakaat.", false],
    ["Al-Qur'an terdiri dari 114 surah.", true], ["Malaikat Jibril bertugas menyampaikan wahyu.", true],
    ["Kitab Injil diturunkan kepada Nabi Musa as.", false], ["Puasa wajib dilaksanakan di bulan Ramadan.", true],
    ["Tayamum menggunakan debu yang suci.", true], ["Nabi Muhammad saw. lahir di Madinah.", false]
  ],
  pair: [
    [["Taurat", "Nabi Musa"], ["Zabur", "Nabi Daud"], ["Injil", "Nabi Isa"], ["Al-Qur'an", "Nabi Muhammad"]],
    [["Subuh", "2 rakaat"], ["Magrib", "3 rakaat"], ["Isya", "4 rakaat"]],
    [["Jibril", "menyampaikan wahyu"], ["Mikail", "membagi rezeki"], ["Israfil", "meniup sangkakala"], ["Izrail", "mencabut nyawa"], ["Raqib", "mencatat amal baik"]]
  ],
  ord: [
    ["Urutkan rukun Islam", ["Syahadat", "Salat", "Zakat", "Puasa", "Haji"]],
    ["Urutkan gerakan awal wudu", ["Niat", "Membasuh muka", "Membasuh tangan", "Mengusap kepala", "Membasuh kaki"]],
    ["Urutkan waktu salat dari pagi", ["Subuh", "Zuhur", "Asar", "Magrib", "Isya"]]
  ]
});
QB.add({
  kelas: MENENGAH, mapel: "PA Islam", elemen: "Tajwid, Asmaulhusna, Fikih ibadah & muamalah, Sejarah Islam",
  mc: [
    ["Nun mati/tanwin bertemu huruf ba disebut hukum...", "iqlab", "izhar", "idgam", "ikhfa"],
    ["Huruf ikhfa haqiqi berjumlah...", "15", "6", "4", "1"],
    ["Huruf izhar halqi berjumlah...", "6", "15", "4", "2"],
    ["Jumlah Asmaulhusna adalah...", "99", "100", "25", "114"],
    ["Ar-Rahman artinya Allah Maha...", "Pengasih", "Kuasa", "Mengetahui", "Adil"],
    ["Khalifah pertama setelah Nabi Muhammad saw. wafat adalah...", "Abu Bakar ash-Shiddiq", "Umar bin Khattab", "Usman bin Affan", "Ali bin Abi Thalib"],
    ["Hijrah Nabi ke Madinah terjadi pada tahun...", "622 M", "570 M", "610 M", "632 M"],
    ["Najis mugallazah (berat) contohnya...", "air liur anjing", "air kencing bayi laki-laki yang hanya minum ASI", "darah sedikit", "debu"],
    ["Zakat fitrah dikeluarkan berupa...", "makanan pokok", "emas", "kendaraan", "rumah"],
    ["Ibadah haji dilaksanakan di bulan...", "Zulhijah", "Ramadan", "Syawal", "Muharam"],
    ["Jual beli dengan cara riba hukumnya...", "haram", "wajib", "sunah", "mubah"],
    ["Sikap jujur dalam bahasa Arab disebut...", "shiddiq", "amanah", "tabligh", "fathanah"],
    ["Wali Songo yang dikenal berdakwah dengan wayang adalah...", "Sunan Kalijaga", "Sunan Ampel", "Sunan Giri", "Sunan Gresik"]
  ],
  tf: [
    ["Nun mati bertemu ba disebut iqlab.", true], ["Asmaulhusna berjumlah 99.", true],
    ["Khalifah pertama adalah Umar bin Khattab.", false], ["Riba diharamkan dalam Islam.", true],
    ["Haji dilaksanakan di bulan Ramadan.", false], ["Sunan Kalijaga berdakwah melalui wayang.", true]
  ],
  pair: [
    [["Izhar", "jelas"], ["Idgam", "melebur"], ["Iqlab", "mengganti jadi mim"], ["Ikhfa", "samar"]],
    [["Abu Bakar", "khalifah 1"], ["Umar bin Khattab", "khalifah 2"], ["Usman bin Affan", "khalifah 3"], ["Ali bin Abi Thalib", "khalifah 4"]],
    [["Ar-Rahman", "Maha Pengasih"], ["Al-'Alim", "Maha Mengetahui"], ["Al-'Adl", "Maha Adil"], ["Al-Qadir", "Maha Kuasa"], ["Al-Ghaffar", "Maha Pengampun"]]
  ],
  ord: [["Urutkan Khulafaur Rasyidin", ["Abu Bakar", "Umar bin Khattab", "Usman bin Affan", "Ali bin Abi Thalib"]]]
});

/* ---------------- KRISTEN ---------------- */
QB.add({
  kelas: SEMUA, mapel: "PA Kristen", elemen: "Allah Tritunggal, Alkitab, Nilai kristiani, Gereja",
  mc: [
    ["Kitab suci umat Kristen adalah...", "Alkitab", "Weda", "Tripitaka", "Si Shu"],
    ["Alkitab terdiri atas Perjanjian Lama dan...", "Perjanjian Baru", "Kitab Mazmur", "Kitab Wahyu", "Kitab Kejadian"],
    ["Kitab pertama dalam Alkitab adalah...", "Kejadian", "Keluaran", "Matius", "Wahyu"],
    ["Kitab terakhir dalam Alkitab adalah...", "Wahyu", "Kejadian", "Yohanes", "Kisah Para Rasul"],
    ["Jumlah kitab Perjanjian Baru adalah...", "27", "39", "66", "12"],
    ["Yesus Kristus lahir di kota...", "Betlehem", "Nazaret", "Yerusalem", "Roma"],
    ["Hari Natal memperingati...", "kelahiran Yesus", "kebangkitan Yesus", "turunnya Roh Kudus", "kenaikan Yesus"],
    ["Hari Paskah memperingati...", "kebangkitan Yesus", "kelahiran Yesus", "turunnya Roh Kudus", "penciptaan dunia"],
    ["Hari Pentakosta memperingati...", "turunnya Roh Kudus", "kelahiran Yesus", "kebangkitan Yesus", "Yesus disalib"],
    ["Jumlah murid Yesus (rasul) adalah...", "12", "7", "10", "40"],
    ["Sepuluh Perintah Allah diterima oleh...", "Musa", "Nuh", "Daud", "Abraham"],
    ["Tokoh yang membangun bahtera besar adalah...", "Nuh", "Musa", "Yunus", "Daud"],
    ["Daud mengalahkan raksasa bernama...", "Goliat", "Firaun", "Herodes", "Saul"],
    ["Doa yang diajarkan Yesus kepada murid-murid-Nya adalah doa...", "Bapa Kami", "Salam Maria", "Rosario", "Syukur"]
  ],
  tf: [
    ["Yesus lahir di Betlehem.", true], ["Kitab pertama Alkitab adalah Wahyu.", false],
    ["Perjanjian Baru terdiri atas 27 kitab.", true], ["Paskah memperingati kelahiran Yesus.", false],
    ["Nuh membangun bahtera.", true], ["Yesus memiliki 12 murid.", true]
  ],
  pair: [
    [["Natal", "kelahiran Yesus"], ["Jumat Agung", "Yesus wafat"], ["Paskah", "kebangkitan Yesus"], ["Kenaikan", "Yesus naik ke surga"], ["Pentakosta", "turunnya Roh Kudus"]],
    [["Musa", "Sepuluh Perintah"], ["Nuh", "bahtera"], ["Daud", "Goliat"], ["Yunus", "ikan besar"], ["Abraham", "bapa orang beriman"]]
  ],
  ord: [
    ["Urutkan empat Injil", ["Matius", "Markus", "Lukas", "Yohanes"]],
    ["Urutkan peristiwa", ["Natal", "Jumat Agung", "Paskah", "Kenaikan", "Pentakosta"]]
  ]
});

/* ---------------- KATOLIK ---------------- */
QB.add({
  kelas: SEMUA, mapel: "PA Katolik", elemen: "Pribadi, Yesus Kristus, Gereja, Masyarakat",
  mc: [
    ["Jumlah sakramen dalam Gereja Katolik adalah...", "7", "5", "3", "12"],
    ["Sakramen pertama yang diterima seseorang adalah...", "Baptis", "Krisma", "Ekaristi", "Perkawinan"],
    ["Pemimpin tertinggi Gereja Katolik sedunia adalah...", "Paus", "Uskup", "Pastor", "Diakon"],
    ["Paus berkedudukan di...", "Vatikan", "Yerusalem", "Paris", "Jakarta"],
    ["Ibu Yesus adalah...", "Bunda Maria", "Elisabet", "Marta", "Maria Magdalena"],
    ["Doa yang menggunakan untaian manik-manik adalah doa...", "Rosario", "Bapa Kami", "Syahadat", "Angelus"],
    ["Masa Prapaskah diawali dengan...", "Rabu Abu", "Minggu Palma", "Kamis Putih", "Natal"],
    ["Lama masa Prapaskah adalah ... hari.", "40", "7", "30", "50"],
    ["Allah Bapa, Putra, dan Roh Kudus disebut...", "Tritunggal Mahakudus", "Trimurti", "Triratna", "Tri Hita Karana"],
    ["Pemimpin keuskupan disebut...", "uskup", "paus", "pastor paroki", "katekis"],
    ["Minggu Palma memperingati...", "Yesus dielu-elukan masuk Yerusalem", "kelahiran Yesus", "Yesus naik ke surga", "turunnya Roh Kudus"]
  ],
  tf: [
    ["Gereja Katolik memiliki 7 sakramen.", true], ["Paus berkedudukan di Vatikan.", true],
    ["Masa Prapaskah diawali Rabu Abu.", true], ["Rosario adalah sakramen.", false],
    ["Baptis adalah sakramen inisiasi.", true], ["Masa Prapaskah berlangsung 7 hari.", false]
  ],
  pair: [
    [["Baptis", "inisiasi pertama"], ["Ekaristi", "Tubuh dan Darah Kristus"], ["Krisma", "penguatan"], ["Tobat", "pengampunan dosa"], ["Pengurapan orang sakit", "penghiburan"]]
  ],
  ord: [["Urutkan Pekan Suci", ["Minggu Palma", "Kamis Putih", "Jumat Agung", "Malam Paskah"]]]
});

/* ---------------- HINDU ---------------- */
QB.add({
  kelas: SEMUA, mapel: "PA Hindu", elemen: "Tattwa, Susila, Acara, Sejarah",
  mc: [
    ["Kitab suci agama Hindu adalah...", "Weda", "Tripitaka", "Alkitab", "Si Shu"],
    ["Tempat ibadah umat Hindu adalah...", "pura", "vihara", "gereja", "litang"],
    ["Sebutan Tuhan Yang Maha Esa dalam agama Hindu adalah...", "Ida Sang Hyang Widhi Wasa", "Tian", "Sang Buddha", "Dewa Indra"],
    ["Tri Murti terdiri atas Brahma, Wisnu, dan...", "Siwa", "Indra", "Ganesha", "Surya"],
    ["Dewa Brahma berperan sebagai...", "pencipta", "pemelihara", "pelebur", "pelindung"],
    ["Dewa Wisnu berperan sebagai...", "pemelihara", "pencipta", "pelebur", "pembawa hujan"],
    ["Hari Raya Nyepi adalah perayaan...", "Tahun Baru Saka", "kemenangan dharma", "hari ilmu pengetahuan", "hari lahir Krisna"],
    ["Hari Raya Galungan memperingati...", "kemenangan dharma atas adharma", "Tahun Baru Saka", "turunnya ilmu pengetahuan", "panen raya"],
    ["Panca Sradha adalah ... keyakinan dalam agama Hindu.", "lima", "tiga", "empat", "delapan"],
    ["Hukum sebab-akibat perbuatan disebut...", "karmaphala", "moksa", "punarbhawa", "atman"],
    ["Tri Kaya Parisudha artinya tiga perbuatan baik: berpikir, berkata, dan...", "berbuat", "berdoa", "berpuasa", "bernyanyi"],
    ["Tri Hita Karana adalah tiga penyebab...", "kebahagiaan", "penderitaan", "kelahiran", "kematian"]
  ],
  tf: [
    ["Kitab suci agama Hindu adalah Weda.", true], ["Dewa Siwa berperan sebagai pencipta.", false],
    ["Nyepi adalah Tahun Baru Saka.", true], ["Karmaphala adalah hukum sebab-akibat.", true],
    ["Tempat ibadah umat Hindu disebut vihara.", false], ["Tri Hita Karana mencakup hubungan dengan alam.", true]
  ],
  pair: [
    [["Brahma", "pencipta"], ["Wisnu", "pemelihara"], ["Siwa", "pelebur"]],
    [["Manacika", "berpikir baik"], ["Wacika", "berkata baik"], ["Kayika", "berbuat baik"]],
    [["Nyepi", "Tahun Baru Saka"], ["Galungan", "kemenangan dharma"], ["Saraswati", "turunnya ilmu pengetahuan"], ["Kuningan", "penutup Galungan"]]
  ],
  ord: [["Urutkan Catur Purusa Artha", ["Dharma", "Artha", "Kama", "Moksa"]]]
});

/* ---------------- BUDDHA ---------------- */
QB.add({
  kelas: SEMUA, mapel: "PA Buddha", elemen: "Sejarah, Ajaran (Dhamma), Etika, Tempat suci",
  mc: [
    ["Kitab suci agama Buddha adalah...", "Tripitaka (Tipitaka)", "Weda", "Alkitab", "Wu Jing"],
    ["Tempat ibadah umat Buddha adalah...", "vihara", "pura", "gereja", "masjid"],
    ["Nama kecil Buddha Gautama adalah...", "Siddharta", "Ananda", "Asoka", "Rahula"],
    ["Pangeran Siddharta lahir di Taman...", "Lumbini", "Bodhgaya", "Kusinara", "Sarnath"],
    ["Siddharta mencapai pencerahan di bawah pohon...", "Bodhi", "beringin", "cemara", "jati"],
    ["Hari Raya Waisak memperingati ... peristiwa suci.", "tiga", "dua", "lima", "empat"],
    ["Triratna terdiri atas Buddha, Dhamma, dan...", "Sangha", "Karma", "Nirwana", "Sila"],
    ["Ajaran tentang penderitaan dan cara mengakhirinya disebut...", "Empat Kebenaran Mulia", "Pancasila Buddhis", "Tri Murti", "Wu Chang"],
    ["Jalan Mulia dalam ajaran Buddha berunsur...", "delapan", "lima", "empat", "tiga"],
    ["Pancasila Buddhis berisi ... latihan moral.", "lima", "delapan", "sepuluh", "tiga"],
    ["Candi Buddha terbesar di dunia yang ada di Indonesia adalah...", "Borobudur", "Prambanan", "Penataran", "Sewu"]
  ],
  tf: [
    ["Kitab suci agama Buddha adalah Tripitaka.", true], ["Siddharta lahir di Taman Lumbini.", true],
    ["Waisak memperingati satu peristiwa saja.", false], ["Triratna terdiri atas Buddha, Dhamma, dan Sangha.", true],
    ["Borobudur adalah candi Hindu.", false], ["Jalan Mulia berunsur delapan.", true]
  ],
  pair: [
    [["Lumbini", "kelahiran"], ["Bodhgaya", "pencerahan"], ["Sarnath", "khotbah pertama"], ["Kusinara", "parinibbana"]],
    [["Buddha", "guru agung"], ["Dhamma", "ajaran"], ["Sangha", "persaudaraan para bhikkhu"]]
  ],
  ord: [["Urutkan peristiwa yang diperingati saat Waisak", ["Kelahiran Siddharta", "Pencerahan sempurna", "Parinibbana"]]]
});

/* ---------------- KHONGHUCU ---------------- */
QB.add({
  kelas: SEMUA, mapel: "PA Khonghucu", elemen: "Keimanan, Kitab suci, Kebajikan, Peribadahan",
  mc: [
    ["Kitab suci agama Khonghucu adalah Si Shu dan...", "Wu Jing", "Weda", "Tripitaka", "Alkitab"],
    ["Si Shu disebut juga Kitab Yang...", "Empat", "Lima", "Tiga", "Delapan"],
    ["Wu Jing disebut juga Kitab Yang...", "Lima", "Empat", "Enam", "Dua"],
    ["Nabi dalam agama Khonghucu adalah...", "Kongzi", "Mengzi", "Laozi", "Buddha"],
    ["Tempat ibadah umat Khonghucu adalah...", "litang/kelenteng", "pura", "vihara", "gereja"],
    ["Sebutan Tuhan Yang Maha Esa dalam agama Khonghucu adalah...", "Tian", "Widhi", "Brahma", "Dhamma"],
    ["Hari raya Tahun Baru dalam agama Khonghucu adalah...", "Imlek", "Nyepi", "Waisak", "Natal"],
    ["Cap Go Meh dirayakan pada hari ke-... setelah Tahun Baru Imlek.", "15", "7", "10", "30"],
    ["Wu Chang adalah ... kebajikan utama.", "lima", "delapan", "tiga", "empat"],
    ["Kebajikan “Ren” berarti...", "cinta kasih", "kebenaran", "kesusilaan", "dapat dipercaya"],
    ["Kebajikan “Xin” berarti...", "dapat dipercaya", "cinta kasih", "bijaksana", "kesusilaan"]
  ],
  tf: [
    ["Nabi agama Khonghucu adalah Kongzi.", true], ["Si Shu disebut Kitab Yang Lima.", false],
    ["Imlek adalah Tahun Baru dalam agama Khonghucu.", true], ["Ren berarti cinta kasih.", true],
    ["Tempat ibadah umat Khonghucu disebut pura.", false], ["Wu Chang terdiri dari lima kebajikan.", true]
  ],
  pair: [[["Ren", "cinta kasih"], ["Yi", "kebenaran"], ["Li", "kesusilaan"], ["Zhi", "kebijaksanaan"], ["Xin", "dapat dipercaya"]]],
  ord: [["Urutkan perayaan", ["Tahun Baru Imlek", "Cap Go Meh"]]]
});
