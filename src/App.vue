<script setup>
import { ref } from 'vue';

// --- DATA PRIBADI (DARI CV) ---
const name = "Azvadennys Vasiguhamiaz, S.Kom.";
const role = "Technical Project Manager & Software Architect";
// [cite: 3, 4]
const about = "Technical Project Manager yang berorientasi hasil dengan rekam jejak dalam menjembatani kebutuhan bisnis kompleks dengan eksekusi teknis. Ahli dalam SDLC, Strategi AI Hybrid, dan pengembangan lintas platform (Mobile, Desktop, Cloud).";
const email = "azvadenis@gmail.com";
const phone = "+62 821 7583 1680";
const location = "Kota Bengkulu, Indonesia";
const linkedin = "https://linkedin.com/in/azvadennys-vasiguhamiaz";
const github = "https://github.com/azvadennys"

// GANTI INI: Simpan foto profil Anda di folder public/assets/profile.jpg
const profilePhoto = "profile.png";

// --- STATE MANAGEMENT ---
const selectedProject = ref(null);
const currentImageIndex = ref(0);

// --- ACTIONS ---
const openProject = (project) => {
  selectedProject.value = project;
  currentImageIndex.value = 0;
  document.body.style.overflow = 'hidden';
};

const closeProject = () => {
  selectedProject.value = null;
  document.body.style.overflow = 'auto';
};

const nextImage = () => {
  if (selectedProject.value && !selectedProject.value.videoUrl) {
    currentImageIndex.value = (currentImageIndex.value + 1) % selectedProject.value.images.length;
  }
};

const prevImage = () => {
  if (selectedProject.value && !selectedProject.value.videoUrl) {
    currentImageIndex.value = (currentImageIndex.value - 1 + selectedProject.value.images.length) % selectedProject.value.images.length;
  }
};

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

// --- DATA PENGALAMAN (SESUAI CV) ---
// [cite: 26-45]
const experiences = [
  {
    id: 1,
    role: "Technical Project Manager & Lead AI Engineer",
    company: "Perseverance Technology Co., Ltd (Remote, Taiwan)",
    period: "Maret 2024 - Sekarang",
    desc: "Bertanggung jawab penuh atas SDLC, menerjemahkan visi bisnis klien menjadi roadmap teknis, dan memimpin tim Agile. Merancang sistem Hybrid AI (TensorFlow + GenAI) dan ekosistem Desktop (PySide6) yang terintegrasi Cloud.",
    tags: ["Project Management", "Hybrid AI", "PySide6", "Agile Leadership"]
  },
  {
    id: 2,
    role: "Product Manager & Data Scientist (Capstone)",
    company: "Bangkit Academy (Google, GoTo, Traveloka)",
    period: "Feb 2023 - Des 2023",
    desc: "Memimpin tim Top 68 Capstone Project membangun 'iFiCam'. Menentukan strategi produk (MVP), user journey, dan mengembangkan model CNN (DenseNet201) untuk klasifikasi kualitas ikan.",
    tags: ["Product Management", "TensorFlow", "CNN", "Team Leadership"]
  },
  {
    id: 3,
    role: "Asisten Laboratorium Komputer",
    company: "Universitas Bengkulu",
    period: "Juli 2021 - Des 2023",
    desc: "Mengelola operasional teknis lab dan memfasilitasi praktikum ratusan mahasiswa. Mengajar materi pemrograman tingkat lanjut (Web, Mobile, Data) serta menyusun modul ajar.",
    tags: ["Teaching", "Lab Operations", "Mentoring"]
  },
  {
    id: 4,
    role: "Full Stack Web Developer",
    company: "Pemerintah Provinsi Bengkulu",
    period: "Mei 2022 - Des 2022",
    desc: "Mengembangkan Government Digitalization berupa Analytics Dashboard berbasis Laravel 9 & MySQL. Menangani end-to-end development dari server lokal hingga deployment produksi.",
    tags: ["Laravel", "MySQL", "Government IT", "Analytics"]
  }
];

// --- DATA SERTIFIKASI (SESUAI CV) ---
// [cite: 53-66]
const certifications = [
  {
    name: "TensorFlow Developer Certification",
    issuer: "Google",
    level: "Expert",
    desc: "Standar global pengembang AI. Menguasai Neural Networks, CNN, dan NLP."
  },
  {
    name: "DeepLearning.AI TensorFlow Professional",
    issuer: "Coursera",
    level: "Professional",
    desc: "Spesialisasi mendalam pada arsitektur Deep Learning modern."
  },
  {
    name: "Google Data Analytics",
    issuer: "Google",
    level: "Professional",
    desc: "Analisis data komprehensif, pembersihan data, dan visualisasi."
  },
  {
    name: "TensorFlow: Data and Deployment",
    issuer: "Coursera",
    level: "Specialization",
    desc: "Deployment model AI ke browser dan perangkat mobile (Edge AI)."
  },
  {
    name: "Google IT Automation with Python",
    issuer: "Google",
    level: "Professional",
    desc: "Otomatisasi sistem operasi, Git/GitHub, dan manajemen konfigurasi."
  },
  {
    name: "Mathematics for Machine Learning",
    issuer: "Imperial College London",
    level: "Specialization",
    desc: "Fondasi matematika (Aljabar Linear, Kalkulus) untuk ML."
  }
];

// --- DATA PENDIDIKAN & BAHASA ---
// [cite: 7-15, 67-70]
const education = {
  university: "Universitas Bengkulu",
  degree: "S1 Teknik Informatika",
  gpa: "3.82 / 4.00",
  period: "Agustus 2020 - Mei 2024",
  thesis: "Implementasi Transfer Learning DenseNet201 dalam Mengidentifikasi Genus Anggrek (High Accuracy)."
};

const languages = [
  { lang: "Bahasa Indonesia", level: "Native / Ibu" },
  { lang: "Bahasa Inggris", level: "Intermediate (TOEFL: 450 / CEFR B1)" }
];

// --- DATA PROYEK (CONTOH DARI CV) ---
// [cite: 36, 37, 50, 44]
const projects = [
  {
    id: 1,
    title: "iFiCam: AI Fish Detection",
    category: "Mobile AI & Research",
    videoUrl: null, // Masukkan URL video jika ada
    images: ["https://placehold.co/800x450/1e293b/38bdf8?text=iFiCam+App"],
    shortDesc: "Aplikasi deteksi kualitas ikan berbasis AI (CNN).",
    fullDesc: "Top 68 Bangkit Academy Capstone Project. Aplikasi mobile yang menggunakan model Convolutional Neural Network (CNN) custom untuk mengklasifikasikan kesegaran ikan secara real-time di perangkat mobile.",
    features: ["Custom CNN Model", "TensorFlow Lite Integration", "Product Strategy (MVP)", "High Accuracy Low Light"],
    tech: ["Flutter", "TensorFlow", "Python", "GCP"]
  },
  {
    id: 2,
    title: "Enterprise Desktop Ecosystem",
    category: "System Engineering",
    videoUrl: null,
    images: ["https://placehold.co/800x450/1e293b/38bdf8?text=PySide6+Dashboard"],
    shortDesc: "Aplikasi desktop skala enterprise dengan arsitektur MVC.",
    fullDesc: "Sistem desktop yang dibangun menggunakan Python (PySide6) untuk klien di Taiwan. Terintegrasi penuh dengan layanan Cloud dan mendukung multi-threading untuk performa tinggi.",
    features: ["MVC Architecture", "Real-time Cloud Sync", "Multi-threading", "Secure Auth"],
    tech: ["Python", "PySide6", "Firebase", "GCP"]
  },
  {
    id: 3,
    title: "Gov Analytics Dashboard",
    category: "Web Development",
    videoUrl: null,
    images: ["https://placehold.co/800x450/1e293b/38bdf8?text=Gov+Dashboard"],
    shortDesc: "Visualisasi data kinerja departemen pemerintahan.",
    fullDesc: "Platform dashboard untuk Pemerintah Provinsi Bengkulu. Memvisualisasikan data kinerja pegawai dan departemen menggunakan grafik interaktif untuk mendukung pengambilan keputusan.",
    features: ["Interactive Charts", "Data Visualization", "Full Stack Deployment", "MySQL Optimization"],
    tech: ["Laravel 9", "MySQL", "Bootstrap", "Chart.js"]
  }
];
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-sky-500/30">

    <nav class="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div class="text-2xl font-extrabold tracking-tight text-sky-400">AV.</div>
        <div class="hidden md:flex space-x-8">
          <a @click.prevent="scrollToSection('hero')" class="nav-link">Home</a>
          <a @click.prevent="scrollToSection('experience')" class="nav-link">Experience</a>
          <a @click.prevent="scrollToSection('certifications')" class="nav-link">Certifications</a>
          <a @click.prevent="scrollToSection('projects')" class="nav-link">Projects</a>
        </div>
        <a :href="linkedin" target="_blank"
          class="px-5 py-2 rounded-full border border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-white transition-all font-semibold text-sm">
          Connect LinkedIn
        </a>
      </div>
    </nav>

    <header id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div
        class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-sky-900/20 via-slate-950 to-slate-950">
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div class="order-2 md:order-1 text-center md:text-left">
          <div
            class="inline-block mb-4 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-semibold tracking-wide">
            Open for Remote & Full-time
          </div>
          <h1 class="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Hi, I'm <br />
            <span class="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              {{ name.split(',')[0] }}
            </span>
          </h1>
          <h2 class="text-xl md:text-2xl text-slate-300 mb-6 font-light">
            {{ role }}
          </h2>
          <p class="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
            {{ about }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button @click="scrollToSection('projects')"
              class="px-8 py-3 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-sky-500/20">
              Lihat Proyek
            </button>
            <button @click="scrollToSection('resume')"
              class="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl border border-slate-700 transition-all">
              Detail CV
            </button>
          </div>
        </div>

        <div class="order-1 md:order-2 flex justify-center">
          <div class="relative w-64 h-64 md:w-80 md:h-80 group">
            <div
              class="absolute -inset-1 bg-gradient-to-r from-sky-500 to-indigo-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt">
            </div>
            <img :src="profilePhoto" alt="Profile Photo"
              class="relative w-full h-full object-cover rounded-full border-4 border-slate-900 shadow-2xl"
              onerror="this.src='https://placehold.co/400x400/1e293b/38bdf8?text=AV'" />
          </div>
        </div>
      </div>
    </header>

    <section id="resume" class="py-24 bg-slate-900 border-y border-slate-800">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-12">

          <div>
            <h3 class="text-2xl font-bold text-sky-400 mb-8 flex items-center">
              <span class="mr-3 text-3xl">🎓</span> Pendidikan
            </h3>
            <div
              class="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-sky-500/50 transition-colors">
              <h4 class="text-xl font-bold text-white">{{ education.university }}</h4>
              <p class="text-sky-400 font-medium mb-4">{{ education.degree }}</p>
              <div class="flex justify-between text-slate-400 text-sm mb-4 border-b border-slate-700 pb-4">
                <span>{{ education.period }}</span>
                <span class="font-bold text-sky-300">IPK: {{ education.gpa }}</span>
              </div>
              <p class="text-slate-300 text-sm italic">
                "{{ education.thesis }}"
              </p>
            </div>
          </div>

          <div>
            <h3 class="text-2xl font-bold text-sky-400 mb-8 flex items-center">
              <span class="mr-3 text-3xl">🌐</span> Bahasa & Keahlian
            </h3>
            <div class="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 h-full">
              <div class="space-y-6">
                <div v-for="(lang, idx) in languages" :key="idx">
                  <div class="flex justify-between mb-1">
                    <span class="text-white font-medium">{{ lang.lang }}</span>
                    <span class="text-sky-400 text-sm">{{ lang.level }}</span>
                  </div>
                  <div class="w-full bg-slate-700 rounded-full h-2">
                    <div class="bg-sky-500 h-2 rounded-full" :style="{ width: idx === 0 ? '100%' : '75%' }"></div>
                  </div>
                </div>
              </div>
              <div class="mt-8 pt-6 border-t border-slate-700">
                <p class="text-slate-400 text-sm">
                  <strong class="text-white">Tech Stack:</strong> TensorFlow, PySide6, Flutter, Laravel, Vue.js, GCP,
                  Git, Agile.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section id="experience" class="py-24 bg-slate-950">
      <div class="max-w-4xl mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          Pengalaman <span class="text-sky-500">Profesional</span>
        </h2>

        <div class="relative border-l-2 border-slate-800 ml-4 md:ml-0 space-y-12">
          <div v-for="exp in experiences" :key="exp.id" class="relative pl-8 md:pl-12 group">
            <div
              class="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-slate-900 border-2 border-sky-500 group-hover:bg-sky-500 transition-colors">
            </div>

            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 class="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                {{ exp.role }}
              </h3>
              <span class="text-sm text-slate-500 font-mono">{{ exp.period }}</span>
            </div>

            <h4 class="text-lg text-sky-500 mb-3">{{ exp.company }}</h4>
            <p class="text-slate-400 mb-4 leading-relaxed text-sm md:text-base">
              {{ exp.desc }}
            </p>

            <div class="flex flex-wrap gap-2">
              <span v-for="tag in exp.tags" :key="tag"
                class="px-2 py-1 text-xs rounded bg-slate-800 text-slate-300 border border-slate-700">
                #{{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="certifications" class="py-24 bg-slate-900">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          Sertifikasi & <span class="text-sky-500">Lisensi</span>
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(cert, index) in certifications" :key="index"
            class="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500/10 transition-all group">
            <div class="flex items-start justify-between mb-4">
              <div class="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center text-xl">
                📜
              </div>
              <span class="text-xs font-bold text-sky-400 bg-sky-500/10 px-2 py-1 rounded">
                {{ cert.level }}
              </span>
            </div>
            <h3 class="text-lg font-bold text-white mb-1 group-hover:text-sky-400 transition-colors">
              {{ cert.name }}
            </h3>
            <p class="text-sm text-sky-200 mb-3">{{ cert.issuer }}</p>
            <p class="text-sm text-slate-400 line-clamp-2">
              {{ cert.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="projects" class="py-24 bg-slate-950">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-bold text-center mb-16 text-white">
          Featured <span class="text-sky-500">Projects</span>
        </h2>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="project in projects" :key="project.id" @click="openProject(project)"
            class="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-sky-500/50 hover:-translate-y-2 transition-all cursor-pointer">
            <div class="h-48 overflow-hidden relative">
              <img :src="project.images[0]"
                class="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
              <div
                class="absolute top-2 right-2 bg-slate-950/80 px-3 py-1 rounded-full text-xs text-white backdrop-blur">
                {{ project.category }}
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-white mb-2 group-hover:text-sky-400">{{ project.title }}</h3>
              <p class="text-slate-400 text-sm mb-4 line-clamp-2">{{ project.shortDesc }}</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="t in project.tech.slice(0, 3)" :key="t"
                  class="text-xs text-sky-400 bg-sky-500/10 px-2 py-1 rounded">
                  {{ t }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="py-12 border-t border-slate-800 bg-slate-900 text-center">
      <div class="max-w-7xl mx-auto px-6">
        <h3 class="text-2xl font-bold text-white mb-6">Let's Collaborate</h3>
        <p class="text-slate-400 mb-8 max-w-xl mx-auto">
          Tertarik mendiskusikan proyek AI atau pengembangan software?
        </p>
        <div class="flex justify-center gap-6 mb-8">
          <a :href="'mailto:' + email" class="text-slate-300 hover:text-sky-400 transition-colors">Email</a>
          <a :href="linkedin" class="text-slate-300 hover:text-sky-400 transition-colors">LinkedIn</a>
          <a :href="github" class="text-slate-300 hover:text-sky-400 transition-colors">GitHub</a>
        </div>
        <p class="text-slate-600 text-sm">
          © 2026 {{ name }}. Built with Vue.js & Tailwind.
        </p>
      </div>
    </footer>

    <Transition name="fade">
      <div v-if="selectedProject" class="fixed inset-0 z-[60] flex items-center justify-center p-4" role="dialog">
        <div class="absolute inset-0 bg-slate-950/90 backdrop-blur-sm" @click="closeProject"></div>
        <div
          class="relative bg-slate-900 w-full max-w-5xl max-h-[90vh] rounded-2xl border border-slate-700 shadow-2xl flex flex-col overflow-hidden"
          @click.stop>
          <button @click="closeProject"
            class="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 hover:bg-sky-500 text-white transition-colors">✕</button>

          <div class="overflow-y-auto custom-scrollbar">
            <div class="bg-black w-full min-h-[300px] md:min-h-[450px] flex items-center justify-center relative">
              <div v-if="selectedProject.videoUrl" class="w-full h-full flex items-center justify-center">
                <video controls autoplay loop class="w-full max-h-[60vh]">
                  <source :src="selectedProject.videoUrl" type="video/mp4">
                </video>
              </div>
              <div v-else class="relative w-full h-full">
                <img :src="selectedProject.images[currentImageIndex]" class="w-full h-[50vh] object-contain" />
                <button v-if="selectedProject.images.length > 1" @click.stop="prevImage"
                  class="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-sky-500 text-white">❮</button>
                <button v-if="selectedProject.images.length > 1" @click.stop="nextImage"
                  class="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-sky-500 text-white">❯</button>
              </div>
            </div>

            <div class="p-8 md:p-10">
              <h2 class="text-3xl font-bold text-white mb-4">{{ selectedProject.title }}</h2>
              <div class="flex flex-wrap gap-2 mb-8">
                <span v-for="tech in selectedProject.tech" :key="tech"
                  class="px-3 py-1 rounded-full text-sm font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20">{{
                    tech }}</span>
              </div>
              <div class="space-y-4 text-slate-300">
                <p>{{ selectedProject.fullDesc }}</p>
                <ul class="list-disc pl-5 space-y-2 mt-4">
                  <li v-for="(feat, i) in selectedProject.features" :key="i"><span class="text-sky-400">✓</span> {{ feat
                    }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>

  </div>
</template>

<style>
.nav-link {
  @apply text-slate-400 hover:text-sky-400 transition-colors cursor-pointer font-medium;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #0f172a;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #334155;
  border-radius: 4px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>