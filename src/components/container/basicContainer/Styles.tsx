import { StyleSheet } from "react-native";
import { store } from "../../../redux/store";
const {theme} = store.getState()

export default StyleSheet.create({
    wrapper: {
        padding: 0,
        margin: 0
    }
})