import React, { FC } from "react";
import { sendRequest } from "api/utils";
import { useSelector } from "react-redux";
import View from "./View";

type formParameter = {
    name: string;
    labelCol: object;
    wrapperCol: object;
    autoComplete: string;
};

type dataFormUploadType = {
    label: string;
    name: string;
    rules: any;
};

type dataFormButtonType = {
    title: string;
};

type dataCancelType = {
    to: string;
    text: string;
    isDanger: boolean;
};
interface TypeProps {
    formParameter: formParameter;
    dataButton: dataFormButtonType;
    dataUpload: dataFormUploadType;
    dataCancel: dataCancelType;
}

const Controller: FC<TypeProps> = (props) => {
    const { formParameter, dataButton, dataUpload, dataCancel } = props;

    const { profile } = useSelector((state: any) => state.profileReducer);

    const onFinish = (values: any) => {
        console.log("Success:", values);
        const sendData = {
            email: profile.email,
            ...values,
        };
        sendRequest("/photo", "post", sendData);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log("Failed:", errorInfo);
    };

    const formFunction = { ...formParameter, onFinish: onFinish, onFinishFailed: onFinishFailed };

    return (
        <View
            formParameter={formFunction}
            dataButton={dataButton}
            dataUpload={dataUpload}
            dataCancel={dataCancel}
        />
    );
};

export default Controller;
