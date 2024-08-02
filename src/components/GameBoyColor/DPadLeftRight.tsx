import React from "react";
import { BsFillTriangleFill } from "react-icons/bs";

const DPadLeftRight = () => {
  return (
    <div className="w-[95%] h-5 rounded  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-game-boy-d-pad  border-2 border-solid border-black shadow-[inset_0px_0px_2px_0px_rgba(255,255,255,.4),inset_0px_0px_2px_0px_rgba(255,255,255,.4)]">
      <BsFillTriangleFill
        style={{
          color: "rgb(0, 0, 0)",
          translate: "2.6px 2.5px",
          transform: "rotate(270deg)",
        }}
        size={11}
      />
      <BsFillTriangleFill
        size={11}
        style={{
          color: "rgb(0, 0, 0)",
          translate: "54.5px -8.5px",
          transform: "rotate(90deg)",
        }}
      />
    </div>
  );
};

export default DPadLeftRight;
