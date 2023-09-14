// column structures for HOI analysis part 

/**
 * As HOI can see 5 forms data define 5 columns structue that will be exported for analysis part 
 * We us material UI's GridColDef to define
 * 
 * column01 - outstanding Institution
 * column02 - Research
 * column03 - Sports
 * column04 - Teaching
 * column05 - NonTeaching 
 */

import { GridColDef } from "@mui/x-data-grid";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';


const columns01: GridColDef[] = [
  { field: 'email_id', headerName: 'Email ID', width: 150 },
  { field: 'nomination_category', headerName: 'Nomination Category', width: 200 },
  { field: 'institution_name', headerName: 'Institution Name', width: 200 },
  { field: 'established_In', headerName: 'Established In', width: 150 },
  { field: 'head_of_institution', headerName: 'Head of Institution', width: 200 },
  { field: 'hoi_designation', headerName: 'HOI Designation', width: 200 },
  { field: 'hoi_joining_date', headerName: 'HOI Joining Date', width: 200 },
  { field: 'somaiya_mail_id', headerName: 'Somaiya Mail ID', width: 200 },
  { field: 'contact_number', headerName: 'Contact Number', width: 150 },
  { field: 'q_01', headerName: 'Submit a short paragraph/ summary of why you believe your Institution qualifies for the award.', width: 200 },
  { field: 'q_02', headerName: 'State the awards/certifications received from various national and international accrediting agencies such as AACSB, NAAC, NBA, Govt. Gradings, School boards and Govt. agencies.', width: 200 },
  { field: 'q_03', headerName: 'Has the institution secured any position in the National Institutional Ranking Framework (NIRF) by the HRD Ministry, Govt. of India. If yes, please specify details and attach relevant documents at the end of the form.', width: 200 },
  { field: 'q_04', headerName: 'Has the institution secured any ranking in Industry Journals & periodicals,/ mainline magazines, newspapers. If yes, please specify details and attach relevant documents at the end of the form.', width: 200 },
  { field: 'q_05', headerName: 'Has the HOI or any of the faculty got nominated as Heads of Councils and Committees of outside agencies/ universities. If yes, please specify details and attach relevant documents at the end of the form.', width: 200 },
  { field: 'q_06', headerName: 'Mention the number and list of toppers (students) at University levels or Board levels', width: 200 },
  { field: 'q_07', headerName: 'Comment on the admissions status (total available student intake and vacant seats) and increasing trends for each year of your institution.', width: 200 },
  { field: 'q_08', headerName: 'Specify about any grants received from outside agencies and Governmental bodies’ and about their utilization.', width: 200 },
  { field: 'q_09', headerName: 'Mention the college festivals and events (about any unique events which has benefitted to the campus/society)', width: 200 },
  { field: 'q_10', headerName: 'List the current and market oriented courses introduced this year.', width: 200 },
  { field: 'q_11', headerName: 'Have you organized any national/ international level conferences/ seminar/ exhibition. Please attach a post-show report along with photographs at the end of this form.', width: 200 },
  { field: 'q_12', headerName: 'List all the donations and scholarships received by your Institution.', width: 200 },
  { field: 'q_13', headerName: 'Have you added any new infrastructure or facilities this year ', width: 200 },
  { field: 'q_14', headerName: 'What are the activities undertaken to maintain a hygienic environment within the building and external surroundings ', width: 200 },
  { field: 'q_15', headerName: 'State measures taken to enhance the student experience in your institution.', width: 200 },
  { field: 'q_16', headerName: 'State the frequency of Safety procedures and processes such as fire drills, women’s safety, etc. being conducted. ', width: 200 },
  { field: 'q_17', headerName: 'State the Disaster Management system, Communication strategies with parents in case of emergencies, eg. floods, etc. ', width: 200 },
  { field: 'institution_ratings', headerName: 'Based on the responses given in section B, rate your institution on a scale of 1 to 5, where 1 is very poor and 5 is outstanding', width: 200 },
  { field: 'q_18', headerName: 'List the received external awards at state, national or international competitions in the following areas ● Cultural activities- music, dance, drama, debates ● Sports activities and competitions ● NCC / NSS ● External exams such as NTSE / Olympiads etc ', width: 200 },
  { field: 'q_19', headerName: 'State the parental involvement and contribution for schools such as PTA etc ', width: 200 },
  { field: 'q_20', headerName: 'List the Committees run by students and their significant achievements ', width: 200 },
  { field: 'q_21', headerName: 'List and provide a brief synopsis of the research projects (completed and ongoing).', width: 200 },
  { field: 'q_22', headerName: 'State the faculty awards and recognitions from outside agencies.', width: 200 },
  { field: 'q_23', headerName: 'Provide details of faculty articles published in journals, magazines, books in both national and international publications (attach photocopies at the end of the form).', width: 200 },
  { field: 'q_24', headerName: 'List and provide a short synopsis of the total number of faculty participation and presentation of papers in state, national, international,  conferences/seminars organized by other institutions/agencies.', width: 200 },
  { field: 'q_25', headerName: 'State some significant improvements in Governance (processes & culture))', width: 200 },
  { field: 'q_26', headerName: 'What are the processes and methodology used to share the Founder’s vision and mission within your institution', width: 200 },
  { field: 'q_27', headerName: 'Describe the use of latest technology as teaching aids and teaching innovation methodology', width: 200 },
  { field: 'q_28', headerName: 'List the Faculty & Staff Development programmes conducted vis a vis those identified.', width: 200 },
  { field: 'q_29', headerName: 'List the Workshops/ seminars/ conferences/ exhibitions conducted for employees and students if any ', width: 200 },
  { field: 'q_30', headerName: 'Elaborate on the participation in faculty exchange programmes', width: 200 },
  { field: 'q_31', headerName: 'State any Consultancy projects undertaken for Corporates or Government', width: 200 },
  { field: 'q_32', headerName: 'List the activities undertaken by students and teachers and report the outcomes of each.', width: 200 },
  { field: 'q_33', headerName: 'List the key alumni events, with details of attendance numbers for each.', width: 200 },
  { field: 'q_34', headerName: 'Involvement of alumni for guest lectures, conferences , as special guests, chief guests', width: 200 },
  { field: 'q_35', headerName: 'What kind of support has been solicited / received from alumni eg donations and scholarships', width: 200 },
  { field: 'q_36', headerName: 'Number of placements done based on the student intake', width: 200 },
  { field: 'q_37', headerName: 'Provide details of activities undertaken and reports of outcomes', width: 200 },
  { field: 'q_38', headerName: 'What are the significant contributions made by your institution to the support functions eg HR, IT, Sports, Security, PR, AR etc', width: 200 },
  {
    field: 'supportings', headerName: 'Supportings', width: 200, renderCell: (params) => {
      return <a href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
    }
  },
  {
    field: 'ieac_approved', headerName: 'IEAC Approved', width: 150, renderCell: (params) => {
      return params.value ?
        (
          <CheckRoundedIcon style={{ color: '#15803d' }} />
        ) :
        (
          <CloseRoundedIcon style={{ color: 'rgb(185,28,28)' }} />
        )
    },
  },
  {
    field: 'hr_approved', headerName: 'HR Approved', width: 150, renderCell: (params) => {
      return params.value ?
        (
          <CheckRoundedIcon style={{ color: '#15803d' }} />
        ) :
        (
          <CloseRoundedIcon style={{ color: 'rgb(185,28,28)' }} />
        )
    },
  },
];

const columns02: GridColDef[] = [
  { field: 'faculty_name', headerName: 'Faculty Name', width: 150 },
  { field: 'designation', headerName: 'Designation', width: 150 },
  { field: 'institution', headerName: 'Institution', width: 150 },
  { field: 'department', headerName: 'Department', width: 150 },
  { field: 'tenure', headerName: 'Tenure', width: 150 },
  { field: 'org_articles_count', headerName: 'Org Articles Count', width: 150 },
  { field: 'review_papers_count', headerName: 'Review Papers Count', width: 150 },
  { field: 'letters_count', headerName: 'Letters Count', width: 150 },
  { field: 'case_studies_count', headerName: 'Case Studies Count', width: 150 },
  { field: 'books_count', headerName: 'Books Count', width: 150 },
  { field: 'chapters_count', headerName: 'Chapters Count', width: 150 },
  { field: 'presentations_international_count', headerName: 'Presentations International Count', width: 200 },
  { field: 'presentation_national_count', headerName: 'Presentation National Count', width: 200 },
  { field: 'international_seminar_count', headerName: 'International Seminar Count', width: 200 },
  { field: 'national_seminar_count', headerName: 'National Seminar Count', width: 200 },
  { field: 'international_workshops_count', headerName: 'International Workshops Count', width: 200 },
  { field: 'national_workshops_count', headerName: 'National Workshops Count', width: 200 },
  { field: 'completed_minorp_count', headerName: 'Completed Minorp Count', width: 200 },
  { field: 'ongoing_minorp_count', headerName: 'Ongoing Minorp Count', width: 200 },
  { field: 'completed_majorp_count', headerName: 'Completed Majorp Count', width: 200 },
  { field: 'ongoing_majorp_count', headerName: 'Ongoing Majorp Count', width: 200 },
  { field: 'completed_consultancy_count', headerName: 'Completed Consultancy Count', width: 200 },
  { field: 'ongoing_consultancy_count', headerName: 'Ongoing Consultancy Count', width: 200 },
  { field: 'revenue_from_projects', headerName: 'Revenue from Projects', width: 200 },
  { field: 'granted_patents_count', headerName: 'Granted Patents Count', width: 200 },
  { field: 'filed_patents_count', headerName: 'Filed Patents Count', width: 200 },
  { field: 'granted_copyrights_count', headerName: 'Granted Copyrights Count', width: 200 },
  { field: 'filed_copyrights_count', headerName: 'Filed Copyrights Count', width: 200 },
  { field: 'granted_industrial_designs_count', headerName: 'Granted Industrial Designs Count', width: 250 },
  { field: 'filed_industrial_designs_count', headerName: 'Filed Industrial Designs Count', width: 250 },
  { field: 'international_awards_won_count', headerName: 'International Awards Won Count', width: 250 },
  { field: 'national_awards_won_count', headerName: 'National Awards Won Count', width: 250 },
  {
    field: 'evidence_of_research', headerName: 'Evidence of Research', width: 200, renderCell: (params) => {
      return <a href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
    }
  },
  {
    field: 'evidence_of_data_provided', headerName: 'Evidence of Data Provided', width: 200, renderCell: (params) => {
      return <a href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
    }
  },
  { field: 'confirmation_of_trueData', headerName: 'Confirmation of True Data', width: 200, },
  {
    field: 'ieacApproved', headerName: 'IEAC Approved', type: 'boolean', width: 150, renderCell: (params) => {
      return params.value ?
        (
          <CheckRoundedIcon style={{ color: '#15803d' }} />
        ) :
        (
          <CloseRoundedIcon style={{ color: 'rgb(185,28,28)' }} />
        )
    },
  },
  {
    field: 'hr_approved', headerName: 'HR Approved', type: 'boolean', width: 150, renderCell: (params) => {
      return params.value ?
        (
          <CheckRoundedIcon style={{ color: '#15803d' }} />
        ) :
        (
          <CloseRoundedIcon style={{ color: 'rgb(185,28,28)' }} />
        )
    },
  },
];

const columns03: GridColDef[] = [
  { field: 'email_id', headerName: 'Email ID', width: 150 },
  { field: 'institute_name', headerName: 'Institute Name', width: 150 },
  { field: 'nominee_inspiring_coach', headerName: 'Nominee Inspiring Coach', width: 200 },
  { field: 'nominee_coach_comments', headerName: 'Nominee Coach Comments', width: 200 },
  {
    field: 'nominee_teacher_photo', headerName: 'Nominee Teacher Photo', width: 200, renderCell: (params) => {
      return <a href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
    }
  },
  {
    field: 'nominee_teacher_supportings', headerName: 'Nominee Teacher Supportings', width: 250, renderCell: (params) => {
      return <a href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
    }
  },
  { field: 'q_01', headerName: 'Skill to demonstrate competency in motor skills and movement patterns needed to perform a variety of physical activities.', width: 100 },
  { field: 'q_02', headerName: 'Skill in analysis of the training and competition preparation required by athletes (the team) to perform at the top level (International/National/State)', width: 100 },
  { field: 'q_03', headerName: 'Skill in analysis of the strategies, tactics and psychological preparation required by athletes (the team) to perform at the top level', width: 100 },
  { field: 'q_04', headerName: 'Skill to exhibit responsible personal and social behavior that respects self and others in physical activity settings.', width: 100 },
  { field: 'q_05', headerName: 'Skill to value physical activity for health, enjoyment, challenge, self-expression, and/or social interaction.', width: 100 },
  { field: 'q_06', headerName: 'Ability to explain the factors that contribute to high performance to Athletes and others.', width: 100 },
  { field: 'q_07', headerName: 'Delivery of training sessions aligned to short- and long-term performance goals and appropriate to the athletes involved.', width: 100 },
  { field: 'q_08', headerName: 'Organization of training sessions that are time-effective and maximize value of available equipment and facilities.', width: 100 },
  { field: 'q_09', headerName: 'Analysis of athlete`s or team`s performance and determination of necessary changes in training and preparation', width: 100 },
  { field: 'q_10', headerName: 'Setting of appropriate level goals for athletes (the team) for the year and long-term ', width: 100 },
  { field: 'q_11', headerName: 'Demonstrated ability to set progression of goals to achieve long-range (International medal) goals', width: 100 },
  { field: 'q_12', headerName: 'Ability to have athletes (the team) peak at appropriate times of the season / academic year', width: 100 },
  { field: 'q_13', headerName: 'Effective monitoring of student-athletes for over-training, injuries, or illness (on own or through use of experts) and appropriate response', width: 100 },
  { field: 'q_14', headerName: 'Effective feedback to athletes (the team) related to training and performance results', width: 100 },
  { field: 'q_15', headerName: 'Ensuring that elements surrounding competition (for example, nutrition, and transport to and from sites, accommodation, training venues, and so on) support the athletes’ (team’s) ability to perform well', width: 100 },
  { field: 'q_16', headerName: 'Work within assigned budget and effectively manage program resources', width: 100 },
  { field: 'q_17', headerName: 'Manage the logistics of team projects, including travel, team meetings, technical meetings and practice matches, and discipline', width: 100 },
  { field: 'q_18', headerName: 'Ability to learn from each competition cycle and apply lessons to future planning and decision making', width: 100 },
  { field: 'q_19', headerName: 'Ability to define and communicate a clear vision for athletes (team)', width: 100 },
  { field: 'q_20', headerName: 'Act consistently and instill in athletes (team) belief in their ability to perform at a national/ world level', width: 100 },

  { field: 'nominee_ss_girl', headerName: 'Nominee Sports Star (Girl)', width: 200 },
  { field: 'nominee_ss_girl_sport', headerName: 'Nominee SS Girl Sport', width: 200 },
  {
    field: 'nominee_ss_girl_photo', headerName: 'Nominee SS Girl Photo', width: 200, renderCell: (params) => {
      return <a href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
    }
  },
  {
    field: 'nominee_ss_girl_supportings', headerName: 'Nominee SS Girl Supportings', width: 250, renderCell: (params) => {
      return <a href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
    }
  },
  { field: 'q_21', headerName: 'Q21', width: 100 },
  { field: 'q_22', headerName: 'Q22', width: 100 },
  { field: 'q_23', headerName: 'Q23', width: 100 },
  { field: 'q_24', headerName: 'Q24', width: 100 },

  { field: 'nominee_ss_boy', headerName: 'Nominee Sports Star (Boy)', width: 200 },
  { field: 'nominee_ss_boy_sport', headerName: 'Nominee SS Boy Sport', width: 200 },
  {
    field: 'nominee_ss_boy_photo', headerName: 'Nominee SS Boy Photo', width: 200, renderCell: (params) => {
      return <a href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
    }
  },
  {
    field: 'nominee_ss_boy_supportings', headerName: 'Nominee SS Boy Supportings', width: 250, renderCell: (params) => {
      return <a href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
    }
  },
  { field: 'q_25', headerName: 'Q25', width: 100 },
  { field: 'q_26', headerName: 'Q26', width: 100 },
  { field: 'q_27', headerName: 'Q27', width: 100 },
  { field: 'q_28', headerName: 'Q28', width: 100 },

];

const columns04: GridColDef[] = [
  { field: 'email_id', headerName: 'Email ID', width: 150 },
  { field: 'faculty_name', headerName: 'Faculty Name', width: 150 },
  { field: 'awards_category', headerName: 'Awards Category', width: 150 },
  { field: 'institute_name', headerName: 'Institute Name', width: 150 },
  { field: 'department', headerName: 'Department', width: 150 },
  { field: 'designation', headerName: 'Designation', width: 150 },
  { field: 'date_of_appointment', headerName: 'Date of Appointment', width: 200 },
  { field: 'somaiya_mail_id', headerName: 'Somaiya Mail ID', width: 150 },
  { field: 'contact_number', headerName: 'Contact Number', width: 150 },
  { field: 'q_01', headerName: 'Possess a clear knowledge of the content of the subject/s he/she teaches', width: 100 },
  { field: 'q_02', headerName: 'Has received good feedback/scores in standard evaluations (students, peers, supervisors) and other acknowledgments by former students (letters, e-mails, cards, etc)', width: 100 },
  { field: 'q_03', headerName: 'Capability to organize and prepare presentation/ instructional material and information before lectures', width: 100 },
  { field: 'q_04', headerName: 'Encourages activities to make students use other resources like libraries, internet etc.', width: 100 },
  { field: 'q_05', headerName: 'Use new and innovative teaching aids and tools (experiments, charts, maps) and integrate Information and Communications Technology (ICT) in the classroom. Eg Google Classrooms, Flipped Classrooms, Group teaching', width: 100 },
  { field: 'q_06', headerName: 'Has recently made a contribution to developing or enhancing curricula in his/her field', width: 100 },
  { field: 'q_07', headerName: 'Documentation and organizational skills- Maintain documents and records in an organized manner E.g. attendance sheets, progress reports', width: 100 },
  { field: 'q_08', headerName: 'Is able to identity and device ways to address gaps in student learning', width: 100 },
  { field: 'q_09', headerName: 'Cooperate and assist in carrying out functions relating to the educational responsibilities of his/her/their institute/ the University such as: assisting in appraising applications for admission, as well as assisting the conduct of examinations, including supervision, invigilation and evaluation', width: 100 },
  { field: 'q_10', headerName: 'Ability to communicate clearly and effectively on the subject matter', width: 100 },
  { field: 'q_11', headerName: 'Is actively involved in research (group or individual projects)', width: 100 },
  { field: 'q_12', headerName: 'Has made a contribution in books, book chapters, lab manuals, journals, magazines', width: 100 },
  { field: 'q_13', headerName: 'Is actively involved in student welfare activities, extension, consultancy and other co/extra curricular activities', width: 100 },
  { field: 'q_14', headerName: 'Is involved in any social service activities and/or engaged community development', width: 100 },
  { field: 'q_15', headerName: 'Attended/ organized presentations at seminars and conferences', width: 100 },
  { field: 'q_16', headerName: 'Has acquired any additional qualifications (certificates/ diplomas) for his/her/their professional development', width: 100 },
  { field: 'q_17', headerName: 'Has received any professional recognition, certificates, awards and honors from his/her institute or from any other organization(s)', width: 100 },
  { field: 'q_18', headerName: 'Has been a guide and mentor to students in their projects & research work, soft skills development and making career choices', width: 100 },
  { field: 'q_19', headerName: 'Is punctual at work and dependable in delivering work assigned to him/her/they', width: 100 },
  { field: 'q_20', headerName: 'Score the candidate on his/her/their general impression in terms of honesty, integrity, conduct and ability to get along with the superiors colleagues', width: 100 },
  {
    field: 'data_evidence', headerName: 'Data Evidence', width: 200, renderCell: (params) => {
      return <a href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
    }
  },
  {
    field: 'profile_photograph', headerName: 'Profile Photograph', width: 200, renderCell: (params) => {
      return <a href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
    }
  },
  {
    field: 'ieacApproved', headerName: 'IEAC Approved', type: 'boolean', width: 150, renderCell: (params) => {
      return params.value ?
        (
          <CheckRoundedIcon style={{ color: '#15803d' }} />
        ) :
        (
          <CloseRoundedIcon style={{ color: 'rgb(185,28,28)' }} />
        )
    },
  },
  {
    field: 'hr_approved', headerName: 'HR Approved', type: 'boolean', width: 150, renderCell: (params) => {
      return params.value ?
        (
          <CheckRoundedIcon style={{ color: '#15803d' }} />
        ) :
        (
          <CloseRoundedIcon style={{ color: 'rgb(185,28,28)' }} />
        )
    },
  },
];

const columns05: GridColDef[] = [
  { field: 'email_id', headerName: 'Email ID', width: 150 },
  { field: 'staff_name', headerName: 'Staff Name', width: 150 },
  { field: 'award_category', headerName: 'Award Category', width: 150 },
  { field: 'institute_name', headerName: 'Institute Name', width: 150 },
  { field: 'department', headerName: 'Department', width: 150 },
  { field: 'designation', headerName: 'Designation', width: 150 },
  { field: 'appointment_date', headerName: 'Appointment Date', width: 200 },
  { field: 'somaiya_email_id', headerName: 'Somaiya Email ID', width: 150 },
  { field: 'phone_number', headerName: 'Phone Number', width: 150 },
  { field: 'q_01', headerName: 'Accepts responsibilities and performs duties above and beyond what is normally expected', width: 100 },
  { field: 'q_02', headerName: 'Is flexible, responds and adapts well to internal & external changes.', width: 100 },
  { field: 'q_03', headerName: 'Determines broad knowledge and competence in a work related topics', width: 100 },
  { field: 'q_04', headerName: 'Uses knowledge and expertise to solve problems quickly', width: 100 },
  { field: 'q_05', headerName: 'Handles a large workload effectively and in a timely manner', width: 100 },
  { field: 'q_06', headerName: 'Brings in best practices from other Departments/ Institutes/ Universities for improvement of his/ her independent work.', width: 100 },
  { field: 'q_07', headerName: 'Has shows outstanding performance which has brought attention and distinction to the Department/ University', width: 100 },
  { field: 'q_08', headerName: 'Is a good team player and encourages teamwork', width: 100 },
  { field: 'q_09', headerName: 'Manages crises well as well as helps others to get through their crisis', width: 100 },
  { field: 'q_10', headerName: 'Interacts with others in a positive, enthusiastic and cheerful manner', width: 100 },
  { field: 'q_11', headerName: 'Assists others with both personal and professional challenges that impact work', width: 100 },
  { field: 'q_12', headerName: 'Commands respect of co-workers, supervisor, students and clients alike', width: 100 },
  { field: 'q_13', headerName: 'Suggests and/or develops new work methods which increases productivity and saves time and money', width: 100 },
  { field: 'q_14', headerName: 'Recognizes work of others to increase effectiveness and identifies / addresses work problems. If any.', width: 100 },
  { field: 'q_15', headerName: 'Takes the initiative to improve individual skills and knowledge.', width: 100 },
  { field: 'q_16', headerName: 'Recognizes others special events and/or accomplishments, either publicly or privately.', width: 100 },
  { field: 'q_17', headerName: 'Helps new employees to settle & adapt to the work environment.', width: 100 },
  { field: 'q_18', headerName: 'Acts as a mentor to others by providing advice, guidance, feedback and encouragement.', width: 100 },
  { field: 'q_19', headerName: 'Shares knowledge and skills with others.', width: 100 },
  { field: 'q_20', headerName: 'Regularity & Punctuality at work', width: 100 },
  { field: 'q_21', headerName: 'Participation in social and community welfare activities', width: 100 },
  { field: 'q_22', headerName: 'Professional Up-gradation', width: 100 },
  { field: 'q_23', headerName: 'Promptness in work clearance', width: 100 },
  { field: 'q_24', headerName: 'Accuracy & Dependability', width: 100 },
  {
    field: 'proof_docs', headerName: 'Proof Documents', width: 200, renderCell: (params) => {
      return <a href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
    }
  },
  {
    field: 'nominee_photograph', headerName: 'Nominee Photograph', width: 200, renderCell: (params) => {
      return <a href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
    }
  },
  {
    field: 'ieacApproved', headerName: 'IEAC Approved', type: 'boolean', width: 150, renderCell: (params) => {
      return params.value ?
        (
          <CheckRoundedIcon style={{ color: '#15803d' }} />
        ) :
        (
          <CloseRoundedIcon style={{ color: 'rgb(185,28,28)' }} />
        )
    },
  },
  {
    field: 'hr_approved', headerName: 'HR Approved', type: 'boolean', width: 150, renderCell: (params) => {
      return params.value ?
        (
          <CheckRoundedIcon style={{ color: '#15803d' }} />
        ) :
        (
          <CloseRoundedIcon style={{ color: 'rgb(185,28,28)' }} />
        )
    },
  },
];


const columns06: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 150,
  },
  {
    field: 'email_id',
    headerName: 'Email ID',
    width: 150,
  },
  {
    field: 'student_name',
    headerName: 'Student Name',
    width: 150,
  },
  {
    field: 'students_class',
    headerName: "Student's Class",
    width: 150,
  },
  {
    field: 'course',
    headerName: 'Course',
    width: 150,
  },
  {
    field: 'institution_name',
    headerName: 'Institution Name',
    width: 450,
  },
  {
    field: 'nomination_category',
    headerName: 'Nomination Category',
    width: 150,
  },
  {
    field: 'recommendation_note',
    headerName: 'Recommendation Note',
    width: 150,
  },
  {
    field: 'supportings',
    headerName: 'Supportings',
    width: 150,
    renderCell: (params) => {
      return <a target="_blank" href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
    }
  },
]

export {
  columns01,
  columns02,
  columns03,
  columns04,
  columns05,
  columns06
};