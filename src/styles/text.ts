import { css } from "styled-components";

const text = (fontWeight: number, fontSize: number, lineHeight: number, color: string) => css`
    @import url("http://fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic");
    font-family: "Comfortaa";
    font-style: normal;
    font-weight: ${fontWeight};
    font-size: ${fontSize}px;
    line-height: ${lineHeight}px;
    color: ${color};
`;

export default text;
