import React from "react";
import RowSection from "../RowSection/RowSection";

const RowItem = ({row}) => {
  return (
    <div className='flex border-b-2 border-blue-light'>
      <div className='flex items-center justify-center flex-shrink-0 border-r-2 basis-48 border-blue-light'>
        <p className='capitalize'>{row.rowTitle}</p>
      </div>
      <div className='flex flex-col flex-grow-0 gap-8 px-10 py-4'>
        {row.sections.map((item) => (
          <RowSection rowSection={item} key={Math.random()} />
        ))}
      </div>
    </div>
  );
};

export default RowItem;
