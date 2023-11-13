import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainColors = {
  blackMain: "#222",
  poingMain: "crimson",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}

    *{
        box-sizeing: border-box;
    }

    body{
        backgroundColor: ${mainColors.blackMain};
    }

    ul,li{
        list-style: none;
    }

    a{
        text-decoration: none;
    }
`;
