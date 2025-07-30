import { useState } from "react";

import HomePage from "./Homepage";
import DataBox from "./DataBox";

function App() {
  return (
    <>
      <div className="min-h-screen bg-[#F5F7F8] pt-5 px-4 md:px-8 lg:px-10">
        <HomePage />
        <div className="flex w-full justify-center mt-10 p-4 md:p-0">
          <DataBox />
        </div>
      </div>
    </>
  );
}

export default App;
