import React, { useState } from "react";
import  SimpleCounter  from "./SimpleCounter";
import CustomHook from "./CustomHook";
import DarkMode from "./DarkMode";
import DynamicallyScrolls from "./DynamicallyScrolls";
import LargeList from "./LargeList";
 

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["SimpleCounter", "CustomHook", "DarkMode", "DynamicallyScrolls", "Contact"];
  const content = [
    <SimpleCounter />,
    <CustomHook />, 
   <DarkMode />,
    <DynamicallyScrolls />,
    <LargeList />,
  ];

  return (
    
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={activeTab === index ? "tab active" : "tab"}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="tab-content">{content[activeTab]}</div>
    </div>
  );
};

export default Tabs;
