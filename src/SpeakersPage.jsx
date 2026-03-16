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
            {/* Back Nav */}
            <div className="glimpses-back-bar">
                <div className="glimpses-back-inner">
                    <button className="glimpse-back-btn" onClick={onBack}>
                        <i className="fas fa-arrow-left"></i> Back to Home
                    </button>
                    <span className="glimpses-breadcrumb">
                        Home <i className="fas fa-chevron-right"></i> Speakers
                    </span>
                </div>
            </div>

            {/* Hero */}
            <div className="glimpses-hero">
                <div className="glimpses-hero-content">
                    <div className="hero-eyebrow">
                        <i className="fas fa-microphone-alt" style={{ marginRight: '8px' }}></i>
                        Legacy of Excellence · NCFP 3.0
                    </div>
                    <h1 className="glimpses-hero-title">Our Speakers</h1>
                    <p className="glimpses-hero-sub">
                        Meet the visionaries, industry leaders, and experts gracing NCFP 3.0 —
                        and honoring those who shaped previous editions.
                    </p>
                    <div className="section-divider" style={{ margin: '28px auto 0' }}></div>
                </div>
            </div>

            {/* ── CONFIRMED SPEAKERS SECTION ── */}
            <section className="speakers-section">
                <div className="speakers-subsection-header reveal">
                    <span className="section-tag">
                        <i className="fas fa-star" style={{ marginRight: '6px' }}></i>
                        NCFP 3.0 · 24 March 2026
                    </span>
                    <h2 className="section-title">Confirmed Speakers</h2>
                    <p className="section-subtitle">
                        Distinguished experts and industry leaders confirmed for NCFP 3.0.
                    </p>
                    <div className="section-divider"></div>
                </div>

                <div className="speakers-grid">

                    {/* Dr. M. P. Raghav Rao — Keynote */}
                    <div className="speaker-card confirmed-speaker reveal">
                        <img
                            src="/speakers/mp_raghav_rao.png"
                            alt="Dr. M. P. Raghav Rao"
                            className="speaker-photo"
                            loading="lazy"
                            decoding="async"
                        />
                        <div className="speaker-overlay">
                            <span className="speaker-tag keynote-tag">
                                <i className="fas fa-crown" style={{ marginRight: '4px' }}></i>
                                Keynote Address
                            </span>
                            <h3 className="speaker-name">Dr. M. P. Raghav Rao</h3>
                            <p className="speaker-role">Managing Director</p>
                            <span className="speaker-org">
                                Fujifilm Sericol India
                                <span className="speaker-sponsor-badge">
                                    <i className="fas fa-medal" style={{ marginRight: '3px' }}></i>
                                    Platinum Sponsor
                                </span>
                            </span>
                        </div>
                    </div>

                    {/* Simran Nawander */}
                    <div className="speaker-card confirmed-speaker reveal">
                        <img
                            src="/speakers/simran_nawander.png"
                            alt="Simran Nawander"
                            className="speaker-photo"
                            loading="lazy"
                            decoding="async"
                        />
                        <div className="speaker-overlay">
                            <span className="speaker-tag">Industry Expert</span>
                            <h3 className="speaker-name">Simran Nawander</h3>
                            <p className="speaker-role">Founder</p>
                            <span className="speaker-org">Sim &amp; Sans Chem Connect</span>
                            <p className="speaker-expertise">Sustainable Plastics &amp; Polymer Additives</p>
                            <p className="speaker-topic">
                                <i className="fas fa-comments" style={{ marginRight: '5px', opacity: 0.75 }}></i>
                                Sustainable Packaging Innovations in Food Technology
                            </p>
                        </div>
                    </div>

                    {/* Hetal Shah */}
                    <div className="speaker-card confirmed-speaker reveal">
                        <img
                            src="/speakers/hetal_shah.png"
                            alt="Hetal Shah"
                            className="speaker-photo"
                            loading="lazy"
                            decoding="async"
                        />
                        <div className="speaker-overlay">
                            <span className="speaker-tag">Food Safety Expert</span>
                            <h3 className="speaker-name">Hetal Shah</h3>
                            <p className="speaker-role">National Certification Manager</p>
                            <span className="speaker-org">FoodChain ID</span>
                            <p className="speaker-expertise">Lead Assessor · FSSAI FoSTaC Trainer · USFDA PCQI Trainer</p>
                            <p className="speaker-topic">
                                <i className="fas fa-comments" style={{ marginRight: '5px', opacity: 0.75 }}></i>
                                Food Safety &amp; Packaging Compliance and Certification
                            </p>
                        </div>
                    </div>

                    {/* Anjushree Ramanarayanan */}
                    <div className="speaker-card confirmed-speaker reveal">
                        <img
                            src="/speakers/anjushree.png"
                            alt="Anjushree Ramanarayanan"
                            className="speaker-photo"
                            loading="lazy"
                            decoding="async"
                        />
                        <div className="speaker-overlay">
                            <span className="speaker-tag">Branding Expert</span>
                            <h3 className="speaker-name">Anjushree Ramanarayanan</h3>
                            <p className="speaker-role">Founder</p>
                            <span className="speaker-org">Impressions Vision Designed</span>
                            <p className="speaker-expertise">Branding &amp; Packaging Design</p>
                            <p className="speaker-topic">
                                <i className="fas fa-comments" style={{ marginRight: '5px', opacity: 0.75 }}></i>
                                AI-Powered Smart Packaging
                            </p>
                        </div>
                    </div>

                    {/* Ashutosh Kumar */}
                    <div className="speaker-card confirmed-speaker reveal">
                        <img
                            src="/speakers/ashutosh.png"
                            alt="Ashutosh Kumar"
                            className="speaker-photo"
                            loading="lazy"
                            decoding="async"
                        />
                        <div className="speaker-overlay">
                            <span className="speaker-tag">Manufacturing Expert</span>
                            <h3 className="speaker-name">Ashutosh Kumar</h3>
                            <p className="speaker-role">General Manager – Manufacturing</p>
                            <span className="speaker-org">Vinsak India</span>
                            <p className="speaker-expertise">Chartered Engineer · MIE</p>
                        </div>
                    </div>

                </div>
            </section>

            {/* ── PREVIOUS SPEAKERS SECTION ── */}
            <section className="speakers-section speakers-section-prev">
                <div className="speakers-subsection-header reveal">
                    <span className="section-tag">
                        <i className="fas fa-history" style={{ marginRight: '6px' }}></i>
                        Past Editions · NCFP 1.0 &amp; 2.0
                    </span>
                    <h2 className="section-title">Our Previous Speakers</h2>
                    <p className="section-subtitle">
                        Honoring the visionaries and experts who shared their invaluable insights
                        at previous editions of NCFP.
                    </p>
                    <div className="section-divider"></div>
                </div>

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

            {/* Footer Note */}
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
