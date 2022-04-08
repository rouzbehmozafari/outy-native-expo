import React from "react"
import { ScrollView, View } from "react-native";
import DarkMode from "../../molecules/darkMode/Index";
import { Login } from "../../organisms/Login/Index";
import { Register } from "../../organisms/Register/Index";

const LoginRegister = () => {
  return (
    <ScrollView>
      <Login/>
      <Register/>
    </ScrollView>
  );
};

export default LoginRegister;