import styled from 'styled-components'
import { appColors } from 'styles/global'

const { textPrimary, textError, darkGrayBg, textDefault } = appColors

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${textPrimary};
  }
`

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 5px;
    }

    div {
      margin-left: 24px;

      strong {
        color: ${textPrimary};
        font-size: 36px;
      }

      p {
        font-size: 18px;
        color: ${textDefault};
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 40px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: ${textPrimary};
      }

      span {
        display: block;
        margin-top: 4px;
        color: ${textDefault};
      }
    }
  }
`
