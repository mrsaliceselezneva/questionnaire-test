import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "cookies-ts";
import { sendRequest } from "api/utils";
import { onFinishFailed, useTo } from "api/helpers";
import { useAppSelector, useAppDispatch } from "api/hooks";
import { setCreateStep } from "../../redux/slices/stepSlice";
import {
    formParameterType,
    dataButtonType,
    dataCancelType,
    dataFormInputType,
    dataRadioType,
} from "api/types";
import View from "./View";

type onFinishType = { surname: string; name: string; patronymic: string; gender: string };

interface TypeProps {
    formParameter: formParameterType;
    dataSurname: dataFormInputType;
    dataName: dataFormInputType;
    dataPatronymic: dataFormInputType;
    dataRadio: dataRadioType;
    dataButton: dataButtonType;
    dataCancel: dataCancelType;
}

const Controller: FC<TypeProps> = (props) => {
    const {
        formParameter,
        dataSurname,
        dataName,
        dataPatronymic,
        dataRadio,
        dataButton,
        dataCancel,
    } = props;

    const navigate = useNavigate();
    const cookies = new Cookies();
    const { profile } = useAppSelector((state) => state.profileReducer);

    const dispatch = useAppDispatch();

    const onFinish = (values: onFinishType) => {
        const sendData = {
            email: profile.email,
            ...values,
        };

        const nowStep = "/personal";
        sendRequest("next-step", "get").then((data) => {
            const to = useTo(data, nowStep);
            cookies.set("route", to);
            dispatch(setCreateStep(to));
            navigate(to);
        });
        sendRequest(nowStep, "post", sendData);
    };

    const formFunction = { ...formParameter, onFinish: onFinish, onFinishFailed: onFinishFailed };

    const cancelFunction = {
        ...dataCancel,
        click: () => {
            cookies.set("route", "/");
        },
    };

    return (
        <View
            formParameter={formFunction}
            dataSurname={dataSurname}
            dataName={dataName}
            dataPatronymic={dataPatronymic}
            dataRadio={dataRadio}
            dataButton={dataButton}
            dataCancel={cancelFunction}
        />
    );
};

export default Controller;
