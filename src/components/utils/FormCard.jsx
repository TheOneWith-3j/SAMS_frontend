import React, { useState } from 'react';
import {Link} from 'react-router-dom'

const FormCard = (props) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className='flex justify-center'>
      <div
        className='relative w-[70%] h-[20rem] shadow-2xl bg-white rounded-sm'
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <img src={props.image} className='w-full h-full object-cover' alt='Sports' />
        <div
          id='card'
          className={`w-full ${hovered ? 'h-full opacity-80' : 'h-[8rem] opacity-50'} transition-all duration-500 rounded-t-lg bottom-0 absolute bg-black`}
        >
          <div className='p-1'>
            <div>
              <h2 className='font-Poppins text-xl text-white ml-[5%] py-2'>
                {props.title}
              </h2>
              <p className='text-sm font-Poppins text-white p-2'>
                {props.info}
              </p>

            {
              hovered
              ?
              <>
               <Link to={props.link}>
               <div className='text-black font-Poppins font-semibold bg-amber-600 hover:bg-amber-700 absolute bottom-0 right-0 m-10 p-3 rounded-lg text-center w-[6rem]  bg-opacity-100'>
                  Link
                </div>
               </Link>
              </>
              :
              null
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormCard;
