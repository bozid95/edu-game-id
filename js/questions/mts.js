/* ============================================================
   BANK SOAL MTs (Madrasah Tsanawiyah, kelas 7–9)
   Mapel umum memakai bank SMP (setara Fase D).
   Mapel khas madrasah (Kurikulum Merdeka di madrasah, Kemenag):
   Al-Qur'an Hadis, Akidah Akhlak, Fikih, Sejarah Kebudayaan Islam, Bahasa Arab
   Teks Arab ditulis dalam transliterasi Latin agar terbaca di semua layar.
   ============================================================ */
const MTS = [7, 8, 9];

QB.add({
  jenjang: "MTs", kelas: MTS, mapel: "Al-Qur'an Hadis", elemen: "Tajwid, Pemahaman surah, Ilmu hadis",
  mc: [
    ["Huruf idgam bigunnah terkumpul dalam kata...", "yanmu (ya, nun, mim, wau)", "baju di toko", "lam dan ra", "alif lam"],
    ["Huruf idgam bilagunnah adalah...", "lam dan ra", "ya dan nun", "mim dan wau", "ba dan jim"],
    ["Huruf qalqalah terkumpul dalam kalimat...", "ba-ju di-to-ko (ba, jim, dal, tha, qaf)", "yanmu", "lam ra", "halq"],
    ["Mad thabi'i dibaca panjang ... harakat.", "2", "4", "6", "1"],
    ["Alif lam yang dibaca jelas disebut alif lam...", "qamariyah", "syamsiyah", "sukun", "tasydid"],
    ["Alif lam yang dibaca lebur ke huruf sesudahnya disebut alif lam...", "syamsiyah", "qamariyah", "fathah", "kasrah"],
    ["Wahyu pertama yang diterima Nabi Muhammad saw. adalah Surah...", "Al-'Alaq ayat 1–5", "Al-Fatihah", "Al-Baqarah", "An-Nas"],
    ["Wahyu pertama diturunkan di...", "Gua Hira", "Gua Tsur", "Masjid Nabawi", "Padang Arafah"],
    ["Surah terpanjang dalam Al-Qur'an adalah...", "Al-Baqarah", "Ali 'Imran", "Yasin", "Al-Kahfi"],
    ["Surah terpendek dalam Al-Qur'an adalah...", "Al-Kautsar", "Al-Ikhlas", "An-Nas", "Al-'Asr"],
    ["Ayat Kursi terdapat dalam Surah Al-Baqarah ayat...", "255", "1", "183", "286"],
    ["Surah Al-Ikhlas berisi tentang...", "keesaan Allah", "kisah nabi", "hukum waris", "hari kiamat saja"],
    ["Jumlah juz dalam Al-Qur'an adalah...", "30", "114", "40", "60"],
    ["Rangkaian perawi yang meriwayatkan hadis disebut...", "sanad", "matan", "rawi", "mukharrij"],
    ["Isi atau redaksi hadis disebut...", "matan", "sanad", "rawi", "takhrij"],
    ["Hadis yang memenuhi syarat tertinggi keabsahannya disebut hadis...", "sahih", "hasan", "daif", "maudu'"],
    ["Surah yang diturunkan sebelum hijrah disebut surah...", "Makkiyah", "Madaniyah", "Qudsiyah", "Nabawiyah"]
  ],
  tf: [
    ["Wahyu pertama turun di Gua Hira.", true], ["Mad thabi'i dibaca 6 harakat.", false],
    ["Al-Baqarah adalah surah terpanjang.", true], ["Matan adalah rangkaian perawi hadis.", false],
    ["Al-Qur'an terdiri dari 30 juz.", true], ["Huruf qalqalah ada lima.", true],
    ["Surah Madaniyah diturunkan sebelum hijrah.", false], ["Hadis sahih adalah tingkat tertinggi.", true]
  ],
  pair: [
    [["Izhar", "dibaca jelas"], ["Idgam", "dilebur"], ["Iqlab", "berubah menjadi mim"], ["Ikhfa", "dibaca samar"], ["Qalqalah", "dibaca memantul"]],
    [["Sanad", "rangkaian perawi"], ["Matan", "isi hadis"], ["Rawi", "periwayat"], ["Mukharrij", "pembukuan hadis"]],
    [["Al-Baqarah", "surah terpanjang"], ["Al-Kautsar", "surah terpendek"], ["Al-Fatihah", "Ummul Kitab"], ["Al-Ikhlas", "keesaan Allah"], ["Yasin", "jantung Al-Qur'an"]]
  ],
  ord: [
    ["Urutkan unsur hadis", ["Sanad", "Matan", "Rawi"]],
    ["Urutkan surah (mushaf) dari awal", ["Al-Fatihah", "Al-Baqarah", "Ali 'Imran", "An-Nisa'", "Al-Ma'idah"]]
  ]
});

QB.add({
  jenjang: "MTs", kelas: MTS, mapel: "Akidah Akhlak", elemen: "Sifat Allah & rasul, Rukun iman, Akhlak terpuji & tercela",
  mc: [
    ["Jumlah sifat wajib bagi Allah adalah...", "20", "13", "4", "99"],
    ["Sifat wajib Allah “wujud” artinya...", "ada", "kekal", "terdahulu", "berdiri sendiri"],
    ["Sifat wajib Allah “baqa'” artinya...", "kekal", "ada", "esa", "mendengar"],
    ["Sifat wajib Allah “qidam” artinya...", "terdahulu", "kekal", "berkuasa", "melihat"],
    ["Sifat wajib rasul berjumlah...", "4", "20", "6", "5"],
    ["Sifat wajib rasul “amanah” artinya...", "dapat dipercaya", "jujur", "menyampaikan", "cerdas"],
    ["Sifat wajib rasul “tabligh” artinya...", "menyampaikan", "jujur", "cerdas", "dapat dipercaya"],
    ["Sifat wajib rasul “fathanah” artinya...", "cerdas", "jujur", "menyampaikan", "sabar"],
    ["Akhlak terpuji disebut juga akhlak...", "mahmudah", "mazmumah", "riya", "hasad"],
    ["Sikap rendah hati disebut...", "tawaduk", "takabur", "riya", "hasad"],
    ["Sikap merasa cukup dengan pemberian Allah disebut...", "qana'ah", "tamak", "hasad", "ujub"],
    ["Sikap pamer dalam beribadah disebut...", "riya", "ikhlas", "tawaduk", "zuhud"],
    ["Sifat dengki terhadap nikmat orang lain disebut...", "hasad", "husnuzan", "qana'ah", "syukur"],
    ["Berprasangka baik disebut...", "husnuzan", "suuzan", "takabur", "namimah"],
    ["Mengadu domba disebut...", "namimah", "gibah", "husnuzan", "tawaduk"],
    ["Iman kepada qada dan qadar adalah rukun iman ke...", "6", "5", "4", "1"]
  ],
  tf: [
    ["Sifat wajib Allah berjumlah 20.", true], ["Tabligh artinya jujur.", false],
    ["Riya termasuk akhlak tercela.", true], ["Qana'ah artinya merasa cukup.", true],
    ["Husnuzan artinya berprasangka buruk.", false], ["Iman kepada qada dan qadar adalah rukun iman keenam.", true],
    ["Tawaduk berarti sombong.", false], ["Gibah adalah membicarakan keburukan orang lain.", true]
  ],
  pair: [
    [["Shiddiq", "jujur"], ["Amanah", "dapat dipercaya"], ["Tabligh", "menyampaikan"], ["Fathanah", "cerdas"]],
    [["Wujud", "ada"], ["Qidam", "terdahulu"], ["Baqa'", "kekal"], ["Wahdaniyah", "esa"], ["Qudrat", "berkuasa"]],
    [["Tawaduk", "rendah hati"], ["Takabur", "sombong"], ["Hasad", "dengki"], ["Namimah", "adu domba"], ["Qana'ah", "merasa cukup"]]
  ],
  ord: [["Urutkan rukun iman", ["Iman kepada Allah", "Malaikat", "Kitab", "Rasul", "Hari akhir", "Qada dan qadar"]]]
});

QB.add({
  jenjang: "MTs", kelas: MTS, mapel: "Fikih", elemen: "Taharah, Salat, Zakat, Puasa, Haji, Muamalah, Makanan halal",
  mc: [
    ["Najis ringan (mukhaffafah) contohnya...", "air kencing bayi laki-laki yang hanya minum ASI", "air liur anjing", "darah", "bangkai"],
    ["Najis berat (mugallazah) contohnya...", "anjing dan babi", "darah", "nanah", "kotoran ayam"],
    ["Najis mugallazah disucikan dengan dibasuh ... kali, salah satunya dengan tanah.", "7", "3", "1", "5"],
    ["Salat Jumat wajib bagi...", "laki-laki muslim balig dan mukim", "anak-anak", "musafir saja", "perempuan saja"],
    ["Jumlah khutbah dalam salat Jumat adalah...", "2", "1", "3", "4"],
    ["Sujud karena lupa dalam salat disebut sujud...", "sahwi", "tilawah", "syukur", "sajadah"],
    ["Meringkas salat empat rakaat menjadi dua rakaat disebut salat...", "qasar", "jamak", "jenazah", "sunah"],
    ["Menggabungkan dua salat dalam satu waktu disebut salat...", "jamak", "qasar", "witir", "duha"],
    ["Golongan penerima zakat (asnaf) berjumlah...", "8", "5", "4", "10"],
    ["Nisab zakat emas adalah...", "85 gram", "20 gram", "100 gram", "50 gram"],
    ["Kadar zakat mal (harta) umumnya adalah...", "2,5%", "10%", "5%", "20%"],
    ["Wukuf dalam ibadah haji dilaksanakan di...", "Padang Arafah", "Mina", "Muzdalifah", "Masjidil Haram"],
    ["Berlari kecil antara bukit Safa dan Marwah disebut...", "sa'i", "tawaf", "wukuf", "tahalul"],
    ["Mengelilingi Ka'bah tujuh kali disebut...", "tawaf", "sa'i", "ihram", "jumrah"],
    ["Hukum makan bangkai (kecuali ikan dan belalang) adalah...", "haram", "halal", "sunah", "makruh"],
    ["Jual beli yang mengandung riba hukumnya...", "haram", "wajib", "sunah", "mubah"]
  ],
  tf: [
    ["Salat qasar meringkas salat empat rakaat menjadi dua.", true], ["Penerima zakat ada 5 golongan.", false],
    ["Wukuf dilaksanakan di Padang Arafah.", true], ["Sujud sahwi dilakukan karena lupa dalam salat.", true],
    ["Najis anjing cukup dibasuh sekali dengan air.", false], ["Ikan dan belalang halal walaupun sudah mati.", true],
    ["Khutbah Jumat ada dua.", true], ["Kadar zakat mal umumnya 10%.", false]
  ],
  pair: [
    [["Mukhaffafah", "najis ringan"], ["Mutawassitah", "najis sedang"], ["Mugallazah", "najis berat"]],
    [["Tawaf", "mengelilingi Ka'bah"], ["Sa'i", "Safa–Marwah"], ["Wukuf", "Arafah"], ["Ihram", "niat & pakaian ihram"], ["Tahalul", "mencukur rambut"]],
    [["Qasar", "meringkas rakaat"], ["Jamak", "menggabung waktu"], ["Sahwi", "sujud karena lupa"], ["Tilawah", "sujud bacaan ayat sajdah"], ["Syukur", "sujud karena nikmat"]]
  ],
  ord: [
    ["Urutkan rukun haji", ["Ihram", "Wukuf di Arafah", "Tawaf ifadah", "Sa'i", "Tahalul"]],
    ["Urutkan tata cara wudu", ["Niat", "Membasuh muka", "Membasuh tangan sampai siku", "Mengusap kepala", "Membasuh kaki"]]
  ]
});

QB.add({
  jenjang: "MTs", kelas: MTS, mapel: "Sejarah Kebudayaan Islam", elemen: "Sejarah Nabi, Khulafaur Rasyidin, Dinasti Umayyah & Abbasiyah, Islam di Nusantara",
  mc: [
    ["Nabi Muhammad saw. lahir pada Tahun...", "Gajah (570 M)", "Hijriah", "Kesedihan", "Fathu Makkah"],
    ["Perang pertama umat Islam yang dimenangkan pada tahun 2 H adalah Perang...", "Badar", "Uhud", "Khandaq", "Hunain"],
    ["Penaklukan kota Makkah (Fathu Makkah) terjadi tahun...", "8 H (630 M)", "1 H", "2 H", "11 H"],
    ["Perjanjian damai antara kaum muslimin dan Quraisy tahun 6 H adalah perjanjian...", "Hudaibiyah", "Aqabah", "Madinah", "Taif"],
    ["Pendiri Dinasti Umayyah adalah...", "Mu'awiyah bin Abu Sufyan", "Abu Abbas as-Saffah", "Harun ar-Rasyid", "Umar bin Abdul Aziz"],
    ["Ibu kota Dinasti Umayyah adalah...", "Damaskus", "Baghdad", "Kairo", "Makkah"],
    ["Ibu kota Dinasti Abbasiyah adalah...", "Baghdad", "Damaskus", "Kordoba", "Madinah"],
    ["Pusat ilmu pengetahuan terkenal pada masa Abbasiyah adalah...", "Baitul Hikmah", "Al-Azhar", "Nizamiyah", "Masjid Kudus"],
    ["Ilmuwan muslim yang dikenal sebagai bapak kedokteran modern dengan kitab Al-Qanun adalah...", "Ibnu Sina", "Al-Khawarizmi", "Ibnu Khaldun", "Al-Farabi"],
    ["Ilmuwan muslim penemu aljabar adalah...", "Al-Khawarizmi", "Ibnu Sina", "Ibnu Rusyd", "Al-Kindi"],
    ["Khalifah Umayyah yang terkenal adil dan zuhud adalah...", "Umar bin Abdul Aziz", "Mu'awiyah", "Yazid bin Mu'awiyah", "Marwan bin Hakam"],
    ["Kerajaan Islam pertama di Indonesia adalah...", "Samudra Pasai", "Demak", "Mataram Islam", "Banten"],
    ["Wali Songo yang dianggap tertua dan dimakamkan di Gresik adalah...", "Sunan Gresik (Maulana Malik Ibrahim)", "Sunan Kudus", "Sunan Muria", "Sunan Drajat"],
    ["Penghimpunan Al-Qur'an menjadi satu mushaf standar dilakukan pada masa khalifah...", "Usman bin Affan", "Abu Bakar", "Ali bin Abi Thalib", "Umar bin Khattab"]
  ],
  tf: [
    ["Nabi Muhammad saw. lahir pada Tahun Gajah.", true], ["Ibu kota Dinasti Abbasiyah adalah Damaskus.", false],
    ["Ibnu Sina dikenal sebagai ahli kedokteran.", true], ["Samudra Pasai adalah kerajaan Islam pertama di Indonesia.", true],
    ["Perang Badar terjadi setelah Fathu Makkah.", false], ["Baitul Hikmah berada di Baghdad.", true],
    ["Mu'awiyah adalah pendiri Dinasti Abbasiyah.", false], ["Sunan Kalijaga termasuk Wali Songo.", true]
  ],
  pair: [
    [["Umayyah", "Damaskus"], ["Abbasiyah", "Baghdad"], ["Umayyah Andalusia", "Kordoba"], ["Fatimiyah", "Kairo"]],
    [["Ibnu Sina", "kedokteran"], ["Al-Khawarizmi", "aljabar"], ["Ibnu Khaldun", "sosiologi/sejarah"], ["Al-Biruni", "astronomi"], ["Ibnu Rusyd", "filsafat"]],
    [["Sunan Gresik", "Maulana Malik Ibrahim"], ["Sunan Ampel", "Raden Rahmat"], ["Sunan Kalijaga", "Raden Said"], ["Sunan Bonang", "Makhdum Ibrahim"], ["Sunan Gunung Jati", "Syarif Hidayatullah"]]
  ],
  ord: [
    ["Urutkan peristiwa (paling awal)", ["Kelahiran Nabi", "Wahyu pertama", "Hijrah ke Madinah", "Perang Badar", "Fathu Makkah"]],
    ["Urutkan dinasti (paling awal)", ["Khulafaur Rasyidin", "Dinasti Umayyah", "Dinasti Abbasiyah", "Turki Usmani"]]
  ]
});

QB.add({
  jenjang: "MTs", kelas: MTS, mapel: "Bahasa Arab", elemen: "Mufradat (kosakata), Ta'aruf, Al-'adad (bilangan), Hari, Warna",
  mc: [
    ["“Madrasah” artinya...", "sekolah", "masjid", "rumah", "pasar"],
    ["“Kitab” artinya...", "buku", "pena", "meja", "papan tulis"],
    ["“Qalam” artinya...", "pena", "buku", "kursi", "tas"],
    ["“Mu'allim” artinya...", "guru (laki-laki)", "siswa", "kepala sekolah", "petani"],
    ["“Thalib” artinya...", "siswa (laki-laki)", "guru", "dokter", "pedagang"],
    ["“Maktabah” artinya...", "perpustakaan", "kantin", "kelas", "lapangan"],
    ["“Syukran” artinya...", "terima kasih", "maaf", "selamat pagi", "selamat tinggal"],
    ["“Shabahul khair” artinya...", "selamat pagi", "selamat malam", "apa kabar", "terima kasih"],
    ["Angka 3 dalam bahasa Arab adalah...", "tsalatsah", "itsnan", "arba'ah", "khamsah"],
    ["Angka 5 dalam bahasa Arab adalah...", "khamsah", "sittah", "sab'ah", "wahid"],
    ["Hari Senin dalam bahasa Arab adalah...", "al-itsnain", "al-ahad", "ats-tsulatsa'", "al-khamis"],
    ["Hari Jumat dalam bahasa Arab adalah...", "al-jum'ah", "as-sabt", "al-arbi'a'", "al-ahad"],
    ["“Ana” artinya...", "saya", "kamu", "dia", "kami"],
    ["“Huwa” artinya...", "dia (laki-laki)", "dia (perempuan)", "saya", "kamu"],
    ["Warna “abyadh” artinya...", "putih", "hitam", "merah", "hijau"],
    ["Warna “ahmar” artinya...", "merah", "biru", "kuning", "putih"]
  ],
  tf: [
    ["“Madrasah” artinya sekolah.", true], ["“Qalam” artinya buku.", false],
    ["“Syukran” artinya terima kasih.", true], ["“Itsnan” artinya tiga.", false],
    ["“Al-ahad” adalah hari Minggu.", true], ["“Aswad” artinya hitam.", true],
    ["“Hiya” artinya dia laki-laki.", false], ["“Maktabah” artinya perpustakaan.", true]
  ],
  pair: [
    [["wahid", "1"], ["itsnan", "2"], ["tsalatsah", "3"], ["arba'ah", "4"], ["khamsah", "5"]],
    [["abyadh", "putih"], ["aswad", "hitam"], ["ahmar", "merah"], ["akhdhar", "hijau"], ["azraq", "biru"]],
    [["madrasah", "sekolah"], ["kitab", "buku"], ["qalam", "pena"], ["bait", "rumah"], ["maktabah", "perpustakaan"]]
  ],
  ord: [
    ["Urutkan nama hari dari Minggu", ["al-ahad", "al-itsnain", "ats-tsulatsa'", "al-arbi'a'", "al-khamis"]],
    ["Urutkan bilangan", ["wahid", "itsnan", "tsalatsah", "arba'ah", "khamsah"]]
  ]
});
