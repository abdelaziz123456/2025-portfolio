import React from "react";
import { Button } from "../atoms";

const Home = () => {
  return (
    <div className="h-[100vh]">
         <div className="w-full flex flex-col items-center gap-4">
        <div className="w-24 h-24 rounded-full bg-gray-300"></div>
        <h1 className="text-2xl font-bold">Abdelaziz</h1>
        <p className="text-gray-500">Frontend Developer</p>
      </div>
      <Button title={"hello"} />
    </div>
  );
};

export default Home;
