import React, { useState } from 'react';
import './Home.css';
import { images } from '../components/Photos';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';
// import OutputPage from './components/Output';
// import { Routes, Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className="Home-page">
                <LeftPart />
                <MiddlePart />
                <RightPart />
            </div>
        </>
    )
}

const LeftPart = () => {
    return (
        <div className='Left-part'>
            <div className='App-name'>LungVision</div>
            <InfoText />
        </div>
    )
}

const InfoText = () => {
    return (
        <div className='Info'>
            <p>
                Welcome to LungVision, the premier online resource for detecting and managing pulmonary diseases.
                Our advanced machine learning algorithms help you quickly and accurately
                classify your provided X-Rays.
            </p><br />
            <p>
                Pulmonary diseases can have a significant impact on your quality of life.
                But with the help of our state-of-the-art
                technology, you can stay on top of your respiratory health and get the care you need to feel your best.
            </p><br />
            <p>
                At LungVision, we believe that everyone deserves access to quality healthcare.
                That's why we've made our platform accessible and easy to use for everyone,
                so you can get the information and support you need, whenever and wherever you need it.
                So why wait? Take control of your pulmonary health!
            </p>
        </div>
    )
}

const MiddlePart = () => {
    return (
        <div className='Middle-part'>
            <img src={images.lungs} className='mid-image' alt='imageofxray' />
        </div>
    )
}

const RightPart = () => {
    const [image, setImage] = useState(null);

    const browseImage = () => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.onchange = (event) => {
            setImage(URL.createObjectURL(event.target.files[0]));
        };
        input.click();
    };

    const Navigate = useNavigate();

    const SubmitImage = () => {
        if (!image) return alert("Please select an image first");

        // return window.location.replace(`/Output?image=${image}`);
        // return image;
        // return window.open(image);
        // Navigate('/Output', {replace: true});
        // return document.location.href = "/Output";
        // <Routes>
        //     <Route path='/' element={<Home/>} />
        //     <Route path='/Output' element={<Output/>} />
        // </Routes> useNavigate
        Navigate("/output", {state: {image}})
    };  


    // const Navigate = useNavigate();

    // const SubmitImage = () => {
    //     if (!image) return alert('Please select an image first');

    //     const formData = new FormData();
    //     formData.append('image', image);

    //     fetch('http://localhost:8000/api/LungVision/', {
    //         method: 'POST',
    //         body: formData,
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data);
    //             Navigate('/output', { state: { image: image } });
    //         })
    //         .catch((error) => {
    //             console.error('Error:', error);
    //         });
    // };


    return (
        <div className='Right-part'>
            <div className='place-holder'>
                <button onClick={browseImage}>
                    {image ? (
                        <img src={image} className='upload_image' alt='imageofxray' />
                    ) : (
                        <img
                            src={require("../images/upimage.png")}
                            className='upload_image'
                            alt='imageofxray'
                        />
                    )}
                </button>
            </div>
            <div className='upload-button'>
                <button onClick={SubmitImage}>Submit</button>
                {/* <button>
                    <a onClick={SubmitImage} href='./Output' target={'_blank'}> Submit</a>
                </button> */}
            </div>
            <div className='upload-text'>
                <p>
                    Click on the above image to browse for the image you want to upload.
                </p>
                <p>
                    Click the "Submit" button to send the image for classification.
                </p>
            </div>
        </div>
    );
};



export default Home
