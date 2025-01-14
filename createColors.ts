import hexRgb from 'hex-rgb'

export interface ThemeColors {
  primary: {
    [key: string]: string
  }
  neutral: {
    [key: string]: string
  }
  green: {
    [key: string]: string
  }
  red: {
    [key: string]: string
  }
}

interface RadixColor {
  [key: string]: string
}

const createColors = (neutral: RadixColor, primary: RadixColor, green: RadixColor, red: RadixColor): ThemeColors => {
  const Colors: Partial<ThemeColors> = {}

  Object.values(neutral).forEach((value, index) => {
    const { red, green, blue, alpha } = hexRgb(value)
    Colors.neutral = { ...Colors.neutral, [`neutral${index + 1}`]: `rgba(${red}, ${green}, ${blue}, ${alpha.toFixed(2)})` }
  })
  Object.values(primary).forEach((value, index) => {
    const { red, green, blue, alpha } = hexRgb(value)
    Colors.primary = { ...Colors.primary, [`primary${index + 1}`]: `rgba(${red}, ${green}, ${blue}, ${alpha.toFixed(2)})` }
  })
  Object.values(green).forEach((value, index) => {
    const { red, green, blue, alpha } = hexRgb(value)
    Colors.green = { ...Colors.green, [`green${index + 1}`]: `rgba(${red}, ${green}, ${blue}, ${alpha.toFixed(2)})` }
  })
  Object.values(red).forEach((value, index) => {
    const { red, green, blue, alpha } = hexRgb(value)
    Colors.red = { ...Colors.red, [`red${index + 1}`]: `rgba(${red}, ${green}, ${blue}, ${alpha.toFixed(2)})` }
  })

  return Colors as ThemeColors
}

export default createColors
