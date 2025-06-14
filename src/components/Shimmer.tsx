import { JSX } from "react";

const Shimmer = (): JSX.Element => {
  return (
    <div className="flex flex-wrap">
      {[
        ...Array(10)].map((_, index) => (
          <div
            key={index}
            className="w-[200px] h-[300px] bg-gray-400 m-[20px] animate-pulse p-4"
          >
            <div className="w-full h-[120px] bg-gray-300 rounded-md mb-4"></div>
            <div className="w-3/4 h-4 bg-gray-300 rounded mb-2"></div>
            <div className="w-1/2 h-4 bg-gray-300 rounded mb-2"></div>
            <div className="w-2/3 h-4 bg-gray-300 rounded mb-2"></div>
          </div>
        ))
      }
    </div>
  );
};

export default Shimmer;
