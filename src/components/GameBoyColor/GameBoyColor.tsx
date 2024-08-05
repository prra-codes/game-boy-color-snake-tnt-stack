import React from "react";
import SnakeGrid from "../Snake/SnakeGrid";
import CommText from "@/components/GameBoyColor/CommText";
import LighterGameBoyColorShade from "@/components/GameBoyColor/LighterGameBoyColorShade";
import PowerLightContainer from "@/components/GameBoyColor/PowerLightContainer";
import GameBoyColorText from "@/components/GameBoyColor/GameBoyColorText";
import NintendoText from "@/components/GameBoyColor/NintendoText";
import InputContainer from "@/components/GameBoyColor/InputContainer";
import Speaker from "@/components/GameBoyColor/Speaker";

const GameBoyColor = () => {
  return (
    <div
      className="w-96 
bg-game-boy-blue
absolute top-1/2 left-[45%] -translate-x-1/2 -translate-y-1/2 h-[600px] rounded-t-md shadow-[inset_5px_5px_8px_0px_rgba(255,255,255,.4),3px_3px_8px_0px_rgba(255,255,255,.4)] rounded-b-game-boy-screen-bottom"
    >
      <CommText />
      <LighterGameBoyColorShade />
      <div className="absolute left-1/2 -translate-x-1/2 w-80 h-72 top-4 rounded-t-xl  bg-game-boy-dark rounded-b-game-boy-screen-bottom shadow-[inset_3px_3px_8px_0px_rgba(255,255,255,.4)]">
        <PowerLightContainer />
        <div className="border-solid bg-game-boy-screen-dark  absolute top-8 w-[216px] h-48 left-1/2 -translate-x-1/2 ">
          <SnakeGrid />
        </div>
        <GameBoyColorText />
        <NintendoText />
      </div>
      <InputContainer />
      <Speaker />
    </div>
  );
};

export default GameBoyColor;
