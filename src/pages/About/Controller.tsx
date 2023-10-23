import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "cookies-ts";
import { sendRequest, onFinishFailed } from "api/utils";
import { useDispatch, useSelector } from "react-redux";
import { setCreateStep } from "../../redux/slices/stepSlice";
import { Button, message, Steps, theme } from "antd";
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

    const navigate = useNavigate();
    const cookies = new Cookies();
    const { profile } = useSelector((state: any) => state.profileReducer);

    const dispatch = useDispatch();

    const onFinish = (values: any) => {
        console.log("Success:", values);
        const sendData = {
            email: profile.email,
            ...values,
        };
        message.success("Форма отправлена!");
        setTimeout(() => {
            const nowStep = "/about";
            sendRequest("next-step", "get").then((data) => {
                const to = data.find((item: any) => item.first === nowStep).second;
                cookies.set("route", to);
                dispatch(setCreateStep(to));
                navigate(to);
            });
            sendRequest(nowStep, "post", sendData);
        }, 5000);
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
