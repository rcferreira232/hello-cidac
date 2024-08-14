import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: string
      whiteSoft: string
      whiteMute: string
      black: string
      blackSoft: string
      blackMute: string
      gray1: string
      gray2: string
      gray3: string
      text1: string
      text2: string
      text3: string
    }
    borderRadius: {
      p: string
      m: string
      g: string
      xg: string
    }
    boxShadow: {
      1: string
      2: string
      3: string
      4: string
      5: string
      6: string
      7: string
      8: string
    }
  }
}
