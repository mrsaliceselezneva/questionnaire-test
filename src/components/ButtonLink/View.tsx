import React, { FC } from "react";
import ButtonLink from "./styles";

interface TypeProps {
    to: string;
    text: string;
    fontWeight: number;
    fontSize: number;
    lineHeight: number;
    color: string;
    background: string;
    backgroundHover: string;
    backgroundActive: string;
}

const View: FC<TypeProps> = (props: any) => {
    const { to, text, ...rest } = props;

    return (
        <ButtonLink {...rest} to={to}>
            {text}
        </ButtonLink>
    );
};

export default View;
