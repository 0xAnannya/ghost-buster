import React from "react";
import ghost from "./assets/ghost1.png";

const HomePage = () => {
  return (
    <>
      <div className="flex w-full flex-col p-4 md:p-8 border-2 border-gray-500 rounded-2xl my-5 mx-auto max-w-screen-xl">
        <div className="flex font-mono justify-center font-medium text-2xl md:text-3xl lg:text-4xl w-full mb-6 md:mb-10">
          Interview Ghost Buster
        </div>

        {/* two-column hero - now responsive */}
        <div className="flex flex-col items-center justify-center gap-8 md:flex-row md:justify-around md:gap-10 lg:gap-20">
          {/* left column - content */}
          <div className="flex flex-col items-center text-center max-w-xl space-y-4 md:items-start md:text-left">
            <span className="block pt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              See who's ghosting after interviews
            </span>
            <p className="font-mono text-base md:text-xl">
              Crowdsourced transparency on hiring pipelines
            </p>
            <p className="font-mono text-base md:text-xl">
              Share your story, pay it forward to other candidates
            </p>

            <button className="mt-6 rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-600 px-6 py-3 font-semibold text-white hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 text-base md:px-8 md:py-3 md:text-lg lg:px-10 lg:py-4">
              Find Ghosting Companies
            </button>
          </div>

          {/* right column - image */}
          <div className="flex w-full justify-center md:w-auto">
            <img
              src={ghost}
              alt="Ghosting Illustration"
              className="w-4/5 max-w-xs h-auto min-w-60 md:w-auto md:max-w-sm lg:max-w-md bg-[#F5F7F8] rounded-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
