import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {textColor} from '../assets/colors';


const Icon = ({children, onPress, name, style, width, height, ...props}) => {
  //let RenderIcon;
  return (
    <TouchableWithoutFeedback
      style={{...styles.icon, ...style}}
      onPress={onPress}>
      {name ? (
        <RenderIcon height={height} width={width} color={textColor.white} />
      ) : (
        children
      )}
    </TouchableWithoutFeedback>
  );
};

export default Icon;

const styles = StyleSheet.create({
  icon: {
    paddingHorizontal: 10,
  },
});