import { StyleSheet } from "react-native";
import { store } from "../../../redux/store";
const {theme} = store.getState()
export default StyleSheet.create({
    list : {
        flexDirection : "row",
        marginTop:-8,
        paddingTop: 0,
    },
    header : {
        flexDirection: "row",
        alignItems: "stretch",
        justifyContent : 'space-between',
        padding: theme.spacing.s,
        margin : 0,
        backgroundColor: theme.colors.containers.general,
    },
    wrapper : {
        // marginVertical: theme.spacing.ss,
    },
    viewAll : {
        paddingRight: theme.spacing.s
    }
})