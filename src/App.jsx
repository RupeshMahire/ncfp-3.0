import React, { useEffect, useState, useRef } from 'react'
import './App.css'
import GlimpsesPage from './GlimpsesPage'
import CommitteePage from './CommitteePage'
import SpeakersPage from './SpeakersPage'
import PatronPage from './PatronPage'

const BROCHURE_PDF_PATH = '/brochure.pdf' // Path to the brochure PDF in the public folder

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


const whyData = [
  {
    icon: 'fa-box-open',
    stat: '400+',
    title: 'Participants',
    desc: 'Connect with researchers, industry leaders & policymakers from across India in the food packaging ecosystem.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&auto=format&fit=crop&q=80',
    imageAlt: 'Large conference hall full of attendees',
  },
  {
    icon: 'fa-microphone-alt',
    stat: '20+',
    title: 'Keynote Sessions',
    desc: 'World-class speakers delivering cutting-edge insights on packaging innovation & sustainability.',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=900&auto=format&fit=crop&q=80',
    imageAlt: 'Expert keynote speaker on stage',
  },
  {
    icon: 'fa-handshake',
    stat: '50+',
    title: 'Industry Partners',
    desc: 'Forging powerful industry-academia collaborations that drive real-world packaging impact.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&auto=format&fit=crop&q=80',
    imageAlt: 'Industry professionals collaborating',
  },
  {
    icon: 'fa-leaf',
    stat: '10+',
    title: 'Innovation Showcases',
    desc: 'Live demonstrations of breakthrough sustainable packaging technologies & eco-friendly products.',
    image: 'https://plus.unsplash.com/premium_photo-1737629957724-6bc7cdf1396f?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Sustainable eco-friendly packaging innovation',
  },
  {
    icon: 'fa-network-wired',
    stat: '∞',
    title: 'Networking',
    desc: 'Structured networking sessions designed for meaningful professional connections across the packaging industry.',
    image: 'https://images.unsplash.com/photo-1561489413-985b06da5bee?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    imageAlt: 'Professionals networking at a conference',
  },
];

const sponsorsData = [
  { name: 'Fujifilm', logo: '/sponsors/fujifilm.png', type: 'Platinum Sponsor' },
  { name: 'Vinsak', logo: '/sponsors/vinsak.png', type: 'Gold Sponsor' },
  { name: 'Printweek', logo: '/sponsors/printweek.svg', type: 'Media Partner' },
];

/* ── What to Expect feature cards ── */
const expectData = [
  {
    icon: 'fa-user-tie',
    title: 'Industry Expert Talks',
    desc: 'Get to hear from leading industry experts sharing real-world insights, market trends, and future directions in food packaging.',
  },
  {
    icon: 'fa-network-wired',
    title: 'Excellent Networking',
    desc: 'An excellent opportunity for networking with researchers, professionals, industry leaders, and fellow innovators.',
  },
  {
    icon: 'fa-rocket',
    title: 'Startup Launchpad',
    desc: 'Thinking of a startup? NCFP is the right place to be in — connect with mentors, investors, and potential partners.',
  },
  {
    icon: 'fa-microphone-alt',
    title: 'Keynote Speeches',
    desc: 'Keynote speeches by globally recognized experts in sustainable packaging, AI-driven innovation, and food safety.',
  },
  {
    icon: 'fa-flask',
    title: 'Research Presentations',
    desc: 'Research work presentations from academia and industry covering cutting-edge packaging technologies.',
  },
  {
    icon: 'fa-layer-group',
    title: 'And Much More',
    desc: 'Panel discussions, live product showcases, workshops on circular economy, and interactive innovation zones.',
  },
];

const agendaData = [
  {
    time: '09:00 AM',
    event: 'Registration & Welcome Drinks',
    icon: 'fa-id-card',
    detail: 'Pick up your conference kit and begin networking.'
  },
  {
    time: '10:30 AM',
    event: 'Inaugural Ceremony',
    icon: 'fa-microphone',
    detail: 'Official commencement with lighting of the lamp.'
  },
  {
    time: '11:30 AM',
    event: 'Keynote Address',
    icon: 'fa-user-tie',
    detail: 'Expert talk on AI-Driven Smart Food Packaging.'
  },
  {
    time: '01:00 PM',
    event: 'Networking Lunch',
    icon: 'fa-utensils',
    detail: 'Gourmet lunch session for all participants.'
  },
  {
    time: '02:00 PM',
    event: 'Technical Sessions',
    icon: 'fa-laptop-code',
    detail: 'Deep dive into sustainability and research tracks.'
  },
  {
    time: '04:30 PM',
    event: 'Awards & Valedictory',
    icon: 'fa-trophy',
    detail: 'Recognizing excellence in research and innovation.'
  },
];

/* ============================================================
   ANIMATED COUNTER HOOK
   ============================================================ */
function useCountUp(target, duration = 1800) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const numericTarget = parseInt(target.replace(/\D/g, ''), 10);
    if (isNaN(numericTarget)) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numericTarget));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  const suffix = target.replace(/[\d]/g, '').trim();
  return { ref, displayValue: started ? `${count}${suffix}` : '0' };
}

function StatCounter({ value, label }) {
  const { ref, displayValue } = useCountUp(value);
  return (
    <div className="about-stat" ref={ref}>
      <h3>{displayValue}</h3>
      <p>{label}</p>
    </div>
  );
}

/* ============================================================
   PDF MODAL COMPONENT
   ============================================================ */
function PDFModal({ isOpen, onClose, pdfPath }) {
  if (!isOpen) return null;

  return (
    <div className="pdf-modal-overlay" onClick={onClose}>
      <div className="pdf-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="pdf-modal-header">
          <h3>Conference Brochure</h3>
          <button className="pdf-modal-close" onClick={onClose} aria-label="Close modal">
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="pdf-modal-body">
          <iframe
            src={`${pdfPath}#toolbar=1&navpanes=0&scrollbar=1`}
            title="Brochure PDF Preview"
            width="100%"
            height="100%"
            frameBorder="0"
          >
            <p>Your browser does not support iframes.
              <a href={pdfPath} target="_blank" rel="noopener noreferrer">Click here to view the PDF</a>.
            </p>
          </iframe>
        </div>
      </div>
    </div>
  );
}

/* ============================================================
   APP COMPONENT
   ============================================================ */
/* ============================================================
   FEEDBACK MODAL COMPONENT
   ============================================================ */
function FeedbackModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [comments, setComments] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) return;
    setSubmitted(true);
    setTimeout(() => {
      onClose();
      setSubmitted(false);
      setName('');
      setRating(0);
      setComments('');
    }, 2500);
  };

  if (!isOpen) return null;

  return (
    <div className="feedback-modal-overlay" onClick={onClose}>
      <div className="feedback-modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="feedback-modal-close" onClick={onClose} aria-label="Close feedback">
          <i className="fas fa-times"></i>
        </button>
        {submitted ? (
          <div className="feedback-success">
            <div className="feedback-success-icon"><i className="fas fa-check-circle"></i></div>
            <h3>Thank You!</h3>
            <p>Your feedback has been recorded. We appreciate your participation in NCFP 3.0!</p>
          </div>
        ) : (
          <>
            <div className="feedback-modal-header">
              <div className="feedback-modal-icon"><i className="fas fa-comment-dots"></i></div>
              <h3>Event Feedback</h3>
              <p>How was your experience at NCFP 3.0? We'd love to hear from you!</p>
            </div>
            <form className="feedback-form" onSubmit={handleSubmit}>
              <div className="feedback-field">
                <label htmlFor="fb-name">Your Name</label>
                <input
                  id="fb-name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="feedback-field">
                <label>Rate Your Experience</label>
                <div className="feedback-stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      className={`feedback-star ${star <= (hoverRating || rating) ? 'active' : ''}`}
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                    >
                      <i className="fas fa-star"></i>
                    </button>
                  ))}
                </div>
                {rating > 0 && (
                  <span className="feedback-rating-label">
                    {['', 'Poor', 'Fair', 'Good', 'Very Good', 'Excellent!'][rating]}
                  </span>
                )}
              </div>
              <div className="feedback-field">
                <label htmlFor="fb-comments">Comments / Suggestions</label>
                <textarea
                  id="fb-comments"
                  rows={4}
                  placeholder="Share your thoughts, suggestions, or highlights from the event…"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                />
              </div>
              <button type="submit" className="feedback-submit" disabled={rating === 0}>
                <i className="fas fa-paper-plane"></i> Submit Feedback
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [whySlide, setWhySlide] = useState(0);
  const [currentRoute, setCurrentRoute] = useState(window.location.pathname);
  const [showPDFModal, setShowPDFModal] = useState(false);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  useEffect(() => {
    const handlePopState = () => setCurrentRoute(window.location.pathname);
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (path) => {
    window.history.pushState({}, '', path);
    setCurrentRoute(path);
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'instant' }), 0);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [currentRoute]); // re-run when page changes

  useEffect(() => {
    const titles = {
      '/': "NCFP 3.0 | National Conference on Food Packaging | PVGCOET Pune",
      '/gallery': "NCFP 3.0 Event Glimpses | PVGCOET Pune",
      '/committee': "NCFP 3.0 Organizing Committee | PVGCOET Pune",
      '/speakers': "NCFP 3.0 Keynote Speakers | PVGCOET Pune",
      '/patrons': "NCFP 3.0 Patrons & Sponsors | PVGCOET Pune",
      '/contact': "Contact | NCFP 3.0 Food Packaging Conference"
    };
    document.title = titles[currentRoute] || titles['/'];
  }, [currentRoute]);

  // Auto-advance why slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setWhySlide(prev => (prev + 1) % whyData.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  /* ── Glimpses Page ── */
  if (currentRoute === '/gallery') {
    return <GlimpsesPage onBack={() => navigateTo('/')} />;
  }

  /* ── Committee Page ── */
  if (currentRoute === '/committee') {
    return <CommitteePage onBack={() => navigateTo('/')} />;
  }

  /* ── Speakers Page ── */
  if (currentRoute === '/speakers') {
    return <SpeakersPage onBack={() => navigateTo('/')} />;
  }

  /* ── Patron Page ── */
  if (currentRoute === '/patrons') {
    return <PatronPage onBack={() => navigateTo('/')} />;
  }

  return (
    <div className="ncfp-website">

      {/* ======================================================
          NAVBAR
          ====================================================== */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">
            <img src="/logo.png" alt="NCFP 3.0" className="nav-logo" loading="eager" fetchpriority="high" />
          </div>
          <div className="nav-center">
            <p className="college-name">
              <span className="maroon">Pune</span> <span className="green">Vidhyarthi</span> <span className="maroon">Griha's</span> <span className="green">College</span> <span className="maroon">of</span> <span className="green">Engineering</span> <span className="maroon">and</span> <span className="green">Technology</span> <span className="maroon">and</span> <span className="green">Management,</span> <span className="maroon">Pune</span>
            </p>
          </div>
          <div className="nav-right">
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/national-conference-on-food-packaging-pvgcoet-3243183b4?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/ncfp_2026" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <button
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="nav-menu"
              type="button"
            >
              <i className={`fas ${menuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
        <div className={`nav-menu ${menuOpen ? 'open' : ''}`} id="nav-menu" role="navigation" aria-label="Main navigation">
          <div className="nav-menu-links">
            <a
              href="/speakers"
              onClick={(e) => { e.preventDefault(); setMenuOpen(false); navigateTo('/speakers'); }}
            >
              <i className="fas fa-microphone-alt" style={{ marginRight: '6px' }}></i>Speakers
            </a>
            <a
              href="/gallery"
              onClick={(e) => { e.preventDefault(); setMenuOpen(false); navigateTo('/gallery'); }}
            >
              <i className="fas fa-images" style={{ marginRight: '6px' }}></i>Glimpses
            </a>
            <a
              href="/committee"
              onClick={(e) => { e.preventDefault(); setMenuOpen(false); navigateTo('/committee'); }}
            >
              <i className="fas fa-users" style={{ marginRight: '6px' }}></i>Committee
            </a>
            <a
              href="/patrons"
              onClick={(e) => { e.preventDefault(); setMenuOpen(false); navigateTo('/patrons'); }}
            >
              <i className="fas fa-award" style={{ marginRight: '6px' }}></i>Patron
            </a>
          </div>
        </div>
      </nav>

      {/* ======================================================
          HERO SECTION
          ====================================================== */}
      <header id="home" className="hero">
        <div className="hero-wave-bg">
          <div className="hero-orb hero-orb-1"></div>
          <div className="hero-orb hero-orb-2"></div>
          <div className="hero-orb hero-orb-3"></div>
          <div className="hero-leaf hero-leaf-1"><i className="fas fa-leaf"></i></div>
          <div className="hero-leaf hero-leaf-2"><i className="fas fa-seedling"></i></div>
          <div className="hero-leaf hero-leaf-3"><i className="fas fa-recycle"></i></div>
          <svg viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,100 C240,160 480,40 720,100 C960,160 1200,40 1440,100 L1440,200 L0,200 Z" fill="rgba(74,158,74,0.15)" />
            <path d="M0,120 C360,60 720,180 1080,120 C1260,90 1380,150 1440,130 L1440,200 L0,200 Z" fill="rgba(212,98,42,0.08)" />
          </svg>
        </div>

        <div className="hero-content">
          <div className="hero-eyebrow">
            <i className="fas fa-seedling" style={{ marginRight: '8px' }}></i>
            3rd Edition · 2026
          </div>
          <h1 className="hero-title">NCFP 3.0</h1>
          <p className="hero-title-sub">National Conference on Food Packaging</p>
          <p className="hero-tagline-main">Innovating the Future of Food Packaging</p>
          <div className="hero-tagline">
            <i className="fas fa-leaf" style={{ marginRight: '6px', fontSize: '0.85rem' }}></i>
            Sustainability · Food Safety · AI Innovation
          </div>
          <p className="hero-description-text">
            NCFP 3.0 – National Conference on Food Packaging organized by PVGCOEM Pune is a national level conference focused on innovation, sustainability and research in food packaging technology.
          </p>
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
            <button
              className="btn-hero-secondary"
              onClick={() => setShowPDFModal(true)}
            >
              <i className="fas fa-download"></i> Download Brochure
            </button>
            <button className="btn-hero-glimpses" onClick={() => navigateTo('/speakers')}>
              <i className="fas fa-microphone-alt"></i> Speakers
            </button>
            <button className="btn-hero-glimpses" onClick={() => navigateTo('/gallery')}>
              <i className="fas fa-images"></i> View Event Glimpses
            </button>
          </div>
        </div>

      </header>

      {/* ======================================================
          ABOUT SECTION
          ====================================================== */}
      < section id="about" className="about-section" >
        <div className="about-grid reveal">
          {/* Left — Content */}
          <div className="about-content">
            <span className="section-tag">
              <i className="fas fa-box-open" style={{ marginRight: '6px' }}></i>
              About the Conference
            </span>
            <h2 className="about-title">Redefining the Future of<br />Food Packaging in India</h2>
            <div className="about-divider"></div>
            <p className="about-text">
              The National Conference on Food Packaging (NCFP 3.0) is India's most prestigious platform
              for industry professionals, researchers, technologists, and policymakers to exchange
              transformative ideas in the food packaging ecosystem.
            </p>
            <p className="about-text">
              The third edition focuses on the convergence of <strong style={{ color: 'var(--green-rich)' }}>Artificial Intelligence</strong>,&nbsp;
              <strong style={{ color: 'var(--orange-rich)' }}>Circular Economy</strong>, and&nbsp;
              <strong style={{ color: 'var(--green-deep)' }}>Regulatory Intelligence</strong> — aligned with global standards for 2026 and beyond.
            </p>
            <div className="about-stats">
              <StatCounter value="3rd" label="Annual Edition" />
              <StatCounter value="400+" label="Participants" />
              <StatCounter value="20+" label="Expert Speakers" />
            </div>
            <div style={{ marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#themes" className="btn btn-maroon">
                <i className="fas fa-compass"></i> Explore Themes
              </a>
              <a href="#why" className="btn btn-outline-maroon">
                <i className="fas fa-star"></i> Why Attend?
              </a>
            </div>
          </div>

          {/* Right — Kraft Paper Card */}
          <div className="about-illustration">
            <div className="about-card">
              <div className="about-card-numeral">3.0</div>
              <h3 className="about-card-title">Innovation in Every Layer</h3>
              <p className="about-card-text">
                From nano-sensors to biodegradable films — NCFP 3.0 brings together the brightest minds
                to reimagine how the world protects and delivers food.
              </p>
              <div className="about-card-badges">
                <span className="badge badge-green">
                  <i className="fas fa-leaf" style={{ marginRight: '4px' }}></i>AI-Driven
                </span>
                <span className="badge badge-orange">
                  <i className="fas fa-recycle" style={{ marginRight: '4px' }}></i>Sustainable
                </span>
                <span className="badge badge-green">
                  <i className="fas fa-shield-alt" style={{ marginRight: '4px' }}></i>Food Safe
                </span>
                <span className="badge badge-orange">
                  <i className="fas fa-flask" style={{ marginRight: '4px' }}></i>Research-Led
                </span>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* ======================================================
          AGENDA SECTION
          ====================================================== */}
      <section id="agenda" className="agenda-section">
        <div className="agenda-container reveal">
          <div className="agenda-header">
            <span className="section-tag">
              <i className="fas fa-calendar-check" style={{ marginRight: '6px' }}></i>
              Conference Schedule
            </span>
            <h2 className="section-title">Event Agenda</h2>
            <p className="section-subtitle">
              A carefully curated journey through innovations, expert insights, and networking opportunities.
            </p>
            <div className="section-divider"></div>
          </div>

          <div className="agenda-timeline">
            {agendaData.map((item, i) => (
              <div key={i} className="agenda-item reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="agenda-time">
                  <span className="time-badge">{item.time}</span>
                </div>
                <div className="agenda-dot-line">
                  <div className="agenda-dot">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                </div>
                <div className="agenda-content-card">
                  <h3>{item.event}</h3>
                  <p>{item.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="agenda-disclaimer">
            <i className="fas fa-info-circle"></i>
            <span>This is a tentative schedule and is subject to minor adjustments.</span>
          </div>
        </div>
      </section>

      {/* ======================================================
          WHAT TO EXPECT FROM NCFP 3.0 SECTION
          ====================================================== */}
      < section id="expect" className="expect-section" >
        <div className="expect-header reveal">
          <span className="section-tag">
            <i className="fas fa-binoculars" style={{ marginRight: '6px' }}></i>
            NCFP 3.0 · 2026
          </span>
          <h2 className="section-title">What to Expect from NCFP 3.0</h2>
          <p className="section-subtitle">
            An immersive conference experience designed for industry leaders, researchers, students, and innovators in the food packaging space.
          </p>
          <div className="section-divider"></div>
        </div>

        <div className="expect-grid">
          {expectData.map((item, i) => (
            <div key={i} className="expect-card reveal">
              <div className="expect-card-icon">
                <i className={`fas ${item.icon}`}></i>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Stay Tuned CTA */}
        <div className="expect-stay-tuned">
          <div className="stay-tuned-btn">
            <i className="fas fa-bell"></i>
            Stay Tuned for NCFP 3.0 · 24 March 2026
          </div>
        </div>
      </section >

      {/* ======================================================
          CONFERENCE THEMES SECTION
          ====================================================== */}
      < section id="themes" className="themes-section" >
        <div className="themes-header reveal">
          <span className="section-tag">
            <i className="fas fa-layer-group" style={{ marginRight: '6px' }}></i>
            Core Pillars
          </span>
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
      </section >

      {/* ======================================================
          SPONSORS SECTION (Previous Year Patrons)
          ====================================================== */}
      < section id="sponsors" className="sponsors-section reveal" >
        <div className="sponsors-container">
          <div className="sponsors-header">
            <span className="section-tag">
              <i className="fas fa-handshake" style={{ marginRight: '6px' }}></i>
              Partners in Excellence
            </span>
            <h2 className="section-title">Sponsors</h2>
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
                {s.type && <div className="sponsor-type">{s.type}</div>}
              </div>
            ))}
          </div>
        </div>
      </section >


      {/* Why Attend Section — Full-Page Slideshow */}
      < section id="why" className="why-section" >
        <div className="why-slides">
          {whyData.map((item, i) => (
            <div
              key={i}
              className={`why-slide ${i === whySlide ? 'active' : i === (whySlide - 1 + whyData.length) % whyData.length ? 'prev' : ''}`}
            >
              <div className="why-slide-bg-num">{String(i + 1).padStart(2, '0')}</div>

              <div className="why-slide-inner">
                <div className="why-slide-content">
                  <div className="why-slide-tag">
                    <i className="fas fa-seedling" style={{ marginRight: '8px' }}></i>
                    Reasons to Join · Why Attend NCFP 3.0?
                  </div>
                  <div className="why-slide-icon">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <div className="why-slide-stat">{item.stat}</div>
                  <h2 className="why-slide-title">{item.title}</h2>
                  <p className="why-slide-desc">{item.desc}</p>
                </div>
              </div>

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

              <div className="why-progress-bar">
                <div
                  className={`why-progress-fill ${i === whySlide ? 'animating' : ''}`}
                  key={whySlide}
                />
              </div>
            </div>
          ))}
        </div>
      </section >

      {/* CTA Section */}
      < div id="contact" className="cta-section reveal" >
        <div className="cta-container">
          <div className="cta-content">
            <div className="cta-label">
              <i className="fas fa-ticket-alt" style={{ marginRight: '8px' }}></i>
              Limited Seats Available
            </div>
            <h2 className="cta-title">Join the Packaging Evolution 2026</h2>
            <p className="cta-subtitle">
              Be part of the transformational journey shaping the future of food packaging in India.
              Secure your place at NCFP 3.0 today.
            </p>
            <div className="cta-btns">
              <a href="https://forms.gle/B4ZhHZuCrwnBVuSG9" target="_blank" rel="noopener noreferrer" className="btn-hero-primary">
                <i className="fas fa-rocket"></i> Register Now
              </a>
              <button className="btn-hero-secondary" onClick={() => navigateTo('/gallery')}>
                <i className="fas fa-images"></i> View Event Glimpses
              </button>
              <a href="https://forms.gle/fhapMFQuGGW2qjLk7" target="_blank" rel="noopener noreferrer" className="btn-feedback">
                <i className="fas fa-comment-dots"></i> Event Feedback
              </a>
            </div>
          </div>
          <div className="cta-image-wrapper">
            <div className="cta-image-backdrop"></div>
            <img src="/cta_image.png" alt="Modern Sustainable Packaging" className="cta-image" loading="lazy" />
          </div>
        </div>
      </div >

      {/* Footer */}
      < footer className="footer" >

        {/* SEO Content Section */}
        < div className="seo-footer-section" >
          <div className="seo-footer-inner">
            <h3 className="seo-footer-title">About NCFP 3.0 — National Conference on Food Packaging</h3>
            <p className="seo-footer-text">
              <strong>NCFP (National Conference on Food Packaging)</strong> is a premier national-level conference organized at <strong>PVGCOEM Pune</strong> focusing on research, innovation, and sustainability in food packaging. The conference brings together researchers, students, and industry experts to discuss emerging trends in packaging technology, sustainable materials, and food safety.
            </p>
          </div>
        </div >

        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <h3>NCFP 3.0</h3>
              <p>
                The National Conference on Food Packaging is a premier platform dedicated to the
                advancement of food safety, AI-driven innovation, and sustainable packaging solutions.
              </p>
              <div className="footer-social">
                <a href="https://www.linkedin.com/in/national-conference-on-food-packaging-pvgcoet-3243183b4?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
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

            <div className="footer-col">
              <h4>Quick Links</h4>
              <a href="/#home" onClick={(e) => { e.preventDefault(); navigateTo('/'); }}>Home</a>
              <a href="/#about" onClick={(e) => { if (currentRoute !== '/') navigateTo('/'); setTimeout(() => document.getElementById('about')?.scrollIntoView(), 100); }}>About NCFP 3.0</a>
              <a href="/#expect" onClick={(e) => { if (currentRoute !== '/') navigateTo('/'); setTimeout(() => document.getElementById('expect')?.scrollIntoView(), 100); }}>What to Expect</a>
              <a href="/#themes" onClick={(e) => { if (currentRoute !== '/') navigateTo('/'); setTimeout(() => document.getElementById('themes')?.scrollIntoView(), 100); }}>Conference Themes</a>

              <a href="/#why" onClick={(e) => { if (currentRoute !== '/') navigateTo('/'); setTimeout(() => document.getElementById('why')?.scrollIntoView(), 100); }}>Why Attend</a>
              <a
                href="/gallery"
                onClick={(e) => { e.preventDefault(); navigateTo('/gallery'); }}
              >
                Event Glimpses
              </a>
              <a
                href="/committee"
                onClick={(e) => { e.preventDefault(); navigateTo('/committee'); }}
              >
                Core Committee
              </a>
            </div>

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
      </footer >

      {/* PDF Preview Modal */}
      < PDFModal
        isOpen={showPDFModal}
        onClose={() => setShowPDFModal(false)}
        pdfPath={BROCHURE_PDF_PATH}
      />

      {/* Feedback Modal */}
      <FeedbackModal
        isOpen={showFeedbackModal}
        onClose={() => setShowFeedbackModal(false)}
      />

      {/* Floating Feedback Button */}
      <a
        href="https://forms.gle/fhapMFQuGGW2qjLk7"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-feedback-btn"
        aria-label="Event Feedback"
        title="Share your event feedback"
      >
        <i className="fas fa-comment-dots"></i>
        <span>Event Feedback</span>
      </a>

    </div >
  );
}

export default App;
