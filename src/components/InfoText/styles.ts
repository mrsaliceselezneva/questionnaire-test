import styled from "styled-components";
import text from "styles/text";
import { Link } from "react-router-dom";

type Props = {
    fontWeight: number;
    fontSize: number;
    lineHeight: number;
    color: string;
    colorHover?: string;
    margin?: number;
};

const Text = styled.div<Props>`
    margin-bottom: ${({ margin }) => margin}px;
    ${(props: { fontWeight: number; fontSize: number; lineHeight: number; color: string }) =>
        text(props.fontWeight, props.fontSize, props.lineHeight, props.color)}
`;

const TextLink = styled(Link)<Props>`
    display: flex;
    align-items: center;
    text-decoration: none;
    border: none;
    border-radius: 5px;
    height: 32px;
    padding-left: 7px;
    padding-right: 7px;
    box-sizing: border-box;
    ${(props: { fontWeight: number; fontSize: number; lineHeight: number; color: string }) =>
        text(props.fontWeight, props.fontSize, props.lineHeight, props.color)}

    &:hover {
        background-color: ${({ color }) => color};
        color: ${({ colorHover }) => colorHover};
    }
    cursor: pointer;
`;

export { Text, TextLink };
