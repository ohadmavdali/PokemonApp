import {StyleSheet} from 'react-native';
import { textColor } from '../assets/colors';


const fontFamily = StyleSheet.create({
    heading: {
        fontFamily: 'Roberto-Black',
        fontWeight: "700",
        color: textColor.black,
    },
});

export default StyleSheet.create({
    container: {
        padding: 20,
    },
      row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    heading: {
        fontSize: 32,
        fontWeight: "700",
        color: textColor.black,
        textAlign: 'center',
    },
    subHeading: {
        fontSize:20,
        color: textColor.white,
        textAlign:'center',
    },
    title: {
        fontSize: 26,
        color: textColor.white,
        ...fontFamily.bold,
      },
      number: {
        fontSize: 12,
        color: textColor.number,
        ...fontFamily.bold,
      },
});