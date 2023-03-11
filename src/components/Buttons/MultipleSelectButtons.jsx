import React, { useContext } from 'react'
import { RectumContext } from '../../context/rectumContext';

const MultipleSelectButtons = ({btn, nameFor, handleSelect}) => {
  const {state} = useContext(RectumContext)

  const selectHandle = ()=>{
    handleSelect(nameFor,btn)
  }

  return (
    <div >
        <input type='checkbox' name={nameFor} id={btn} onChange={selectHandle} value={btn} className='hidden peer' checked={state[nameFor]?.includes(btn)} />
        <label htmlFor={btn} className='border py-2 px-4 hover:bg-gray-200 hover:text-white peer-checked:bg-red'>
          {btn}
        </label>
    </div>
  )
}

export default MultipleSelectButtons