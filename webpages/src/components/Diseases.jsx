import lungs from '../components/Photos';
import './Diseases.css';

const Diseases = () => {
    return <div className='Diseases'>
        <div className="upper-part">
            <div >
                <img className="Image-section" src={lungs} alt='imageofxray' />
            </div>
            <div className='text-section'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nostrum vel sunt asperiores labore quo ex saepe maiores,
                sed nam dolores adipisci ab, eum excepturi quod.
            </div>
        </div>

        <div className='lower-section'>
            <div >
                <img className="Image-section" src={lungs} alt='imageofxray' />
            </div>
            <div className='text-section'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nostrum vel sunt asperiores labore quo ex saepe maiores,
                sed nam dolores adipisci ab, eum excepturi quod.
            </div>

        </div>
    </div>
}

export default Diseases