import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import QuoteCard from "../../Components/QuoteCard";

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoaderWrapper = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth};
  height: 100%;
  padding-top: 30vh;
  display: flex;
  align-items: center;
`;

const SearchPresenter = ({ searchTerm, loading, data }) => {
  if (searchTerm === undefined) {
    return (
      <Wrapper>
        <div>Wrong access</div>
      </Wrapper>
    );
  } else if (loading === true) {
    return (
      <Wrapper>
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      </Wrapper>
    );
  } else if (data) {
    return (
      <Wrapper>
        {data.length === 0 ? (
          <div> 결과가 없네요! </div>
        ) : (
          data.map((item, idx) => (
            <QuoteCard title={item.title} quote={item.quote} key={idx} />
          ))
        )}
      </Wrapper>
    );
  }
};

export default SearchPresenter;
