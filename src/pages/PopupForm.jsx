import React, { useState, useEffect } from "react";
import { X } from "lucide-react"; // install: npm install lucide-react

function PopupForm() {
  const [showForm, setShowForm] = useState(false);

  // Show the form automatically when page loads
  useEffect(() => {
    setShowForm(true);
  }, []);

  if (!showForm) return null;

  return (
    <div
      className="fixed inset-0 backdrop-blur-sm bg-black/40 flex items-center justify-center z-50"
      onClick={() => setShowForm(false)}
    >
      <div
        className="bg-white shadow-lg w-96 p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setShowForm(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-center">
          Enquiry Form
        </h2>
        <form className="space-y-3">
          <input
            type="text"
            placeholder="Name"
            required
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="tel"
            pattern="[0-9]{10}"
            maxLength="10"
            placeholder="Phone No."
            required
            className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700 transition"
            onClick={(e) => e.stopPropagation()}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupForm;
