import React from "react";

const AButton = () => {
  return (
    <div
      className="
w-9 h-9 rounded-full  bg-game-boy-d-pad absolute top-2 right-0 border-solid border-2 border-black shadow-[inset_0px_0px_2px_0px_rgba(255,255,255,.4),inset_0px_0px_2px_0px_rgba(255,255,255,.4)]"
    >
      {/* A button text */}
      <div className="text-black w-fit h-fit font-mono absolute top-[10%] left-[24%] text-lg">
        <p className="text-shadow">A</p>
      </div>
    </div>
  );
};

export default AButton;
