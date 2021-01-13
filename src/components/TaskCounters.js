import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const TaskCounters = ({completedNumber, total}) => {
    return <View style={styles.container}>
        <View style={styles.line}>
            <Text style={styles.number}>{total}</Text>
            <Text style={styles.number}>{completedNumber}</Text>
        </View>
        <View style={styles.line}>
            <Text style={styles.title}>Nombre de tâches</Text>
            <Text style={styles.title}>Taches completées</Text>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 30
    },
    number: {
        fontWeight: 'bold'
    },
    title: {
        color: 'gray'
    },
    line: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }

})

export default TaskCounters