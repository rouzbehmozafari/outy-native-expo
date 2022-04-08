import { StyleSheet } from "react-native";
import { store } from "../../../redux/store";
const {theme} = store.getState()
export default StyleSheet.create({
    wrapper : {
        justifyContent: "center",
        alignItems: "center",
        width: 150,
        color : theme.colors.text.title
    }
    
})