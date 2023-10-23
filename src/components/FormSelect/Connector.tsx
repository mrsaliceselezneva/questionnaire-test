import React, { FC, useEffect, useState } from "react";
import type { SelectProps } from "antd";
import { sendRequest } from "api/utils";
import View from "./View";

type optionType = {
    label: string;
    value: string;
};

type dataSelectType = {
    label: string;
    name: string;
};

interface TypeProps {
    dataSelect: dataSelectType;
}

const Connector: FC<TypeProps> = (props) => {
    const { dataSelect } = props;

    const [options, setOptions] = useState<SelectProps["options"]>();

    useEffect(() => {
        sendRequest("/skills-all", "get").then((data) => {
            const options: SelectProps["options"] = [];
            data.forEach((option: optionType) => {
                options.push(option);
            });
            setOptions(options);
        });
    }, []);

    return <View {...dataSelect} options={options} />;
};

export default Connector;
