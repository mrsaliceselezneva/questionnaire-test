import styled from "styled-components";
import media from "styles/media";
import { Input } from "antd";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
    width: 60%;
    box-sizing: border-box;
    @media (max-width: ${media.media3}) {
        width: 80%;
    }
    @media (max-width: ${media.media4}) {
        flex-direction: column;
    }
    margin-left: auto;
    margin-right: auto;
`;

const StyledTitle = styled.div`
    width: 80px;
    justify-content: start;
    box-sizing: border-box;
    @media (max-width: ${media.media4}) {
        width: 100%;
    }
`;

const StyledInput = styled(Input)`
    box-sizing: border-box;
`;

export { StyledDiv, StyledTitle, StyledInput };
