import React from "react";
import RowSection from "../RowSection/RowSection";

const RowItem = ({row}) => {
  // const { title, types } = data;
  return (
    <div className='flex border-b-2 border-blue-light'>
      <div className='basis-48 flex justify-center items-center border-r-2 border-blue-light flex-shrink-0'>
        <p className='capitalize'>{row.rowTitle}</p>
      </div>
      <div className='px-10 py-4 flex flex-col gap-8 flex-grow-0'>
        {row.sections.map((item) => (
          <RowSection item={item} key={Math.random()} />
        ))}
      </div>
    </div>
  );
};

export default RowItem;
