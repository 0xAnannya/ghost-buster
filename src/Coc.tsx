type CompanyData = {
  name: string;
  percent: string;
};

type Props = {
  companyData: CompanyData;
};

import React from "react";

const Coc: React.FC<Props> = ({ companyData }) => {
  return (
    <div className="mt-4 flex flex-row  border-1 p-2  rounded-lg w-full bg-gray-50 border-gray-200  py-3  justify-between ">
      <div className="text-xl flex">🩶 {companyData.name}</div>

      {/* <div className=" text-xl flex"> {companyData.percent} %</div> */}
    </div>
  );
};

export default Coc;
