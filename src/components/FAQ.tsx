import { useState } from "react";
import faqData from "../data/faqs.json";
import FAQSection from "./FAQSection";
import Checkmark from "../assets/Checkmark.png";
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
        const y =
          target.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 200);
  };

  return (
    <section
      className="faq-section"
      aria-labelledby="faq-category-heading"
      role="region"
    >
      <h2 id="faq-category-heading" className="faq-title-heading">
        Sök svar utifrån kategori:
      </h2>

      <div className="faq-anchors" role="tablist" aria-label="FAQ-kategorier">
        {Object.keys(faqData).map((section) => {
          const isActive = openSection === section;
          return (
            <button
              key={section}
              className={`faq-anchor-btn ${isActive ? "active" : ""}`}
              onClick={() => handleAnchorClick(section)}
              role="tab"
              aria-selected={isActive}
              aria-controls={`section-${section}`}
            >
              {section}
              {isActive && (
                <img
                  src={Checkmark}
                  alt="Vald kategori"
                  className="checkmark-icon"
                  aria-hidden="true"
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
    </section>
  );
}

export default FAQ;
