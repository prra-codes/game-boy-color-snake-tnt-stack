"use client";
import { useState } from "react";

export default function SnakeGrid() {
  function renderBoard() {
    let cellArray = [];

    let totalRows = 12;
    let totalCols = 12;

    let initialSnakePosition = [
      { x: totalRows / 2, y: totalCols / 2 },
      { x: totalRows / 2 + 1, y: totalCols / 2 },
    ];

    const [food, setFood] = useState({ x: 3, y: 3 });
    const [snake, setSnake] = useState(initialSnakePosition);
    const [direction, setDirection] = useState("LEFT");

    for (let row = 0; row < totalRows; row++) {
      for (let col = 0; col < totalCols; col++) {
        let isFood = food.x === row && food.y === col;

        let isSnake = snake.some((ele) => ele.x === row && ele.y === col);

        let isSnakeHead = snake[0].x === row && snake[0].y === col;

        let cellColour = "bg-white";

        if (isFood) {
          cellColour = "bg-red-600";
        }

        if (isSnake) {
          cellColour = "bg-green-500";
        }

        if (isSnakeHead) {
          cellColour = "bg-black";
        }

        let cell = (
          <div
            className={`h-[15px] w-[17px]  ${cellColour} border-solid`}
            key={`${row}-${col}`}
          ></div>
        );

        cellArray.push(cell);
      }
    }

    return cellArray;
  }

  // const [score, setScore] = useState(0); then I can do something like <h2>High Score: {localStorage.getItem("snakeScore")}
  // [gameOver, setGameOver] = useState(false), then in main code I can do  {gameOver && <div className="gameOver">Game Over</div>}

  return (
    <div className="">
      {/* <div className="text-white">
        Score : <span>30</span>
      </div> */}
      {/* board div */}
      {/* do twenty roles and columns, try 20px then adjust. background right width: max-content maybe */}
      {/* cell background color white width: 20px height 20px */}
      {/* <div className="flex flex-wrap gap-[1px]"> */}
      {/* gap-1 */}
      <div className="grid grid-rows-12 grid-cols-12 gap-x-[1px] gap-y-[1px]">
        {renderBoard()}
      </div>
    </div>
  );
}
