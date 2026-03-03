import React, { useEffect } from 'react'

/* ============================================================
   COMMITTEE PAGE DATA
   Update member names, roles, photos, and descriptions below.
   Photos: place in /public/committee/ folder
   e.g. /committee/john_doe.jpg
   ============================================================ */

const committeeCategories = [
    {
        id: 'faculty',
        tag: 'Academic Leadership',
        icon: 'fa-graduation-cap',
        title: 'Faculty Advisory Committee',
        subtitle: 'Guiding the conference with academic rigor and institutional expertise.',
        colorClass: 'cat--green',
        gridCentered: true,
        members: [
            {
                photo: '/committee/madhura_mahajan.jpg',
                name: 'Dr. Prof. Madhura Mahajan',
                role: 'Convener, NCFP 3.0',
                desc: 'Head of Department — Printing and Packaging Technology',
                linkedin: '',
                email: '',
                initial: 'M',
            },
            {
                photo: '/committee/padamja_joshi.jpg',
                name: 'Prof. Padamja Joshi',
                role: 'Co-Convener, NCFP 3.0',
                desc: 'Associate Professor',
                linkedin: '',
                email: '',
                initial: 'P',
            },

        ],
    },
    {
        id: 'student-core',
        tag: 'Student Leadership',
        icon: 'fa-users',
        title: 'Student Core Committee',
        subtitle: 'The driving force behind NCFP 3.0 — passionate students leading by example.',
        colorClass: 'cat--orange',
        members: [
            {
                photo: '/committee/dipesh_krishna.jpg',
                name: 'Dipesh & Krishna',
                role: 'Organizers',
                desc: '',
                linkedin: '',
                email: '',
                initial: 'D',
            },
            {
                photo: '/committee/saloni_rupesh.jpg',
                name: 'Saloni & Rupesh',
                role: 'Technical Heads',
                desc: '',
                linkedin: '',
                email: '',
                initial: 'S',
            },
            {
                photo: '/committee/sutirth_tejas.jpg',
                name: 'Sutirth & Tejas',
                role: 'Design & Production Heads',
                desc: '',
                linkedin: '',
                email: '',
                initial: 'S',
            },
            {
                photo: '/committee/aman_smit_rohan.jpg',
                name: 'Aman, Smit & Rohan',
                role: 'Finance Heads',
                desc: '',
                linkedin: '',
                email: '',
                initial: 'A',
            },
            {
                photo: '/committee/vivek.jpg',
                name: 'Vivek',
                role: 'Curation Head',
                desc: '',
                linkedin: '',
                email: '',
                initial: 'V',
            },
            {
                photo: '/committee/shihari_priyanka.jpg',
                name: 'Shihari & Priyanka',
                role: 'Media & Marketing Heads',
                desc: '',
                linkedin: '',
                email: '',
                initial: 'S',
            },
            {
                photo: '/committee/anuj_aditya.jpg',
                name: 'Anuj & Aditya',
                role: 'Logistic & Operation Heads',
                desc: '',
                linkedin: '',
                email: '',
                initial: 'A',
            },
            {
                photo: '/committee/vidya_ashley.jpg',
                name: 'Vidya & Ashley',
                role: 'Editorial Heads',
                desc: '',
                linkedin: '',
                email: '',
                initial: 'V',
            },
        ],
    },
];

/* ── Helper: generate a color for photo fallback initials ── */
const avatarColors = [
    'linear-gradient(135deg, var(--green-rich), var(--green-mid))',
    'linear-gradient(135deg, var(--orange-rich), var(--orange-mid))',
    'linear-gradient(135deg, var(--brown-rich), var(--brown-warm))',
    'linear-gradient(135deg, var(--green-mid), var(--green-sage))',
];

/* ── Member Card ── */
function MemberCard({ member, idx }) {
    const bg = avatarColors[idx % avatarColors.length];

    return (
        <div className="cmember-card reveal">
            {/* Photo / Avatar */}
            <div className="cmember-photo-wrap">
                <img
                    src={member.photo}
                    alt={member.name}
                    className="cmember-photo"
                    loading="lazy"
                    onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                    }}
                />
                {/* Fallback initial avatar */}
                <div className="cmember-avatar" style={{ background: bg, display: 'none' }}>
                    <span>{member.initial}</span>
                </div>
            </div>

            {/* Info */}
            <div className="cmember-info">
                <h3 className="cmember-name">{member.name}</h3>
                <span className="cmember-role">{member.role}</span>
                {member.desc && <p className="cmember-desc">{member.desc}</p>}

                {/* Social links (only shown when populated) */}
                {(member.linkedin || member.email) && (
                    <div className="cmember-social">
                        {member.linkedin && (
                            <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        )}
                        {member.email && (
                            <a href={`mailto:${member.email}`} aria-label="Email">
                                <i className="fas fa-envelope"></i>
                            </a>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

/* ── Category Section ── */
function CategorySection({ cat }) {
    return (
        <section className={`committee-category ${cat.colorClass}`} id={cat.id}>
            <div className="committee-cat-header reveal">
                <div className="committee-cat-badge">
                    <i className={`fas ${cat.icon}`}></i>
                    {cat.tag}
                </div>
                <h2 className="committee-cat-title">{cat.title}</h2>
                <p className="committee-cat-sub">{cat.subtitle}</p>
                <div className="section-divider" style={{ margin: '20px 0 0' }}></div>
            </div>

            <div className={`cmembers-grid${cat.gridCentered ? ' cmembers-grid--centered' : ''}`}>
                {cat.members.map((m, i) => (
                    <MemberCard key={i} member={m} idx={i} />
                ))}
            </div>
        </section>
    );
}

/* ============================================================
   COMMITTEE PAGE
   ============================================================ */
function CommitteePage({ onBack }) {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });

        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => {
                if (e.isIntersecting) e.target.classList.add('visible');
            }),
            { threshold: 0.07 }
        );
        const els = document.querySelectorAll('.committee-page .reveal');
        els.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <div className="committee-page">

            {/* ── Back Nav ── */}
            <div className="glimpses-back-bar">
                <div className="glimpses-back-inner">
                    <button className="glimpse-back-btn" onClick={onBack}>
                        <i className="fas fa-arrow-left"></i> Back to Home
                    </button>
                    <span className="glimpses-breadcrumb">
                        Home <i className="fas fa-chevron-right"></i> Core Committee
                    </span>
                </div>
            </div>

            {/* ── Hero ── */}
            <div className="committee-hero">
                {/* Ambient orbs (same as main hero orbs) */}
                <div className="committee-orb committee-orb-1"></div>
                <div className="committee-orb committee-orb-2"></div>

                <div className="committee-hero-content">
                    <div className="hero-eyebrow">
                        <i className="fas fa-users" style={{ marginRight: '8px' }}></i>
                        NCFP 3.0 · 2026
                    </div>
                    <h1 className="committee-hero-title">Core Committee</h1>
                    <p className="committee-hero-sub">
                        Meet the dedicated team driving innovation, excellence, and impact at NCFP 3.0 —
                        a passionate collective of faculty leaders and student changemakers.
                    </p>
                    <div className="section-divider" style={{ margin: '28px auto 0' }}></div>
                </div>

                {/* Wave SVG matching main hero */}
                <div className="committee-hero-wave">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <path d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z" fill="rgba(74,158,74,0.12)" />
                        <path d="M0,80 C360,30 720,110 1080,60 C1260,40 1380,85 1440,70 L1440,120 L0,120 Z" fill="rgba(212,98,42,0.07)" />
                    </svg>
                </div>
            </div>

            {/* ── Quick Jump (category nav) ── */}
            <div className="committee-quick-nav reveal">
                <div className="committee-quick-inner">
                    {committeeCategories.map((cat) => (
                        <a key={cat.id} href={`#${cat.id}`} className="committee-quick-link">
                            <i className={`fas ${cat.icon}`}></i>
                            <span>{cat.title.replace(' Committee', '').replace(' Team', '')}</span>
                        </a>
                    ))}
                </div>
            </div>

            {/* ── Category Sections ── */}
            {committeeCategories.map((cat) => (
                <CategorySection key={cat.id} cat={cat} />
            ))}

            {/* ── Footer Note ── */}
            <div className="glimpses-footer-note">
                <i className="fas fa-seedling"></i>
                <span>
                    Interested in joining the NCFP 3.0 team? Reach us at&nbsp;
                    <strong>ncfp.pvg@gmail.com</strong>
                </span>
                <button className="glimpse-back-btn" onClick={onBack}>
                    <i className="fas fa-home"></i> Back to Home
                </button>
            </div>

        </div>
    );
}

export default CommitteePage;
