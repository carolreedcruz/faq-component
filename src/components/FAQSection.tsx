import { useState, useRef, useEffect } from "react";
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
  const questionRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const toggleQuestion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    if (isOpen && questionRefs.current[0]) {
      questionRefs.current[0].focus();
    }
  }, [isOpen]);

  return (
    <section
      className="faq-group"
      id={id}
      aria-labelledby={`${id}-heading`}
      role="region"
    >
      <button
        className={`faq-section-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleSection}
        aria-expanded={isOpen}
        aria-controls={`${id}-list`}
        id={`${id}-heading`}
      >
        {title}
        <img
          src={WhiteArrow}
          alt=""
          aria-hidden="true"
          className={`section-arrow ${isOpen ? "open" : ""}`}
        />
      </button>

      <div
        className={`faq-section-content-wrapper ${isOpen ? "open" : ""}`}
        style={{
          maxHeight: isOpen ? "1000px" : "0",
          overflow: "hidden",
          transition: "max-height 0.4s ease",
        }}
        id={`${id}-list`}
        aria-labelledby={`${id}-heading`}
      >
        <ul className="faq-list">
          {questions.map((item, index) => {
            const isOpenItem = openIndex === index;
            const questionId = `${id}-question-${index}`;
            const answerId = `${id}-answer-${index}`;

            return (
              <li key={index} className="faq-item">
                <button
                  ref={(el) => {
                    questionRefs.current[index] = el;
                  }}
                  className={`faq-question ${isOpenItem ? "active" : ""}`}
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={isOpenItem}
                  aria-controls={answerId}
                  id={questionId}
                >
                  {item.question}
                  <img
                    src={BlueArrow}
                    alt=""
                    aria-hidden="true"
                    className={`question-arrow ${isOpenItem ? "open" : ""}`}
                  />
                </button>

                <div
                  id={answerId}
                  className={`faq-answer-wrapper ${isOpenItem ? "open" : ""}`}
                  role="region"
                  aria-labelledby={questionId}
                  style={{
                    maxHeight: isOpenItem ? "500px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.4s ease",
                  }}
                >
                  <div
                    className="faq-answer"
                    dangerouslySetInnerHTML={{ __html: item.answer }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default FAQSection;
