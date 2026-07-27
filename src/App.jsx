import { useState } from 'react';
import './App.css';
import GradePdf from './assets/images/Grade.pdf';

// Import รูปภาพ
import ProfileImg from './assets/images/Khen01.png';
import ProjectApmImg from './assets/images/apm01.png';
import ProjectHlImg from './assets/images/hl01.png';
// แนะนำให้ Import รูปภาพ Certificate ที่นี่ เช่น
// import Cert01Img from './assets/images/cert01.jpg';

function App() {
  return (
    <div className="bg-gray-900 text-gray-100 font-sans antialiased selection:bg-blue-500 selection:text-white">

      {/* Navbar */}
      <nav className="fixed w-full z-20 top-0 start-0 border-b border-gray-800 bg-gray-900/90 backdrop-blur-sm">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">MyPortfolio</span>
          </a>
          <div className="hidden w-full md:block md:w-auto">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              <li><a href="#about" className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0">เกี่ยวกับผม</a></li>
              <li><a href="#skills" className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0">ทักษะ</a></li>
              <li><a href="#projects" className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0">ผลงาน</a></li>
              <li><a href="#certificates" className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0">ประกาศนียบัตร</a></li>
              <li><a href="#contact" className="block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0">ติดต่อ</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-900 min-h-screen flex items-center justify-center pt-20">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-8">
            <div className="block lg:hidden mb-6">
              <img src={ProfileImg} alt="Profile Image" className="mx-auto w-40 h-40 object-cover rounded-full shadow-lg" />
            </div>
            <h1 className="max-w-5xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">
              สวัสดีครับ ผม <span className="text-blue-500">นายนันกฤษ เตชะยอด</span>
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-400 lg:mb-8 md:text-lg lg:text-xl">
              นิสิตมหาวิทยาลัยพะเยา (University of Phayao) สาขาวิทยาการคอมพิวเตอร์
              ที่มีความสนใจด้าน Frontend Development และการพัฒนา Web Application
            </p>
            <a href="#projects" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-800 transition-all">
              ดูผลงานของผม
            </a>
            <a href={GradePdf} download="Transcript_Nantakrit.pdf" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white bg-gray-800 border border-gray-700 rounded-lg hover:bg-gray-700 focus:ring-4 focus:ring-gray-800 transition-all shadow-sm">
                ดาวน์โหลดผลการเรียน
              </a>
            <a href="#contact" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center border rounded-lg focus:ring-4 text-white border-gray-700 hover:bg-gray-700 focus:ring-gray-800 transition-all">
              ติดต่อผม
            </a>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-3 lg:flex justify-end">
            <img src={ProfileImg} alt="Profile Image" className="rounded-full w-80 h-80 object-cover border-4 border-gray-800 shadow-2xl" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-800 py-24">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white">เกี่ยวกับผม</h2>
            <p className="mb-8 font-light text-gray-400 lg:text-xl">นี่คือประวัติการศึกษาและเป้าหมายของผมครับ</p>
            <div className="space-y-4 text-left md:text-center">
              <div className="p-6 bg-gray-900 rounded-2xl border border-gray-700 hover:border-blue-500 transition-colors shadow-lg">
                <span className="text-3xl block mb-2">📝</span>
                <strong className="text-xl text-white">มัธยมศึกษาตอนปลาย สายศิลป์ - จีน</strong>
                <p className="text-gray-400 mt-1">โรงเรียนฟากกว๊านวิทยาคม (Fakkwanwittayakom School) | 2563 - 2565 <br /> เกรดเฉลี่ย: 2.50</p>
              </div>
              <div className="p-6 bg-gray-900 rounded-2xl border border-gray-700 hover:border-blue-500 transition-colors shadow-lg">
                <span className="text-3xl block mb-2">🎓</span>
                <strong className="text-xl text-white">ปริญญาตรี วิทยาการคอมพิวเตอร์</strong>
                <p className="text-gray-400 mt-1">มหาวิทยาลัยพะเยา | 2566 - ปัจจุบัน <br /> เกรดเฉลี่ย: 2.63</p>
              </div>
              <div className="p-6 bg-gray-900 rounded-2xl border border-gray-700 hover:border-blue-500 transition-colors shadow-lg">
                <span className="text-3xl block mb-2">🎯</span>
                <strong className="text-xl text-white">เป้าหมาย</strong>
                <p className="text-gray-400 mt-1">มุ่งมั่นที่จะเป็น Fullstack Developer โดยเริ่มจาก Frontend ที่เชี่ยวชาญ พร้อมเรียนรู้เทคโนโลยีใหม่ๆ อยู่เสมอ</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-900 py-24">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <h2 className="mb-12 text-3xl font-extrabold tracking-tight text-center text-white">ทักษะความสามารถ</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <SkillCard icon="html" name="HTML" />
            <SkillCard icon="css" name="CSS" />
            <SkillCard icon="js" name="JavaScript" />
            <SkillCard icon="react" name="React" />
            <SkillCard icon="nextjs" name="Next.js" />
            <SkillCard icon="tailwind" name="Tailwind CSS" />
            <SkillCard icon="git" name="Git" />
            <SkillCard icon="github" name="GitHub" />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-800 py-24">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <h2 className="mb-12 text-3xl font-extrabold tracking-tight text-center text-white">ผลงานของผม</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Project 1: Appointment Website */}
            <div className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
              <div className="p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
                  <h5 className="text-2xl font-bold text-white">Online-Appointment-Booking-System</h5>
                  <div className="flex gap-2">
                    <a href="https://appointment-website-nine.vercel.app" target="_blank" rel="noreferrer" className="text-sm bg-green-600 hover:bg-green-500 text-white px-3 py-1 rounded-md transition-colors flex items-center gap-1">
                      <span>🌐</span> Demo
                    </a>
                    <a href="https://github.com/Kittigon/Online-Appointment-Booking-System" target="_blank" rel="noreferrer" className="text-sm bg-blue-700 hover:bg-blue-600 text-white px-3 py-1 rounded-md transition-colors">
                      GitHub
                    </a>
                  </div>
                </div>
                <p className="mb-4 text-gray-400">ระบบจัดการนัดหมายออนไลน์สำหรับศูนย์ให้คำปรึกษา มหาวิทยาลัยพะเยา ลดความซับซ้อนของการนัดหมายผ่านแชท</p>

                <img src={ProjectApmImg} alt="Appointment Website" className="w-full h-auto rounded-lg mb-4 object-cover" />
                <div className="flex flex-wrap gap-2 mt-4">
                  <TechBadge name="Next.js" />
                  <TechBadge name="TypeScript" />
                  <TechBadge name="Supabase" />
                  <TechBadge name="Tailwind" />
                </div>

                <div className="mb-4 p-3 bg-gray-800/80 border border-gray-600 rounded-lg mt-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">🔐</span>
                    <span className="text-sm font-semibold text-blue-400">ทดลองใช้งาน (Demo User)</span>
                  </div>
                  <div className="text-sm text-gray-300 grid gap-1">
                    <p>Username: <span className="font-mono bg-gray-700 px-2 py-0.5 rounded text-white">User1@gmail.com</span></p>
                    <p>Password: <span className="font-mono bg-gray-700 px-2 py-0.5 rounded text-white">User1234</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2: Health Life */}
            <div className="bg-gray-900 border border-gray-700 rounded-xl overflow-hidden shadow-xl hover:shadow-blue-500/20 transition-all duration-300">
              <div className="p-6">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
                  <h5 className="text-2xl font-bold text-white">Health Life (Prototype)</h5>
                  <a href="https://www.figma.com/proto/OL04Z2QL1H3PWJamAit5e1/HL-App-Project-Prototype" target="_blank" rel="noreferrer" className="text-sm bg-purple-700 hover:bg-purple-600 text-white px-3 py-1 rounded-md transition-colors">
                    Figma
                  </a>
                </div>
                <p className="mb-4 text-gray-400">Prototype แอปพลิเคชันสุขภาพสำหรับโครงการ Startup HealthTech X2 ออกแบบ UX/UI ให้ใช้งานง่าย</p>
                <div className="flex justify-center bg-gray-800 rounded-lg p-4 mb-4">
                  <img src={ProjectHlImg} alt="Health Life" className="h-64 object-contain rounded-lg" />
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <TechBadge name="Figma" color="bg-purple-900 text-purple-100 border-purple-700" />
                  <TechBadge name="UX/UI Design" color="bg-purple-900 text-purple-100 border-purple-700" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="bg-gray-900 py-24">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
          <h2 className="mb-12 text-3xl font-extrabold tracking-tight text-center text-white">ประกาศนียบัตร</h2>
          <div className="flex flex-col space-y-8 max-w-4xl mx-auto">
            
            <CertificateCard 
              image="src/assets/images/ThaiLLM.jpg" 
              title="Thai Large Langugage Model (ThaiLLM)" 
              issuer="ศูนย์เทคโนโลยีสารสนเทศและคอมพิวเตอร์แห่งชาติ" 
              date="5 July 2025" 
            />
            
            <CertificateCard 
              image="src/assets/images/Aiforthai.jpg"
              title="Ai For Thai LLMs ทางการแพทย์ Certificate" 
              issuer="ศูนย์เทคโนโลยีสารสนเทศและคอมพิวเตอร์แห่งชาติ" 
              date="6 July 2025" 
            />
            
            <CertificateCard 
              image="src/assets/images/UX.jpg"
              title="Foundations of User Experience (UX) Design" 
              issuer="Coursera" 
              date="31 August 2024" 
            />

            <CertificateCard 
              image="src/assets/images/Javascript.png"
              title="JavaScript" 
              issuer="FreeCodeCamp" 
              date="29 January 2026" 
            />

            <CertificateCard 
              image="src/assets/images/CCNA.jpg"
              title="CCNA: Introduction to Network" 
              issuer="Cisco" 
              date="10 October 2025" 
            />
            
          </div>
        </div>
      </section>

      {/* Contact Section */}
      {/* ปรับสีพื้นหลังเป็น bg-gray-800 เพื่อให้สลับสีกับส่วน Certificates ที่เป็น bg-gray-900 */}
      <section id="contact" className="bg-gray-800 py-24">
        <div className="py-8 px-4 mx-auto max-w-screen-md text-center">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">ติดต่อผม</h2>
          <p className="mb-8 font-light text-gray-400 sm:text-xl">
            หากสนใจร่วมงานหรือต้องการสอบถามข้อมูลเพิ่มเติม <br />สามารถติดต่อได้ตามช่องทางด้านล่างนี้ได้เลยครับ
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="mailto:nantakrittechayod@gmail.com" className="px-8 py-3 border border-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center gap-2">
              <span>📧</span> Email Me
            </a>
            <a href="https://github.com/Nantakrit" target="_blank" rel="noreferrer" className="px-8 py-3 border border-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center gap-2">
              <span>🐙</span> GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <span className="text-sm text-gray-500">© 2026 <span className="text-blue-500">Nantakrit Techayod</span>. All Rights Reserved.</span>
        </div>
      </footer>

    </div>
  );
}

// Components
function SkillCard({ icon, name }) {
  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700 p-6 hover:border-blue-500 transition-all hover:transform hover:-translate-y-1 shadow-md flex flex-col items-center">
      <img src={`https://skillicons.dev/icons?i=${icon}`} alt={name} className="w-16 h-16 mb-4 drop-shadow-lg" />
      <p className="text-gray-300 font-medium">{name}</p>
    </div>
  );
}

function TechBadge({ name, color = "bg-blue-900 text-blue-100 border-blue-700" }) {
  return (
    <span className={`px-3 py-1 text-xs font-medium rounded-full border ${color}`}>
      {name}
    </span>
  );
}

function CertificateCard({ image, title, issuer, date, description }) {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-xl hover:shadow-blue-500/20 transition-all duration-300 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 bg-white flex justify-center items-center p-6 border-b md:border-b-0 md:border-r border-gray-700">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-auto max-h-80 object-contain drop-shadow-md" 
        />
      </div>
      <div className="p-6 flex-grow flex flex-col justify-between w-full md:w-1/2">
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-400 text-sm mb-4">สถาบัน: {issuer}</p>
          {description && (
            <p className="text-gray-300 text-sm leading-relaxed mb-4">{description}</p>
          )}
        </div>
        <div className="flex justify-end mt-4 pt-4 border-t border-gray-700">
          <p className="text-blue-400 text-sm font-medium">วันที่ได้รับ: {date}</p>
        </div>
      </div>
    </div>
  );
}

export default App;