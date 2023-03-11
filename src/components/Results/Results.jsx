import React, { useContext } from 'react'
import { RectumContext } from '../../context/rectumContext';

const Results = () => {
   const{state}= useContext(RectumContext)
   const {
    position,
    sphincterInvasion,
    rectumSize,
    morphologyShape,
    mucinous,
    peritonealReflection,
    mrf,
    tStage,
    nStage,
    nSubStage,
    mStage,
    mSubStage
   }= state
  return (
    <div className='flex-1 border-b-2 border-blue-light px-4 py-2'>
        <h3>Results</h3>
        <div>
           {position.length >= 1 && <p>{position?.join(' ')} rectum</p>}
           {sphincterInvasion && <p>{sphincterInvasion} sphincter invasion</p>}
           {rectumSize && <p><span className='text-red'>{rectumSize}</span> cm in craniaocaudal length</p>}
           {mucinous && <p>{mucinous}</p>}
           {peritonealReflection && <p>{peritonealReflection} peritoneal reflection</p>}
           {mrf && <p>{mrf?.join(' ')}</p>}
           
        </div>
    </div>
    )
}

export default Results