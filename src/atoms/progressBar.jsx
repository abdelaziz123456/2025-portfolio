import React from 'react'

const ProgressBar = ({percentage}) => {
  
  return (
    <div className="border rounded-full border-primary w-full h-[6px]  ">
        <div className={`bg-primary h-full  rounded-full`} style={{ width: `${percentage}%` }}>

        </div>
      
    </div>
  )
}

export default ProgressBar
