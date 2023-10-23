import React, { FC } from "react";
import Controller from "./Controller";

const Connector: FC = () => {
    const formParameter = {
        name: "basic",
        style: { width: "100%" },
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

    const dataTextArea = {
        label: "Расскажите о себе",
        name: "textArea",
        rows: 4,
    };

    return (
        <Controller
            dataTextArea={dataTextArea}
            formParameter={formParameter}
            dataButton={dataButton}
            dataCancel={dataCancel}
        />
    );
};

export default Connector;
