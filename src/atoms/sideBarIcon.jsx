import React from "react";

const SidebarIcon = ({active,setActive, icon,link,name}) => {
 
    return (
      <div
        onClick={() => {
          setActive(name);
          window.location.href = link; 
        }}
        title={name}
        className={
          "w-10 h-10 rounded-full flex items-center justify-center " +
          (active ? "bg-primary" : "bg-gray-200") +
          " cursor-pointer my-5"
        }
      >      
        {icon}
      </div>
    );
  };
  



export default SidebarIcon;
