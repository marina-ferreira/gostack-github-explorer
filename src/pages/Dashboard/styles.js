import styled from 'styled-components'
import { shade, lighten } from 'polished'

import { appColors } from 'styles/global'

const {
  textPrimary,
  textError,
  darkGrayBg,
  textDefault,
  textButton,
  buttonBg
} = appColors

export const Title = styled.h1`
  max-width: 450px;
  line-height: 56px;
  font-size: 48px;
  color: ${textPrimary};
  margin-top: 80px;
`

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;
  display: flex;

  input,
  button {
    height: 70px;
    border: 0;
    border-radius: 5px;
  }

  input {
    flex: 1;
    padding: 0 24px;
    margin-right: 10px;
    color: ${lighten(0.45, textPrimary)};
    transition: border 0.5s;
    background: ${darkGrayBg};
    border: ${({ hasError }) =>
      hasError ? `2px solid ${textError}` : 'none;'};

    &::placeholder {
      color: ${lighten(0.35, textPrimary)};
    }
  }

  button {
    width: 210px;
    color: ${textButton};
    text-transform: uppercase;
    border: 1px solid #002a13;
    transition: background 0.2s, border-color 0.1s;
    background: ${shade(0.7, buttonBg)};

    &:hover {
      background: ${shade(0.73, buttonBg)};
    }
  }
`

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

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

    img {
      width: 64px;
      height: 64px;
      border-radius: 10px;
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

export const InputError = styled.p`
  color: ${textError};
  margin: 12px 0 0 5px;
`
