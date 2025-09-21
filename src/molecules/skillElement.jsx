import React from "react";
import { ProgressBar } from "../atoms";

const SkillElement = ({ title, percentage }) => {
  return (
    <div className="flex flex-col gap-1 text-[15px] text-textLight">
      <div className="flex justify-between">
        <p>{title}</p>
        <p>{percentage}%</p>
      </div>
      <ProgressBar percentage={percentage} />
    </div>
  );
};

export default SkillElement;
