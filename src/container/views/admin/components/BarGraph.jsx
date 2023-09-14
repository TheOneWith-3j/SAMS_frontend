import React from 'react'
import { BarChart, ResponsiveContainer, XAxis, YAxis, Legend, Tooltip, Bar } from 'recharts'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const BarGraph = (props) => {

    return (

        <div className='mt-5'>

            {
                props.data
                    ?
                    <>
                        <ResponsiveContainer width={300} height={250}>
                            <BarChart data={props.data}>
                                <XAxis dataKey="name" />
                                <YAxis dataKey='AvgScore' />
                                <Tooltip />
                                <Legend />
                                <Bar barSize={20} dataKey="AvgScore" fill="#8884d8" />
                            </BarChart>
                        </ResponsiveContainer>
                    </>
                    :
                    <>

                        <Skeleton height={250} width={300} />
                    </>


            }

        </div>
    )
}

export default BarGraph
