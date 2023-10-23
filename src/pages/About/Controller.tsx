import React, { FC } from "react";
import { sendRequest, onFinishFailed } from "api/utils";
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

type dataTextAreaType = {
    label: string;
    name: string;
    rows: number;
};

interface TypeProps {
    dataTextArea: dataTextAreaType;
    formParameter: formParameterType;
    dataButton: dataFormButtonType;
    dataCancel: dataCancelType;
}

const Controller: FC<TypeProps> = (props) => {
    const { dataTextArea, formParameter, dataButton, dataCancel } = props;

    const { profile } = useSelector((state: any) => state.profileReducer);

    const onFinish = (values: any) => {
        console.log("Success:", values);
        const sendData = {
            email: profile.email,
            ...values,
        };
        console.log(sendData);
        // sendRequest("/about", "post", sendData);
    };

    const formFunction = { ...formParameter, onFinish: onFinish, onFinishFailed: onFinishFailed };

    return (
        <View
            dataTextArea={dataTextArea}
            formParameter={formFunction}
            dataButton={dataButton}
            dataCancel={dataCancel}
        />
    );
};

export default Controller;
