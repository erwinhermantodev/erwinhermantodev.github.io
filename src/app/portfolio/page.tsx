"use client";

import React, { useState } from "react";
import Link from "next/link";
import projects from "../../data/projects.json";

// Date Parser Helper for Sorting
const parseDate = (dateStr: string) => {
  if (!dateStr) return new Date(0);
  const parts = dateStr.split("-");
  if (parts.length < 2) return new Date(0);
  const monthStr = parts[0].toLowerCase();
  const year = parseInt(parts[1], 10);
  const monthMap: Record<string, number> = {
    jan: 1, january: 1, januari: 1,
    feb: 2, february: 2, februari: 2,
    mar: 3, march: 3, maret: 3,
    apr: 4, april: 4,
    may: 5, mei: 5,
    jun: 6, june: 6, juni: 6,
    jul: 7, july: 7, juli: 7,
    aug: 8, august: 8, agustus: 8, agt: 8,
    sep: 9, september: 9,
    oct: 10, october: 10, oktober: 10, okt: 10,
    nov: 11, november: 11, nopember: 11,
    dec: 12, december: 12, desember: 12, des: 12
  };
  const month = monthMap[monthStr] !== undefined ? monthMap[monthStr] : 1;
  return new Date(year, month - 1, 1);
};

// Image Slider Component with onError fallback per slide
function ImageSlider({ images, projectName }: { images: string[]; projectName: string }) {
  const [index, setIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const activeImage = images[index];

  if (!images || images.length === 0) return null;

  const isFailed = failedImages[index];

  return (
    <div className="border-4 border-black aspect-video bg-zinc-100 flex items-center justify-center font-bold text-sm shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden group">
      {isFailed ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-50 border-4 border-black m-4 md:m-8 p-4 text-center">
          <span className="material-symbols-outlined !text-4xl mb-2 opacity-30">image</span>
          <span className="font-black text-xs uppercase tracking-wider block mb-1">Image Load Error</span>
          <span className="text-[10px] font-bold opacity-60">
            {activeImage?.split("/").pop()}
          </span>
        </div>
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={activeImage}
          alt={`${projectName} - Screenshot ${index + 1}`}
          className="w-full h-full object-contain select-none pointer-events-none animate-fade-in"
          onError={() => setFailedImages((prev) => ({ ...prev, [index]: true }))}
        />
      )}
      
      {/* Slider controls if there are multiple images */}
      {images.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-none border-2 border-black bg-white text-black hover:bg-black hover:text-white flex items-center justify-center font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer transition-colors z-10"
          >
            <span className="material-symbols-outlined !text-sm">chevron_left</span>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-none border-2 border-black bg-white text-black hover:bg-black hover:text-white flex items-center justify-center font-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer transition-colors z-10"
          >
            <span className="material-symbols-outlined !text-sm">chevron_right</span>
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 bg-white/95 border-2 border-black px-2.5 py-1 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => {
                  e.preventDefault();
                  setIndex(i);
                }}
                className={`w-2.5 h-2.5 rounded-full border border-black cursor-pointer transition-all ${
                  index === i ? "bg-black scale-110" : "bg-zinc-200 hover:bg-zinc-400"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function PortfolioPage() {
  const [sortField, setSortField] = useState<"date" | "id">("date");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  // Sorting Logic
  const sortedProjects = [...projects].sort((a, b) => {
    if (sortField === "date") {
      const dateA = parseDate(a.period.start);
      const dateB = parseDate(b.period.start);
      return sortOrder === "desc"
        ? dateB.getTime() - dateA.getTime()
        : dateA.getTime() - dateB.getTime();
    } else {
      const idA = parseInt(a.id, 10);
      const idB = parseInt(b.id, 10);
      return sortOrder === "desc" ? idB - idA : idA - idB;
    }
  });

  // Pagination Logic
  const totalPages = Math.ceil(sortedProjects.length / itemsPerPage);
  const activePage = Math.min(currentPage, totalPages || 1);
  const paginatedProjects = sortedProjects.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage
  );

  return (
    <main className="max-w-[1200px] mx-auto space-y-12 py-6">
      {/* Header Bar */}
      <header className="brutalist-card p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6 bg-white">
        <div>
          <h1 className="text-3xl md:text-4xl font-black tracking-tighter">
            IT PROJECT EXPERIENCE
          </h1>
          <p className="text-xs font-bold uppercase opacity-70 mt-1">
            Detailed Archive of System Architectures & Implementations
          </p>
        </div>
        <Link
          href="/"
          className="brutalist-card bg-black text-white hover:bg-white hover:text-black px-6 py-3 font-black transition-colors flex items-center justify-center gap-2 text-xs md:text-sm self-start md:self-auto"
        >
          <span className="material-symbols-outlined !text-lg">arrow_back</span>
          <span>RETURN TO RESUME</span>
        </Link>
      </header>

      {/* Control Bar: Sorting & Meta */}
      <div className="brutalist-card p-4 bg-zinc-50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-xs font-black uppercase">Sort Projects:</span>
          
          <button
            onClick={() => {
              if (sortField === "date") {
                setSortOrder((prev) => (prev === "desc" ? "asc" : "desc"));
              } else {
                setSortField("date");
                setSortOrder("desc");
              }
              setCurrentPage(1);
            }}
            className={`brutalist-card px-4 py-1.5 font-black text-xs transition-colors cursor-pointer ${
              sortField === "date"
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-zinc-100"
            } flex items-center gap-1`}
          >
            <span>Date</span>
            {sortField === "date" && (
              <span className="material-symbols-outlined !text-sm">
                {sortOrder === "desc" ? "arrow_downward" : "arrow_upward"}
              </span>
            )}
          </button>

          <button
            onClick={() => {
              if (sortField === "id") {
                setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
              } else {
                setSortField("id");
                setSortOrder("asc");
              }
              setCurrentPage(1);
            }}
            className={`brutalist-card px-4 py-1.5 font-black text-xs transition-colors cursor-pointer ${
              sortField === "id"
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-zinc-100"
            } flex items-center gap-1`}
          >
            <span>Project ID</span>
            {sortField === "id" && (
              <span className="material-symbols-outlined !text-sm">
                {sortOrder === "asc" ? "arrow_upward" : "arrow_downward"}
              </span>
            )}
          </button>
        </div>

        <div className="text-xs font-bold opacity-75">
          Showing {sortedProjects.length} Projects
        </div>
      </div>

      {/* Projects Stack */}
      <div className="space-y-12">
        {paginatedProjects.map((project) => (
          <section key={project.id} className="brutalist-card bg-white p-6 md:p-8 relative overflow-hidden animate-fade-in">
            
            {/* Top Grid: Name, Period & Basic Meta */}
            <div className="border-b-4 border-black pb-6 mb-6">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                <div>
                  <span className="sticker bg-black text-white text-[10px] py-1 px-3 mb-3">
                    PROJECT #{project.id}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-black mt-2">
                    {project.name}
                  </h2>
                </div>
                <div className="brutalist-card bg-zinc-100 p-4 min-w-[200px] text-center lg:text-right border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                  <span className="font-bold text-[10px] opacity-75 uppercase block mb-1">
                    PROJECT PERIOD
                  </span>
                  <span className="font-black text-xs uppercase">
                    {project.period.start} — {project.period.end}
                  </span>
                </div>
              </div>
            </div>

            {/* Main Content Grid: Description & Visual / Left side, Details / Right side */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: Description, Slider, Assignments (8 cols) */}
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <h3 className="font-black text-sm uppercase mb-2 flex items-center gap-1.5">
                    <span className="material-symbols-outlined !text-base">description</span>
                    <span>Project Description</span>
                  </h3>
                  <p className="text-xs md:text-sm font-bold leading-relaxed opacity-85">
                    {project.description}
                  </p>
                </div>

                {/* Screenshot Slider Frame */}
                {project.images && (
                  <ImageSlider images={project.images} projectName={project.name} />
                )}

                {project.assignments && project.assignments.length > 0 && (
                  <div>
                    <h3 className="font-black text-sm uppercase mb-3 flex items-center gap-1.5">
                      <span className="material-symbols-outlined !text-base">assignment</span>
                      <span>Personal Job Assignment</span>
                    </h3>
                    <ul className="grid grid-cols-1 gap-2">
                      {project.assignments.map((assignment, i) => (
                        <li key={i} className="flex gap-2.5 items-start text-xs font-bold">
                          <span className="font-black text-zinc-400 shrink-0">→</span>
                          <span>{assignment}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Right Column: Key Details, Team Size, Tech stack (4 cols) */}
              <div className="lg:col-span-4 space-y-6">
                
                {/* Meta details list */}
                <div className="border-4 border-black p-4 bg-zinc-50">
                  <h3 className="font-black text-sm uppercase mb-4 border-b-2 border-black pb-2 flex items-center gap-1.5">
                    <span className="material-symbols-outlined !text-base">info</span>
                    <span>Project Metadata</span>
                  </h3>
                  <div className="space-y-4 text-xs font-bold">
                    <div>
                      <span className="text-[9px] uppercase opacity-60 block">ROLE / POSITION</span>
                      <span className="font-black text-xs uppercase mt-0.5 block">{project.role}</span>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase opacity-60 block">COMPANY NAME</span>
                      <span className="font-black text-xs uppercase mt-0.5 block">{project.company}</span>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase opacity-60 block">CLIENT</span>
                      <span className="font-black text-xs uppercase mt-0.5 block">{project.client}</span>
                    </div>
                    {project.originalSheet && (
                      <div className="pt-3 border-t border-black/10">
                        <a
                          href={project.originalSheet}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="brutalist-card bg-black text-white hover:bg-white hover:text-black p-2.5 font-black text-[10px] uppercase text-center block transition-colors flex items-center justify-center gap-1.5"
                        >
                          <span className="material-symbols-outlined !text-sm">open_in_new</span>
                          <span>View Original Scan</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>

                {/* Team composition list */}
                {project.team && project.team.length > 0 && (
                  <div className="border-4 border-black p-4 bg-zinc-50">
                    <h3 className="font-black text-sm uppercase mb-4 border-b-2 border-black pb-2 flex items-center gap-1.5">
                      <span className="material-symbols-outlined !text-base">groups</span>
                      <span>Developer Team Size</span>
                    </h3>
                    <div className="grid grid-cols-2 gap-2 text-xs font-bold">
                      {project.team.map((member, i) => {
                        const parts = member.split(" ");
                        const count = parts[0];
                        const role = parts.slice(1).join(" ");
                        return (
                          <div key={i} className="border-2 border-black/10 p-2 text-center bg-white">
                            <span className="font-black text-base block leading-none">{count}</span>
                            <span className="text-[9px] opacity-70 uppercase block mt-1 leading-tight">{role}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Tech stack & Tools */}
                <div className="border-4 border-black p-4 bg-zinc-50">
                  <h3 className="font-black text-sm uppercase mb-4 border-b-2 border-black pb-2 flex items-center gap-1.5">
                    <span className="material-symbols-outlined !text-base">construction</span>
                    <span>System Stack & Tools</span>
                  </h3>
                  <div className="space-y-4 text-xs font-bold">
                    <div>
                      <span className="text-[9px] uppercase opacity-60 block mb-1">PROGRAMMING LANGUAGE</span>
                      <span className="sticker text-[10px] py-1 px-3 bg-white">{project.programmingLanguage}</span>
                    </div>
                    <div>
                      <span className="text-[9px] uppercase opacity-60 block mb-1">DATABASE</span>
                      <span className="sticker text-[10px] py-1 px-3 bg-white">{project.database}</span>
                    </div>
                    {project.tools && project.tools.length > 0 && (
                      <div>
                        <span className="text-[9px] uppercase opacity-60 block mb-2">DEVELOPMENT TOOLS</span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.tools.map((tool, i) => (
                            <span key={i} className="sticker text-[9px] py-0.5 px-2 bg-black text-white border-none shadow-none">
                              #{tool.toUpperCase()}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

              </div>

            </div>

          </section>
        ))}
      </div>

      {/* Pagination Footer */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-3 pt-6">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={activePage === 1}
            className="brutalist-card bg-white text-black disabled:opacity-40 disabled:pointer-events-none hover:bg-black hover:text-white px-4 py-2 font-black text-xs transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span className="material-symbols-outlined !text-sm">chevron_left</span>
            <span>PREV</span>
          </button>

          {Array.from({ length: totalPages }).map((_, idx) => {
            const pageNum = idx + 1;
            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`brutalist-card px-3.5 py-2 font-black text-xs transition-colors cursor-pointer ${
                  activePage === pageNum
                    ? "bg-black text-white shadow-none"
                    : "bg-white text-black hover:bg-zinc-100"
                }`}
              >
                {pageNum}
              </button>
            );
          })}

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={activePage === totalPages}
            className="brutalist-card bg-white text-black disabled:opacity-40 disabled:pointer-events-none hover:bg-black hover:text-white px-4 py-2 font-black text-xs transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span>NEXT</span>
            <span className="material-symbols-outlined !text-sm">chevron_right</span>
          </button>
        </div>
      )}
    </main>
  );
}

