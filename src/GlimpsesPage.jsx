import React, { useEffect } from 'react'

/* ============================================================
   GLIMPSES PAGE — NCFP Event Highlights
   NCFP 1.0 (2024) + NCFP 2.0 (2025) Photo Highlights
   ============================================================ */

const gallery2024 = [
    { src: '/gallery/1.jpg', alt: 'NCFP 1.0 – 2024 Event' },
    { src: '/gallery/2.jpg', alt: 'NCFP 1.0 – 2024 Event' },
    { src: '/gallery/3.jpg', alt: 'NCFP 1.0 – 2024 Event' },
    { src: '/gallery/4.jpg', alt: 'NCFP 1.0 – 2024 Event' },
    { src: '/gallery/5.jpg', alt: 'NCFP 1.0 – 2024 Event' },
    { src: '/gallery/6.jpg', alt: 'NCFP 1.0 – 2024 Event' },
    { src: '/gallery/7.jpg', alt: 'NCFP 1.0 – 2024 Event' },
    { src: '/gallery/8.jpg', alt: 'NCFP 1.0 – 2024 Event' },
    { src: '/gallery/9.jpg', alt: 'NCFP 1.0 – 2024 Event' },
    { src: '/gallery/10.jpg', alt: 'NCFP 1.0 – 2024 Event' },
    { src: '/gallery/11.jpg', alt: 'NCFP 1.0 – 2024 Event' },
    { src: '/gallery/12.jpg', alt: 'NCFP 1.0 – 2024 Event' },
    { src: '/gallery/13.jpg', alt: 'NCFP 1.0 – 2024 Event' },
    { src: '/gallery/14.jpg', alt: 'NCFP 1.0 – 2024 Event' },
    { src: '/gallery/15.jpg', alt: 'NCFP 1.0 – 2024 Event' },
    { src: '/gallery/IMG_2357.jpg', alt: 'NCFP 1.0 – 2024 Event' },
];

const gallery2025 = [
    { src: '/gallery/2025/Copy of IMG_7270.JPG.jpeg', alt: 'NCFP 2.0 – 2025 Event' },
    { src: '/gallery/2025/Copy of IMG_7276.JPG.jpeg', alt: 'NCFP 2.0 – 2025 Event' },
    { src: '/gallery/2025/Copy of IMG_7284.JPG.jpeg', alt: 'NCFP 2.0 – 2025 Event' },
    { src: '/gallery/2025/Copy of IMG_7294.JPG.jpeg', alt: 'NCFP 2.0 – 2025 Event' },
    { src: '/gallery/2025/Copy of IMG_7307.JPG.jpeg', alt: 'NCFP 2.0 – 2025 Event' },
    { src: '/gallery/2025/Copy of IMG_7312.JPG.jpeg', alt: 'NCFP 2.0 – 2025 Event' },
    { src: '/gallery/2025/Copy of IMG_7322.JPG.jpeg', alt: 'NCFP 2.0 – 2025 Event' },
    { src: '/gallery/2025/Copy of IMG_7328.JPG.jpeg', alt: 'NCFP 2.0 – 2025 Event' },
    { src: '/gallery/2025/Copy of IMG_7331.JPG.jpeg', alt: 'NCFP 2.0 – 2025 Event' },
    { src: '/gallery/2025/Copy of IMG_7351.JPG.jpeg', alt: 'NCFP 2.0 – 2025 Event' },
    { src: '/gallery/2025/Copy of IMG_7505.JPG.jpeg', alt: 'NCFP 2.0 – 2025 Event' },
    { src: '/gallery/2025/Copy of IMG_7505.JPG - Copy.jpeg', alt: 'NCFP 2.0 – 2025 Event' },
    { src: '/gallery/2025/Copy of IMG_7539.JPG.jpeg', alt: 'NCFP 2.0 – 2025 Event' },
    { src: '/gallery/2025/Copy of IMG_7660.JPG.jpeg', alt: 'NCFP 2.0 – 2025 Event' },
    { src: '/gallery/2025/Copy of IMG_7660.JPG - Copy.jpeg', alt: 'NCFP 2.0 – 2025 Event' },
    { src: '/gallery/2025/Copy of IMG_7673.JPG.jpeg', alt: 'NCFP 2.0 – 2025 Event' },
];

const PLACEHOLDER = 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800';

function GlimpseGrid({ images, year }) {
    return (
        <div className="glimpse-grid">
            {images.map((img, i) => (
                <div
                    key={i}
                    className="glimpse-item reveal"
                    style={{ animationDelay: `${i * 0.07}s` }}
                >
                    <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        onError={(e) => { e.target.src = PLACEHOLDER; }}
                    />
                    <div className="glimpse-item-overlay">
                        <span className="glimpse-year-tag">{year}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

function GlimpsesPage({ onBack }) {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Scroll reveal for this page
        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => {
                if (e.isIntersecting) e.target.classList.add('visible');
            }),
            { threshold: 0.08 }
        );
        const els = document.querySelectorAll('.glimpses-page .reveal');
        els.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="glimpses-page">

            {/* ── Back Nav ── */}
            <div className="glimpses-back-bar">
                <div className="glimpses-back-inner">
                    <button className="glimpse-back-btn" onClick={onBack}>
                        <i className="fas fa-arrow-left"></i> Back to Home
                    </button>
                    <span className="glimpses-breadcrumb">
                        Home <i className="fas fa-chevron-right"></i> Glimpses
                    </span>
                </div>
            </div>

            {/* ── Hero Banner ── */}
            <div className="glimpses-hero">
                <div className="glimpses-hero-content">
                    <span className="section-tag">
                        <i className="fas fa-images" style={{ marginRight: '6px' }}></i>
                        Event Gallery
                    </span>
                    <h1 className="glimpses-hero-title">Event Glimpses</h1>
                    <p className="glimpses-hero-sub">
                        A visual journey through the innovation, connections, and energy of NCFP editions.
                    </p>
                    <div className="section-divider"></div>
                </div>
            </div>

            {/* ── SECTION 1 — NCFP 1.0 (2024) ── */}
            <section className="glimpse-section glimpse-section--2024">
                <div className="glimpse-section-header reveal">
                    <div className="glimpse-edition-badge">
                        <i className="fas fa-calendar-check"></i> NCFP 1.0 · 2024
                    </div>
                    <h2 className="glimpse-section-title">NCFP 1.0 – 2024 Highlights</h2>
                    <p className="glimpse-section-sub">
                        Inaugural edition of India's National Conference on Food Packaging — where ideas sparked an industry movement.
                    </p>
                    <div className="section-divider" style={{ margin: '20px 0 0' }}></div>
                </div>
                <GlimpseGrid images={gallery2024} year="NCFP 1.0 · 2024" />
            </section>

            {/* ── SECTION 2 — NCFP 2.0 (2025) ── */}
            <section className="glimpse-section glimpse-section--2025">
                <div className="glimpse-section-header reveal">
                    <div className="glimpse-edition-badge glimpse-edition-badge--2025">
                        <i className="fas fa-calendar-check"></i> NCFP 2.0 · 2025
                    </div>
                    <h2 className="glimpse-section-title">NCFP 2.0 – 2025 Highlights</h2>
                    <p className="glimpse-section-sub">
                        Second edition raised the bar — deeper research, wider industry reach, stronger sustainability commitment.
                    </p>
                    <div className="section-divider" style={{ margin: '20px 0 0' }}></div>
                </div>
                <GlimpseGrid images={gallery2025} year="NCFP 2.0 · 2025" />
            </section>

            {/* ── Footer note ── */}
            <div className="glimpses-footer-note">
                <i className="fas fa-seedling"></i>
                <span>Stay tuned for <strong>NCFP 3.0 · 2026</strong> — the biggest edition yet.</span>
                <button className="glimpse-back-btn" onClick={onBack}>
                    <i className="fas fa-home"></i> Back to Home
                </button>
            </div>

        </div>
    );
}

export default GlimpsesPage;
