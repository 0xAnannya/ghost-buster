import React, { useState } from "react";
import Coc from "./Coc";

const ChampionsOfClosures: React.FC = () => {
  const [companyData, setCompanyData] = useState({
    name: "Stan",
    percent: "25",
  });
  return (
    <div
      className="
      rounded-2xl 
      w-full             /* Full width on small screens */
      min-w-60           /* Minimum width to prevent content squishing */
      mx-auto            /* Center horizontally */
      bg-white 
      shadow 
      p-4 
      flex 
      flex-col 
      items-center 
      shadow-neutral-400
      md:w-1/3           /* One-third width on medium screens and up */
      md:max-w-xs        /* Optional: maximum width to prevent cards from becoming too wide on very large screens */
      lg:p-6             /* Slightly more padding on larger screens */
    "
    >
      <p className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
        Champions Of Closures
      </p>
      <div className="w-full">
        <Coc companyData={companyData} />
      </div>
    </div>
  );
};

export default ChampionsOfClosures;
