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
    {Name: 'Sir', Rollno:5}
]

const students = [
    {Name: 'Rajin', Rollno:1},
    {Name: 'Sujan', Rollno:2},
    {Name: 'Amit', Rollno:3},
    {Name: 'Pilot', Rollno:4}
]

const Informationtt = (props) => {
    return(
        <div>
            {/* <img src="./" alt="${students.Name}"/> */}
            <p>{props.teachers.Name}</p>
            <p>{props.teachers.Rollno}</p>
        </div>
    )
}

const Informationst = (props) => {
    return(
        <div>
            {/* <img src="./" alt="${students.Name}"/> */}
            <p>{props.students.Name}</p>
            <p>{props.students.Rollno}</p>
        </div>
    )
}

export default Aboutus