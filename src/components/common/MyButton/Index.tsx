import React from 'react';
import {View, Text, TextInput, ActivityIndicator, TouchableOpacity} from 'react-native';

import { useSelector } from 'react-redux';
import { LightTheme as theme } from '../../../styles/Theme';
import Styles from './Styles';
// const {theme} = useSelector(state => state)

interface props {
    title: string,
    secondary? : boolean,
    primary? : boolean,
    danger?:boolean,
    disabled?: boolean,
    loading?: boolean,
    onPress?: any,
    style?: any,
}
const MyButton: React.FC<props> = ({
  title,
  secondary,
  primary,
  danger,
  disabled,
  loading,
  onPress,
  style,
}) => {
  const getBgColor = () => {
    if (disabled) {
      return theme.pallete.c2;
    }
    if (primary) {
      return theme.pallete.primary;
    }
    if (danger) {
      return theme.pallete.danger;
    }

    if (secondary) {
      return theme.pallete.secondary;
    }
  };
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[Styles.wrapper, {backgroundColor: getBgColor()}, style]}>
      <View style={[Styles.loaderSection]}>
        {loading && (
          <ActivityIndicator
            color={primary ? theme.pallete.c7: theme.pallete.c9}
          />
        )}
        {title && (
          <Text
            style={[{
              color: disabled ? theme.pallete.c2 : theme.colors.input.text,
              paddingLeft: loading ? 5 : 0,
            },Styles.title]}>
            {loading ? 'Please wait...' : title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default MyButton;