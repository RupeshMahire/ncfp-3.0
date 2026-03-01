import React, { useEffect, useState } from 'react'
import './App.css'

/* ============================================================
   DATA
   ============================================================ */
const themesData = [
  {
    numeral: 'I',
    tag: 'Theme 01',
    title: 'AI-Driven & Smart Food Packaging',
    items: [
      'AI-powered IoT-integrated smart packaging with real-time sensing',
      'Nano multi-sensor systems for freshness & contamination detection',
      'AI-driven automation & robotics in intelligent packaging lines',
      'AI-enabled precision dispensing for food & pharma applications',
    ],
  },
  {
    numeral: 'II',
    tag: 'Theme 02',
    title: 'Sustainable Packaging & Circular Economy',
    items: [
      'Compostable, biodegradable & fiber-based plastic alternatives',
      'Circular economy models with closed-loop material recovery',
      'Life Cycle Assessment (LCA) for carbon footprint optimization',
      'EPR-driven frameworks for sustainable waste management',
    ],
  },
  {
    numeral: 'III',
    tag: 'Theme 03',
    title: 'Next-Gen Food Safety & Regulatory Intelligence',
    items: [
      'Tamper-evident, anti-counterfeit & authentication technologies',
      'Hygienic & regulatory-compliant packaging production systems',
      'High-barrier packaging ensuring contamination control',
      'Intelligent cold chain monitoring for supply chain integrity',
    ],
  },
];

const speakersData = [
  {
    photo: '/speakers/shilpa.png',
    name: 'Dr. Shilpa Anchawale',
    role: 'Sr. Business Development Manager',
    org: 'Fujifilm Sericol India',
    tag: 'Industry Leader',
  },
  {
    photo: '/speakers/nc_saha.png',
    name: 'Prof. N C Saha',
    role: 'Ph.D, CAPP — Founder Chairman',
    org: 'Foundation for Innovative Packaging & Sustainability (FIPS)',
    tag: 'Academic Pioneer',
  },
  {
    photo: '/speakers/shreyas.png',
    name: 'Shreyas Rajendra Sikchi',
    role: 'Managing Director',
    org: 'Mangalam Oil Mills Pvt. Ltd.',
    tag: 'Industry Leader',
  },
  {
    photo: '/speakers/ashutosh.png',
    name: 'Ashutosh Kumar',
    role: 'General Manager — Manufacturing',
    org: 'Vinsak India | Chartered Engineer, MIE',
    tag: 'Engineering Expert',
  },
  {
    photo: '/speakers/abhijit.png',
    name: 'Dr. Abhijit Bhattacharya',
    role: 'Group Leader & Expert, Fiberbased Packaging',
    org: 'Nestlé | PhD',
    tag: 'Research Expert',
  },
  {
    photo: '/speakers/sharmila.png',
    name: 'Dr. Sharmila Pandey',
    role: 'Doctor · Marathon Runner · Motivational Speaker',
    org: 'Social Activist & Public Speaker',
    tag: 'Keynote Speaker',
  },
];


const whyData = [
  { icon: 'fa-users', stat: '400+', title: 'Participants', desc: 'Connect with researchers, industry leaders & policymakers from across India.' },
  { icon: 'fa-microphone-alt', stat: '20+', title: 'Keynote Sessions', desc: 'World-class speakers delivering cutting-edge insights on packaging innovation.' },
  { icon: 'fa-handshake', stat: '50+', title: 'Industry Partners', desc: 'Forging powerful industry-academia collaborations that drive real impact.' },
  { icon: 'fa-lightbulb', stat: '10+', title: 'Innovation Showcases', desc: 'Live demonstrations of breakthrough packaging technologies & products.' },
  { icon: 'fa-network-wired', stat: '∞', title: 'Networking', desc: 'Structured networking sessions designed for meaningful professional connections.' },
];

const galleryData = [
  { src: '/gallery/1.jpg', caption: '' },
  { src: '/gallery/2.jpg', caption: '' },
  { src: '/gallery/3.jpg', caption: '' },
  { src: '/gallery/4.jpg', caption: '' },
  { src: '/gallery/5.jpg', caption: '' },
  { src: '/gallery/6.jpg', caption: '' },
  { src: '/gallery/7.jpg', caption: '' },
];

const sponsorsData = [
  { name: 'Fujifilm', logo: '/sponsors/fujifilm.png', type: 'Platinum Sponsor' },
  { name: 'Chitale Bandhu', logo: '/sponsors/chitale.png', type: 'Gold Sponsor' },
];

/* ============================================================
   APP COMPONENT
   ============================================================ */
function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [whySlide, setWhySlide] = useState(0);
  const [gallerySlide, setGallerySlide] = useState(0);

  useEffect(() => {
    // Navbar scroll effect
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);

    // Scroll reveal
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  // Auto-advance why slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setWhySlide(prev => (prev + 1) % whyData.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  // Auto-advance gallery slideshow
  useEffect(() => {
    if (galleryData.length === 0) return;
    const timer = setInterval(() => {
      setGallerySlide(prev => (prev + 1) % galleryData.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="ncfp-website">

      {/* ======================================================
          NAVBAR
          ====================================================== */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">
            <img src="/logo.png" alt="NCFP 3.0" className="nav-logo" loading="lazy" />
          </div>
          <div className="nav-center">
            <p className="college-name">
              <span className="maroon">Pune</span> <span className="green">Vidhyarthi</span> <span className="maroon">Griha's</span> <span className="green">College</span> <span className="maroon">of</span> <span className="green">Engineering</span> <span className="maroon">and</span> <span className="green">Technology</span> <span className="maroon">and</span> <span className="green">Management,</span> <span className="maroon">Pune</span>
            </p>
          </div>
          <div className="nav-right">
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/ncfp-national-conference-on-food-packaging" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/ncfp_2026" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </div>
          </div>
        </div>
        <div className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <div className="nav-menu-links">
            {['home', 'about', 'themes', 'speakers', 'why', 'gallery', 'contact'].map(id => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ======================================================
          HERO SECTION
          ====================================================== */}
      <header id="home" className="hero">
        <div className="hero-wave-bg">
          {/* Ambient orbs */}
          <div className="hero-orb hero-orb-1"></div>
          <div className="hero-orb hero-orb-2"></div>
          <div className="hero-orb hero-orb-3"></div>
          {/* Wave SVG */}
          <svg viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,100 C240,160 480,40 720,100 C960,160 1200,40 1440,100 L1440,200 L0,200 Z" fill="rgba(146,26,34,0.12)" />
            <path d="M0,120 C360,60 720,180 1080,120 C1260,90 1380,150 1440,130 L1440,200 L0,200 Z" fill="rgba(26,77,46,0.08)" />
          </svg>
        </div>

        <div className="hero-content">
          <div className="hero-eyebrow">3rd Edition · 2026</div>
          <h1 className="hero-title">NCFP 3.0</h1>
          <p className="hero-title-sub">National Conference on Food Packaging</p>
          <div className="hero-tagline">
            AI · Sustainability · Food Safety
          </div>
          <div className="hero-meta">
            <div className="hero-meta-item">
              <i className="fas fa-calendar-alt"></i>
              <span>24 March 2026</span>
            </div>
            <div className="hero-meta-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>PVG's COETM, Pune</span>
            </div>
            <div className="hero-meta-item">
              <i className="fas fa-users"></i>
              <span>400+ Expected Participants</span>
            </div>
          </div>
          <div className="hero-btns">
            <a href="https://forms.gle/B4ZhHZuCrwnBVuSG9" target="_blank" rel="noopener noreferrer" className="btn-hero-primary">
              <i className="fas fa-rocket"></i> Register Now
            </a>
            <a href="#themes" className="btn-hero-secondary">
              <i className="fas fa-download"></i> Download Brochure
            </a>
          </div>
        </div>

        <div className="hero-scroll-hint">
          <span>Scroll</span>
          <i className="fas fa-chevron-down"></i>
        </div>
      </header>

      {/* ======================================================
          ABOUT SECTION
          ====================================================== */}
      <section id="about" className="about-section">
        <div className="about-grid reveal">
          {/* Left — Content */}
          <div className="about-content">
            <span className="section-tag">About the Conference</span>
            <h2 className="about-title">Redefining the Future of<br />Food Packaging in India</h2>
            <div className="about-divider"></div>
            <p className="about-text">
              The National Conference on Food Packaging (NCFP 3.0) is India's most prestigious platform
              for industry professionals, researchers, technologists, and policymakers to exchange
              transformative ideas in the food packaging ecosystem.
            </p>
            <p className="about-text">
              The third edition focuses on the convergence of <strong style={{ color: 'var(--maroon-rich)' }}>Artificial Intelligence</strong>,&nbsp;
              <strong style={{ color: 'var(--green-mid)' }}>Circular Economy</strong>, and&nbsp;
              <strong style={{ color: 'var(--maroon-rich)' }}>Regulatory Intelligence</strong> — aligned with global standards for 2026 and beyond.
            </p>
            <div className="about-stats">
              <div className="about-stat">
                <h3>3rd</h3>
                <p>Annual Edition</p>
              </div>
              <div className="about-stat">
                <h3>400+</h3>
                <p>Participants</p>
              </div>
              <div className="about-stat">
                <h3>20+</h3>
                <p>Expert Speakers</p>
              </div>
            </div>
            <div style={{ marginTop: '40px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#themes" className="btn btn-maroon">Explore Themes</a>
              <a href="#why" className="btn btn-outline-maroon">Why Attend?</a>
            </div>
          </div>

          {/* Right — Illustration Card */}
          <div className="about-illustration">
            <div className="about-card">
              <div className="about-card-numeral">3.0</div>
              <h3 className="about-card-title">Innovation in Every Layer</h3>
              <p className="about-card-text">
                From nano-sensors to biodegradable films — NCFP 3.0 brings together the brightest minds
                to reimagine how the world protects and delivers food.
              </p>
              <div className="about-card-badges">
                <span className="badge badge-green">AI-Driven</span>
                <span className="badge badge-maroon">Sustainable</span>
                <span className="badge badge-green">Food Safe</span>
                <span className="badge badge-maroon">Research-Led</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          CONFERENCE THEMES SECTION
          ====================================================== */}
      <section id="themes" className="themes-section">
        <div className="themes-header reveal">
          <span className="section-tag">Core Pillars</span>
          <h2 className="section-title">Conference Themes & Tracks</h2>
          <p className="section-subtitle">
            Three transformational pillars that define the future of food packaging technology in India and beyond.
          </p>
          <div className="section-divider"></div>
        </div>
        <div className="themes-grid">
          {themesData.map((theme, i) => (
            <div key={i} className="theme-card reveal">
              <div className="theme-card-numeral">{theme.numeral}</div>
              <span className="theme-card-tag">{theme.tag}</span>
              <h3>{theme.title}</h3>
              <ul className="theme-card-list">
                {theme.items.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================
          SPONSORS SECTION
          ====================================================== */}
      <section id="sponsors" className="sponsors-section reveal">
        <div className="sponsors-container">
          <div className="sponsors-header">
            <span className="section-tag">Partners in Excellence</span>
            <h2 className="section-title">Our Previous Year Patrons</h2>
            <div className="section-divider"></div>
          </div>
          <div className="sponsors-grid">
            {sponsorsData.map((s, i) => (
              <div key={i} className="sponsor-card">
                <div className="sponsor-logo-box">
                  <img
                    src={s.logo}
                    alt={s.name}
                    className="sponsor-logo"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="sponsor-placeholder" style={{ display: 'none' }}>
                    <span>{s.name}</span>
                  </div>
                </div>
                <div className="sponsor-info">
                  <span className="sponsor-type">{s.type}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================
          SPEAKERS & SPONSORS SECTION
          ====================================================== */}
      <section id="speakers" className="speakers-section">
        <div className="speakers-header reveal">
          <span className="section-tag">Keynote Speakers</span>
          <h2 className="section-title">Distinguished Voices</h2>
          <p className="section-subtitle">
            Thought leaders, industry pioneers, and academic experts shaping the packaging revolution.
          </p>
          <div className="section-divider"></div>
        </div>

        <div className="speakers-grid">
          {speakersData.map((s, i) => (
            <div key={i} className="speaker-card reveal">
              <img src={s.photo} alt={s.name} className="speaker-photo" loading="lazy" />
              <div className="speaker-overlay">
                <span className="speaker-tag">{s.tag}</span>
                <h3 className="speaker-name">{s.name}</h3>
                <p className="speaker-role">{s.role}</p>
                <span className="speaker-org">{s.org}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Attend Section — Full-Page Slideshow */}
      <section id="why" className="why-section">
        {/* Slide track */}
        <div className="why-slides">
          {whyData.map((item, i) => (
            <div
              key={i}
              className={`why-slide ${i === whySlide ? 'active' : i === (whySlide - 1 + whyData.length) % whyData.length ? 'prev' : ''}`}
            >
              {/* Background number watermark */}
              <div className="why-slide-bg-num">{String(i + 1).padStart(2, '0')}</div>

              <div className="why-slide-content">
                <div className="why-slide-tag">Reasons to Join · Why Attend NCFP 3.0?</div>
                <div className="why-slide-icon">
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <div className="why-slide-stat">{item.stat}</div>
                <h2 className="why-slide-title">{item.title}</h2>
                <p className="why-slide-desc">{item.desc}</p>
              </div>

              {/* Dots */}
              <div className="why-dots">
                {whyData.map((_, d) => (
                  <button
                    key={d}
                    className={`why-dot ${d === whySlide ? 'active' : ''}`}
                    onClick={() => setWhySlide(d)}
                    aria-label={`Go to slide ${d + 1}`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <button
                className="why-arrow why-arrow-prev"
                onClick={() => setWhySlide(p => (p - 1 + whyData.length) % whyData.length)}
                aria-label="Previous"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button
                className="why-arrow why-arrow-next"
                onClick={() => setWhySlide(p => (p + 1) % whyData.length)}
                aria-label="Next"
              >
                <i className="fas fa-chevron-right"></i>
              </button>

              {/* Progress bar */}
              <div className="why-progress-bar">
                <div
                  className={`why-progress-fill ${i === whySlide ? 'animating' : ''}`}
                  key={whySlide}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery-section">
        <div className="gallery-header reveal">
          <span className="section-tag">Glimpses</span>
          <h2 className="section-title">Event Highlights</h2>
          <p className="section-subtitle">
            Relive the energy, innovation, and connections from previous editions of NCFP.
          </p>
          <div className="section-divider"></div>
        </div>
        <div className="gallery-slider-container reveal">
          <div className="gallery-slider">
            {galleryData.map((img, i) => (
              <div
                key={i}
                className={`gallery-slide ${i === gallerySlide ? 'active' : ''}`}
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200'; // Global placeholder if not found
                  }}
                />
                <div className="gallery-slide-overlay">
                  {img.caption && <span className="gallery-slide-caption">{img.caption}</span>}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <button
            className="gallery-nav prev"
            onClick={() => setGallerySlide(prev => (prev - 1 + galleryData.length) % galleryData.length)}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            className="gallery-nav next"
            onClick={() => setGallerySlide(prev => (prev + 1) % galleryData.length)}
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          {/* Dots */}
          <div className="gallery-dots">
            {galleryData.map((_, i) => (
              <button
                key={i}
                className={`gallery-dot ${i === gallerySlide ? 'active' : ''}`}
                onClick={() => setGallerySlide(i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div id="contact" className="cta-section reveal">
        <div className="cta-inner">
          <div className="cta-label">Limited Seats Available</div>
          <h2 className="cta-title">Join the Packaging Evolution 2026</h2>
          <p className="cta-subtitle">
            Be part of the transformational journey shaping the future of food packaging in India.
            Secure your place at NCFP 3.0 today.
          </p>
          <div className="cta-btns">
            <a href="https://forms.gle/B4ZhHZuCrwnBVuSG9" target="_blank" rel="noopener noreferrer" className="btn-hero-primary">
              <i className="fas fa-rocket"></i> Register Now
            </a>
            <a href="#themes" className="btn-hero-secondary">
              <i className="fas fa-file-pdf"></i> Download Brochure
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            {/* Brand */}
            <div className="footer-brand">
              <h3>NCFP 3.0</h3>
              <p>
                The National Conference on Food Packaging is a premier platform dedicated to the
                advancement of food safety, AI-driven innovation, and sustainable packaging solutions.
              </p>
              <div className="footer-social">
                <a href="https://www.linkedin.com/in/ncfp-3-o-56b001294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://www.instagram.com/ncfp_2026" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>

                <a href="mailto:ncfp.pvg@gmail.com" aria-label="Email">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4>Quick Links</h4>
              <a href="#home">Home</a>
              <a href="#about">About NCFP 3.0</a>
              <a href="#themes">Conference Themes</a>
              <a href="#speakers">Speakers</a>
              <a href="#why">Why Attend</a>
              <a href="#gallery">Gallery</a>
            </div>

            {/* Organizers & Contact */}
            <div className="footer-col">
              <h4>Organizers</h4>
              <p>PVG's College of Engineering,<br />Technology & Management, Pune</p>
              <h4 style={{ marginTop: '28px' }}>Contact</h4>
              <p><i className="fas fa-envelope" style={{ marginRight: '8px' }}></i>ncfp.pvg@gmail.com</p>
              <p><i className="fas fa-map-marker-alt" style={{ marginRight: '8px' }}></i>Pune, Maharashtra, India</p>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 National Conference on Food Packaging. All rights reserved.</p>
            <span>
              Crafted with ♥ by <a href="https://www.linkedin.com/in/rupesh-mahire-sci" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>Rupesh</a>
            </span>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
