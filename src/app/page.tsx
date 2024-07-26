import Image from "next/image";
import { BsFillTriangleFill } from "react-icons/bs";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-grey">
      <div
        className="w-96 
bg-game-boy-blue
absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] rounded-t-md shadow-[inset_5px_5px_8px_0px_rgba(255,255,255,.4),3px_3px_8px_0px_rgba(255,255,255,.4)] rounded-b-game-boy-screen-bottom"
      >
        {/* comm text */}
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
        {/* light game boy part */}
        <div>
          <div className="w-64 h-[29rem] border-2 border-solid border-transparent bg-[#0995b5] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-b-2xl"></div>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 w-80 h-72 top-4 rounded-t-xl  bg-game-boy-dark rounded-b-game-boy-screen-bottom shadow-[inset_3px_3px_8px_0px_rgba(255,255,255,.4)]">
          {/* power */}
          <div className="w-9 h-7 absolute top-20 left-2">
            {/* power light container */}
            <div
              className="w-[3px] h-[3px] rounded-full bg-smaller-light absolute left-[3px]
top-[2px]"
            ></div>
            <div className="flex flex-row">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div
                className="w-2 h-2 rounded-full  bg-game-boy-dark shadow-[0px_2px_0px_0px_rgba(255,255,255,0.5)] -rotate-90 z-20
"
              ></div>
              <div
                className="w-2 h-2 rounded-full  bg-game-boy-dark  shadow-[0px_2px_0px_0px_rgba(255,255,255,0.5)] -rotate-90 z-10
"
              ></div>
              <div
                className="w-2 h-2 rounded-full  bg-game-boy-dark  shadow-[0px_2px_0px_0px_rgba(255,255,255,0.5)] -rotate-90
"
              ></div>
            </div>
            {/* power text */}
            <div className="font-extralight text-[rgba(255,255,255,0.5)] text-[9.5px] text-center mt-1">
              POWER
            </div>
          </div>

          <div className="border-solid bg-game-boy-screen-dark  absolute top-8 w-56 h-48 left-1/2 -translate-x-1/2 ">
            {/* put snake game here */}
          </div>
          {/* game boy color text */}
          <div className="absolute top-[240px] left-12">
            <div className="flex gap-1 justify-center w-56">
              <div className="font-mono text-2xl text-game-boy-text font-bold -skew-x-6">
                GAME
              </div>
              <div className="font-mono text-2xl text-game-boy-text font-bold -skew-x-6 ">
                BOY
              </div>
              <div
                className={`flex justify-start items-baseline font-nunito font-bold tracking-[-3px] `}
              >
                <p className="text-2xl">
                  <span className="text-[#D0125C]">C</span>
                </p>
                <p className="text-xl">
                  <span className="text-[#692DD0]">O</span>
                </p>
                <p className="text-2xl skew-x-[10deg] skew-y-[-10deg]">
                  <span className="text-[#88E63F] ">L</span>
                </p>
                <p className="text-xl">
                  <span className="text-[#E6E14A]">O</span>
                </p>
                <p className="text-2xl">
                  <span className="text-[#25869D]">R</span>
                </p>
              </div>
            </div>
          </div>
          <div className="border-2 border-solid border-[#2d7fb3]  absolute top-[305px] left-1/2 -translate-x-1/2 rounded-2xl w-28 ">
            <p className="font-mono text-base select-start-shadow text-center text-game-boy-blue">
              Nintendo
            </p>
          </div>
          {/* nintendo text */}
        </div>
        <div className="w-[86%] h-44 left-1/2 -translate-x-1/2 bottom-24 absolute">
          <div className="w-20 h-20 bg-circle-border  absolute top-4">
            {/* left-right */}
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
            {/*my two center divs to cover lines */}

            <div
              className="w-[8px] h-[15px]
top-[50%] left-[48%]
border-2 border-solid border-transparent bg-game-boy-d-pad
absolute  z-10 translate-x-1/2 -translate-y-1/2"
            ></div>
            <div
              className="w-[8px] h-[15px]
top-[50%] left-[32%]
border-2 border-solid border-transparent bg-game-boy-d-pad
absolute  z-10 translate-x-1/2 -translate-y-1/2"
            ></div>
            {/* center */}
            <div
              className=" bg-gradient-to-r from-circle-d-pad-dark to-circle-d-pad-bright border-[1px] border-solid border-circle-d-pad rounded-full  absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2
w-3 h-3"
            ></div>
            {/* top-bottom */}
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
          </div>
          {/* d pad  */}
          <div className="w-28 h-16 absolute right-2 top-5">
            {/* a button */}
            <div
              className="
w-9 h-9 rounded-full  bg-game-boy-d-pad absolute top-2 right-0 border-solid border-2 border-black shadow-[inset_0px_0px_2px_0px_rgba(255,255,255,.4),inset_0px_0px_2px_0px_rgba(255,255,255,.4)]"
            >
              {/* A button text */}
              <div className="text-black w-fit h-fit font-mono absolute top-[10%] left-[24%] text-lg">
                <p className="text-shadow">A</p>
              </div>
            </div>
            {/* b button */}
            <div
              className="
w-9 h-9 rounded-full left-3 bg-game-boy-d-pad absolute border-solid border-2 border-black shadow-[inset_0px_0px_2px_0px_rgba(255,255,255,.4),inset_0px_0px_2px_0px_rgba(255,255,255,.4)] top-7"
            >
              {/* B button text */}
              <div className="text-black w-fit h-fit font-mono absolute top-[10%] left-[24%] text-lg ">
                <p className="text-shadow">B</p>
              </div>
            </div>
          </div>
          <div className="absolute w-28 h-16 left-1/2 -translate-x-1/2 top-36 ">
            {/* button container */}
            <div className="w-full  flex justify-around">
              {/* button select */}
              <div className="w-8 h-3 bg-game-boy-d-pad  rounded-md shadow-[inset_0px_0px_2px_0px_rgba(255,255,255,.4),inset_0px_0px_2px_0px_rgba(255,255,255,.4)] border-2 border-solid border-black"></div>
              {/* button start */}
              <div className="w-8 h-3 bg-game-boy-d-pad  rounded-md shadow-[inset_0px_0px_2px_0px_rgba(255,255,255,.4),inset_0px_0px_2px_0px_rgba(255,255,255,.4)] border-2 border-solid border-black"></div>
            </div>
            {/* text container */}
            <div className="flex justify-around">
              {/* select-start-text select */}
              <div>
                <p className="font-mono text-xs select-start-shadow text-game-boy-blue">
                  SELECT
                </p>
              </div>
              {/* select-start-text start */}
              <div>
                <p className="font-mono text-xs select-start-shadow text-game-boy-blue">
                  START
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-[5.5rem] h-24 absolute bottom-4 right-5 -rotate-[8deg]">
            <div className="flex justify-center gap-x-1 pb-1">
              <div className="w-[7px] h-[7px] bg-black rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-dark-blue-circle  rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-black rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-dark-blue-circle  rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-black rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-dark-blue-circle  rounded-full"></div>
            </div>
            <div className="grid grid-rows-6 grid-cols-8 gap-1">
              <div className="w-[7px] h-[7px] bg-black rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-dark-blue-circle  rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-black rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-dark-blue-circle  rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-black rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-dark-blue-circle  rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-black rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-dark-blue-circle  rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-dark-blue-circle  rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-black rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-dark-blue-circle  rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-black rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-dark-blue-circle  rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-black rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-dark-blue-circle  rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-black rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-black rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-dark-blue-circle  rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-black rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-dark-blue-circle  rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-black rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-dark-blue-circle  rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-black rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-dark-blue-circle  rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-dark-blue-circle  rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-black rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-dark-blue-circle  rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-black rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-dark-blue-circle  rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-black rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-dark-blue-circle  rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-black rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-black rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-dark-blue-circle  rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-black rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-dark-blue-circle  rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-black rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-dark-blue-circle  rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-black rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-dark-blue-circle  rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-dark-blue-circle  rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-black rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-dark-blue-circle  rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-black rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-dark-blue-circle  rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-black rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-dark-blue-circle  rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-black rounded-full"></div>
            </div>
            <div className="flex justify-center gap-1 pt-1">
              <div className="w-[7px] h-[7px]  bg-dark-blue-circle rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-black rounded-full"></div>
              <div className="w-[7px] h-[7px]  bg-dark-blue-circle rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-black rounded-full"></div>
              <div className="w-[7px] h-[7px]  bg-dark-blue-circle rounded-full"></div>
              <div className="w-[7px] h-[7px] bg-black rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
