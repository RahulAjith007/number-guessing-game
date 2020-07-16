import React from 'react';
import classes from './NavigationItem.module.css';

const NavigationItem = (props) => {
    return(
        <div className = {classes.NavigationItem}>
    <ul>
    <li><a href={props.link}>Home</a></li>
    <li> <a href={props.link}>About</a></li>
    <li> <a href={props.link}>Technical Skills</a></li>
    <li> <a href={props.link}>Education</a></li>
    <li><a href={props.link}>Projects/Portfolio</a></li>
    <li> <a href={props.link}>Contact</a></li>
     </ul>
     </div>
     );
}

export default NavigationItem