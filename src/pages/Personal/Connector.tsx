import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "cookies-ts";
import { sendRequest } from "api/utils";
import View from "./View";

const Connector: FC = () => {
    const navigate = useNavigate();
    const cookies = new Cookies();

    const dataCancel = {
        to: "/",
        text: "Отмена",
        isDanger: true,
    };

    const onFinish = (values: any) => {
        cookies.set("route", "/photo");
        console.log("Success:", values);
        sendRequest("/personal", "post", values);
        navigate("/photo");
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log(cookies.get("route"));
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

    const dataSurname = {
        label: "Фамилия",
        name: "surname",
        rules: [{ required: true, message: "Пожалуйста, заполните Фамилию!" }],
    };

    const dataName = {
        label: "Имя",
        name: "name",
        rules: [{ required: true, message: "Пожалуйста, заполните Имя!" }],
    };

    const dataPatronymic = {
        label: "Отчество",
        name: "patronymic",
        rules: [{ required: true, message: "Пожалуйста, заполните Отчество!" }],
    };

    const dataRadio = {
        label: "Пол",
        name: "gender",
        rules: [{ required: true, message: "Пожалуйста, укажите Пол!" }],
        radioList: [
            { value: "мужчина", title: "муж." },
            { value: "женщина", title: "жен." },
        ],
    };

    const dataButton = {
        title: "Вперёд",
    };

    return (
        <View
            formParameter={formParameter}
            dataSurname={dataSurname}
            dataName={dataName}
            dataPatronymic={dataPatronymic}
            dataRadio={dataRadio}
            dataButton={dataButton}
            dataCancel={dataCancel}
        />
    );
};

export default Connector;
