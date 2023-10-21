import React, { FC, useEffect, useState } from "react";
import { Wrapper } from "./styles";
import Cookies from "cookies-ts";
import { Steps } from "antd";
import { sendRequest } from "api/utils";

const View: FC = () => {
    const cookies = new Cookies();
    const cookie = cookies.get("route");

    const [current, setCurrent] = useState();
    const [items, setItems] = useState();

    useEffect(() => {
        sendRequest("/steps", "get").then((steps) => {
            setCurrent(steps.findIndex((item: any) => item.link == cookie));
            setItems(steps.map((item: any) => ({ key: item.title, title: item.title })));
        });
    }, [cookie]);

    return (
        <Wrapper>
            <Steps current={current} items={items} />
        </Wrapper>
    );
};

export default View;
