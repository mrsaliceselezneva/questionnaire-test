import React, { FC } from "react";
import { sendRequest } from "api/utils";
import { onFinishFailed, useTo } from "api/helpers";
import { useAppSelector, useAppDispatch } from "api/hooks";
import { useNavigate } from "react-router-dom";
import Cookies from "cookies-ts";
import { setCreateStep } from "../../redux/slices/stepSlice";
import { formParameterType, dataButtonType, dataCancelType, dataSelectType } from "api/types";
import View from "./View";

type onFinishType = {
    select: string[];
};

interface TypeProps {
    dataSelect: dataSelectType;
    formParameter: formParameterType;
    dataButton: dataButtonType;
    dataCancel: dataCancelType;
}

const Controller: FC<TypeProps> = (props) => {
    const { dataSelect, formParameter, dataButton, dataCancel } = props;

    const navigate = useNavigate();
    const cookies = new Cookies();
    const dispatch = useAppDispatch();

    const { profile } = useAppSelector((state) => state.profileReducer);

    const onFinish = (values: onFinishType) => {
        console.log(values);
        const sendData = {
            email: profile.email,
            ...values,
        };
        const nowStep = "/skills";
        sendRequest("next-step", "get").then((data) => {
            const to = useTo(data, nowStep);
            cookies.set("route", to);
            dispatch(setCreateStep(to));
            navigate(to);
        });
        // sendRequest(nowStep, "post", sendData);
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
