import { useState } from 'react';
import GradePdf from './assets/images/Grade.pdf';
import ProfileImg from './assets/images/Khen01.png';
import ProjectApmImg from './assets/images/apm01.png';
import ProjectHlImg from './assets/images/hl01.png';
import ThaiLlmImg from './assets/images/ThaiLLM.jpg';
import AiForThaiImg from './assets/images/AIforthai.jpg';
import UxImg from './assets/images/UX.jpg';
import JavaScriptImg from './assets/images/Javascript.png';
import CcnaImg from './assets/images/CCNA.jpg';
import ThaiMoocImg from './assets/images/Thaimooc.jpg';

const certificates = [
  ['Thai Large Language Model', 'NECTEC', '5 Jul 2025', ThaiLlmImg],
  ['AI for Thai LLMs ทางการแพทย์', 'NECTEC', '6 Jul 2025', AiForThaiImg],
  ['Foundations of User Experience', 'Coursera', '31 Aug 2024', UxImg],
  ['JavaScript', 'freeCodeCamp', '29 Jan 2026', JavaScriptImg],
  ['CCNA: Introduction to Networks', 'Cisco', '10 Oct 2025', CcnaImg],
  ['วิทยาการคอมพิวเตอร์เบื้องต้น', 'ThaiMOOC', '23 Jan 2026', ThaiMoocImg],
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" onClick={closeMenu} aria-label="Nantakrit Techayod, home">NT<span>.</span></a>
        <button className="menu-button" type="button" onClick={() => setIsMenuOpen((open) => !open)} aria-expanded={isMenuOpen} aria-controls="site-navigation">
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
        <nav id="site-navigation" className={isMenuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="Primary navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#credentials" onClick={closeMenu}>Credentials</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero section-frame">
          <div className="hero-copy">
            <p className="eyebrow">Portfolio / 2026</p>
            <h1>Nantakrit<br /><em>Techayod</em></h1>
            <p className="hero-intro">Computer Science student at the University of Phayao, building useful and considered digital experiences.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Selected work <span>↘</span></a>
              <a className="text-link" href={GradePdf} download="Transcript_Nantakrit.pdf">Download transcript <span>↓</span></a>
            </div>
          </div>
          <div className="portrait-wrap">
            <div className="portrait-rule" />
            <img src={ProfileImg} alt="Nantakrit Techayod" className="portrait" />
            <p className="portrait-caption">CS student · Phayao, Thailand</p>
          </div>
        </section>

        <section id="about" className="section-frame about-section">
          <div className="section-heading"><span>01</span><p>About</p></div>
          <div className="about-content">
            <h2>Learning the craft,<br />one solid product at a time.</h2>
            <div className="about-detail">
              <p>I am interested in frontend development, product design, and the small decisions that make an interface feel clear and calm. My goal is to grow into a thoughtful full-stack developer.</p>
              <dl>
                <div><dt>Now</dt><dd>B.Sc. Computer Science<br />University of Phayao · 2023—present</dd></div>
                <div><dt>Before</dt><dd>Arts–Chinese programme<br />Fakkwanwittayakom School · 2020—2022</dd></div>
                <div><dt>Based in</dt><dd>Phayao, Thailand</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section className="skills-band" aria-label="Skills">
          <p>Working with</p>
          <ul><li>HTML / CSS</li><li>JavaScript</li><li>React</li><li>Next.js</li><li>TypeScript</li><li>Tailwind</li><li>Git</li></ul>
        </section>

        <section id="work" className="section-frame work-section">
          <div className="section-heading"><span>02</span><p>Selected work</p></div>
          <div className="project-list">
            <article className="project-card">
              <div className="project-meta"><span>01 / Web application</span><span>2025</span></div>
              <img src={ProjectApmImg} alt="Online appointment booking system interface" />
              <div className="project-copy">
                <div><h3>Online Appointment<br />Booking System</h3><p>A simpler way for University of Phayao counselling services to manage appointments beyond chat.</p></div>
                <div className="project-footer"><p>Next.js · TypeScript · Supabase</p><div><a href="https://appointment-website-nine.vercel.app" target="_blank" rel="noreferrer">Live site ↗</a><a href="https://github.com/Kittigon/Online-Appointment-Booking-System" target="_blank" rel="noreferrer">Source ↗</a></div></div>
              </div>
            </article>
            <article className="project-card project-card-offset">
              <div className="project-meta"><span>02 / Product design</span><span>2025</span></div>
              <div className="health-image"><img src={ProjectHlImg} alt="Health Life application prototype" /></div>
              <div className="project-copy">
                <div><h3>Health Life</h3><p>A health-tech mobile application concept, designed for the Startup HealthTech X2 project.</p></div>
                <div className="project-footer"><p>Figma · UX/UI design</p><div><a href="https://www.figma.com/proto/OL04Z2QL1H3PWJamAit5e1/HL-App-Project-Prototype" target="_blank" rel="noreferrer">View prototype ↗</a></div></div>
              </div>
            </article>
          </div>
        </section>

        <section id="credentials" className="section-frame credentials-section">
          <div className="section-heading"><span>03</span><p>Credentials</p></div>
          <div className="credentials-intro"><h2>Evidence of<br /><em>curiosity.</em></h2><p>Courses and certifications completed alongside my degree.</p></div>
          <div className="certificate-grid">
            {certificates.map(([title, issuer, date, image]) => <Certificate key={title} title={title} issuer={issuer} date={date} image={image} />)}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div><p className="eyebrow">04 / Contact</p><h2>Let&apos;s make<br />something useful.</h2></div>
          <div className="contact-links"><p>Available for conversations about internships, frontend work, and collaborative projects.</p><a href="mailto:nantakrittechayod@gmail.com">nantakrittechayod@gmail.com <span>↗</span></a><a href="https://github.com/Nantakrit" target="_blank" rel="noreferrer">GitHub <span>↗</span></a></div>
        </section>
      </main>
      <footer><span>© 2026 Nantakrit Techayod</span><span>Designed and built with care.</span></footer>
    </div>
  );
}

function Certificate({ title, issuer, date, image }) {
  return <article className="certificate"><div className="certificate-image"><img src={image} alt={`${title} certificate`} /></div><div><h3>{title}</h3><p>{issuer}</p><time>{date}</time></div></article>;
}

export default App;
