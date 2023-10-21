import styled from "styled-components";
import size from "styles/size";
import adaptiveWidth from "styles/adaptiveWidth";
import colors from "styles/colors";
import { GoogleOutlined } from "@ant-design/icons";
import { BiLogoGoogle } from "react-icons/bi";

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

const Google = styled(BiLogoGoogle)`
    color: ${colors.whiteColor};
    border-radius: 8px;
    height: ${size.headerHeight * 0.6}px;
    width: ${size.headerHeight * 0.6}px;
    margin-right: 0;
    margin-left: auto;
    cursor: pointer;

    &:hover {
        color: ${colors.blackColor};
        background-color: ${colors.whiteColor};
    }
`;

const Img = styled.img`
    border-radius: 8px;
    height: ${size.headerHeight * 0.6}px;
    width: ${size.headerHeight * 0.6}px;
    margin-right: 0;
    margin-left: auto;
    cursor: pointer;
`;

export { Wrapper, Header, Google, Img };
