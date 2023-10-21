import React, { FC, useEffect, useState } from "react";
import { sendRequest } from "api/utils";
import { useSelector } from "react-redux";
import View from "./View";

type itemType = {
    title: string;
    link: string;
};

const Connector: FC = () => {
    const { nowStep } = useSelector((state: any) => state.stepReducer);

    const [current, setCurrent] = useState(-1);
    const [items, setItems] = useState([]);

    useEffect(() => {
        sendRequest("/steps", "get").then((steps) => {
            setCurrent(steps.findIndex((item: itemType) => item.link == nowStep));
            setItems(steps.map((item: itemType) => ({ key: item.title, title: item.title })));
        });
    }, [nowStep]);

    return <View current={current} items={items} />;
};

export default Connector;
