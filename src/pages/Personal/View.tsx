import React, { FC } from "react";
import { Form } from "antd";
import FormInput from "components/FormInput";
import FormRadio from "components/FormRadio";
import FormButton from "components/FormButton";
import ButtonLink from "components/ButtonLink";
import { Wrapper, Bottom } from "./styles";

type formParameterType = {
    name: string;
    labelCol: object;
    wrapperCol: object;
    onFinish: (values: any) => void;
    onFinishFailed: (values: any) => void;
    autoComplete: string;
};

type dataFormInputType = { label: string; name: string; rules: any };

type ruleType = { required: boolean; message: string };

type radioType = { value: string; title: string };

type dataRadioType = {
    label: string;
    name: string;
    rules: ruleType[];
    radioList: radioType[];
};

type dataButtonType = {
    title: string;
};

type dataCancelType = {
    to: string;
    text: string;
    isDanger: boolean;
    click?: any;
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

const View: FC<TypeProps> = (props) => {
    const {
        formParameter,
        dataSurname,
        dataName,
        dataPatronymic,
        dataRadio,
        dataButton,
        dataCancel,
    } = props;

    return (
        <Wrapper>
            <Form {...formParameter}>
                <FormInput {...dataSurname} key={dataSurname.name} />
                <FormInput {...dataName} key={dataName.name} />
                <FormInput {...dataPatronymic} key={dataPatronymic.name} />

                <FormRadio {...dataRadio} />
                <Bottom>
                    <ButtonLink data={dataCancel} />
                    <FormButton {...dataButton} />
                </Bottom>
            </Form>
        </Wrapper>
    );
};

export default View;
