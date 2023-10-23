import React from "react";
import { BiListUl, BiSolidDashboard } from "react-icons/bi";

const tabs = [
  {
    lable: "List",
    icon: (
      <BiListUl className="w-6 h-6 mr-2 text-blue-600 dark:text-blue-500" />
    ),
    active: false,
  },
  {
    lable: "Board",
    icon: (
      <BiSolidDashboard className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-500" />
    ),
    active: true,
  },
];
const Tabs = () => {
  return (
    <div className="border-b border-gray-700">
      <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-400 items-baseline">
        {tabs.map((tab, i) => {
          return (
            <li
              key={i}
              className={`cursor-pointer inline-flex items-center justify-center p-4 text-blue-500 ${
                tab.active && "border-b-2 border-blue-500"
              }  rounded-t-lg`}
            >
              {tab.icon}
              {tab.lable}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Tabs;
