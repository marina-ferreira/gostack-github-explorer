import { createGlobalStyle } from 'styled-components'

import githubBackground from 'assets/github-background.svg'

export const appColors = {
  textPrimary: '#3d3d4d',
  textError: '#c53030',
  textDefault: '#a8a8b3',
  textButton: '#cacaca',
  appBg: '#272727',
  buttonBg: '#04d361',
  darkGrayBg: '#3a3a3a'
}

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: ${appColors.appBg} url(${githubBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }
`
