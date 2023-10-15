import { Link } from "react-router-dom";
import styled from "styled-components";
import text from "styles/text";
import { Button } from "antd";

type Props = {
    fontWeight: number;
    fontSize: number;
    lineHeight: number;
    color?: string;
    background?: string;
    backgroundHover?: string;
    backgroundActive?: string;
};

const StyledButton = styled(Button)<Props>`
    display: flex;
    background-color: ${({ background }) => background};
`;

const StyledLink = styled(Link)<Props>`
    text-decoration: none;
    border: none;
`;

export { StyledButton, StyledLink };
