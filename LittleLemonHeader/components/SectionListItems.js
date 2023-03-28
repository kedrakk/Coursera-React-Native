/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {SectionList, StyleSheet, Text, View} from 'react-native';

const menuItemsToDisplay = [
  {
    title: 'Appetizers',
    data: [
      {name: 'Hummus', price: '$5.00'},
      {name: 'Moutabal', price: '$5.00'},
      {name: 'Falafel', price: '$7.50'},
      {name: 'Marinated Olives', price: '$5.00'},
      {name: 'Kofta', price: '$5.00'},
      {name: 'Eggplant Salad', price: '$8.50'},
    ],
  },
  {
    title: 'Main Dishes',
    data: [
      {name: 'Lentil Burger', price: '$10.00'},
      {name: 'Smoked Salmon', price: '$14.00'},
      {name: 'Kofta Burger', price: '$11.00'},
      {name: 'Turkish Kebab', price: '$15.50'},
    ],
  },
  {
    title: 'Sides',
    data: [
      {name: 'Fries', price: '$3.00', id: '11K'},
      {name: 'Buttered Rice', price: '$3.00'},
      {name: 'Bread Sticks', price: '$3.00'},
      {name: 'Pita Pocket', price: '$3.00'},
      {name: 'Lentil Soup', price: '$3.75'},
      {name: 'Greek Salad', price: '$6.00'},
      {name: 'Rice Pilaf', price: '$4.00'},
    ],
  },
  {
    title: 'Desserts',
    data: [
      {name: 'Baklava', price: '$3.00'},
      {name: 'Tartufo', price: '$3.00'},
      {name: 'Tiramisu', price: '$5.00'},
      {name: 'Panna Cotta', price: '$5.00'},
    ],
  },
];

export default function SectionListItems() {
  const RenderItem = ({item}) => {
    return (
      <View style={style.listItemContainerStyle}>
        <Text style={style.listItemTextStyle}>{item.name}</Text>
        <Text style={style.listItemTextStyle}>{item.price}</Text>
      </View>
    );
  };
  const renderSectionHeader = ({section: {title}}) => (
    <View style={style.sectionHeaderContainerStyle}>
      <Text style={style.sectionHeaderTextStyle}>{title}</Text>
    </View>
  );
  return (
    <View style={style.mainBodyStyle}>
      <SectionList
        sections={menuItemsToDisplay}
        renderItem={RenderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
}

const style = StyleSheet.create({
  sectionHeaderContainerStyle: {
    backgroundColor: '#F4CE14',
    paddingVertical: 10,
  },
  sectionHeaderTextStyle: {
    color: '#000000',
    fontSize: 19,
    textAlign: 'center',
  },
  listItemContainerStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  listItemTextStyle: {
    color: '#F4CE14',
    fontSize: 17,
  },
  mainBodyStyle: {
    backgroundColor: '#333333',
  },
});
