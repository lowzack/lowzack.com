import { FC, useState } from "react";
import clsx from "clsx";

type FAQItem = {
  question: string;
  answer: string | string[];
};

type FAQProps = {
  items: FAQItem[];
  className?: string;
};

const FAQ: FC<FAQProps> = ({ items, className }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={clsx("space-y-4", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border-b border-wine-red pb-4"
            style={{ borderBottomWidth: "2px" }}
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full text-left flex justify-between items-center py-2 focus:outline-none"
              aria-expanded={isOpen}
            >
              <h3 className="text-2xl">{item.question}</h3>
              <span
                className={clsx(
                  "text-wine-red text-2xl font-bold transition-transform",
                  isOpen && "rotate-45"
                )}
              >
                +
              </span>
            </button>
            {isOpen && (
              <div className="pt-2 pb-2">
                {Array.isArray(item.answer) ? (
                  <ul>
                    {item.answer.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{item.answer}</p>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;
