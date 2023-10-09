import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import TableData from '../../data/Institutions/TableData';

const Groups = () => {

    return (
        <div >
            <Navbar />
            <div className="p-4 flex justify-center items-center font-Poppins text-md font-semibold">
                <div className="w-full p-5 my-5 ml-5">
                    <table className="custom-table border-2 border-black w-full">
                        <thead>
                            <tr className="">
                                <th>Group</th>
                                <th className=" p-3 border-2 border-slate-600 bg-teal-200">Group 1</th>
                                <th className=" p-3 border-2 border-slate-600 bg-indigo-200">Group 2</th>
                                <th className=" p-3 border-2 border-slate-600 bg-orange-200">Group 3</th>
                                <th className=" p-3 border-2 border-slate-600 bg-blue-200">Group 4</th>
                            </tr>
                        </thead>
                        <tbody>
                            {TableData.map((row, index) => (
                                <tr key={index} className="border-2 border-slate-600 text-center">
                                    <td className="bg-white border-2 border-slate-600">
                                    <div className='p-3'>
                                        {index==0 ? "Sr.No" : index}
                                    </div>
                                    </td>
                                    <td className="bg-teal-200 border-2 border-slate-600">
                                    <div className='p-3'>
                                        {row.col2}
                                    </div>
                                    </td>
                                    <td className="bg-indigo-200 border-2 border-slate-600">
                                    <div className='p-3'>
                                        {row.col3}
                                    </div>
                                    </td>
                                    <td className="bg-orange-200 border-2 border-slate-600">
                                    <div className='p-3'>
                                        {row.col4}
                                    </div>
                                    </td>
                                    <td className="bg-blue-200 border-2 border-slate-600">
                                    <div className='p-3'>
                                        {row.col5}
                                    </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Groups;
