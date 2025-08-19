export default function Home() {
  return (
    <main style={{ fontFamily: 'Inter, sans-serif', background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)', minHeight: '100vh', padding: 0 }}>
      <nav style={{ width: '100%', background: '#3730a3', color: '#fff', padding: '1.2rem 0', boxShadow: '0 2px 8px rgba(60,60,120,0.08)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2rem' }}>
          <span style={{ fontWeight: 700, fontSize: '1.5rem', letterSpacing: 1 }}>Shree's Portfolio</span>
          <div style={{ display: 'flex', gap: '2rem', fontWeight: 500 }}>
            <a href="#about" style={{ color: '#fff', textDecoration: 'none' }}>About</a>
            <a href="#skills" style={{ color: '#fff', textDecoration: 'none' }}>Skills</a>
            <a href="#projects" style={{ color: '#fff', textDecoration: 'none' }}>Projects</a>
            <a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero/About Section */}
      <section id="about" style={{ maxWidth: 1200, margin: '0 auto', padding: '3rem 2rem 2rem', display: 'flex', alignItems: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
        <img src="/shree.jpg" alt="Profile" style={{ width: 180, height: 180, objectFit: 'cover', borderRadius: '50%', boxShadow: '0 4px 16px rgba(60,60,120,0.10)' }} />
        <div>
          <h1 style={{ fontSize: '2.7rem', fontWeight: 700, color: '#3730a3', marginBottom: 10 }}>Shreayash(Sj)</h1>
          <p style={{ fontSize: '1.25rem', color: '#6366f1', marginBottom: 18 }}>
            Hi There, I'm Shree! I'm a passionate developer with a love for building beautiful and functional web applications. Welcome to my professional dashboard portfolio!
          </p>
          <p style={{ fontSize: '1.1rem', color: '#444', marginBottom: 0 }}>
            I enjoy solving complex problems, learning new technologies, and collaborating with creative teams. My goal is to deliver impactful solutions and delightful user experiences.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem', background: '#fff', borderRadius: 24, boxShadow: '0 8px 32px rgba(60,60,120,0.10)', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.7rem', fontWeight: 600, color: '#3730a3', marginBottom: 18 }}>Skills</h2>
        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ background: '#eef2ff', color: '#3730a3', padding: '10px 22px', borderRadius: 16, fontWeight: 500 }}>Next.js</li>
          <li style={{ background: '#eef2ff', color: '#3730a3', padding: '10px 22px', borderRadius: 16, fontWeight: 500 }}>React</li>
          <li style={{ background: '#eef2ff', color: '#3730a3', padding: '10px 22px', borderRadius: 16, fontWeight: 500 }}>TypeScript</li>
          <li style={{ background: '#eef2ff', color: '#3730a3', padding: '10px 22px', borderRadius: 16, fontWeight: 500 }}>Node.js</li>
          <li style={{ background: '#eef2ff', color: '#3730a3', padding: '10px 22px', borderRadius: 16, fontWeight: 500 }}>Prisma</li>
          <li style={{ background: '#eef2ff', color: '#3730a3', padding: '10px 22px', borderRadius: 16, fontWeight: 500 }}>Docker</li>
          <li style={{ background: '#eef2ff', color: '#3730a3', padding: '10px 22px', borderRadius: 16, fontWeight: 500 }}>AWS</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.7rem', fontWeight: 600, color: '#3730a3', marginBottom: 18 }}>Projects</h2>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
          {/* Example Project Card */}
          <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 4px 16px rgba(60,60,120,0.08)', padding: '1.5rem', minWidth: 260, maxWidth: 340 }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#3730a3', marginBottom: 8 }}>Personal Portfolio</h3>
            <p style={{ color: '#444', marginBottom: 12 }}>A modern portfolio site built with Next.js, React, and TypeScript, featuring a dashboard layout and contact form.</p>
            <a href="#" style={{ color: '#6366f1', textDecoration: 'underline', fontWeight: 500 }}>View Project</a>
          </div>
          <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 4px 16px rgba(60,60,120,0.08)', padding: '1.5rem', minWidth: 260, maxWidth: 340 }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#3730a3', marginBottom: 8 }}>E-commerce Platform</h3>
            <p style={{ color: '#444', marginBottom: 12 }}>A scalable e-commerce platform using React, Node.js, and AWS, with secure payments and admin dashboard.</p>
            <a href="#" style={{ color: '#6366f1', textDecoration: 'underline', fontWeight: 500 }}>View Project</a>
          </div>
          <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 4px 16px rgba(60,60,120,0.08)', padding: '1.5rem', minWidth: 260, maxWidth: 340 }}>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: '#3730a3', marginBottom: 8 }}>Internal Tools Suite</h3>
            <p style={{ color: '#444', marginBottom: 12 }}>A suite of productivity tools for teams, built with TypeScript, Prisma, and Docker for rapid deployment.</p>
            <a href="#" style={{ color: '#6366f1', textDecoration: 'underline', fontWeight: 500 }}>View Project</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem', background: '#fff', borderRadius: 24, boxShadow: '0 8px 32px rgba(60,60,120,0.10)', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.7rem', fontWeight: 600, color: '#3730a3', marginBottom: 18 }}>Contact</h2>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', maxWidth: 500 }} >
          <input type="text" placeholder="Your Name" required style={{ padding: '0.8rem', borderRadius: 8, border: '1px solid #c7d2fe', fontSize: '1rem' }} />
          <input type="email" placeholder="Your Email" required style={{ padding: '0.8rem', borderRadius: 8, border: '1px solid #c7d2fe', fontSize: '1rem' }} />
          <textarea placeholder="Your Message" required rows={5} style={{ padding: '0.8rem', borderRadius: 8, border: '1px solid #c7d2fe', fontSize: '1rem' }} />
          <button type="submit" style={{ background: '#3730a3', color: '#fff', padding: '0.9rem', borderRadius: 8, fontWeight: 600, fontSize: '1rem', border: 'none', cursor: 'pointer', boxShadow: '0 2px 8px rgba(60,60,120,0.08)' }}>Send Message</button>
        </form>
      </section>

      <footer style={{ textAlign: 'center', color: '#6366f1', padding: '1.5rem 0', fontSize: '1rem' }}>
        &copy; {new Date().getFullYear()} Shree. All rights reserved.
      </footer>
    </main>
  );
}
