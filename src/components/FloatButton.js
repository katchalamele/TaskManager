import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'

const FloatButton = ({toggleAddForm, openedAddForm}) => {
    return <TouchableOpacity style={styles.container} onPress={toggleAddForm} >
        <Image style={styles.float} source={require('../../assets/add_circle.png')}/>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        position:'absolute',
        bottom: 20,
        right:0,
    },
    float: {
        width: 70,
        height: 70
    }
})

export default FloatButton