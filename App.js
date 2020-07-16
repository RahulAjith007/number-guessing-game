import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

const fetchFonts =() => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {

const [userNumber, setUserNumber] =useState();
const [guessRounds, setGuessRounds] = useState(0); 
const [dataLoaded, setDataLoaded] = useState(false)

if(!dataLoaded){
  return (
  <AppLoading 
  startAsync={fetchFonts} 
  onFinish={() => {setDataLoaded(true)}}
   onError={(err) => console.log(err)} 
  />)
}

const startGameHandler = (selectedNumber) => {
setUserNumber(selectedNumber);
setGuessRounds(0)
}

const gameOverhandler = numOfRounds => {
  setGuessRounds(numOfRounds);
  setGuessRounds(0);
}

let content = <StartGameScreen onStartGame ={startGameHandler}/>

if(userNumber && guessRounds<=0){
  content = <GameScreen userChoice = {userNumber} onGameOver={gameOverhandler}/>
}else if (guessRounds > 0){
  content = <GameOverScreen/>
}

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header title='guess the number'/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1
  },
});
