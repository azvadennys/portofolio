<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';

// --- DATA PRIBADI (DARI CV) ---
const name = "Azvadennys Vasiguhamiaz, S.Kom.";
const about = "Technical Project Manager yang berorientasi hasil dengan rekam jejak dalam menjembatani kebutuhan bisnis kompleks dengan eksekusi teknis. Ahli dalam SDLC, Strategi AI Hybrid, dan pengembangan lintas platform (Mobile, Desktop, Cloud).";
const email = "azvadenis@gmail.com";
const phone = "+62 821 7583 1680";
const location = "Kota Bengkulu, Indonesia";
const linkedin = "https://linkedin.com/in/azvadennys-vasiguhamiaz";
const github = "https://github.com/azvadennys";

const profilePhoto = "profile.png";

// --- STATE MANAGEMENT ---
const selectedProject = ref(null);
const currentImageIndex = ref(0);

// --- TYPING ANIMATION ---
const rotatingRoles = [
  "Technical Project Manager",
  "Software Architect",
  "Lead AI Engineer",
  "Hybrid AI Specialist",
  "Full-Stack Developer",
];
const typedRole = ref("");
let typingTimer = null;

onMounted(() => {
  let idx = 0;
  let char = 0;
  let deleting = false;
  const tick = () => {
    const current = rotatingRoles[idx];
    if (!deleting) {
      char++;
      typedRole.value = current.slice(0, char);
      if (char === current.length) {
        deleting = true;
        typingTimer = setTimeout(tick, 1600);
        return;
      }
    } else {
      char--;
      typedRole.value = current.slice(0, char);
      if (char === 0) {
        deleting = false;
        idx = (idx + 1) % rotatingRoles.length;
      }
    }
    typingTimer = setTimeout(tick, deleting ? 35 : 75);
  };
  typingTimer = setTimeout(tick, 600);
});

onUnmounted(() => {
  if (typingTimer) clearTimeout(typingTimer);
});

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

// --- DATA PENGALAMAN ---
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

// --- DATA SERTIFIKASI ---
const certifications = [
  { name: "TensorFlow Developer Certification", issuer: "Google", level: "Expert", desc: "Standar global pengembang AI. Menguasai Neural Networks, CNN, dan NLP." },
  { name: "DeepLearning.AI TensorFlow Professional", issuer: "Coursera", level: "Professional", desc: "Spesialisasi mendalam pada arsitektur Deep Learning modern." },
  { name: "Google Data Analytics", issuer: "Google", level: "Professional", desc: "Analisis data komprehensif, pembersihan data, dan visualisasi." },
  { name: "TensorFlow: Data and Deployment", issuer: "Coursera", level: "Specialization", desc: "Deployment model AI ke browser dan perangkat mobile (Edge AI)." },
  { name: "Google IT Automation with Python", issuer: "Google", level: "Professional", desc: "Otomatisasi sistem operasi, Git/GitHub, dan manajemen konfigurasi." },
  { name: "Mathematics for Machine Learning", issuer: "Imperial College London", level: "Specialization", desc: "Fondasi matematika (Aljabar Linear, Kalkulus) untuk ML." },
  { name: "TOEFL ITP Level 1", issuer: "ETS · Colorado Course Bengkulu", level: "B1 / 473", desc: "Listening 48 · Structure 46 · Reading 48. Bronze achievement, test date 23 Apr 2026." }
];

// --- DATA PENDIDIKAN & BAHASA ---
const education = {
  university: "Universitas Bengkulu",
  degree: "S1 Teknik Informatika",
  gpa: "3.82 / 4.00",
  period: "Agustus 2020 - Mei 2024",
  thesis: "Implementasi Transfer Learning DenseNet201 dalam Mengidentifikasi Genus Anggrek (High Accuracy)."
};

const languages = [
  { lang: "Bahasa Indonesia", level: "Native / Ibu", percent: 100 },
  {
    lang: "Bahasa Inggris",
    level: "TOEFL ITP 473 · CEFR B1",
    percent: 75,
    details: {
      total: 473,
      cefr: "B1",
      award: "Bronze",
      institution: "Colorado Course Bengkulu",
      date: "23 Apr 2026",
      breakdown: [
        { section: "Listening Comprehension",      score: 48, cefr: "B1" },
        { section: "Structure & Written Expression", score: 46, cefr: "B1" },
        { section: "Reading Comprehension",        score: 48, cefr: "B1" },
      ],
    },
  },
];

// --- TECH STACK (Simple Icons CDN  - auto brand color) ---
const techStack = [
  { name: "TensorFlow",  slug: "tensorflow" },
  { name: "Python",      slug: "python" },
  { name: "Flutter",     slug: "flutter" },
  { name: "Laravel",     slug: "laravel" },
  { name: "Vue.js",      slug: "vuedotjs" },
  { name: "MySQL",       slug: "mysql" },
  { name: "Firebase",    slug: "firebase" },
  { name: "Google Cloud",slug: "googlecloud" },
  { name: "Tailwind CSS",slug: "tailwindcss" },
  { name: "Git",         slug: "git" },
  { name: "PySide6",     slug: "qt" },
  { name: "Android",     slug: "android" },
];

// --- KONTAK CEPAT ---
const contactItems = [
  { label: location, href: null,                icon: 'map' },
  { label: email,    href: `mailto:${email}`,   icon: 'mail' },
  { label: phone,    href: `tel:${phone.replace(/\s/g,'')}`, icon: 'phone' },
];

// --- LANGUAGE SWITCHER (powered by Google Translate hidden widget) ---
const supportedLangs = [
  { code: 'id',    flag: '🇮🇩', label: 'Indonesia'  },
  { code: 'en',    flag: '🇺🇸', label: 'English'    },
  { code: 'ja',    flag: '🇯🇵', label: '日本語'      },
  { code: 'zh-CN', flag: '🇨🇳', label: '简体中文'    },
  { code: 'ko',    flag: '🇰🇷', label: '한국어'      },
  { code: 'ar',    flag: '🇸🇦', label: 'العربية'    },
  { code: 'es',    flag: '🇪🇸', label: 'Español'    },
  { code: 'fr',    flag: '🇫🇷', label: 'Français'   },
  { code: 'de',    flag: '🇩🇪', label: 'Deutsch'    },
  { code: 'pt',    flag: '🇵🇹', label: 'Português'  },
  { code: 'ru',    flag: '🇷🇺', label: 'Русский'    },
  { code: 'ms',    flag: '🇲🇾', label: 'Melayu'     },
  { code: 'vi',    flag: '🇻🇳', label: 'Tiếng Việt' },
  { code: 'th',    flag: '🇹🇭', label: 'ไทย'        },
  { code: 'hi',    flag: '🇮🇳', label: 'हिन्दी'      },
  { code: 'nl',    flag: '🇳🇱', label: 'Nederlands' },
];

const LANG_STORAGE_KEY = 'portfolio:lang';
const currentLangCode  = ref(localStorage.getItem(LANG_STORAGE_KEY) || 'id');
const langOpen         = ref(false);
const langDropdownRef  = ref(null);

const currentLang = computed(
  () => supportedLangs.find((l) => l.code === currentLangCode.value) || supportedLangs[0],
);

function setTranslateCookie(target) {
  // Format cookie GT: /{source}/{target}; kosong = no translation
  const value = target === 'id' ? '' : `/id/${target}`;
  const host  = window.location.hostname;
  const expires = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `googtrans=${value}; expires=${expires}; path=/`;
  if (host && host !== 'localhost') {
    document.cookie = `googtrans=${value}; expires=${expires}; path=/; domain=${host}`;
    document.cookie = `googtrans=${value}; expires=${expires}; path=/; domain=.${host}`;
  }
}

function setLanguage(code) {
  if (code === currentLangCode.value) {
    langOpen.value = false;
    return;
  }
  try { localStorage.setItem(LANG_STORAGE_KEY, code); } catch { /* noop */ }
  setTranslateCookie(code);
  // Reload — GT widget akan baca cookie saat init dan auto-translate halaman segar
  window.location.reload();
}

function handleLangClickOutside(e) {
  if (langDropdownRef.value && !langDropdownRef.value.contains(e.target)) {
    langOpen.value = false;
  }
}

onMounted(() => {
  document.addEventListener('click', handleLangClickOutside);
});
onUnmounted(() => {
  document.removeEventListener('click', handleLangClickOutside);
});

// --- DATA PROYEK (sumber: API eksternal  - disembunyikan dari UI) ---
const DATA_ENDPOINT = "https://lintasmegatechnology.co.id";
const CACHE_KEY     = "portfolio:projects:v1";

const toAbs = (p) => (p && p.startsWith('/') ? `${DATA_ENDPOINT}${p}` : p);

function transformProject(p) {
  const cover   = toAbs(p.coverImage);
  const gallery = Array.isArray(p.gallery) ? p.gallery.map(toAbs) : [];
  const images  = cover ? [cover, ...gallery.filter((g) => g !== cover)] : gallery;
  const date    = p.endDate || p.publishedAt;
  const year    = date ? new Date(date).getFullYear().toString() : null;
  return {
    id: p.id,
    slug: p.slug,
    title: p.title,
    category: p.category?.name ?? 'Project',
    industry: p.industry || null,
    client: p.client || null,
    year,
    status: p.status === 'PUBLISHED' ? 'Live' : p.status,
    featured: !!p.featured,
    liveUrl: p.projectUrl || null,
    videoUrl: null,
    images: images.length ? images : ['https://placehold.co/800x450/1e293b/38bdf8?text=No+Preview'],
    shortDesc: p.excerpt || '',
    fullDescHtml: p.content || `<p>${p.excerpt || ''}</p>`,
    tech: Array.isArray(p.techStack) ? p.techStack : [],
  };
}

function readCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed?.projects)) return null;
    return parsed;
  } catch { return null; }
}

function writeCache(payload) {
  try { localStorage.setItem(CACHE_KEY, JSON.stringify(payload)); } catch { /* quota / private mode */ }
}

// Restore dari cache synchronously  - first paint langsung ada data jika sudah pernah load
const cachedInit = readCache();

const projects    = ref(cachedInit?.projects ?? []);
const isLoading   = ref(!cachedInit?.projects?.length);
const loadError   = ref(null);
const lastUpdated = ref(cachedInit?.cachedAt ? new Date(cachedInit.cachedAt) : null);

async function loadProjects({ force = false } = {}) {
  // Skip kalau sudah ada data dan tidak dipaksa refresh
  if (!force && projects.value.length) return;

  isLoading.value = true;
  loadError.value = null;
  try {
    const listRes = await fetch(`${DATA_ENDPOINT}/api/projects?limit=50&status=PUBLISHED`);
    if (!listRes.ok) throw new Error(`HTTP ${listRes.status} saat mengambil daftar proyek`);
    const listJson = await listRes.json();
    const items = listJson?.data ?? [];

    const details = await Promise.all(
      items.map(async (item) => {
        try {
          const r = await fetch(`${DATA_ENDPOINT}/api/projects/${item.slug}`);
          if (!r.ok) return null;
          const j = await r.json();
          return j?.data ?? null;
        } catch { return null; }
      })
    );

    const next = details.filter(Boolean).map(transformProject);
    projects.value = next;
    lastUpdated.value = new Date();
    writeCache({ projects: next, cachedAt: lastUpdated.value.toISOString() });
  } catch (err) {
    loadError.value = err?.message || 'Gagal memperbarui data.';
    console.error('[projects] fetch failed:', err);
  } finally {
    isLoading.value = false;
  }
}

onMounted(() => {
  // Hanya fetch jika cache kosong (first visit)
  if (!projects.value.length) loadProjects();
});

// --- STATISTIK (HERO) ---
const projectCountDisplay = computed(() => {
  if (isLoading.value) return '…';
  if (loadError.value)  return ' -';
  return String(projects.value.length);
});

const stats = computed(() => [
  { label: "Years Exp.",     value: "4+",                       icon: 'briefcase' },
  { label: "Projects",       value: projectCountDisplay.value,  icon: 'rocket' },
  { label: "Certifications", value: "7",                        icon: 'badge' },
  { label: "GPA",            value: "3.82",                     icon: 'star' },
]);

const lastUpdatedLabel = computed(() => {
  if (!lastUpdated.value) return '';
  return lastUpdated.value.toLocaleString('id-ID', {
    day: '2-digit', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  });
});

const fallbackImg = (e) => { e.target.src = 'https://placehold.co/800x450/1e293b/38bdf8?text=Project+Preview'; };
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-sky-500/30">

    <!-- ============ NAVBAR ============ -->
    <nav class="fixed top-0 left-0 w-full z-50 bg-slate-950/70 backdrop-blur-xl border-b border-slate-800/80">
      <div class="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div class="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">AV.</div>
        <div class="hidden md:flex space-x-8">
          <a @click.prevent="scrollToSection('hero')" class="nav-link">Home</a>
          <a @click.prevent="scrollToSection('resume')" class="nav-link">Resume</a>
          <a @click.prevent="scrollToSection('experience')" class="nav-link">Experience</a>
          <a @click.prevent="scrollToSection('certifications')" class="nav-link">Certifications</a>
          <a @click.prevent="scrollToSection('projects')" class="nav-link">Projects</a>
        </div>
        <div class="flex items-center gap-3">
          <!-- Language switcher -->
          <div ref="langDropdownRef" class="relative notranslate" translate="no">
            <button @click.stop="langOpen = !langOpen"
              class="inline-flex items-center gap-1.5 px-3 py-2 rounded-full border border-slate-700 hover:border-sky-500/60 text-slate-300 hover:text-sky-300 transition-all text-sm font-medium"
              :aria-expanded="langOpen" aria-haspopup="listbox" aria-label="Pilih bahasa">
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3.6 9h16.8M3.6 15h16.8M11.5 3a17 17 0 000 18M12.5 3a17 17 0 010 18"/><circle cx="12" cy="12" r="9" stroke-linecap="round" stroke-linejoin="round"/></svg>
              <span>{{ currentLang.flag }}</span>
              <span class="hidden sm:inline">{{ currentLang.label }}</span>
              <svg class="w-3 h-3 opacity-60 transition-transform" :class="{ 'rotate-180': langOpen }" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
            </button>
            <transition name="fade">
              <div v-if="langOpen" role="listbox"
                class="absolute right-0 mt-2 w-56 max-h-80 overflow-y-auto rounded-xl bg-slate-900/95 border border-slate-700 shadow-2xl backdrop-blur-xl py-1 custom-scrollbar">
                <button v-for="lang in supportedLangs" :key="lang.code" @click="setLanguage(lang.code)"
                  role="option" :aria-selected="lang.code === currentLangCode"
                  class="w-full text-left px-4 py-2 text-sm flex items-center gap-3 hover:bg-sky-500/10 transition-colors"
                  :class="lang.code === currentLangCode ? 'text-sky-300 bg-sky-500/5' : 'text-slate-300'">
                  <span class="text-base">{{ lang.flag }}</span>
                  <span class="flex-grow">{{ lang.label }}</span>
                  <svg v-if="lang.code === currentLangCode" class="w-4 h-4 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                </button>
              </div>
            </transition>
          </div>

          <a :href="linkedin" target="_blank"
            class="px-5 py-2 rounded-full border border-sky-500 text-sky-400 hover:bg-sky-500 hover:text-white transition-all font-semibold text-sm">
            <span class="hidden sm:inline">Connect </span>LinkedIn
          </a>
        </div>
      </div>
    </nav>

    <!-- ============ HERO ============ -->
    <header id="hero" class="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">

      <!-- Animated grid layer -->
      <div class="absolute inset-0 opacity-[0.35] animate-grid-pan"
           style="background-image: linear-gradient(rgba(56,189,248,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.08) 1px, transparent 1px); background-size: 60px 60px;">
      </div>
      <!-- Aurora blobs -->
      <div class="absolute -top-40 -left-32 w-[28rem] h-[28rem] bg-sky-600/30 rounded-full blur-[120px] animate-aurora"></div>
      <div class="absolute top-1/3 -right-32 w-[32rem] h-[32rem] bg-indigo-600/25 rounded-full blur-[140px] animate-aurora" style="animation-delay: -6s;"></div>
      <div class="absolute -bottom-40 left-1/3 w-[26rem] h-[26rem] bg-fuchsia-600/15 rounded-full blur-[130px] animate-aurora" style="animation-delay: -12s;"></div>
      <!-- Vignette -->
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950"></div>

      <div class="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center w-full">

        <!-- LEFT: TEXT -->
        <div class="order-2 md:order-1 text-center md:text-left">
          <div
            class="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm font-semibold tracking-wide">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Open for Remote & Full-time
          </div>

          <h1 class="text-4xl md:text-6xl font-bold mb-4 tracking-tight leading-[1.05]">
            Hi, I'm <br />
            <span class="bg-gradient-to-r from-sky-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">
              {{ name.split(',')[0] }}
            </span>
          </h1>

          <!-- Typing role -->
          <h2 class="text-xl md:text-2xl text-slate-300 mb-6 font-light h-8">
            <span class="text-slate-500">{ </span>
            <span class="font-mono text-sky-300">{{ typedRole }}</span>
            <span class="inline-block w-[2px] h-5 bg-sky-300 align-middle animate-blink ml-0.5"></span>
            <span class="text-slate-500"> }</span>
          </h2>

          <!-- Glassmorphism bio card -->
          <div class="relative rounded-2xl p-5 mb-6 bg-white/[0.03] backdrop-blur-md border border-white/10 shadow-2xl shadow-sky-900/10 max-w-xl mx-auto md:mx-0">
            <div class="absolute -inset-px rounded-2xl bg-gradient-to-r from-sky-500/20 via-transparent to-indigo-500/20 pointer-events-none"></div>
            <p class="text-slate-300 text-[15px] leading-relaxed relative">
              {{ about }}
            </p>
          </div>

          <!-- Contact pills -->
          <div class="flex flex-wrap gap-2 mb-7 justify-center md:justify-start">
            <component v-for="c in contactItems" :key="c.label"
              :is="c.href ? 'a' : 'div'" :href="c.href"
              class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs text-slate-300 bg-slate-800/60 border border-slate-700/70 hover:border-sky-500/60 hover:text-sky-300 hover:bg-slate-800 transition-all">
              <!-- icons -->
              <svg v-if="c.icon === 'map'"   xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              <svg v-else-if="c.icon === 'mail'" xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              <svg v-else-if="c.icon === 'phone'" xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.7 2.8a2 2 0 01-.45 1.95L8.09 10.91a11 11 0 005 5l1.645-1.378a2 2 0 011.95-.45l2.8.7A2 2 0 0121 16.72V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              <span>{{ c.label }}</span>
            </component>
          </div>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row gap-3 justify-center md:justify-start mb-10">
            <button @click="scrollToSection('projects')"
              class="px-7 py-3 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 hover:-translate-y-0.5">
              Lihat Proyek →
            </button>
            <button @click="scrollToSection('resume')"
              class="px-7 py-3 bg-slate-800/60 hover:bg-slate-800 text-white font-bold rounded-xl border border-slate-700 hover:border-sky-500/60 transition-all">
              Detail CV
            </button>
          </div>

          <!-- Stat cards -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto md:mx-0">
            <div v-for="s in stats" :key="s.label"
              class="group rounded-xl p-3.5 bg-slate-900/60 border border-slate-800 hover:border-sky-500/50 backdrop-blur transition-all hover:-translate-y-0.5">
              <div class="flex items-center gap-2 text-sky-400 mb-1.5">
                <svg v-if="s.icon === 'briefcase'" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 7h18M5 7v12a2 2 0 002 2h10a2 2 0 002-2V7M9 7V5a2 2 0 012-2h2a2 2 0 012 2v2"/></svg>
                <svg v-else-if="s.icon === 'rocket'" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7M4 21l5-5"/></svg>
                <svg v-else-if="s.icon === 'badge'" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                <svg v-else-if="s.icon === 'star'" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.181-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/></svg>
                <span class="text-[11px] uppercase tracking-wider text-slate-500 group-hover:text-sky-400 transition-colors">{{ s.label }}</span>
              </div>
              <div class="text-2xl font-extrabold text-white">{{ s.value }}</div>
            </div>
          </div>
        </div>

        <!-- RIGHT: PHOTO -->
        <div class="order-1 md:order-2 flex justify-center">
          <div class="relative w-64 h-64 md:w-80 md:h-80 group animate-float-slow">
            <!-- Outer pulse ring -->
            <div class="absolute inset-0 rounded-full border-2 border-sky-500/40 animate-pulse-ring"></div>
            <!-- Tilted gradient blur halo -->
            <div class="absolute -inset-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <!-- Photo -->
            <img :src="profilePhoto" alt="Profile Photo"
              class="relative w-full h-full object-cover rounded-full border-4 border-slate-900 shadow-2xl"
              onerror="this.src='https://placehold.co/400x400/1e293b/38bdf8?text=AV'" />
            <!-- Status dot -->
            <div class="absolute bottom-4 right-4 z-10">
              <span class="relative flex h-5 w-5">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-5 w-5 bg-emerald-500 border-4 border-slate-900"></span>
              </span>
            </div>
            <!-- Floating tech chips -->
            <div class="absolute -top-2 -left-4 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-700 text-[10px] font-mono text-sky-300 backdrop-blur shadow-lg animate-float-slow" style="animation-delay: -2s;">
              &lt;AI/&gt;
            </div>
            <div class="absolute top-12 -right-6 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-700 text-[10px] font-mono text-indigo-300 backdrop-blur shadow-lg animate-float-slow" style="animation-delay: -4s;">
              { PM }
            </div>
            <div class="absolute -bottom-3 -left-6 px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-700 text-[10px] font-mono text-fuchsia-300 backdrop-blur shadow-lg animate-float-slow" style="animation-delay: -6s;">
              .py
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-600 text-xs flex flex-col items-center gap-1 animate-float-slow">
        <span class="font-mono tracking-widest">SCROLL</span>
        <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
      </div>
    </header>

    <!-- ============ RESUME (EDUCATION + TECH STACK) ============ -->
    <section id="resume" class="py-24 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
      <div class="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl"></div>
      <div class="max-w-7xl mx-auto px-6 relative">

        <div class="text-center mb-14">
          <span class="text-sky-400 font-mono text-sm tracking-widest uppercase">// About</span>
          <h2 class="text-3xl md:text-4xl font-bold text-white mt-2">Pendidikan & <span class="text-sky-500">Keahlian</span></h2>
        </div>

        <div class="grid md:grid-cols-2 gap-8">

          <!-- EDUCATION timeline-style card -->
          <div class="relative">
            <div class="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 rounded-2xl border border-slate-700 hover:border-sky-500/50 transition-colors shadow-xl shadow-sky-900/10 h-full backdrop-blur">

              <div class="flex items-start gap-4 mb-6">
                <div class="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-2xl shadow-lg shadow-sky-500/30">
                  🎓
                </div>
                <div>
                  <span class="text-xs font-mono text-sky-400 uppercase tracking-wider">Education</span>
                  <h3 class="text-xl font-bold text-white mt-0.5">{{ education.university }}</h3>
                  <p class="text-sky-400 font-medium text-sm">{{ education.degree }}</p>
                </div>
              </div>

              <!-- Timeline -->
              <div class="relative pl-6 border-l-2 border-sky-500/30 space-y-4 mb-6">
                <div class="relative">
                  <div class="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-sky-500 ring-4 ring-sky-500/20"></div>
                  <div class="flex items-center justify-between">
                    <span class="text-slate-400 text-sm font-mono">{{ education.period }}</span>
                    <span class="text-xs font-bold text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded">GRADUATED</span>
                  </div>
                </div>
                <div class="relative">
                  <div class="absolute -left-[29px] top-1.5 w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20"></div>
                  <div class="flex items-center justify-between">
                    <span class="text-slate-300 text-sm">IPK Final</span>
                    <span class="font-bold text-2xl bg-gradient-to-r from-sky-300 to-indigo-300 bg-clip-text text-transparent">{{ education.gpa }}</span>
                  </div>
                </div>
              </div>

              <!-- Thesis pull-quote -->
              <div class="relative p-4 rounded-xl bg-slate-950/50 border border-slate-700/50">
                <span class="absolute -top-3 left-3 px-2 text-xs font-bold text-sky-400 bg-slate-900">THESIS</span>
                <p class="text-slate-300 text-sm italic leading-relaxed">
                  "{{ education.thesis }}"
                </p>
              </div>
            </div>
          </div>

          <!-- LANGUAGES + TECH STACK -->
          <div class="space-y-6">

            <!-- Languages -->
            <div class="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 rounded-2xl border border-slate-700 backdrop-blur">
              <div class="flex items-center gap-4 mb-6">
                <div class="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-fuchsia-600 flex items-center justify-center text-2xl shadow-lg shadow-indigo-500/30">
                  🌐
                </div>
                <div>
                  <span class="text-xs font-mono text-sky-400 uppercase tracking-wider">Languages</span>
                  <h3 class="text-xl font-bold text-white mt-0.5">Komunikasi</h3>
                </div>
              </div>
              <div class="space-y-5">
                <div v-for="lang in languages" :key="lang.lang">
                  <div class="flex justify-between mb-1.5">
                    <span class="text-white font-medium text-sm">{{ lang.lang }}</span>
                    <span class="text-sky-400 text-xs">{{ lang.level }}</span>
                  </div>
                  <div class="w-full bg-slate-700/50 rounded-full h-2 overflow-hidden">
                    <div class="h-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 transition-all duration-1000"
                         :style="{ width: lang.percent + '%' }"></div>
                  </div>

                  <!-- TOEFL breakdown -->
                  <div v-if="lang.details" class="mt-3 p-3.5 rounded-xl bg-slate-950/60 border border-slate-700/60">
                    <div class="flex items-center justify-between mb-3">
                      <div class="flex items-center gap-2">
                        <span class="text-[10px] font-bold text-amber-300 bg-amber-500/10 border border-amber-500/30 px-1.5 py-0.5 rounded uppercase tracking-wider">{{ lang.details.award }}</span>
                        <span class="text-[11px] font-mono text-slate-400">{{ lang.details.date }}</span>
                      </div>
                      <div class="text-right">
                        <div class="text-[10px] uppercase tracking-widest text-slate-500">Total</div>
                        <div class="font-extrabold text-lg bg-gradient-to-r from-sky-300 to-indigo-300 bg-clip-text text-transparent leading-none">
                          {{ lang.details.total }}
                          <span class="text-[10px] text-slate-500 font-mono align-top">/677</span>
                        </div>
                      </div>
                    </div>
                    <div class="grid grid-cols-3 gap-2">
                      <div v-for="b in lang.details.breakdown" :key="b.section"
                           class="text-center p-2 rounded-lg bg-slate-900/70 border border-slate-800">
                        <div class="text-[10px] text-slate-500 uppercase tracking-wider line-clamp-1" :title="b.section">{{ b.section.split(' ')[0] }}</div>
                        <div class="text-base font-bold text-white mt-0.5">{{ b.score }}</div>
                        <div class="text-[10px] font-mono text-emerald-300">{{ b.cefr }}</div>
                      </div>
                    </div>
                    <div class="mt-2.5 text-[10px] text-slate-500 italic text-right">
                      Issued by ETS · {{ lang.details.institution }}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Tech Stack with Devicon/SimpleIcons -->
            <div class="bg-gradient-to-br from-slate-800/80 to-slate-900/80 p-8 rounded-2xl border border-slate-700 backdrop-blur">
              <div class="flex items-center gap-4 mb-6">
                <div class="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500 to-sky-600 flex items-center justify-center text-2xl shadow-lg shadow-emerald-500/30">
                  ⚡
                </div>
                <div>
                  <span class="text-xs font-mono text-sky-400 uppercase tracking-wider">Tech Stack</span>
                  <h3 class="text-xl font-bold text-white mt-0.5">Tools & Frameworks</h3>
                </div>
              </div>
              <div class="flex flex-wrap gap-2">
                <div v-for="t in techStack" :key="t.name"
                  class="group inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-950/60 border border-slate-700 hover:border-sky-500/60 hover:bg-slate-950 transition-all cursor-default">
                  <img :src="`https://cdn.simpleicons.org/${t.slug}`"
                       :alt="t.name"
                       class="w-4 h-4 group-hover:scale-110 transition-transform"
                       onerror="this.style.display='none'"/>
                  <span class="text-xs font-medium text-slate-300 group-hover:text-white">{{ t.name }}</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>

    <!-- ============ EXPERIENCE ============ -->
    <section id="experience" class="py-24 bg-slate-950 relative">
      <div class="max-w-4xl mx-auto px-6">
        <div class="text-center mb-14">
          <span class="text-sky-400 font-mono text-sm tracking-widest uppercase">// Career</span>
          <h2 class="text-3xl md:text-4xl font-bold text-white mt-2">Pengalaman <span class="text-sky-500">Profesional</span></h2>
        </div>

        <div class="relative border-l-2 border-slate-800 ml-4 md:ml-0 space-y-12">
          <div v-for="exp in experiences" :key="exp.id" class="relative pl-8 md:pl-12 group">
            <div class="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-slate-900 border-2 border-sky-500 group-hover:bg-sky-500 group-hover:scale-125 transition-all"></div>

            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 class="text-xl font-bold text-white group-hover:text-sky-400 transition-colors">
                {{ exp.role }}
              </h3>
              <span class="text-sm text-slate-500 font-mono">{{ exp.period }}</span>
            </div>

            <h4 class="text-lg text-sky-500 mb-3">{{ exp.company }}</h4>
            <p class="text-slate-400 mb-4 leading-relaxed text-sm md:text-base">{{ exp.desc }}</p>

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

    <!-- ============ CERTIFICATIONS ============ -->
    <section id="certifications" class="py-24 bg-slate-900">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-14">
          <span class="text-sky-400 font-mono text-sm tracking-widest uppercase">// Credentials</span>
          <h2 class="text-3xl md:text-4xl font-bold text-white mt-2">Sertifikasi & <span class="text-sky-500">Lisensi</span></h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="(cert, index) in certifications" :key="index"
            class="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-sky-500 hover:shadow-lg hover:shadow-sky-500/10 hover:-translate-y-1 transition-all group">
            <div class="flex items-start justify-between mb-4">
              <div class="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center text-xl">📜</div>
              <span class="text-xs font-bold text-sky-400 bg-sky-500/10 px-2 py-1 rounded">{{ cert.level }}</span>
            </div>
            <h3 class="text-lg font-bold text-white mb-1 group-hover:text-sky-400 transition-colors">{{ cert.name }}</h3>
            <p class="text-sm text-sky-200 mb-3">{{ cert.issuer }}</p>
            <p class="text-sm text-slate-400 line-clamp-2">{{ cert.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ PROJECTS ============ -->
    <section id="projects" class="py-24 bg-slate-950">
      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-14">
          <span class="text-sky-400 font-mono text-sm tracking-widest uppercase">// Portfolio</span>
          <h2 class="text-3xl md:text-4xl font-bold text-white mt-2">Featured <span class="text-sky-500">Projects</span></h2>
          <p class="text-slate-400 mt-3 max-w-2xl mx-auto text-sm">
            {{ projectCountDisplay }} proyek terpilih dari berbagai industri  - pemerintahan, edukasi, pariwisata, dan olahraga.
          </p>
          <div class="flex flex-wrap items-center justify-center gap-3 mt-4 text-xs text-slate-500">
            <span v-if="lastUpdatedLabel" class="inline-flex items-center gap-1.5">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Diperbarui: <span class="font-mono text-slate-400">{{ lastUpdatedLabel }}</span>
            </span>
            <button @click="loadProjects({ force: true })" :disabled="isLoading"
              class="inline-flex items-center gap-1.5 px-3 py-1 rounded-md border border-slate-700 hover:border-sky-500/60 hover:text-sky-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              <svg class="w-3 h-3" :class="{ 'animate-spin': isLoading }" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              {{ isLoading ? 'Memperbarui…' : 'Refresh Data' }}
            </button>
            <span v-if="loadError && projects.length" class="inline-flex items-center gap-1 text-rose-400">
              ⚠ Pembaruan gagal  - menampilkan data tersimpan
            </span>
          </div>
        </div>

        <!-- Loading skeleton (hanya saat first-load tanpa cache) -->
        <div v-if="isLoading && !projects.length" class="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          <div v-for="n in 6" :key="n" class="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 animate-pulse">
            <div class="h-48 bg-slate-800"></div>
            <div class="p-6 space-y-3">
              <div class="h-5 bg-slate-800 rounded w-3/4"></div>
              <div class="h-3 bg-slate-800 rounded w-1/2"></div>
              <div class="h-3 bg-slate-800 rounded w-full"></div>
              <div class="flex gap-2 pt-2">
                <div class="h-5 w-14 bg-slate-800 rounded"></div>
                <div class="h-5 w-14 bg-slate-800 rounded"></div>
                <div class="h-5 w-14 bg-slate-800 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Error state (hanya jika tidak ada data sama sekali) -->
        <div v-else-if="loadError && !projects.length"
             class="max-w-2xl mx-auto p-8 rounded-2xl border border-rose-500/30 bg-rose-500/5 text-center">
          <div class="text-4xl mb-3">⚠️</div>
          <h3 class="text-lg font-bold text-rose-300 mb-2">Tidak dapat memuat proyek</h3>
          <p class="text-sm text-slate-400 mb-5">
            Koneksi terputus atau server tidak merespons. Coba lagi setelah cek koneksi internet Anda.
          </p>
          <button @click="loadProjects({ force: true })"
            class="px-5 py-2 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/40 text-rose-200 text-sm font-bold transition-colors">
            Coba Lagi
          </button>
        </div>

        <!-- Empty state -->
        <div v-else-if="!projects.length" class="text-center py-12 text-slate-500">
          Belum ada proyek tersedia saat ini.
        </div>

        <!-- Project grid -->
        <div v-else class="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          <div v-for="project in projects" :key="project.id" @click="openProject(project)"
            class="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-sky-500/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-500/10 transition-all cursor-pointer flex flex-col relative">
            <div v-if="project.featured" class="absolute top-3 left-3 z-10 inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/90 text-amber-950 text-[10px] font-bold uppercase tracking-wider shadow-lg">
              ★ Featured
            </div>
            <div class="h-48 overflow-hidden relative bg-slate-800">
              <img :src="project.images[0]" @error="fallbackImg"
                class="w-full h-full object-cover transition duration-500 group-hover:scale-110" loading="lazy" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent"></div>
              <div class="absolute top-3 right-3 bg-slate-950/80 px-3 py-1 rounded-full text-[11px] font-medium text-sky-300 backdrop-blur border border-slate-700/50">
                {{ project.category }}
              </div>
              <div v-if="project.year" class="absolute bottom-3 left-3 text-[11px] font-mono text-slate-300">
                {{ project.year }}
              </div>
            </div>
            <div class="p-6 flex flex-col flex-grow">
              <h3 class="text-lg font-bold text-white mb-1 group-hover:text-sky-400 transition-colors line-clamp-2 min-h-[3.5rem]">{{ project.title }}</h3>
              <p v-if="project.client" class="text-xs text-slate-500 mb-3 italic line-clamp-1">📍 {{ project.client }}</p>
              <p class="text-slate-400 text-sm mb-4 line-clamp-2 flex-grow">{{ project.shortDesc }}</p>
              <div class="flex flex-wrap gap-1.5">
                <span v-for="t in project.tech.slice(0, 4)" :key="t"
                  class="text-[11px] text-sky-400 bg-sky-500/10 border border-sky-500/20 px-2 py-0.5 rounded">
                  {{ t }}
                </span>
                <span v-if="project.tech.length > 4" class="text-[11px] text-slate-500 px-1">+{{ project.tech.length - 4 }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ FOOTER ============ -->
    <footer class="py-12 border-t border-slate-800 bg-slate-900 text-center">
      <div class="max-w-7xl mx-auto px-6">
        <h3 class="text-2xl font-bold text-white mb-3">Let's Collaborate</h3>
        <p class="text-slate-400 mb-6 max-w-xl mx-auto">
          Tertarik mendiskusikan proyek AI atau pengembangan software?
        </p>
        <div class="flex justify-center gap-6 mb-8">
          <a :href="'mailto:' + email" class="text-slate-300 hover:text-sky-400 transition-colors">Email</a>
          <a :href="linkedin" class="text-slate-300 hover:text-sky-400 transition-colors">LinkedIn</a>
          <a :href="github" class="text-slate-300 hover:text-sky-400 transition-colors">GitHub</a>
        </div>
        <p class="text-slate-600 text-sm">© 2026 {{ name }}. Built with Vue.js & Tailwind.</p>
      </div>
    </footer>

    <!-- ============ MODAL ============ -->
    <Transition name="fade">
      <div v-if="selectedProject" class="fixed inset-0 z-[60] flex items-center justify-center p-4" role="dialog">
        <div class="absolute inset-0 bg-slate-950/90 backdrop-blur-sm" @click="closeProject"></div>
        <div class="relative bg-slate-900 w-full max-w-5xl max-h-[90vh] rounded-2xl border border-slate-700 shadow-2xl flex flex-col overflow-hidden" @click.stop>
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
                <img :src="selectedProject.images[currentImageIndex]" @error="fallbackImg" class="w-full h-[50vh] object-contain" />
                <button v-if="selectedProject.images.length > 1" @click.stop="prevImage"
                  class="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-sky-500 text-white">❮</button>
                <button v-if="selectedProject.images.length > 1" @click.stop="nextImage"
                  class="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-sky-500 text-white">❯</button>
                <!-- Image counter & dots -->
                <div v-if="selectedProject.images.length > 1"
                     class="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur text-xs text-white font-mono">
                  <span>{{ currentImageIndex + 1 }} / {{ selectedProject.images.length }}</span>
                </div>
              </div>
            </div>

            <div class="p-8 md:p-10">
              <div class="flex flex-wrap items-center gap-3 mb-3">
                <span class="text-xs font-mono text-sky-400 uppercase tracking-wider">{{ selectedProject.category }}</span>
                <span v-if="selectedProject.year" class="text-xs text-slate-500">· {{ selectedProject.year }}</span>
                <span v-if="selectedProject.status"
                      class="text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider"
                      :class="/live|operasional|released|rilis/i.test(selectedProject.status) ? 'text-emerald-300 bg-emerald-500/10 border border-emerald-500/30' : 'text-slate-300 bg-slate-700/40 border border-slate-600/40'">
                  {{ selectedProject.status }}
                </span>
              </div>
              <h2 class="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">{{ selectedProject.title }}</h2>
              <p v-if="selectedProject.client" class="text-sm text-slate-400 mb-1">
                <span class="text-slate-500">Client:</span> {{ selectedProject.client }}
              </p>
              <p v-if="selectedProject.industry" class="text-xs text-slate-500 italic mb-5">
                {{ selectedProject.industry }}
              </p>

              <div class="flex flex-wrap gap-2 mb-6">
                <span v-for="tech in selectedProject.tech" :key="tech"
                  class="px-3 py-1 rounded-full text-xs font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20">{{ tech }}</span>
              </div>

              <a v-if="selectedProject.liveUrl" :href="selectedProject.liveUrl" target="_blank" rel="noopener"
                 class="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-lg bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white text-sm font-bold transition-all shadow-lg shadow-sky-500/20">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                Kunjungi Proyek
              </a>

              <div class="space-y-4">
                <h3 class="text-sm font-bold text-sky-400 uppercase tracking-wider">Detail Proyek</h3>
                <div class="project-content text-slate-300" v-html="selectedProject.fullDescHtml"></div>
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
.custom-scrollbar::-webkit-scrollbar { width: 8px; }
.custom-scrollbar::-webkit-scrollbar-track { background: #0f172a; }
.custom-scrollbar::-webkit-scrollbar-thumb { background-color: #334155; border-radius: 4px; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

html { scroll-behavior: smooth; }

/* Sembunyikan widget bawaan Google Translate — kita pakai dropdown kustom.
   JANGAN pakai visibility:hidden / display:none di container, karena GT butuh
   element terlihat untuk initialize. Trick: render off-screen tapi tetap "visible". */
#google_translate_element {
  position: fixed;
  top: 0;
  left: 0;
  width: 1px;
  height: 1px;
  overflow: hidden;
  opacity: 0;
  pointer-events: none;
  z-index: -1;
}
.goog-te-banner-frame.skiptranslate,
.goog-te-gadget-icon,
.goog-logo-link { display: none !important; }
.goog-te-gadget { color: transparent !important; font-size: 0 !important; }
.goog-te-gadget > span { display: none !important; }
body { top: 0 !important; position: static !important; }
/* Cegah tooltip Google muncul saat hover teks terjemahan */
.goog-tooltip, .goog-tooltip:hover, .goog-text-highlight {
  background-color: transparent !important;
  box-shadow: none !important;
  border: none !important;
}
.fade-enter-active, .fade-leave-active { transition: opacity 0.15s ease, transform 0.15s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(-4px); }

/* Prose styling untuk content HTML dari API LMT */
.project-content { font-size: 0.95rem; line-height: 1.7; }
.project-content > * + * { margin-top: 0.85em; }
.project-content h1,
.project-content h2,
.project-content h3,
.project-content h4 {
  color: #f1f5f9;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin-top: 1.6em;
}
.project-content h1 { font-size: 1.5rem; }
.project-content h2 { font-size: 1.25rem; }
.project-content h3 { font-size: 1.1rem; color: #38bdf8; }
.project-content h4 { font-size: 1rem; color: #7dd3fc; }
.project-content p     { color: #cbd5e1; }
.project-content a     { color: #38bdf8; text-decoration: underline; text-underline-offset: 2px; }
.project-content a:hover { color: #7dd3fc; }
.project-content strong{ color: #f1f5f9; font-weight: 600; }
.project-content em    { color: #e2e8f0; }
.project-content ul,
.project-content ol    { padding-left: 1.4rem; }
.project-content ul    { list-style: disc; }
.project-content ol    { list-style: decimal; }
.project-content li    { margin-top: 0.35em; color: #cbd5e1; }
.project-content li::marker { color: #38bdf8; }
.project-content blockquote {
  border-left: 3px solid #0ea5e9;
  padding-left: 1rem;
  color: #94a3b8;
  font-style: italic;
}
.project-content code {
  background: #1e293b;
  color: #7dd3fc;
  padding: 0.1em 0.4em;
  border-radius: 4px;
  font-size: 0.85em;
}
.project-content pre {
  background: #020617;
  border: 1px solid #1e293b;
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
}
.project-content pre code { background: transparent; padding: 0; }
.project-content img {
  border-radius: 8px;
  border: 1px solid #1e293b;
  max-width: 100%;
}
.project-content hr { border-color: #1e293b; margin: 1.5em 0; }
.project-content table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
}
.project-content th,
.project-content td {
  border: 1px solid #1e293b;
  padding: 0.5rem 0.75rem;
  text-align: left;
}
.project-content th { background: #0f172a; color: #f1f5f9; }
</style>
