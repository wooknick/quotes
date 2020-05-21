import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
`;

const Contents = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  return (
    <Wrapper>
      <Contents>오늘 무슨 영화를 보셨나요?</Contents>
    </Wrapper>
  );
};

export default Home;
