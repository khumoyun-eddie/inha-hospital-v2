import React from 'react'
import { RectumProvider } from './rectumContext';

const Provider = ({children}) => {
  return (
    <RectumProvider>{children}</RectumProvider>
  )
}

export default Provider