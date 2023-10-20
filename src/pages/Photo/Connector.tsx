import React, { FC } from "react";
import { sendRequest } from "api/utils";
import View from "./View";

const Connector: FC = () => {
    const onFinish = (values: any) => {
        console.log("Success:", values);
        values.id = 1;
        sendRequest("/photo", "get").then((lastIdData) => {
            values.id = lastIdData[lastIdData.length - 1].id + 1;
            sendRequest("/photo", "post", values);
        });
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    const formParameter = {
        name: "basic",
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
        onFinish: onFinish,
        onFinishFailed: onFinishFailed,
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
        <View
            formParameter={formParameter}
            dataButton={dataButton}
            dataUpload={dataUpload}
            dataCancel={dataCancel}
        />
    );
};

export default Connector;
