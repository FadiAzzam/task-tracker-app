import React, { useState, useEffect } from "react";

const Button = ({ handleClick, variant, children }) => {
  const [style, setStyle] = useState("");

  useEffect(() => {
    switch (variant) {
      case "secondary":
        setStyle(
          "text-white transition duration-200 border border-blue-700 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-4 py-2 text-center inline-flex items-center "
        );
        break;
      case "success":
        setStyle(
          "transition duration-200 text-white bg-green-700 hover:bg-green-600 focus:outline-none focus:ring-green-300 font-medium rounded text-sm px-4 py-2 text-center inline-flex items-center"
        );
        break;
      default:
        setStyle(
          "transition duration-200 text-white bg-blue-700 hover:bg-blue-600 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-4 py-2 text-center inline-flex items-center"
        );
        break;
    }
  }, [variant]);

  return (
    <button type="button" onClick={handleClick} className={style}>
      {children}
    </button>
  );
};

export default Button;
