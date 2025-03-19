/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";

const SubmitButton = ({ isLoading, buttonText }) => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setDots((prevDots) => {
          if (prevDots === "...") {
            return ".";
          }
          return prevDots + ".";
        });
      }, 500);

      return () => clearInterval(interval);
    } else {
      setDots("");
    }
  }, [isLoading]);

  return (
    <div className="mt-6 text-center">
      <button
        type="submit"
        className={`bg-black text-white py-2 px-6 rounded-md ${
          isLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-950"
        }`}
        disabled={isLoading}
      >
        {isLoading ? `Senden${dots}` : buttonText}
      </button>
    </div>
  );
};

export default SubmitButton;
