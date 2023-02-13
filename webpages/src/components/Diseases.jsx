import './Diseases.css'

const Diseases = () => {
    return (
        <div className="Disease" id='#second_section'>
            <h1 className="Topic">Some information about the Diseases</h1>
            <Tuberculosis />
            <Pneumonia />
        </div>
    )
}

const Tuberculosis = () => {
    return (
        <div className="Disease1">
            <img src={require("../images/Tuber/Tuber1.png")} alt="photo1" />
            <InfoDisease />
        </div>
    )
}

const InfoDisease = () => {
    return (
        <div className="text_part">
            <p>Tuberculosis (TB) is a bacterial infection
                that mainly affects the lungs, but it can also affect other
                parts of the body. It is caused by the bacterium Mycobacterium
                tuberculosis. TB is spread through the air when a person
                with TB of the lungs or throat coughs, sneezes, or talks.
                It can be a serious and life-threatening disease,
                but it can be cured with proper treatment.</p>
                <p>
                    Find more info at <a href='https://en.wikipedia.org/wiki/Tuberculosis' target="_blank" rel='noreferrer'>Tuberculosis</a>
                </p>
        </div>
    )
}

const Pneumonia = () => {
    return (
        <div className="Disease2">
            <img src={require("../images/Pnemo/pnemo1.png")} alt="Photo2" />
            <Info2 />
        </div>
    )
}

const Info2 = () => {
    return (
        <div className="text_part">
            <p>
                Pneumonia is an infection that affects the lungs.
                It can be caused by a variety of microorganisms,
                including bacteria, viruses, fungi, and parasites.
                Pneumonia can range in severity from mild to severe.
                Symptoms can include fever, cough, shortness of breath,
                chest pain, and fatigue. Pneumonia can be treated with
                medications, such as antibiotics and antivirals,
                depending on the cause of the infection.
                In severe cases, hospitalization may be necessary.
            </p>
            <p>
            Find more info at <a href='https://en.wikipedia.org/wiki/Pneumonia' target="_blank" rel='noreferrer'>Pneumonia</a>
            </p>
        </div>
    )
}

export default Diseases;

