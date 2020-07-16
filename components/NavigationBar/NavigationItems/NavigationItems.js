import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from '../NavigationItem/NavigationItem';
import Autograph from '../../Autograph/Autograph'

const NavigationItems = () => {
  return( 
        <nav className = {classes.NavigationItems}>
        <Autograph/>
            <NavigationItem
                link = '/a'
            />
        </nav>
  );
}

export default NavigationItems