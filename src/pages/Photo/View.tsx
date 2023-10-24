import React, { FC } from "react";
import { Form } from "antd";
import FormButton from "components/FormButton";
import FormUpload from "components/FormUpload";
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

type ruleType = {
    required: boolean;
    message: string;
};

type dataFormUploadType = {
    label: string;
    name: string;
    rules: ruleType[];
};

type dataFormButtonType = {
    title: string;
};

type dataCancelType = {
    to: string;
    text: string;
    isDanger: boolean;
};

interface TypeProps {
    formParameter: formParameterType;
    dataButton: dataFormButtonType;
    dataUpload: dataFormUploadType;
    dataCancel: dataCancelType;
}

const View: FC<TypeProps> = (props) => {
    const { formParameter, dataButton, dataUpload, dataCancel } = props;

    return (
        <Wrapper>
            <Form {...formParameter}>
                <FormUpload dataUpload={dataUpload} />
                <Bottom>
                    <ButtonLink data={dataCancel} />
                    <FormButton {...dataButton} />
                </Bottom>
            </Form>
        </Wrapper>
    );
};

export default View;
