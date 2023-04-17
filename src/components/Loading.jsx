import React from 'react'

const Loading = () => {
  return (
    <div className='flex items-center mt-[100px] justify-center h-[100px] bg-transparent'>
      <div className='spinner'>
        <div class='double-bounce1'></div>
        <div class='double-bounce2'></div>
      </div>
    </div>
  )
}

export default Loading
