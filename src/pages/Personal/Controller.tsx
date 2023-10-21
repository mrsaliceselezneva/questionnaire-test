import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "cookies-ts";
import { sendRequest } from "api/utils";
import { useDispatch, useSelector } from "react-redux";
import { setCreateStep, setDeleteStep } from "../../redux/slices/stepSlice";
import View from "./View";

type formParameterType = {
    name: string;
    labelCol: object;
    wrapperCol: object;
    autoComplete: string;
};

type dataFormInputType = { label: string; name: string; rules: any };

type dataRadioType = {
    label: string;
    name: string;
    rules: any;
    radioList: { value: string; title: string }[];
};

type dataButtonType = {
    title: string;
};

type dataCancelType = {
    to: string;
    text: string;
    isDanger: boolean;
};
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
    const { profile } = useSelector((state: any) => state.profileReducer);

    const dispatch = useDispatch();

    const to = "/photo";

    const onFinish = (values: any) => {
        cookies.set("route", to);
        console.log("Success:", values);
        const sendData = {
            email: profile.email,
            ...values,
        };
        sendRequest("/personal", "post", sendData);
        dispatch(setCreateStep(to));
        navigate(to);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log(cookies.get("route"));
        console.log("Failed:", errorInfo);
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
