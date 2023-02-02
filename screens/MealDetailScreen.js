import React, {useLayoutEffect} from 'react';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import { library } from '@fortawesome/fontawesome-svg-core';
import {fas, faStar} from '@fortawesome/free-solid-svg-icons';
import IconButton from '../components/IconButton';
import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';


const MealDetailScreen = ({route, navigation}) => {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    const headerButtonPressHandler = () => {
        console.log("Pressed");
    }
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight:() => {
                return <IconButton icon={faStar} color="white" size={24} onPress={headerButtonPressHandler}/>;
            }
        })
    }, [navigation, headerButtonPressHandler]);
    return (
    <ScrollView style={styles.rootContainer}>
        <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails 
            duration={selectedMeal.duration}
            complexity={selectedMeal.complexity}
            affordability={selectedMeal.affordability}
            textStyle={styles.detailText}
        />
        <View style={styles.listOuterContainer}>
            <View style={styles.listContainer}>
                <Subtitle title="Ingredients" />
                <List data={selectedMeal.ingredients}/>
                <Subtitle title="Steps"/>
                <List data={selectedMeal.steps}/>
            </View>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 24,
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    listContainer: {
        width: '80%'
    },
    listOuterContainer: {
        alignItems: 'center'
    }
});
library.add(fas, faStar);
export default MealDetailScreen;