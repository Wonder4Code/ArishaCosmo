import styled from "styled-components";
import {Image} from "../components/image/image";
import {textLocale} from "../locale/locale";
import last from '../assets/last.jpg'

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

export const Block3 = () => {
  const {thirdBlock} = textLocale
  const {title, text} = thirdBlock
  return (
      <BlockWrapper>
        <StyledTitle>{title}</StyledTitle>
        <Image img={last}/>
        <StyledText>{text}</StyledText>
      </BlockWrapper>
  )
}