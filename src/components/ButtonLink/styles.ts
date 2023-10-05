import { Link } from "react-router-dom";
import styled from "styled-components";
import text from "styles/text";

type Props = {
    fontWeight: number;
    fontSize: number;
    lineHeight: number;
    color: string;
    background: string;
    backgroundHover: string;
    backgroundActive: string;
};

const ButtonLink = styled(Link)<Props>`
    display: flex;
    align-items: center;
    text-decoration: none;
    background-color: ${({ background }) => background};
    border: none;
    border-radius: 5px;
    height: 32px;
    padding-left: 7px;
    padding-right: 7px;
    box-sizing: border-box;
    ${(props: { fontWeight: number; fontSize: number; lineHeight: number; color: string }) =>
        text(props.fontWeight, props.fontSize, props.lineHeight, props.color)}

    :hover {
        background-color: ${({ backgroundHover }) => backgroundHover};
    }

    :active {
        background-color: ${({ backgroundActive }) => backgroundActive};
    }
`;

export default ButtonLink;
