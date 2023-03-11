import React, { useRef } from "react";

const InputButtons = ({ btn, nameFor, handleSelect }) => {
 const inputRef = useRef()
  const handleInput = ()=>{
    if(inputRef.current.value){
      handleSelect(nameFor, inputRef.current.value)
    }
  }
  return (
    <div>
      <label htmlFor={btn} className='border py-2 px-4 peer-checked:bg-red'>
        {btn}:
        <input type='number' ref={inputRef}  onChange={handleInput} placeholder='0' className="w-24 ml-1 px-1 placeholder:text-gray-700"/>
      </label>
    </div>
  );
};

export default InputButtons;
