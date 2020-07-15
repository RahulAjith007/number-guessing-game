import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    Alert
}from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max= Math.floor(max);
    const rndNum= Math.floor(Math.random() * (max-min)) + min;
    if(rndNum === exclude){
        return generateRandomBetween(min, max, exclude)
    }else{
        return rndNum;
    }

}

const GameScreen = props => {

    let currentLow = useRef(1);
    let currentHigh = useRef(100)


    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1,100, props.userChoice))
    
    const nextGuessedHandler = direction => {
        if ((direction === 'lower' && currentGuess < props.userChoice) ||
        (direction === 'greater' && currentGuess > props.userChoice))
        {
            Alert.alert("Don\'t lie!", 'You know that this is wrong', [{text:'sorry',style: 'cancel'}])
        }
        return;
    }
    if(direction === 'lower'){
        currentHigh.current = currentGuess
    }else{
        currentLow.current = currentGuess
    }
    let nextNumber =  generateRandomBetween(currentLow, currentHigh, currentGuess);
    setCurrentGuess(nextNumber);


    return(
        <View style = {styles.screen}>
            <Text>Oppenent's text</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="LOWER" onPress={nextGuessedHandler.bind(this, "lower")}/>
                <Button title="GREATER" onPress={nextGuessedHandler.bind(this, "greater")}/>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
});

export default GameScreen;