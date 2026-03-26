<template>
  <!-- Custom Cursor -->
  <div class="cursor-dot" ref="cursorDot"></div>
  <div class="cursor-ring" ref="cursorRing"></div>

  <!-- Navigation -->
  <nav ref="navbar">
    <span class="nav-logo">Arjun.</span>
    <ul class="nav-links">
      <li><a href="#hero">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
  </nav>

  <!-- HERO -->
  <section class="hero" id="hero">
    <div class="blob blob-1"></div>
    <div class="hero-text" ref="heroText">
      <div class="hero-tag"><span></span> Available for work</div>
      <h1>
        <span class="line"><span class="word" ref="w1">Full-Stack</span></span>
        <span class="line"><span class="word accent" ref="w2">Developer</span></span>
        <span class="line"><span class="word" ref="w3">&amp; AI Builder</span></span>
      </h1>
      <p class="hero-desc">
        I craft intelligent web applications — from pixel-perfect frontends to scalable
        backends, LLM-powered chatbots, and EdTech platforms that actually work.
      </p>
      <div class="hero-actions">
        <a href="#projects" class="btn btn-primary">View My Work</a>
        <a href="#contact" class="btn btn-outline">Let's Talk</a>
      </div>
    </div>

    <div class="hero-image-wrap">
      <div class="image-orbit">
        <div class="orbit-ring-2">
          <div class="orbit-dot-2"></div>
        </div>
        <div class="orbit-ring">
          <div class="orbit-dot"></div>
        </div>
        <div class="photo-frame" ref="photoFrame">
          <div class="photo-glow"></div>
          <img src="/profile.jpg" alt="Arjun" ref="profileImg" />
        </div>

        <div class="tech-badge badge-1">
          <span class="badge-dot" style="background:#42b883"></span> Vue.js
        </div>
        <div class="tech-badge badge-2">
          <span class="badge-dot" style="background:#009688"></span> FastAPI
        </div>
        <div class="tech-badge badge-3">
          <span class="badge-dot" style="background:#6c63ff"></span> AI/LLM
        </div>
      </div>
    </div>
  </section>

  <!-- STATS BAR -->
  <div class="stats-bar" ref="statsBar">
    <div class="stat-item" v-for="s in stats" :key="s.label">
      <span class="stat-num">{{ s.num }}</span>
      <span class="stat-label">{{ s.label }}</span>
    </div>
  </div>

  <!-- ABOUT -->
  <section class="about" id="about">
    <div ref="aboutLeft">
      <div class="section-eyebrow">About Me</div>
      <h2 class="section-title">A developer who loves building smart things</h2>
      <p class="about-text">
        I'm Arjun, a full-stack developer based in Perumpāvūr, Kerala. I specialise in
        building educational technology platforms, AI-integrated web applications, and
        robust RESTful backends. I enjoy turning complex problems into clean, scalable code.
      </p>
      <p class="about-text">
        Currently focused on LLM integration, RAG systems, and crafting exceptional
        developer experiences with Vue 3, FastAPI, and PostgreSQL.
      </p>
      <div class="info-grid">
        <div class="info-item">
          <div class="info-label">Location</div>
          <div class="info-value">Perumpāvūr, Kerala, IN</div>
        </div>
        <div class="info-item">
          <div class="info-label">Email</div>
          <div class="info-value">arjun@devmail.in</div>
        </div>
        <div class="info-item">
          <div class="info-label">Phone</div>
          <div class="info-value">+91 98765 43210</div>
        </div>
        <div class="info-item">
          <div class="info-label">Freelance</div>
          <div class="info-value">Open to offers ✓</div>
        </div>
      </div>
    </div>

    <div ref="aboutRight">
      <div class="section-eyebrow">Qualifications</div>
      <ul class="qual-list">
        <li class="qual-item" v-for="q in qualifications" :key="q.degree">
          <div class="qual-degree">{{ q.degree }}</div>
          <div class="qual-school">{{ q.school }}</div>
          <div class="qual-year">{{ q.year }}</div>
        </li>
      </ul>
    </div>
  </section>

  <!-- SKILLS -->
  <section class="skills" id="skills">
    <div class="skills-intro">
      <div class="section-eyebrow">Tech Stack</div>
      <h2 class="section-title">Tools I use to build great products</h2>
    </div>
    <div class="skills-grid">
      <div class="skill-card" v-for="s in skillsList" :key="s.name" ref="skillCards">
        <div class="skill-icon">{{ s.icon }}</div>
        <div class="skill-name">{{ s.name }}</div>
      </div>
    </div>
  </section>

  <!-- PROJECTS -->
  <section class="projects" id="projects">
    <div class="projects-header">
      <div>
        <div class="section-eyebrow">Projects</div>
        <h2 class="section-title">Things I've built</h2>
      </div>
      <a href="#contact" class="btn btn-outline">Work with me →</a>
    </div>
    <div class="projects-grid">
      <div class="project-card" v-for="p in projects" :key="p.title" ref="projectCards">
        <div class="project-img">
          <div class="project-img-placeholder" :style="{ background: p.bg }">{{ p.emoji }}</div>
        </div>
        <div class="project-body">
          <div class="project-tags"><span class="tag" v-for="t in p.tags" :key="t">{{ t }}</span></div>
          <div class="project-title">{{ p.title }}</div>
          <div class="project-desc">{{ p.desc }}</div>
        </div>
        <div class="project-footer">
          <a href="#" class="project-link">Live Demo →</a>
          <a href="#" class="project-link">GitHub →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- CONTACT -->
  <section class="contact" id="contact">
    <div class="blob blob-2"></div>
    <div class="section-eyebrow">Contact</div>
    <h2 class="section-title" style="margin-bottom:2.5rem">Let's build something great</h2>
    <div class="contact-inner">
      <form class="contact-form" @submit.prevent>
        <div class="form-group">
          <label class="form-label">Name</label>
          <input class="form-input" type="text" placeholder="Your full name" />
        </div>
        <div class="form-group">
          <label class="form-label">Email</label>
          <input class="form-input" type="email" placeholder="your@email.com" />
        </div>
        <div class="form-group">
          <label class="form-label">Message</label>
          <textarea class="form-textarea" rows="5" placeholder="Tell me about your project..."></textarea>
        </div>
        <button type="submit" class="btn btn-primary" style="align-self:flex-start; cursor:none">Send Message ✦</button>
      </form>
      <div class="contact-info">
        <div class="contact-card" v-for="c in contactDetails" :key="c.label">
          <div class="contact-icon">{{ c.icon }}</div>
          <div>
            <div class="contact-detail-label">{{ c.label }}</div>
            <div class="contact-detail-value">{{ c.value }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FOOTER -->
  <footer>
    <span>© 2026 Arjun. Crafted with Vue 3 &amp; GSAP.</span>
    <div class="social-links">
      <a class="social-link" href="#">𝕏</a>
      <a class="social-link" href="#">in</a>
      <a class="social-link" href="#">⌥</a>
      <a class="social-link" href="#">♜</a>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Refs
const cursorDot = ref(null)
const cursorRing = ref(null)
const navbar = ref(null)
const heroText = ref(null)
const w1 = ref(null)
const w2 = ref(null)
const w3 = ref(null)
const photoFrame = ref(null)
const profileImg = ref(null)
const statsBar = ref(null)
const aboutLeft = ref(null)
const aboutRight = ref(null)
const skillCards = ref([])
const projectCards = ref([])

// Data
const stats = [
  { num: '3+', label: 'Years Experience' },
  { num: '20+', label: 'Projects Shipped' },
  { num: '8+', label: 'Technologies' },
  { num: '100%', label: 'Commitment' },
]

const qualifications = [
  { degree: 'B.Tech in Computer Science', school: 'APJ Abdul Kalam Technological University', year: '2018 – 2022' },
  { degree: 'Full-Stack Web Development', school: 'Udemy / freeCodeCamp (Self-paced)', year: '2022 – 2023' },
  { degree: 'AI & LLM Engineering', school: 'DeepLearning.AI — Online Certification', year: '2023 – 2024' },
]

const skillsList = [
  { icon: '💚', name: 'Vue 3' }, { icon: '⚛️', name: 'React' },
  { icon: '🟦', name: 'TypeScript' }, { icon: '🐍', name: 'Python' },
  { icon: '⚡', name: 'FastAPI' }, { icon: '🔷', name: 'ASP.NET Core' },
  { icon: '🐘', name: 'PostgreSQL' }, { icon: '🐳', name: 'Docker' },
  { icon: '🤖', name: 'OpenAI API' }, { icon: '🦜', name: 'LangChain' },
  { icon: '🔴', name: 'Redis' }, { icon: '📦', name: 'SQLAlchemy' },
]

const projects = [
  {
    title: 'EduExam — Exam Platform',
    desc: 'A full-scale examination management system with dynamic question banks, section templates, role-based access, and auto-grading.',
    tags: ['Vue 3', 'FastAPI', 'PostgreSQL'],
    emoji: '📚', bg: 'linear-gradient(135deg,#1a1a2e,#16213e)',
  },
  {
    title: 'SmartBot — AI Chatbot',
    desc: 'Multi-module chatbot with context caching, conversation history, and LLM-powered intent classification using OpenAI.',
    tags: ['Python', 'LiteLLM', 'Redis'],
    emoji: '🤖', bg: 'linear-gradient(135deg,#0f0c29,#302b63)',
  },
  {
    title: 'AttendTrack — Attendance System',
    desc: 'Real-time attendance tracking for institutions with analytics dashboard, bulk import, and automated notifications.',
    tags: ['Vue 3', 'ASP.NET Core', 'PostgreSQL'],
    emoji: '📊', bg: 'linear-gradient(135deg,#11998e,#0a2a2a)',
  },
  {
    title: 'VoiceTask — Speech to Tasks',
    desc: 'Audio recording app that transcribes speech, extracts tasks using LLMs, and classifies them into project categories.',
    tags: ['React', 'FastAPI', 'Whisper API'],
    emoji: '🎙️', bg: 'linear-gradient(135deg,#2d1b69,#11998e)',
  },
]

const contactDetails = [
  { icon: '📍', label: 'Location', value: 'Perumpāvūr, Kerala 683 542, India' },
  { icon: '📧', label: 'Email', value: 'arjun@devmail.in' },
  { icon: '📱', label: 'Phone', value: '+91 98765 43210' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/arjun-dev' },
]

// Cursor
function moveCursor(e) {
  gsap.to(cursorDot.value, { x: e.clientX, y: e.clientY, duration: 0.05 })
  gsap.to(cursorRing.value, { x: e.clientX, y: e.clientY, duration: 0.2, ease: 'power2.out' })
}

onMounted(() => {
  window.addEventListener('mousemove', moveCursor)

  // Hero entrance
  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
  tl.from(navbar.value, { y: -60, opacity: 0, duration: 1 })
    .from([w1.value, w2.value, w3.value], { y: 80, opacity: 0, duration: 1, stagger: 0.15 }, '-=0.6')
    .from('.hero-tag', { x: -30, opacity: 0, duration: 0.8 }, '-=1.2')
    .from('.hero-desc', { y: 30, opacity: 0, duration: 0.8 }, '-=0.6')
    .from('.hero-actions', { y: 20, opacity: 0, duration: 0.8 }, '-=0.5')
    .from('.image-orbit', { scale: 0.7, opacity: 0, duration: 1.2, ease: 'elastic.out(1,0.7)' }, '-=0.8')
    .from(['.tech-badge'], { scale: 0, opacity: 0, duration: 0.6, stagger: 0.15 }, '-=0.4')

  // Photo GSAP scroll rotation
  gsap.to(profileImg.value, {
    rotation: 15,
    scale: 1.08,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 1.5,
    }
  })

  // Photo frame morphing on scroll
  gsap.to(photoFrame.value, {
    borderRadius: '50% 50% 50% 50%',
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 2,
    }
  })

  // Stats bar
  gsap.from(statsBar.value.children, {
    y: 40, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out',
    scrollTrigger: { trigger: statsBar.value, start: 'top 90%' }
  })

  // About
  gsap.from(aboutLeft.value, {
    x: -60, opacity: 0, duration: 1, ease: 'power3.out',
    scrollTrigger: { trigger: aboutLeft.value, start: 'top 80%' }
  })
  gsap.from(aboutRight.value, {
    x: 60, opacity: 0, duration: 1, ease: 'power3.out',
    scrollTrigger: { trigger: aboutRight.value, start: 'top 80%' }
  })

  // Skill cards stagger
  gsap.from('.skill-card', {
    y: 50, opacity: 0, duration: 0.7, stagger: 0.07, ease: 'power3.out',
    scrollTrigger: { trigger: '.skills-grid', start: 'top 85%' }
  })

  // Project cards
  gsap.from('.project-card', {
    y: 70, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out',
    scrollTrigger: { trigger: '.projects-grid', start: 'top 85%' }
  })

  // Contact form
  gsap.from('.contact-form', {
    x: -50, opacity: 0, duration: 1, ease: 'power3.out',
    scrollTrigger: { trigger: '.contact-inner', start: 'top 80%' }
  })
  gsap.from('.contact-card', {
    x: 50, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out',
    scrollTrigger: { trigger: '.contact-inner', start: 'top 80%' }
  })

  // Parallax on tech badges
  gsap.to('.badge-1', {
    y: -40, ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 2 }
  })
  gsap.to('.badge-2', {
    y: -60, ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1.5 }
  })
  gsap.to('.badge-3', {
    y: -30, ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 2.5 }
  })

  // Section titles reveal
  gsap.utils.toArray('.section-title').forEach(el => {
    gsap.from(el, {
      y: 40, opacity: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%' }
    })
  })
})

onUnmounted(() => {
  window.removeEventListener('mousemove', moveCursor)
  ScrollTrigger.getAll().forEach(t => t.kill())
})
</script>
