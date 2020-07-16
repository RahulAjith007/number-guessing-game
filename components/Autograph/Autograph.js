import React from 'react';
import autograph from '../../assets/images/autograph.png';
import classes from './Autograph.module.css';


const Autograph = () => (
    <img 
    className = {classes.Autograph} 
    src={autograph}
    alt={'signature'}
    /> 
)

export default Autograph;