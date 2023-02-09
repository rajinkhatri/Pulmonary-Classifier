import './Aboutus.css'
import {images} from '../components/Photos'

const Aboutus= () => {
    return (
        <div className="Abooutus">
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
    {Name: 'Sir',
    Rollno:5,
    link:'https://www.linkedin.com/in/rajin-khatri-220b49217/'}
]

const students = [
    {Name: 'Rajin', Rollno:1, link:'https://www.linkedin.com/in/rajin-khatri-220b49217/'},
    {Name: 'Sujan', Rollno:2, link:'https://www.linkedin.com/in/sujan-lamichhane-903ba5187/'},
    {Name: 'Amit', Rollno:3, link:'https://www.facebook.com/97m.it'},
    {Name: 'Pilot', Rollno:4, link:'https://www.facebook.com/khadka314'}
]

const Informationtt = (props) => {
    return(
        <div className='teacher-section'>
            <img src={images.dp} alt="describing profile"/>
            <p>{props.teachers.Name}</p>
            <p>{props.teachers.Rollno}</p>
            <a target="_blank" href={props.teachers.link}>Linked in profile</a>
        </div>
    )
}

const Informationst = (props) => {
    return(
        <div className='student-section'>
            <img src={images.dp} alt="student profile"/>
            <p>{props.students.Name}</p>
            <p>{props.students.Rollno}</p>
            <a target='_blank' href={props.students.link}>Linked in</a>
        </div>
    )
}

export default Aboutus