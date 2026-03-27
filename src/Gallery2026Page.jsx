import React, { useEffect } from 'react';

const gallery2026 = [
    { src: '/gallery/2026/DSC02610.JPG.jpeg', alt: 'NCFP 3.0 Photo' },
    { src: '/gallery/2026/DSC02623.JPG', alt: 'NCFP 3.0 Photo' },
    { src: '/gallery/2026/DSC02641.JPG.jpeg', alt: 'NCFP 3.0 Photo' },
    { src: '/gallery/2026/DSC02654.JPG', alt: 'NCFP 3.0 Photo' },
    { src: '/gallery/2026/DSC02696.JPG', alt: 'NCFP 3.0 Photo' },
    { src: '/gallery/2026/PGP_1367.JPG.jpeg', alt: 'NCFP 3.0 Photo' },
    { src: '/gallery/2026/PGP_1389.JPG.jpeg', alt: 'NCFP 3.0 Photo' },
    { src: '/gallery/2026/PGP_1402.JPG.jpeg', alt: 'NCFP 3.0 Photo' },
    { src: '/gallery/2026/PGP_1404.JPG.jpeg', alt: 'NCFP 3.0 Photo' },
    { src: '/gallery/2026/PGP_1413.JPG.jpeg', alt: 'NCFP 3.0 Photo' },
    { src: '/gallery/2026/PGP_1424.JPG.jpeg', alt: 'NCFP 3.0 Photo' },
    { src: '/gallery/2026/PGP_1425.JPG', alt: 'NCFP 3.0 Photo' },
    { src: '/gallery/2026/PGP_1440.JPG.jpeg', alt: 'NCFP 3.0 Photo' },
    { src: '/gallery/2026/PGP_1448.JPG.jpeg', alt: 'NCFP 3.0 Photo' },
    { src: '/gallery/2026/PGP_1490.JPG.jpeg', alt: 'NCFP 3.0 Photo' },
    { src: '/gallery/2026/PGP_1500.JPG.jpeg', alt: 'NCFP 3.0 Photo' },
    { src: '/gallery/2026/PGP_1517.JPG.jpeg', alt: 'NCFP 3.0 Photo' },
    { src: '/gallery/2026/PGP_1521.JPG', alt: 'NCFP 3.0 Photo' },
    { src: '/gallery/2026/PGP_1528.JPG', alt: 'NCFP 3.0 Photo' },
    { src: '/gallery/2026/PGP_1536.JPG', alt: 'NCFP 3.0 Photo' },
    { src: '/gallery/2026/PGP_1537.JPG', alt: 'NCFP 3.0 Photo' },
    { src: '/gallery/2026/PGP_1541.JPG', alt: 'NCFP 3.0 Photo' },
    { src: '/gallery/2026/PGP_1543.JPG.jpeg', alt: 'NCFP 3.0 Photo' },
    { src: '/gallery/2026/PGP_1552.JPG.jpeg', alt: 'NCFP 3.0 Photo' },
    { src: '/gallery/2026/PGP_1559.JPG.jpeg', alt: 'NCFP 3.0 Photo' },
    { src: '/gallery/2026/PGP_1568.JPG.jpeg', alt: 'NCFP 3.0 Photo' },
    { src: '/gallery/2026/PGP_1583.JPG.jpeg', alt: 'NCFP 3.0 Photo' },
    { src: '/gallery/2026/PGP_1587.JPG', alt: 'NCFP 3.0 Photo' },
    { src: '/gallery/2026/PGP_1590.JPG.jpeg', alt: 'NCFP 3.0 Photo' },
    { src: '/gallery/2026/PGP_1601.JPG.jpeg', alt: 'NCFP 3.0 Photo' },
    { src: '/gallery/2026/PGP_1610.JPG.jpeg', alt: 'NCFP 3.0 Photo' },
    { src: '/gallery/2026/PGP_1625.JPG.jpeg', alt: 'NCFP 3.0 Photo' },
    { src: '/gallery/2026/PGP_1632.JPG.jpeg', alt: 'NCFP 3.0 Photo' },
    { src: '/gallery/2026/PGP_1643.JPG.jpeg', alt: 'NCFP 3.0 Photo' },
    { src: '/gallery/2026/PGP_1674.JPG', alt: 'NCFP 3.0 Photo' },
    { src: '/gallery/2026/PGP_1678.JPG', alt: 'NCFP 3.0 Photo' },
    { src: '/gallery/2026/PGP_1688.JPG', alt: 'NCFP 3.0 Photo' },
    { src: '/gallery/2026/PGP_1702.JPG.jpeg', alt: 'NCFP 3.0 Photo' },
    { src: '/gallery/2026/PGP_1726.JPG', alt: 'NCFP 3.0 Photo' },
    { src: '/gallery/2026/PGP_1732.JPG.jpeg', alt: 'NCFP 3.0 Photo' },
];
const PLACEHOLDER = '/gallery/2026/speaker-placeholder.jpg';

function ProgressiveImage({ src, alt, year }) {
    const [loaded, setLoaded] = React.useState(false);

    return (
        <div 
            className={`glimpse-item-masonry ${loaded ? 'loaded' : 'loading'}`}
        >
            <div className="skeleton-placeholder"></div>
            <img
                src={src}
                alt={alt}
                loading="lazy"
                decoding="async"
                onLoad={() => setLoaded(true)}
                style={{ opacity: loaded ? 1 : 0 }}
                onError={(e) => { e.target.src = PLACEHOLDER; setLoaded(true); }}
            />
            <div className="glimpse-item-overlay">
                <span className="glimpse-year-tag">{year}</span>
            </div>
        </div>
    );
}

function GlimpseGrid({ images, year }) {
    return (
        <div className="glimpse-masonry-grid">
            {images.map((img, i) => (
                <ProgressiveImage key={i} src={img.src} alt={img.alt} year={year} />
            ))}
        </div>
    );
}

function Gallery2026Page({ onBack }) {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });

        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => {
                if (e.isIntersecting) e.target.classList.add('visible');
            }),
            { threshold: 0.1 }
        );
        const els = document.querySelectorAll('.gallery-2026-page .reveal');
        els.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="glimpses-page gallery-2026-page">
            <div className="glimpses-back-bar">
                <div className="glimpses-back-inner">
                    <button className="glimpse-back-btn" onClick={onBack}>
                        <i className="fas fa-arrow-left"></i> Back to Home
                    </button>
                    <span className="glimpses-breadcrumb">
                        Home <i className="fas fa-chevron-right"></i> NCFP 3.0 Photos
                    </span>
                </div>
            </div>

            <div className="glimpses-hero" style={{ background: 'linear-gradient(135deg, var(--green-deep) 0%, var(--brown-deep) 100%)' }}>
                <div className="glimpses-hero-content">
                    <span className="section-tag" style={{ background: 'rgba(255,255,255,0.15)', color: 'var(--cream-warm)', border: '1px solid rgba(255,255,255,0.3)' }}>
                        <i className="fas fa-camera-retro" style={{ marginRight: '6px' }}></i>
                        NCFP 3.0 Highlights
                    </span>
                    <h1 className="glimpses-hero-title" style={{ color: '#fff', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>NCFP 3.0 Gallery</h1>
                    <p className="glimpses-hero-sub" style={{ color: 'var(--cream-light)', opacity: 1, fontSize: '1.2rem', fontWeight: 500 }}>
                        Relive the moments of NCFP 3.0 (2026) — A celebration of innovation and food packaging excellence.
                    </p>
                    <div className="section-divider" style={{ background: 'var(--orange-soft)', height: '4px', width: '80px' }}></div>
                </div>
            </div>

            <section className="glimpse-section" style={{ backgroundColor: 'var(--cream-white)' }}>
                <div className="glimpse-section-header reveal">
                    <div className="glimpse-edition-badge" style={{ background: 'var(--green-rich)', color: '#fff', border: 'none' }}>
                        <i className="fas fa-check-circle"></i> NCFP 3.0 · 2026
                    </div>
                    <h2 className="glimpse-section-title" style={{ color: 'var(--green-deep)', fontWeight: 800 }}>2026 Event Photos</h2>
                    <p className="glimpse-section-sub" style={{ color: 'var(--brown-rich)', fontSize: '1.1rem' }}>
                        Capturing the energy, research presentations, and networking from our most recent edition.
                    </p>
                    <div className="section-divider" style={{ margin: '20px auto 0', background: 'linear-gradient(90deg, var(--green-mid), var(--orange-soft))' }}></div>
                </div>
                <GlimpseGrid images={gallery2026} year="NCFP 3.0 · 2026" />
            </section>

            <div className="glimpses-footer-note">
                <i className="fas fa-seedling"></i>
                <span>Thank you for being part of NCFP 3.0. See you at <strong>NCFP 4.0 · 2027</strong>!</span>
                <button className="glimpse-back-btn" onClick={onBack}>
                    <i className="fas fa-home"></i> Back to Home
                </button>
            </div>
        </div>
    );
}

export default Gallery2026Page;
