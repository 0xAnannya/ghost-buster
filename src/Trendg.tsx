type CompanyData = {
  name: string;
  inc: string;
};

type Props = {
  companyData: CompanyData;
};

import React from "react";

const Trendg: React.FC<Props> = ({ companyData }) => {
  return (
    <div className="mt-4 flex mx-5 flex-row justify-between">
      <div className="flex flex-col">
        <p className="text-xl">{companyData.name}</p>
      </div>

      <div className=" w-20 justify-center ">
        <p className="text-gray-500">↑ {companyData.inc} ↑ this week</p>
      </div>
    </div>
  );
};

export default Trendg;
