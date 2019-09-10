import styled from 'styled-components';
import { media, pxToRem } from 'styles';

const StyledCharacterList = styled.div`
  padding-top: ${pxToRem(30)};
  display: flex;
  flex-wrap: wrap;
  > div {
    margin: ${pxToRem(15)} ${pxToRem(10)};
    flex: 0 0 94%;
    ${media.sm`flex: 0 0 45%;`}
    ${media.md`flex: 0 0 30%;`}
    ${media.lg`flex: 0 0 23%;`}
  }
`;

const StyledCharacterItem = styled.div`
  background-color: #fff;
  border-style: solid;
  border-width:1px;
  padding: ${pxToRem(20)};

  img {
    width: 100%;
  }

  > a {
    color: inherit;
    text-decoration: none;
  }
`;

export { StyledCharacterList, StyledCharacterItem };
