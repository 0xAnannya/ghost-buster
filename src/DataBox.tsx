import React from "react";
import { Search } from "lucide-react";
import TopGhostingCompanies from "./TopGhostingCompanies";
import TrendingGhosts from "./TrendingGhosts";
import ChampionsOfClosures from "./ChampionsOfClosures";

const DataBox: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full p-4 md:mx-auto md:max-w-7xl lg:max-w-screen-xl">
      <div className="flex items-center w-full  flex-row justify-between ">
        <div>
          <p className="text-2xl">Interview Ghost Buster</p>
        </div>
        <div className="flex items-center border-2 border-gray-500 rounded-xl px-4 py-2 w-80">
          <Search className="w-5 h-5 text-gray-950" />
          <input
            type="text"
            className="border-none outline-none bg-transparent text-black w-full text-lg"
            placeholder="Search companies or roles ..."
            //   onChange={(e) => renderSearchList(e.currentTarget.value)}
            //   onFocus={() => setIsActive(true)}
            //   onBlur={() => setTimeout(() => setIsActive(false), 150)}
            // slight delay to allow clicks
          />
        </div>
      </div>

      <div className="flex flex-col items-center w-full gap-8 mt-10 md:flex-row md:justify-center md:gap-8 lg:gap-16">
        <TopGhostingCompanies />
        <TrendingGhosts />
        <ChampionsOfClosures />
      </div>

      <div className="flex mt-10">
        <button className="rounded-xl bg-blue-500 cursor-pointer px-18 py-4 font-semibold text-white hover:brightness-110 ">
          <p className="text-xl">+ Share Your Experience</p>
        </button>
      </div>
    </div>
  );
};

export default DataBox;
