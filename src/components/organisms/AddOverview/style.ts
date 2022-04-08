import { StyleSheet } from "react-native";
import { store } from "../../../redux/store";
const {theme} = store.getState()
export default StyleSheet.create({
    wrapper: {
        borderBottomRightRadius: theme.spacing.m,
        borderBottomLeftRadius: theme.spacing.m,
        margin : theme.spacing.s,
        width: theme.widthHight.l,
        overflow:'hidden',
        backgroundColor: theme.colors.screenBack
    },
    title : {
        color : theme.colors.text.title,
        marginTop: theme.spacing.ss
    },
    price : {
        marginBottom: theme.spacing.s,
        textAlign: 'left'

    },
    image : {
        width: theme.widthHight.l ,
        height: theme.widthHight.ml ,
    }
}) 