import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "cookies-ts";
import { useDispatch, useSelector } from "react-redux";
import { setCreateStep } from "../../redux/slices/stepSlice";
import { sendRequest } from "api/utils";
import { onFinishFailed, useTo } from "api/helpers";
import View from "./View";

type formParameterType = {
    name: string;
    labelCol: object;
    wrapperCol: object;
    autoComplete: string;
};

type ruleType = {
    required: boolean;
    message: string;
};

type dataFormUploadType = {
    label: string;
    name: string;
    rules: ruleType[];
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
    formParameter: formParameterType;
    dataButton: dataFormButtonType;
    dataUpload: dataFormUploadType;
    dataCancel: dataCancelType;
}

const Controller: FC<TypeProps> = (props) => {
    const { formParameter, dataButton, dataUpload, dataCancel } = props;

    const navigate = useNavigate();
    const cookies = new Cookies();

    const dispatch = useDispatch();

    const { profile } = useSelector((state: any) => state.profileReducer);

    const onFinish = (values: any) => {
        console.log("Success:", values);
        const sendData = {
            email: profile.email,
            ...values,
        };
        const nowStep = "/photo";
        sendRequest("next-step", "get").then((data) => {
            const to = useTo(data, nowStep);
            cookies.set("route", to);
            dispatch(setCreateStep(to));
            navigate(to);
        });
        sendRequest(nowStep, "post", sendData);
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
