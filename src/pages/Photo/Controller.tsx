import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "cookies-ts";
import { useAppSelector, useAppDispatch } from "api/hooks";
import { setCreateStep } from "../../redux/slices/stepSlice";
import { sendRequest } from "api/utils";
import { useTo } from "api/helpers";
import { fourType } from "api/dataTypes";
import {
    formParameterType,
    dataButtonType,
    dataCancelType,
    dataFormUploadType,
    nextStepType,
} from "api/types";
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

    const { profile } = useAppSelector((state) => state.profileReducer);

    const onFinish = (values: fourType) => {
        const sendData = {
            email: profile.email,
            ...values,
        };
        const nowStep = "/photo";
        sendRequest("next-step", "get").then((data: nextStepType[]) => {
            const to = useTo(data, nowStep);
            cookies.set("route", to);
            dispatch(setCreateStep(to));
            navigate(to);
        });
        sendRequest(nowStep, "post", sendData);
    };

    const formFunction = { ...formParameter, onFinish: onFinish };

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
