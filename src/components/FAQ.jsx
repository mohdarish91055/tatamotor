import React, { useState } from "react";

const faqs = [
  {
    question: "Higher Profit",
    answer: [
      "No Need of Diesel Exhaust Fluid (DEF) reduces Operations cost intensity",
      "Elimination of DEF also eliminates need of Manual Regeneration and increase Fuel Efficiency",
      "Low Acquisition Cost with Starting Price of Rs 5.99* lakhs",
    ],
  },
  {
    question: "Pickup",
    answer: [
      "Yes, we ship to most countries worldwide.",
      "Shipping rates vary by destination.",
      "Delivery takes 7–21 business days depending on your region.",
    ],
  },
  {
    question: "Safety",
    answer: [
      "You’ll receive a tracking email once your order is shipped.",
      "You can also track from your account under 'My Orders'.",
    ],
  },
  {
    question: "Drivability",
    answer: [
      "You can modify or cancel your order within 24 hours.",
      "Contact our support team to make changes.",
      "After 24 hours, orders are processed and can’t be altered.",
    ],
  },
  {
    question: "Comfort",
    answer: [
      "You can modify or cancel your order within 24 hours.",
      "Contact our support team to make changes.",
      "After 24 hours, orders are processed and can’t be altered.",
    ],
  },
  {
    question: "Low Maintenance",
    answer: [
      "You can modify or cancel your order within 24 hours.",
      "Contact our support team to make changes.",
      "After 24 hours, orders are processed and can’t be altered.",
    ],
  },
];

const FAQ = () => {
  // Only first FAQ is open by default
  const [openItems, setOpenItems] = useState(faqs.map((_, i) => i === 0));

  const toggleFAQ = (index) => {
    const updated = [...openItems];
    updated[index] = !updated[index];
    setOpenItems(updated);
  };

  return (
    <div style={{ maxWidth: "700px", margin: "40px auto", padding: "0 20px" }}>
      {faqs.map((faq, index) => (
        <div
          key={index}
          style={{
            borderBottom: "1px solid #ccc",
            paddingBottom: "10px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => toggleFAQ(index)}
          >
            <h3 style={{ margin: 0 }}>{faq.question}</h3>
            <span
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "#007BFF",
              }}
            >
              {openItems[index] ? "−" : "+"}
            </span>
          </div>

          {openItems[index] && (
            <ul style={{ marginTop: "10px", marginLeft: "20px" }}>
              {faq.answer.map((item, i) => (
                <li className="list-disc list-inside text-white" key={i}>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
