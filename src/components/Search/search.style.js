import styled from 'styled-components';
import { media, pxToRem } from 'styles';

const StyledSearch = styled.div`
  input {
    height: ${pxToRem(30)};
    width: 100%;
    margin: 0 auto;
    ${media.md`width: 400px;`}
  }
  button {
    left: .5em;
    position: relative;
    background: red;
    color: white;
    font-weight: bold; 
    text-transform: uppercase;
    text-decoration: none;
    border: 0.2em solid  black;
    padding: 0.5em 1em;
    cursor: pointer;
      &::before {
        content: "";
        display: block;
        position: absolute;
        width: 10%;
        background: #fff;
        height: 0.3em;
        right: 20%;
        top: -0.21em;
        transform: skewX(-45deg);
        -webkit-transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
        transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
      }
      &::after {
        content: "";
        display: block;
        position: absolute;
        width: 10%;
        background: #fff;
        height: 0.3em;
        left: 20%;
        bottom: -0.25em;
        transform: skewX(45deg);
        -webkit-transition: all 0.45 cubic-bezier(0.86, 0, 0.07, 1);
        transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
      }
      &:hover {
        &::before {
          right: 80%;
        }
        &::after {
          left: 80%;
        }
      }

  }
`;


export { StyledSearch };
