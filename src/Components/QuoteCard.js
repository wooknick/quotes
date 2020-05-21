import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 600px;
  width: 94vw;
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

const Side = styled.div`
  width: 10%;
  font-size: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 28px;
`;

const Contents = styled.div`
  width: 80%;
  border-bottom: 1px ${(props) => props.theme.darkChocolate} solid;
`;

const Quote = styled.div`
  line-height: 28px;
  margin-bottom: 20px;
`;
const Title = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 40px;
  margin-bottom: 20px;
`;

const QuoteCard = ({ title, quote }) => {
  return (
    <Wrapper>
      <Side></Side>
      <Contents>
        <Quote>{quote}</Quote>
        <Title>... {title}</Title>
      </Contents>
      <Side></Side>
    </Wrapper>
  );
};

export default QuoteCard;
