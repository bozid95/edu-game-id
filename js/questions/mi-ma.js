/* ============================================================
   BANK SOAL MI (Madrasah Ibtidaiyah, kelas 1–6) & MA (Madrasah Aliyah, kelas 10–12)
   Mapel umum MI memakai bank SD; mapel umum MA memakai bank SMA.
   Berikut mapel rumpun PAI khas madrasah per jenjang.
   ============================================================ */
const MI = [1, 2, 3, 4, 5, 6], MA = [10, 11, 12];

/* ======================= MI ======================= */
QB.add({
  jenjang: "MI", kelas: MI, mapel: "Al-Qur'an Hadis", elemen: "Huruf hijaiah, Surah pendek, Hadis pilihan",
  mc: [
    ["Jumlah huruf hijaiah yang umum diajarkan adalah...", "28 (atau 30 dengan lam alif & hamzah)", "26", "20", "35"],
    ["Huruf hijaiah pertama adalah...", "alif", "ba", "ta", "jim"],
    ["Huruf hijaiah terakhir adalah...", "ya", "wau", "ha", "nun"],
    ["Tanda baca a dalam huruf Arab disebut...", "fathah", "kasrah", "dammah", "sukun"],
    ["Tanda baca i dalam huruf Arab disebut...", "kasrah", "fathah", "dammah", "tasydid"],
    ["Tanda baca u dalam huruf Arab disebut...", "dammah", "fathah", "kasrah", "sukun"],
    ["Surah Al-Fatihah terdiri atas ... ayat.", "7", "5", "6", "4"],
    ["Surah Al-Ikhlas terdiri atas ... ayat.", "4", "3", "5", "7"],
    ["Surah An-Nas adalah surah ke-... dalam Al-Qur'an.", "114", "1", "113", "100"],
    ["Surah yang berisi perintah memohon perlindungan dari kejahatan bisikan setan adalah...", "An-Nas", "Al-Kautsar", "Al-Lahab", "An-Nasr"],
    ["Bacaan “Bismillahirrahmanirrahim” disebut...", "basmalah", "hamdalah", "takbir", "tahlil"],
    ["Bacaan “Alhamdulillah” disebut...", "hamdalah", "basmalah", "tasbih", "istigfar"]
  ],
  tf: [["Al-Fatihah terdiri atas 7 ayat.", true], ["Huruf hijaiah pertama adalah ba.", false], ["Fathah dibaca a.", true], ["Basmalah diucapkan saat memulai kegiatan baik.", true], ["Al-Ikhlas terdiri atas 7 ayat.", false]],
  pair: [[["Fathah", "a"], ["Kasrah", "i"], ["Dammah", "u"], ["Sukun", "mati"], ["Tasydid", "ganda"]], [["Basmalah", "Bismillah"], ["Hamdalah", "Alhamdulillah"], ["Takbir", "Allahu Akbar"], ["Tasbih", "Subhanallah"], ["Istigfar", "Astagfirullah"]]],
  ord: [["Urutkan huruf hijaiah", ["alif", "ba", "ta", "tsa", "jim"]], ["Urutkan surah dari akhir mushaf", ["An-Nas", "Al-Falaq", "Al-Ikhlas", "Al-Lahab"]]]
});
QB.add({
  jenjang: "MI", kelas: MI, mapel: "Akidah Akhlak", elemen: "Kalimat tayibah, Rukun iman, Asmaulhusna, Akhlak sehari-hari",
  mc: [
    ["Kalimat “La ilaha illallah” disebut kalimat...", "tahlil", "tasbih", "takbir", "hamdalah"],
    ["Kalimat “Allahu Akbar” disebut...", "takbir", "tahmid", "tasbih", "basmalah"],
    ["Rukun iman yang pertama adalah iman kepada...", "Allah", "malaikat", "kitab", "rasul"],
    ["Asmaulhusna Al-Khaliq artinya Allah Maha...", "Pencipta", "Pengasih", "Kaya", "Melihat"],
    ["Asmaulhusna Ar-Razzaq artinya Allah Maha...", "Pemberi rezeki", "Pengampun", "Esa", "Adil"],
    ["Sikap saat bertemu teman adalah...", "mengucapkan salam", "berpaling", "mengejek", "diam saja"],
    ["Jawaban salam “Assalamu'alaikum” adalah...", "Wa'alaikumussalam", "Alhamdulillah", "Bismillah", "Amin"],
    ["Adab makan yang baik adalah menggunakan tangan...", "kanan", "kiri", "kedua tangan", "sendok saja"],
    ["Berkata jujur termasuk akhlak...", "terpuji", "tercela", "biasa", "buruk"],
    ["Jumlah nabi dan rasul yang wajib diketahui adalah...", "25", "10", "4", "99"]
  ],
  tf: [["Rukun iman ada 6.", true], ["Makan sebaiknya dengan tangan kiri.", false], ["Al-Khaliq artinya Maha Pencipta.", true], ["Mengucapkan salam saat bertemu teman adalah akhlak terpuji.", true], ["Takbir berbunyi Subhanallah.", false]],
  pair: [[["Tahlil", "La ilaha illallah"], ["Takbir", "Allahu Akbar"], ["Tasbih", "Subhanallah"], ["Tahmid", "Alhamdulillah"]], [["Al-Khaliq", "Maha Pencipta"], ["Ar-Razzaq", "Maha Pemberi rezeki"], ["Ar-Rahim", "Maha Penyayang"], ["As-Sami'", "Maha Mendengar"], ["Al-Bashir", "Maha Melihat"]]],
  ord: [["Urutkan rukun iman", ["Allah", "Malaikat", "Kitab", "Rasul", "Hari akhir", "Qada dan qadar"]]]
});
QB.add({
  jenjang: "MI", kelas: MI, mapel: "Fikih", elemen: "Bersuci, Salat, Azan, Puasa, Zakat fitrah",
  mc: [
    ["Bersuci dari hadas kecil dilakukan dengan...", "wudu", "mandi wajib", "tayamum saja", "istinja"],
    ["Seruan untuk memberitahukan waktu salat disebut...", "azan", "ikamah", "zikir", "doa"],
    ["Seruan tanda salat akan segera dimulai disebut...", "ikamah", "azan", "takbir", "salam"],
    ["Gerakan pertama dalam salat setelah niat adalah...", "takbiratul ihram", "rukuk", "sujud", "salam"],
    ["Salat ditutup dengan...", "salam", "takbir", "rukuk", "iktidal"],
    ["Jumlah rakaat salat Zuhur adalah...", "4", "2", "3", "5"],
    ["Zakat fitrah dikeluarkan pada bulan...", "Ramadan (sebelum salat Idulfitri)", "Muharam", "Zulhijah", "Rajab"],
    ["Besar zakat fitrah per orang kira-kira...", "2,5 kg makanan pokok", "1 ons beras", "10 kg emas", "1 liter minyak"],
    ["Makan sahur dilakukan sebelum...", "fajar (subuh)", "zuhur", "magrib", "isya"],
    ["Waktu berbuka puasa adalah saat...", "magrib", "asar", "isya", "duha"]
  ],
  tf: [["Azan dikumandangkan untuk memberitahu waktu salat.", true], ["Salat diakhiri dengan takbir.", false], ["Salat Zuhur berjumlah 4 rakaat.", true], ["Zakat fitrah dikeluarkan sebelum salat Idulfitri.", true], ["Berbuka puasa saat waktu asar.", false]],
  pair: [[["Azan", "panggilan salat"], ["Ikamah", "salat segera dimulai"], ["Wudu", "bersuci dari hadas kecil"], ["Tayamum", "bersuci dengan debu"], ["Sahur", "makan sebelum fajar"]]],
  ord: [["Urutkan gerakan salat", ["Takbiratul ihram", "Rukuk", "Iktidal", "Sujud", "Salam"]]]
});
QB.add({
  jenjang: "MI", kelas: MI, mapel: "Sejarah Kebudayaan Islam", elemen: "Kisah Nabi Muhammad saw., Keluarga Nabi, Sahabat",
  mc: [
    ["Ayah Nabi Muhammad saw. bernama...", "Abdullah", "Abu Thalib", "Abdul Muthalib", "Hamzah"],
    ["Ibu Nabi Muhammad saw. bernama...", "Aminah", "Khadijah", "Halimah", "Fatimah"],
    ["Kakek yang mengasuh Nabi setelah ibunya wafat adalah...", "Abdul Muthalib", "Abu Thalib", "Abbas", "Abu Lahab"],
    ["Ibu susu Nabi Muhammad saw. adalah...", "Halimah as-Sa'diyah", "Aminah", "Khadijah", "Aisyah"],
    ["Istri pertama Nabi Muhammad saw. adalah...", "Khadijah", "Aisyah", "Hafsah", "Fatimah"],
    ["Paman Nabi yang mengasuh dan melindunginya adalah...", "Abu Thalib", "Abu Lahab", "Abbas", "Abdullah"],
    ["Nabi Muhammad saw. mendapat gelar “Al-Amin” yang artinya...", "dapat dipercaya", "pemberani", "kaya", "pandai"],
    ["Peristiwa perjalanan Nabi dari Masjidil Haram ke Masjidil Aqsa pada malam hari disebut...", "Isra'", "Mi'raj", "Hijrah", "Fathu Makkah"],
    ["Kota tujuan hijrah Nabi adalah...", "Madinah (Yatsrib)", "Taif", "Yaman", "Syam"],
    ["Sahabat yang menemani Nabi saat hijrah adalah...", "Abu Bakar", "Umar", "Usman", "Ali"]
  ],
  tf: [["Ibu Nabi bernama Aminah.", true], ["Istri pertama Nabi adalah Aisyah.", false], ["Abu Bakar menemani Nabi saat hijrah.", true], ["Al-Amin artinya dapat dipercaya.", true], ["Nabi hijrah ke kota Taif.", false]],
  pair: [[["Abdullah", "ayah Nabi"], ["Aminah", "ibu Nabi"], ["Abdul Muthalib", "kakek Nabi"], ["Abu Thalib", "paman Nabi"], ["Khadijah", "istri pertama Nabi"]]],
  ord: [["Urutkan pengasuh Nabi semasa kecil", ["Aminah", "Halimah as-Sa'diyah", "Abdul Muthalib", "Abu Thalib"]]]
});
QB.add({
  jenjang: "MI", kelas: MI, mapel: "Bahasa Arab", elemen: "Mufradat: anggota tubuh, keluarga, benda di kelas, bilangan",
  mc: [
    ["“Ra'sun” artinya...", "kepala", "tangan", "kaki", "mata"],
    ["“'Ainun” artinya...", "mata", "telinga", "hidung", "mulut"],
    ["“Yadun” artinya...", "tangan", "kaki", "kepala", "perut"],
    ["“Abun” artinya...", "ayah", "ibu", "kakak", "kakek"],
    ["“Ummun” artinya...", "ibu", "ayah", "nenek", "adik"],
    ["“Kursiyyun” artinya...", "kursi", "meja", "pintu", "jendela"],
    ["“Babun” artinya...", "pintu", "jendela", "lemari", "papan tulis"],
    ["Angka 1 dalam bahasa Arab adalah...", "wahid", "itsnan", "tsalatsah", "'asyrah"],
    ["“Ahlan wa sahlan” artinya...", "selamat datang", "selamat tinggal", "terima kasih", "maaf"],
    ["“Ma ismuka?” artinya...", "siapa namamu?", "di mana rumahmu?", "berapa umurmu?", "apa kabar?"]
  ],
  tf: [["“Ra'sun” artinya kepala.", true], ["“Ummun” artinya ayah.", false], ["“Babun” artinya pintu.", true], ["“Wahid” artinya satu.", true], ["“Ahlan wa sahlan” artinya selamat tinggal.", false]],
  pair: [[["ra'sun", "kepala"], ["'ainun", "mata"], ["yadun", "tangan"], ["udzunun", "telinga"], ["anfun", "hidung"]], [["abun", "ayah"], ["ummun", "ibu"], ["akhun", "saudara laki-laki"], ["ukhtun", "saudara perempuan"], ["jaddun", "kakek"]]],
  ord: [["Urutkan bilangan", ["wahid", "itsnan", "tsalatsah", "arba'ah"]]]
});

/* ======================= MA ======================= */
QB.add({
  jenjang: "MA", kelas: MA, mapel: "Al-Qur'an Hadis", elemen: "Ulumul Qur'an, Ulumul hadis, Kajian ayat & hadis tematik",
  mc: [
    ["Ilmu yang mempelajari sebab-sebab turunnya ayat disebut...", "asbabun nuzul", "nasikh mansukh", "munasabah", "tajwid"],
    ["Ilmu tentang hubungan antar-ayat atau antar-surah disebut...", "munasabah", "asbabul wurud", "ijmak", "qiyas"],
    ["Sebab-sebab munculnya hadis disebut...", "asbabul wurud", "asbabun nuzul", "matan", "sanad"],
    ["Hadis yang diriwayatkan banyak perawi di setiap tingkatan sehingga mustahil berdusta disebut hadis...", "mutawatir", "ahad", "daif", "maudu'"],
    ["Hadis palsu disebut hadis...", "maudu'", "sahih", "hasan", "mutawatir"],
    ["Penafsiran Al-Qur'an dengan Al-Qur'an, hadis, dan pendapat sahabat disebut tafsir...", "bil ma'tsur", "bir ra'yi", "isyari", "ilmi"],
    ["Kitab hadis karya Imam Bukhari disebut...", "Sahih al-Bukhari", "Al-Muwatta'", "Sunan Abu Dawud", "Musnad Ahmad"],
    ["Kitab Al-Muwatta' disusun oleh...", "Imam Malik", "Imam Syafi'i", "Imam Muslim", "Imam Tirmidzi"],
    ["Sumber hukum Islam setelah Al-Qur'an adalah...", "hadis/sunah", "ijmak", "qiyas", "urf"],
    ["Ayat yang maknanya jelas dan tegas disebut ayat...", "muhkamat", "mutasyabihat", "makkiyah", "madaniyah"]
  ],
  tf: [["Asbabun nuzul adalah sebab turunnya ayat.", true], ["Hadis maudu' adalah hadis paling kuat.", false], ["Imam Malik menyusun Al-Muwatta'.", true], ["Hadis mutawatir diriwayatkan banyak perawi.", true], ["Ayat mutasyabihat maknanya selalu jelas dan tegas.", false]],
  pair: [[["Asbabun nuzul", "sebab turun ayat"], ["Asbabul wurud", "sebab munculnya hadis"], ["Munasabah", "hubungan antar-ayat"], ["Muhkamat", "ayat yang jelas maknanya"], ["Mutasyabihat", "ayat samar maknanya"]], [["Sahih al-Bukhari", "Imam Bukhari"], ["Sahih Muslim", "Imam Muslim"], ["Al-Muwatta'", "Imam Malik"], ["Musnad", "Imam Ahmad"], ["Sunan at-Tirmidzi", "Imam Tirmidzi"]]],
  ord: [["Urutkan sumber hukum Islam", ["Al-Qur'an", "Hadis", "Ijmak", "Qiyas"]]]
});
QB.add({
  jenjang: "MA", kelas: MA, mapel: "Akidah Akhlak", elemen: "Ilmu kalam, Akhlak pergaulan, Akhlak di era digital",
  mc: [
    ["Ilmu yang membahas akidah dengan dalil naqli dan aqli disebut ilmu...", "kalam (tauhid)", "fikih", "tasawuf", "falak"],
    ["Aliran kalam yang dipelopori Abul Hasan al-Asy'ari disebut...", "Asy'ariyah", "Mu'tazilah", "Jabariyah", "Qadariyah"],
    ["Aliran yang menekankan peran akal secara dominan disebut...", "Mu'tazilah", "Asy'ariyah", "Maturidiyah", "Murji'ah"],
    ["Sikap menyekutukan Allah disebut...", "syirik", "tauhid", "ikhlas", "tawakal"],
    ["Berserah diri kepada Allah setelah berusaha disebut...", "tawakal", "ikhtiar", "putus asa", "tamak"],
    ["Menyebarkan berita bohong di media sosial termasuk...", "akhlak tercela", "akhlak terpuji", "ibadah", "sunah"],
    ["Memeriksa kebenaran berita sebelum disebarkan disebut...", "tabayyun", "gibah", "namimah", "riya"],
    ["Menahan diri dari amarah termasuk akhlak...", "sabar/hilm", "takabur", "hasad", "israf"],
    ["Hidup berlebih-lebihan dan boros disebut...", "israf", "qana'ah", "zuhud", "wara'"],
    ["Sikap toleransi dalam Islam disebut...", "tasamuh", "ta'assub", "takfiri", "tafrit"]
  ],
  tf: [["Tabayyun artinya memeriksa kebenaran berita.", true], ["Syirik adalah dosa yang ringan.", false], ["Tawakal dilakukan setelah berikhtiar.", true], ["Israf artinya hemat.", false], ["Tasamuh artinya toleransi.", true]],
  pair: [[["Tabayyun", "cek kebenaran berita"], ["Tasamuh", "toleransi"], ["Israf", "boros"], ["Tawakal", "berserah diri"], ["Ikhtiar", "berusaha"]], [["Asy'ariyah", "Abul Hasan al-Asy'ari"], ["Maturidiyah", "Abu Mansur al-Maturidi"], ["Mu'tazilah", "Wasil bin Atha'"]]],
  ord: [["Urutkan sikap menghadapi masalah", ["Berdoa", "Berikhtiar", "Bertawakal", "Bersyukur atas hasil"]]]
});
QB.add({
  jenjang: "MA", kelas: MA, mapel: "Fikih", elemen: "Muamalah, Munakahat, Mawaris, Jinayah, Siyasah, Ushul fikih",
  mc: [
    ["Ilmu tentang pembagian harta warisan disebut ilmu...", "mawaris (faraid)", "munakahat", "jinayah", "siyasah"],
    ["Fikih yang mengatur pernikahan disebut fikih...", "munakahat", "muamalah", "jinayah", "ibadah"],
    ["Fikih yang mengatur tindak pidana disebut fikih...", "jinayah", "munakahat", "mawaris", "muamalah"],
    ["Kesepakatan para ulama mujtahid tentang suatu hukum disebut...", "ijmak", "qiyas", "istihsan", "urf"],
    ["Menyamakan hukum suatu perkara baru dengan perkara yang ada nasnya disebut...", "qiyas", "ijmak", "ijtihad", "taklid"],
    ["Akad sewa-menyewa disebut...", "ijarah", "mudharabah", "syirkah", "wakalah"],
    ["Kerja sama modal dari satu pihak dan pengelolaan dari pihak lain disebut...", "mudharabah", "musyarakah", "ijarah", "hiwalah"],
    ["Pinjam-meminjam tanpa imbalan tambahan disebut...", "qardh", "riba", "ijarah", "salam"],
    ["Hukum yang jika dikerjakan berpahala dan ditinggalkan tidak berdosa adalah...", "sunah", "wajib", "haram", "makruh"],
    ["Hukum yang jika ditinggalkan berpahala dan dikerjakan tidak berdosa adalah...", "makruh", "sunah", "mubah", "wajib"],
    ["Badan yang mengeluarkan fatwa keagamaan di Indonesia adalah...", "MUI", "MK", "KPU", "BPOM"]
  ],
  tf: [["Mawaris membahas pembagian warisan.", true], ["Qiyas adalah kesepakatan ulama.", false], ["Ijarah adalah akad sewa-menyewa.", true], ["Mubah artinya boleh dikerjakan atau ditinggalkan.", true], ["Riba dihalalkan dalam muamalah Islam.", false]],
  pair: [[["Wajib", "dikerjakan berpahala, ditinggal berdosa"], ["Sunah", "dikerjakan berpahala"], ["Haram", "dikerjakan berdosa"], ["Makruh", "ditinggal berpahala"], ["Mubah", "boleh"]], [["Ijarah", "sewa-menyewa"], ["Mudharabah", "bagi hasil modal-kerja"], ["Musyarakah", "kongsi modal"], ["Qardh", "pinjaman kebajikan"], ["Wakalah", "perwakilan"]]],
  ord: [["Urutkan sumber hukum Islam", ["Al-Qur'an", "Sunah", "Ijmak", "Qiyas"]]]
});
QB.add({
  jenjang: "MA", kelas: MA, mapel: "Sejarah Kebudayaan Islam", elemen: "Peradaban Islam klasik-modern, Pembaruan Islam, Islam di Indonesia",
  mc: [
    ["Tokoh pembaruan Islam dari Mesir murid Jamaluddin al-Afghani adalah...", "Muhammad Abduh", "Ibnu Taimiyah", "Al-Ghazali", "Ibnu Sina"],
    ["Organisasi Muhammadiyah didirikan tahun 1912 oleh...", "K.H. Ahmad Dahlan", "K.H. Hasyim Asy'ari", "H. Samanhudi", "H.O.S. Tjokroaminoto"],
    ["Nahdlatul Ulama didirikan tahun 1926 oleh...", "K.H. Hasyim Asy'ari", "K.H. Ahmad Dahlan", "Buya Hamka", "K.H. Wahid Hasyim"],
    ["Penaklukan Konstantinopel tahun 1453 dipimpin oleh...", "Sultan Muhammad al-Fatih", "Salahuddin al-Ayyubi", "Harun ar-Rasyid", "Tariq bin Ziyad"],
    ["Panglima yang membebaskan Yerusalem pada Perang Salib (1187) adalah...", "Salahuddin al-Ayyubi", "Muhammad al-Fatih", "Khalid bin Walid", "Musa bin Nusair"],
    ["Panglima muslim yang menyeberang ke Andalusia (711 M) adalah...", "Tariq bin Ziyad", "Uqbah bin Nafi'", "Amr bin Ash", "Saad bin Abi Waqqas"],
    ["Universitas Al-Azhar berada di kota...", "Kairo", "Baghdad", "Damaskus", "Kordoba"],
    ["Ulama asal Indonesia yang menjadi imam di Masjidil Haram pada abad ke-19 adalah...", "Syekh Nawawi al-Bantani", "Buya Hamka", "Ahmad Dahlan", "Hasyim Asy'ari"],
    ["Penulis Tafsir Al-Azhar dari Indonesia adalah...", "Buya Hamka", "Quraish Shihab", "Nawawi al-Bantani", "Mahmud Yunus"],
    ["Hari Santri Nasional diperingati setiap tanggal...", "22 Oktober", "10 November", "1 Muharam", "17 Agustus"]
  ],
  tf: [["Muhammadiyah didirikan K.H. Ahmad Dahlan.", true], ["NU didirikan tahun 1945.", false], ["Muhammad al-Fatih menaklukkan Konstantinopel.", true], ["Al-Azhar berada di Kairo.", true], ["Hari Santri diperingati 22 Oktober.", true]],
  pair: [[["Muhammadiyah", "Ahmad Dahlan"], ["Nahdlatul Ulama", "Hasyim Asy'ari"], ["Persis", "A. Hassan (tokoh)"], ["Al-Irsyad", "Ahmad Surkati"]], [["Muhammad al-Fatih", "Konstantinopel"], ["Salahuddin al-Ayyubi", "Yerusalem"], ["Tariq bin Ziyad", "Andalusia"], ["Muhammad Abduh", "pembaruan Mesir"]]],
  ord: [["Urutkan peristiwa (paling awal)", ["Islam masuk Andalusia", "Salahuddin membebaskan Yerusalem", "Penaklukan Konstantinopel", "Berdirinya Muhammadiyah", "Berdirinya NU"]]]
});
QB.add({
  jenjang: "MA", kelas: MA, mapel: "Bahasa Arab", elemen: "Qawa'id (tata bahasa): isim, fi'il, harf, jumlah ismiyah & fi'liyah",
  mc: [
    ["Kata dalam bahasa Arab terbagi menjadi isim, fi'il, dan...", "harf", "na'at", "dhamir", "khabar"],
    ["Kata kerja lampau dalam bahasa Arab disebut fi'il...", "madhi", "mudhari'", "amr", "nahi"],
    ["Kata kerja sekarang/akan datang disebut fi'il...", "mudhari'", "madhi", "amr", "masdar"],
    ["Kata kerja perintah disebut fi'il...", "amr", "madhi", "mudhari'", "nahi"],
    ["Kalimat yang diawali isim disebut jumlah...", "ismiyah", "fi'liyah", "syartiyah", "istifhamiyah"],
    ["Dalam jumlah ismiyah, subjek disebut...", "mubtada'", "khabar", "fa'il", "maf'ul bih"],
    ["Dalam jumlah ismiyah, predikat disebut...", "khabar", "mubtada'", "fa'il", "hal"],
    ["Pelaku dalam jumlah fi'liyah disebut...", "fa'il", "maf'ul bih", "mubtada'", "khabar"],
    ["Objek dalam kalimat disebut...", "maf'ul bih", "fa'il", "mubtada'", "na'at"],
    ["Kata ganti dalam bahasa Arab disebut...", "dhamir", "harf", "fi'il", "masdar"]
  ],
  tf: [["Fi'il madhi adalah kata kerja lampau.", true], ["Mubtada' adalah predikat.", false], ["Fa'il adalah pelaku.", true], ["Jumlah fi'liyah diawali kata kerja.", true], ["Fi'il amr adalah kata kerja lampau.", false]],
  pair: [[["Fi'il madhi", "lampau"], ["Fi'il mudhari'", "sekarang/akan datang"], ["Fi'il amr", "perintah"], ["Fi'il nahi", "larangan"]], [["Mubtada'", "subjek jumlah ismiyah"], ["Khabar", "predikat"], ["Fa'il", "pelaku"], ["Maf'ul bih", "objek"], ["Dhamir", "kata ganti"]]],
  ord: [["Urutkan susunan jumlah fi'liyah", ["Fi'il", "Fa'il", "Maf'ul bih"]]]
});
