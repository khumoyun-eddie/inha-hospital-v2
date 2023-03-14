import React, { useContext } from "react";
import { RectumContext } from "../../context/rectumContext";

const SingleSelectButtons = ({ btn, nameFor,handleSelect }) => {
  const {state} = useContext(RectumContext)

  const selectHandle = ()=>{
    handleSelect(nameFor,btn)
  }
  return (
    <div>
      <input
        type='radio'
        name={nameFor}
        id={btn}
        value={btn}
        onChange={selectHandle}
        checked={state[nameFor] === btn}
        className='hidden peer'
      />
      <label
        htmlFor={btn}
        className='px-4 py-2 border hover:bg-gray-200 hover:text-white peer-checked:bg-red'
      >
        {btn}
      </label>
    </div>
  );
};

export default SingleSelectButtons;
