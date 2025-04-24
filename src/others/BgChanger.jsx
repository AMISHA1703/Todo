import React, { useState } from "react";

function BgChanger() {

  // let [color, setColor] = useState("black");   // using useState hook
   let color="black"    // without usong hook

  function bgChanger(ColorPassed) {

    console.log(ColorPassed)
    // setColor(ColorPassed);
     color=ColorPassed
     console.log(color)
     bg.style.backgroundColor=color;
    
    // console.log(bg.style.backgroundColor);
  }
  return (
    <>
      <div
        id="bg"
        style={{ backgroundColor: color }}
        className="flex items-end p-2 "
      >
        <div className=" bg-slate-300 drop-shadow-4xl rounded-xl w-full  flex items-center justify-center sm:grid grid-cols-2">
          <button
            onClick={()=>{bgChanger("red")}}
            className="  bg-red-600 rounded-xl drop-shadow-2xl p-3 m-4 outline-none text-lg  text-white  cursor-pointer  hover:bg-red-400 "
          >
            Red
          </button>
          <button
            onClick={() => {
              bgChanger("green");
            }}
            className="bg-green-500 rounded-xl drop-shadow-2xl p-3 m-4 text-lg text-white cursor-pointer  hover:bg-green-300 "
          >
            Green
          </button>
          <button
            onClick={() => {
              bgChanger("blue");
            }}
            className="bg-blue-500 rounded-xl p-3 m-4  drop-shadow-2xl text-lg text-white cursor-pointer  hover:bg-blue-300  "
          >
            Green
          </button>
          <button
          onClick={() => {
            bgChanger("yellow");
          }}
            className="bg-yellow-500 rounded-xl p-3 m-4 text-lg drop-shadow-2xl text-white cursor-pointer  hover:bg-yellow-300 "
          >
            Green
          </button>
        </div>
      </div>
    </>
  );
}

export default  BgChanger;
