import React from 'react'
import { FlatList, Text } from 'react-native'

import TaskItem from './TaskItem'

const TaskList = ({tasks}) => {
    return <FlatList
        data={tasks}
        keyExtractor={(task) => task.id}
        renderItem={({item}) => <TaskItem task={item}/> }
    />
}

export default TaskList