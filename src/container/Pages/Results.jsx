import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import * as XLSX from "xlsx";
import axios from 'axios'
import CreditFooter from '../../components/CreditFooter';

const Results = () => {

  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {

    let data;

    axios.get('http://localhost:5001/admin/data/results', {})
      .then((res) => {

        let url = `http://localhost:5001${res.data.data[0].result.split('data')[1]}`

        axios.get(url, { responseType: "arraybuffer" })
          .then((res) => {

            const excelData = new Uint8Array(res.data);

            const workbook = XLSX.read(excelData, { type: "array" });
            const worksheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[worksheetName];
            const jsonDataRaw = XLSX.utils.sheet_to_json(worksheet);
            setJsonData(jsonDataRaw);
          })
      })
      .catch((err) => {
        console.log(err);
      })


  }, [])

  return (
    <div>
      <Navbar />
      <div className='h-[45rem] w-full bg-white'>
        <div className='flex justify-center  my-5'>
          {
            jsonData.length == 0
              ?
              <p>Results Yet to be Announced ...</p>
              :
              <>
                <div className='flex flex-col w-full items-center justify-center'>
                  <h2 className='text-red-800 font-Poppins font-semibold text-xl my-5 '>
                    Congratulations to All the Winners 🎊
                  </h2>
                  <table className='w-[80%] font-Poppins '>
                    <thead className='border-2 border-slate-800 p-3 text-center '>
                      <tr>
                        <th className='border-2 border-slate-800 p-3 text-center '>Name</th>
                        <th className='border-2 border-slate-800 p-3 text-center '>Institution</th>
                        <th className='border-2 border-slate-800 p-3 text-center '>Category</th>
                      </tr>
                    </thead>
                    <tbody className='border-2 border-slate-800'>
                      {jsonData.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-gray-200" : "bg-white"} >
                          <td className='border-2 border-slate-800 p-3 text-center '>{row["Name"]}</td>
                          <td className='border-2 border-slate-800 p-3 text-center '>{row["Institution"]}</td>
                          <td className='border-2 border-slate-800 p-3 text-center '>{row["Category"]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </>
          }

        </div>
      </div>
      <Footer />
      <CreditFooter/>
    </div>
  )
}

export default Results
