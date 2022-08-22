import {textLocale} from "../locale/locale";
import styled from "styled-components";

const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTitle = styled.h2`
  margin:16px 0;
  text-align: center;
  padding: 0 8px;
`;

const StyledText = styled.p`
  text-align: center;
  margin: 32px 0 0;
  padding: 0 8px;
`;

const StyledButton = styled.a`
  text-align: center;
  background: #9D2C75;
  color: white;
  border: none;
  padding: 16px 0;
  border-radius: 8px;
  width: 100%;
  max-width: 470px;
  margin-top: 32px;
  text-decoration: none;
  
  &:hover {
    background: #8c2668;
  }
  &:active {
    background: #9D2C75;
  }
`;

export const Block4 = () => {
  const {fourthBlock} = textLocale
  const {text, bottomTitle} = fourthBlock
  return(
      <BlockWrapper>
        <StyledText>{text}</StyledText>
        <StyledTitle>{bottomTitle}</StyledTitle>
        <StyledButton href="https://instagram.com/arisha_cosmo?igshid=YmMyMTA2M2Y=">Заходи ❤️</StyledButton>
      </BlockWrapper>
  )
}