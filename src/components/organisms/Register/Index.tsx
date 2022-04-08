import React from 'react';
import { TextInput, View } from "react-native"
import { useState } from "react";
import { Text } from 'react-native'
import MyInput from '../../common/MyInput/Index';
import MyButton from '../../common/MyButton/Index';
import styles from '../Login/stylesLoginRegister';
import { MyText } from '../../atoms/MyText/Index';

export const Register:React.FC = ()=>{
  const [userEmail,setUserEmail] = useState('')
  const [userPass,setUserPass] = useState<string>('')
  const [number,onChangeNumber] = useState<string>('')

  const Register = ()=> console.log(userEmail,userPass)

    return (
        <View style={styles.wrapper}>
          <MyText type='h2' style={styles.heading}>Register</MyText>
          <MyInput inpVal={userEmail}  label='Email' placeholder={userEmail} setInpValue={setUserEmail} />
          <MyInput inpVal={userPass}  label='Password' placeholder='Email' setInpValue={setUserPass} />
          <MyInput inpVal={userPass}  label='Confirm Password' placeholder='Confirm Password' setInpValue={setUserPass} />
          <MyButton style={styles.button} primary title='Register' onPress={Register}  />
        </View>
    )
}