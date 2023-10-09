import React from 'react'

const FormInfo = (props) => {
    return (
        <div className=''>
            <div className='relative w-full h-[11rem] bg-red-700'>

                <div className='absolute w-[90%]'>
                    <div className='flex'>
                        <div className={`${props.info === undefined ? "w-[90%]" : null } p-5  bg-white ml-5 mt-5`}>
                            <h2 className='text-3xl font-Roboto  font-semibold px-3'> {props.title} </h2>
                            <p className='text-sm text-black font-Poppins p-3 text-justify '>
                                {props.info}
                            </p>
                        </div>
                        <div className='w-16 h-[11rem] bg-red-600'>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormInfo
