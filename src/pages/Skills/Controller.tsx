import React, { FC } from "react";
import { sendRequest } from "api/utils";
import { useTo } from "api/helpers";
import { useAppSelector, useAppDispatch } from "api/hooks";
import { fourType } from "api/dataTypes";
import { useNavigate } from "react-router-dom";
import Cookies from "cookies-ts";
import { setCreateStep } from "../../redux/slices/stepSlice";
import {
    formParameterType,
    dataButtonType,
    dataCancelType,
    dataSelectType,
    nextStepType,
} from "api/types";
import View from "./View";

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

    const onFinish = (values: fourType) => {
        console.log(values);
        const sendData = {
            email: profile.email,
            ...values,
        };
        const nowStep = "/skills";
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
            dataSelect={dataSelect}
            formParameter={formFunction}
            dataButton={dataButton}
            dataCancel={dataCancel}
        />
    );
};

export default Controller;
