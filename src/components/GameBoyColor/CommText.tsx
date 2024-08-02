import React from "react";
import { BsFillTriangleFill } from "react-icons/bs";

const CommText = () => {
  return (
    <div className="absolute top-1 left-[72px]">
      <div className="flex justify-start">
        <div className="relative bottom-1 z-10">
          <BsFillTriangleFill
            style={{ color: "#01819E", translate: "1px 5px" }}
            size={9}
          />
        </div>
        <div className="relative bottom-1">
          <BsFillTriangleFill
            style={{ color: "rgba(0, 0, 0, 0.2)", translate: "-9px 4px" }}
            size={11}
          />
        </div>

        <div className="font-mono text-[9px] comms-shadow text-game-boy-blue relative right-1">
          COMM.
        </div>
      </div>
    </div>
  );
};

export default CommText;
