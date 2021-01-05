import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { Header } from './Header';
import { Todos } from './Todos';

const entries = [];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#eee',
    padding: 0,
  },
  header: {
    padding: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export const Application = () => (
  <SafeAreaView style={styles.container}>
    <Header>TODO</Header>
    <Todos />
  </SafeAreaView>
);
