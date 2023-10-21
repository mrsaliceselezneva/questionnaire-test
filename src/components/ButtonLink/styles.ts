import styled from "styled-components";
import { Button } from "antd";

type Props = {
    fontWeight: number;
    fontSize: number;
    lineHeight: number;
    color?: string;
    background?: string;
    backgroundHover?: string;
    backgroundActive?: string;
};

const StyledButton = styled(Button)<Props>`
    margin: 5px;
`;

export { StyledButton };
