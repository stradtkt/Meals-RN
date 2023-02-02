import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { Pressable, StyleSheet } from 'react-native';

const IconButton = ({onPress, icon, color, size}) => {
  return (
    <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
        <FontAwesomeIcon icon={icon} size={size} color={color} />
    </Pressable>
  )
}


const styles = StyleSheet.create({
    pressed: {
        opacity: 0.75
    }
});

export default IconButton;