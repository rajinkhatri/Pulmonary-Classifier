import './Aboutus.css'
import {images} from '../components/Photos'

const Aboutus= () => {
    return (
        <div className="Aboutus">
            <h1>
                Supervisor
            </h1>
            <Informationtt teachers={teachers[0]} />
            <h1>Students</h1>
            <Informationst students={students[0]}/>
            <Informationst students={students[1]}/>
            <Informationst students={students[2]}/>
            <Informationst students={students[3]}/>
        </div>
    )
}

const teachers = [
    {Name: 'Er. Suramya Sharma Dahal',
    Rollno:1234567890,
    link:'https://www.linkedin.com/in/rajin-khatri-220b49217/'}
]

const students = [
    {Name: 'Rajin Khatri', Rollno:"THA076BCT034", link1:'https://www.linkedin.com/in/rajin-khatri-220b49217/'},
    {Name: 'Sujan Lamichhane', Rollno:"THA076BCT045", link1:'https://www.linkedin.com/in/sujan-lamichhane-903ba5187/'},
    {Name: 'Amit Raj Pant', Rollno:"THA076BCT005", link1:'https://www.facebook.com/97m.it'},
    {Name: 'Pilot Khadka', Rollno:"THA076BCT026", link1:'https://www.facebook.com/khadka314'}
]

const Informationtt = (props) => {
    return(
        <div className='teacher-section'>
            <img src={images.dp} alt="describing profile"/>
            <p>{props.teachers.Name}</p>
            <p>{props.teachers.Rollno}</p>
            <a href={props.teachers.link} target="_blank" rel='noreferrer'>Linked in profile</a>
        </div>
    )
}

const Informationst = (props) => {
    return(
        <div className='student-section'>
            <img src={images.dp} alt="student profile"/>
            <p>{props.students.Name}</p>
            <p>{props.students.Rollno}</p>
            <a href={props.students.link1} target='_blank' rel='noreferrer'>Linked in</a>
        </div>
    )
}

export default Aboutus