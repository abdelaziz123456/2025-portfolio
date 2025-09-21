import React from "react";
import { LinkIcon, SidebarIcon } from "../atoms";
import { RiHome2Fill } from "react-icons/ri";
import { FaFileCode } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";
import { BiSolidBriefcase } from "react-icons/bi";
import { GrProjects } from "react-icons/gr";
import { IoChatbox } from "react-icons/io5";

const SideNavigator = () => {

  const [activeSection, setActiveSection] = React.useState("skills");
  const sections=[
    {name:"home",link:"#home",icon:<RiHome2Fill color="text-textLight"/>} ,
    {name:"skills",link:"#skills",icon:<FaFileCode color="text-textLight"/>},
    {name:"education",link:"#education",icon:<PiStudent color="text-textLight"/>},
    {name:"experience",link:"#experience",icon:<BiSolidBriefcase color="text-textLight"/>},
    {name:"projects",link:"#projects",icon:<GrProjects color="text-textLight"/>},
    {name:"contact",link:"#contact",icon:<IoChatbox color="text-textLight"/>}
    
  ]
  return (
    <div className="px-10 bg-white rounded-lg flex flex-col items-center justify-between p-4">
   <div></div>
      <div className="w-full flex flex-col gap-2">
      
       {sections.map((section)=>(
        <SidebarIcon key={section.name} name={section.name}  link={section.link} active={activeSection===section.name} setActive={setActiveSection} icon={section.icon}/>
       ))}
      </div>
    
    <div></div>
    </div>
  );
};

export default SideNavigator;
