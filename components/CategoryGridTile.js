import React from 'react'
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'

const CategoryGridTile = ({title, color, onPress}) => {
  return (
    <View style={styles.gridItem}>
        <Pressable 
            style={({pressed}) => [styles.buttonStyle, pressed ? styles.buttonPressed : null]} 
            android_ripple={{color: '#ccc'}}
            onPress={onPress}
        >
            <View style={[styles.innerContainer, {backgroundColor: color}]}>
                <Text style={styles.title}>{title}</Text>
            </View>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 8,
        backgroundColor: 'white',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    buttonPressed: {
        opacity: 0.75,
        backgroundColor: '#ccc',
        borderRadius: 8,
    },
    buttonStyle: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        padding: 6,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    }
});

export default CategoryGridTile