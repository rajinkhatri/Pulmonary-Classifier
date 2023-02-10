import './Output.css'

const Output = () => {
    return <div className="Output">
        <div className='header-output'>
        <h1> Results from our model</h1>
        </div>

        <div className='header-bottom'>
        <div className='bot-left'>
            <div className='bot-image'>
                <img alt='uploaded by user'></img>
            </div>
            <div className='bot-predict'>
                <p>our prediction: </p>
            </div>
        </div>
        </div>
    </div>
}

export default Output;