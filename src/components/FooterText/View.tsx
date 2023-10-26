import React, { FC } from "react";
import { Text, TextLink } from "./styles";

interface TypeProps {
    text: string;
    fontWeight: number;
    fontSize: number;
    lineHeight: number;
    color: string;
    margin?: number;
    colorHover?: string;
    isLink: boolean;
}

const View: FC<TypeProps> = (props) => {
    const { isLink, text, ...rest } = props;

    const cmp = isLink ? <TextLink {...rest}>{text}</TextLink> : <Text {...rest}>{text}</Text>;

    return cmp;
};

export default View;
