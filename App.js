import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import CategoryScreen from './screens/CategoryScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <StatusBar/>
      <NavigationContainer>
        <Stack.Navigator 
          screenOptions={{
              headerStyle: {backgroundColor: '#333'},
              headerTintColor: 'white',
              contentStyle: {backgroundColor: '#333'}
          }}
        >
          <Stack.Screen 
            name='MealsCategories' 
            component={CategoryScreen} 
            options={{
              title: 'Categories',
            }}
          />
          <Stack.Screen 
            name='MealsOverview' 
            component={MealsOverviewScreen}
          />
          <Stack.Screen 
            name='MealDetail'
            component={MealDetailScreen}
            options={{title: 'Details'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333333',
    paddingVertical: 30,
  }
});

StatusBar.setBarStyle('light-content', true);
export default App;
