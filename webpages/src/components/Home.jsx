import React from 'react';
import './Home.css';
import lungs from '../components/Photos';

const Home = () => {
    return (
        <div className="Home-page">
            <div className='Left-part'>
                <div className='App-name'>App Name</div>
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
                <div className='Info'><p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse bibendum ex nec quam commodo auctor.
                    Ut at libero faucibus lacus blandit dictum.
                    Cras justo leo, congue quis nisl a,
                    commodo posuere turpis. Nam sit amet tellus non tortor
                    lobortis mattis nec quis magna.
                    Duis ligula quam, mollis et feugiat eu.
                </p></div>
            </div>
            <div className='Middle-part'>
                <img src={lungs} className='mid-image' alt='imageofxray'/>
            </div>
            <div className='Right-part'>
                <div className='place-holder'>
                    placeholder for image
                </div>
                <div className='upload-button'>
                    <button> Submit </button>
                </div>
                <div className='upload-text'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Est quod nisi accusantium impedit voluptatibus nesciunt.</p>
                </div>
            </div>
        </div>
    )
}

export default Home