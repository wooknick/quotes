import React from "react";
import styled from "styled-components/macro";
import { Link, withRouter } from "react-router-dom";
import Input from "./Input";
import useInput from "../Hooks/useInput";
import { Logo } from "./Icons";

const Header = styled.header`
  width: 100%;
  border: 0ch;
  background-color: white;
  border-bottom: ${(props) => props.theme.boxBorder};
  border-radius: 0px;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0px;
  z-index: 2;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth};
  display: flex;
  justify-content: center;
`;

const HeaderColumn = styled.div`
  width: 33%;
  text-align: center;
  &:first-child {
    margin-right: auto;
    text-align: left;
    display: flex;
    justify-content: center;
  }
  &:nth-child(2) {
    min-width: 300px;
  }
  &:last-child {
    margin-left: auto;
    text-align: right;
  }
`;

const SearchInput = styled(Input)`
  background-color: ${(props) => props.theme.bgColor};
  padding: 5px;
  font-size: 14px;
  border-radius: 3px;
  height: auto;
  text-align: center;
  width: 100%;
  &::placeholder {
    opacity: 0.8;
    font-weight: 200;
  }
`;

export default withRouter(({ history }) => {
  const search = useInput("");

  const onSearchSubmit = (e) => {
    e.preventDefault();
    history.push(`/search?term=${search.value}`);
  };
  return (
    <Header>
      <HeaderWrapper>
        <HeaderColumn>
          <Link to="/">
            <Logo size={30} />
          </Link>
        </HeaderColumn>
        <HeaderColumn>
          <form onSubmit={onSearchSubmit}>
            <SearchInput
              value={search.value}
              onChange={search.onChange}
              placeholder="Search"
            />
          </form>
        </HeaderColumn>
        <HeaderColumn></HeaderColumn>
      </HeaderWrapper>
    </Header>
  );
});
