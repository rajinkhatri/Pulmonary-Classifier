import './Output.css'

const Output = () => {
    return <div className="Output">
        <div className='header-output'>
        <h1> Results from our model</h1>
        </div>

        <div className='header-bottom'>
        <div className='bot-left'>
            <div className='bot-image'>
                placeholder for image
            </div>
            <div className='bot-predict'>
                <p>our prediction</p>
            </div>
        </div>

        <div className='bot-right'>
            there will be a table here.
        </div>
        </div>
    </div>
}

export default Output;