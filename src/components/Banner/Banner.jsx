import React from "react";
import bgImg from "../../assets/vector1.png";

const Banner = ({task}) => {
  return (
    
    <div className="max-w-350 mx-auto flex flex-col md:flex-row items-center justify-center gap-10 px-3 lg:px-1">
        <div className="relative overflow-hidden w-full rounded-2xl flex items-center justify-center bg-[linear-gradient(135deg,#632EE3_0%,#9F62F2_100%)] h-60">
          <img
            className="w-[50%] relative top-0 left-0 h-full object-cover opacity-90"
            src={bgImg}
            alt=""
          />

          <div className="w-full z-10 text-center text-white space-y-3">
            <h2 className="">In-Progress</h2>
            <span className="text-5xl font-bold">{task.length}</span>
          </div>

          <img
            style={{ width: "50%", transform: "scaleX(-1)" }}
            className="relative top-0 right-0 h-full object-cover opacity-90"
            src={bgImg}
            alt=""
          />
        </div>

        <div className="relative overflow-hidden w-full rounded-2xl flex items-center justify-center bg-[linear-gradient(90deg,#54CF68_0%,#00827A_100%)] h-60">
          <img
            className="w-[50%] relative top-0 left-0 h-full object-cover opacity-90"
            src={bgImg}
            alt=""
          />

          <div className="w-full z-10 text-center text-white space-y-3">
            <h2 className="">Resolved</h2>
            <span className="text-5xl font-bold">0</span>
          </div>

          <img
            style={{ width: "50%", transform: "scaleX(-1)" }}
            className="relative top-0 right-0 h-full object-cover opacity-90"
            src={bgImg}
            alt=""
          />
        </div>
      </div>
  );
};

export default Banner;
