const NonTeachingForm = [
    {
        title: "Email",
        _name: "email_id",
        type: "email",
        requiredStatus: true,
        hasValidations:true,
        validationType:'email-id',
        hasOptions: false,
        page: 1,
        fieldsPerLine: 2
    },
    {
        title: "Name of the Staff",
        _name: "staff_name",
        type: "text",
        requiredStatus: true,
        hasOptions: false,
        page: 1,
        fieldsPerLine: 2
    },
    {
        title: "Categories: Please Tick One as per Eligibility",
        _name: "award_category",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: ["Employee of the Year (More than 3 years of service)",
            "Promising Employee Educational Institute (1 to 3 years of service)",
            "Promising Employee Somaiya Trust/GVPM (1 to 3 years of service)",
            "Outstanding Employee Somaiya Trust/GVPM",
            "Outstanding Employee K. J. Somaiya Hospital & Research Centre"
        ],
        page: 1,
        fieldsPerLine: 1
    },
    {
        title: "Name of institute",
        _name: "institute_name",
        type: "dropdown",
        dropdownHiddenItem:'Select your institute',
        requiredStatus: true,
        hasOptions: true,
        options: [
            "The Somaiya School",
            "S. K. Somaiya Prathmik Shala",
            "S K Somaiya Vinay Mandir High School",
            "Somaiya Vidyamandir- Sakarwadi",
            "Shri Sharda English Medium School Kopargaon",
            "Somaiya Vidya Mandir- Laxmiwadi",
            "Somaiya Shishu Niketan Primary School- Sameerwadi",
            "Somaiya Vinaymandir High School- Sameerwadi",
            "KJ Somaiya English Medium School Sameerwadi",
            "Nareshwadi Learning Centre- Dahanu",
            "SK Somaiya Vinay Mandir High School, Mumbai",
            "KJ Somaiya Junior College of Arts, Commerce and Science",
            "SK Somaiya Vinay Mandir Junior College, Mumbai",
            "KJ Somaiya Private Industrial Training Institute",
            "Smt. Sakarben Somaiya Junior College of Education (DEd)",
            "KJ Somaiya Institute of Engineering and Information Technology, Ayurvihar",
            "KJ Somaiya College of Engineering",
            "KJ Somaiya Institute of Management",
            "KJ Somaiya Polytechnic College",
            "KJ Somaiya College of Arts and Commerce",
            "KJ Somaiya College of Science and Commerce",
            "K.J Somaiya College of Comprehensive College of Education , Training and Research",
            "KJ Somaiya Bhartiya Sanskriti Peetham",
            "KJ Somaiya Centre for Buddhish Studies",
            "KJ Somaiya Centre for Studies in Jainism",
            "KJ Somaiya Medical College and Research Centre",
            "KJ Somaiya College of Physiotherapy",
            "KJ Somaiya School and College of Nursing",
            "Somaiya Sports Academy",
            "SK Somaiya College (SVU)",
            "SK Somaiya College of Arts, Science and Commerce (MU)"
        ],
        page: 1,
        fieldsPerLine: 2
    },
    {
        title: "Department",
        _name: "department",
        type: "text",
        requiredStatus: true,
        hasOptions: false,
        page: 1,
        fieldsPerLine: 2
    },
    {
        title: "Present Position",
        _name: "designation",
        type: "text",
        requiredStatus: true,
        hasOptions: false,
        page: 1,
        fieldsPerLine: 2
    },
    {
        title: "Date of appointment",
        _name: "appointment_date",
        type: "date",
        requiredStatus: true,
        hasOptions: false,
        hasValidations:true,
        validationType:'date',
        page: 1,
        fieldsPerLine: 2
    },
    {
        title: "Somaiya Email Id",
        _name: "somaiya_email_id",
        type: "email",
        requiredStatus: true,
        hasValidations:true,
        validationType:'somaiya-mail-id',
        hasOptions: false,
        page: 1,
        fieldsPerLine: 2
    },
    {
        title: "Phone Number",
        _name: "phone_number",
        type: "text",
        requiredStatus: true,
        hasValidations:true,
        validationType:'contact-no',
        hasOptions: false,
        page: 1,
        fieldsPerLine: 2
    },

    {
        title: "Q1. Accepts responsibilities and performs duties above and beyond what is normally expected",
        _name: "q_01",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5],
        page: 2,
        fieldsPerLine: 1
    },
    {
        title: "Q2. Is flexible, responds and adapts well to internal & external changes.",
        _name: "q_02",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5],
        page: 2,
        fieldsPerLine: 1
    },
    {
        title: "Q3. Determines broad knowledge and competence in a work related topics",
        _name: "q_03",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5],
        page: 2,
        fieldsPerLine: 1
    },
    {
        title: "Q4. Uses knowledge and expertise to solve problems quickly",
        _name: "q_04",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5],
        page: 2,
        fieldsPerLine: 1
    },
    {
        title: "Q5. Handles a large workload effectively and in a timely manner",
        _name: "q_05",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5],
        page: 2,
        fieldsPerLine: 1
    },

    {
        title: "Q6. Brings in best practices from other Departments/ Institutes/ Universities for improvement of his/ her independent work.",
        _name: "q_06",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5],
        page: 3,
        fieldsPerLine: 1
    },
    {
        title: "Q7. Has shows outstanding performance which has brought attention and distinction to the Department/ University",
        _name: "q_07",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5],
        page: 3,
        fieldsPerLine: 1
    },

    {
        title: "Q8. Is a good team player and encourages teamwork",
        _name: "q_08",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5],
        page: 4,
        fieldsPerLine: 1
    },
    {
        title: "Q9. Manages crises well as well as helps others to get through their crisis",
        _name: "q_09",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5],
        page: 4,
        fieldsPerLine: 1
    },
    {
        title: "Q10. Interacts with others in a positive, enthusiastic and cheerful manner",
        _name: "q_10",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5],
        page: 4,
        fieldsPerLine: 1
    },
    {
        title: "Q11. Assists others with both personal and professional challenges that impact work",
        _name: "q_11",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5],
        page: 4,
        fieldsPerLine: 1
    },
    {
        title: "Q12. Commands respect of co-workers, supervisor, students and clients alike",
        _name: "q_12",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5],
        page: 4,
        fieldsPerLine: 1
    },

    {
        title: "Q13. Suggests and/or develops new work methods which increases productivity and saves time and money",
        _name: "q_13",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5],
        page: 5,
        fieldsPerLine: 1
    },
    {
        title: "Q14. Recognizes work of others to increase effectiveness and identifies / addresses work problems. If any.",
        _name: "q_14",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5],
        page: 5,
        fieldsPerLine: 1
    },

    {
        title: "Q15. Takes the initiative to improve individual skills and knowledge.",
        _name: "q_15",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5],
        page: 6,
        fieldsPerLine: 1
    },
    {
        title: "Q16. Recognizes others special events and/or accomplishments, either publicly or privately.",
        _name: "q_16",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5],
        page: 6,
        fieldsPerLine: 1
    },
    {
        title: "Q17. Helps new employees to settle & adapt to the work environment.",
        _name: "q_17",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5],
        page: 6,
        fieldsPerLine: 1
    },
    {
        title: "Q18. Acts as a mentor to others by providing advice, guidance, feedback and encouragement.",
        _name: "q_18",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5],
        page: 6,
        fieldsPerLine: 1
    },
    {
        title: "Q19. Shares knowledge and skills with others.",
        _name: "q_19",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5],
        page: 6,
        fieldsPerLine: 1
    },

    {
        title: "Q20. Regularity & Punctuality at work",
        _name: "q_20",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5],
        page: 7,
        fieldsPerLine: 1
    },
    {
        title: "Q21. Participation in social and community welfare activities",
        _name: "q_21",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5],
        page: 7,
        fieldsPerLine: 1
    },
    {
        title: "Q22. Professional Up-gradation",
        _name: "q_22",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5],
        page: 7,
        fieldsPerLine: 1
    },
    {
        title: "Q23. Promptness in work clearance",
        _name: "q_23",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5],
        page: 7,
        fieldsPerLine: 1
    },
    {
        title: "Q24. Accuracy & Dependability",
        _name: "q_24",
        type: "radio",
        requiredStatus: true,
        hasOptions: true,
        options: [1,2,3,4,5],
        page: 7,
        fieldsPerLine: 1
    },
    {
        title: "Evidance / Proof ",
        _name: "proof_docs",
        type: "file",
        requiredStatus: true,
        hasOptions: false,
        page: 8,
        fieldsPerLine: 1
    },
    {
        title: "Kindly attach the profile photograph of the nominated applicant.",
        _name: "nominee_photograph",
        type: "file",
        requiredStatus: true,
        hasOptions: false,
        page: 8,
        fieldsPerLine: 1
    },

]

export default NonTeachingForm