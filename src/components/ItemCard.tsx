import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 2,
    backgroundColor: 'white',
  },
  containerCritical: {
    backgroundColor: '#ffdddd',
  },
  text: {
    fontSize: 18,
  },
  textCritical: {
    fontWeight: 'bold',
  },
  critical: {
    backgroundColor: 'red',
    color: 'yellow'
  }
});

type Props = {
  onDelete: () => void,
  critical?: boolean,
}

export const ItemCard: React.FC<Props> = ({ children, onDelete, critical }) => (
  <View testID="itemCard" style={{ ...styles.container, ...critical ? styles.critical : {} , ...(critical ? styles.containerCritical : {}) }}>
    <Text testID="itemName" style={{ ...styles.text, ...(critical ? styles.textCritical : {}) }}>{children}</Text>
    <Button testID="itemDeleteButton" onPress={onDelete} title="Delete" />
  </View>
);