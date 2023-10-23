import React, { FC } from "react";
import type { SelectProps } from "antd";
import { sendRequest } from "api/utils";
import View from "./View";

type optionType = {
    label: string;
    value: string;
};

const options: SelectProps["options"] = [];

//TODO: не очень хорошая практика, лучше это перенести в useEffect внутри компонента
sendRequest("/skills-all", "get").then((data) => {
    data.forEach((option: optionType) => {
        options.push(option);
    });
});

type dataSelectType = {
    label: string;
    name: string;
};

interface TypeProps {
    dataSelect: dataSelectType;
}

const Connector: FC<TypeProps> = (props) => {
    const { dataSelect } = props;

    return <View {...dataSelect} options={options} />;
};

export default Connector;
