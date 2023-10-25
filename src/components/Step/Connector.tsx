import React, { FC, useEffect, useState } from "react";
import { sendRequest } from "api/utils";
import { useAppSelector } from "api/hooks";
import { itemType } from "api/types";
import View from "./View";

const Connector: FC = () => {
    const { nowStep } = useAppSelector((state) => state.stepReducer);

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
