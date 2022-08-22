import styled from "styled-components";
import {Image} from "../components/image/image";
import {textLocale} from "../locale/locale";
import React from "react";
import mainImg from '../assets/main.jpg'

const BlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTitle = styled.h2`
  margin: 0 0 8px;
  text-align: center;
  padding: 0 8px;
`;

const StyledText = styled.p`
  text-align: center;
  margin: 32px 0 0;
  padding: 0 8px;
`;

export const Block1 = () => {
  const {firstBlock} = textLocale
  const {title, text, secondTitle} = firstBlock
  return (
      <BlockWrapper>
        <StyledTitle>{title}</StyledTitle>
        <StyledTitle>{secondTitle}</StyledTitle>
        <Image img={mainImg}/>
        <StyledText><mark style={{background:"#d48ac4"}}>{text}</mark></StyledText>
      </BlockWrapper>
  )
}