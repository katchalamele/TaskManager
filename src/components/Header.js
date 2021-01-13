import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Header = () => {
    return <View style={styles.container}>
        <Text style={styles.title}>Liste des tâches</Text>
    </View> 
}

const styles = StyleSheet.create({
    title:{
        fontSize: 30,
        fontWeight: 'bold'
    },
    container: {
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 30
    }
});

export default Header