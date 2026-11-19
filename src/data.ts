/**
 * Sumber data tunggal untuk seluruh isi website.
 * Catatan: nomor WhatsApp diisi dari data pemilik yang sudah diverifikasi.
 * Jika belum tersedia, ganti nilai WHATSAPP_NUMBER di bawah (format internasional, tanpa "+"),
 * seluruh tautan WhatsApp akan otomatis menyesuaikan.
 */
export const WHATSAPP_NUMBER = "6281234567890"; // TODO: ganti dengan nomor WhatsApp terverifikasi milik Dewi
export const WHATSAPP_MESSAGE = "Halo Dewi, saya ingin berkolaborasi / berdiskusi tentang proyek kreatif.";

export const PROFILE = {
  name: "Dewi Nabila Fibrianti",
  shortName: "Dewi",
  initials: "DN",
  fullInitials: "DNF",
  label: "Creative Communicator & Visual Enthusiast",
  headline: "Hello, I'm Dewi Nabila Fibrianti.",
  intro:
    "Saya mahasiswa Ilmu Komunikasi yang memiliki ketertarikan pada fotografi, desain grafis, media sosial, dan komunikasi kreatif.",
  tagline: "Capturing Moments, Creating Visuals, Inspiring Through Creativity.",
  instagram: "@nabiladewi894",
  instagramUrl: "https://instagram.com/nabiladewi894",
  email: "fibriantinabila112@gmail.com",
};

export const FACTS: { label: string; value: string }[] = [
  { label: "Nama", value: "Dewi Nabila Fibrianti" },
  { label: "Universitas", value: "Universitas Muhammadiyah Sidoarjo" },
  { label: "Program Studi", value: "Ilmu Komunikasi" },
  { label: "Periode", value: "2023 — Sekarang" },
  { label: "Organisasi", value: "Media Community Visualization (McV)" },
];

export const EDUCATION: {
  period: string;
  institution: string;
  major: string;
  note: string;
}[] = [
  {
    period: "2023 — Sekarang",
    institution: "Universitas Muhammadiyah Sidoarjo",
    major: "Ilmu Komunikasi",
    note: "Menempuh perkuliahan dengan ketertarikan pada komunikasi kreatif, fotografi, dan desain visual.",
  },
  {
    period: "2020 — 2023",
    institution: "MA NU Hasan Munadi Beji",
    major: "IPS",
    note: "Pendidikan menengah dengan jurusan Ilmu Pengetahuan Sosial.",
  },
];

export const EXPERIENCE: {
  period: string;
  org: string;
  role: string;
  points: string[];
}[] = [
  {
    period: "2023 — Sekarang",
    org: "Media Community Visualization (McV)",
    role: "Badan Pengurus Harian",
    points: [
      "Bertanggung jawab pada kegiatan kesekretariatan organisasi.",
      "Mengelola peminjaman barang dan pencatatannya.",
      "Mengelola surat masuk dan surat keluar organisasi.",
    ],
  },
  {
    period: "2020 — 2023",
    org: "Organisasi Siswa Intra Madrasah (OSIM)",
    role: "Pengurus OSIM",
    points: [
      "Menjadi pengurus OSIM selama tiga tahun masa kepengurusan.",
      "Terlibat dalam perencanaan kegiatan sekolah.",
      "Terlibat dalam pelaksanaan kegiatan sekolah.",
    ],
  },
];

export const SOFT_SKILLS = [
  { name: "Communication", desc: "Menyampaikan ide dan pesan secara jelas, lisan maupun tulisan." },
  { name: "Teamwork", desc: "Bekerja bersama tim dalam kegiatan organisasi dan proyek kreatif." },
  { name: "Time Management", desc: "Menyelesaikan tugas dan agenda organisasi sesuai tenggat." },
  { name: "Adaptability", desc: "Menyesuaikan diri dengan peran, media, dan situasi kerja yang baru." },
];

export const HARD_SKILLS = [
  { name: "Canva", desc: "Desain grafis, layout, dan kebutuhan konten visual." },
  { name: "Microsoft Word", desc: "Penulisan, proposal, dan dokumen kesekretariatan." },
  { name: "CapCut", desc: "Penyuntingan video pendek untuk kebutuhan media sosial." },
  { name: "Microsoft PowerPoint", desc: "Presentasi dan penyusunan materi visual." },
];

export type Project = {
  index: string;
  title: string;
  category: string;
  year: string;
  tools: string;
  summary: string;
  detail: string;
  images: { src: string; caption: string; alt: string }[];
};

export const PROJECTS: Project[] = [
  {
    index: "01",
    title: "Basic Photography",
    category: "Fotografi",
    year: "Mata Kuliah",
    tools: "Kamera · Editing Dasar",
    summary:
      "Karya fotografi aktivitas sehari-hari yang mengeksplorasi kreativitas dan keindahan lingkungan sekitar.",
    detail:
      "Seri fotografi yang mengangkat aktivitas sehari-hari dan keindahan lingkungan sekitar. Proses penggarapannya dimulai dari pengamatan objek, pengaturan komposisi, hingga pemilihan sudut pandang yang sederhana namun tetap memiliki cerita.",
    images: [
      {
        src: "images/work-photo-01.jpg",
        caption: "Frame 01 — Lingkungan sekitar",
        alt: "Karya fotografi: sepeda yang bersandar di dinding biru pastel dengan bayangan sore hari.",
      },
      {
        src: "images/work-photo-02.jpg",
        caption: "Frame 02 — Aktivitas sehari-hari",
        alt: "Karya fotografi: meja kayu dengan gelas es teh, buku catatan, dan kamera di bawah cahaya jendela.",
      },
    ],
  },
  {
    index: "02",
    title: "Basic Graphic Design",
    category: "Desain Grafis",
    year: "Mata Kuliah",
    tools: "Canva",
    summary:
      "Desain kemasan produk dari mata kuliah Basic Desain Grafis dengan penerapan dasar desain menggunakan Canva.",
    detail:
      "Proyek desain kemasan produk yang dikerjakan pada mata kuliah Basic Desain Grafis. Penggarapan dimulai dari perancangan konsep visual, pemilihan warna dan tipografi, hingga penerapan dasar desain pada kemasan menggunakan Canva.",
    images: [
      {
        src: "images/work-design-01.jpg",
        caption: "Frame 01 — Kemasan produk",
        alt: "Karya desain grafis: mockup kemasan kertas berbentuk tabung dengan pita label biru di atas latar biru muda.",
      },
      {
        src: "images/work-design-02.jpg",
        caption: "Frame 02 — Proses desain",
        alt: "Karya desain grafis: lembar layout, swatch warna, dan mockup kemasan di atas meja kerja.",
      },
    ],
  },
];

export const CAREER_GOALS = [
  {
    index: "01",
    name: "Creative Media",
    desc: "Mengembangkan kemampuan menyusun konten kreatif untuk berbagai kanal media.",
  },
  {
    index: "02",
    name: "Photography",
    desc: "Mendalami teknik fotografi untuk kebutuhan dokumentasi, editorial, dan cerita visual.",
  },
  {
    index: "03",
    name: "Graphic Design",
    desc: "Memperdalam penerapan dasar desain pada kebutuhan identitas visual dan kemasan.",
  },
  {
    index: "04",
    name: "Social Media",
    desc: "Memahami penyusunan konten dan komunikasi yang tepat sasaran di media sosial.",
  },
];

export const NAV_ITEMS = [
  { id: "home", label: "Home", index: "01" },
  { id: "about", label: "About Me", index: "02" },
  { id: "experience", label: "Experience", index: "03" },
  { id: "skills", label: "Skills", index: "04" },
  { id: "portfolio", label: "Portfolio", index: "05" },
  { id: "contact", label: "Contact", index: "06" },
];
