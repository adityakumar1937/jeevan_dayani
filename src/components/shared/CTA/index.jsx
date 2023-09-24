import React from "react";

import "./style.scss";

const CallToAction = ({ text, icon }) => {
  return (
    <div className="call-to-action">
      <span className="icon">{icon}</span>
      <span className="text">{text}</span>
    </div>
  );
};

export default CallToAction;
