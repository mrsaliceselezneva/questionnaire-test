import React, { FC } from "react";
import { StyledButton } from "./styles";

interface TypeProps {
    text: string;
    isDanger?: boolean;
    renavigate: () => void;
}

const View: FC<TypeProps> = (props) => {
    const { text, isDanger, renavigate } = props;

    return (
        <StyledButton type={"primary"} danger={isDanger} onClick={renavigate}>
            {text}
        </StyledButton>
    );
};

export default View;
