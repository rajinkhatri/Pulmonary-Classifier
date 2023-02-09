import './Diseases.css'

const Diseases = () => {
    return (
    <div className='Diseases_page'>
        <h1>Some information about diseases</h1>
        <Upperpart />
        <Upperpart />
    </div>
    )
}

const Upperpart = () => {
    return(
        <div className="upper-part">
            <div >
                <img className="Image-section" src={require("../images/appicoon.gif")} alt='imageofxray' />
            </div>
            <div className='text-section'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nostrum vel sunt asperiores labore quo ex saepe maiores,
                sed nam dolores adipisci ab, eum excepturi quod.
            </div>
        </div>
    )
}

export default Diseases
