import styled from "styled-components";
import desktop from "styles/desktop";
import { Input } from "antd";

const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
    width: 60%;
    box-sizing: border-box;
    @desktop (max-width: ${desktop.desktopTab}) {
        width: 80%;
    }
    @desktop (max-width: ${desktop.desktopPhone}) {
        flex-direction: column;
    }
    margin-left: auto;
    margin-right: auto;
`;

const StyledTitle = styled.div`
    width: 80px;
    justify-content: start;
    box-sizing: border-box;
    @desktop (max-width: ${desktop.desktopPhone}) {
        width: 100%;
    }
`;

const StyledInput = styled(Input)`
    box-sizing: border-box;
`;

const StyledUpload = styled.div`
    margin-top: 8px;
`;

const StyledImg = styled.img`
    width: 100%;
`;

export { StyledDiv, StyledTitle, StyledInput, StyledUpload, StyledImg };
