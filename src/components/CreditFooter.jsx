import React from 'react'
import { Link } from 'react-router-dom'

const CreditFooter = () => {
    return (
        <div className= "flex w-full font-Poppins bg-[#083c7c] text-white">
            <div className="w-full text-center flex flex-col items-center my-3">
                <h2 className='font-bold text-lg'> Under the guidance of</h2>
                <table className='w-[40%] font-m my-2'>
                        <tr>
                            <td>Dr. Sarita Ambadekar</td>
                            <td>Prof. Abhijit Patil</td>
                            <td>Ms. Aarti Sahitya</td>
                        </tr>
                    </table>
                <br></br>
                <h2 className='font-bold text-lg'>Developed by</h2>
                {/* <br></br> */}
                    <table className='w-[70%] my-2'>
                        <tr>
                            <td><a href='https://linkedin.com/in/jash-joshi01/' target='_blank'>Jash J. Joshi</a></td>
                            <td><a href='https://linkedin.com/in/riya-kapadia-a571401bb/' target='_blank'>Riya Kapadia</a></td>
                            <td><a href='https://linkedin.com/in/trushil-dhokiya/' target='_blank'>Trushil Dhokiya</a></td>
                            <td><a href='https://linkedin.com/in/hitanshu-gandhi-92b855244/' target='_blank'>Hitanshu Gandhi</a></td>
                            <td><a href='https://linkedin.com/in/swaraj-dusane-35941722b' target='_blank'>Swaraj Dusane</a></td>
                            <td><a href='https://linkedin.com/in/yash-chauhan-180031203' target='_blank'>Yash Chauhan</a></td>
                            <td><a href='https://linkedin.com/in/yashkumar-dubey-716933222' target='_blank'>Yashkumar Dubey</a></td>
                            <td><a href='https://linkedin.com/in/kushal-harsora' target='_blank'>Kushal Harsora</a></td>
                        </tr>
                    </table>

            </div>
        </div>

    )
}

export default CreditFooter
