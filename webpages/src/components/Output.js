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
                <p>our prediction</p>
            </div>
        </div>

        <div className='bot-right'>
            {/* <button onClick={showTable} >show table</button> */}
            <div className='table'>
            <tr>
                <td>  </td>
                <td>Model</td>
                <td>Resnet50</td>
                <td>Inception-v3</td>
            </tr>
            <tr>
                <td>accuracy</td>
                <td>score 1</td>
                <td>score 2</td>
                <td>score 3</td>
            </tr>
            <tr>
            <td>precision</td>
            <td>score 1</td>
            <td>score 2</td>
            <td>score 3</td>
            </tr>
            <tr>
            <td>Recall</td>
            <td>score 1</td>
            <td>score 2</td>
            <td>score 3</td>
            </tr>
            <tr>
            <td>F1-score</td>
            <td>score 1</td>
            <td>score 2</td>
            <td>score 3</td>
            </tr>
        </div>
        </div>
        </div>
    </div>
}

// const showTable= () =>{
//     return(
//         <div className='table'>
//             <tr>
//                 <td>Model</td>
//                 <td>Resnet50</td>
//                 <td>Inception-v3</td>
//             </tr>
//         </div>
//     )
// }

export default Output;