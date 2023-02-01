import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import {CATEGORIES} from './../data/dummy-data';

const renderCategoryItem = (itemData) => {
    return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
}

const CategoryScreen = () => {
  return (
    <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoryItem} />
  )
}

const styles = StyleSheet.create({

});

export default CategoryScreen;