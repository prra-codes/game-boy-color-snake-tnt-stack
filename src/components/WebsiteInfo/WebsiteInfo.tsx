import React from "react";

const WebsiteInfo = () => {
  return (
    <div className="w-[18%] max-md:w-[70%]  absolute right-[4%] top-[25%] max-md:top-[80%] text-white max-md:right-[16%] md:text-right text-center">
      <div className="text-lg">
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

      <div className="text-lg mt-4">
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
      <ul className="mt-4">
        <li>
          <a
            href="mailto:prra@prra.codes"
            className="underline text-link-color text-lg"
          >
            {" "}
            prra@prra.codes
          </a>
        </li>
        <li>
          <a
            href="https://github.com/prra-codes"
            className="underline text-link-color text-lg"
            target="_blank"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/peter-arthur/"
            className="underline text-link-color text-lg"
            target="_blank"
          >
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
};

export default WebsiteInfo;
