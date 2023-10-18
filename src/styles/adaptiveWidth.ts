import { css } from "styled-components";
import size from "./size";
import media from "./media";

//TODO: немного странный рассчет, по сути ты не должен жестко задавать width у блока с формой, 
//если уж точно нужно задать ширину, то лучше использовать max-width, 
// посмотри какие нибудь видео как это можно сделать адаптив без жеткого задания ширины
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
