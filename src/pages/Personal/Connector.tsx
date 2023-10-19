import React, { FC } from "react";
import View from "./View";
import colors from "styles/colors";
import { useNavigate } from "react-router-dom";
import Cookies from "cookies-ts";

const Connector: FC = () => {
    const navigate = useNavigate();
    const cookies = new Cookies();

    // cookies.set(keyName: string, {
    //     expires?: string | number | Date,
    //     path?: string,
    //     domain?: string,
    //     secure?: boolean
    // })

    const dataNext = {
        to: "/Photo",
        text: "Вперёд",
        fontWeight: 800,
        fontSize: 16,
        lineHeight: 16,
        color: colors.whiteColor,
        background: colors.blueColor,
    };

    const dataCancel = {
        to: "/",
        text: "Отмена",
        fontWeight: 800,
        fontSize: 16,
        lineHeight: 16,
        color: colors.whiteColor,
        background: colors.blueColor,
        isDanger: true,
    };

    const onFinish = (values: any) => {
        cookies.set("route", "/photo");
        console.log("Success:", values);
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
            { value: "male", title: "муж." },
            { value: "female", title: "жен." },
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
        />
    );
};

export default Connector;
