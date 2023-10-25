import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "cookies-ts";
import { sendRequest } from "api/utils";
import { onFinishFailed, useTo } from "api/helpers";
import { useAppSelector, useAppDispatch } from "api/hooks";
import { setCreateStep } from "../../redux/slices/stepSlice";
import { formParameterType, dataButtonType, dataCancelType, dataTextAreaType } from "api/types";
import { message } from "antd";
import View from "./View";

type onFinishType = {
    textArea: string;
};

interface TypeProps {
    dataTextArea: dataTextAreaType;
    formParameter: formParameterType;
    dataButton: dataButtonType;
    dataCancel: dataCancelType;
}

const Controller: FC<TypeProps> = (props) => {
    const { dataTextArea, formParameter, dataButton, dataCancel } = props;

    const navigate = useNavigate();
    const cookies = new Cookies();
    const { profile } = useAppSelector((state) => state.profileReducer);

    const dispatch = useAppDispatch();

    const onFinish = (values: onFinishType) => {
        console.log(values);
        const sendData = {
            email: profile.email,
            ...values,
        };
        message.success("Форма отправлена!");
        setTimeout(() => {
            const nowStep = "/about";
            sendRequest("next-step", "get").then((data) => {
                const to = useTo(data, nowStep);
                cookies.set("route", to);
                dispatch(setCreateStep(to));
                navigate(to);
            });
            sendRequest(nowStep, "post", sendData);
        }, 3000);
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
