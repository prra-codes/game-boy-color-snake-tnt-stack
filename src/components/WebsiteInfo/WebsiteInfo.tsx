import React from "react";

const WebsiteInfo = () => {
  return (
    <div className="w-[26%] absolute right-[4%] top-[25%] text-white text-right ">
      <h1 className="text-3xl leading-loose">Game Boy Color Snake</h1>
      <div className="text-lg">
        <p className="leading-relaxed">
          Play snake by using the keyboard arrow keys up, down, left and right.
          Try not hit the border, eat the red food and aim for a high score!
        </p>
        <p className="mt-2">
          This snake game is built using the TNT snack, TypeScript, Next.js and
          Tailwind CSS.
        </p>
        <p>
          <span className="underline">
            <a
              href="https://github.com/prra-codes/game-boy-color-snake-tnt-stack"
              target="_blank"
              className="text-link-color"
            >
              Check out the code here
            </a>
          </span>
          .
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
          .
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
