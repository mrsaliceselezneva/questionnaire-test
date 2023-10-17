import React, { FC } from "react";
import { Wrapper } from "./styles";
import FormInput from "components/FormInput";
import FormRadio from "components/FormRadio";
import FormButton from "components/FormButton";
import { Form } from "antd";
import { Link } from "react-router-dom";

type formParameter = {
    name: string;
    labelCol: object;
    wrapperCol: object;
    onFinish: any;
    onFinishFailed: any;
    autoComplete: string;
};

type dataFormInputType = { label: string; name: string; rules: any };

type dataFormRadioType = {
    label: string;
    name: string;
    rules: any;
    radioList: { value: string; title: string }[];
};

type dataFormButtonTyoe = {
    title: string;
};
interface TypeProps {
    formParameter: formParameter;
    dataSurname: dataFormInputType;
    dataName: dataFormInputType;
    dataPatronymic: dataFormInputType;
    dataRadio: dataFormRadioType;
    dataButton: dataFormButtonTyoe;
}

const View: FC<TypeProps> = (props) => {
    const { formParameter, dataSurname, dataName, dataPatronymic, dataRadio, dataButton } = props;

    return (
        <Wrapper>
            <Form {...formParameter}>
                <FormInput {...dataSurname} />
                <FormInput {...dataName} />
                <FormInput {...dataPatronymic} />

                <FormRadio {...dataRadio} />
                <Link to='/photo'>
                    <FormButton {...dataButton} />
                </Link>
            </Form>
        </Wrapper>
    );
};

export default View;
