import React, { useState } from 'react'
import {View, StyleSheet } from 'react-native'

import TaskList from './TaskList'
import TaskCounter from './TaskCounters'
import AddTaskForm from './AddTaskForm'
import FloatButton from './FloatButton'

import {useSelector} from 'react-redux'
import {getTasks} from '../redux/selectors'

const TaskContainer = () => {
    const tasks = useSelector(getTasks)
    const [openedAddForm, setOpenedAddForm] = useState(false)

    const completedTasksNumber = () => {
        const completed = tasks.filter(
            (task) => task.isCompleted
        )

        return completed.length
    }

    const toggleAddForm = () => {
        setOpenedAddForm(!openedAddForm)
    }

    // const changeTaskState = (id) => {
    //     const newTasks = []
    //     tasks.forEach((task) => {
    //         if (task.id === id){
    //             newTasks.push({
    //                 id: id,
    //                 title: task.title,
    //                 isCompleted: !task.isCompleted
    //             })
    //         }else{
    //             newTasks.push(task)
    //         }
    //     })

    //     setTasks(newTasks)
    // }

    // const deleteTask = (id) => {
    //     const newTasks = []

    //     tasks.forEach((task) => task.id !== id && newTasks.push(task))

    //     setTasks(newTasks)
    // }

    return <View style={styles.container}>
            <TaskCounter completedNumber={completedTasksNumber()} total={tasks.length} />
            {openedAddForm && <AddTaskForm/>}
            <TaskList tasks={tasks}/>
            <FloatButton toggleAddForm={toggleAddForm} openedAddForm={openedAddForm} />
        </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default TaskContainer