import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Guidelines = () => {
  return (
    <div>
      <Navbar />

      <div className='p-4 mx-5 my-3 font-Poppins'>

        <div className='my-4'>
          <h2 className='text-lg text-red-800 font-semibold'>
            Overview
          </h2>
          <p className='text-md mt-4'>
            The Somaiya Vidyavihar Awards have been instituted to recognize and honor the outstanding
            contributions and commitment of its Faculty and Staff towards the achievement of the Mission
            and Vision of the Institute.
          </p>
        </div>

        <div className='my-4'>
          <h2 className='text-lg text-red-800 font-semibold'>
            Coverage
          </h2>
          <p className='text-md mt-4 ml-[5rem]'>
            <ol>
              <li style={{ listStyle: 'circle' }}>
                All Educational Institutes of Somaiya Vidyavihar & Somaiya Vidyavihar University
              </li>
              <li style={{ listStyle: 'circle' }}>
                All Allied Institutions and Initiatives of Somaiya Vidyavihar which include Somaiya Centre
                of Experiential Learning, Riidl, Somaiya Sports Academy, Somaiya Music School.
              </li>
              <li style={{ listStyle: 'circle' }}>
                Somaiya Ayurvihar – which include Medical College and Hospital, Physiotherapy and
                Nursing Colleges.
              </li>
              <li style={{ listStyle: 'circle' }}>
                Girivanvasi Pragati Mandal & Nareshwadi Learning Centre
              </li>
              <li style={{ listStyle: 'circle' }}>
                Somaiya Vidyavihar Trust Employees
              </li>
            </ol>
          </p>
        </div>


        <div className='my-4'>
          <h2 className='text-lg text-red-800 font-semibold'>
            Eligibility
          </h2>
          <p className='text-md mt-4 ml-[5rem]'>

            <ol>
              <li style={{ listStyle: 'circle' }}>
                Any full-time faculty, full-time non-teaching staff member and students of the Somaiya
                Educational Institutes/Trust
              </li>
              <li style={{ listStyle: 'circle' }}>
                Should comply with criteria specified against each category
              </li>
            </ol>

          </p>
        </div>

        <div className='my-4'>
          <h2 className='text-lg text-red-800 font-semibold'>
            Who can Nominate?
          </h2>
          <p className='text-md mt-4 ml-[5rem]'>

            <ol>
              <li style={{ listStyle: 'circle' }}>
                Heads of Institutes & Heads of Departments
              </li>
              <li style={{ listStyle: 'circle' }}>
                IAEC – Internal Awards Evaluation Committee.
              </li>
              <li style={{ listStyle: 'circle' }}>
                Award Committee
              </li>
              <li style={{ listStyle: 'circle' }}>
                Management
              </li>
            </ol>

          </p>
        </div>


        <div className='my-4'>
          <h2 className='text-lg text-red-800 font-semibold'>
            Some Basic Rules
          </h2>
          <p className='text-md mt-4 ml-[5rem]'>

            <ol>
              <li style={{ listStyle: 'circle' }}>
                The nomination and selection process for these awards is for all full-time faculty members,
                all full-time non-teaching staff members, and students.
              </li>
              <li style={{ listStyle: 'circle' }}>
                Awards Committee/HOI/HOD are requested to avoid nominating past winners for the
                next five consecutive years.
              </li>
              <li style={{ listStyle: 'circle' }}>
                No awards will be granted to applicants who do not meet the specified criteria.
              </li>
              <li style={{ listStyle: 'circle' }}>
                Management of the Somaiya Trust has the sole right to determine the appropriate way in
                which the winners are honored.
              </li>
              <li style={{ listStyle: 'circle' }}>
                In the case of low nominations received for any category of award, independently
                Management can nominate members for that category.
              </li>
            </ol>

          </p>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default Guidelines;
