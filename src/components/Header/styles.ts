import styled from "styled-components";
import size from "styles/size";
import adaptiveWidth from "styles/adaptiveWidth";
import colors from "styles/colors";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    height: ${size.headerHeight}px;
    background-color: ${colors.blackColor};
    box-shadow: ${colors.blackColorShadow};
    margin-top: 0;
    margin-bottom: ${size.margin30}px;
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    ${adaptiveWidth}
`;

export { Wrapper, Header };
