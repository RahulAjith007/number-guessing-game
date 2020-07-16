import React from 'react'
import Typewriter from 'typewriter-effect';
import classes from './TypeWriting.module.css'

const TypeWriting = () => {
    return(
      
        <Typewriter 
        options={{
          strings: ['Front End Developer', 'Freelancer'],
          autoStart: true,
          loop: true,
          delay : 25,
          deleteSpeed:25
        }}
      />
    )
}

export default TypeWriting;