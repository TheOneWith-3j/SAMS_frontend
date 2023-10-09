import React from 'react'

const returnSteps = (value , handleClick) => {
  return (
    <div onClick={handleClick} className='p-3 shadow-xl stages font-Poppins font-semibold active:bg-red-500 active:text-white active:font-bold mx-2 hover:cursor-pointer flex items-center justify-center rounded-full border-4 border-red-600 bg-white  text-center w-[40px] h-[40px]'>
      {value}
    </div>
  )
}


const FormStages = (props) => {
  return (
    <div className='p-3 mb-[3rem]  mt-[6rem]'>
      <div className='w-[70%] mx-auto'>
        <div className='relative flex justify-center'>

          <div className=' border-2 border-red-600 absolute w-[90%] top-[50%] -z-10'>

          </div>
          {props.stages.map(
            (element) => {
              return (
                returnSteps(element.value , props.onClick)
              )
            }
          )}


        </div>
      </div>
    </div>
  )
}

export default FormStages
