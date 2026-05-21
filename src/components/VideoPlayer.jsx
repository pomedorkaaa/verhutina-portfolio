import React from "react";

/**
 * Компонент интерактивного видеоплеера с поддержкой включения/выключения звука.
 * Логика клика на видео и кнопку звука обрабатывается в main.js (initVideoPlayers).
 *
 * @param {Object} props
 * @param {string} props.src - URL видеофайла
 * @param {string} [props.className] - Дополнительные CSS классы для тега video
 */
export default function VideoPlayer({ src, className = "" }) {
  return (
    <div className="relative w-full h-full group video-player-container">
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className={`w-full h-full object-cover cursor-pointer ${className}`}
      />
      <button
        className="video-mute-btn absolute bottom-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center bg-black/40 hover:bg-black/60 text-white backdrop-blur-md border border-white/10 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer md:opacity-0 md:group-hover:opacity-100 focus:opacity-100"
        aria-label="Включить звук"
        title="Включить звук"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 mute-icon"
        >
          <path d="M11 5L6 9H2v6h4l5 4V5z" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-4 h-4 sound-icon hidden"
        >
          <path d="M11 5L6 9H2v6h4l5 4V5z" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
      </button>
    </div>
  );
}
