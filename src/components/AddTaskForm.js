import React, { useState } from 'react'
import { Button, TextInput, View, StyleSheet } from 'react-native'

import {useDispatch} from 'react-redux'
import {addTask} from '../redux/actions'

const AddTaskForm = () => {
    const [currentText, setCurrentText] = useState('')
    const dispatch = useDispatch()

    const submitted = () => {
        if (currentText.length > 0) {
            const addAction = addTask(currentText)
            dispatch(addAction)
            setCurrentText('')
        }
    }

    return <View style={styles.container}>
        <TextInput style={styles.input}
            placeholder='Nouvelle Tâche'
            onChangeText={(text) => {setCurrentText(text)}}
            onSubmitEditing={submitted}
            value={currentText}
        />
        <Button
            title='Ajouter'
            onPress={submitted}
        />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    input: {
        borderWidth: 1,
        borderRadius: 5,
        fontSize: 16,
        height: '100%',
        width: '70%',
        paddingLeft: 5
    }
})

export default AddTaskForm