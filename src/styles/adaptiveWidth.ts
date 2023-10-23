import { css } from "styled-components";
import size from "./size";
import media from "./media";

const adaptiveWidth = () => css`
    max-width: ${size.itemWidth * 4 + size.margin30 * 4 + size.itemWidth}px;
    margin-left: 20px;
    margin-right: 20px;
`;

export default adaptiveWidth;
