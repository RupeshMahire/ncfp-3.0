import React, { useEffect } from 'react'

/* ============================================================
   PATRON PAGE DATA
   Update names, roles, photos below.
   Photos: place in /public/committee/ folder
   ============================================================ */

const chiefPatrons = [
    {
        photo: '/committee/rajendra_borhade.jpg',
        name: 'Mr. Rajendra V. Borhade',
        role: 'Chairman, PVG',
        initial: 'R',
    },
    {
        photo: '/committee/sanjay_gunjal.jpg',
        name: 'Mr. Sanjay N. Gunjal',
        role: 'Secretary, PVG',
        initial: 'S',
    },
    {
        photo: '/committee/sp_redekar.jpg',
        name: 'Mr. S. P. Redekar',
        role: 'Director, PVGCOETM',
        initial: 'S',
    },
    {
        photo: '/committee/rg_kaduskar.jpg',
        name: 'Prof. R. G. Kaduskar',
        role: 'Director, PVGCOETM',
        initial: 'R',
    },
];

const patronData = [
    {
        photo: '/committee/tarambale.jpg',
        name: 'Dr. M. R. Tarambale',
        role: 'Principal, PVGCOETM',
        initial: 'T',
    },
];

const convenorData = [
    {
        photo: '/committee/madhura_mahajan.jpg',
        name: 'Prof. Mrs. Madhura Mahajan',
        role: 'Head, Department of Printing and Packaging Technology',
        initial: 'M',
    },
];

const coConvenorData = [
    {
        photo: '/committee/padamja_joshi.jpg',
        name: 'Prof. Mrs. Padmaja Joshi',
        role: 'Faculty, Department of Printing and Packaging Technology',
        initial: 'P',
    },
];

const organizingMembers = [
    { photo: '/committee/sumedh_kapre.jpg', name: 'Prof. Sumedh Kapre', role: '', initial: 'S' },
    { photo: '/committee/shrikala_kanade.jpg', name: 'Prof. Shrikala Kanade', role: '', initial: 'S' },
    { photo: '/committee/varsha_chaware.jpg', name: 'Prof. Dr. Varsha Chaware', role: '', initial: 'V' },
    { photo: '/committee/gaurav_fasate.jpg', name: 'Prof. Gaurav Fasate', role: '', initial: 'G' },
    { photo: '/committee/nikhila_mhasawade.jpg', name: 'Prof. Nikhila Mhasawade', role: '', initial: 'N' },
];

/* ── Avatar colors ── */
const avatarColors = [
    'linear-gradient(135deg, var(--green-rich), var(--green-mid))',
    'linear-gradient(135deg, var(--orange-rich), var(--orange-mid))',
    'linear-gradient(135deg, var(--brown-rich), var(--brown-warm))',
    'linear-gradient(135deg, var(--green-mid), var(--green-sage))',
];

/* ── Single person card ── */
function PatronCard({ person, idx, small = false }) {
    const bg = avatarColors[idx % avatarColors.length];
    return (
        <div className={`patron-card reveal${small ? ' patron-card--sm' : ''}`}>
            <div className="patron-photo-wrap">
                <img
                    src={person.photo}
                    alt={person.name}
                    className="patron-photo"
                    loading="lazy"
                    onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                    }}
                />
                <div className="patron-avatar" style={{ background: bg, display: 'none' }}>
                    <span>{person.initial}</span>
                </div>
            </div>
            <div className="patron-info">
                <h3 className="patron-name">{person.name}</h3>
                {person.role && <span className="patron-role">{person.role}</span>}
            </div>
        </div>
    );
}

/* ============================================================
   PATRON PAGE COMPONENT
   ============================================================ */
function PatronPage({ onBack }) {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });

        const observer = new IntersectionObserver(
            (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
            { threshold: 0.07 }
        );
        document.querySelectorAll('.patron-page .reveal').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="patron-page">

            {/* ── Back Nav ── */}
            <div className="glimpses-back-bar">
                <div className="glimpses-back-inner">
                    <button className="glimpse-back-btn" onClick={onBack}>
                        <i className="fas fa-arrow-left"></i> Back to Home
                    </button>
                    <span className="glimpses-breadcrumb">
                        Home <i className="fas fa-chevron-right"></i> Patrons
                    </span>
                </div>
            </div>

            {/* ── Hero ── */}
            <div className="committee-hero">
                <div className="committee-orb committee-orb-1"></div>
                <div className="committee-orb committee-orb-2"></div>
                <div className="committee-hero-content">
                    <div className="hero-eyebrow">
                        <i className="fas fa-award" style={{ marginRight: '8px' }}></i>
                        NCFP 3.0 · 2026
                    </div>
                    <h1 className="committee-hero-title">Patrons &amp; Leadership</h1>
                    <p className="committee-hero-sub">
                        The distinguished leadership and academic pillars supporting NCFP 3.0 —
                        driving excellence in food packaging education and industry collaboration.
                    </p>
                    <div className="section-divider" style={{ margin: '28px auto 0' }}></div>
                </div>
                <div className="committee-hero-wave">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <path d="M0,60 C240,100 480,20 720,60 C960,100 1200,20 1440,60 L1440,120 L0,120 Z" fill="rgba(74,158,74,0.12)" />
                        <path d="M0,80 C360,30 720,110 1080,60 C1260,40 1380,85 1440,70 L1440,120 L0,120 Z" fill="rgba(212,98,42,0.07)" />
                    </svg>
                </div>
            </div>

            {/* ── CHIEF PATRON ── */}
            <section className="patron-section patron-section--green">
                <div className="patron-section-header reveal">
                    <div className="committee-cat-badge">
                        <i className="fas fa-crown"></i> Chief Patron
                    </div>
                    <h2 className="committee-cat-title">Chief Patrons</h2>
                    <div className="section-divider" style={{ margin: '16px 0 0' }}></div>
                </div>
                <div className="patron-grid patron-grid--4 reveal">
                    {chiefPatrons.map((p, i) => <PatronCard key={i} person={p} idx={i} />)}
                </div>
            </section>

            {/* ── PATRON | CONVENOR | CO-CONVENER ── */}
            <section className="patron-section patron-section--cream">
                <div className="patron-trio-grid reveal">
                    {/* Patron */}
                    <div className="patron-trio-col">
                        <div className="committee-cat-badge" style={{ marginBottom: '24px' }}>
                            <i className="fas fa-user-tie"></i> Patron
                        </div>
                        {patronData.map((p, i) => <PatronCard key={i} person={p} idx={0} />)}
                    </div>

                    {/* Convenor */}
                    <div className="patron-trio-col">
                        <div className="committee-cat-badge" style={{ marginBottom: '24px' }}>
                            <i className="fas fa-chalkboard-teacher"></i> Convenor
                        </div>
                        {convenorData.map((p, i) => <PatronCard key={i} person={p} idx={1} />)}
                    </div>

                    {/* Co-Convener */}
                    <div className="patron-trio-col">
                        <div className="committee-cat-badge" style={{ marginBottom: '24px' }}>
                            <i className="fas fa-users"></i> Co-Convener
                        </div>
                        {coConvenorData.map((p, i) => <PatronCard key={i} person={p} idx={2} />)}
                    </div>
                </div>
            </section>

            {/* ── ORGANIZING COMMITTEE MEMBERS ── */}
            <section className="patron-section patron-section--green">
                <div className="patron-section-header reveal">
                    <div className="committee-cat-badge">
                        <i className="fas fa-sitemap"></i> Organization
                    </div>
                    <h2 className="committee-cat-title">Organizing Committee Members</h2>
                    <div className="section-divider" style={{ margin: '16px 0 0' }}></div>
                </div>
                <div className="patron-grid patron-grid--5 reveal">
                    {organizingMembers.map((p, i) => <PatronCard key={i} person={p} idx={i} small />)}
                </div>
            </section>

            {/* ── Footer Note ── */}
            <div className="glimpses-footer-note">
                <i className="fas fa-seedling"></i>
                <span>For queries, contact us at&nbsp;<strong>ncfp.pvg@gmail.com</strong></span>
                <button className="glimpse-back-btn" onClick={onBack}>
                    <i className="fas fa-home"></i> Back to Home
                </button>
            </div>

        </div>
    );
}

export default PatronPage;
