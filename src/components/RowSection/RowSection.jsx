import React, { useContext } from "react";
import { RectumContext } from "../../context/rectumContext";
import { actionCreator } from "../../utils/actionCreator";
import InputButtons from "../Buttons/InputButtons";
import MultipleSelectButtons from "../Buttons/MultipleSelectButtons";
import SingleSelectButtons from "../Buttons/SingleSelectButtons";

const RowSection = ({ item }) => {
  const { sectionTitle, selectType, buttonsList, nameFor, subButtonsList } = item;
  const {dispatch} = useContext(RectumContext)
  const handleSelect = (selectedType, selectedValue)=>{
    dispatch(actionCreator(selectedType, selectedValue))
  }

  return (
    <div className='flex gap-5 items-center flex-wrap'>
      {sectionTitle && <p className='capitalize'>{sectionTitle}: </p>}
      <div className='flex gap-5'>
       {buttonsList.map((btn)=>{
        return (
          <React.Fragment key={Math.random()}>
          {selectType === 'single' && <SingleSelectButtons handleSelect={handleSelect}  nameFor={nameFor} btn={btn}/>}
          {selectType === 'multiple' && <MultipleSelectButtons handleSelect={handleSelect} nameFor={nameFor} btn={btn}/>}
          {selectType === 'input' && <InputButtons handleSelect={handleSelect} nameFor={nameFor} btn={btn}/>} 
          </React.Fragment>
        )
       })}
      </div>
      <div className="flex gap-5 flex-wrap ml-8">
       {subButtonsList?.map(btn=>(
        <MultipleSelectButtons key={Math.random()} btn={btn}/>
       ))}
      </div>
    </div>
  );
};

export default RowSection;
