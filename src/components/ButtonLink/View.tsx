import React, { FC } from "react";
import { StyledLink, StyledButton } from "./styles";

interface TypeProps {
    to: string;
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
}

const View: FC<TypeProps> = (props: any) => {
    const { to, text, isDanger, type = "primary", ...rest } = props;

    return (
        <StyledLink to={to}>
            <StyledButton {...rest} type={type} danger={isDanger}>
                {text}
            </StyledButton>
        </StyledLink>
    );
};

export default View;
