import { useState } from "react";
import faqData from "../data/faqs.json";
import FAQSection from "./FAQSection";
import "../styles/FAQ.css";

function FAQ() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleAnchorClick = (section: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: true,
    }));

    const target = document.getElementById(`section-${section}`);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="faq-section">
      <div className="faq-anchors">
        {Object.keys(faqData).map((section) => (
          <button
            key={section}
            className="faq-anchor-btn"
            onClick={() => handleAnchorClick(section)}
          >
            {section}
          </button>
        ))}
      </div>

      {Object.entries(faqData).map(([title, questions]) => (
        <FAQSection
          key={title}
          id={`section-${title}`}
          title={title}
          questions={questions}
          isOpen={openSections[title] ?? false}
          toggleSection={() =>
            setOpenSections((prev) => ({
              ...prev,
              [title]: !prev[title],
            }))
          }
        />
      ))}
    </div>
  );
}

export default FAQ;
