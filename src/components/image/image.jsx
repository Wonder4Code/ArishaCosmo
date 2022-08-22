import styled from "styled-components";

const StyledImage = styled.img`
  width: 60%;
  border-radius: 8px;
`;

const StyledDescription = styled.p`
  margin: 0;
  text-align: center;
`;
export const Image = ({img,description}) => {
  return (
    <>
      <StyledImage src={img} alt=""/>
      {description && <StyledDescription>{description}</StyledDescription>}
    </>
  )
}