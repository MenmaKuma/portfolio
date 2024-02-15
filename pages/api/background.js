const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Paier Collgege of Art, inc',
                degree: 'Mobile Application Design',
                detail: "Certificate in Mobile Application Design.",
                year: '2023-2024'
            },
            {
                id: 1,
                title: 'Housatonic Community College',
                degree: 'Computer Science',
                detail: "In progress.",
                year: '2020-'
            },
            {
                id: 2,
                title: 'Fairchild Wheeler',
                degree: 'Information Technology HS Degree',
                detail: "Completed Information Technology ciriculum at FCW.",
                year: '2016-2020'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'JMM Technologies',
                role: 'Frontend Developer',
                url: 'https://jmm.ltd/',
                desc: 'As a frontend developer, I use React, Next & JavaScript to build user interfaces for web applications.',
                year: '02/2023 - Present',
                location: 'Peshawar, Pakistan'
            },
            {
                id: 2,
                title: 'HauzaTech',
                role: 'Internee',
                url: 'no website',
                desc: 'As an Internee, I learned how to use React & JavaScript to build interactive websites.',
                year: '02/2023 - Present',
                location: 'Peshawar, Pakistan'
            },
            {
                id: 3,
                title: 'Encoder Bytes',
                role: 'PHP Developer',
                url: 'https://www.encoderbytes.com/',
                desc: "I work there as a PHP developer, there I learned how to do CRUD'S operations in PHP, also I worked on Firebase",
                year: '09/2020 - 02/2021',
                location: 'Peshawar, Pakistan'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
