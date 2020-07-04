import styled from 'styled-components'
import { shade, lighten } from 'polished'

const darkGray = '#3a3a3a'
const titleColor = '#3d3d4d'

export const Title = styled.h1`
  max-width: 450px;
  line-height: 56px;
  font-size: 48px;
  color: #3a3a3a;
  color: ${titleColor};
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
    color: #a8a8b3;
    color: ${lighten(0.45, titleColor)};
    background: ${darkGray};

    &::placeholder {
      color: ${lighten(0.35, titleColor)};
    }
  }

  button {
    width: 210px;
    color: #cacaca;
    text-transform: uppercase;
    border: 1px solid #002a13;
    transition: background 0.2s, border-color 0.1s;
    background: ${shade(0.7, '#04d361')};

    &:hover {
      background: ${shade(0.73, '#04d361')};
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
    background: ${darkGray};

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
      margin-left: 16px;

      strong {
        font-size: 20px;
        color: ${lighten(0.3, titleColor)};
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 15px;
      }
    }

    svg {
      margin-left: auto;
      color: ${lighten(0.2, titleColor)};
    }
  }
`
