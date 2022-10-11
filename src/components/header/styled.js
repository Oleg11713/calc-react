import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: grey;
  color: white;
  padding: 10px 30px;
`;

export const LogoTitle = styled.h1`
  font-size: 26px;
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Tab = styled.nav`
  font-size: 22px;
  margin: 5px 20px 0 20px;
  opacity: 0.7;
  padding-bottom: 5px;
  border-bottom: transparent 2px solid;
`;

export const ActiveTab = styled(Tab)`
  opacity: 1;
  border-bottom: 2px solid white;
`;
