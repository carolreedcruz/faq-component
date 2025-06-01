import { useState } from "react";
import faqData from "../data/faqs.json";
import "../styles/FAQ.css";

type Question = {
  question: string;
  answer: string;
};

function FAQ() {
  const [openItems, setOpenItems] = useState<{ [key: string]: number | null }>(
    {}
  );

  const toggleQuestion = (section: string, index: number) => {
    setOpenItems((prev) => ({
      ...prev,
      [section]: prev[section] === index ? null : index,
    }));
  };

  return (
    <div className="faq-section">
      {Object.entries(faqData).map(([sectionTitle, questions]) => (
        <div key={sectionTitle} className="faq-group">
          <h2 className="faq-title">{sectionTitle}</h2>
          <ul className="faq-list">
            {(questions as Question[]).map((item, index) => (
              <li key={index} className="faq-item">
                <button
                  className="faq-question"
                  onClick={() => toggleQuestion(sectionTitle, index)}
                >
                  {item.question}
                  <span
                    className={`arrow ${
                      openItems[sectionTitle] === index ? "open" : ""
                    }`}
                  >
                    ⌄
                  </span>
                </button>
                {openItems[sectionTitle] === index && (
                  <div className="faq-answer">{item.answer}</div>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default FAQ;
