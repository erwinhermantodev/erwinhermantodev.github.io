import Image from "next/image";

export default function Home() {
  const startDate = new Date(2015, 10); // November 2015 (Month index 10)
  const today = new Date();
  let years = today.getFullYear() - startDate.getFullYear();
  const monthDiff = today.getMonth() - startDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < startDate.getDate())) {
    years--;
  }
  const yearsOfExp = years;
  const currentYear = today.getFullYear();
  return (
    <>
      {/* Main Container with Grid Layout (Centering Nav + Left Pane + Right Pane on Desktop) */}
      <main className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 px-4 lg:px-8">
        
        {/* Navigation - Column 1 of the Centered Grid on Desktop */}
        <nav className="lg:col-span-1 hidden lg:flex flex-col items-center py-8 brutalist-card bg-white dark:bg-black text-black dark:text-white lg:sticky lg:top-6 lg:h-[calc(100vh-48px)]">
          <div className="mb-12">
            <div className="w-12 h-12 border-4 border-black dark:border-white bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center font-black text-xl shadow-[4px_4px_0px_0px_var(--neo-black)] text-black dark:text-white">
              EH
            </div>
          </div>
          <div className="flex flex-col gap-10 flex-1">
            <a className="hover:scale-110 transition-transform" href="#home">
              <span className="material-symbols-outlined">home</span>
            </a>
            <a className="hover:scale-110 transition-transform" href="#experience">
              <span className="material-symbols-outlined">work</span>
            </a>
            <a className="hover:scale-110 transition-transform" href="#projects">
              <span className="material-symbols-outlined">grid_view</span>
            </a>
            <a className="hover:scale-110 transition-transform" href="#skills">
              <span className="material-symbols-outlined">construction</span>
            </a>
            <a className="hover:scale-110 transition-transform" href="#contact">
              <span className="material-symbols-outlined">mail</span>
            </a>
          </div>
          <div className="sticker bg-black dark:bg-white text-white dark:text-black cursor-pointer">EN</div>
        </nav>

        {/* LEFT PANE - Column 2 of the Centered Grid on Desktop */}
        <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-6 lg:h-[calc(100vh-48px)] lg:overflow-y-auto hide-scrollbar">
          
          {/* Profile Card */}
          <div className="brutalist-card p-6 flex flex-col items-center text-center">
            <div className="relative mb-6">
              <div className="w-40 h-40 border-4 border-black dark:border-white shadow-[6px_6px_0px_0px_var(--neo-black)] bg-white dark:bg-zinc-900 overflow-hidden">
                <Image
                  alt="Erwin Hermanto"
                  className="w-full h-full object-cover contrast-125"
                  src="/pp.jpg"
                  width={160}
                  height={160}
                  unoptimized
                />
              </div>
            </div>
            <h2 className="text-2xl mb-1 font-black">ERWIN HERMANTO</h2>
            <p className="font-bold border-b-4 border-black dark:border-white pb-4 mb-6 w-full italic">
              Technical Lead | Senior Software Engineer | AI SaaS Builder
            </p>
            <div className="w-full space-y-2 text-left text-sm font-bold uppercase">
              <div className="flex justify-between border-b-2 border-black/10 dark:border-white/10">
                <span>LOCATION:</span>
                <span>BANDUNG, ID</span>
              </div>
              <div className="flex justify-between border-b-2 border-black/10 dark:border-white/10">
                <span>EXPERIENCE:</span>
                <span suppressHydrationWarning>{yearsOfExp}+ YEARS</span>
              </div>
              <div className="flex justify-between">
                <span>EDUCATION:</span>
                <span>B.SC CS</span>
              </div>
            </div>
            <div className="mt-8 flex justify-center gap-4 w-full">
              <a
                className="w-10 h-10 border-2 border-black dark:border-white flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                href="https://erwinhermanto.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined !text-xl">public</span>
              </a>
              <a
                className="w-10 h-10 border-2 border-black dark:border-white flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                href="mailto:erwinhermantodev@gmail.com"
              >
                <span className="material-symbols-outlined !text-xl">alternate_email</span>
              </a>
              <a
                className="w-10 h-10 border-2 border-black dark:border-white flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                href="https://www.linkedin.com/in/erwinhermantodev/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="material-symbols-outlined !text-xl">person</span>
              </a>
            </div>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="brutalist-card bg-white dark:bg-black text-black dark:text-white p-4 flex flex-col items-center justify-center text-center col-span-1">
              <span className="text-4xl font-black mb-1 tracking-tighter" suppressHydrationWarning>{yearsOfExp}+</span>
              <p className="text-[10px] font-black bg-black dark:bg-white text-white dark:text-black px-2 py-0.5 uppercase">
                YEARS EXP
              </p>
            </div>

            <div className="brutalist-card p-4 flex flex-col items-center justify-center text-center col-span-1">
              <span className="text-4xl font-black mb-1 tracking-tighter">10+</span>
              <p className="text-[10px] font-black bg-black dark:bg-white text-white dark:text-black px-2 py-0.5 uppercase">
                COMPANIES
              </p>
            </div>

            <div className="brutalist-card p-4 flex flex-col items-center justify-center text-center col-span-2">
              <span className="text-4xl font-black mb-1 tracking-tighter">150+</span>
              <p className="text-[10px] font-black bg-black dark:bg-white text-white dark:text-black px-2 py-0.5 uppercase">
                PROJECTS DELIVERED
              </p>
            </div>
          </div>

          {/* English Proficiency */}
          <div className="brutalist-card p-4 flex flex-col items-center justify-center text-center">
            <div className="relative w-16 h-16 mb-2.5 border-4 border-black dark:border-white flex items-center justify-center bg-white dark:bg-zinc-900 shadow-[4px_4px_0px_0px_var(--neo-black)]">
              <span className="text-lg font-black">80%</span>
            </div>
            <h3 className="text-sm mb-0.5 font-bold">ENGLISH</h3>
            <p className="text-[9px] font-black uppercase tracking-wider opacity-70">
              PROFESSIONAL WORKING
            </p>
          </div>

          {/* Availability bar */}
          <div className="brutalist-card p-3.5 flex items-center justify-between bg-white dark:bg-black text-black dark:text-white">
            <p className="text-[10px] font-bold uppercase" suppressHydrationWarning>© {currentYear} ERWIN_H</p>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 bg-white dark:bg-black border-2 border-black dark:border-white animate-pulse"></div>
              <span className="text-[9px] font-black uppercase tracking-widest">
                AVAILABLE
              </span>
            </div>
          </div>

        </aside>

        {/* RIGHT PANE - Column 3 of the Centered Grid on Desktop */}
        <div className="lg:col-span-7 space-y-12">
          
          {/* Hero Banner Section */}
          <section id="home" className="scroll-margin">
            <div className="brutalist-card bg-white dark:bg-black text-black dark:text-white p-8 md:p-12 relative overflow-hidden group">
              <div className="relative z-10">
                <div className="sticker mb-6">SQUAD LEADER • TECHNICAL LEADER</div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl mb-6 leading-[0.9] tracking-tighter">
                  BUILDING<br />
                  <span className="bg-black dark:bg-white text-white dark:text-black px-2 inline-block mt-2">
                    SCALABLE SYSTEMS!
                  </span>
                </h1>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="bg-zinc-100 dark:bg-zinc-900 border-4 border-black dark:border-white p-4 shadow-[6px_6px_0px_0px_var(--neo-black)]">
                    <span className="font-bold text-xs opacity-70">CURRENT_ROLE:</span>
                    <span className="font-black ml-2 text-xs">SQUAD LEADER</span>
                  </div>
                  <div className="bg-zinc-100 dark:bg-zinc-900 border-4 border-black dark:border-white p-4 shadow-[6px_6px_0px_0px_var(--neo-black)]">
                    <span className="font-bold text-xs opacity-70">STACK:</span>
                    <span className="font-black ml-2 text-xs">GO • RAILS • REACT</span>
                  </div>
                </div>
                <p className="text-sm font-bold leading-relaxed max-w-2xl opacity-90" suppressHydrationWarning>
                  Seasoned Software Engineer with {yearsOfExp}+ years building enterprise systems, leading teams, and architecting microservices across fintech, logistics, and hospitality sectors.
                </p>
              </div>
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none text-9xl font-black">
                GO
              </div>
            </div>
          </section>

          {/* Core Expertise & Tech Stack */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Core Expertise */}
            <div className="md:col-span-7 brutalist-card p-6 md:p-8">
              <div className="flex items-center justify-between mb-8 border-b-4 border-black dark:border-white pb-4">
                <h2 className="text-2xl font-black">CORE EXPERTISE</h2>
                <span className="material-symbols-outlined">bolt</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 border-4 border-black dark:border-white bg-white dark:bg-zinc-900 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors cursor-default">
                  <span className="material-symbols-outlined mb-2 block">code</span>
                  <h4 className="text-base mb-1 font-bold">BACKEND DEV</h4>
                  <p className="text-[10px] font-bold leading-tight opacity-75">
                    GOLANG, RAILS, PHP LARAVEL
                  </p>
                </div>
                <div className="p-4 border-4 border-black dark:border-white bg-white dark:bg-zinc-900 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors cursor-default">
                  <span className="material-symbols-outlined mb-2 block">api</span>
                  <h4 className="text-base mb-1 font-bold">API & MICROSERVICES</h4>
                  <p className="text-[10px] font-bold leading-tight opacity-75">
                    GRPC, REST API, API GATEWAY
                  </p>
                </div>
                <div className="p-4 border-4 border-black dark:border-white bg-white dark:bg-zinc-900 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors cursor-default">
                  <span className="material-symbols-outlined mb-2 block">groups</span>
                  <h4 className="text-base mb-1 font-bold">LEADERSHIP</h4>
                  <p className="text-[10px] font-bold leading-tight opacity-75">
                    TEAM MGMT, CODE REVIEW, MENTORING
                  </p>
                </div>
                <div className="p-4 border-4 border-black dark:border-white bg-white dark:bg-zinc-900 hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors cursor-default">
                  <span className="material-symbols-outlined mb-2 block">cloud</span>
                  <h4 className="text-base mb-1 font-bold">CLOUD & DEVOPS</h4>
                  <p className="text-[10px] font-bold leading-tight opacity-75">
                    GCP, DOCKER, CI/CD PIPELINES
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Tech Stack Visuals */}
            <div className="md:col-span-5 brutalist-card p-6 md:p-8" id="skills">
              <h3 className="text-lg mb-6 border-b-4 border-black dark:border-white inline-block font-black">
                TECH_STACK
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between font-bold text-xs mb-1">
                    <span>GOLANG</span>
                    <span>95%</span>
                  </div>
                  <div className="skill-bar-container">
                    <div className="skill-bar-fill" style={{ width: "95%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between font-bold text-xs mb-1">
                    <span>RUBY ON RAILS</span>
                    <span>85%</span>
                  </div>
                  <div className="skill-bar-container">
                    <div className="skill-bar-fill" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between font-bold text-xs mb-1">
                    <span>PHP/LARAVEL</span>
                    <span>90%</span>
                  </div>
                  <div className="skill-bar-container">
                    <div className="skill-bar-fill" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between font-bold text-xs mb-1">
                    <span>JAVASCRIPT</span>
                    <span>80%</span>
                  </div>
                  <div className="skill-bar-container">
                    <div className="skill-bar-fill" style={{ width: "80%" }}></div>
                  </div>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                <span className="sticker text-[9px] py-1 px-3">#DOCKER</span>
                <span className="sticker text-[9px] py-1 px-3">#GCP</span>
                <span className="sticker text-[9px] py-1 px-3">#GRPC</span>
              </div>
            </div>
          </section>

          {/* Work Experience Section */}
          <section id="experience" className="scroll-margin">
            <div className="brutalist-card bg-white dark:bg-black text-black dark:text-white p-6 md:p-8 mb-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl md:text-4xl font-black">WORK EXPERIENCE</h2>
                <span className="material-symbols-outlined !text-4xl md:!text-5xl">
                  work_history
                </span>
              </div>
              <p className="font-bold mt-2 text-xs md:text-sm">
                FROM STARTUPS TO ENTERPRISE: BUILDING SCALABLE SOLUTIONS
              </p>
            </div>

            <div className="space-y-6">
              {/* Current Role */}
              <div className="brutalist-card p-6 md:p-8 hover:bg-[#E5E5E5] dark:hover:bg-zinc-800 transition-colors border-l-8 border-l-black dark:border-l-white">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="sticker bg-black dark:bg-white text-white dark:text-black border-none shadow-none text-[10px] py-1 px-3">
                        CURRENT
                      </span>
                      <h3 className="text-xl md:text-2xl font-black">SQUAD LEADER</h3>
                    </div>
                    <p className="text-base md:text-lg font-bold">
                      PT. Elektronik Distribusi Otomatisasi Terkemuka
                    </p>
                    <p className="text-xs font-bold opacity-60">July 2025 - Present</p>
                  </div>
                  <span className="material-symbols-outlined !text-5xl opacity-20">groups</span>
                </div>
                <div className="border-t-2 border-black/10 dark:border-white/10 pt-4">
                  <ul className="text-xs space-y-2 font-medium">
                    <li className="flex gap-2">
                      <span className="font-black opacity-70">→</span>
                      <span>Collaborate closely with PM on product scope and technical requirements</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-black opacity-70">→</span>
                      <span>Lead code review processes ensuring high-quality deliverables</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-black opacity-70">→</span>
                      <span>Mentor engineers on best practices to enhance code quality</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-black opacity-70">→</span>
                      <span>Manage task assignments and ensure 100% engineer utilization via Jira</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-black opacity-70">→</span>
                      <span>Regular sync with management on project progress and deployment</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Technical Leader */}
              <div className="brutalist-card p-6 md:p-8 hover:bg-[#E5E5E5] dark:hover:bg-zinc-800 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="sticker bg-zinc-200 dark:bg-zinc-700 text-[10px] py-1 px-3">
                        2024-2025
                      </span>
                      <h3 className="text-xl md:text-2xl font-black">TECHNICAL LEADER</h3>
                    </div>
                    <p className="text-base md:text-lg font-bold">PT Pos Finansial Indonesia</p>
                    <p className="text-xs font-bold opacity-60">
                      April 2024 - July 2025 • 1 year 4 months
                    </p>
                  </div>
                  <span className="material-symbols-outlined !text-5xl opacity-20">engineering</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="sticker project-tech">GOLANG</span>
                  <span className="sticker project-tech">GRPC</span>
                  <span className="sticker project-tech">REST API</span>
                  <span className="sticker project-tech">GCP</span>
                  <span className="sticker project-tech">CI/CD</span>
                </div>
                <div className="border-t-2 border-black/10 dark:border-white/10 pt-4">
                  <ul className="text-xs space-y-2 font-medium">
                    <li className="flex gap-2">
                      <span className="font-black">→</span>
                      <span>Built Golang API Gateway from scratch for fintech services</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-black">→</span>
                      <span>Architected microservices with GRPC and REST API</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-black">→</span>
                      <span>Established CI/CD pipelines for automated deployment</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-black">→</span>
                      <span>Integrated and configured Google Cloud Platform infrastructure</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-black">→</span>
                      <span>Developed Electronic Official Memo system with Go</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Senior Fullstack Engineer */}
              <div className="brutalist-card p-6 md:p-8 hover:bg-[#E5E5E5] dark:hover:bg-zinc-800 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="sticker bg-zinc-200 dark:bg-zinc-700 text-[10px] py-1 px-3">
                        2022-2024
                      </span>
                      <h3 className="text-xl md:text-2xl font-black">SENIOR FULLSTACK ENGINEER</h3>
                    </div>
                    <p className="text-base md:text-lg font-bold">Bobobox</p>
                    <p className="text-xs font-bold opacity-60">
                      December 2022 - February 2024 • 1 year 3 months
                    </p>
                  </div>
                  <span className="material-symbols-outlined !text-5xl opacity-20">hotel</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="sticker project-tech">GOLANG</span>
                  <span className="sticker project-tech">RUBY ON RAILS</span>
                  <span className="sticker project-tech">NEXT.JS</span>
                  <span className="sticker project-tech">DOCKER</span>
                  <span className="sticker project-tech">TAURI</span>
                </div>
                <div className="border-t-2 border-black/10 dark:border-white/10 pt-4">
                  <ul className="text-xs space-y-2 font-medium">
                    <li className="flex gap-2">
                      <span className="font-black">→</span>
                      <span>Developed User Management System with Ruby on Rails</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-black">→</span>
                      <span>Built APIs for Frontdesk Management using Go and Rails</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-black">→</span>
                      <span>Containerized applications with Docker for deployment</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-black">→</span>
                      <span>Created desktop applications with Tauri and React.js</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-black">→</span>
                      <span>Developed Property and Device Management APIs</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-black">→</span>
                      <span>Built Device Management UI with Next.js integration</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Backend Developer - SICEPAT */}
              <div className="brutalist-card p-6 md:p-8 hover:bg-[#E5E5E5] dark:hover:bg-zinc-800 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="sticker bg-zinc-200 dark:bg-zinc-700 text-[10px] py-1 px-3">
                        2021-2022
                      </span>
                      <h3 className="text-xl md:text-2xl font-black">BACKEND DEVELOPER</h3>
                    </div>
                    <p className="text-base md:text-lg font-bold">SICEPAT Ekspres Indonesia</p>
                    <p className="text-xs font-bold opacity-60">
                      October 2021 - December 2022 • 1 year 3 months
                    </p>
                  </div>
                  <span className="material-symbols-outlined !text-5xl opacity-20">
                    local_shipping
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="sticker project-tech">GOLANG</span>
                  <span className="sticker project-tech">NODE.JS</span>
                  <span className="sticker project-tech">DOCKER</span>
                </div>
                <div className="border-t-2 border-black/10 dark:border-white/10 pt-4">
                  <ul className="text-xs space-y-2 font-medium">
                    <li className="flex gap-2">
                      <span className="font-black">→</span>
                      <span>Built and migrated Sort Machine API with Golang</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-black">→</span>
                      <span>Migrated services from Node.js to Golang for better performance</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-black">→</span>
                      <span>Containerized applications with Docker</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Backend Developer - Qasir.id */}
              <div className="brutalist-card p-6 md:p-8 hover:bg-[#E5E5E5] dark:hover:bg-zinc-800 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="sticker bg-zinc-200 dark:bg-zinc-700 text-[10px] py-1 px-3">
                        2018-2021
                      </span>
                      <h3 className="text-xl md:text-2xl font-black">BACKEND DEVELOPER</h3>
                    </div>
                    <p className="text-base md:text-lg font-bold">Qasir.id</p>
                    <p className="text-xs font-bold opacity-60">
                      December 2018 - April 2021 • 2 years 5 months
                    </p>
                  </div>
                  <span className="material-symbols-outlined !text-5xl opacity-20">
                    point_of_sale
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="sticker project-tech">GOLANG</span>
                  <span className="sticker project-tech">LARAVEL</span>
                  <span className="sticker project-tech">REACT.JS</span>
                  <span className="sticker project-tech">MONGODB</span>
                  <span className="sticker project-tech">ELASTICSEARCH</span>
                </div>
                <div className="border-t-2 border-black/10 dark:border-white/10 pt-4">
                  <ul className="text-xs space-y-2 font-medium">
                    <li className="flex gap-2">
                      <span className="font-black">→</span>
                      <span>Developed APIs with Golang and Laravel for POS system</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-black">→</span>
                      <span>Integrated QRIS payment gateway with Golang</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-black">→</span>
                      <span>Implemented Elasticsearch for premium search features</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-black">→</span>
                      <span>Integrated with online food delivery platforms</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-black">→</span>
                      <span>Implemented Hexagonal Architecture pattern in Golang</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="font-black">→</span>
                      <span>Containerized applications with Docker</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Early Career Timeline */}
            <div className="brutalist-card p-6 md:p-8 bg-white dark:bg-zinc-900 text-black dark:text-zinc-100 mt-6">
              <h3 className="text-xl md:text-2xl mb-6 font-black">EARLY CAREER (2015-2018)</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="border-2 border-black/20 dark:border-white/20 p-4">
                  <p className="text-xs font-black mb-1 opacity-70">2017-2018</p>
                  <h4 className="text-base mb-1 font-bold">MEDIAWAVE INTERACTIVE</h4>
                  <p className="text-[10px] opacity-80">Backend Developer • Laravel API</p>
                </div>
                <div className="border-2 border-black/20 dark:border-white/20 p-4">
                  <p className="text-xs font-black mb-1 opacity-70">2015-2016</p>
                  <h4 className="text-base mb-1 font-bold">PT AXELINSIGHTS</h4>
                  <p className="text-[10px] opacity-80">Web Developer • Gov Projects</p>
                </div>
                <div className="border-2 border-black/20 dark:border-white/20 p-4">
                  <p className="text-xs font-black mb-1 opacity-70">2015</p>
                  <h4 className="text-base mb-1 font-bold">PT CAKRA SYNTESIS</h4>
                  <p className="text-[10px] opacity-80">Web Developer • Banking Systems</p>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Projects Section */}
          <section id="projects" className="scroll-margin">
            <div className="brutalist-card bg-white dark:bg-black text-black dark:text-white p-6 md:p-8 mb-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl md:text-4xl font-black">FEATURED PROJECTS</h2>
                <span className="material-symbols-outlined !text-4xl md:!text-5xl">
                  folder_open
                </span>
              </div>
              <p className="font-bold mt-2 text-xs md:text-sm">
                GOVERNMENT TO FINTECH: DIVERSE PORTFOLIO
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* API Gateway */}
              <div className="brutalist-card p-6 project-card hover:bg-[#E5E5E5] dark:hover:bg-zinc-800 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <span className="material-symbols-outlined !text-3xl">hub</span>
                  <span className="sticker text-[9px] py-1 px-3">2024</span>
                </div>
                <h3 className="text-lg font-black mb-1">GOLANG API GATEWAY</h3>
                <p className="text-[11px] font-bold mb-4 opacity-75">
                  Built from scratch for PT Pos Finansial Indonesia fintech services
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="sticker project-tech">Golang</span>
                  <span className="sticker project-tech">GRPC</span>
                  <span className="sticker project-tech">GCP</span>
                </div>
                <div className="border-t-2 border-black/10 dark:border-white/10 pt-4">
                  <p className="text-[10px] font-black uppercase">Role: Technical Leader</p>
                  <p className="text-[10px] mt-2 opacity-80">
                    • Microservices architecture<br />
                    • CI/CD implementation<br />
                    • Cloud infrastructure
                  </p>
                </div>
              </div>

              {/* Hospitality Management */}
              <div className="brutalist-card p-6 project-card hover:bg-[#E5E5E5] dark:hover:bg-zinc-800 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <span className="material-symbols-outlined !text-3xl">apartment</span>
                  <span className="sticker text-[9px] py-1 px-3">2023</span>
                </div>
                <h3 className="text-lg font-black mb-1">PROPERTY MANAGEMENT SYSTEM</h3>
                <p className="text-[11px] font-bold mb-4 opacity-75">
                  Complete management suite for Bobobox hospitality platform
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="sticker project-tech">Rails</span>
                  <span className="sticker project-tech">Go</span>
                  <span className="sticker project-tech">Next.js</span>
                </div>
                <div className="border-t-2 border-black/10 dark:border-white/10 pt-4">
                  <p className="text-[10px] font-black uppercase">Role: Senior Fullstack Engineer</p>
                  <p className="text-[10px] mt-2 opacity-80">
                    • User management<br />
                    • Device control<br />
                    • Desktop apps
                  </p>
                </div>
              </div>

              {/* Logistics System */}
              <div className="brutalist-card p-6 project-card hover:bg-[#E5E5E5] dark:hover:bg-zinc-800 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <span className="material-symbols-outlined !text-3xl">inventory_2</span>
                  <span className="sticker text-[9px] py-1 px-3">2022</span>
                </div>
                <h3 className="text-lg font-black mb-1">SORT MACHINE API</h3>
                <p className="text-[11px] font-bold mb-4 opacity-75">
                  High-performance logistics sorting system for SICEPAT
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="sticker project-tech">Golang</span>
                  <span className="sticker project-tech">Docker</span>
                </div>
                <div className="border-t-2 border-black/10 dark:border-white/10 pt-4">
                  <p className="text-[10px] font-black uppercase">Role: Backend Developer</p>
                  <p className="text-[10px] mt-2 opacity-80">
                    • API migration<br />
                    • Performance optimization<br />
                    • Containerization
                  </p>
                </div>
              </div>

              {/* POS System */}
              <div className="brutalist-card p-6 project-card hover:bg-[#E5E5E5] dark:hover:bg-zinc-800 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <span className="material-symbols-outlined !text-3xl">store</span>
                  <span className="sticker text-[9px] py-1 px-3">2020</span>
                </div>
                <h3 className="text-lg font-black mb-1">QASIR POS PLATFORM</h3>
                <p className="text-[11px] font-bold mb-4 opacity-75">
                  Point of sale system with payment integration and food delivery
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="sticker project-tech">Golang</span>
                  <span className="sticker project-tech">Laravel</span>
                  <span className="sticker project-tech">Elasticsearch</span>
                </div>
                <div className="border-t-2 border-black/10 dark:border-white/10 pt-4">
                  <p className="text-[10px] font-black uppercase">Role: Backend Developer</p>
                  <p className="text-[10px] mt-2 opacity-80">
                    • QRIS integration<br />
                    • Search optimization<br />
                    • Hexagonal architecture
                  </p>
                </div>
              </div>

              {/* Tourism Platform */}
              <div className="brutalist-card p-6 project-card hover:bg-[#E5E5E5] dark:hover:bg-zinc-800 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <span className="material-symbols-outlined !text-3xl">flight</span>
                  <span className="sticker text-[9px] py-1 px-3">2018</span>
                </div>
                <h3 className="text-lg font-black mb-1">TOURISMWAVE</h3>
                <p className="text-[11px] font-bold mb-4 opacity-75">
                  Travel booking platform for agents, flights & hotels
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="sticker project-tech">Laravel 5.4</span>
                  <span className="sticker project-tech">API</span>
                </div>
                <div className="border-t-2 border-black/10 dark:border-white/10 pt-4">
                  <p className="text-[10px] font-black uppercase">Role: Backend Developer</p>
                  <p className="text-[10px] mt-2 opacity-80">
                    • RESTful API<br />
                    • Integration<br />
                    • Dashboard
                  </p>
                </div>
              </div>

              {/* Broadcasting License */}
              <div className="brutalist-card p-6 project-card hover:bg-[#E5E5E5] dark:hover:bg-zinc-800 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <span className="material-symbols-outlined !text-3xl">broadcast_on_home</span>
                  <span className="sticker text-[9px] py-1 px-3">2016</span>
                </div>
                <h3 className="text-lg font-black mb-1">BROADCASTING LICENSE</h3>
                <p className="text-[11px] font-bold mb-4 opacity-75">
                  Management system for TV & Radio licensing - KEMKOMINFO
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="sticker project-tech">Laravel 5.3</span>
                  <span className="sticker project-tech">MySQL</span>
                </div>
                <div className="border-t-2 border-black/10 dark:border-white/10 pt-4">
                  <p className="text-[10px] font-black uppercase">Role: Web Developer</p>
                  <p className="text-[10px] mt-2 opacity-80">
                    • Business analysis<br />
                    • Database design<br />
                    • License flow
                  </p>
                </div>
              </div>
            </div>

            {/* Technology Summary List */}
            <div className="brutalist-card p-6 md:p-8 bg-white dark:bg-zinc-900 text-black dark:text-zinc-100 mt-6">
              <h3 className="text-xl mb-6 font-black text-center md:text-left">
                TECHNOLOGY EXPERTISE SUMMARY
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                <div className="border-2 border-black/20 dark:border-white/20 p-4 text-center">
                  <p className="font-black text-2xl mb-1">GO</p>
                  <p className="text-[9px] uppercase opacity-75">Primary Language</p>
                </div>
                <div className="border-2 border-black/20 dark:border-white/20 p-4 text-center">
                  <p className="font-black text-2xl mb-1">RAILS</p>
                  <p className="text-[9px] uppercase opacity-75">Ruby Framework</p>
                </div>
                <div className="border-2 border-black/20 dark:border-white/20 p-4 text-center">
                  <p className="font-black text-2xl mb-1">JS</p>
                  <p className="text-[9px] uppercase opacity-75">React • Next.js</p>
                </div>
                <div className="border-2 border-black/20 dark:border-white/20 p-4 text-center">
                  <p className="font-black text-2xl mb-1">DB</p>
                  <p className="text-[9px] uppercase opacity-75">SQL • NoSQL</p>
                </div>
                <div className="border-2 border-black/20 dark:border-white/20 p-4 text-center">
                  <p className="font-black text-2xl mb-1">OPS</p>
                  <p className="text-[9px] uppercase opacity-75">Docker • GCP</p>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Skills Detailed Grid */}
          <section className="scroll-margin">
            <div className="brutalist-card p-6 md:p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-black">TECHNICAL SKILLS</h2>
                <span className="material-symbols-outlined !text-4xl">psychology</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {/* Languages */}
                <div className="border-4 border-black dark:border-white p-4 md:p-6 bg-white dark:bg-zinc-900">
                  <h4 className="text-base mb-4 font-black border-b-2 border-black dark:border-white pb-2">
                    LANGUAGES
                  </h4>
                  <div className="space-y-2 text-xs font-bold">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-zinc-900 dark:bg-zinc-100 border border-black dark:border-white shrink-0"></span>
                      <span>Golang (Expert)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-zinc-500 border border-black dark:border-white shrink-0"></span>
                      <span>Ruby on Rails (Advanced)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-zinc-900 dark:bg-zinc-100 border border-black dark:border-white shrink-0"></span>
                      <span>PHP/Laravel (Expert)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-zinc-500 border border-black dark:border-white shrink-0"></span>
                      <span>JavaScript (Advanced)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-zinc-300 dark:bg-zinc-700 border border-black dark:border-white shrink-0"></span>
                      <span>Python (Intermediate)</span>
                    </div>
                  </div>
                </div>

                {/* Frameworks */}
                <div className="border-4 border-black dark:border-white p-4 md:p-6 bg-white dark:bg-zinc-900">
                  <h4 className="text-base mb-4 font-black border-b-2 border-black dark:border-white pb-2">
                    FRAMEWORKS
                  </h4>
                  <div className="space-y-2 text-xs font-bold">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-zinc-900 dark:bg-zinc-100 border border-black dark:border-white shrink-0"></span>
                      <span>GRPC & REST API</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-zinc-900 dark:bg-zinc-100 border border-black dark:border-white shrink-0"></span>
                      <span>React.js & Next.js</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-zinc-900 dark:bg-zinc-100 border border-black dark:border-white shrink-0"></span>
                      <span>Express.js</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-zinc-500 border border-black dark:border-white shrink-0"></span>
                      <span>Tauri (Desktop Apps)</span>
                    </div>
                  </div>
                </div>

                {/* DevOps & Cloud */}
                <div className="border-4 border-black dark:border-white p-4 md:p-6 bg-white dark:bg-zinc-900">
                  <h4 className="text-base mb-4 font-black border-b-2 border-black dark:border-white pb-2">
                    DEVOPS & CLOUD
                  </h4>
                  <div className="space-y-2 text-xs font-bold">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-zinc-900 dark:bg-zinc-100 border border-black dark:border-white shrink-0"></span>
                      <span>Docker Containerization</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-zinc-900 dark:bg-zinc-100 border border-black dark:border-white shrink-0"></span>
                      <span>CI/CD Pipelines</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-zinc-900 dark:bg-zinc-100 border border-black dark:border-white shrink-0"></span>
                      <span>Google Cloud Platform</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-zinc-500 border border-black dark:border-white shrink-0"></span>
                      <span>Message Queue Systems</span>
                    </div>
                  </div>
                </div>

                {/* Databases */}
                <div className="border-4 border-black dark:border-white p-4 md:p-6 bg-white dark:bg-zinc-900">
                  <h4 className="text-base mb-4 font-black border-b-2 border-black dark:border-white pb-2">
                    DATABASES
                  </h4>
                  <div className="space-y-2 text-xs font-bold">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-zinc-900 dark:bg-zinc-100 border border-black dark:border-white shrink-0"></span>
                      <span>MySQL & PostgreSQL</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-zinc-900 dark:bg-zinc-100 border border-black dark:border-white shrink-0"></span>
                      <span>MongoDB (NoSQL)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-zinc-500 border border-black dark:border-white shrink-0"></span>
                      <span>Elasticsearch</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-zinc-500 border border-black dark:border-white shrink-0"></span>
                      <span>Database Design</span>
                    </div>
                  </div>
                </div>

                {/* Leadership */}
                <div className="border-4 border-black dark:border-white p-4 md:p-6 bg-white dark:bg-zinc-900">
                  <h4 className="text-base mb-4 font-black border-b-2 border-black dark:border-white pb-2">
                    LEADERSHIP
                  </h4>
                  <div className="space-y-2 text-xs font-bold">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-zinc-900 dark:bg-zinc-100 border border-black dark:border-white shrink-0"></span>
                      <span>Team Management</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-zinc-900 dark:bg-zinc-100 border border-black dark:border-white shrink-0"></span>
                      <span>Code Review</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-zinc-900 dark:bg-zinc-100 border border-black dark:border-white shrink-0"></span>
                      <span>Mentoring</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-zinc-900 dark:bg-zinc-100 border border-black dark:border-white shrink-0"></span>
                      <span>Agile/Scrum</span>
                    </div>
                  </div>
                </div>

                {/* Architecture */}
                <div className="border-4 border-black dark:border-white p-4 md:p-6 bg-white dark:bg-zinc-900">
                  <h4 className="text-base mb-4 font-black border-b-2 border-black dark:border-white pb-2">
                    ARCHITECTURE
                  </h4>
                  <div className="space-y-2 text-xs font-bold">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-zinc-900 dark:bg-zinc-100 border border-black dark:border-white shrink-0"></span>
                      <span>Microservices</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-zinc-900 dark:bg-zinc-100 border border-black dark:border-white shrink-0"></span>
                      <span>Hexagonal Architecture</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-zinc-900 dark:bg-zinc-100 border border-black dark:border-white shrink-0"></span>
                      <span>API Design</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-zinc-500 border border-black dark:border-white shrink-0"></span>
                      <span>System Integration</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Education & Achievements */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Education */}
            <div className="brutalist-card p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined !text-4xl">school</span>
                <div>
                  <h3 className="text-xl md:text-2xl font-black">EDUCATION</h3>
                  <p className="text-xs opacity-75">Academic Foundation</p>
                </div>
              </div>
              <div className="border-4 border-black dark:border-white p-4 md:p-6 bg-white dark:bg-zinc-900">
                <h4 className="text-base font-black mb-1">
                  Bachelor of Science in Computer Science
                </h4>
                <p className="text-xs font-bold mb-0.5">STMIK Bandung</p>
                <p className="text-[10px] opacity-60">Graduated: 2015</p>
                <div className="mt-4">
                  <span className="sticker bg-zinc-100 dark:bg-zinc-800 text-[10px] py-1 px-3">
                    Technopreneur Student 2015
                  </span>
                </div>
              </div>
            </div>

            {/* Achievements */}
            <div className="brutalist-card p-6 md:p-8">
              <div className="flex items-center gap-4 mb-6">
                <span className="material-symbols-outlined !text-4xl">verified</span>
                <div>
                  <h3 className="text-xl md:text-2xl font-black">ACHIEVEMENTS</h3>
                  <p className="text-xs opacity-75">Leadership & Community</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="border-4 border-black dark:border-white p-4 bg-white dark:bg-zinc-900">
                  <p className="text-xs font-black mb-0.5">Leader - Executive Board</p>
                  <p className="text-[10px] opacity-80">
                    STMIK Bandung Student Organization
                  </p>
                  <p className="text-[9px] opacity-60 mt-1">2014 - 2015</p>
                </div>
                <div className="border-4 border-black dark:border-white p-4 bg-white dark:bg-zinc-900">
                  <p className="text-xs font-black mb-0.5">Member - Executive Board</p>
                  <p className="text-[10px] opacity-80">
                    STMIK Bandung Student Organization
                  </p>
                  <p className="text-[9px] opacity-60 mt-1">2013 - 2014</p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="scroll-margin">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="brutalist-card bg-white dark:bg-black text-black dark:text-white p-4 text-center flex flex-col items-center justify-center">
                <span className="material-symbols-outlined !text-3xl mb-1">
                  currency_exchange
                </span>
                <h4 className="text-[10px] font-black">FINTECH</h4>
                <p className="text-[9px] opacity-80 mt-1">PT Pos Fin Indonesia</p>
              </div>
              <div className="brutalist-card bg-white dark:bg-black text-black dark:text-white p-4 text-center flex flex-col items-center justify-center">
                <span className="material-symbols-outlined !text-3xl mb-1">hotel</span>
                <h4 className="text-[10px] font-black">HOSPITALITY</h4>
                <p className="text-[9px] opacity-80 mt-1">Bobobox</p>
              </div>
              <div className="brutalist-card bg-white dark:bg-black text-black dark:text-white p-4 text-center flex flex-col items-center justify-center">
                <span className="material-symbols-outlined !text-3xl mb-1">
                  local_shipping
                </span>
                <h4 className="text-[10px] font-black">LOGISTICS</h4>
                <p className="text-[9px] opacity-80 mt-1">SICEPAT Ekspres</p>
              </div>
              <div className="brutalist-card bg-white dark:bg-black text-black dark:text-white p-4 text-center flex flex-col items-center justify-center">
                <span className="material-symbols-outlined !text-3xl mb-1">
                  account_balance
                </span>
                <h4 className="text-[10px] font-black">GOVERNMENT</h4>
                <p className="text-[9px] opacity-80 mt-1">Ministry Projects</p>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="brutalist-card bg-white dark:bg-zinc-900 text-black dark:text-white p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-5xl font-black mb-4">LET&apos;S BUILD TOGETHER</h2>
              <p className="text-base md:text-lg font-bold mb-8">
                READY TO LEAD YOUR NEXT PROJECT
              </p>
              <div className="flex flex-wrap gap-4 justify-center mb-8">
                <a
                  href="mailto:erwinhermantodev@gmail.com"
                  className="brutalist-card bg-black dark:bg-zinc-800 text-white dark:text-white px-6 py-3 font-black hover:transform hover:translate-x-0.5 hover:translate-y-0.5 flex items-center gap-2 text-xs md:text-sm"
                >
                  <span className="material-symbols-outlined !text-lg">mail</span>
                  <span>EMAIL ME</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/erwinhermantodev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-4 border-black dark:border-white text-black dark:text-white px-6 py-3 font-black hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors flex items-center gap-2 text-xs md:text-sm"
                >
                  <span className="material-symbols-outlined !text-lg">person</span>
                  <span>LINKEDIN</span>
                </a>
                <a
                  href="https://erwinhermanto.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-4 border-black dark:border-white text-black dark:text-white px-6 py-3 font-black hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors flex items-center gap-2 text-xs md:text-sm"
                >
                  <span className="material-symbols-outlined !text-lg">public</span>
                  <span>PORTFOLIO</span>
                </a>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="sticker text-[9px] py-1 px-3">#GOLANG</span>
                <span className="sticker text-[9px] py-1 px-3">#RAILS</span>
                <span className="sticker text-[9px] py-1 px-3">#LEADERSHIP</span>
                <span className="sticker text-[9px] py-1 px-3">#MICROSERVICES</span>
                <span className="sticker text-[9px] py-1 px-3">#DEVOPS</span>
              </div>
            </div>
          </section>

          {/* Footer Section */}
          <footer className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="brutalist-card p-6">
              <h4 className="text-base mb-2 font-black">EXPERTISE</h4>
              <p className="text-[11px] leading-relaxed opacity-85" suppressHydrationWarning>
                Squad Leader & Technical Leader with {yearsOfExp}+ years architecting scalable backend systems, leading engineering teams, and delivering enterprise solutions across multiple industries.
              </p>
            </div>
            <div className="brutalist-card p-6">
              <h4 className="text-base mb-2 font-black">APPROACH</h4>
              <p className="text-[11px] leading-relaxed opacity-85">
                Microservices architecture, clean code principles, team mentorship, and business-focused engineering from analysis to production deployment.
              </p>
            </div>
            <div className="brutalist-card p-6 bg-white dark:bg-zinc-900 text-black dark:text-zinc-100 flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase mb-1" suppressHydrationWarning>
                  © {currentYear} ERWIN HERMANTO
                </p>
                <p className="text-[11px] opacity-80">erwinhermantodev@gmail.com</p>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <div className="w-2.5 h-2.5 bg-white dark:bg-black border-2 border-black dark:border-zinc-900 animate-pulse"></div>
                <span className="text-[9px] font-black uppercase">
                  OPEN TO OPPORTUNITIES
                </span>
              </div>
            </div>
          </footer>

        </div>
      </main>

      {/* Mobile Bottom Navigation Bar (Hidden on Desktop) */}
      <div className="fixed bottom-4 left-4 right-4 h-20 brutalist-card bg-white dark:bg-black text-black dark:text-white flex items-center justify-around lg:hidden z-50">
        <a href="#home">
          <span className="material-symbols-outlined text-black dark:text-white">home</span>
        </a>
        <a href="#experience">
          <span className="material-symbols-outlined text-black dark:text-white">work</span>
        </a>
        <a href="#projects">
          <span className="material-symbols-outlined text-black dark:text-white">grid_view</span>
        </a>
        <a href="#skills">
          <span className="material-symbols-outlined text-black dark:text-white">construction</span>
        </a>
        <a href="#contact">
          <span className="material-symbols-outlined text-black dark:text-white">mail</span>
        </a>
      </div>
    </>
  );
}
