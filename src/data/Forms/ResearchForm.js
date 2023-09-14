const ResearchForm = [
    {
        title: "Name of the Faculty",
        _name: "faculty_name",
        type: "text",
        requiredStatus : true,
        hasOptions: false,
        page: 1,
        fieldsPerLine:2
    },
    {
        title: "Designation",
        _name: "designation",
        type: "text",
        requiredStatus : true,
        hasOptions: false,
        page: 1,
        fieldsPerLine:2
    },
    {
        title: "Institution",
        _name: "institution",
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
        fieldsPerLine:2
    },
    {
        title: "Department",
        _name: "department",
        type: "text",
        requiredStatus : true,
        hasOptions: false,
        page: 1,
        fieldsPerLine:2
    },
    {
        title: "Affiliation with our Organization (tenure in years)",
        _name: "tenure",
        type: "text",
        requiredStatus : true,
        hasOptions: false,
        page: 1,
        fieldsPerLine:2
    },
    {
        title: "Number of Original Articles",
        _name: "org_articles_count",
        type: "number",
        requiredStatus : true,
        hasOptions: false,
        page: 2,
        fieldsPerLine:2
    },
    {
        title: "Number of Review Papers",
        _name: "review_papers_count",
        type: "number",
        requiredStatus : true,
        hasOptions: false,
        page: 2,
        fieldsPerLine:2
    },
    {
        title: "Number of Letters",
        _name: "letters_count",
        type: "number",
        requiredStatus : true,
        hasOptions: false,
        page: 2,
        fieldsPerLine:2
    },
    {
        title: "Number of Case Studies",
        _name: "case_studies_count",
        type: "number",
        requiredStatus : true,
        hasOptions: false,
        page: 2,
        fieldsPerLine:2
    },
    {
        title: "Number of Books",
        _name: "books_count",
        type: "number",
        requiredStatus : true,
        hasOptions: false,
        page: 2,
        fieldsPerLine:2
    },
    {
        title: "Number of Chapters",
        _name: "chapters_count",
        type: "number",
        requiredStatus : true,
        hasOptions: false,
        page: 2,
        fieldsPerLine:2
    },
    {
        title: "Number of presentations in International Conferences",
        _name: "presentations_international_count",
        type: "number",
        requiredStatus : true,
        hasOptions: false,
        page: 3,
        fieldsPerLine:2
    },
    {
        title: "Number of presentation in National Conference",
        _name: "presentation_national_count",
        type: "number",
        requiredStatus : true,
        hasOptions: false,
        page: 3,
        fieldsPerLine:2
    },
    {
        title: "Number of presentations in International Seminars",
        _name: "international_seminar_count",
        type: "number",
        requiredStatus : true,
        hasOptions: false,
        page: 3,
        fieldsPerLine:2
    },
    {
        title: "Number of presentations in National Seminars",
        _name: "national_seminar_count",
        type: "number",
        requiredStatus : true,
        hasOptions: false,
        page: 3,
        fieldsPerLine:2
    },
    {
        title: "Number of presentations in International Workshops",
        _name: "international_workshops_count",
        type: "number",
        requiredStatus : true,
        hasOptions: false,
        page: 3,
        fieldsPerLine:2
    },
    {
        title: "Number of presentations in National Workshops",
        _name: "national_workshops_count",
        type: "number",
        requiredStatus : true,
        hasOptions: false,
        page: 3,
        fieldsPerLine:2
    },
    {
        title: "Number of Minor Projected - Completed",
        _name: "completed_minorp_count",
        type: "number",
        requiredStatus : true,
        hasOptions: false,
        page: 4,
        fieldsPerLine:2
    },
    {
        title: "Number of Minor Projected - Ongoing",
        _name: "ongoing_minorp_count",
        type: "number",
        requiredStatus : true,
        hasOptions: false,
        page: 4,
        fieldsPerLine:2
    },
    {
        title: "Number of Major Projected - Completed",
        _name: "completed_majorp_count",
        type: "number",
        requiredStatus : true,
        hasOptions: false,
        page: 4,
        fieldsPerLine:2
    },
    {
        title: "Number of Major Projected - Ongoing",
        _name: "ongoing_majorp_count",
        type: "number",
        requiredStatus : true,
        hasOptions: false,
        page: 4,
        fieldsPerLine:2
    },
    {
        title: "Number of Research Consultancy Assignments- Completed",
        _name: "completed_consultancy_count",
        type: "number",
        requiredStatus : true,
        hasOptions: false,
        page: 4,
        fieldsPerLine:2
    },
    {
        title: "Number of Research Consultancy Assignments - Ongoing",
        _name: "ongoing_consultancy_count",
        type: "number",
        requiredStatus : true,
        hasOptions: false,
        page: 4,
        fieldsPerLine:2
    },
    {
        title: "Total Amount of Revenue generated through Major, Minor research projects and Consultancy assignments (Rs.)",
        _name: "revenue_from_projects",
        type: "number",
        requiredStatus : true,
        hasOptions: false,
        page: 4,
        fieldsPerLine:1
    },
    {
        title: "Number of Patents Granted",
        _name: "granted_patents_count",
        type: "number",
        requiredStatus : true,
        hasOptions: false,
        page: 5,
        fieldsPerLine:2
    },
    {
        title: "Number of Patents Filed",
        _name: "filed_patents_count",
        type: "number",
        requiredStatus : true,
        hasOptions: false,
        page: 5,
        fieldsPerLine:2
    },
    {
        title: "Number of Copyrights Granted",
        _name: "granted_copyrights_count",
        type: "number",
        requiredStatus : true,
        hasOptions: false,
        page: 5,
        fieldsPerLine:2
    },
    {
        title: "Number of Copyrights Filed",
        _name: "filed_copyrights_count",
        type: "number",
        requiredStatus : true,
        hasOptions: false,
        page: 5,
        fieldsPerLine:2
    },
    {
        title: "Number of Industrial Designs Granted",
        _name: "granted_industrial_designs_count",
        type: "number",
        requiredStatus : true,
        hasOptions: false,
        page: 5,
        fieldsPerLine:2
    },
    {
        title: "Number of Industrial Designs Filed",
        _name: "filed_industrial_designs_count",
        type: "number",
        requiredStatus : true,
        hasOptions: false,
        page: 5,
        fieldsPerLine:2
    },
    {
        title: `Number of International Research awards won between 2017 to ${new Date().getFullYear()}`,
        _name: "international_awards_won_count",
        type: "number",
        requiredStatus : true,
        hasOptions: false,
        page: 6,
        fieldsPerLine:2
    },
    {
        title: `Number of National Research awards won between 2017 to ${new Date().getFullYear()}`,
        _name: "national_awards_won_count",
        type: "number",
        requiredStatus : true,
        hasOptions: false,
        page: 6,
        fieldsPerLine:2
    },
    {
        title: "Upload the Research Accomplishment Document",
        _name: "evidence_of_research",
        type: "file",
        requiredStatus : true,
        hasOptions: false,
        page: 7,
        fieldsPerLine:2
    },
    {
        title: "Major evidences for the data provided in this form as a single PDF file",
        _name: "evidence_of_data_provided",
        type: "file",
        requiredStatus : true,
        hasOptions: false,
        page: 7,
        fieldsPerLine:2
    },
    {
        title: "I take complete responsibility that the information shared and the related documents uploaded are true and valid",
        _name: "confirmation_of_trueData",
        type: "radio",
        requiredStatus : true,
        hasOptions: true,
        options:["Agree"],
        page: 7,
        fieldsPerLine:1
    },
]

export default ResearchForm