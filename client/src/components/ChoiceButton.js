import React from 'react'

const ChoiceButton = ({children, ...rest}) => (
  <button {...rest}>{children}</button>
)
export default ChoiceButton