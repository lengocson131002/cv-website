import fashionChatBotImg from "../asset/fashion-chatbot.PNG"
import fashionChatBotProfile from "../asset/fashionshop-profile.jpg"

import fashionChatBotVideo from "../asset/fashion-chatbot.mkv"
import bid from "../asset/bid.PNG"
import p0001 from "../asset/proposal/0001.jpg"
import p0002 from "../asset/proposal/0002.jpg"
import p0003 from "../asset/proposal/0003.jpg"
import p0004 from "../asset/proposal/0004.jpg"
import p0005 from "../asset/proposal/0005.jpg"
import p0006 from "../asset/proposal/0006.jpg"
import p0007 from "../asset/proposal/0007.jpg"
import p0008 from "../asset/proposal/0008.jpg"
import p0009 from "../asset/proposal/0009.jpg"
import p0010 from "../asset/proposal/0010.jpg"

import l001 from "../asset/livestreamChatBot/001.jpg"
import l002 from "../asset/livestreamChatBot/002.png"
import l003 from "../asset/livestreamChatBot/003.png"
import l004 from "../asset/livestreamChatBot/004.png"
import lProfile from "../asset/livestreamChatBot/profile.jpg"

import avt from "../asset/avt.png"

export { avt as avt }

// Email
export const contacts = {
    EMAIL: "hoale1607@gmail.com",
    ADDRESS: "Ho Chi Minh City",
    LINKEDIN: "https://www.linkedin.com/in/hoa-le-44a3461a1/",
    GITHUB: "https://github.com/hoahanie"
}

export const nav_items = {
    HOME: "#home",
    PROJECTS: "#projects",
    RESUME: "#resume",
    CONTACT: "#contact"
}

export const ABOUT_ME =
    "I am an enthusiastic, self-motivated, reliable, responsible and hard working person. I am a mature team worker and adaptable to all challenging situations"
export const JOB = "a Business Analyst"
export const links = {
    FACEBOOK: "",
    GMAIL: "",
    LINKEDIN: ""
}

export const education = [
    {
        organization: "Ho Chi Minh City University of Education",
        time: "2017 - 2021",
        major: "Business English"
    },
    {
        organization: "True Skill Center (2022)",
        time: "2022",
        major: "Business Analyst Certification "
    }
]

export const experiment = [
    {
        organization: "Truong Minh Thinh Technology Join Stock Company",
        subtitle:
            "Working directly with team AI in NLP Chatbot, machine learning, CV, Auto speech Recognition projects",
        time: "Jan 2021 - now",
        position: "Project Assistant/BA",
        descriptions: [
            "Actively communicate with stakeholders to elicit and understand requirements",
            "Analyze requirements and propose suitable solutions that bring high value for the stakeholders",
            "Construct workflow; write software requirement specifications/acceptance criteria",
            "Work closely with stakeholders to ensure features are being implemented to meet requirements",
            "Assist with software testing and quality assurance as needed",
            "Troubleshoot problems related to software as needed",
            "Guide the end-user to use the software as needed"
        ]
    },
    {
        organization:
            "ONBRAND CORPORATION - Providing e-commerce services to businesses, corporations, manufacturers, specifically Amazon selling execution service",
        time: "Feb 2020 - Jul 2020",
        position: "Account Executive",
        descriptions: [
            "Providing support for clients by learning about and satisfying their needs",
            "Making cold calls or reaching out to prospects",
            "Following up with prospects several times throughout the sales cycle to ensure needs are being met",
            " Presenting and demonstrating the value of products and services to prospective buyers",
            "Compiling and analyzing data to find trends",
            "Developing sales strategies and setting quotas with team",
            "Staying current on company offerings and industry trends",
            "Maintaining a database of contact information",
            "Building long - lasting, mutually beneficial relationships with external contacts and internal departments to create a better customer experience",
            "Handling complaints and negotiations"
        ]
    },

    {
        organization: "Global Brand _ Start-up company",
        time: "May 2020 - Aug 2020",
        position: "Product Team",
        descriptions: [
            "Product definition: derive business value drivers together with business domain experts to come up with product vision, product roadmap",
            "Analyze the market, competitors, research new trends, and propose new product ideas",
            "Working closely with Stakeholders in all activities of building products",
            " Participate in feature design & product roadmap development",
            "Responsible for writing instructional documents, contracts, quotation"
        ]
    }
]

export const personalSkills = {
    technicalSkills: [
        {
            name: "Task management",
            description: "Product backlog management with Azure, Jira"
        },
        {
            name: "Design",
            description: "Experience with Figma, Balsamiq, Canva"
        },
        {
            name: "Programming Languages",
            description: "Experience working on Python"
        },
        {
            name: "Database",
            description: "Basic knowledge about database (MySQL, PostgreSQL)"
        }
    ],

    softSkills: [
        {
            name: "Prioritization skills",
            description:
                "Experience in managing product backlog and prioritize important features, define and measure product success metrics"
        },
        {
            name: "Problem solving",
            description:
                "Flexibly and actively analyzing, finding root cause of problem. Being interested and passionate about building an end-to-end product development cycle (Build, Measure, Learn)"
        },
        {
            name: "Research",
            description:
                "Researching and analyzing product vision, business domain, competitive, market to scope out the right features, define the strategy for new product development"
        },
        {
            name: "Communication",
            description:
                "Experience to engage with Engineering, Testing team to delivery the right output at the right time"
        },
        {
            name: "People management",
            description:
                "Experience in managing product backlog and prioritize important features, define and measure product success metrics"
        },
        {
            name: "Organization",
            description:
                "Knowledge and experience in product development phases. \nUnderstanding of software process model such as: Waterfall, Agile "
        },
        {
            name: "Others",
            description: "Knowledge in developing test plan"
        }
    ],
    languages: [
        {
            language: "English",
            description: "",
            subSkills: [
                {
                    name: "Speaking, Listening",
                    level: 70
                },
                {
                    name: "Writing, Reading",
                    level: 60
                }
            ]
        },
        {
            language: "Japanese",
            description: "Level: N4",
            level: 40
        }
    ]
}

export const projects = [
    {
        name: "Rule-based Chatbot _ PoC project",
        field: "Chat bot",
        description:
            "AI Chatbot combines with natural language processing to understand user intent, recognize product images, thereby providing information quickly and efficiently. \n" +
            "Main Scenarios:\n" +
            " - Image recognition\n" +
            " - Provide product information (color, size, quantity ..)\n" +
            " - Size consultation\n" +
            " - Order\n" +
            " - Exchange or return products",
        profile: fashionChatBotProfile,
        imgs: [],
        video: {
            path: fashionChatBotVideo,
            caption: "Video demo"
        }
    },
    {
        name: "Proposal",
        description:
            "Working closely with Account Team, market research Team to write a research proposal to clarify client objectives and key ideas \nEstimating resources, timeline for projects",
        profile: bid,
        field: "Proposal",
        imgs: [
            {
                caption: "Image demo",
                path: p0001
            },
            {
                caption: "Image demo",
                path: p0002
            },
            {
                caption: "Image demo",
                path: p0003
            },
            {
                caption: "Image demo",
                path: p0004
            },
            {
                caption: "Image demo",
                path: p0005
            },
            {
                caption: "Image demo",
                path: p0006
            },
            {
                caption: "Image demo",
                path: p0007
            },
            {
                caption: "Image demo",
                path: p0008
            },
            {
                caption: "Image demo",
                path: p0009
            },
            {
                caption: "Image demo",
                path: p0010
            }
        ]
    },
    {
        name: "Livestream Chatbot",
        field: "Chat bot",
        description: "Chatbot supports automatic ordering when customers comment on Live for Livestream shops",
        profile: lProfile,
        imgs: [
            {
                caption: "Bot Scenario Design",
                path: l001
            },
            {
                caption: "User story mapping",
                path: l002
            },
            {
                caption: "Workflow",
                path: l003
            },
            {
                caption: "Wireframe",
                path: l004
            }
        ]
    }
]
