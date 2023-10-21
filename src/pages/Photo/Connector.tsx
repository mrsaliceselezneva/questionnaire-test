import React, { FC } from "react";
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

    const dataUpload = {
        name: "upload",
        label: "Фото",
        rules: [{ required: true, message: "Пожалуйста, загрузите своё Фото!" }],
    };

    const dataCancel = {
        to: "/",
        text: "Отмена",
        isDanger: true,
    };

    return (
        <Controller
            formParameter={formParameter}
            dataButton={dataButton}
            dataUpload={dataUpload}
            dataCancel={dataCancel}
        />
    );
};

export default Connector;
