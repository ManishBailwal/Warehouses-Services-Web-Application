import React from 'react'

const FormWrapper = ({children,className}) => {
  return (
    <div className={`grid grid-cols-3 lgrev:grid-cols-1 gap-4 my-2 ${className}`}>{children}</div>
  )
}

export default FormWrapper