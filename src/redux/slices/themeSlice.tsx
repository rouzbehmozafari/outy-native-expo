import { createSlice } from "@reduxjs/toolkit"
import { DarkTheme, LightTheme } from "../../styles/Theme"

const themeSlice = createSlice({
  name: "theme",
  initialState: LightTheme,
  reducers: {
    setLight: () => {
      return LightTheme
    },
    setDark: () => {
      return DarkTheme
    }
  }
})

export const { setLight , setDark} = themeSlice.actions
export default themeSlice.reducer