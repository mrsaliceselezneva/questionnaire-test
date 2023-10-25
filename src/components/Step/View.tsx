import React, { FC } from "react";
import { itemType } from "api/types";
import { Steps } from "antd";
import { Wrapper } from "./styles";

interface TypeProps {
    current: number;
    items: itemType[];
}

const View: FC<TypeProps> = (props) => {
    const { current, items } = props;

    return (
        <Wrapper>
            <Steps current={current} items={items} />
        </Wrapper>
    );
};

export default View;
