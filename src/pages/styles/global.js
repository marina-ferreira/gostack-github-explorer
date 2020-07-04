import { css } from 'styled-components'
import { lighten } from 'polished'

import { appColors } from 'styles/global'

const { textPrimary, darkGrayBg, textDefault } = appColors

export const CardStyles = css`
  margin-top: 80px;

  a {
    width: 100%;
    padding: 24px;
    display: flex;
    align-items: center;
    text-decoration: none;
    border-radius: 5px;
    transition: transform 0.2s;
    background: ${darkGrayBg};

    & + a {
      margin-top: 16px;
    }

    &:hover {
      transform: translateX(10px);
    }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: ${lighten(0.3, textPrimary)};
      }

      p {
        font-size: 18px;
        color: ${textDefault};
        margin-top: 10px;
      }
    }

    svg {
      margin-left: auto;
      color: ${lighten(0.2, textPrimary)};
    }
  }
`
