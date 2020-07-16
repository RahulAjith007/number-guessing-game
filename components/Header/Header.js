import React from 'react';
import classes from './Header.module.css';
import NavigationItems from '../NavigationBar/NavigationItems/NavigationItems';
import {SocialMediaIconsReact} from 'social-media-icons-react';
import myImage from '../../assets/images/profile2.png'



const Header = () => {
    return(
    <header>
    <img src={myImage} alt={'pic'} />
    <NavigationItems/>
    <div className={classes.Header}>
        <h2 className = {classes.myName}>RAHUL AJITH</h2>
        <p>I'm a Front-End Developer | FreeLancer</p>
        <div className = {classes.SocialIcon}>
        <SocialMediaIconsReact 
        iconSize = {0.5} size ={'45px'} 
        backgroundColor= {'#7b3b75'} 
        iconColor={'white'} roundness = {30} 
        icon="linkedin" url="/a"
        />&nbsp;&nbsp;&nbsp;&nbsp;
        <SocialMediaIconsReact 
        iconSize = {0.5} 
        size ={'45px'} 
        backgroundColor= {'#7b3b75'} 
        iconColor={'white'} 
        roundness = {30} 
        icon="instagram" 
        url="/a"
        />&nbsp;&nbsp;&nbsp;&nbsp;
        <SocialMediaIconsReact 
        iconSize = {0.5} 
        size ={'45px'} 
        backgroundColor= {'#7b3b75'} 
        iconColor={'white'} 
        roundness = {30} 
        icon="facebook" 
        url="/a"
        />&nbsp;&nbsp;&nbsp;&nbsp;
        <SocialMediaIconsReact 
        iconSize = {0.5} 
        size ={'45px'} 
        backgroundColor= {'#7b3b75'} 
        iconColor={'white'} 
        roundness = {30} 
        icon="twitter" 
        url="/a"
        />
        </div>
        </div>
    </header>
    );
}

export default Header;