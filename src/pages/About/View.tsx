import React, { FC } from "react";
import { Form } from "antd";
import FormButton from "components/FormButton";
import ButtonLink from "components/ButtonLink";
import { Wrapper, Bottom } from "./styles";
import FormTextArea from "components/FormTextArea";

type formParameterType = {
    name: string;
    labelCol?: object;
    wrapperCol?: object;
    style?: object;
    onFinish: (values: any) => void;
    onFinishFailed: (values: any) => void;
    autoComplete: string;
};

type dataButtonType = {
    title: string;
};

type dataCancelType = {
    to: string;
    text: string;
    isDanger: boolean;
};

type dataTextAreaType = {
    label: string;
    name: string;
    rows: number;
};

interface TypeProps {
    dataTextArea: dataTextAreaType;
    formParameter: formParameterType;
    dataButton: dataButtonType;
    dataCancel: dataCancelType;
}

const View: FC<TypeProps> = (props: any) => {
    const { dataTextArea, formParameter, dataButton, dataCancel } = props;

    return (
        <Wrapper>
            <Form {...formParameter}>
                <FormTextArea {...dataTextArea} />
                <Bottom>
                    <ButtonLink data={dataCancel} />
                    <FormButton {...dataButton} />
                </Bottom>
            </Form>
        </Wrapper>
    );
};

export default View;
