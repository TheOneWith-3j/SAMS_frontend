import React from 'react'

const Tile = (props) => {
  return (
    <div className='p-2 font-Poppins'>
      
      <h3 className='text-red-800 font-semibold'>
        {props.title}
      </h3>

      <p className=' ml-3 my-1 text-sm'>
        {props.info}
      </p>
      {
        props.image!==null
        ?
        <>
            <img className='p-1 mix-blend-multiply' src={props.image} />
        </>
        :
        null
      }


    </div>
  )
}

export default Tile
