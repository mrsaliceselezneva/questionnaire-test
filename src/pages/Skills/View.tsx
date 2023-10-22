import React, { FC } from "react";
import { Form } from "antd";
import FormButton from "components/FormButton";
import ButtonLink from "components/ButtonLink";
import { Wrapper, Bottom } from "./styles";
import FormSelect from "components/FormSelect";

type formParameterType = {
    name: string;
    labelCol?: object;
    wrapperCol?: object;
    style?: object;
    onFinish: any;
    onFinishFailed: any;
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

type dataSelectType = {
    label: string;
    name: string;
};

interface TypeProps {
    dataSelect: dataSelectType;
    formParameter: formParameterType;
    dataButton: dataButtonType;
    dataCancel: dataCancelType;
}

const View: FC<TypeProps> = (props: any) => {
    const { dataSelect, formParameter, dataButton, dataCancel } = props;

    return (
        <Wrapper>
            <Form {...formParameter}>
                <FormSelect dataSelect={dataSelect} />
                <Bottom>
                    <ButtonLink data={dataCancel} />
                    <FormButton {...dataButton} />
                </Bottom>
            </Form>
        </Wrapper>
    );
};

export default View;
