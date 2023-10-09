const FeedbackTeachingPeerForm =[
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
        _name: "institute_name",
        type: "text",
        requiredStatus : true,
        hasOptions: false,
        page: 1,
        fieldsPerLine:2
    },
    {
        title: "Department:",
        _name: "department_name",
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
        title: "Somaiya email id",
        _name: "somaiya_mail_id",
        type: "text",
        requiredStatus : true,
        hasValidations:true,
        validationType:'somaiya-mail-id',
        hasOptions: false,
        page: 1,
        fieldsPerLine:2
    },
    {
        title: "Contact Number",
        _name: "contact_number",
        type: "text",
        requiredStatus : true,
        hasValidations:true,
        validationType:'contact-no',
        hasOptions: false,
        page: 1,
        fieldsPerLine:2
    },
    {
        title: "Name of the teacher to be evaluated:",
        _name: "teacher_name",
        type: "text",
        requiredStatus : true,
        hasOptions: false,
        page: 1,
        fieldsPerLine:2
    },
    {
        title: "Nomination category",
        _name: "nomination_category",
        type: "radio",
        requiredStatus : true,
        hasOptions: true,
        options:["Promising Teacher", "Excellence in Teaching"],
        page: 1,
        fieldsPerLine:2
    },
    {
        title: "He/she collaborate with other faculties to contribute towards the field of research and development",
        _name: "q_01",
        type: "radio",
        requiredStatus : true,
        hasOptions: true,
        options:["Strongly Agree","Agree","Sometimes","Disagree","Strongly Disagree"],
        page: 2,
        fieldsPerLine:1
    },
    {
        title: "He/she actively participate and gets involved in various school/college committees for the betterment of students and the institution",
        _name: "q_02",
        type: "radio",
        requiredStatus : true,
        hasOptions: true,
        options:["Strongly Agree","Agree","Sometimes","Disagree","Strongly Disagree"],
        page: 2,
        fieldsPerLine:1
    },
    {
        title: "Rate the employee on his/her honesty, credibility and integrity while dealing with students and other faculties",
        _name: "q_03",
        type: "radio",
        requiredStatus : true,
        hasOptions: true,
        options:["Strongly Agree","Agree","Sometimes","Disagree","Strongly Disagree"],
        page: 2,
        fieldsPerLine:1
    },
    {
        title: "He/she accepts suggestions or criticism from co-workers and students gracefully",
        _name: "q_04",
        type: "radio",
        requiredStatus : true,
        hasOptions: true,
        options:["Strongly Agree","Agree","Sometimes","Disagree","Strongly Disagree"],
        page: 2,
        fieldsPerLine:1
    },
    {
        title: "He/she has developed a good rapport with students as well as with other faculties by treating them respectfully and encouraging their active participation",
        _name: "q_05",
        type: "radio",
        requiredStatus : true,
        hasOptions: true,
        options:["Strongly Agree","Agree","Sometimes","Disagree","Strongly Disagree"],
        page: 2,
        fieldsPerLine:1
    },
    {
        title: "He/she addresses to student's queries in a constructive manner and is available outside the classroom as well",
        _name: "q_06",
        type: "radio",
        requiredStatus : true,
        hasOptions: true,
        options:["Strongly Agree","Agree","Sometimes","Disagree","Strongly Disagree"],
        page: 2,
        fieldsPerLine:1
    },
    {
        title: "He/she demonstrates problem solving attitude and offers constructive suggestions for improvementy",
        _name: "q_07",
        type: "radio",
        requiredStatus : true,
        hasOptions: true,
        options:["Strongly Agree","Agree","Sometimes","Disagree","Strongly Disagree"],
        page: 2,
        fieldsPerLine:1
    },
    {
        title: "Rate him/her on the effectiveness of his/her teaching methodology",
        _name: "q_08",
        type: "radio",
        requiredStatus : true,
        hasOptions: true,
        options:["Outstanding","Excellent","Good","Average","Poor"],
        page: 2,
        fieldsPerLine:1
    },
    {
        title: "He/she is dynamic and adapts well to changes in the subject curriculum or any other directives from the university",
        _name: "q_09",
        type: "radio",
        requiredStatus : true,
        hasOptions: true,
        options:["Strongly Agree","Agree","Sometimes","Disagree","Strongly Disagree"],
        page: 2,
        fieldsPerLine:1
    },
    {
        title: "Give 3 reasons behind nominating the teacher for the award",
        _name: "nomination_reason",
        type: "textarea",
        requiredStatus : true,
        hasOptions: false,
        page: 3,
        fieldsPerLine:1
    },
]

export default FeedbackTeachingPeerForm