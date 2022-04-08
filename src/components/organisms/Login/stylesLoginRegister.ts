import { StyleSheet } from "react-native";
import { store } from "../../../redux/store";
const {theme} = store.getState()
export default StyleSheet.create({
    wrapper: {
        padding: theme.spacing.l,
        margin: theme.spacing.l,
        backgroundColor: theme.colors.containers.general,
        borderRadius: theme.spacing.l
    },
    heading : {
        textAlign: 'center',
        color: theme.pallete.c7
    },
    button: {
        marginTop:theme.spacing.m
    }
}) 