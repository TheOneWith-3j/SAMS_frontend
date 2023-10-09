import axios from "axios";
import { useState, useEffect } from "react";

import React from 'react'

export default function SportsStarForm() {
    const [institution,setInstitution] = useState("")
    
    const SportsStarForm1 = [
        {
            title: "Email",
            _name: "email_id",
            type: "email",
            requiredStatus: true,
            hasValidations: true,
            validationType: 'email-id',
            hasOptions: false,
            page: 1,
            fieldsPerLine: 2
        },
        {
            title: "Institute Name",
            _name: "institute_name",
            type: "dropdown",
            dropdownHiddenItem:'Select your institute',
            requiredStatus: true,
            hasOptions: true,
            options: [
                institution,
                // "The Somaiya School",
                // "S. K. Somaiya Prathmik Shala",
                // "S K Somaiya Vinay Mandir High School",
                // "Somaiya Vidyamandir- Sakarwadi",
                // "Shri Sharda English Medium School Kopargaon",
                // "Somaiya Vidya Mandir- Laxmiwadi",
                // "Somaiya Shishu Niketan Primary School- Sameerwadi",
                // "Somaiya Vinaymandir High School- Sameerwadi",
                // "KJ Somaiya English Medium School Sameerwadi",
                // "Nareshwadi Learning Centre- Dahanu",
                // "SK Somaiya Vinay Mandir High School, Mumbai",
                // "KJ Somaiya Junior College of Arts, Commerce and Science",
                // "SK Somaiya Vinay Mandir Junior College, Mumbai",
                // "KJ Somaiya Private Industrial Training Institute",
                // "Smt. Sakarben Somaiya Junior College of Education (DEd)",
                // "KJ Somaiya Institute of Engineering and Information Technology, Ayurvihar",
                // "KJ Somaiya College of Engineering",
                // "KJ Somaiya Institute of Management",
                // "KJ Somaiya Polytechnic College",
                // "KJ Somaiya College of Arts and Commerce",
                // "KJ Somaiya College of Science and Commerce",
                // "K.J Somaiya College of Comprehensive College of Education , Training and Research",
                // "KJ Somaiya Bhartiya Sanskriti Peetham",
                // "KJ Somaiya Centre for Buddhish Studies",
                // "KJ Somaiya Centre for Studies in Jainism",
                // "KJ Somaiya Medical College and Research Centre",
                // "KJ Somaiya College of Physiotherapy",
                // "KJ Somaiya School and College of Nursing",
                // "Somaiya Sports Academy",
                // "SK Somaiya College (SVU)",
                // "SK Somaiya College of Arts, Science and Commerce (MU)"
            ],
    
            page: 1,
            fieldsPerLine: 2,
        },
        {
            title: "Nominee Name- Inspiring PE Teacher / Coach",
            _name: "nominee_inspiring_coach",
            type: "text",
            requiredStatus: true,
            hasOptions: false,
            page: 2,
            fieldsPerLine: 1
        },
        {
            title: "Other comments about the PE teacher, PE sessions and coaching situation of the past that you want to add",
            _name: "nominee_coach_comments",
            type: "textarea",
            requiredStatus: true,
            hasOptions: false,
            page: 2,
            fieldsPerLine: 1
        },
        {
            title:"Nominee Photo- Inspiring PE Teacher / Coach",
            type:"file",
            requiredStatus : true,
            _name: "nominee_coach_photo",
            hasOptions: false,
            page:2,
            fieldsPerLine:2
        },
        {
            title:"Supporting Documents",
            type:"file",
            requiredStatus:true,
            _name:"nominee_coach_supportings",
            hasOptions: false,
            page:2,
            fieldsPerLine: 2,
        },
        {
            title:"Q1. Skill to demonstrate competency in motor skills and movement patterns needed to perform a variety of physical activities.",
            _name:"q_01",
            type:"radio",
            requiredStatus:true,
            hasOptions:true,
            options:[1,2,3,4,5],
            page:3,
            fieldsPerLine:1
        },
        {
            title:"Q2. Skill in analysis of the training and competition preparation required by athletes (the team) to perform at the top level (International/National/State)",
            _name:"q_02",
            type:"radio",
            requiredStatus:true,
            hasOptions:true,
            options:[1,2,3,4,5],
            page:3,
            fieldsPerLine:1
        },
        {
            title:"Q3. Skill in analysis of the strategies, tactics and psychological preparation required by athletes (the team) to perform at the top level",
            _name:"q_03",
            type:"radio",
            requiredStatus:true,
            hasOptions:true,
            options:[1,2,3,4,5],
            page:3,
            fieldsPerLine:1
        },
        {
            title:"Q4. Skill to exhibit responsible personal and social behavior that respects self and others in physical activity settings.",
            _name:"q_04",
            type:"radio",
            requiredStatus:true,
            hasOptions:true,
            options:[1,2,3,4,5],
            page:3,
            fieldsPerLine:1
        },
        {
            title:"Q5. Skill to value physical activity for health, enjoyment, challenge, self-expression, and/or social interaction.",
            _name:"q_05",
            type:"radio",
            requiredStatus:true,
            hasOptions:true,
            options:[1,2,3,4,5],
            page:3,
            fieldsPerLine:1
        },
        {
            title:"Q6. Ability to explain the factors that contribute to high performance to Athletes and others.",
            _name:"q_06",
            type:"radio",
            requiredStatus:true,
            hasOptions:true,
            options:[1,2,3,4,5],
            page:3,
            fieldsPerLine:1
        },
        {
            title:"Q7. Delivery of training sessions aligned to short- and long-term performance goals and appropriate to the athletes involved.",
            _name:"q_07",
            type:"radio",
            requiredStatus:true,
            hasOptions:true,
            options:[1,2,3,4,5],
            page:3,
            fieldsPerLine:1
        },
        {
            title:"Q8. Organization of training sessions that are time-effective and maximize value of available equipment and facilities.",
            _name:"q_08",
            type:"radio",
            requiredStatus:true,
            hasOptions:true,
            options:[1,2,3,4,5],
            page:3,
            fieldsPerLine:1
        },
        {
            title:"Q9. Analysis of athlete`s or team`s performance and determination of necessary changes in training and preparation",
            _name:"q_09",
            type:"radio",
            requiredStatus:true,
            hasOptions:true,
            options:[1,2,3,4,5],
            page:3,
            fieldsPerLine:1
        },
        {
            title:"Q10. Setting of appropriate level goals for athletes (the team) for the year and long-term ",
            _name:"q_10",
            type:"radio",
            requiredStatus:true,
            hasOptions:true,
            options:[1,2,3,4,5],
            page:3,
            fieldsPerLine:1
        },
        {
            title:"Q11. Demonstrated ability to set progression of goals to achieve long-range (International medal) goals",
            _name:"q_11",
            type:"radio",
            requiredStatus:true,
            hasOptions:true,
            options:[1,2,3,4,5],
            page:4,
            fieldsPerLine:1
        },
        {
            title:"Q12. Ability to have athletes (the team) peak at appropriate times of the season / academic year",
            _name:"q_12",
            type:"radio",
            requiredStatus:true,
            hasOptions:true,
            options:[1,2,3,4,5],
            page:4,
            fieldsPerLine:1
        },
        {
            title:"Q13. Effective monitoring of student-athletes for over-training, injuries, or illness (on own or through use of experts) and appropriate response",
            _name:"q_13",
            type:"radio",
            requiredStatus:true,
            hasOptions:true,
            options:[1,2,3,4,5],
            page:4,
            fieldsPerLine:1
        },
        {
            title:"Q14. Effective feedback to athletes (the team) related to training and performance results",
            _name:"q_14",
            type:"radio",
            requiredStatus:true,
            hasOptions:true,
            options:[1,2,3,4,5],
            page:4,
            fieldsPerLine:1
        },
        {
            title:"Q15. Ensuring that elements surrounding competition (for example, nutrition, and transport to and from sites, accommodation, training venues, and so on) support the athletes’ (team’s) ability to perform well",
            _name:"q_15",
            type:"radio",
            requiredStatus:true,
            hasOptions:true,
            options:[1,2,3,4,5],
            page:4,
            fieldsPerLine:1
        },
        {
            title:"Q16. Work within assigned budget and effectively manage program resources",
            _name:"q_16",
            type:"radio",
            requiredStatus:true,
            hasOptions:true,
            options:[1,2,3,4,5],
            page:4,
            fieldsPerLine:1
        },
        {
            title:"Q17. Manage the logistics of team projects, including travel, team meetings, technical meetings and practice matches, and discipline",
            _name:"q_17",
            type:"radio",
            requiredStatus:true,
            hasOptions:true,
            options:[1,2,3,4,5],
            page:4,
            fieldsPerLine:1
        },
        {
            title:"Q18. Ability to learn from each competition cycle and apply lessons to future planning and decision making",
            _name:"q_18",
            type:"radio",
            requiredStatus:true,
            hasOptions:true,
            options:[1,2,3,4,5],
            page:4,
            fieldsPerLine:1
        },
        {
            title:"Q19. Ability to define and communicate a clear vision for athletes (team)",
            _name:"q_19",
            type:"radio",
            requiredStatus:true,
            hasOptions:true,
            options:[1,2,3,4,5],
            page:4,
            fieldsPerLine:1
        },
        {
            title:"Q20. Act consistently and instill in athletes (team) belief in their ability to perform at a national/ world level",
            _name:"q_20",
            type:"radio",
            requiredStatus:true,
            hasOptions:true,
            options:[1,2,3,4,5],
            page:4,
            fieldsPerLine:1
        },
        {
            title: "Nominee Name- Somaiya Sports Star (Girl)",
            _name: "nominee_ss_girl",
            type: "text",
            requiredStatus: true,
            hasOptions: false,
            page: 5,
            fieldsPerLine: 2
        },
        {
            title:"Nominee Main Sport/Event",
            _name:"nominee_ss_girl_sport",
            type:'text',
            requiredStatus:true,
            hasOptions:false,
            page:5,
            fieldsPerLine:2
        },
        {
            title:"Nominee Photo- Somaiya Sports Star",
            type:"file",
            requiredStatus : true,
            _name: "nominee_ss_girl_photo",
            hasOptions: false,
            page:5,
            fieldsPerLine:2
        },
        {
            title:"Supporting Documents ",
            type:"file",
            requiredStatus:true,
            _name:"nominee_ss_girl_supportings",
            hasOptions: false,
            page:5,
            fieldsPerLine: 2,
        },
        {
            title:"Q1. Outstanding Performance : ( International, national, state rankings/ placing, DSO/club/association awards)",
            _name:"q_21",
            type:"radio",
            requiredStatus:true,
            hasOptions:true,
            options:[1,2,3,4,5],
            page:6,
            fieldsPerLine:1
        },
        {
            title:"Q2. Encouragement of Effort : ( Participation, training personal best, commitment)",
            _name:"q_22",
            type:"radio",
            requiredStatus:true,
            hasOptions:true,
            options:[1,2,3,4,5],
            page:6,
            fieldsPerLine:1
        },
        {
            title:"Q3. Contribution to development of Sports culture in Somaiya campus : ( Participation in coaching, volunteering in school/college/academy activities and other non individual contributions)",
            _name:"q_23",
            type:"radio",
            requiredStatus:true,
            hasOptions:true,
            options:[1,2,3,4,5],
            page:6,
            fieldsPerLine:1
        },
        {
            title:"Q4. Intensity of Competition : ( Numbers, Organization structure,  Sport status [Olympic, professional, mainstream sports, etc.])",
            _name:"q_24",
            type:"radio",
            requiredStatus:true,
            hasOptions:true,
            options:[1,2,3,4,5],
            page:6,
            fieldsPerLine:1
        },
        {
            title: "Nominee Name- Somaiya Sports Star (Boy)",
            _name: "nominee_ss_boy",
            type: "text",
            requiredStatus: true,
            hasOptions: false,
            page: 7,
            fieldsPerLine: 2
        },
        {
            title:"Nominee Main Sport/Event",
            _name:"nominee_ss_boy_sport",
            type:'text',
            requiredStatus:true,
            hasOptions:false,
            page:7,
            fieldsPerLine:2
        },
        {
            title:"Nominee Photo- Somaiya Sports Star",
            type:"file",
            requiredStatus : true,
            _name: "nominee_ss_boy_photo",
            hasOptions: false,
            page:7,
            fieldsPerLine:2
        },
        {
            title:"Supporting Documents ",
            type:"file",
            requiredStatus:true,
            _name:"nominee_ss_boy_supportings",
            hasOptions: false,
            page:7,
            fieldsPerLine: 2,
        },
        {
            title:"Q1. Outstanding Performance : ( International, national, state rankings/ placing, DSO/club/association awards)",
            _name:"q_25",
            type:"radio",
            requiredStatus:true,
            hasOptions:true,
            options:[1,2,3,4,5],
            page:8,
            fieldsPerLine:1
        },
        {
            title:"Q2. Encouragement of Effort : ( Participation, training personal best, commitment)",
            _name:"q_26",
            type:"radio",
            requiredStatus:true,
            hasOptions:true,
            options:[1,2,3,4,5],
            page:8,
            fieldsPerLine:1
        },
        {
            title:"Q3. Contribution to development of Sports culture in Somaiya campus : ( Participation in coaching, volunteering in school/college/academy activities and other non individual contributions)",
            _name:"q_27",
            type:"radio",
            requiredStatus:true,
            hasOptions:true,
            options:[1,2,3,4,5],
            page:8,
            fieldsPerLine:1
        },
        {
            title:"Q4. Intensity of Competition : ( Numbers, Organization structure,  Sport status [Olympic, professional, mainstream sports, etc.])",
            _name:"q_28",
            type:"radio",
            requiredStatus:true,
            hasOptions:true,
            options:[1,2,3,4,5],
            page:8,
            fieldsPerLine:1
        },
    ]
    useEffect(()=>{
        axios.get('${process.env.REACT_APP_BACKEND_URL}/auth/validate', {
            headers: {
              'x-access-token': localStorage.getItem('token'),
              'user_id': localStorage.getItem('user_id')
            }
            })
            .then((res) => {
                setInstitution(res.data.institution);
            })
            .catch((err) => {
              console.log(err);
            })
    },[]);
  return SportsStarForm1;
}







