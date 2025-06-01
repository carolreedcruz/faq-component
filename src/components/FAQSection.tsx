import { useState } from "react";

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
      <button className="faq-section-toggle" onClick={toggleSection}>
        {isOpen ? "−" : "+"} {title}
      </button>

      {isOpen && (
        <ul className="faq-list">
          {questions.map((item, index) => (
            <li key={index} className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggleQuestion(index)}
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
      )}
    </div>
  );
}

export default FAQSection;
