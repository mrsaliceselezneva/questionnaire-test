import styled from "styled-components";
import size from "styles/size";
import adaptiveWidth from "styles/adaptiveWidth";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    ${adaptiveWidth}
    min-height: calc(100vh - ${size.footerHeight + size.headerHeight + size.margin30 * 2}px);
`;

const Bottom = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export { Wrapper, Bottom };
