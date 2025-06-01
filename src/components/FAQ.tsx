import { useState } from "react";
import "../styles/FAQ.css";

type Question = {
  question: string;
  answer: string;
};

const questions: Question[] = [
  {
    question: "Har jag en skyldighet att försäkra min båt?",
    answer: "Nej, men det är starkt rekommenderat att du gör det.",
  },
  {
    question: "Vad är försäkrat i min båtförsäkring?",
    answer: "Det kan inkludera skador på båten, ansvarsskydd och mer.",
  },
  {
    question: "Vad kostar det att försäkra min båt?",
    answer: "Det beror på båtens typ, storlek, och var den används.",
  },
  // Ändrar till json fil sen.
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h2 className="faq-title">Båtförsäkring</h2>
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
    </div>
  );
}

export default FAQ;
