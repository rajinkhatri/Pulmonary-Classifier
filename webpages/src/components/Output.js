import './Output.css'

const Output = () => {
    return <div className="Output" id='output_page'>
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

// export default Output;

// import React from "react";

// const Output = ({ location }) => {
//     const image = new URLSearchParams(location.search).get("image");

//     return (
//         <div className="Output-page">
//             {image ? (
//                 <div>
//                     <img src={image} alt="Submitted Xray " />
//                     <p>The image is submitted</p>
//                 </div>
//             ) : (
//                 <p>No image submitted</p>
//             )}
//         </div>
//     );
// };

export default Output;
