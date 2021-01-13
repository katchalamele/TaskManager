import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { deleteTask, toggleTask } from '../redux/actions'

const TaskItem = ({task}) => {
    const dispatch = useDispatch()

    return <TouchableOpacity onPress={() => dispatch(toggleTask(task.id))}>
        <View style={styles.container}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
                <Image style={styles.icon} source={task.isCompleted ? require('../../assets/check_circle.png') : require('../../assets/circle.png')}/>
                <Text style={[styles.title, {color: task.isCompleted ? 'lightgray' : 'black'}]}>{task.title}</Text>
            </View>
            <TouchableOpacity onPress={() => dispatch(deleteTask(task.id))}>
                <Image style={styles.icon} source={require('../../assets/delete.png')}/>
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
}

const styles =  StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 10,
        justifyContent: 'space-between'
    },
    title: {
        marginLeft:30,
        fontSize: 16
    },
    icon:{
        height: 30,
        width: 30
    }
})

export default TaskItem