import React, { FC } from "react";
import { ButtonType } from "antd/es/button";
import { StyledButton } from "./styles";

interface TypeProps {
    text: string;
    isDanger?: boolean;
    type?: string;
    renavigate: () => void;
}

const View: FC<TypeProps> = (props) => {
    const { text, isDanger, type = "primary", renavigate } = props;

    return (
        <StyledButton type={type as ButtonType} danger={isDanger} onClick={renavigate}>
            {text}
        </StyledButton>
    );
};

export default View;
