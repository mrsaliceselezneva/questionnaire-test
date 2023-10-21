import React, { FC } from "react";
import type { SelectProps } from "antd";
import Controller from "./Controller";

const Connector: FC = () => {
    const formParameter = {
        name: "basic",
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
        autoComplete: "off",
    };

    const dataButton = {
        title: "Вперёд",
    };

    const dataCancel = {
        to: "/",
        text: "Отмена",
        isDanger: true,
    };
    console.log("controller");

    return (
        <Controller formParameter={formParameter} dataButton={dataButton} dataCancel={dataCancel} />
    );
};

export default Connector;
