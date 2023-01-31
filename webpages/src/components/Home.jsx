import React, { useState }from 'react';
import './Home.css';
import { images } from '../components/Photos';

const Home = () => {
    return (
        <div className="Home-page">
            <LeftPart />
            <MiddlePart />
            <RightPart />
        </div>
    )
}

const LeftPart = () => {
    return (
        <div className='Left-part'>
            <div className='App-name'>LungVision</div>
            <InfoText />
            <InfoText />
        </div>
    )
}

const InfoText = () => {
    return (
        <div className='Info'>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse bibendum ex nec quam commodo auctor.
                Ut at libero faucibus lacus blandit dictum.
                Cras justo leo, congue quis nisl a,
                commodo posuere turpis. Nam sit amet tellus non tortor
                lobortis mattis nec quis magna.
                Duis ligula quam, mollis et feugiat eu.
            </p>
        </div>
    )
}

const MiddlePart = () => {
    return (
        <div className='Middle-part'>
            <img src={images.lungs} className='mid-image' alt='imageofxray'/>
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

    const submitImage = () => {
        return(
            alert("image will be submitted")
        )
    };

    return (
        <div className='Right-part'>
            <div className='place-holder'>
                <button onClick={browseImage}>
                    {image ? (
                        <img src={image} className='mid-image' alt='imageofxray' />
                    ) : (
                        <img
                            src={require("../images/lungs.png")}
                            className='mid-image'
                            alt='imageofxray'
                        />
                    )}
                </button>
            </div>
            <div className='upload-button'>
                <button onClick={submitImage}>Submit</button>
            </div>
            <div className='upload-text'>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Est quod nisi accusantium impedit voluptatibus nesciunt.
                </p>
            </div>
        </div>
    );
};



export default Home
