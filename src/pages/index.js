import React, { useEffect, useState } from "react";

export default function index() {
  const [number, setnumber] = useState(0);
  const [counter, setCounter] = useState(0);
  const output = () => {
    setnumber((e) => e + 1);
  };

  let Counter = () => {
    for (let index = 0; index < array.length; index++) {
      setCounter((e) => e + 1);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center m-8">
      <div>
        <div>{number}</div>
        <button
          onClick={output}
          className="bg-purple-700 px-6 text-white rounded-md hover:bg-purple-500"
        >
          +1
        </button>
      </div>
      <div>
        <div>{counter}</div>
        <button
          onClick={() => {
            counterData();
          }}
          className="bg-purple-700 px-6 text-white rounded-md
            hover:bg-purple-500"
        >
          Start
        </button>
      </div>
    </div>
  );
}
