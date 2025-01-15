import { readFile, writeFile, exists, mkdir, rmdir } from 'fs/promises'
import nunjucks from 'nunjucks'
import createColors, { type ThemeColors } from './createColors'
import { amber, amberDark, blue, blueDark, bronze, bronzeDark, brown, brownDark, crimson, crimsonDark, cyan, cyanDark, gold, goldDark, grass, grassDark, gray, grayDark, green, greenDark, indigo, indigoDark, iris, irisDark, jade, jadeDark, lime, limeDark, mauve, mauveDark, mint, mintDark, olive, oliveDark, orange, orangeDark, pink, pinkDark, plum, plumDark, purple, purpleDark, red, redDark, ruby, rubyDark, sage, sageDark, sand, sandDark, sky, skyDark, slate, slateDark, teal, tealDark, tomato, tomatoDark, violet, violetDark, yellow, yellowDark } from '@radix-ui/colors'

type ColorCollection = [colorName: string, colorValue: Record<string, string>]

const templateText = await readFile('./template.qss.njk', 'utf-8')

/** Fonts */

const fonts = [
  'RobotoMono Nerd Font Propo',
  'Roboto Mono',
  'Noto Color Emoji',
  'monospace'
]

const fontSize = 14

/** Colors **/

const DarkNeutralColors: ColorCollection[] = [
  ['gray', grayDark],
  ['mauve', mauveDark],
  ['slate', slateDark],
  ['sage', sageDark],
  ['olive', oliveDark],
  ['sand', sandDark]
]

const LightNeutralColors: ColorCollection[] = [
  ['gray', gray],
  ['mauve', mauve],
  ['slate', slate],
  ['sage', sage],
  ['olive', olive],
  ['sand', sand]
]

const DarkPrimaryColors: ColorCollection[] = [
  ['gold', goldDark],
  ['bronze', bronzeDark],
  ['brown', brownDark],
  ['yellow', yellowDark],
  ['amber', amberDark],
  ['orange', orangeDark],
  ['tomato', tomatoDark],
  ['red', redDark],
  ['ruby', rubyDark],
  ['crimson', crimsonDark],
  ['pink', pinkDark],
  ['plum', plumDark],
  ['purple', purpleDark],
  ['violet', violetDark],
  ['iris', irisDark],
  ['indigo', indigoDark],
  ['blue', blueDark],
  ['cyan', cyanDark],
  ['teal', tealDark],
  ['jade', jadeDark],
  ['green', greenDark],
  ['grass', grassDark],
  ['lime', limeDark],
  ['mint', mintDark],
  ['sky', skyDark]
]

const LightPrimaryColors: ColorCollection[] = [
  ['gold', gold],
  ['bronze', bronze],
  ['brown', brown],
  ['yellow', yellow],
  ['amber', amber],
  ['orange', orange],
  ['tomato', tomato],
  ['red', red],
  ['ruby', ruby],
  ['crimson', crimson],
  ['pink', pink],
  ['plum', plum],
  ['purple', purple],
  ['violet', violet],
  ['iris', iris],
  ['indigo', indigo],
  ['blue', blue],
  ['cyan', cyan],
  ['teal', teal],
  ['jade', jade],
  ['green', green],
  ['grass', grass],
  ['lime', lime],
  ['mint', mint],
  ['sky', sky]
]

const themeColors: Record<string, ThemeColors> = {}

DarkNeutralColors.forEach(([neutralName, neutralValue]) => {
  DarkPrimaryColors.forEach(([primaryName, primaryValue]) => {
    const themeName = `dark-${neutralName}-${primaryName}`
    themeColors[themeName] = createColors(neutralValue, primaryValue, greenDark, redDark)
  })
})

LightNeutralColors.forEach(([neutralName, neutralValue]) => {
  LightPrimaryColors.forEach(([primaryName, primaryValue]) => {
    const themeName = `light-${neutralName}-${primaryName}`
    themeColors[themeName] = createColors(neutralValue, primaryValue, green, red)
  })
})

if (await exists('./dist')) {
  await rmdir('./dist', { recursive: true })
}

await mkdir('./dist')

Object.entries(themeColors).forEach(async ([themeName, themeColors]) => {
  const qss = nunjucks.renderString(templateText, { ...themeColors, fonts, fontSize })
  const path = `./dist/radix-${themeName}.qss`
  await writeFile(path, qss)
})
