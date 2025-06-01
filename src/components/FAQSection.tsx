import { useState } from "react";
import BlueArrow from "../assets/arrow.blue.png";
import WhiteArrow from "../assets/TH-Arrow.white.png";

type Question = {
  question: string;
  answer: string;
};

type Props = {
  id: string;
  title: string;
  questions: Question[];
  isOpen: boolean;
  toggleSection: () => void;
};

function FAQSection({ id, title, questions, isOpen, toggleSection }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="faq-group" id={id}>
      <button
        className={`faq-section-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleSection}
      >
        {title}
        <img
          src={WhiteArrow}
          alt="arrow"
          className={`section-arrow ${isOpen ? "open" : ""}`}
        />
      </button>

      {isOpen && (
        <ul className="faq-list">
          {questions.map((item, index) => (
            <li key={index} className="faq-item">
              <button
                className={`faq-question ${
                  openIndex === index ? "active" : ""
                }`}
                onClick={() => toggleQuestion(index)}
              >
                {item.question}
                <img
                  src={BlueArrow}
                  alt="arrow"
                  className={`question-arrow ${
                    openIndex === index ? "open" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div
                  className="faq-answer"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FAQSection;
