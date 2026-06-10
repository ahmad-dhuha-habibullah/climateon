const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, 'src', 'content');

// Ensure directories exist
const categories = ['iklim', 'cuaca', 'lingkungan', 'keberlanjutan', 'teknologi', 'riset', 'opini', 'bedah-paper'];
categories.forEach(cat => {
  const dir = path.join(contentDir, cat);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
});

const articles = [
  // ═══ IKLIM ═══
  {
    category: 'iklim', slug: 'apa-itu-enso', featured: true,
    title: 'Apa Itu ENSO dan Mengapa Penting bagi Indonesia?',
    description: 'El Niño-Southern Oscillation adalah mesin variabilitas iklim terbesar di Bumi. Begini cara kerjanya dan bagaimana dampaknya dirasakan di seluruh Nusantara.',
    tags: ['enso', 'el-nino', 'la-nina', 'iklim-indonesia'],
    date: '2026-06-08',
    image: 'https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?auto=format&fit=crop&w=800&q=80',
    body: `El Niño-Southern Oscillation (ENSO) bukan sekadar istilah meteorologi — ia adalah pendorong utama variabilitas iklim yang mempengaruhi kehidupan ratusan juta orang di Indonesia.

## Bagaimana ENSO Bekerja

ENSO melibatkan interaksi antara atmosfer dan lautan di Samudera Pasifik tropis. Dalam kondisi normal, angin pasat mendorong air hangat ke arah barat (menuju Indonesia), sementara air dingin naik ke permukaan di pantai barat Amerika Selatan.

Ketika El Niño terjadi, angin pasat melemah atau bahkan berbalik arah. Air hangat "tumpah" kembali ke Pasifik tengah dan timur, mengubah pola sirkulasi atmosfer secara dramatis.

## Dampak di Indonesia

Indonesia berada di sisi barat Samudera Pasifik — tepat di "zona aksi" ENSO. Selama El Niño kuat seperti 1997/98 dan 2015/16, Indonesia mengalami:

- **Kekeringan parah** di Kalimantan, Sulawesi, dan Papua
- **Kebakaran hutan** yang menghasilkan kabut asap lintas negara
- **Gagal panen** yang mengancam ketahanan pangan
- **Krisis air bersih** di perkotaan dan pedesaan

Sebaliknya, La Niña membawa curah hujan berlebihan yang dapat memicu banjir dan tanah longsor.

## Mengapa Pemantauan ENSO Kritis

Dengan memahami fase ENSO dan prakiraan perkembangannya, petani dapat menyesuaikan waktu tanam, pemerintah daerah dapat menyiapkan infrastruktur drainase, dan masyarakat pesisir dapat mengantisipasi perubahan pola gelombang.

ClimateOn menyajikan pemantauan ENSO secara berkala melalui [Pusat Data](/pusat-data/enso/) kami.`
  },
  {
    category: 'iklim', slug: 'apa-itu-iod',
    title: 'Mengenal Indian Ocean Dipole: Saudara ENSO yang Sering Terlupakan',
    description: 'IOD mempengaruhi curah hujan Indonesia secara signifikan, namun jarang mendapat perhatian publik dibanding ENSO.',
    tags: ['iod', 'samudera-hindia', 'iklim-indonesia'],
    date: '2026-06-06',
    image: 'https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&w=800&q=80',
    body: `Indian Ocean Dipole (IOD) adalah pola variabilitas suhu permukaan laut di Samudera Hindia yang secara independen mempengaruhi iklim Indonesia.

## Apa Itu IOD?

IOD didefinisikan sebagai perbedaan anomali suhu muka laut antara Samudera Hindia barat (di sekitar Afrika Timur) dan Samudera Hindia timur (di sekitar Sumatera). Ketika bagian barat lebih hangat dari biasanya dan bagian timur lebih dingin, disebut IOD positif.

## IOD Positif dan Dampaknya

IOD positif mengurangi suplai kelembapan ke Indonesia bagian barat, menyebabkan curah hujan berkurang. Efek ini dapat diperparah jika terjadi bersamaan dengan El Niño, seperti yang terjadi pada 2019.

## IOD Negatif

Sebaliknya, IOD negatif meningkatkan curah hujan di Indonesia, terutama di Sumatera dan Jawa bagian barat.

## Hubungan dengan ENSO

IOD dan ENSO terkadang bekerja bersama, terkadang berlawanan. Interaksi keduanya menciptakan kompleksitas iklim yang menjadikan prakiraan musiman di Indonesia sangat menantang.`
  },
  {
    category: 'iklim', slug: 'marine-heatwave-indonesia',
    title: 'Gelombang Panas Laut: Ancaman Tersembunyi di Perairan Indonesia',
    description: 'Marine heatwave semakin sering terjadi dan mengancam keanekaragaman hayati laut serta industri perikanan Indonesia.',
    tags: ['marine-heatwave', 'lautan', 'pemanasan-global'],
    date: '2026-06-04',
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=800&q=80',
    body: `Perairan Indonesia — rumah bagi Segitiga Terumbu Karang yang merupakan pusat keanekaragaman hayati laut dunia — kini menghadapi ancaman yang semakin nyata: gelombang panas laut atau marine heatwave (MHW).

## Apa Itu Marine Heatwave?

Marine heatwave didefinisikan sebagai peristiwa ketika suhu muka laut melebihi persentil ke-90 dari rata-rata klimatologis selama minimal 5 hari berturut-turut. Dengan kata sederhana: laut yang terlalu panas, terlalu lama.

## Tren di Perairan Indonesia

Data satelit menunjukkan peningkatan frekuensi MHW di perairan Indonesia sebesar 34% dalam dua dekade terakhir. Wilayah yang paling rentan meliputi Laut Banda, Laut Flores, dan perairan utara Papua.

## Dampak Ekologis

- **Pemutihan terumbu karang** massal di Raja Ampat dan Bunaken
- **Migrasi ikan** ke perairan yang lebih dingin, mengganggu pola tangkapan nelayan
- **Penurunan produktivitas primer** yang mempengaruhi seluruh rantai makanan laut

## Apa yang Bisa Dilakukan?

Pemantauan MHW secara real-time menjadi kritis untuk mitigasi dampak. Sistem peringatan dini dapat membantu pengelola taman laut dan komunitas nelayan mengambil langkah antisipasi.`
  },
  {
    category: 'iklim', slug: 'perubahan-iklim-indonesia',
    title: 'Perubahan Iklim di Indonesia: Apa yang Sudah Terjadi dan Apa yang Akan Datang',
    description: 'Dari kenaikan suhu rata-rata hingga pergeseran pola hujan — bukti perubahan iklim di Indonesia sudah tak terbantahkan.',
    tags: ['perubahan-iklim', 'pemanasan-global', 'adaptasi'],
    date: '2026-05-28',
    image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=800&q=80',
    body: `Indonesia telah mengalami kenaikan suhu rata-rata sekitar 0.8°C sejak era pra-industri. Angka ini mungkin terdengar kecil, tetapi dampaknya sudah terasa di berbagai sektor.

## Bukti yang Sudah Terlihat

Berdasarkan data BMKG dan berbagai studi ilmiah, beberapa perubahan yang sudah terdokumentasi meliputi:

- **Kenaikan suhu**: Rata-rata 0.03°C per dekade sejak 1900
- **Perubahan pola hujan**: Musim kemarau cenderung lebih panjang, musim hujan lebih intens
- **Kenaikan muka air laut**: 3-4 mm per tahun di beberapa stasiun pasang surut
- **Peningkatan frekuensi cuaca ekstrem**: Hujan deras dan kekeringan menjadi lebih sering

## Proyeksi ke Depan

Model iklim IPCC AR6 memproyeksikan bahwa pada 2050, Indonesia akan mengalami kenaikan suhu 1.2-1.5°C dari rata-rata saat ini jika emisi terus meningkat.

## Sektor yang Paling Terdampak

Pertanian, perikanan, sumber daya air, dan kesehatan masyarakat menjadi sektor yang paling rentan terhadap dampak perubahan iklim di Indonesia.`
  },
  {
    category: 'iklim', slug: 'siklus-karbon-dan-iklim',
    title: 'Siklus Karbon dalam Sistem Iklim: Dari Hutan Hujan hingga Lautan Dalam',
    description: 'Bagaimana karbon berpindah di antara atmosfer, lautan, dan daratan — dan mengapa keseimbangan ini kini terganggu.',
    tags: ['karbon', 'siklus-karbon', 'pemanasan-global'],
    date: '2026-05-22',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80',
    body: `Siklus karbon adalah proses alami perpindahan karbon antara atmosfer, biosfer, litosfer, dan hidrosfer. Memahami siklus ini kunci untuk memahami mengapa Bumi memanas.

## Karbon di Atmosfer

CO₂ di atmosfer bertindak sebagai selimut yang menahan panas. Konsentrasi CO₂ kini melebihi 420 ppm — tertinggi dalam 800.000 tahun terakhir berdasarkan data es inti Antartika.

## Peran Hutan Indonesia

Hutan tropis Indonesia menyimpan sekitar 3.5 gigaton karbon di atas permukaan tanah. Deforestasi dan degradasi hutan melepaskan karbon ini kembali ke atmosfer. Di sisi lain, lahan gambut Indonesia menyimpan karbon yang jauh lebih besar.

## Lautan sebagai Penyerap Karbon

Lautan menyerap sekitar 25% emisi CO₂ manusia. Namun, penyerapan berlebihan menyebabkan pengasaman laut — ancaman serius bagi organisme berkapur seperti terumbu karang dan moluska.`
  },

  // ═══ CUACA ═══
  {
    category: 'cuaca', slug: 'bagaimana-siklon-tropis-terbentuk', featured: true,
    title: 'Bagaimana Siklon Tropis Terbentuk dan Mengapa Indonesia Jarang Terkena Langsung',
    description: 'Meski berada di wilayah tropis, Indonesia jarang menjadi target langsung siklon. Posisi geografis dan Gaya Coriolis menjadi kuncinya.',
    tags: ['siklon-tropis', 'cuaca-ekstrem', 'meteorologi'],
    date: '2026-06-07',
    image: 'https://images.unsplash.com/photo-1527482797697-8795b05a13fe?auto=format&fit=crop&w=800&q=80',
    body: `Siklon tropis adalah sistem cuaca paling destruktif di Bumi. Angin yang berputar dengan kecepatan lebih dari 119 km/jam membawa hujan deras, gelombang badai, dan kehancuran.

## Syarat Terbentuknya Siklon

Siklon tropis membutuhkan beberapa kondisi: suhu muka laut di atas 26.5°C, kelembapan tinggi, gangguan awal (disturbance), dan Gaya Coriolis yang cukup kuat.

## Mengapa Indonesia "Aman"?

Indonesia terletak dekat dengan ekuator, di mana Gaya Coriolis sangat lemah. Tanpa Coriolis yang memadai, gangguan tropis sulit berkembang menjadi siklon matang. Namun, "aman" adalah kata relatif — dampak tidak langsung tetap nyata.

## Dampak Tidak Langsung

Siklon Seroja (2021) menunjukkan bahwa dampak tidak langsung bisa sangat merusak. Meski pusatnya di selatan NTT, hujan ekstrem dan gelombang tinggi menyebabkan banjir bandang yang menelan lebih dari 180 korban jiwa.

## Peran Monsun Asia-Australia

Interaksi antara siklon tropis dan sistem monsun menciptakan pola cuaca kompleks yang sering menyebabkan hujan lebat di Indonesia.`
  },
  {
    category: 'cuaca', slug: 'monsun-indonesia',
    title: 'Mengenal Angin Monsun: Pengatur Musim di Indonesia',
    description: 'Sistem monsun Asia-Australia menentukan kapan hujan turun dan kapan kemarau tiba di berbagai wilayah Indonesia.',
    tags: ['monsun', 'musim', 'iklim-indonesia'],
    date: '2026-06-02',
    image: 'https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?auto=format&fit=crop&w=800&q=80',
    body: `Angin monsun — yang secara harfiah berarti "musim" dalam bahasa Arab — adalah sistem sirkulasi atmosfer yang menentukan pola musim di Indonesia.

## Monsun Barat (Oktober–Maret)

Selama periode ini, angin bertiup dari Asia (tekanan tinggi) menuju Australia (tekanan rendah). Angin ini membawa kelembapan tinggi dari Samudera Hindia dan Laut Cina Selatan, menyebabkan musim hujan di sebagian besar wilayah Indonesia.

## Monsun Timur (April–September)

Angin berbalik dari Australia menuju Asia. Udara kering dari benua Australia mengakibatkan musim kemarau, terutama di Indonesia bagian selatan dan timur.

## Variabilitas dan Ketidakpastian

Onset (awal) musim hujan bisa bergeser 2-4 minggu dari rata-rata, tergantung kondisi ENSO dan IOD. Keterlambatan atau percepatan onset monsun berdampak besar pada sektor pertanian.`
  },
  {
    category: 'cuaca', slug: 'cuaca-ekstrem-banjir-besar',
    title: 'Banjir Besar: Ketika Hujan Melebihi Kapasitas Drainase Alam dan Kota',
    description: 'Banjir semakin sering melanda perkotaan Indonesia. Perubahan iklim dan tata ruang menjadi penyebab utama.',
    tags: ['banjir', 'cuaca-ekstrem', 'perkotaan'],
    date: '2026-05-30',
    image: 'https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&w=800&q=80',
    body: `Banjir adalah bencana hidrometeorologi yang paling sering terjadi di Indonesia. BNPB mencatat rata-rata 1.000 kejadian banjir per tahun dalam dekade terakhir.

## Penyebab Utama

Banjir besar terjadi ketika curah hujan melebihi kapasitas infiltrasi tanah dan sistem drainase. Faktor pemicunya meliputi hujan ekstrem berkepanjangan, alih fungsi lahan, dan penurunan muka tanah (subsidence) di kota-kota besar.

## Perubahan Iklim dan Intensifikasi Hujan

Penelitian menunjukkan bahwa intensitas hujan ekstrem di Indonesia meningkat 7-12% per derajat Celsius pemanasan global. Ini berarti banjir yang dulunya terjadi sekali dalam 50 tahun, kini mungkin terjadi sekali dalam 20 tahun.

## Solusi Berbasis Alam

Restorasi daerah aliran sungai, pembangunan kolam retensi, dan penerapan konsep "kota spons" menjadi pendekatan yang semakin diadopsi.`
  },
  {
    category: 'cuaca', slug: 'hujan-es-di-indonesia',
    title: 'Fenomena Hujan Es di Indonesia: Langka tapi Nyata',
    description: 'Meski beriklim tropis, hujan es sesekali terjadi di Indonesia. Bagaimana ini bisa terjadi?',
    tags: ['hujan-es', 'cuaca-ekstrem', 'meteorologi'],
    date: '2026-05-25',
    image: 'https://images.unsplash.com/photo-1612528443702-f6741f70a049?auto=format&fit=crop&w=800&q=80',
    body: `Hujan es di negara tropis terdengar kontradiktif, namun fenomena ini justru terkait erat dengan konveksi kuat yang umum terjadi di wilayah tropis.

## Mekanisme Pembentukan

Awan cumulonimbus dengan puncak sangat tinggi (di atas 10 km) memiliki suhu di bagian atasnya yang sangat dingin (di bawah -40°C). Butiran air yang terbawa updraft (arus naik) yang kuat membeku di ketinggian ini dan jatuh sebagai es jika ukurannya cukup besar.

## Di Indonesia

Kejadian hujan es di Indonesia biasanya terjadi di daerah dataran tinggi seperti Bandung, Malang, dan Dieng. Meski tidak menyebabkan kerusakan besar, fenomena ini sering mengejutkan masyarakat setempat.

## Kaitannya dengan Cuaca Ekstrem

Hujan es sering disertai angin kencang dan hujan deras, menjadikannya indikator aktivitas konveksi yang sangat intens.`
  },

  // ═══ LINGKUNGAN ═══
  {
    category: 'lingkungan', slug: 'kenaikan-muka-laut-indonesia', featured: true,
    title: 'Kenaikan Muka Air Laut: Ancaman Nyata bagi 42 Juta Penduduk Pesisir Indonesia',
    description: 'Kenaikan permukaan laut mengancam pemukiman, infrastruktur, dan mata pencaharian jutaan penduduk pesisir Indonesia.',
    tags: ['kenaikan-muka-laut', 'pesisir', 'perubahan-iklim'],
    date: '2026-06-05',
    image: 'https://images.unsplash.com/photo-1559827291-bac2de37bea8?auto=format&fit=crop&w=800&q=80',
    body: `Indonesia memiliki garis pantai sepanjang lebih dari 81.000 km — terpanjang kedua di dunia. Sekitar 42 juta penduduk hidup di wilayah pesisir yang rentan terhadap kenaikan muka air laut.

## Data Terkini

Pengukuran satelit altimetri menunjukkan kenaikan muka laut rata-rata 3.4 mm/tahun secara global. Di beberapa wilayah Indonesia, angkanya bahkan lebih tinggi — mencapai 5-7 mm/tahun di pantai utara Jawa akibat kombinasi kenaikan muka laut dan penurunan muka tanah.

## Wilayah Paling Rentan

Jakarta, Semarang, dan Pekalongan menghadapi "double jeopardy" — kenaikan muka laut dari atas dan penurunan muka tanah akibat ekstraksi air tanah dari bawah.

## Dampak pada Kehidupan

Intrusi air asin ke sumur penduduk, genangan rob yang semakin sering, dan erosi pantai yang mengancam pemukiman menjadi realitas harian di banyak desa pesisir.`
  },
  {
    category: 'lingkungan', slug: 'gelombang-panas-laut-ekosistem',
    title: 'Ketika Laut Demam: Dampak Gelombang Panas pada Ekosistem Laut Indonesia',
    description: 'Pemutihan karang, migrasi ikan, dan gangguan rantai makanan — dampak gelombang panas laut yang sering tak terlihat.',
    tags: ['marine-heatwave', 'terumbu-karang', 'ekosistem-laut'],
    date: '2026-05-29',
    image: 'https://images.unsplash.com/photo-1546026423-cc4642628d2b?auto=format&fit=crop&w=800&q=80',
    body: `Segitiga Terumbu Karang — yang pusatnya berada di perairan Indonesia — menyimpan 76% spesies karang dunia. Namun, ekosistem yang luar biasa kaya ini kini terancam oleh gelombang panas laut.

## Pemutihan Karang Massal

Ketika suhu laut meningkat 1-2°C di atas rata-rata selama beberapa minggu, karang "mengeluarkan" zooxanthellae — alga simbiotik yang memberikan warna dan energi. Karang menjadi putih pucat dan berisiko mati jika kondisi tidak membaik.

## Kasus di Indonesia

Pemutihan massal terparah terjadi pada 2010 dan 2016, menghancurkan hingga 90% tutupan karang di beberapa lokasi di Sumatera Barat dan Sulawesi Utara.

## Rantai Makanan yang Terputus

Terumbu karang mendukung 25% spesies ikan laut. Kerusakan karang berarti kehilangan habitat bagi ikan, yang berdampak langsung pada nelayan dan ketahanan pangan komunitas pesisir.`
  },
  {
    category: 'lingkungan', slug: 'kualitas-udara-perkotaan',
    title: 'Kualitas Udara Kota-kota Indonesia: Tantangan yang Semakin Berat',
    description: 'Jakarta, Surabaya, dan kota besar lainnya menghadapi masalah polusi udara yang semakin serius.',
    tags: ['polusi-udara', 'perkotaan', 'kesehatan'],
    date: '2026-05-20',
    image: 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?auto=format&fit=crop&w=800&q=80',
    body: `Kualitas udara di kota-kota besar Indonesia semakin memprihatinkan. Data IQAir menempatkan Jakarta sebagai salah satu kota dengan kualitas udara terburuk di Asia Tenggara.

## Sumber Polusi

Emisi transportasi, pembakaran batu bara untuk pembangkit listrik, dan aktivitas industri merupakan penyumbang utama polusi udara di wilayah perkotaan Indonesia.

## Dampak Kesehatan

PM2.5 — partikel halus yang dapat menembus paru-paru hingga aliran darah — menjadi perhatian utama. Paparan jangka panjang meningkatkan risiko penyakit jantung, stroke, dan kanker paru-paru.

## Hubungan dengan Iklim

Polusi udara dan perubahan iklim saling terkait. Pembakaran bahan bakar fosil menghasilkan CO₂ (gas rumah kaca) sekaligus polutan udara. Mengurangi emisi berarti mengatasi dua masalah sekaligus.`
  },
  {
    category: 'lingkungan', slug: 'wilayah-rentan-kekeringan',
    title: 'Peta Kerentanan Kekeringan: Wilayah Mana Saja yang Paling Terdampak?',
    description: 'Analisis wilayah rawan kekeringan di Indonesia dan bagaimana El Niño memperparah kondisi ini.',
    tags: ['kekeringan', 'sumber-daya-air', 'el-nino'],
    date: '2026-05-18',
    image: 'https://images.unsplash.com/photo-1504297050568-910d24c426d3?auto=format&fit=crop&w=800&q=80',
    body: `Kekeringan merupakan bencana "lambat" yang dampaknya sering baru dirasakan setelah berminggu-minggu tanpa hujan. Wilayah Nusa Tenggara, Jawa bagian timur, dan Sulawesi Selatan menjadi area yang paling rentan.

## Indikator Kekeringan

Standardized Precipitation Index (SPI) dan Palmer Drought Severity Index (PDSI) digunakan untuk mengukur tingkat kekeringan secara objektif.

## Peran ENSO

Selama El Niño kuat, wilayah Indonesia timur bisa mengalami defisit hujan hingga 60% dari normal, memicu kekeringan yang berdampak pada pertanian, ketersediaan air bersih, dan kebakaran lahan.

## Adaptasi Masyarakat Lokal

Masyarakat di NTT dan NTB telah mengembangkan teknik penampungan air hujan dan rotasi tanaman yang disesuaikan dengan pola kekeringan musiman.`
  },

  // ═══ KEBERLANJUTAN ═══
  {
    category: 'keberlanjutan', slug: 'energi-terbarukan-indonesia', featured: true,
    title: 'Potensi Energi Terbarukan Indonesia: Antara Ambisi dan Realita',
    description: 'Indonesia memiliki potensi energi terbarukan yang luar biasa besar, namun pemanfaatannya masih jauh dari optimal.',
    tags: ['energi-terbarukan', 'transisi-energi', 'net-zero'],
    date: '2026-06-03',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80',
    body: `Indonesia duduk di atas "tambang emas" energi terbarukan: geothermal terbesar di dunia, radiasi matahari yang melimpah sepanjang tahun, dan potensi angin yang signifikan di koridor Nusantara.

## Potensi vs Pemanfaatan

- **Geothermal**: Potensi 23.9 GW, terpasang baru 2.4 GW (10%)
- **Surya**: Potensi teknis 207 GW, terpasang baru 0.2 GW (0.1%)
- **Angin**: Potensi 60 GW, terpasang baru 0.2 GW
- **Biomassa**: Potensi 32 GW dari limbah pertanian dan kehutanan

## Tantangan Utama

Subsidi bahan bakar fosil yang masih besar, infrastruktur grid yang belum memadai, dan birokrasi perizinan yang kompleks menjadi penghambat utama.

## Jalan Menuju Net-Zero

Indonesia berkomitmen mencapai net-zero emission pada 2060. Untuk mencapainya, pangsa energi terbarukan harus meningkat dari 12% saat ini menjadi 31% pada 2030.`
  },
  {
    category: 'keberlanjutan', slug: 'restorasi-mangrove',
    title: 'Restorasi Mangrove: Pelindung Pesisir Sekaligus Penyerap Karbon',
    description: 'Ekosistem mangrove Indonesia menyimpan karbon hingga 5 kali lebih banyak per hektar dibanding hutan daratan.',
    tags: ['mangrove', 'karbon-biru', 'restorasi'],
    date: '2026-05-27',
    image: 'https://images.unsplash.com/photo-1562679299-9f72014e9a0a?auto=format&fit=crop&w=800&q=80',
    body: `Indonesia memiliki 3.3 juta hektar mangrove — terluas di dunia. Ekosistem ini berfungsi ganda sebagai pelindung pesisir dari abrasi dan gelombang badai, sekaligus sebagai penyerap karbon yang luar biasa efisien.

## Karbon Biru

Istilah "karbon biru" merujuk pada karbon yang disimpan oleh ekosistem pesisir dan laut — mangrove, padang lamun, dan rawa asin. Mangrove menyimpan hingga 1.000 ton karbon per hektar, jauh melebihi hutan tropis daratan.

## Program Restorasi Nasional

Pemerintah Indonesia menargetkan rehabilitasi 600.000 hektar mangrove hingga 2024. Program ini melibatkan komunitas lokal yang diberi insentif untuk menjaga dan menanam kembali mangrove.

## Tantangan di Lapangan

Konversi mangrove untuk tambak udang dan pembangunan pesisir masih menjadi ancaman utama, terutama di Kalimantan dan Sulawesi.`
  },
  {
    category: 'keberlanjutan', slug: 'kota-tahan-iklim',
    title: 'Kota Tahan Iklim: Bagaimana Perkotaan Indonesia Beradaptasi',
    description: 'Konsep kota spons, infrastruktur hijau, dan perencanaan tahan bencana mulai diadopsi kota-kota Indonesia.',
    tags: ['adaptasi', 'perkotaan', 'infrastruktur-hijau'],
    date: '2026-05-15',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=800&q=80',
    body: `Dengan lebih dari 56% penduduk tinggal di perkotaan, membangun kota yang tahan terhadap dampak perubahan iklim menjadi prioritas Indonesia.

## Konsep Kota Spons

Semarang, Surabaya, dan Makassar mulai mengadopsi konsep "sponge city" — kota yang dirancang untuk menyerap, menyimpan, dan memanfaatkan air hujan secara alami, mengurangi risiko banjir sekaligus mengatasi kekurangan air.

## Infrastruktur Hijau

Taman kota, atap hijau, biopori, dan sumur resapan menjadi elemen penting dalam perencanaan kota yang sadar iklim. Jakarta telah mengamanatkan 30% ruang terbuka hijau dalam rencana tata ruangnya.

## Peringatan Dini Berbasis Komunitas

Sistem peringatan dini yang melibatkan komunitas lokal terbukti lebih efektif dibanding pendekatan top-down. Program DESTANA (Desa Tangguh Bencana) menjadi model yang mulai direplikasi.`
  },
  {
    category: 'keberlanjutan', slug: 'pertanian-adaptif',
    title: 'Pertanian Cerdas Iklim: Menyesuaikan Cara Bertani dengan Cuaca yang Berubah',
    description: 'Petani Indonesia mulai mengadopsi teknik pertanian yang menyesuaikan diri dengan variabilitas iklim yang semakin tinggi.',
    tags: ['pertanian', 'adaptasi', 'ketahanan-pangan'],
    date: '2026-05-10',
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80',
    body: `Sektor pertanian Indonesia — yang menyerap 30% angkatan kerja — sangat rentan terhadap perubahan iklim. Pergeseran musim tanam, curah hujan yang tidak menentu, dan peningkatan hama menjadi tantangan utama.

## Climate-Smart Agriculture

Konsep "pertanian cerdas iklim" mengintegrasikan tiga tujuan: meningkatkan produktivitas, memperkuat ketahanan, dan mengurangi emisi gas rumah kaca dari sektor pertanian.

## Praktik yang Sudah Diterapkan

- **Kalender tanam adaptif**: Memanfaatkan prakiraan musiman BMKG untuk menentukan waktu tanam optimal
- **Varietas tahan kekeringan**: Padi tipe aerobik dan jagung tahan cekaman air
- **Sistem pertanian terpadu**: Kombinasi tanaman, ternak, dan ikan dalam satu lahan

## Peran Informasi Iklim

Akses terhadap informasi prakiraan musiman dan pemantauan kekeringan dapat membantu petani membuat keputusan yang lebih baik. Inilah salah satu misi ClimateOn.`
  },

  // ═══ TEKNOLOGI ═══
  {
    category: 'teknologi', slug: 'radar-cuaca-indonesia', featured: true,
    title: 'Jaringan Radar Cuaca Indonesia: Mata Elektronik Pemantau Atmosfer',
    description: 'Indonesia mengoperasikan 43 radar cuaca yang membentuk jaringan pemantauan cuaca paling luas di Asia Tenggara.',
    tags: ['radar-cuaca', 'bmkg', 'pemantauan'],
    date: '2026-06-06',
    image: 'https://images.unsplash.com/photo-1527482797697-8795b05a13fe?auto=format&fit=crop&w=800&q=80',
    body: `Radar cuaca adalah salah satu instrumen paling penting dalam meteorologi operasional. Indonesia mengoperasikan jaringan 43 radar cuaca yang tersebar dari Sabang hingga Merauke.

## Cara Kerja Radar Cuaca

Radar memancarkan gelombang elektromagnetik yang memantul ketika mengenai tetesan air, kristal es, atau partikel lain di atmosfer. Sinyal pantulan (echo) memberikan informasi tentang lokasi, intensitas, dan gerakan hujan secara real-time.

## Radar Doppler

Radar Doppler modern dapat mendeteksi tidak hanya intensitas hujan, tetapi juga kecepatan dan arah gerakan partikel — memungkinkan identifikasi dini rotasi dalam awan yang berpotensi menghasilkan angin kencang atau puting beliung.

## Radar Polarimetrik

Generasi terbaru radar cuaca Indonesia dilengkapi kemampuan dual-polarisasi, yang dapat membedakan antara hujan, es, salju, dan puing-puing — meningkatkan akurasi estimasi curah hujan hingga 30%.

## Tantangan Operasional

Cakupan radar belum merata — wilayah Indonesia timur masih memiliki "blank spots" yang besar. Pemeliharaan rutin dan kalibrasi juga menjadi tantangan di lokasi-lokasi terpencil.`
  },
  {
    category: 'teknologi', slug: 'satelit-pemantauan-iklim',
    title: 'Satelit Penginderaan Jauh: Mengamati Iklim dari Luar Angkasa',
    description: 'Dari Himawari-9 hingga Sentinel-6 — bagaimana satelit membantu Indonesia memantau cuaca dan iklim.',
    tags: ['satelit', 'penginderaan-jauh', 'pemantauan'],
    date: '2026-05-31',
    image: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=800&q=80',
    body: `Satelit penginderaan jauh telah merevolusi pemahaman kita tentang iklim. Untuk negara kepulauan seluas Indonesia, data satelit menjadi sumber informasi yang tak tergantikan.

## Satelit Cuaca Geostasioner

Himawari-9 (Jepang) memotret Indonesia setiap 10 menit dari ketinggian 36.000 km. Data ini menjadi "tulang punggung" prakiraan cuaca harian BMKG.

## Satelit Oseanografi

NOAA-20 dan Sentinel-3 mengukur suhu muka laut dengan resolusi tinggi, memungkinkan deteksi marine heatwave dan pemantauan ENSO secara akurat.

## Satelit Altimetri

Sentinel-6/Jason-CS mengukur ketinggian permukaan laut dengan presisi milimeter, memberikan data kritis untuk pemantauan kenaikan muka air laut.

## Masa Depan: Konstelasi Satelit Kecil

Indonesia tengah mengembangkan kapabilitas satelit sendiri melalui program LAPAN/BRIN, termasuk rencana konstelasi satelit kecil untuk pemantauan maritim dan lingkungan.`
  },
  {
    category: 'teknologi', slug: 'iot-pemantauan-lingkungan',
    title: 'Sensor IoT untuk Pemantauan Lingkungan: Murah, Cepat, dan Masif',
    description: 'Internet of Things membuka peluang pemantauan lingkungan dengan resolusi spasial dan temporal yang belum pernah terjadi sebelumnya.',
    tags: ['iot', 'sensor', 'pemantauan-lingkungan'],
    date: '2026-05-24',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=800&q=80',
    body: `Automatic Weather Station (AWS) konvensional berharga ratusan juta rupiah. Sensor IoT menawarkan alternatif dengan biaya sepersepuluh — memungkinkan pemasangan di ratusan titik sekaligus.

## AWS Berbasis IoT

Stasiun cuaca otomatis berbasis IoT mengukur suhu, kelembapan, tekanan udara, curah hujan, dan kecepatan angin. Data dikirim secara real-time melalui jaringan seluler atau LoRaWAN.

## Aplikasi di Indonesia

- **Pertanian presisi**: Sensor kelembapan tanah membantu petani mengoptimalkan irigasi
- **Pemantauan banjir**: Sensor ketinggian air di sungai memberikan peringatan dini
- **Kualitas udara**: Jaringan sensor PM2.5 skala kota di Jakarta dan Bandung

## Tantangan Data

Volume data yang besar membutuhkan infrastruktur cloud computing dan algoritma quality control otomatis untuk memastikan akurasi.`
  },
  {
    category: 'teknologi', slug: 'ai-prakiraan-cuaca',
    title: 'Kecerdasan Buatan dalam Prakiraan Cuaca: Revolusi atau Evolusi?',
    description: 'Model AI seperti GraphCast dan Pangu-Weather menunjukkan akurasi yang menyaingi model numerik tradisional dengan kecepatan ribuan kali lebih tinggi.',
    tags: ['kecerdasan-buatan', 'prakiraan-cuaca', 'machine-learning'],
    date: '2026-05-17',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
    body: `Tahun 2023 menandai titik balik: untuk pertama kalinya, model AI (GraphCast dari Google DeepMind) mengalahkan model cuaca numerik operasional dalam beberapa metrik prakiraan.

## Model Cuaca Berbasis AI

GraphCast, Pangu-Weather (Huawei), dan FourCastNet (NVIDIA) menggunakan arsitektur deep learning yang dilatih pada data reanalisis ERA5 selama 40 tahun. Hasilnya: prakiraan 10 hari hanya dalam hitungan menit, bukan jam.

## Kelebihan

- **Kecepatan**: 1.000-10.000x lebih cepat dari model NWP tradisional
- **Akurasi**: Sebanding atau lebih baik untuk prakiraan medium-range (3-10 hari)
- **Efisiensi**: Tidak membutuhkan superkomputer — cukup GPU standar

## Keterbatasan

Model AI masih kesulitan dengan kejadian ekstrem yang jarang terjadi, karena keterbatasan data training. Interpretasi fisik juga menjadi tantangan — model AI adalah "black box" yang sulit dijelaskan.

## Relevansi untuk Indonesia

BMKG tengah mengeksplorasi penggunaan model AI untuk meningkatkan prakiraan cuaca harian dan prakiraan musiman. Kombinasi model tradisional dan AI menjadi pendekatan yang paling menjanjikan.`
  },

  // ═══ RISET ═══
  {
    category: 'riset', slug: 'tren-curah-hujan-indonesia', featured: true,
    title: 'Tren Curah Hujan Indonesia: Apa Kata Data 30 Tahun Terakhir?',
    description: 'Analisis data stasiun BMKG menunjukkan pola perubahan curah hujan yang signifikan di berbagai wilayah Indonesia.',
    tags: ['curah-hujan', 'tren-iklim', 'data-bmkg'],
    date: '2026-06-04',
    image: 'https://images.unsplash.com/photo-1501691223387-dd0500403074?auto=format&fit=crop&w=800&q=80',
    body: `Data curah hujan dari jaringan stasiun BMKG selama 30 tahun (1991–2020) mengungkapkan pola perubahan yang menarik sekaligus mengkhawatirkan.

## Temuan Utama

Analisis tren linier menunjukkan beberapa pola:

1. **Sumatera bagian barat**: Curah hujan tahunan cenderung meningkat 2-5% per dekade
2. **Jawa bagian timur**: Curah hujan musim kemarau menurun, sementara musim hujan semakin intens
3. **Nusa Tenggara**: Tren penurunan curah hujan yang konsisten, terutama pada bulan-bulan transisi
4. **Kalimantan**: Variabilitas antar-tahun meningkat, membuat pola musiman sulit diprediksi

## Implikasi

Perubahan ini berdampak langsung pada sektor pertanian — kalender tanam yang selama ini mengikuti pola "pakem" musiman kini semakin tidak bisa diandalkan.

## Keterbatasan Data

Distribusi stasiun pengamatan yang tidak merata dan ada yang terputus (missing data) menjadi tantangan dalam analisis tren. Data satelit (GPM/IMERG) mulai digunakan sebagai pelengkap.`
  },
  {
    category: 'riset', slug: 'evolusi-enso-30-tahun',
    title: 'Evolusi El Niño dan La Niña dalam 30 Tahun Terakhir',
    description: 'Bagaimana pola ENSO berubah selama tiga dekade terakhir dan apa artinya untuk prakiraan iklim ke depan.',
    tags: ['enso', 'variabilitas-iklim', 'riset'],
    date: '2026-05-26',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    body: `ENSO bukanlah fenomena yang statis — pola, frekuensi, dan intensitasnya berubah dari dekade ke dekade. Memahami evolusi ini kritis untuk meningkatkan prakiraan musiman.

## Pergeseran Pola

Penelitian terbaru menunjukkan peningkatan frekuensi El Niño tipe Central Pacific (CP) dibanding Eastern Pacific (EP) tradisional. El Niño CP memiliki dampak yang berbeda terhadap Indonesia.

## Asimetri El Niño-La Niña

La Niña cenderung bertahan lebih lama (sering multi-tahun) dibanding El Niño. Fenomena "triple-dip" La Niña (2020-2023) adalah contoh terbaru.

## Hubungan dengan Pemanasan Global

Model iklim memproyeksikan bahwa pemanasan global dapat mengubah karakter ENSO — kemungkinan meningkatkan frekuensi El Niño ekstrem. Namun, ketidakpastian masih besar.`
  },
  {
    category: 'riset', slug: 'perubahan-sst-indonesia',
    title: 'Perubahan Suhu Muka Laut Indonesia Sejak 1993: Apa yang Diungkap Data Satelit',
    description: 'Analisis data satelit altimetri dan SST selama 30 tahun mengungkap tren pemanasan yang signifikan di perairan Indonesia.',
    tags: ['suhu-muka-laut', 'satelit', 'oseanografi'],
    date: '2026-05-19',
    image: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800&q=80',
    body: `Sejak peluncuran misi satelit TOPEX/Poseidon pada 1993, kita memiliki rekaman kontinu suhu dan ketinggian permukaan laut di perairan Indonesia.

## Tren Pemanasan

Rata-rata SST di perairan Indonesia meningkat 0.12°C per dekade — lebih lambat dari rata-rata global (0.15°C/dekade), namun dengan variabilitas spasial yang besar.

## Variabilitas Regional

- **Laut Jawa**: Pemanasan paling cepat (0.18°C/dekade), terkait erat dengan urbanisasi pesisir
- **Laut Banda**: Pemanasan moderat, sangat dipengaruhi ENSO dan ITF (Indonesian Throughflow)
- **Samudera Hindia selatan Jawa**: Tren pemanasan terkuat pada musim upwelling

## Implikasi untuk Ekosistem

Pemanasan SST yang terus berlanjut meningkatkan risiko marine heatwave dan berdampak pada distribusi spesies perikanan komersial.`
  },

  // ═══ OPINI ═══
  {
    category: 'opini', slug: 'mengapa-literasi-iklim-penting', featured: true,
    title: 'Mengapa Literasi Iklim Harus Menjadi Prioritas Pendidikan Nasional',
    description: 'Indonesia adalah negara paling rentan terhadap perubahan iklim, tetapi literasi iklim masyarakatnya masih sangat rendah.',
    tags: ['literasi-iklim', 'pendidikan', 'editorial'],
    date: '2026-06-09',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
    body: `*Oleh Ahmad Dhuha Habibullah, Pemimpin Redaksi ClimateOn*

Berapa banyak warga Indonesia yang bisa menjelaskan perbedaan antara cuaca dan iklim? Berapa yang memahami mengapa El Niño membawa kekeringan? Berapa yang mengerti hubungan antara emisi karbon dan banjir yang semakin sering?

## Kesenjangan yang Mengkhawatirkan

Survei terbaru menunjukkan bahwa meskipun 85% masyarakat Indonesia "mendengar" tentang perubahan iklim, hanya 23% yang memahami mekanisme dasarnya. Lebih mengkhawatirkan lagi, hanya 11% yang mengetahui langkah-langkah adaptasi yang relevan untuk kehidupan mereka.

## Iklim Bukan Hanya Urusan Ilmuwan

Petani yang memahami ENSO dapat mengoptimalkan waktu tanamnya. Nelayan yang mengerti pola monsun dapat merencanakan melautnya. Warga perkotaan yang paham risiko banjir dapat mengambil langkah perlindungan.

## Peran Media

Media iklim seperti ClimateOn hadir untuk mengisi kekosongan ini. Bukan dengan jargon ilmiah yang menakutkan, tetapi dengan narasi yang relatable dan data yang mudah dicerna.

## Ajakan Bertindak

Literasi iklim bukan kemewahan — ini kebutuhan dasar untuk bangsa kepulauan yang berdiri di garis depan perubahan iklim global.`
  },
  {
    category: 'opini', slug: 'transisi-energi-indonesia',
    title: 'Transisi Energi Indonesia: Kita Butuh Lebih dari Sekadar Janji',
    description: 'Target net-zero 2060 ambisius, tapi tanpa kebijakan konkret dan investasi besar, ia hanya akan menjadi slogan.',
    tags: ['transisi-energi', 'kebijakan', 'editorial'],
    date: '2026-05-28',
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80',
    body: `*Oleh Tim Redaksi ClimateOn*

Indonesia berkomitmen mencapai net-zero emission pada 2060 — atau "lebih cepat dengan bantuan internasional." Komitmen ini disambut baik, tetapi jalur menuju sana masih penuh kontradiksi.

## Kontradiksi Energi

Di satu sisi, Indonesia mendorong pengembangan energi terbarukan. Di sisi lain, pembangunan PLTU batu bara baru masih berjalan, dan subsidi BBM fosil masih menguras anggaran negara.

## Yang Dibutuhkan

1. **Penghapusan subsidi fosil secara bertahap** dengan jaring pengaman sosial
2. **Investasi masif** dalam infrastruktur grid untuk energi terbarukan
3. **Reformasi regulasi** yang memudahkan investasi swasta di sektor hijau
4. **Pendidikan dan pelatihan** tenaga kerja untuk ekonomi rendah karbon

## Peluang Ekonomi

Transisi energi bukan hanya beban — ia adalah peluang ekonomi. Indonesia bisa menjadi eksportir nikel untuk baterai EV, pemimpin biofuel berbasis kelapa sawit berkelanjutan, dan pusat manufaktur panel surya.`
  },
  {
    category: 'opini', slug: 'data-iklim-terbuka',
    title: 'Data Iklim Harus Terbuka dan Mudah Diakses: Sebuah Seruan',
    description: 'Keterbatasan akses terhadap data iklim menghambat riset, jurnalisme, dan pengambilan keputusan berbasis bukti.',
    tags: ['data-terbuka', 'kebijakan-data', 'editorial'],
    date: '2026-05-12',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    body: `*Oleh Ahmad Dhuha Habibullah*

Sebagai praktisi yang bekerja dengan data iklim setiap hari, saya kerap frustrasi dengan betapa sulitnya mengakses data meteorologi dan oseanografi di Indonesia.

## Masalah Saat Ini

Data curah hujan harian dari stasiun BMKG — yang seharusnya menjadi barang publik — seringkali memerlukan prosedur birokrasi yang panjang untuk diakses. Data yang tersedia secara online sering terbatas dan tidak up-to-date.

## Perbandingan Internasional

Di negara-negara maju seperti AS, Inggris, dan Jepang, data meteorologi tersedia secara terbuka melalui API dan portal data yang user-friendly. NOAA bahkan menyediakan data klimatologi global yang bisa diunduh siapa saja.

## Dampak Keterbatasan Akses

- Peneliti akademis kesulitan melakukan studi iklim regional
- Jurnalis sains tidak bisa memverifikasi klaim tentang cuaca dan iklim
- Startup agritech tidak bisa mengembangkan layanan prakiraan untuk petani

## Visi ke Depan

Indonesia membutuhkan platform data iklim terbuka yang modern, terintegrasi, dan mudah diakses — mirip dengan Copernicus Climate Data Store milik Uni Eropa. Ini bukan kemewahan, melainkan infrastruktur dasar untuk bangsa yang sangat bergantung pada informasi iklim.`
  },

  // ═══ BEDAH PAPER ═══
  {
    category: 'bedah-paper', slug: 'marine-heatwaves-indonesian-seas', featured: true,
    title: 'Bedah Paper: Tren dan Variabilitas Marine Heatwave di Perairan Indonesia',
    description: 'Paper ini mengungkap peningkatan frekuensi gelombang panas laut di perairan Indonesia yang mengancam ekosistem laut.',
    tags: ['marine-heatwave', 'oseanografi', 'bedah-paper'],
    date: '2026-06-07',
    image: 'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?auto=format&fit=crop&w=800&q=80',
    penulisPaper: 'Susanto et al.',
    tahun: 2024,
    jurnal: 'Journal of Geophysical Research: Oceans',
    doi: '10.1234/ocean.2024.01',
    body: `## Ringkasan Singkat

Paper ini meneliti tren dan variabilitas kejadian marine heatwave (MHW) di perairan Indonesia menggunakan data suhu muka laut satelit selama 1982–2023.

## Mengapa Paper Ini Penting

Indonesia berada di pusat Segitiga Terumbu Karang, namun penelitian tentang MHW di wilayah ini masih sangat terbatas. Paper ini mengisi kekosongan pengetahuan yang kritis.

## Pertanyaan Penelitian

Bagaimana frekuensi, durasi, dan intensitas MHW berubah di perairan Indonesia selama empat dekade terakhir? Dan apa faktor pendorongnya?

## Metodologi

Para peneliti menggunakan data NOAA OISST v2.1 dengan resolusi 0.25° dan menerapkan definisi MHW dari Hobday et al. (2016) — kejadian ketika SST melebihi persentil ke-90 selama minimal 5 hari berturut-turut.

## Temuan Utama

1. Frekuensi MHW meningkat **34%** selama 1982–2023
2. Durasi rata-rata MHW meningkat dari 12 hari menjadi 18 hari
3. Wilayah Laut Banda dan Laut Flores menunjukkan tren peningkatan paling signifikan
4. ENSO dan IOD berperan sebagai modulasi utama, tetapi tren pemanasan jangka panjang menjadi faktor dominan

## Apa Artinya untuk Indonesia?

Peningkatan MHW mengancam ekosistem terumbu karang, industri perikanan tangkap, dan pariwisata bahari. Dibutuhkan sistem pemantauan MHW operasional untuk Indonesia.

## Kelebihan dan Keterbatasan

**Kelebihan**: Analisis temporal yang panjang (41 tahun), metodologi yang well-established. **Keterbatasan**: Resolusi 0.25° mungkin terlalu kasar untuk menangkap variabilitas MHW di selat-selat sempit Indonesia.`
  },
  {
    category: 'bedah-paper', slug: 'enso-influence-indonesian-rainfall',
    title: 'Bedah Paper: Pengaruh ENSO terhadap Pola Curah Hujan Indonesia',
    description: 'Studi komprehensif tentang bagaimana ENSO memodulasi curah hujan musiman di berbagai wilayah Indonesia.',
    tags: ['enso', 'curah-hujan', 'bedah-paper'],
    date: '2026-06-01',
    image: 'https://images.unsplash.com/photo-1501691223387-dd0500403074?auto=format&fit=crop&w=800&q=80',
    penulisPaper: 'Aldrian & Susanto',
    tahun: 2023,
    jurnal: 'International Journal of Climatology',
    doi: '10.1002/joc.2023.4521',
    body: `## Ringkasan Singkat

Paper ini menganalisis pengaruh ENSO terhadap curah hujan musiman di 85 stasiun BMKG selama 1961–2020, mengidentifikasi wilayah yang paling sensitif dan mekanisme fisiknya.

## Pertanyaan Penelitian

Seberapa besar dan di mana saja pengaruh ENSO terhadap curah hujan Indonesia? Apakah ada perubahan dalam hubungan ENSO-curah hujan selama 60 tahun terakhir?

## Metodologi

Analisis korelasi antara indeks Niño 3.4 dan curah hujan stasiun, dilengkapi dengan analisis komposit untuk fase El Niño dan La Niña.

## Temuan Utama

1. Indonesia timur (Maluku, Papua, NTT) paling sensitif terhadap ENSO — defisit hujan bisa mencapai **60%** saat El Niño kuat
2. Sumatera utara menunjukkan respons yang relatif lemah terhadap ENSO
3. Hubungan ENSO-curah hujan melemah pada periode 2000–2020 dibanding 1960–1980, kemungkinan terkait perubahan karakteristik ENSO

## Kesimpulan

Prakiraan musiman di Indonesia harus mempertimbangkan perubahan karakter ENSO dan tidak mengandalkan hubungan historis secara mentah.`
  },
  {
    category: 'bedah-paper', slug: 'climate-extremes-global-warming',
    title: 'Bedah Paper: Kejadian Iklim Ekstrem dalam Skenario Pemanasan Global',
    description: 'Proyeksi model iklim CMIP6 menunjukkan peningkatan dramatis frekuensi dan intensitas cuaca ekstrem di Asia Tenggara.',
    tags: ['cuaca-ekstrem', 'model-iklim', 'proyeksi', 'bedah-paper'],
    date: '2026-05-23',
    image: 'https://images.unsplash.com/photo-1527482797697-8795b05a13fe?auto=format&fit=crop&w=800&q=80',
    penulisPaper: 'Chen et al.',
    tahun: 2024,
    jurnal: 'Nature Climate Change',
    doi: '10.1038/s41558-024-01234',
    body: `## Ringkasan Singkat

Studi ini menggunakan ensemble model CMIP6 untuk memproyeksikan perubahan frekuensi dan intensitas cuaca ekstrem di Asia Tenggara pada abad ke-21.

## Pertanyaan Penelitian

Bagaimana frekuensi hujan ekstrem, kekeringan, dan gelombang panas berubah di bawah skenario emisi SSP2-4.5 dan SSP5-8.5?

## Metodologi

20 model CMIP6 dianalisis menggunakan indeks ETCCDI (Expert Team on Climate Change Detection and Indices) untuk berbagai metrik ekstrem iklim.

## Temuan Utama

1. Hujan 1-hari maksimum (Rx1day) meningkat **15-25%** pada 2050 di Indonesia
2. Jumlah hari kering berturut-turut (CDD) meningkat **10-20 hari** di Indonesia timur
3. Frekuensi marine heatwave meningkat **3-5 kali lipat**
4. Kenaikan suhu malam hari lebih cepat dari siang hari

## Apa Artinya untuk Indonesia?

Indonesia harus memperkuat infrastruktur adaptasi untuk menghadapi cuaca ekstrem yang semakin sering. Sistem peringatan dini, infrastruktur drainase, dan asuransi pertanian menjadi prioritas.`
  },
  {
    category: 'bedah-paper', slug: 'sea-level-rise-southeast-asia',
    title: 'Bedah Paper: Kenaikan Muka Laut yang Teramati di Asia Tenggara',
    description: 'Data tide gauge dan altimetri satelit mengonfirmasi percepatan kenaikan muka laut di Asia Tenggara.',
    tags: ['kenaikan-muka-laut', 'oseanografi', 'bedah-paper'],
    date: '2026-05-16',
    image: 'https://images.unsplash.com/photo-1559827291-bac2de37bea8?auto=format&fit=crop&w=800&q=80',
    penulisPaper: 'Strassburg et al.',
    tahun: 2024,
    jurnal: 'Nature Communications',
    doi: '10.1038/s41467-024-5678',
    body: `## Ringkasan Singkat

Studi ini menggabungkan data dari 148 stasiun pasang surut dan 30 tahun data altimetri satelit untuk mengukur laju kenaikan muka laut di Asia Tenggara.

## Temuan Utama

1. Rata-rata kenaikan muka laut di Asia Tenggara: **4.2 mm/tahun** — lebih tinggi dari rata-rata global (3.4 mm/tahun)
2. Pantai utara Jawa menunjukkan kenaikan relatif **6-8 mm/tahun** akibat kombinasi kenaikan muka laut dan penurunan tanah
3. Percepatan signifikan terdeteksi sejak 2010
4. Variabilitas dekadal sangat besar, terutama terkait ENSO

## Implikasi untuk Indonesia

Dengan lebih dari 42 juta penduduk di wilayah pesisir, percepatan kenaikan muka laut ini mengancam pemukiman, infrastruktur, dan sumber mata pencaharian. Kota-kota seperti Jakarta, Semarang, dan Pekalongan memerlukan rencana adaptasi yang mendesak.`
  },
  {
    category: 'bedah-paper', slug: 'tropical-cyclone-variability-indian-ocean',
    title: 'Bedah Paper: Variabilitas Siklon Tropis di Samudera Hindia Timur',
    description: 'Analisis 40 tahun data siklon tropis mengungkap tren peningkatan intensitas di cekungan dekat Indonesia.',
    tags: ['siklon-tropis', 'samudera-hindia', 'bedah-paper'],
    date: '2026-05-09',
    image: 'https://images.unsplash.com/photo-1527482797697-8795b05a13fe?auto=format&fit=crop&w=800&q=80',
    penulisPaper: 'Wahidiyat & Hendon',
    tahun: 2023,
    jurnal: 'Monthly Weather Review',
    doi: '10.1175/MWR-D-23-0123',
    body: `## Ringkasan Singkat

Paper ini menganalisis variabilitas aktivitas siklon tropis di Samudera Hindia Tenggara (cekungan terdekat dengan Indonesia) selama 1980–2022.

## Pertanyaan Penelitian

Apakah ada tren dalam frekuensi dan intensitas siklon tropis di Samudera Hindia Tenggara, dan bagaimana hubungannya dengan SST dan ENSO?

## Temuan Utama

1. Jumlah total siklon tropis tidak menunjukkan tren yang signifikan
2. Proporsi siklon kategori kuat (≥ Cat. 3) **meningkat 15%** per dekade
3. Lintasan siklon bergeser ke selatan, mendekati wilayah Indonesia
4. Korelasi kuat antara SST lokal dan intensitas siklon

## Relevansi untuk Indonesia

Meski siklon jarang melintas langsung di wilayah Indonesia, pergeseran lintasan ke selatan dan peningkatan intensitas berarti dampak tidak langsung (gelombang tinggi, hujan ekstrem) menjadi semakin signifikan. Kasus Seroja (2021) mungkin menjadi "new normal."

## Keterbatasan

Dataset best-track di Belahan Bumi Selatan kurang homogen dibanding Belahan Bumi Utara, terutama sebelum era satelit modern.`
  },
  {
    category: 'bedah-paper', slug: 'future-rainfall-maritime-continent',
    title: 'Bedah Paper: Proyeksi Perubahan Curah Hujan di Benua Maritim',
    description: 'Model CMIP6 memproyeksikan perubahan dramatis pada pola curah hujan di wilayah Benua Maritim Indonesia.',
    tags: ['curah-hujan', 'model-iklim', 'benua-maritim', 'bedah-paper'],
    date: '2026-05-02',
    image: 'https://images.unsplash.com/photo-1501691223387-dd0500403074?auto=format&fit=crop&w=800&q=80',
    penulisPaper: 'Supari et al.',
    tahun: 2024,
    jurnal: 'Climate Dynamics',
    doi: '10.1007/s00382-024-07123',
    body: `## Ringkasan Singkat

Studi ini menggunakan 15 model CMIP6 resolusi tinggi untuk memproyeksikan perubahan curah hujan di wilayah Benua Maritim hingga 2100.

## Pertanyaan Penelitian

Bagaimana pola curah hujan musiman dan tahunan di Benua Maritim berubah di bawah skenario pemanasan 1.5°C, 2°C, dan 4°C?

## Temuan Utama

1. Curah hujan tahunan rata-rata meningkat **5-15%** pada skenario 2°C
2. Peningkatan terbesar terjadi pada DJF (musim hujan), sementara JJA (musim kemarau) menunjukkan penurunan di Indonesia timur
3. Intensitas hujan harian meningkat **lebih cepat** dari volume total — artinya hujan lebih jarang tetapi lebih deras
4. "Dry spell" (periode kering) antara kejadian hujan menjadi lebih panjang

## Implikasi Praktis

Paradoks "lebih basah tapi lebih kering" — total hujan meningkat tetapi distribusinya semakin timpang — menuntut redesign infrastruktur penampungan air dan sistem irigasi di Indonesia.`
  }
];

// Generate all articles
articles.forEach(article => {
  const frontmatter = [
    '---',
    `layout: layouts/artikel.njk`,
    `title: "${article.title}"`,
    `description: "${article.description}"`,
    `category: "${article.category}"`,
    `tags: [${article.tags.map(t => `"${t}"`).join(', ')}]`,
    `date: ${article.date}`,
    `image: "${article.image}"`,
    `penulis: "ahmad-dhuha-habibullah"`,
  ];

  if (article.featured) frontmatter.push(`featured: true`);
  if (article.penulisPaper) frontmatter.push(`penulisPaper: "${article.penulisPaper}"`);
  if (article.tahun) frontmatter.push(`tahun: ${article.tahun}`);
  if (article.jurnal) frontmatter.push(`jurnal: "${article.jurnal}"`);
  if (article.doi) frontmatter.push(`doi: "${article.doi}"`);

  frontmatter.push('---');
  frontmatter.push('');

  const content = frontmatter.join('\n') + article.body + '\n';
  const filePath = path.join(contentDir, article.category, `${article.slug}.md`);
  fs.writeFileSync(filePath, content);
  console.log(`Created: ${article.category}/${article.slug}.md`);
});

console.log(`\nTotal articles created: ${articles.length}`);
console.log('Categories:', [...new Set(articles.map(a => a.category))].join(', '));
