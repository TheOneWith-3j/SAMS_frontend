import React from 'react'
import FunctionsRoundedIcon from '@mui/icons-material/FunctionsRounded';
import CountUp from 'react-countup'

const Box = (props) => {
    return (
        <div>
            <div className='w-42 rounded-lg p-3 m-5 my-7 b bg-gradient-to-br from-[#e52d27] to-[#b31217] text-xs font-Poppins text-white'>
                <div className='flex flex-row justify-between items-center'>
                    <div className='mr-1'>
                        {props.title}
                    </div>
                    <div>
                        <FunctionsRoundedIcon style={{scale:'0.7'}}/>
                    </div>
                </div>
                <div className='py-3 text-lg text-center'>
                    <CountUp 
                        end={props.count}
                        duration={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Box
