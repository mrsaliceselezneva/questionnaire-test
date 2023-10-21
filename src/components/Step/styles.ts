import styled from "styled-components";
import adaptiveWidth from "styles/adaptiveWidth";

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    ${adaptiveWidth}
`;

export { Wrapper };
