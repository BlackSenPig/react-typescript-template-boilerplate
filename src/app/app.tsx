import "@i18n";
import { useTranslation } from "react-i18next";
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
  const { i18n, t } = useTranslation();
  console.log(process.env.NODE_ENV);
  console.log(process.env.REACT_APP_API_KEY);

  return (
    <Container>
      <div className="App"> {t("header.language.text")}</div>

      <button onClick={() => i18n.changeLanguage((i18n.language = "en"))}>
        {t("header.language.en")}
      </button>

      <button onClick={() => i18n.changeLanguage((i18n.language = "tw"))}>
        {t("header.language.zh-tw")}
      </button>
    </Container>
  );
};
