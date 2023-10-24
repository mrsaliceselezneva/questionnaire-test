import React, { FC } from "react";
import { StyledButton } from "./styles";
import { ButtonType } from "antd/es/button";

interface TypeProps {
    text: string;
    isDanger?: boolean;
    type?: ButtonType;
    renavigate: () => void;
}

//TODO: Пример как убрать any у props
const View: FC<TypeProps> = (props) => {
    props.type;
    const { text, isDanger, type = "primary", renavigate } = props;

    return (
        <StyledButton type={type} danger={isDanger} onClick={renavigate}>
            {text}
        </StyledButton>
    );
};

export default View;
