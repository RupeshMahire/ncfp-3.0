import React, { useEffect } from 'react'

/* ============================================================
   PREVIOUS SPEAKERS DATA
   ============================================================ */
const previousSpeakers = [
    {
        photo: '/speakers/nc_saha.png',
        name: 'Dr. N.C. Saha',
        role: 'Former Director',
        org: 'Indian Institute of Packaging (IIP)',
        tag: 'Keynote Speaker',
    },
    {
        photo: '/speakers/sharmila.png',
        name: 'Mrs. Sharmila Kanade',
        role: 'Consultant',
        org: 'Packaging Industry Expert',
        tag: 'Guest Speaker',
    },
    {
        photo: '/speakers/abhijit.png',
        name: 'Mr. Abhijit Das',
        role: 'Expert',
        org: 'Food Packaging Technology',
        tag: 'Technical Expert',
    },
    {
        photo: '/speakers/ashutosh.png',
        name: 'Mr. Ashutosh Upadhyay',
        role: 'Professor',
        org: 'NIFTEM',
        tag: 'Academic Expert',
    },
    {
        photo: '/speakers/shilpa.png',
        name: 'Ms. Shilpa...',
        role: 'Industry Leader',
        org: 'Sustainable Packaging',
        tag: 'Innovation Head',
    },
    {
        photo: '/speakers/shreyas.png',
        name: 'Mr. Shreyas...',
        role: 'Strategist',
        org: 'AI in Packaging',
        tag: 'AI Specialist',
    },
];

function SpeakersPage({ onBack }) {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });

        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => {
                if (e.isIntersecting) e.target.classList.add('visible');
            }),
            { threshold: 0.1 }
        );
        const els = document.querySelectorAll('.speakers-page .reveal');
        els.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="speakers-page">
            {/* ── Back Nav ── */}
            <div className="glimpses-back-bar">
                <div className="glimpses-back-inner">
                    <button className="glimpse-back-btn" onClick={onBack}>
                        <i className="fas fa-arrow-left"></i> Back to Home
                    </button>
                    <span className="glimpses-breadcrumb">
                        Home <i className="fas fa-chevron-right"></i> Previous Speakers
                    </span>
                </div>
            </div>

            {/* ── Hero ── */}
            <div className="glimpses-hero">
                <div className="glimpses-hero-content">
                    <div className="hero-eyebrow">
                        <i className="fas fa-microphone-alt" style={{ marginRight: '8px' }}></i>
                        Legacy of Excellence
                    </div>
                    <h1 className="glimpses-hero-title">Our Previous Speakers</h1>
                    <p className="glimpses-hero-sub">
                        Honoring the visionaries and experts who have shared their invaluable insights
                        and shaped the discourse at previous editions of NCFP.
                    </p>
                    <div className="section-divider" style={{ margin: '28px auto 0' }}></div>
                </div>
            </div>

            {/* ── Speakers Grid ── */}
            <section className="speakers-section">
                <div className="speakers-grid">
                    {previousSpeakers.map((speaker, i) => (
                        <div key={i} className="speaker-card reveal">
                            <img
                                src={speaker.photo}
                                alt={speaker.name}
                                className="speaker-photo"
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="speaker-overlay">
                                <span className="speaker-tag">{speaker.tag}</span>
                                <h3 className="speaker-name">{speaker.name}</h3>
                                <p className="speaker-role">{speaker.role}</p>
                                <span className="speaker-org">{speaker.org}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ── Footer Note ── */}
            <div className="glimpses-footer-note">
                <i className="fas fa-microphone-alt"></i>
                <span>
                    Want to be a speaker at NCFP 3.0? Share your proposal at&nbsp;
                    <strong>ncfp.pvg@gmail.com</strong>
                </span>
                <button className="glimpse-back-btn" onClick={onBack}>
                    <i className="fas fa-home"></i> Back to Home
                </button>
            </div>
        </div>
    )
}

export default SpeakersPage;
