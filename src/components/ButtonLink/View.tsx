import React, { FC } from "react";
import { Button } from "antd";

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
    renavigate: any;
}

const View: FC<TypeProps> = (props: any) => {
    const { text, isDanger, type = "primary", renavigate, ...rest } = props;

    return (
        <Button type={type} danger={isDanger} onClick={renavigate}>
            {text}
        </Button>
    );
};

export default View;
