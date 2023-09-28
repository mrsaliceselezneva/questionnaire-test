import { css } from "styled-components";

const text = (w: string, s: string, l: string, c: string) => css`
    @import url("http://fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic");
    font-family: "Comfortaa";
    font-style: normal;
    font-weight: ${w};
    font-size: ${s};
    line-height: ${l};
    color: ${c};
`;

export default text;
