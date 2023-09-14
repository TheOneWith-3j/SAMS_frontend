const StudentsFormData = [
    {
        title: "Somaiya Mail ",
        _name: "email_id",
        type: "email",
        requiredStatus : true,
        hasValidations: true,
        validationType:"somaiya-mail-id",
        hasOptions: false,
        page: 1,
        fieldsPerLine:2
    },
    {
        title: "Student's Name",
        _name: "student_name",
        type: "text",
        requiredStatus : true,
        hasOptions: false,
        page: 1,
        fieldsPerLine:2
    },
    {
        title: "Class",
        _name: "students_class",
        type: "text",
        requiredStatus : true,
        hasOptions: false,
        page: 1,
        fieldsPerLine:2
    },
    {
        title: "Course",
        _name: "course",
        type: "text",
        requiredStatus : true,
        hasOptions: false,
        page: 1,
        fieldsPerLine:2
    },
    {
        title: "Name of Institution",
        _name:"institution_name",
        type: "dropdown",
        requiredStatus: true,
        dropdownHiddenItem:'Select your institute',
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
        page:1,
        fieldsPerLine:2
    },
    {
        title:"Please mark your nomination category",
        type:"radio",
        requiredStatus : true,
        _name: "nomination_category",
        hasOptions: true,
        options: [
            "Somaiya Star -Girl",
            "Somaiya Star -Boy",
            "Somaiya Star Citizen",
            "Somaiya Green Star/ Green Force",
            "Somaiya Star Innovator",
        ],
        page:1,
        fieldsPerLine:2
    },
    {
        title: "Recommendation Note ( minimum 600 words )",
        _name:"recommendation_note",
        type: 'textarea',
        hasOptions : false,
        requiredStatus : true,
        page:2,
        fieldsPerLine:1
    },
    {
        title:"Upload Supporting Documents",
        type:"file",
        requiredStatus : true,
        _name: "supportings",
        hasOptions: false,
        page:3,
        fieldsPerLine:1
    }
]

export default StudentsFormData;