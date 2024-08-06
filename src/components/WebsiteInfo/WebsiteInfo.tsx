import React from "react";

const WebsiteInfo = () => {
  return (
    <div className="w-[18%] max-md:w-[52%]  absolute right-[4%] top-[25%] max-md:top-[89%] text-white max-md:right-[25%] md:text-right text-center max-md:flex max-md:justify-between">
      <div className=" max-md:w-[50%]">
        <div className="md:text-lg text-[14px]">
          <p>
            <span className="underline">
              <a
                href="https://github.com/prra-codes/game-boy-color-snake-tnt-stack"
                target="_blank"
                className="text-link-color"
              >
                Check out the code here.
              </a>
            </span>
          </p>
        </div>

        <div className="md:text-lg text-[14px] md:mt-4 max-md:hidden">
          <p>
            <span className="underline">
              <a
                href="https://www.prra.codes/"
                target="_blank"
                className="text-link-color"
              >
                Click here to check out my Connect 4 game.
              </a>
            </span>
          </p>
        </div>
      </div>
      <div>
        <ul className="md:mt-4">
          <li>
            <a
              href="mailto:prra@prra.codes"
              className="underline text-link-color md:text-lg text-[14px]"
            >
              {" "}
              prra@prra.codes
            </a>
          </li>
          <li>
            <a
              href="https://github.com/prra-codes"
              className="underline text-link-color md:text-lg text-[14px]"
              target="_blank"
            >
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/peter-arthur/"
              className="underline text-link-color md:text-lg text-[14px]"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WebsiteInfo;
