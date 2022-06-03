import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import { customColor } from '../assets/colors';
import commonStyles from '../styles/commonStyles';

const Input = ({...props}) => {
  return (
    <View>
      <TextInput {...props} />
    </View>
  );
};

export default Input;

const styles= StyleSheet.create({
    input:{
        backgroundColor: '#F2F2F2',
        borderRadius: 10,
    } 
})