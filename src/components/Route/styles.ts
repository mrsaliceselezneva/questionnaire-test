import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "antd";

const StyledButton = styled(Button)`
    display: flex;
    align-items: center;
    text-decoration: none;
    border: none;
    border-radius: 5px;
    height: 32px;
    padding-left: 7px;
    padding-right: 7px;
    box-sizing: border-box;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    border: none;
`;

export { StyledButton, StyledLink };
