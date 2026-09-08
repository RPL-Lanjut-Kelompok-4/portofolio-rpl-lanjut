import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BookOpen,
  BriefcaseBusiness,
  BusFront,
  Code2,
  Database,
  Download,
  GitFork,
  GraduationCap,
  Mail,
  MapPin,
  MessageSquareWarning,
  Network,
  Palette,
  Server,
  ShieldCheck,
  UtensilsCrossed,
} from 'lucide-react';

const skills = [
  {
    icon: Code2,
    title: 'Bahasa & framework',
    items: ['PHP', 'JavaScript', 'TypeScript', 'Python', 'Laravel', 'Next.js', 'React'],
  },
  {
    icon: Database,
    title: 'Database & API',
    items: ['MySQL', 'PostgreSQL', 'Supabase', 'RESTful API', 'Database Design'],
  },
  {
    icon: Server,
    title: 'Tools & platform',
    items: ['Git', 'GitHub', 'Vercel', 'Linux (RHEL)', 'VirtualBox', 'Leaflet.js'],
  },
  {
    icon: ShieldCheck,
    title: 'Konsep',
    items: ['Data Structures', 'Algorithms', 'System Administration', 'OWASP', 'Web Security'],
  },
  {
    icon: Palette,
    title: 'Desain produk',
    items: ['Figma', 'Canva', 'UI/UX Flow', 'Information Architecture'],
  },
] as const;

const projects = [
  {
    icon: BusFront,
    number: '01',
    title: 'E-Syarif',
    subtitle: 'Sistem Pelacakan Bus Kampus',
    description:
      'Aplikasi web pelacakan shuttle kampus UIN Jakarta dengan peta interaktif dan pembaruan lokasi secara real-time.',
    contribution:
      'Membangun simulasi GPS untuk menguji alur pelacakan tanpa perangkat fisik, sekaligus merancang skema database dan route backend.',
    technologies: ['Laravel', 'Leaflet.js', 'MySQL'],
  },
  {
    icon: BookOpen,
    number: '02',
    title: 'AyoBelajar!',
    subtitle: 'Platform Pembelajaran EdTech',
    description:
      'Konsep platform freemium berisi materi belajar berbasis PDF untuk pelajar Indonesia dari jenjang SD hingga SMA.',
    contribution:
      'Menyusun proposal bisnis, strategi monetisasi, segmentasi pengguna, serta materi pemasaran untuk presentasi produk.',
    technologies: ['Product Design', 'Business Development', 'Canva'],
  },
  {
    icon: Database,
    number: '03',
    title: 'Perpustakaan Digital FST',
    subtitle: 'Sistem Manajemen Perpustakaan',
    description:
      'Sistem perpustakaan digital dengan fungsi katalog, peminjaman, dan pengembalian buku.',
    contribution:
      'Merancang alur UI/UX lengkap, membangun versi PHP/MySQL, serta menyusun rencana migrasi menuju Next.js dan Supabase.',
    technologies: ['Next.js', 'Supabase', 'PHP', 'MySQL', 'UI/UX'],
  },
  {
    icon: UtensilsCrossed,
    number: '04',
    title: 'Warmangji',
    subtitle: 'Menu Restoran Berbasis QR Code',
    description:
      'Sistem pemesanan restoran yang memungkinkan pelanggan melihat menu dan memesan langsung melalui QR code di meja.',
    contribution:
      'Mengembangkan frontend dan backend serta mengelola data menu, kategori, dan pesanan di dalam database.',
    technologies: ['Next.js', 'MySQL'],
  },
  {
    icon: MessageSquareWarning,
    number: '05',
    title: 'SiLapor',
    subtitle: 'Pelaporan Fasilitas Kampus',
    description:
      'Aplikasi pelaporan untuk membantu mahasiswa mengirim dan memantau keluhan fasilitas kampus.',
    contribution:
      'Merancang skema database dan backend untuk menangani pengiriman laporan, pelacakan status, dan pengelolaan aduan.',
    technologies: ['PHP', 'MySQL'],
  },
] as const;

const certifications = [
  {
    issuer: 'Red Hat Academy',
    title: 'RHEL System Administration',
    detail: 'Storage, SSH hardening, user management, cron, dan virtualisasi.',
  },
  {
    issuer: 'Red Hat',
    title: 'Python Programming with Red Hat (AD141)',
    detail: 'Program pembelajaran Python selama 32 credit hours.',
  },
  {
    issuer: 'Cisco Networking Academy',
    title: 'CCNA Full Track',
    detail: 'Networking, switching, routing, wireless, security, dan automation.',
  },
  {
    issuer: 'Huawei ICT Academy',
    title: 'HCIA-Datacom V1.0',
    detail: 'Fondasi teknologi data communication dan jaringan.',
  },
] as const;

const navItems = [
  ['Tentang', '#tentang'],
  ['Keahlian', '#keahlian'],
  ['Proyek', '#proyek'],
  ['Pendidikan', '#pendidikan'],
  ['Kontak', '#kontak'],
] as const;

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#konten-utama">
        Lewati ke konten utama
      </a>

      <header className="site-header">
        <div className="shell header-inner">
          <a className="brand" href="#atas" aria-label="Kembali ke bagian atas">
            <span className="brand-mark">SR</span>
            <span className="brand-name">Syauqi Radhi</span>
          </a>

          <nav className="desktop-nav" aria-label="Navigasi utama">
            {navItems.map(([label, href]) => (
              <a key={href} href={href}>
                {label}
              </a>
            ))}
          </nav>

          <a className="header-cta" href="/Syauqi-Radhi-Athallah-CV.pdf" download>
            Unduh CV
            <Download aria-hidden="true" size={16} strokeWidth={2} />
          </a>
        </div>
      </header>

      <div id="konten-utama">
        <section className="hero" id="atas">
          <div className="hero-grid" aria-hidden="true" />
          <div className="shell hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="status-dot" />
                Terbuka untuk peluang Software Engineer
              </p>
              <h1>
                Membangun aplikasi web yang <span>rapi, terukur,</span> dan berguna.
              </h1>
              <p className="hero-intro">
                Saya Syauqi, mahasiswa Teknik Informatika yang berfokus pada backend dan
                full-stack development dengan Laravel, Next.js, dan Supabase.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="mailto:syauqiradhiathallah@gmail.com">
                  <Mail aria-hidden="true" size={18} />
                  Hubungi saya
                </a>
                <a className="button button-secondary" href="#proyek">
                  Lihat proyek
                  <ArrowDown aria-hidden="true" size={18} />
                </a>
              </div>

              <div className="hero-meta" aria-label="Informasi singkat">
                <span>
                  <MapPin aria-hidden="true" size={16} /> Bekasi, Indonesia
                </span>
                <span>
                  <GraduationCap aria-hidden="true" size={17} /> Lulus 2027
                </span>
              </div>
            </div>

            <aside className="hero-card" aria-label="Ringkasan profil">
              <div className="hero-card-topline">
                <span>Profil singkat</span>
                <BriefcaseBusiness aria-hidden="true" size={20} />
              </div>
              <p className="hero-role">Software Engineer</p>
              <p className="hero-focus">Backend &amp; Full-Stack Development</p>

              <div className="profile-stats">
                <div>
                  <strong>3.83</strong>
                  <span>IPK / 4.00</span>
                </div>
                <div>
                  <strong>5</strong>
                  <span>Proyek</span>
                </div>
                <div>
                  <strong>4</strong>
                  <span>Sertifikasi</span>
                </div>
              </div>

              <div className="hero-stack">
                <span>Laravel</span>
                <span>Next.js</span>
                <span>Supabase</span>
              </div>
            </aside>
          </div>
        </section>

        <section className="section about-section" id="tentang">
          <div className="shell split-heading">
            <div>
              <p className="section-kicker">Tentang saya</p>
              <h2>Fondasi teknis kuat, terus bertumbuh.</h2>
            </div>
            <div className="about-copy">
              <p>
                Saya adalah mahasiswa Teknik Informatika UIN Syarif Hidayatullah Jakarta
                dengan pengalaman langsung membangun aplikasi web end-to-end. Saya menikmati
                proses mengubah kebutuhan menjadi alur, database, API, dan antarmuka yang jelas.
              </p>
              <p>
                Saat ini saya juga memperdalam keamanan aplikasi melalui PortSwigger Web
                Security Academy dan TryHackMe, dengan tujuan berkontribusi pada sistem
                production-grade yang aman dan dapat berkembang.
              </p>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="keahlian">
          <div className="shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">Keahlian</p>
                <h2>Perangkat untuk membangun dari ide hingga produk.</h2>
              </div>
              <p>Teknologi dan konsep yang saya gunakan dalam proyek akademik maupun personal.</p>
            </div>

            <div className="skills-grid">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <article className="skill-card" key={skill.title}>
                    <div className="icon-box">
                      <Icon aria-hidden="true" size={21} />
                    </div>
                    <h3>{skill.title}</h3>
                    <div className="tags">
                      {skill.items.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section projects-section" id="proyek">
          <div className="shell">
            <div className="section-heading projects-heading">
              <div>
                <p className="section-kicker">Proyek pilihan</p>
                <h2>Lima proyek, lima masalah yang berbeda.</h2>
              </div>
              <p>
                Fokus pada kontribusi yang saya kerjakan, dari pelacakan real-time hingga
                perancangan produk dan sistem informasi.
              </p>
            </div>

            <div className="projects-list">
              {projects.map((project) => {
                const Icon = project.icon;
                return (
                  <article className="project-card" key={project.number}>
                    <div className="project-number">{project.number}</div>
                    <div className="project-icon">
                      <Icon aria-hidden="true" size={24} />
                    </div>
                    <div className="project-main">
                      <p className="project-subtitle">{project.subtitle}</p>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                    </div>
                    <div className="project-detail">
                      <p>{project.contribution}</p>
                      <div className="tags">
                        {project.technologies.map((technology) => (
                          <span key={technology}>{technology}</span>
                        ))}
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section journey-section" id="pendidikan">
          <div className="shell journey-grid">
            <div className="education-panel">
              <p className="section-kicker">Pendidikan</p>
              <h2>Belajar dengan fondasi yang terarah.</h2>
              <div className="education-card">
                <div className="icon-box">
                  <GraduationCap aria-hidden="true" size={22} />
                </div>
                <div>
                  <p className="education-date">2023 — 2027 (perkiraan)</p>
                  <h3>UIN Syarif Hidayatullah Jakarta</h3>
                  <p>S1 Teknik Informatika</p>
                  <div className="education-highlight">
                    <span>IPK</span>
                    <strong>3.83 / 4.00</strong>
                  </div>
                  <p className="thesis">
                    Fokus skripsi: sistem penjadwalan mata kuliah menggunakan Genetic Algorithm
                    dan pendekatan Constraint Satisfaction Problem.
                  </p>
                </div>
              </div>
            </div>

            <div className="certification-panel">
              <p className="section-kicker">Sertifikasi</p>
              <h2>Pembelajaran berkelanjutan.</h2>
              <div className="timeline">
                {certifications.map((certification) => (
                  <article className="timeline-item" key={certification.title}>
                    <span className="timeline-dot" aria-hidden="true">
                      <Award size={15} />
                    </span>
                    <p className="cert-issuer">{certification.issuer}</p>
                    <h3>{certification.title}</h3>
                    <p>{certification.detail}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="kontak">
          <div className="shell contact-card">
            <div>
              <p className="section-kicker">Mari terhubung</p>
              <h2>Punya peluang yang cocok? Saya siap berdiskusi.</h2>
              <p>
                Saat ini saya terbuka untuk kesempatan Software Engineer dan kolaborasi pada
                produk web yang berdampak.
              </p>
            </div>
            <div className="contact-actions">
              <a className="button button-light" href="mailto:syauqiradhiathallah@gmail.com">
                <Mail aria-hidden="true" size={19} />
                Kirim email
              </a>
              <div className="social-links" aria-label="Tautan sosial">
                <a
                  href="https://www.linkedin.com/in/syauqi-radhi-athallah"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Buka profil LinkedIn Syauqi"
                >
                  <Network aria-hidden="true" size={20} />
                </a>
                <a
                  href="https://github.com/radhi2006"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Buka profil GitHub Syauqi"
                >
                  <GitFork aria-hidden="true" size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <div className="shell footer-inner">
          <p>© {new Date().getFullYear()} Syauqi Radhi Athallah</p>
          <a href="#atas">
            Kembali ke atas <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        </div>
      </footer>
    </main>
  );
}
