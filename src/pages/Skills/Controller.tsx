import React, { FC } from "react";
import { sendRequest } from "api/utils";
import { useSelector } from "react-redux";
import View from "./View";

type formParameterType = {
    name: string;
    labelCol?: object;
    wrapperCol?: object;
    style?: object;
    autoComplete: string;
};

type dataFormButtonType = {
    title: string;
};

type dataCancelType = {
    to: string;
    text: string;
    isDanger: boolean;
};

type dataSelectType = {
    label: string;
    name: string;
};

interface TypeProps {
    dataSelect: dataSelectType;
    formParameter: formParameterType;
    dataButton: dataFormButtonType;
    dataCancel: dataCancelType;
}

const Controller: FC<TypeProps> = (props) => {
    const { dataSelect, formParameter, dataButton, dataCancel } = props;

    const { profile } = useSelector((state: any) => state.profileReducer);

    const onFinish = (values: any) => {
        console.log("Success:", values);
        const sendData = {
            email: profile.email,
            ...values,
        };
        console.log(sendData);
        sendRequest("/skills", "post", sendData);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    const formFunction = { ...formParameter, onFinish: onFinish, onFinishFailed: onFinishFailed };

    return (
        <View
            dataSelect={dataSelect}
            formParameter={formFunction}
            dataButton={dataButton}
            dataCancel={dataCancel}
        />
    );
};

export default Controller;
