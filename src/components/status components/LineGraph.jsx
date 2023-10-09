import React from 'react'
import {LineChart , Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer} from 'recharts'

const LineGraph = (props) => {

    const data = props.data

      
  return (
    <div className='flex justify-center p-5 rounded-lg  bg-[#FDFBFA]'>
      <ResponsiveContainer width={800} height={250}>
      <LineChart width={800} height={250} data={data} margin={{ top: 5,  bottom: 5 }}>
      <XAxis dataKey='date' />
      <YAxis />
      <Tooltip />
        <Line isAnimationActive={true} type={'linear'} dataKey="formsFilled" stroke='#0c64f2' strokeWidth={2} />
      </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default LineGraph
