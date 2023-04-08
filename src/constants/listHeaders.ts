const baseHeaders = [
    { key: "id", title: "Sr.No" },
    { key: "marks_obtained", title: "Marks Obtained" },
    { key: "max_marks", title: "Max Marks" },
]

const markListHeaders = {
    students: [
        baseHeaders[0],
        { key: "subject", title: "Subject" },
        { key: "teacher_name", title: "Teacher Name" },
        baseHeaders[1],
        baseHeaders[2],
    ],
    teachers: [
        baseHeaders[0],
        { key: "subject", title: "Topic" },
        baseHeaders[1],
        baseHeaders[2],
    ]
}

export default markListHeaders;

// const baseTitles = [
//     "Sr. NO",
//     "Marks Obtained",
//     "Max. Marks",
// ]

// const titles = {
//     students: [
//         baseTitles[0],
//         "Subject",
//         "Teacher Name",
//         baseTitles[1],
//         baseTitles[2],
//     ],
//     teachers: [
//         baseTitles[0],
//         "Topic",
//         baseTitles[1],
//         baseTitles[2],
//     ]
// }

// const baseKeys = [
//     "id",
//     "subject",
//     "marks_obtained",
//     "max_marks",
// ]

// const keys = {
//     students: [
//         ...baseKeys
//     ]
// }

// export default markListHeaders;