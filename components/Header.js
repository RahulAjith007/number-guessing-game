import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

const Header = props => {
    return (
        <View style={styles.Header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Header: {
        width:'100%',
        height: 90,
        backgroundColor: "#1c2773",
        paddingTop: 36,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color:'white',
        fontSize: 20,
        letterSpacing:1,
        textTransform: 'uppercase'
    }
})

export default Header;