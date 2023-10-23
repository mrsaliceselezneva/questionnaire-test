import React, { FC } from "react";
import { sendRequest, onFinishFailed } from "api/utils";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "cookies-ts";
import { setCreateStep } from "../../redux/slices/stepSlice";
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

type dataSelectType = {
    label: string;
    name: string;
};

interface TypeProps {
    dataSelect: dataSelectType;
    formParameter: formParameterType;
    dataButton: dataFormButtonType;
    dataCancel: dataCancelType;
}

const Controller: FC<TypeProps> = (props) => {
    const { dataSelect, formParameter, dataButton, dataCancel } = props;

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
        const nowStep = "/skills";
        sendRequest("next-step", "get").then((data) => {
            //TODO: повторение
            const to = data.find((item: any) => item.first === nowStep).second;
            cookies.set("route", to);
            dispatch(setCreateStep(to));
            navigate(to);
        });
        sendRequest(nowStep, "post", sendData);
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
