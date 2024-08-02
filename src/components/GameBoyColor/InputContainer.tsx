import React from "react";
import DPadLeftRight from "./DPadLeftRight";
import CenterDivs from "./CenterDivs";
import DPadCircle from "./DPadCircle";
import DPadTopBottom from "./DPadTopBottom";
import AButton from "./AButton";
import BButton from "./BButton";
import SelectStartButtons from "./SelectStartButtons";

const InputContainer = () => {
  return (
    <div className="w-[86%] h-44 left-1/2 -translate-x-1/2 bottom-24 absolute">
      <div className="w-20 h-20 bg-circle-border absolute top-4">
        <DPadLeftRight />
        <CenterDivs />
        <DPadCircle />
        <DPadTopBottom />
      </div>
      <div className="w-28 h-16 absolute right-2 top-5">
        <AButton />
        <BButton />
      </div>
      <SelectStartButtons />
    </div>
  );
};

export default InputContainer;
