import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "cookies-ts";
import { useAppSelector, useAppDispatch } from "api/hooks";
import { setCreateStep } from "../../redux/slices/stepSlice";
import { sendRequest } from "api/utils";
import { onFinishFailed, useTo } from "api/helpers";
import { formParameterType, dataButtonType, dataCancelType, dataFormUploadType } from "api/types";
import View from "./View";

interface TypeProps {
    formParameter: formParameterType;
    dataButton: dataButtonType;
    dataUpload: dataFormUploadType;
    dataCancel: dataCancelType;
}

const Controller: FC<TypeProps> = (props) => {
    const { formParameter, dataButton, dataUpload, dataCancel } = props;

    const navigate = useNavigate();
    const cookies = new Cookies();

    const dispatch = useAppDispatch();

    const { profile } = useAppSelector((state: any) => state.profileReducer);

    const onFinish = (values: any) => {
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
