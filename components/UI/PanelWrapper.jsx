import React from 'react'

const PanelWrapper = ({children}) => {
  return (
    <div className="p-3 pr-2 flex flex-col bg-white w-[100%] h-[100%] rounded-2xl m-2 sm:m-4 smrev:p-2">
    <div className='overflow-y-auto'>
    <div className="mr-4 p-1">
        {children}
    </div>
    </div>
    </div>
  )
}

export default PanelWrapper