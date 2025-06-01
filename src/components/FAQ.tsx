import { useState } from "react";
import faqData from "../data/faqs.json";
import "../styles/FAQ.css";

type Section = keyof typeof faqData;
type Question = {
  question: string;
  answer: string;
};

function FAQ() {
  const [activeSection, setActiveSection] = useState<Section>("Båtförsäkring");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleSectionChange = (section: Section) => {
    setActiveSection(section);
    setOpenIndex(null);
  };

  const questions = faqData[activeSection];

  return (
    <div className="faq-section">
      <div className="faq-tabs">
        {Object.keys(faqData).map((section) => (
          <button
            key={section}
            className={`faq-tab ${activeSection === section ? "active" : ""}`}
            onClick={() => handleSectionChange(section as Section)}
          >
            {section}
          </button>
        ))}
      </div>

      <h2 className="faq-title">{activeSection}</h2>
      <ul className="faq-list">
        {questions.map((item: Question, index: number) => (
          <li key={index} className="faq-item">
            <button
              className="faq-question"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {item.question}
              <span className={`arrow ${openIndex === index ? "open" : ""}`}>
                ⌄
              </span>
            </button>
            {openIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FAQ;
