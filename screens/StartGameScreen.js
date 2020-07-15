import React, {useState, Children} from 'react';
import {
    View,
    StyleSheet,
    Text,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
}from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState()

    const numberInputHandler = (input) => {
        setEnteredValue(input.replace(/[^0-9]/g, ''))
    }

    const resetInputHandler = () => {
            setEnteredValue('');
            setConfirmed(false)
    }


    const confirmInputHandler= () => {
        let chosenNumber = parseInt(enteredValue)
        if(isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber > 99){
            Alert.alert('Invalid Number', 'Number Has to be number between 1 and 99.', [{text: 'Okay', style:'destructive', onPress: resetInputHandler}])
            return;
        }
        setConfirmed(true); 
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();

    }

    let confirmedOutput

    if(confirmed){
        confirmedOutput = (
            <Card style={styles.NumberViewCard}>
                <Text>You Selected</Text>
                <NumberContainer>
                    {selectedNumber}
                </NumberContainer>
                <Button title="START THE GAME" onPress={() => props.onStartGame(selectedNumber)}/>
            </Card>
        )
    }


    return(
        <TouchableWithoutFeedback
        onPress={() => {Keyboard.dismiss();
        }}>
        <View style={styles.screen}>
            <Text style={styles.title}>Start a new Game</Text>
            <Card style={styles.inputContainer}>
            <Text>Select a Number</Text>
              <Input 
              style={styles.input}
                blurOnSubmit
                autoCapitalize="none"
                autoCorrevt={false}
                keyboardType="number-pad"
                maxLength={2}
                 onChangeText = {numberInputHandler}
                 value={enteredValue}   
              />
                <View style={styles.buttonContainer}>
                   <View style={styles.Button}><Button color={Colors.accent} title="Reset" onPress={resetInputHandler}/></View> 
                    <View style={styles.Button}><Button color={Colors.primary} title="Confirm" onPress={confirmInputHandler}/></View>
                </View>
                </Card>
                {confirmedOutput}
        </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    screen:{ 
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title:{
        fontSize:20,
        marginVertical: 10, 
    },
    inputContainer:{
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',

    },
    buttonContainer:{
        flexDirection:'row',
        width: '100%',
        justifyContent: 'space-around',
        paddingHorizontal: 10
    },
    Button:{
       width: '40%'
    },
    input: {
        width: 50,
        textAlign: 'center'
    },
    NumberViewCard:{
        marginTop:25,
        alignItems: "center",

    }
})

export default StartGameScreen;