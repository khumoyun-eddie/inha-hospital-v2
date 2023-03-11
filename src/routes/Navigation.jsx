import React from "react";
import { Outlet, Link } from "react-router-dom";
const Navigation = () => {
  return (
    <>
      <header className='header'>
        <h2 className='header__title'>Organ</h2>
        <div className='navigation'>
          <Link
            className='navigation__link btn btn--link'
            to='/esophagus'
          >
            Esophagus
          </Link>
          <Link
            className='navigation__link btn btn--link'
            to='/stomach'
          >
            stomach
          </Link>
          <Link
            className='navigation__link btn btn--link'
            to='/duodenum'
          >
            duodenum
          </Link>
          <Link
            className='navigation__link btn btn--link'
            to='/small bowel'
          >
            small bowel
          </Link>
          <Link
            className='navigation__link btn btn--link'
            to='/colon'
          >
            colon
          </Link>
          <Link
            className='navigation__link btn btn--link'
            to='/appendix'
          >
            appendix
          </Link>
          <Link
            className='navigation__link btn btn--link'
            to='/rectum'
          >
            rectum
          </Link>
          <Link
            className='navigation__link btn btn--link'
            to='/anus'
          >
            anus
          </Link>
        </div>
      </header>
    
        
        <Outlet />
    </>
  );
};

export default Navigation;
