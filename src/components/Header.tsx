import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  block: {
    backgroundColor: 'navy',
    padding: 50,
    alignContent: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  }
})

export const Header: React.FC = ({ children }) => (
  <View style={styles.block}>
    <Text style={styles.header}>
      { children }
    </Text>
  </View>
);
