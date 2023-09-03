import React from "react";

const Steps = ({ number, size }) => {
  return (
    <div className="flex items-center mt-20">
      <div className="bg-[#dee2e6] h-1 w-[90%] mx-auto rounded-md">
        <div className="flex">
          <div className={`bg-[#545cd8] h-1  rounded-md w-[calc(33.333333%)]`}></div>
          <div className="flex flex-col -translate-y-5 -translate-x-9 justify-center items-center">
            <div className="bg-[#545cd8] w-fit rounded-full text-white py-2 px-4">
              1
            </div>
            <div className="text-center whitespace-nowrap">
              Kişisel Bilgiler
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
