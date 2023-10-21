import React, { FC } from "react";
import { Wrapper } from "./styles";
import { Steps } from "antd";

type itemType = {
    title: string;
    link: string;
};
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
