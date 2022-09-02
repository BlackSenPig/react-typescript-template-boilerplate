import React from "react";
import styled from "styled-components";
const Container = styled.div`
  height: 100%;
  position: relative;
  .ant-menu:not(.ant-menu-horizontal) .ant-menu-submenu-selected {
    background-color: #f5c910 !important;
  }
`;

export const App = () => {
  console.log(process.env.NODE_ENV);
  console.log(process.env.REACT_APP_API_KEY);

  return (
    <Container>
      <div className="App">Testing</div>
    </Container>
  );
};
