import styled from "styled-components";
import size from "styles/size";
import adaptiveWidth from "styles/adaptiveWidth";
import colors from "styles/colors";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: ${size.footerHeight}px;
    background-color: ${colors.blueColorTransparency};
    box-shadow: ${colors.blueColorShadow};
    margin-bottom: 0;
    margin-top: ${size.margin30}px;
`;

const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
    align-items: center;
    width: 100%;
    ${adaptiveWidth}
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
`;

export { Wrapper, Info, Footer };
