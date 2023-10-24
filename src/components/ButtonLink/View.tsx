import React, { FC } from "react";
import { StyledButton } from "./styles";

interface TypeProps {
    text: string;
    isDanger?: boolean;
    type?: string;
    renavigate: () => void;
}

const View: FC<TypeProps> = (props: any) => {
    const { text, isDanger, type = "primary", renavigate } = props;

    return (
        <StyledButton type={type} danger={isDanger} onClick={renavigate}>
            {text}
        </StyledButton>
    );
};

export default View;
