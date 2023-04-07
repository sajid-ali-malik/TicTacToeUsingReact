import React from "react";

export default function Square({ value, onSquareClick }) {
  // const [value, setValue] = useState(null);
  // function handleClick() {
  //   setValue("X");
  // }
  return (
    <>
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    </>
  );
}

// bg-blue-400 hover:bg-blue-400 font-bold py-6 px-8 border-4 border-black text-black max-w-xl

//  className = "border-8 border-black inline-block"
