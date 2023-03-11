import { createContext, useReducer, useState } from "react";
import produce from 'immer'
const initial = {
    position:[],
    sphincterInvasion:'',
    rectumSize:'',
    morphologyShape:'',
    mucinous:'',
    peritonealReflection:'',
    mrf:[],
    tStage:'',
    nStage:'',
    nSubStage:'',
    mStage:'',
    mSubStage:''
}

const reducer = (state, action)=>{

    switch (action.type) {
        case 'position':
            const existingValue = state.position.indexOf(action.payload)
            if(existingValue === -1){
                state.position.push(action.payload)
                return 
            }
          
             state.position = state.position.filter(item=> item !== action.payload)
            break
        case 'sphincterInvasion':
                state.sphincterInvasion = action.payload
                break
        case 'rectumSize':
                state.rectumSize = action.payload
                break
        case 'mucinous':
                state.mucinous = action.payload
                break
        case 'peritonealReflection':
                state.peritonealReflection = action.payload
                break             
        case 'mrf':
            const existingMRF = state.mrf.indexOf(action.payload)
            if(existingMRF === -1){
                state.mrf.push(action.payload)
                return 
            }
          
             state.mrf = state.mrf.filter(item=> item !== action.payload)
            break
        case "tStage":
            state.tStage = action.payload
            break

        default:
            return state
    }
}

export const RectumContext = createContext({
    state:{},
    dispatch:()=>null
})

export const RectumProvider = ({children})=>{
    const [state, dispatch] = useReducer(produce(reducer), initial)
    const value={state, dispatch}
    return(
        <RectumContext.Provider value={value}>{children}</RectumContext.Provider>
    )
}