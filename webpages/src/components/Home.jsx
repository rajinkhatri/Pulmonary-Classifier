import React from 'react';
import './Home.css';
import {Photos} from '../components';

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
                <div>Image will be placed here.</div>
                <img src={Photos.middle_lungs}/>
            </div>
        </div>
    )
}

export default Home