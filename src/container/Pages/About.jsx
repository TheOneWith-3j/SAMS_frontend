import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const About = () => {
  return (
    <div className='font-Poppins bg-gray-200 h-screen'>
      <Parallax pages={3} style={{ top: '0', left: '0' }}>

        {/* NAVBAR PARALLAX */}
        <ParallaxLayer sticky={{ start: 0, end: 0 }}>
          <Navbar />
        </ParallaxLayer>

        {/* PARALLAX ABOUT KJSIT */}
        <ParallaxLayer offset={0.1} speed={0.5}>
          <div className='w-full h-[70rem] bg-red-800'>

          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={0.2} speed={0.1}>
          <div className='text-center h-screen p-10 flex'>
            <div>

              <p className='text-2xl text-white -mt-[3rem] mb-[2rem] font-Poppins font-semibold'>About K.J Somaiya Institute Of Technology</p>
              <p className='text-sm mt-5 w-[50%] text-justify text-white font-Poppins'>
                This second Engineering College established by the Somaiya Trust in the year 2001, at Ayurvihar campus, Sion, was initiated with a first batch of 180 undergraduate students and three branches in Engineering—namely Electronics and Telecommunication Engineering, Computer Engineering, and Information Technology.
              </p>

              <p className='text-sm mt-5 w-[50%] text-justify text-white font-Poppins'>
                KJSIT is recognized by the All India Council for Technical Education (AICTE) & the Govt. of Maharashtra with a permanent affiliation to the University of Mumbai (UOM). It is accredited with “A” Grade and 3.21 CGPA in its 1 st cycle for 5 years duration by National Assessment and Accreditation Council (NAAC) and it’s three programs - Computer Engineering, Electronics and Telecommunication Engineering and Electronics Engineering - are accredited by National Board of Accreditation. KJSIT is bestowed upon the “BEST COLLEGE AWARD” by the University of Mumbai in urban region and “Best Engineering College Award" by CSI local chapter and also from ISTE Maharashtra and Goa Section.
              </p>

              <p className='text-sm mt-5 w-[50%] text-justify text-white font-Poppins'>
                Moreover, KJSIT has introduced a Post Graduate engineering program in Artificial Intelligence from the Academic Year 2019-20.
              </p>

              <p className='text-sm mt-5 w-[50%] text-justify text-white font-Poppins'>
                Additionally, an undergraduate engineering program - Artificial Intelligence and Data Science - has been offered by KJSIT from the academic year 2020-21 with the intake capacity of 60 seats leading the total intake increased to 360. KJSIT is constantly identifying and developing latest and nascent technologies such as Artificial Intelligence, Machine Learning, Deep Learning and Blockchain Technology, etc. for enhancing student learning and growth.
              </p>

              <p className='text-sm mt-5 w-[50%] text-justify text-white font-Poppins'>
                University Grants Commission has conferred Autonomous Status to K J Somaiya Institute of Technology, for a period of 10 years from the A.Y. 2021-22 to A.Y. 2030-31 as per the provisions of Clause 3.13 and Clause 6.4 (i) of UGC Regulations dated 12.02.2018, whereby the Degree will be awarded by the University of Mumbai.
              </p>
            </div>
            <div>
              <ParallaxLayer offset={0.2} speed={1.1}>
                <div className='flex h-[70%] -mr-[6rem] w-auto items-center justify-end'>
                  <svg id="10015.io" viewBox="0 0 480 480" width={700} height={700} xmlns="http://www.w3.org/2000/svg" >
                    <defs>
                      <clipPath id="blob">
                        <path fill="#474bff" d="M432,292.5Q422,345,376.5,371.5Q331,398,285.5,428.5Q240,459,180.5,452.5Q121,446,105.5,386Q90,326,46.5,283Q3,240,42.5,194.5Q82,149,113.5,112.5Q145,76,192.5,43.5Q240,11,294.5,31.5Q349,52,392,89.5Q435,127,438.5,183.5Q442,240,432,292.5Z" />
                      </clipPath>
                    </defs>
                    <image x="0" y="0" width="100%" height="100%" clip-path="url(#blob)" href="https://media.getmyuni.com/reviews/84319__30028/1560324141IMG_20180831_112742-min%20(1).jpg" preserveAspectRatio="xMidYMid slice"></image>
                  </svg>
                </div>
              </ParallaxLayer>
            </div>


          </div>
        </ParallaxLayer>



        {/* PARALLAX DEPT COMP ENGG */}
        <ParallaxLayer offset={1.2} speed={0}>
          <div className='w-full bg-gray-200 h-[60rem] '>

          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.4} speed={0.2}>

          <div className='flex p-10 w-full'>
            <div className='w-[50%]'>
              <ParallaxLayer speed={0.4}>
                <div className='flex -ml-[13rem] justify-start items-center'>
                  <svg id="10015.io" viewBox="0 0 480 480" height={800} width={800} xmlns="http://www.w3.org/2000/svg" >
                    <defs>
                      <clipPath id="blob">
                        <path fill="#474bff" d="M414.5,275Q410,310,403.5,353.5Q397,397,355,406.5Q313,416,276.5,437Q240,458,199.5,447Q159,436,121.5,416Q84,396,76,353.5Q68,311,61,275.5Q54,240,62.5,205Q71,170,84,133.5Q97,97,131,78Q165,59,202.5,59Q240,59,281,50Q322,41,348.5,73Q375,105,387.5,139.5Q400,174,409.5,207Q419,240,414.5,275Z" />
                      </clipPath>
                    </defs>
                    <image x="0" y="0" width="100%" height="100%" clip-path="url(#blob)" href="https://lh3.googleusercontent.com/p/AF1QipOb2AYMk2MQOeLUi5ABExXbV1PZ81zwCnjpdJwX=s0" preserveAspectRatio="xMidYMid slice"></image>
                  </svg>
                </div>
              </ParallaxLayer>
            </div>
            <div className='w-[50%] '>
              <h2 className='font-Poppins text-xl text-red-800 font-semibold'>
                About Department Of Computer Engineering
              </h2>
              <p className='text-sm text-slate-900 my-3 mt-10 text-justify'>
                The Computer Engineering department was established in the year 2001 to impart quality education. The department has well-qualified and motivated faculty members and support staff. The laboratories are adequately equipped with state-of-the-art facilities. The students are members of various professional bodies like IET, CSI, IEEE, NSS etc. Various platforms are available for students, like project competition, technical & cultural festivals, international conference, etc. to showcase their talent. It is a regular practice of the department to organize industrial visits, expert talks, workshops and internships in addition to the latest certification courses for students in the field of Computer engineering. Students have won prizes in various national and international level paper presentations, competitions, project exhibitions, etc. As the department has good industry interaction and alumni support, students get several opportunities for internships, project guidance, placement, and many more.
              </p>

              <h2 className='font-Poppins text-md my-3 mt-10 text-red-800 font-semibold'>
                Vision
              </h2>
              <p className='text-sm text-slate-900  text-justify'>
                To be an excellent center of learning, imparting quality education and creating computer competent professionals to serve the society at large.
              </p>

              <h2 className='font-Poppins text-md my-3 mt-10 text-red-800 font-semibold'>
                Mission
              </h2>
              <p className='text-sm text-slate-900 text-justify'>
                <ul style={{ listStyle: 'circle', paddingLeft: '1rem' }}>
                  <li className=''>
                    To provide quality education required to shape skilled computer engineers.
                  </li>
                  <li className=''>
                    To promote scientific temper and research culture through interdisciplinary and industrial collaboration.
                  </li>
                  <li className=''>
                    To prepare industry-ready professionals, having ethical values and social commitment.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </ParallaxLayer>


        {/* Page 3 FOOTER */}
        <ParallaxLayer offset={2.7} speed={0.2}>
          <div className='h-[60rem]'>
            <Footer />
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default About;
