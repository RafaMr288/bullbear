import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import "./perguntasf.css"

const faqs = [
    {
      question: "What are the benefits of joining a token in creation?",
      answer: "Getting in early on a token like BullBear on Solana allows you to take advantage of low prices and the potential for appreciation before the hype. Just like Solana (SOL) in 2020, new tokens can bring great profits."
    },
    {
      question: "How to ensure trust and credibility in a token?",
      answer: "Tokens with a solid project, well-structured website, and transparency convey credibility. BullBear, for example, follows this approach by presenting a roadmap and a strong ecosystem on Solana."
    },
    {
      question: "How to prepare to acquire the token at launch?",
      answer: "To buy at launch, set up your wallet (Phantom or Solflare) and have SOL available. Keeping an eye on project updates and the launch date announcement ensures you don’t miss the opportunity."
    },
    {
      question: "What are the biggest token successes on Solana?",
      answer: "Tokens like SOL, Raydium, and Serum have had impressive gains. Solid projects on Solana can achieve significant valuations, and BullBear has the potential to follow this path."
    }
  ];
  
function PerguntasF() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button 
              className="faq-question" 
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? <ChevronUp /> : <ChevronDown />}
            </button>
            <p className={`faq-answer ${openIndex === index ? "open" : ""}`}>{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PerguntasF