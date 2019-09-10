import styled from 'styled-components';
import { pxToRem, colors } from 'styles';

const StyledFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${pxToRem(100)};
  background: black;
  a {
    text-decoration: none;
    color: #fff;
  }
`;
export { StyledFooter };
