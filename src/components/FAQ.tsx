import { useState } from "react";
import faqData from "../data/faqs.json";
import FAQSection from "./FAQSection";
import Checkmark from "../assets/Checkmark.png"; // ✅ Importera bilden
import "../styles/FAQ.css";

function FAQ() {
  const firstSection = Object.keys(faqData)[0];
  const [openSection, setOpenSection] = useState<string | null>(firstSection);

  const handleAnchorClick = (section: string) => {
  setOpenSection(section);

  setTimeout(() => {
    const target = document.getElementById(`section-${section}`);
    if (target) {
      const yOffset = -30;
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, 200);
};


  return (
    <div className="faq-section">
      <h2 className="faq-title-heading">Sök svar utifrån kategori:</h2>
      <div className="faq-anchors">
        {Object.keys(faqData).map((section) => {
          const isActive = openSection === section;
          return (
            <button
              key={section}
              className={`faq-anchor-btn ${isActive ? "active" : ""}`}
              onClick={() => handleAnchorClick(section)}
            >
              {section}
              {isActive && (
                <img
                  src={Checkmark}
                  alt="checkmark"
                  className="checkmark-icon"
                />
              )}
            </button>
          );
        })}
      </div>

      {Object.entries(faqData).map(([title, questions]) => (
        <FAQSection
          key={title}
          id={`section-${title}`}
          title={title}
          questions={questions}
          isOpen={openSection === title}
          toggleSection={() =>
            setOpenSection((prev) => (prev === title ? null : title))
          }
        />
      ))}
    </div>
  );
}

export default FAQ;
