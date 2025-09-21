import React from "react";

const LinkIcon = ({ icon, link }) => {
  return (
    <div className="bg-primary w-6 h-6 flex justify-center items-center rounded-full">
      <a href={link} target="_blank">
        {icon}
      </a>
    </div>
  );
};

export default LinkIcon;
