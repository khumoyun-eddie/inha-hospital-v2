import React from "react";
import { Outlet, Link } from "react-router-dom";
const Navigation = () => {
  return (
    <>
      <header className='flex items-center'>
        <h2 className='text-center basis-48'>Organ</h2>
        <div className='space-x-2'>
          <Link
            className=''
            to='/organs/stomach'
          >
            stomach
          </Link>

          <Link
            className=''
            to='/organs/rectum'
          >
            rectum
          </Link>
        </div>
      </header>

      <Outlet />
    </>
  );
};

export default Navigation;
