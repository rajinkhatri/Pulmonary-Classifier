import './Images.css';
import React from 'react';
import {images} from './Photos'

const Images = () => {
    return(
        <div className='Images' id='third_section'>
            <h1 className='header1'>Some images of Pneumonia</h1>
            <Topbar images={images}/>
            <h1 className='header1'>Some images of Tuberculosis</h1>
            <Lowbar images={images}/>
        </div>
    )
}

const Topbar = (props) => {
    return(
        <div className='Top-bar'>
            <Imageholder src={props.images.pnemo1}/>
            <Imageholder src={props.images.pnemo2}/>
            <Imageholder src={props.images.pnemo3}/>
            <Imageholder src={props.images.pnemo4}/>
            <Imageholder src={props.images.pnemo5}/>
        </div>
    )
}

const Imageholder = (props) => {
    return(
        <div className='image-holder'>
        <img src={props.src} alt='drisya of lungs'></img>
        {/* <p>Image no 1</p> */}
        </div>
    )
}

const Lowbar = (props) => {
    return(
        <div className='Lower-bar'>
        <Imageholder src={props.images.Tuber1}/>
        <Imageholder src={props.images.Tuber2}/>
        <Imageholder src={props.images.Tuber3}/>
        <Imageholder src={props.images.Tuber4}/>
        <Imageholder src={props.images.Tuber5}/>
        </div>
    )
}

export default Images