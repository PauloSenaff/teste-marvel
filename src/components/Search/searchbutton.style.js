import styled from 'styled-components';
import { media, pxToRem } from 'styles';

const StyledButton = styled.div`
  input {
    height: ${pxToRem(30)};
    width: 100%;
    margin: 0 auto;
    ${media.md`width: 400px;`}
  }
`;

export { StyledButton };
