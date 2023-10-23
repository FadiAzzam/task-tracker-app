import React from "react";
import { BiPlus } from "react-icons/bi";
import { AiFillProject } from "react-icons/ai";

const Sidebar = ({ projectName }) => {
  return (
    <aside className="grid-area-sidebar h-full border-r p-6 text-sm border-gray-700">
      <nav>
        <div className="flex justify-between items-center">
          <h5 className="mb-2 text-sm font-semibold tracking-wide  uppercase ">
            Projects
          </h5>
          <BiPlus className="w-6 h-6 cursor-pointer hover:bg-gray-800 p-1 rounded text-white" />
        </div>
        <ul className="list-unstyled fw-normal">
          <li className="py-2 cursor-pointer flex gap-1 items-center text-gray-400 hover:text-white ">
            <AiFillProject className="w-5 h-5" />
            <a
              href="/"
              className="py-2 transition-colors duration-200 relative flex items-center flex-wrap font-medium "
            >
              {projectName || "your project"}
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
