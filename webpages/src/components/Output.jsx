// import './Output.css'
// import { useNavigate } from 'react-router-dom';

// const OutputPage = () => {

//     const Navigate = useNavigate();

//     // const oimage = new URLSearchParams(window.location.search)
//     // const image = "there is an image here";

//     return <div className="Output" id='output_page'>
//         <div className='header-output'>
//         <h1> Results from our model</h1>
//         </div>

//         <div className='header-bottom'>
//         <div className='bot-left'>
//             <div className='bot-image'>
//                 <img alt='a random pic'></img>
//             </div>
//             <div className='bot-predict'>
//                 <p>our prediction: </p>
//             </div>
//             <div>
//                 <button onClick={() => Navigate(-1)}></button>
//             </div>
//         </div>
//         </div>
//     </div>
// }

// export default OutputPage;

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

// export default Output;


import './Output.css'
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const OutputPage = () => {
    const location = useLocation();
    const image = location.state?.image;
    const Navigate = useNavigate();

    return(

        <div className='Output_page'>
            <div>
            <div className='Header_output'>
                <p>LungVision</p>
            </div>
            <div className='Left_part'>
                <img src={image} className='bot-image' alt='Image uploaded by user'></img>
                <p>Our prediction:</p>
                <div className='Button_back'>
                    <button onClick={() => Navigate(-1)}>Return</button>
                </div>
            </div>
            </div>
            <div className='Right_part'>
                <p>Disclaimer:</p>
                <p>We donot claim to be 100% accurate.</p>
                <p>Plaese consult a doctor if you feel like you are seriously ill.</p>
            </div>
        </div>
    )
}

export default OutputPage;