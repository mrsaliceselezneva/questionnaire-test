import styled from "styled-components";
import size from "styles/size";
import adaptiveWidth from "styles/adaptiveWidth";

const Wrapper = styled.div`
    display: flex;
    ${adaptiveWidth}
    min-height: calc(100vh - ${size.footerHeight + size.headerHeight + size.margin30 * 2}px);
`;

export default Wrapper;
