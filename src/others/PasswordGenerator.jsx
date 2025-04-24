import React, { useState } from "react";

function PasswordGenerator() {
  const [length, setLength] = useState(9);
  const [number, setNumber] = useState(false);
  const [character, setCharacter] = useState(false);
  const [password,setPassword]=useState("")

  function PasswordGen() {
    console.log(number)

  }
  PasswordGen()

  return (
    <div className="bg-slate-800 flex flex-col  items-center  justify-center text-white overflow-hidden p-5 ">
      <div className=" text-center bg-slate-500  drop-shadow-xl shadow-amber-50 rounded-xl sm:w-[100%] sm:h-[50%] lg:w-[70%] sm:overflow-x-auto sm:scroll-m-1  ml-4 mr-4 ">
        <h1 className="  text-center text-4xl p-5">Password Generator</h1>
        <input
          type="text"
          placeholder="password"
          className="p-2 bg-slate-200 rounded-l-xl text-slate-500 outline-none "
        />
        <button className="bg-blue-500 p-2 rounded-r-xl text-md cursor-pointer hover:bg-blue-400">Copy</button>
        <div className="flex justify-center mt-4 p-1 overflow-hidden">
          <input type="range" 
          id="rangeInput"
          max={20}
          min={2}
          className="   lg:w-[30%] sm:w-[35%]  "
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label htmlFor="rangeInput" className="m-2" value={length}>
            length({length})
          </label>
          <input
            type="checkbox"
            defaultChecked={number}
            id="numberInput"
            value={number}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
          />
          <label htmlFor="numberInput" className="m-2">Number</label>
          <input
            type="checkbox"
            defaultChecked={character}
            id="characterInput"
            value={number}
            onChange={prev=>!prev}
          />
          <label htmlFor="characterInput" className="m-2">character</label>
        </div>
      </div>
    </div>
  );
}
export default PasswordGenerator;
