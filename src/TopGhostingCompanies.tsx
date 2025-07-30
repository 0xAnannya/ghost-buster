import React, { useState } from "react";
import Tgc from "./Tgc";

const TopGhostingCompanies: React.FC = () => {
  const [companyData, setCompanyData] = useState({
    name: "Acme Corp",
    reports: "25",
    days: "7",
  });

  return (
    <div
      className="
      rounded-2xl 
      w-full             /* Full width on small screens */
      min-w-60           /* Minimum width to prevent content squishing */
      mx-auto            /* Center horizontally when it's the only item or limited width */
      bg-white 
      shadow 
      p-4 
      flex 
      flex-col 
      items-center 
      justify-center  
      shadow-neutral-400
      md:w-1/3           /* One-third width on medium screens and up */
      md:max-w-xs        /* Optional: maximum width to prevent cards from becoming too wide on very large screens */
      lg:p-6             /* Slightly more padding on larger screens */
    "
    >
      <p className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
        Top Ghosting Companies
      </p>
      <div className="w-full">
        {/* Assuming Tgc is a valid component */}
        <Tgc companyData={companyData} />
        {/* Replace with your actual Tgc component */}
      </div>
    </div>
  );
};

export default TopGhostingCompanies;
