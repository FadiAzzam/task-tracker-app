import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import { BiPlus } from "react-icons/bi";

const Header = (props) => {
  const ShowAddFrom = () => {};

  return (
    <header className="grid-area-header w-full p-2 border-b border-gray-700 bg-gray-800">
      <nav className="flex justify-between items-center">
        <a
          href="/"
          aria-label="Zurück zur Startseite"
          className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
        >
          {props.title}
        </a>
        <Button handleClick={ShowAddFrom}>
          Add new project
          <BiPlus className="w-5 h-5 ml-2" />
        </Button>
      </nav>
    </header>
  );
};

// von defaultProbs verwendet
Header.defaultProps = {
  title: "Task Tracker",
};

//Um festzustellen, welche Werte die Props annehmen können
Header.prototypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
