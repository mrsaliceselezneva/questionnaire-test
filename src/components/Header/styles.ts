import "src/styles/utils";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiHome } from "react-icons/fi";

const wrapper = styled.div<{ $header?: boolean; height: string; margin: string; black: string }>`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: ${height};
    margin-top: 0;
    margin-bottom: $margin30;
    background-color: $black_color;
    box-shadow: 0 0 5px 2px $black_color;

    ${(props) =>
        props.$header &&
        css`
            display: flex;
            @extend %adaptive_width;
        `}
`;

const main = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    @include text(600, 18px, 20px, $white_color);
    padding: 5px;
    border-radius: 5px;
    box-sizing: border-box;

    :hover {
        background-color: $white_color;
        color: $black_color;
    }
`;

const icon = styled(FiHome)`
    margin-right: 3px;
    margin-bottom: 3px;
`;
