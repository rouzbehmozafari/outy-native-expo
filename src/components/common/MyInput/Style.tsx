import { store } from "../../../redux/store"

const {theme} = store.getState()
export const Style = {
    height: theme.widthHight.s,
    borderColor: theme.colors.borders.first,
    borderWidth : 1,
    borderRadius: theme.spacing.m
}