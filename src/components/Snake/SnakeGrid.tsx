'use client';
import { useState, useEffect } from 'react';

export default function SnakeGrid() {
  let totalRows = 12;
  let totalCols = 12;

  let initialSnakePosition = [
    { x: totalRows / 2, y: totalCols / 2 },
    { x: totalRows / 2 + 1, y: totalCols / 2 },
  ];

  const [food, setFood] = useState({ x: 3, y: 3 });
  const [snake, setSnake] = useState(initialSnakePosition);

  const [direction, setDirection] = useState('LEFT');
  const [score, setScore] = useState(0);

  useEffect(() => {
    let interval = setInterval(updateGame, 200); // calls update game every 500 milliseconds
    return () => clearInterval(interval);
  });

  useEffect(() => {
    document.addEventListener('keydown', updateDirection);
  });

  function renderBoard() {
    let cellArray = [];

    for (let row = 0; row < totalRows; row++) {
      for (let col = 0; col < totalCols; col++) {
        let isFood = food.x === row && food.y === col;

        let isSnake = snake.some((ele) => ele.x === row && ele.y === col);

        let isSnakeHead = snake[0].x === row && snake[0].y === col; // the head of the snake is the first item in the array

        let cellColour = 'bg-game-boy-screen-dark';

        if (isFood) {
          cellColour = 'bg-red-600';
        }

        if (isSnake) {
          cellColour = 'bg-white';
        }

        if (isSnakeHead) {
          cellColour = 'bg-white';
        }

        let cell = (
          <div
            className={`h-[15px] w-[17px]  ${cellColour} border-solid rounded-md border-blue-600`}
            key={`${row}-${col}`}
          ></div>
        );

        cellArray.push(cell);
      }
    }

    return cellArray;
  }

  function gameOver() {
    setSnake(initialSnakePosition);
    setScore(0);
    renderFood();
  }

  function updateGame() {
    if (
      snake[0].x < 0 ||
      snake[0].x >= 12 ||
      snake[0].y < 0 ||
      snake[0].y >= 12
    ) {
      gameOver();
      return;
    }

    let isBit = snake
      .slice(1)
      .some((ele) => ele.x === snake[0].x && ele.y === snake[0].y);

    if (isBit) {
      gameOver();
      return;
    }

    let newSnake = [...snake]; // cloning snake

    switch (direction) {
      case 'LEFT':
        newSnake.unshift({ x: newSnake[0].x, y: newSnake[0].y - 1 });
        break;
      case 'RIGHT':
        newSnake.unshift({ x: newSnake[0].x, y: newSnake[0].y + 1 });
        break;
      case 'UP':
        newSnake.unshift({ x: newSnake[0].x - 1, y: newSnake[0].y });
        break;
      case 'DOWN':
        newSnake.unshift({ x: newSnake[0].x + 1, y: newSnake[0].y });
        break;
    }

    let isAteFood = newSnake[0].x === food.x && newSnake[0].y === food.y; // if the snake head position is the same as the food position, this means the snake has eaten the food and isAteFoods evaluates to true

    if (isAteFood) {
      setScore((prev) => prev + 5); // updates game score when food is eaten
      renderFood(); // after food is eaten, generates food at a random position on the grid
    } else {
      newSnake.pop(); // remove last obj from snake, so snake doesn't grow when food has not been eaten
    }

    setSnake(newSnake);
  }

  function updateDirection(e: any) {
    let code = e.code;

    switch (code) {
      case 'ArrowUp':
        setDirection('UP');
        break;
      case 'ArrowDown':
        setDirection('DOWN');
        break;
      case 'ArrowLeft':
        setDirection('LEFT');
        break;
      case 'ArrowRight':
        setDirection('RIGHT');
        break;
    }
  }

  function renderFood() {
    let xPosition = Math.floor(Math.random() * totalRows); // generates random x position between 0 and 11, only whole numbers
    let yPosition = Math.floor(Math.random() * totalCols); // generates random y position between 0 and 11, only whole numbers

    setFood({ x: xPosition, y: yPosition }); // sets random food position on the grid using random x and y positions
  }

  return (
    <div>
      <div className="text-white absolute top-[-5rem] left-[-5rem] font-bold text-xl">
        Score : <span className="">{score}</span>
      </div>

      {/* board div */}
      <div className="grid grid-rows-12 grid-cols-12 gap-x-[1px] gap-y-[1px]">
        {renderBoard()}
      </div>
    </div>
  );
}
