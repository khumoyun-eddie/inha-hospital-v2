import React, { useContext } from "react";
import { RectumContext } from "../../context/rectumContext";
import { actionCreator } from "../../utils/actionCreator";
import ButtonBox from "../Buttons/ButtonBox";
import InputButtons from "../Buttons/InputButtons";
import MultipleSelectButtons from "../Buttons/MultipleSelectButtons";
import SingleSelectButtons from "../Buttons/SingleSelectButtons";

const RowSection = ({ rowSection }) => {
  const { sectionTitle, selectType, buttonsList, nameFor, subButtonsList } = rowSection;
  const { dispatch } = useContext(RectumContext);
  
  const handleSelect = (selectedType, selectedValue) => {
    dispatch(actionCreator(selectedType, selectedValue));
  };

  return (
    <div className='flex flex-wrap items-center gap-5'>
      {sectionTitle && <p className='capitalize'>{sectionTitle}: </p>}
      <div className='flex gap-5'>
        {buttonsList.map((btn,i) => (
          <ButtonBox
            key={i}
            button={btn}
            selectionType={selectType}
            nameFor={nameFor}
          />
        ))}
      </div>
      <div className='flex flex-wrap gap-5 ml-8'>
      {subButtonsList?.map((btn,i) => (
          <ButtonBox
            key={i}
            button={btn}
            selectionType='multiple'
            nameFor={nameFor}
          />
        ))}
      </div>
    </div>
  );
};

export default RowSection;
