import { createSlice } from "@reduxjs/toolkit"
import GuestUser from "../../constants/GuestUser"

const userSlice = createSlice({
  name: "user",
  initialState: GuestUser,
  reducers: {
//     setLight: () => {
//       return LightTheme
//     },
//     setDark: () => {
//       return DarkTheme
//     }
  }
})

// export const { setLight , setDark} = themeSlice.actions
export default userSlice.reducer