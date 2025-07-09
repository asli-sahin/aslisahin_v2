import { useState } from "react";

export function DownloadCVButton() {
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload = () => {
    // Open CV in a new tab - this is more reliable for PDF files
    const cvUrl = "/cv.pdf";
    window.open(cvUrl, "_blank");
  };

  return (
    <button
      onClick={handleDownload}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="fixed top-6 right-6 z-50 flex items-center gap-2 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
    >
      <svg
        className={`w-4 h-4 transition-transform duration-300 ${
          isHovered ? "animate-bounce" : ""
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      <span className="font-medium">View CV</span>
    </button>
  );
}
