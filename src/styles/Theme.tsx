// @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
// @font-face {
//     font-family: 'Ubuntu', sans-serif;
//     src: url(../assets/fonts/ubuntu/Ubuntu-Regular.ttf) format('truetype');
// }

import {StyleSheet, Dimensions} from 'react-native'

// font-family: 'Ubuntu', sans-serif;

  const palette = {
    c1: '#ebebebff',
    c2: '#c5c6c6ff',
    c3: '#b2b0b0ff',
    c4: '#9b9c9bff',
    c5: '#bce3faff',
    c6: '#7ccdf4ff',
    c7: '#00a9e2ff',
    c8: '#007bbaff',
    c9: '#2c4268ff',
    c10: '#23233bff',
    disabled: 'gray',
    primary:'#184e77ff',
    danger : 'red',
    secondary : '#1a759fff',
    bright : 'white',
    dark : 'black'
  }


  export const componentStyles = {
    sizes: {
      widthSwitchWithText: 100
    },
  }
  
  export const LightTheme = {
    pallete : {
      ...palette
    },
    dimensions : {
      fullHeight: Dimensions.get('window').height,
      fullWidth: Dimensions.get('window').width
    },
    colors: {
      screenBack: palette.bright,
      containers : {
        general : palette.c1,
        bigTemplates: palette.bright
      },
      input : {
        general : palette.c1,
        text: palette.c1
      },
      nav :{
        back : palette.c1
      },
      text : {
        body :palette.c10,
        title : palette.c8,
        titleh2 : palette.c8,
        titleh3 : palette.c9,
      },
      borders : {
        first : palette.c7
      }
    },
    spacing: {
      sss: 2,
      ss: 4,
      s: 8,
      sm : 12,
      m: 16,
      ml: 20,
      l: 24,
      ll : 30,
      xl: 40,
      xxl: 55,
    },
    widthHight :{
      sss: 10,
      ss: 40,
      s: 50,
      sm: 65,
      m: 80,
      ml: 130,
      l: 150,
      ll : 220,
      xl: 270,
      xxl: 320
    },
    thickness : {
      sss: .3,
      ss: .5,
      s: .8,
      m: 1.5,
      ml: 2.5,
      l: 4,
      xl : 7,
      xxl: 10,
    }
    ,
    fontVariants: {
        fontFamily: 'Ubuntu-Medium',
        fontSizeH4: 10,
        fontSizeBody: 16,
        fontSizeH3: 18,
        fontSizeH2: 25,
        fontSizeH1: 30,
    }, 
    textVariants : {
      h1: {
        fontFamily: 'Ubuntu-Medium',
        fontSize: 36,
        fontWeight: '900',
      },
      h2: {
        fontFamily: 'Ubuntu-Medium',
        fontSize: 30,
        fontWeight: '500',
      },
      h3: {
        fontFamily: 'Ubuntu-Medium',
        fontSize: 25,
        fontWeight: '400',
      },
      body: {
        fontFamily: 'Ubuntu-Regular',
        fontSize: 16,
        fontWeight: 'normal'
      }
    },

  };
  
  export const DarkTheme = {
    ...LightTheme,
    colors: {
      screenBack: palette.dark,
      containers : {
        general : palette.c6
      },
      input : {
        general : palette.c1
      },
      nav :{
        back : palette.c3
      },
      text : {
        body :palette.c1,
        title : palette.c1,
        titleh2 : palette.c5,
        titleh3 : palette.c5,
      }
  } 
}