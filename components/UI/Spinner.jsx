import React from 'react'

const Spinner = (props) => {
  return (
    <div style={{width:props.size,height:props.size}} className={`bg-transparent rounded-full border-t-primary animate-spin border-8 bg-primary`}></div>
  )
}

export default Spinner