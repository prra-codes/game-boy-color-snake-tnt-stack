import React from "react";

const BButton = () => {
  return (
    <div
      className="
w-9 h-9 rounded-full left-3 bg-game-boy-d-pad absolute border-solid border-2 border-black shadow-[inset_0px_0px_2px_0px_rgba(255,255,255,.4),inset_0px_0px_2px_0px_rgba(255,255,255,.4)] top-7"
    >
      {/* B button text */}

      <div className="text-black w-fit h-fit font-mono absolute top-[10%] left-[24%] text-lg ">
        <p className="text-shadow">B</p>
      </div>
    </div>
  );
};

export default BButton;
