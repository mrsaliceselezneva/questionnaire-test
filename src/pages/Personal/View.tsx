import React, { FC } from "react";
import { Wrapper } from "./styles";
import FormInput from "components/FormInput";
import FormRadio from "components/FormRadio";
import FormButton from "components/FormButton";
import { Form } from "antd";

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

type dataFormButtonType = {
    title: string;
};
interface TypeProps {
    formParameter: formParameter;
    dataSurname: dataFormInputType;
    dataName: dataFormInputType;
    dataPatronymic: dataFormInputType;
    dataRadio: dataFormRadioType;
    dataButton: dataFormButtonType;
}

const View: FC<TypeProps> = (props) => {
    const { formParameter, dataSurname, dataName, dataPatronymic, dataRadio, dataButton } = props;

    return (
        <Wrapper>
            <Form {...formParameter}>
                <FormInput {...dataSurname} key={dataSurname.name} />
                <FormInput {...dataName} key={dataName.name} />
                <FormInput {...dataPatronymic} key={dataPatronymic.name} />

                <FormRadio {...dataRadio} />
                <FormButton {...dataButton} />
            </Form>
        </Wrapper>
    );
};

export default View;
