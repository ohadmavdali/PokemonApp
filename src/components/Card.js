import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {backgroundColors} from '../assets/colors';
import commonStyles from '../styles/commonStyles';
import Tag from './Tag';
import {width} from '../assets/constants';

const Card = ({item}) => {
  console.warn({item});
  let type = 'GRASS';
  if (item > 3) {
    type = 'FIRE';
  }

  return (
    <View style={{...styles.card, backgroundColor: backgroundColors[type]}}>
      <View style={{padding: 15, paddingRight: 0, width: width / 1.8}}>
        <Text style={commonStyles.number}>#0001</Text>
        <Text style={commonStyles.title}>Bulbasaur</Text>
        <View style={commonStyles.row}>
          <Tag type={type} />
          <Tag type="POISON" />
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    marginVertical: 12,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainer: {
    marginTop: -10,
    marginLeft: -10,
  },
  imageBackground: {
    width: 100,
    height: 100,
    paddingRight: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
});