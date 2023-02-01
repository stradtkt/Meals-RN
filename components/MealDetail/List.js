import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const List = ({data}) => {
  return (
    data.map(dataPoint => (
    <View key={dataPoint} style={styles.listItem}>
        <Text style={styles.itemText}>{dataPoint}</Text>
    </View>
    ))
  )
}

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#777'
    },
    itemText: {
        color: '#e5e5e5',
        textAlign: 'center'
    }
});

export default List;