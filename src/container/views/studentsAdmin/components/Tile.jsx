import React from 'react'

const Tile = (props) => {
    return (
        <div className='my-4'>

            <h2 className='text-lg font-semibold text-red-800'>
                {props.title}
            </h2>
            <p className='text-sm mt-3'>
                {props.text}
            </p>
        </div>
    )
}

export default Tile
