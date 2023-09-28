import "src/styles/utils";
import { Link } from "react-router-dom";
import styled from "styled-components";

const wrapper = styled.div`
    display: flex;
    @extend %adaptive_width;
    min-height: calc(100vh - $footer-height - $header-height - $margin30 * 2);
`;

const back = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    background-color: $blue_color;
    border: none;
    border-radius: 5px;
    height: 32px;
    padding-left: 7px;
    padding-right: 7px;
    @include text(600, 18px, 20px, $white_color);
    box-sizing: border-box;

    &:hover {
        background-color: $blue_color_hover;
    }

    &:active {
        background-color: $blue_color_active;
    }
`;
