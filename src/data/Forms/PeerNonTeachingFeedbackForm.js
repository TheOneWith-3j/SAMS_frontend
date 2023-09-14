const PeerNonTeachingFeedbackForm = [
    {
        title: "Name of the Rater",
        _name: "rater_name",
        type: "text",
        requiredStatus : true,
        hasOptions: false,
        page: 1,
        fieldsPerLine:2
    },
    {
        title: "Name of the Institute:",
        _name: "institution_name",
        type: "text",
        requiredStatus : true,
        hasOptions: false,
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
        title: "Designation",
        _name: "designation",
        type: "text",
        requiredStatus : true,
        hasOptions: false,
        page: 1,
        fieldsPerLine:2
    },
    {
        title: "Somaiya mail ID",
        _name: "somaiya_mail_id",
        type: "email",
        requiredStatus : true,
        hasValidations:true,
        validationType:'somaiya-mail-id',
        hasOptions: false,
        page: 1,
        fieldsPerLine:2
    },
    {
        title: "Contact Number",
        _name: "contact_no",
        type: "text",
        requiredStatus : true,
        hasValidations:true,
        validationType:'contact-no',
        hasOptions: false,
        page: 1,
        fieldsPerLine:2
    },
    {
        title: "Name of the Employee to be Evaluated",
        _name: "nominee_name",
        type: "text",
        requiredStatus : true,
        hasOptions: false,
        page: 1,
        fieldsPerLine:2
    },
    {
        title: "Nomination category",
        _name: "category",
        type: "radio",
        requiredStatus : true,
        hasOptions: true,
        options:[
            "Outstanding Employee Educational Institute",
            "Promising Employee Educational Institute (≤ 3 years of service)",
            "Outstanding Administrator Somaiya Trust/GVPM",
            "Outstanding Employee K. J. Somaiya Hospital & Research Centre",
        ],
        page: 1,
        fieldsPerLine:1
    },
    {
        title: "He/she has developed cooperative relationships with others by encouraging collaboration among the team",
        _name: "q_01",
        type: "radio",
        requiredStatus : true,
        hasOptions: true,
        options:["Strongly Agree","Agree","Sometimes","Disagree","Strongly Disagree"],
        page: 2,
        fieldsPerLine:1
    },
    {
        title: "He/she takes inputs from other team members before making any critical decisions and shows genuine concern towards them",
        _name: "q_02",
        type: "radio",
        requiredStatus : true,
        hasOptions: true,
        options:["Strongly Agree","Agree","Sometimes","Disagree","Strongly Disagree"],
        page: 2,
        fieldsPerLine:1
    },
    {
        title: "Please rate the performance and the quality of work delivered while working in a team ",
        _name: "q_03",
        type: "radio",
        requiredStatus : true,
        hasOptions: true,
        options:["Outstanding","Excellent","Good","Average","Poor"],
        page: 2,
        fieldsPerLine:1
    },
    {
        title: "He/she handles criticism from others positively and work on improving them instead of arguing or justifying",
        _name: "q_04",
        type: "radio",
        requiredStatus : true,
        hasOptions: true,
        options:["Strongly Agree","Agree","Sometimes","Disagree","Strongly Disagree"],
        page: 2,
        fieldsPerLine:1
    },
    {
        title: "He/she respects other's ideas and perspective and encourage them to express freely. Recognizes individual contribution in the group and works as a good team member",
        _name: "q_05",
        type: "radio",
        requiredStatus : true,
        hasOptions: true,
        options:["Strongly Agree","Agree","Sometimes","Disagree","Strongly Disagree"],
        page: 2,
        fieldsPerLine:1
    },
    {
        title: "He/she serves as a role model for continuous improvement *",
        _name: "q_06",
        type: "radio",
        requiredStatus : true,
        hasOptions: true,
        options:["Strongly Agree","Agree","Sometimes","Disagree","Strongly Disagree"],
        page: 2,
        fieldsPerLine:1
    },
    {
        title: "He/she keeps himself/herself updated with the recent trends/changes in the environment and shares work-related knowledge and updates with others",
        _name: "q_07",
        type: "radio",
        requiredStatus : true,
        hasOptions: true,
        options:["Strongly Agree","Agree","Sometimes","Disagree","Strongly Disagree"],
        page: 2,
        fieldsPerLine:1
    },
    {
        title: "Conflict resolution: He or she uses his/her knowledge and expertise to analyse problems and provide solutions",
        _name: "q_08",
        type: "radio",
        requiredStatus : true,
        hasOptions: true,
        options:["Strongly Agree","Agree","Sometimes","Disagree","Strongly Disagree"],
        page: 2,
        fieldsPerLine:1
    },
    {
        title: "Give 3 reasons behind nominating the employee for the award",
        _name: "nomination_reason",
        type: "textarea",
        requiredStatus : true,
        hasOptions: false,
        page: 3,
        fieldsPerLine:1
    },
]

export default PeerNonTeachingFeedbackForm;