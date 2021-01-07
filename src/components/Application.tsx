import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { Header } from './Header';
import { Todos } from './Todos';

const entries = [];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
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
