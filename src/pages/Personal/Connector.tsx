import React, { FC } from "react";
import Controller from "./Controller";

const Connector: FC = () => {
    const formParameter = {
        name: "basic",
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
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

    const dataCancel = {
        to: "/",
        text: "Отмена",
        isDanger: true,
    };

    const dataButton = {
        title: "Вперёд",
    };

    return (
        <Controller
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
