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


// import './Output.css'
// import { useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

// const OutputPage = () => {
//     const location = useLocation();
//     const image = location.state?.image;
//     const Navigate = useNavigate();

//     return(

//         <div className='Output_page'>
//             <div>
//             <div className='Header_output'>
//                 <p>LungVision</p>
//             </div>
//             <div className='Left_part'>
//                 <img src={image} className='bot-image' alt='Image uploaded by user'></img>
//                 <p>Our prediction:</p>
//                 <div className='Button_back'>
//                     <button onClick={() => Navigate(-1)}>Return</button>
//                 </div>
//             </div>
//             </div>
//             <div className='Right_part'>
//                 <p>Disclaimer:</p>
//                 <p>We donot claim to be 100% accurate.</p>
//                 <p>Plaese consult a doctor if you feel like you are seriously ill.</p>
//             </div>
//         </div>
//     )
// }

// export default OutputPage;


import './Output.css'
// import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const OutputPage = () => {
    const location = useLocation();
    // const image = location.state?.image;
    const Navigate = useNavigate();
    const prediction = location.state?.prediction;
    const predictionValue = prediction?.prediction_inception;
    const picture1 = location.state?.picture;
    // console.log(picture1);
    // const [prediction, setPrediction] = useState(null);

    // useEffect(() => {
    //     // Fetch the prediction from the API
    //     fetch('http://127.0.0.1:8000', {
    //         method: 'POST',
    //         // mode: 'no-cors',
    //         body: new FormData(document.querySelector('#my-form'))
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setPrediction(data.prediction_resnet);
    //     })
    //     .catch(error => console.error(error));
    // }, []);
    // useEffect(() => {
    //     const formElement = document.querySelector('#my-form');

    //     if (formElement) {
    //         // Fetch the prediction from the API
    //         fetch('http://127.0.0.1:8000/api/classify-image', {
    //             method: 'POST',
    //             // mode: 'no-cors',
    //             body: new FormData(formElement),
    //         })
    //             .then(response => response.json())
    //             .then(data => {
    //                 console.log(data);
    //                 setPrediction(data.prediction_inception);
    //                 console.log(prediction);
    //             })
    //             .catch(error => console.error(error));
    //     }
    // }, [prediction]);

    return (
        <div className='Output_page'>
            <div>
                <div className='Header_output'>
                    <p>LungVision</p>
                </div>
                <div className='Left_part'>
                    <img src={picture1} className='bot-image' alt='uploaded by user'></img>
                    <p>Our prediction: {predictionValue}</p>
                    {/* <p>Our prediction: </p> */}
                    <div className='Button_back'>
                        <button onClick={() => Navigate(-1)}>Return</button>
                    </div>
                </div>
            </div>
            <div className='Right_part'>
                <p>Disclaimer:</p>
                <p>. We donot claim to be correct with all the images.</p>
                <p>. Use for informational purposes only.</p>
                <p>. Result based solely on the perfomance of our model.</p>
                <p>. Please consult a doctor if you feel like you are seriously ill.</p>
            </div>
        </div>
    )
}

export default OutputPage;

