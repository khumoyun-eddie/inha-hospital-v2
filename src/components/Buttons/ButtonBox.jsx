import { useEffect, useState } from "react";

const ButtonBox = ({ button, selectionType, nameFor }) => {
  const { label, hasInput, resultValue } = button;
  const [inputType, setInputType] = useState("checkbox");

  useEffect(() => {
    if (selectionType === "multiple") {
      hasInput ? setInputType("number") : setInputType("checkbox");
    }
    if (selectionType === "single") {
      setInputType("radio");
    }
  }, [selectionType, hasInput]);

  return (
    <div>
      <label
        htmlFor={label}
        className='px-4 py-2 border hover:bg-gray-200 hover:text-white peer-checked:bg-red'
      >
        {label}
        <input
          type={inputType}
          name={nameFor}
          className={`${hasInput ? "btn-input" : "hidden"} peer`}
          placeholder={hasInput ? 0: ''}
        />
      </label>
    </div>
  );
};

export default ButtonBox;
