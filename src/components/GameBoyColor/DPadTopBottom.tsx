import React from "react";
import { BsFillTriangleFill } from "react-icons/bs";

const DPadTopBottom = () => {
  return (
    <div className="w-5 h-[95%] rounded  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-game-boy-d-pad border-2 border-solid border-black shadow-[inset_0px_0px_2px_0px_rgba(255,255,255,.4),inset_0px_0px_2px_0px_rgba(255,255,255,.4)]">
      <BsFillTriangleFill
        style={{ color: "rgb(0, 0, 0)", translate: "2.6px 3px" }}
        size={11}
      />
      <BsFillTriangleFill
        size={11}
        style={{
          color: "rgb(0, 0, 0)",
          translate: "2.6px 42px",
          transform: "rotate(180deg)",
        }}
      />
    </div>
  );
};

export default DPadTopBottom;
