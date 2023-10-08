/**
 * MUI X DATAGRID STRUCTURE AND FUNCTIONALITY ADMIN
 * 
 * COLUMNS
 * 
 * -01 - column structure for outstanding institution form  
 * -02 - column structure for research  form 
 * -03 - column structure for students form 
 * -04 - column structure for teaching form 
 * -05 - column structure for non-teaching form 
 * -06 - column structure for feedback-01 form 
 * -07 - column structure for feedback-02 form 
 * -08 - column structure for feedback-02 form 
 * -09 - column structure for feedback-04 form 
 * 
 */

import { GridColDef } from '@mui/x-data-grid';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';
import { Link } from 'react-router-dom'

// outstanding Institution 

const columns01: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'email_id', headerName: 'Email ID', width: 200 },
    { field: 'nomination_category', headerName: 'Nomination Category', width: 200 },
    { field: 'institution_name', headerName: 'Institution Name', width: 200 },
    { field: 'established_In', headerName: 'Established In', width: 200 },
    { field: 'head_of_institution', headerName: 'Head of Institution', width: 200 },
    { field: 'hoi_designation', headerName: 'HOI Designation', width: 200 },
    { field: 'hoi_joining_date', headerName: 'HOI Joining Date', width: 200 },
    { field: 'somaiya_mail_id', headerName: 'Somaiya Mail ID', width: 200 },
    { field: 'contact_number', headerName: 'Contact Number', width: 200 },
    { field: 'q_01', headerName: 'Submit a short paragraph/ summary of why you believe your Institution qualifies for the award.', width: 200 },
    { field: 'q_02', headerName: 'State the awards/certifications received from various national and international accrediting agencies such as AACSB, NAAC, NBA, Govt. Gradings, School boards and Govt. agencies.', width: 200 },
    { field: 'q_03', headerName: 'Has the institution secured any position in the National Institutional Ranking Framework (NIRF) by the HRD Ministry, Govt. of India. If yes, please specify details and attach relevant documents at the end of the form.', width: 200 },
    { field: 'q_04', headerName: 'Has the institution secured any ranking in Industry Journals & periodicals,/ mainline magazines, newspapers. If yes, please specify details and attach relevant documents at the end of the form.', width: 200 },
    { field: 'q_05', headerName: 'Has the HOI or any of the faculty got nominated as Heads of Councils and Committees of outside agencies/ universities. If yes, please specify details and attach relevant documents at the end of the form.', width: 200 },
    { field: 'q_06', headerName: 'Mention the number and list of toppers (students) at University levels or Board levels', width: 200 },
    { field: 'q_07', headerName: 'Comment on the admissions status (total available student intake and vacant seats) and increasing trends for each year of your institution', width: 200 },
    { field: 'q_08', headerName: 'Specify about any grants received from outside agencies and Governmental bodies’ and about their utilization', width: 200 },
    { field: 'q_09', headerName: 'Mention the college festivals and events (about any unique events which has benefitted to the campus/society)', width: 200 },
    { field: 'q_10', headerName: 'List the current and market oriented courses introduced this year.', width: 200 },
    { field: 'q_11', headerName: 'Have you organized any national/ international level conferences/ seminar/ exhibition. Please attach a post-show report along with photographs at the end of this form', width: 200 },
    { field: 'q_12', headerName: 'List all the donations and scholarships received by your Institution', width: 200 },
    { field: 'q_13', headerName: 'Have you added any new infrastructure or facilities this year', width: 200 },
    { field: 'q_14', headerName: 'What are the activities undertaken to maintain a hygienic environment within the building and external surroundings', width: 200 },
    { field: 'q_15', headerName: 'State measures taken to enhance the student experience in your institution', width: 200 },
    { field: 'q_16', headerName: 'State the frequency of Safety procedures and processes such as fire drills, women’s safety, etc. being conducted.', width: 200 },
    { field: 'q_17', headerName: 'State the Disaster Management system, Communication strategies with parents in case of emergencies, eg. floods, etc.', width: 200 },
    { field: 'institution_ratings', headerName: 'Q18. Based on the responses given in section B, rate your institution on a scale of 1 to 5, where 1 is very poor and 5 is outstanding', width: 200 },
    { field: 'q_18', headerName: 'List the received external awards at state, national or international competitions in the following areas ● Cultural activities- music, dance, drama, debates ● Sports activities and competitions ● NCC / NSS ● External exams such as NTSE / Olympiads etc', width: 200 },
    { field: 'q_19', headerName: 'State the parental involvement and contribution for schools such as PTA etc', width: 200 },
    { field: 'q_20', headerName: 'List the Committees run by students and their significant achievements', width: 200 },
    { field: 'q_21', headerName: 'List and provide a brief synopsis of the research projects (completed and ongoing)', width: 200 },
    { field: 'q_22', headerName: 'State the faculty awards and recognitions from outside agencies', width: 200 },
    { field: 'q_23', headerName: 'Provide details of faculty articles published in journals, magazines, books in both national and international publications (attach photocopies at the end of the form)', width: 200 },
    { field: 'q_24', headerName: 'List and provide a short synopsis of the total number of faculty participation and presentation of papers in state, national, international,  conferences/seminars organized by other institutions/agencies', width: 200 },
    { field: 'q_25', headerName: 'State some significant improvements in Governance (processes & culture)', width: 200 },
    { field: 'q_26', headerName: 'What are the processes and methodology used to share the Founder’s vision and mission within your institution', width: 200 },
    { field: 'q_27', headerName: 'Describe the use of latest technology as teaching aids and teaching innovation methodology', width: 200 },
    { field: 'q_28', headerName: 'List the Faculty & Staff Development programmes conducted vis a vis those identified', width: 200 },
    { field: 'q_29', headerName: 'List the Workshops/ seminars/ conferences/ exhibitions conducted for employees and students if any', width: 200 },
    { field: 'q_30', headerName: 'Elaborate on the participation in faculty exchange programmes', width: 200 },
    { field: 'q_31', headerName: 'State any Consultancy projects undertaken for Corporates or Government', width: 200 },
    { field: 'q_32', headerName: 'List the activities undertaken by students and teachers and report the outcomes of each.', width: 200 },
    { field: 'q_33', headerName: 'List the key alumni events, with details of attendance numbers for each', width: 200 },
    { field: 'q_34', headerName: 'Involvement of alumni for guest lectures, conferences , as special guests, chief guests', width: 200 },
    { field: 'q_35', headerName: 'What kind of support has been solicited / received from alumni eg donations and scholarships', width: 200 },
    { field: 'q_36', headerName: 'Number of placements done based on the student intake', width: 200 },
    { field: 'q_37', headerName: 'Provide details of activities undertaken and reports of outcomes', width: 200 },
    { field: 'q_38', headerName: 'What are the significant contributions made by your institution to the support functions eg HR, IT, Sports, Security, PR, AR etc', width: 200 },
    {
        field: 'supportings', headerName: 'Supportings', width: 200, renderCell: (params) => {
            return <a href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" target='_blank' download>Download</a>;
        }
    },

];


// Research 

const columns02: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'faculty_name', headerName: 'Faculty Name', width: 200 },
    { field: 'designation', headerName: 'Designation', width: 200 },
    { field: 'institution', headerName: 'Institution', width: 200 },
    { field: 'department', headerName: 'Department', width: 200 },
    { field: 'tenure', headerName: 'Tenure', width: 200 },
    { field: 'org_articles_count', headerName: 'Org Articles Count', width: 200 },
    { field: 'review_papers_count', headerName: 'Review Papers Count', width: 200 },
    { field: 'letters_count', headerName: 'Letters Count', width: 200 },
    { field: 'case_studies_count', headerName: 'Case Studies Count', width: 200 },
    { field: 'books_count', headerName: 'Books Count', width: 200 },
    { field: 'chapters_count', headerName: 'Chapters Count', width: 200 },
    { field: 'presentations_international_count', headerName: 'Presentations (International) Count', width: 200 },
    { field: 'presentation_national_count', headerName: 'Presentations (National) Count', width: 200 },
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
    { field: 'granted_industrial_designs_count', headerName: 'Granted Industrial Designs Count', width: 200 },
    { field: 'filed_industrial_designs_count', headerName: 'Filed Industrial Designs Count', width: 200 },
    { field: 'international_awards_won_count', headerName: 'International Awards Won Count', width: 200 },
    { field: 'national_awards_won_count', headerName: 'National Awards Won Count', width: 200 },
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
    { field: 'confirmation_of_trueData', headerName: 'Confirmation of True Data', width: 200 },
    {
        field: 'approved', headerName: 'Research Admin Approved', align: 'center', width: 200, type: 'boolean', width: 150, renderCell: (params) => {
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

// Sports

const columns03: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'email_id', headerName: 'Email', width: 200 },
    { field: 'student_name', headerName: 'Student Name', width: 200 },
    { field: 'students_class', headerName: 'Class', width: 150 },
    { field: 'course', headerName: 'Course', width: 200 },
    { field: 'institution_name', headerName: 'Institution', width: 200 },
    { field: 'nomination_category', headerName: 'Nomination Category', width: 200 },
    { field: 'recommendation_note', headerName: 'Recommendation Note', width: 300 },
    {
        field: 'approved', headerName: 'Approval Status', type: 'boolean', width: 150, renderCell: (params) => {
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
        field: 'supportings', headerName: 'Supportings', width: 200, renderCell: (params) => {
            return <a target="_blank" href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }
    },
];



// Teaching 

const columns04: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'email_id', headerName: 'Email ID', width: 200 },
    { field: 'faculty_name', headerName: 'Faculty Name', width: 200 },
    { field: 'awards_category', headerName: 'Awards Category', width: 200 },
    { field: 'institute_name', headerName: 'Institute Name', width: 200 },
    { field: 'department', headerName: 'Department', width: 200 },
    { field: 'designation', headerName: 'Designation', width: 200 },
    { field: 'date_of_appointment', headerName: 'Date of Appointment', width: 200 },
    { field: 'somaiya_mail_id', headerName: 'Somaiya Mail ID', width: 200 },
    { field: 'contact_number', headerName: 'Contact Number', width: 200 },
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
    { field: 'q_20', headerName: 'Score the candidate on his/her/their general impression in terms of honesty, integrity, conduct and ability to get along with the superiors colleagues, students', width: 100 },
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
        field: 'ieacApproved', headerName: 'IEAC Approved', align: 'center', width: 200, type: 'boolean', width: 150, renderCell: (params) => {
            return params.value ?
                (
                    <CheckRoundedIcon style={{ color: '#15803d' }} />
                ) :
                (
                    <CloseRoundedIcon style={{ color: 'rgb(185,28,28)' }} />
                )
        },
    },
    { field: 'ieac_scoreA', headerName: 'IEAC Score A', width: 200 },
    { field: 'ieac_scoreB', headerName: 'IEAC Score B', width: 200 },
    { field: 'ieac_scoreC', headerName: 'IEAC Score C', width: 200 },
    {
        field: 'scorecard', headerName: 'ScoreCard', width: 200, renderCell: (params) => {

            return (
                <Link to={`/admin/teaching/scorecard/${params.id}`}>
                    <a className='p-2 cursor-pointer bg-red-700 font-Poppins text-sm text-white rounded-2xl shadow-md'>
                        Download ScoreCard
                    </a>
                </Link>
            )
        }
    },
    {
        field: 'ieacApprovedFile', headerName: 'IEAC Approved File', width: 200, renderCell: (params) => {
            return <a href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }
    },
];

// Non Teaching

const columns05: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'email_id', headerName: 'Email ID', width: 200 },
    { field: 'staff_name', headerName: 'Staff Name', width: 200 },
    { field: 'award_category', headerName: 'Award Category', width: 200 },
    { field: 'institute_name', headerName: 'Institute Name', width: 200 },
    { field: 'department', headerName: 'Department', width: 200 },
    { field: 'designation', headerName: 'Designation', width: 200 },
    { field: 'appointment_date', headerName: 'Appointment Date', width: 200 },
    { field: 'somaiya_email_id', headerName: 'Somaiya Email ID', width: 200 },
    { field: 'phone_number', headerName: 'Phone Number', width: 200 },
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
        field: 'proof_docs', headerName: 'Proof Docs', width: 200, renderCell: (params) => {
            return <a href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }
    },
    {
        field: 'nominee_photograph', headerName: 'Nominee Photograph', width: 200, renderCell: (params) => {
            return <a href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }
    },
    {
        field: 'ieacApproved', headerName: 'IEAC Approved', align: 'center', width: 200, type: 'boolean', width: 150, renderCell: (params) => {
            return params.value ?
                (
                    <CheckRoundedIcon style={{ color: '#15803d' }} />
                ) :
                (
                    <CloseRoundedIcon style={{ color: 'rgb(185,28,28)' }} />
                )
        },
    },
    { field: 'ieac_scoreA', headerName: 'IEAC Score A', width: 200 },
    { field: 'ieac_scoreB', headerName: 'IEAC Score B', width: 200 },
    {
        field: 'scorecard', headerName: 'ScoreCard', width: 200, renderCell: (params) => {

            return (
                <Link to={`/admin/non-teaching/scorecard/${params.id}`}>
                    <a className='p-2 cursor-pointer bg-red-700 font-Poppins text-sm text-white rounded-2xl shadow-md'>
                        Download ScoreCard
                    </a>
                </Link>
            )
        }
    },

    {
        field: 'ieacApprovedFile', headerName: 'IEAC Approved File', width: 200, renderCell: (params) => {
            return <a href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }
    },

];


// Feedback -01

const columns06: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'email_id', headerName: 'Email ID', width: 200 },
    { field: 'student_batch_year', headerName: 'Student Batch Year', width: 200 },
    { field: 'student_class_and_division', headerName: 'Student Class and Division', width: 200 },
    { field: 'teacher_name', headerName: 'Teacher Name', width: 200 },
    { field: 'teacher_designation', headerName: 'Teacher Designation', width: 200 },
    { field: 'teaching_subject', headerName: 'Teaching Subject', width: 200 },
    { field: 'q_01', headerName: 'Q01', width: 200 },
    { field: 'q_02', headerName: 'Q02', width: 200 },
    { field: 'q_03', headerName: 'Q03', width: 200 },
    { field: 'q_04', headerName: 'Q04', width: 200 },
    { field: 'q_05', headerName: 'Q05', width: 200 },
    { field: 'q_06', headerName: 'Q06', width: 200 },
    { field: 'q_07', headerName: 'Q07', width: 200 },
    { field: 'q_08', headerName: 'Q08', width: 200 },
    { field: 'q_09', headerName: 'Q09', width: 200 },
    { field: 'q_10', headerName: 'Q10', width: 200 },
    { field: 'q_11', headerName: 'Q11', width: 200 },
    { field: 'nominating_reasons', headerName: 'Nominating Reasons', width: 200 },

];


// Feedback -02

const columns07: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'rater_name', headerName: 'Rater Name', width: 200 },
    { field: 'institute_name', headerName: 'Institute Name', width: 200 },
    { field: 'department_name', headerName: 'Department Name', width: 200 },
    { field: 'designation', headerName: 'Designation', width: 200 },
    { field: 'somaiya_mail_id', headerName: 'Somaiya Mail ID', width: 200 },
    { field: 'contact_number', headerName: 'Contact Number', width: 200 },
    { field: 'teacher_name', headerName: 'Teacher Name', width: 200 },
    { field: 'nomination_category', headerName: 'Nomination Category', width: 200 },
    { field: 'q_01', headerName: 'Q01', width: 200 },
    { field: 'q_02', headerName: 'Q02', width: 200 },
    { field: 'q_03', headerName: 'Q03', width: 200 },
    { field: 'q_04', headerName: 'Q04', width: 200 },
    { field: 'q_05', headerName: 'Q05', width: 200 },
    { field: 'q_06', headerName: 'Q06', width: 200 },
    { field: 'q_07', headerName: 'Q07', width: 200 },
    { field: 'q_08', headerName: 'Q08', width: 200 },
    { field: 'q_09', headerName: 'Q09', width: 200 },
    { field: 'nomination_reason', headerName: 'Nomination Reason', width: 200 },

];

// Feedback -03

const columns08: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'email_id', headerName: 'Email ID', width: 200 },
    { field: 'student_batch_year', headerName: 'Student Batch Year', width: 200 },
    { field: 'student_class_and_division', headerName: 'Student Class and Division', width: 200 },
    { field: 'employee_name', headerName: 'Employee Name', width: 200 },
    { field: 'employee_designation', headerName: 'Employee Designation', width: 200 },
    { field: 'q_01', headerName: 'Q01', width: 200 },
    { field: 'q_02', headerName: 'Q02', width: 200 },
    { field: 'q_03', headerName: 'Q03', width: 200 },
    { field: 'q_04', headerName: 'Q04', width: 200 },
    { field: 'q_05', headerName: 'Q05', width: 200 },
    { field: 'nomination_reason', headerName: 'Nomination Reason', width: 200 },

];

// Feedback -04

const columns09: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'rater_name', headerName: 'Rater Name', width: 200 },
    { field: 'institution_name', headerName: 'Institution Name', width: 200 },
    { field: 'department', headerName: 'Department', width: 200 },
    { field: 'designation', headerName: 'Designation', width: 200 },
    { field: 'somaiya_mail_id', headerName: 'Somaiya Mail ID', width: 200 },
    { field: 'contact_no', headerName: 'Contact No', width: 200 },
    { field: 'nominee_name', headerName: 'Nominee Name', width: 200 },
    { field: 'category', headerName: 'Category', width: 200 },
    { field: 'q_01', headerName: 'Q01', width: 200 },
    { field: 'q_02', headerName: 'Q02', width: 200 },
    { field: 'q_03', headerName: 'Q03', width: 200 },
    { field: 'q_04', headerName: 'Q04', width: 200 },
    { field: 'q_05', headerName: 'Q05', width: 200 },
    { field: 'q_06', headerName: 'Q06', width: 200 },
    { field: 'q_07', headerName: 'Q07', width: 200 },
    { field: 'q_08', headerName: 'Q08', width: 200 },
    { field: 'nomination_reason', headerName: 'Nomination Reason', width: 200 },

];

/**SPORTS */

const columns10: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        width: 200,
    },
    {
        field: 'email_id',
        headerName: 'HOI Email ID',
        width: 200,
    },
    {
        field: 'institute_name',
        headerName: 'Institute Name',
        width: 250,

    },
    {
        field: 'nominee_ss_girl',
        headerName: 'Nominee Name',
        width: 200,

    },
    {
        field: 'nominee_ss_girl_sport',
        headerName: 'Nominee`s Sport',
        width: 200,

    },
    {
        field: 'q_21',
        headerName: 'Outstanding Performance',
        width: 100,

    },
    {
        field: 'q_22',
        headerName: 'Encouragement of Effort',
        width: 100,

    },
    {
        field: 'q_23',
        headerName: 'Contribution to development of Sports culture in Somaiya campus',

        width: 100,

    },
    {
        field: 'q_24',
        headerName: 'Intensity of Competition',
        width: 100,

    },
    {
        field: 'final_score',
        headerName: 'Final Score (out of 5) ',
        width: 100,

    },
    {
        field: 'isApprovedSportsGirl', headerName: 'Recommended', width: 200, type: 'boolean', renderCell: (params) => {
            return params.value ?
                (
                    <CheckRoundedIcon style={{ color: '#15803d' }} />
                ) :
                (
                    <CloseRoundedIcon style={{color: 'rgb(185,28,28)'}} />
                )
        },
    },
    {
        field: 'nominee_ss_girl_photo',
        headerName: 'Nominee Photo',
        width: 200,
        renderCell: (params) => {
            return <a target="_blank" href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }

    },
    {
        field: 'nominee_ss_girl_supportings',
        headerName: 'Nominee Supportings',
        width: 200,
        renderCell: (params) => {
            return <a target="_blank" href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }

    },

]

const columns11: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        width: 200,
    },
    {
        field: 'email_id',
        headerName: 'HOI Email ID',
        width: 200,

    },
    {
        field: 'institute_name',
        headerName: 'Institute Name',
        width: 250,

    },
    {
        field: 'nominee_ss_boy',
        headerName: 'Nominee Name',
        width: 200,

    },
    {
        field: 'nominee_ss_boy_sport',
        headerName: 'Nominee`s Sport',
        width: 200,

    },
    {
        field: 'q_25',
        headerName: 'Outstanding Performance',
        width: 100,

    },
    {
        field: 'q_26',
        headerName: 'Encouragement of Effort',
        width: 100,

    },
    {
        field: 'q_27',
        headerName: 'Contribution to development of Sports culture in Somaiya campus',
        width: 100,

    },
    {
        field: 'q_28',
        headerName: 'Intensity of Competition',
        width: 100,

    },
    {
        field: 'final_score',
        headerName: 'Final Score (out of 5) ',
        width: 100,

    },
    {
        field: 'isApprovedSportsBoy', headerName: 'Recommended', width: 200, type: 'boolean', renderCell: (params) => {
            return params.value ?
                (
                    <CheckRoundedIcon style={{ color: '#15803d' }} />
                ) :
                (
                    <CloseRoundedIcon style={{color: 'rgb(185,28,28)'}} />
                )
        },
    },
    {
        field: 'nominee_ss_boy_photo',
        headerName: 'Nominee Photo',
        width: 200,
        renderCell: (params) => {
            return <a target="_blank" href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }

    },
    {
        field: 'nominee_ss_boy_supportings',
        headerName: 'Nominee Supportings',
        width: 200,
        renderCell: (params) => {
            return <a target="_blank" href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }

    },
]

const columns12: GridColDef[] = [
    {
        field: 'id',
        headerName: 'ID',
        width: 200,
    },
    {
        field: 'email_id',
        headerName: 'HOI Email ID',
        width: 200,

    },
    {
        field: 'institute_name',
        headerName: 'Institute Name',
        width: 250,

    },
    {
        field: 'nominee_inspiring_coach',
        headerName: 'Nominee Name',
        width: 250,

    },
    {
        field: 'nominee_coach_comments',
        headerName: 'HOI Comments',
        width: 300,

    },
    {
        field: 'Skill to demonstrate competency in motor skills and movement patterns needed to perform a variety of physical activities.',
        headerName: 'Q_01',
        width: 100,

    },
    {
        field: 'Skill in analysis of the training and competition preparation required by athletes (the team) to perform at the top level (International/National/State)',
        headerName: 'Q_02',
        width: 100,

    },
    {
        field: 'Skill in analysis of the strategies, tactics and psychological preparation required by athletes (the team) to perform at the top level',
        headerName: 'Q_03',
        width: 100,

    },
    {
        field: 'Skill to exhibit responsible personal and social behavior that respects self and others in physical activity settings.',
        headerName: 'Q_04',
        width: 100,

    },
    {
        field: 'Skill to value physical activity for health, enjoyment, challenge, self-expression, and/or social interaction.',
        headerName: 'Q_05',
        width: 100,

    },
    {
        field: 'Ability to explain the factors that contribute to high performance to Athletes and others.',
        headerName: 'Q_06',
        width: 100,

    },
    {
        field: 'Delivery of training sessions aligned to short- and long-term performance goals and appropriate to the athletes involved.',
        headerName: 'Q_07',
        width: 100,

    },
    {
        field: 'Organization of training sessions that are time-effective and maximize value of available equipment and facilities.',
        headerName: 'Q_08',
        width: 100,

    },
    {
        field: 'Analysis of athlete`s or team`s performance and determination of necessary changes in training and preparation',
        headerName: 'Q_09',
        width: 100,

    },
    {
        field: 'Setting of appropriate level goals for athletes (the team) for the year and long-term',
        headerName: 'Q_10',
        width: 100,

    },
    {
        field: 'Demonstrated ability to set progression of goals to achieve long-range (International medal) goals',
        headerName: 'Q_11',
        width: 100,

    },
    {
        field: 'Ability to have athletes (the team) peak at appropriate times of the season / academic year',
        headerName: 'Q_12',
        width: 100,

    },
    {
        field: 'Effective monitoring of student-athletes for over-training, injuries, or illness (on own or through use of experts) and appropriate response',
        headerName: 'Q_13',
        width: 100,

    },
    {
        field: 'Effective feedback to athletes (the team) related to training and performance results',
        headerName: 'Q_14',
        width: 100,

    },
    {
        field: 'Ensuring that elements surrounding competition (for example, nutrition, and transport to and from sites, accommodation, training venues, and so on) support the athletes’ (team’s) ability to perform well',
        headerName: 'Q_15',
        width: 100,

    },
    {
        field: 'Work within assigned budget and effectively manage program resources',
        headerName: 'Q_16',
        width: 100,

    },
    {
        field: 'Manage the logistics of team projects, including travel, team meetings, technical meetings and practice matches, and discipline',
        headerName: 'Q_17',
        width: 100,

    },
    {
        field: 'Ability to learn from each competition cycle and apply lessons to future planning and decision making',
        headerName: 'Q_18',
        width: 100,

    },
    {
        field: 'Ability to define and communicate a clear vision for athletes (team)',
        headerName: 'Q_19',
        width: 100,

    },
    {
        field: 'Act consistently and instill in athletes (team) belief in their ability to perform at a national/ world level',
        headerName: 'Q_20',

        width: 100,

    },
    {
        field: 'final_score',
        headerName: 'Final Score Percentage',
        width: 100,

    },
    {
        field: 'isApprovedCoach', headerName: 'Recommended', width: 200, type: 'boolean', renderCell: (params) => {
            return params.value ?
                (
                    <CheckRoundedIcon style={{ color: '#15803d' }} />
                ) :
                (
                    <CloseRoundedIcon style={{color: 'rgb(185,28,28)'}} />
                )
        },
    },
    {
        field: 'nominee_coach_photo',
        headerName: 'Nominee Photo',
        width: 200,
        renderCell: (params) => {
            return <a target="_blank" href={`http://localhost:5001/${params.value ? params.value.split("data")[1] : null}`} className="p-2 rounded-2xl cursor-pointer bg-red-700 text-white font-Poppins" download>Download</a>;
        }

    },
    {
        field: 'nominee_coach_supportings',
        headerName: 'Nominee Supportings',
        width: 300,
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
    columns06,
    columns07,
    columns08,
    columns09,
    columns10,
    columns11,
    columns12
}