import styled from "styled-components";
import { Form } from "antd";

type Props = {};

const StyledForm = styled(Form.Item)<Props>`
    display: flex;
    margin: 5px;
    margin-left: -20px;
    align-items: center;
    justify-content: center;
`;

export { StyledForm };
