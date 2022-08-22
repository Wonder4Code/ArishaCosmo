import styled from "styled-components";
import {Image} from "../components/image/image";
import {textLocale} from "../locale/locale";
import second from '../assets/second.jpg'
import third from '../assets/third.jpg'

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

export const Block2 = () => {
  const {secondBlock} = textLocale
  const {title, text} = secondBlock
  return (
      <BlockWrapper>
        <StyledTitle>{title}</StyledTitle>
        <Image img={second}/>
        <StyledText>{text}</StyledText>
        <StyledText>Пример</StyledText>
        <Image img={third} description={"Все фотографии сочетаются между собой , в одной цветовой гамме и есть преобладающие 3 цвета."}/>
      </BlockWrapper>
  )
}