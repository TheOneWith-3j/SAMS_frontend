import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="flex w-full font-Poppins py-3 px-2 bg-gray-300">
        <div className="p-3 w-[30%] ml-10">
          <h2 className="font-semibold my-4 "> Quick Links</h2>
          <ul>
            <li className="text-slate-800 hover:scale-105 transition-all duration-500 ">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="text-slate-800 hover:scale-105 transition-all duration-500 ">
              <Link to={"/auth/login"}>Login</Link>
            </li>
            <li className="text-slate-800 hover:scale-105 transition-all duration-500 ">
              <Link to={"/results"}>Results</Link>
            </li>
            <li className="text-slate-800 hover:scale-105 transition-all duration-500 ">
              <Link to={"/guidelines"}>Guidelines</Link>
            </li>
          </ul>
        </div>

        <div className="w-[70%] p-3">
          <div className="w-full text-center flex flex-col items-center ">
            <img src="https://kjsit.somaiya.edu.in/assets/kjsieit/images/Logo/kjsieit-logo.svg" />
            <h2 className="mt-5 text-sm">Designed and Developed by</h2>
            <h2 className="font-Poppins text-xs mt-2">
              Department Of Computer Engineering
            </h2>
            <h2 className="font-semibold text-sm">
              K.J Somaiya Institute of Technology
            </h2>
            <p className="mt-4 text-sm">
              All Rights Reserved | {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full font-Poppins bg-[#083c7c] text-white py-6">
        <div className="w-full text-center flex flex-col items-center my-3">
          <h2 className="font-bold text-lg"> Under the guidance of</h2>
          <table className="w-[40%] font-m my-2">
            <tr>
              <td>Dr. Sarita Ambadekar</td>
              <td>Prof. Abhijit Patil</td>
              <td>Ms. Aarti Sahitya</td>
            </tr>
          </table>
          <br></br>
          <h2 className="font-bold text-lg">Developed by</h2>
          {/* <br></br> */}
          <div className="grid grid-cols-1 md:grid-cols-8 gap-6 my-2">
            <div className=" md:-order-1 order-1">
              <a href="https://linkedin.com/in/jash-joshi01/" target="_blank">
                Jash J. Joshi
              </a>
            </div>
            <div className=" md:-order-1 order-1">
              <a
                href="https://linkedin.com/in/riya-kapadia-a571401bb/"
                target="_blank"
              >
                Riya Kapadia
              </a>
            </div>
            <div>
              <a
                href="https://linkedin.com/in/trushil-dhokiya/"
                target="_blank"
              >
                Trushil Dhokiya
              </a>
            </div>
            <div>
              <a
                href="https://linkedin.com/in/hitanshu-gandhi-92b855244/"
                target="_blank"
              >
                Hitanshu Gandhi
              </a>
            </div>
            <div>
              <a href="https://linkedin.com/in/kushal-harsora" target="_blank">
                Kushal Harsora
              </a>
            </div>
            <div>
              <a
                href="https://linkedin.com/in/swaraj-dusane-35941722b"
                target="_blank"
              >
                Swaraj Dusane
              </a>
            </div>
            <div>
              <a
                href="https://linkedin.com/in/yash-chauhan-180031203"
                target="_blank"
              >
                Yash Chauhan
              </a>
            </div>
            <div>
              <a
                href="https://linkedin.com/in/yashkumar-dubey-716933222"
                target="_blank"
              >
                Yashkumar Dubey
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
