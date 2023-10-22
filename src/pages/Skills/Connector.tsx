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

    const dataSelect = {
        label: "Укажите навыки",
        name: "select",
    };

    return (
        <Controller
            dataSelect={dataSelect}
            formParameter={formParameter}
            dataButton={dataButton}
            dataCancel={dataCancel}
        />
    );
};

export default Connector;
