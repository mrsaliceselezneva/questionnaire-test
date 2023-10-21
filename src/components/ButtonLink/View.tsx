import React, { FC } from "react";
import { Button } from "antd";
import { StyledButton } from "./styles";

interface TypeProps {
    text: string;
    fontWeight?: number;
    fontSize?: number;
    lineHeight?: number;
    color?: string;
    background?: string;
    backgroundHover?: string;
    backgroundActive?: string;
    isDanger?: boolean;
    type?: string;
    click?: any;
    renavigate: any;
}

const View: FC<TypeProps> = (props: any) => {
    const { text, isDanger, type = "primary", renavigate, ...rest } = props;

    return (
        <StyledButton type={type} danger={isDanger} onClick={renavigate}>
            {text}
        </StyledButton>
    );
};

export default View;
