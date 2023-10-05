import { css } from "styled-components";
import size from "./size";
import media from "./media";

const adaptiveWidth = () => css`
    width: ${size.itemWidth * 4 + size.margin30 * 4 + size.itemWidth}px;
    @media (max-width: ${media.media1}) {
        width: ${size.itemWidth * 3 + size.margin30 * 3 + size.itemWidth}px;
    }
    @media (max-width: ${media.media2}) {
        width: ${size.itemWidth * 2 + size.margin30 * 2 + size.itemWidth}px;
    }
    @media (max-width: ${media.media3}) {
        width: ${size.itemWidth * 2 + size.margin30 * 1}px;
    }
    @media (max-width: ${media.media4}) {
        width: ${size.itemWidth * 1 + size.margin30 * 0}px;
    }
    margin-left: auto;
    margin-right: auto;
`;

export default adaptiveWidth;
