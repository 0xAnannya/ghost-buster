type CompanyData = {
  name: string;
  reports: string;
  days: string;
};

type Props = {
  companyData: CompanyData;
};

import React from "react";

const Tgc: React.FC<Props> = ({ companyData }) => {
  return (
    <div className="mt-4 flex mx-3 flex-row justify-between">
      <div className="flex flex-col">
        <p className="text-xl">{companyData.name}</p>
        <p className="text-sm"> {companyData.reports} reports</p>
      </div>

      <div className="border-1 p-2 rounded-lg border-gray-100 shadow w-20 bg-gray-100">
        <p className="text-gray-500"> {companyData.days} days to ghost</p>
      </div>
    </div>
  );
};

export default Tgc;
