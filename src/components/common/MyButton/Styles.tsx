import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { store } from "../../../redux/store";

const {theme} = store.getState()
export default StyleSheet.create({
    wrapper: {
      height: theme.widthHight.s,
      paddingHorizontal: 5,
  
      marginVertical: 5,
      borderRadius: theme.spacing.m,
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
  
    loaderSection: {
      flexDirection: 'row',
    },
  
    textInput: {
      flex: 1,
      width: '100%',
    },
    title : {
      color: theme.colors.input.text,
      fontWeight: "bold",
    },
    error: {
      color: theme.pallete.danger,
      paddingTop: 4,
      fontSize: 12,
    },
  });