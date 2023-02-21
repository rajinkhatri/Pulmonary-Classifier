import './Aboutus.css'
import { images } from '../components/Photos'

const Aboutus = () => {
    return (
        <div className="Aboutus" id='fourth_section'>
            <h1>
                Supervisor
            </h1>
            <Informationtt teachers={teachers[0]} />
            <h1>Students</h1>
            <div className='student-top'>
            <Informationst students={students[0]} />
            <Informationst students={students[1]} />
            </div>
            <div className='student-bot'>
            <Informationst students={students[2]} />
            <Informationst students={students[3]} />
            </div>
        </div>
    )
}

const teachers = [
    {
        Name: 'Er. Suramya Sharma Dahal',
        Rollno: 1234567890,
        link: 'https://www.linkedin.com/in/rajin-khatri-220b49217/'
    }
]

const students = [
    {
        Name: 'Rajin Khatri',
        Rollno: "THA076BCT034",
        link1: 'https://www.linkedin.com/in/rajin-khatri-220b49217/',
        link2: 'https://github.com/rajinkhatri',
        profile: images.rajin
    },
    {
        Name: 'Sujan Lamichhane',
        Rollno: "THA076BCT045",
        link1: 'https://www.linkedin.com/in/sujan-lamichhane-903ba5187/',
        link2: 'https://github.com/nextlevel7',
        profile: images.sujan
    },
    {
        Name: 'Amit Raj Pant',
        Rollno: "THA076BCT005",
        link1: 'https://www.linkedin.com/in/amit-pant/',
        link2: 'https://github.com/amitpant7',
        profile: images.amit
    },
    {
        Name: 'Pilot Khadka',
        Rollno: "THA076BCT026",
        link1: 'https://www.facebook.com/khadka314',
        link2: 'https://github.com/Pilot-Khadka',
        profile: images.pilot
    }
]

const Informationtt = (props) => {
    return (
        <div className='teacher-section'>
            <img src={images.dp} alt="describing profile" className='profile_image' />
            <p>
                {props.teachers.Name}
            </p>
            <p>
                {props.teachers.Rollno}
            </p>
            <a href={props.teachers.link} target="_blank" rel='noreferrer'>
                <img src={images.linkedimage} alt='linkedin_logo' className='links_image' />
            </a>
        </div>
    )
}

const Informationst = (props) => {
    return (
        <div className='student-section'>
            <img src={props.students.profile} alt="student profile" className='profile_image' />
            <p>
                {props.students.Name}
            </p>
            <p>
                {props.students.Rollno}
            </p>
            <a href={props.students.link1} target='_blank' rel='noreferrer'>
                <img src={images.linkedimage} alt='linkedin_logo' className='links_image' />
            </a>
            <a href={props.students.link2} target='_blank' rel='noreferrer'>
                <img src={images.githubimage} alt='github_logo' className='links_image' />
            </a>
            <a href={"mailto:khatrirajin64@gmail.com, sujan1234@gmail.com"}>
                <img src={images.mailimage} alt='mail_logo' className='links_image' />
            </a>
        </div>
    )
}

export default Aboutus