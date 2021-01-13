import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import TaskContainer from './src/components/TaskContainer';

import {Provider} from 'react-redux'
import store from './src/redux/store'

export default function App() {
  return (
    <Provider store={store}>  
      <SafeAreaView style={styles.container}>
        <Header/>
        <TaskContainer/>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingStart: 20,
    paddingEnd: 20,
  },
});
