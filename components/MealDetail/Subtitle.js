import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Subtitle = ({title}) => {
  return (
    <View style={styles.subtitleContainer}>
        <Text style={styles.subtitle}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    subtitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitleContainer: {
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 20,
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Subtitle;