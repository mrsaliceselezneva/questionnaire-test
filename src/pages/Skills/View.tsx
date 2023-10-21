import React, { FC } from "react";
import type { SelectProps } from "antd";
import { Select, Space, Form } from "antd";
import FormButton from "components/FormButton";
import ButtonLink from "components/ButtonLink";
import { Wrapper, Bottom } from "./styles";
const options: SelectProps["options"] = [];

for (let i = 10; i < 36; i++) {
    options.push({
        label: i.toString(36) + i,
        value: i.toString(36) + i,
    });
}
type formParameterType = {
    name: string;
    labelCol: object;
    wrapperCol: object;
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

interface TypeProps {
    formParameter: formParameterType;
    dataButton: dataButtonType;
    dataCancel: dataCancelType;
}

const View: FC<TypeProps> = (props: any) => {
    const { formParameter, dataButton, dataCancel } = props;

    return (
        <Wrapper>
            <Space style={{ width: "100%" }} direction='vertical'>
                <Select
                    mode='multiple'
                    allowClear
                    style={{ width: "100%" }}
                    placeholder='Укажите навыки'
                    options={options}
                />
            </Space>
            <Form {...formParameter}>
                <Bottom>
                    <ButtonLink data={dataCancel} />
                    <FormButton {...dataButton} />
                </Bottom>
            </Form>
        </Wrapper>
    );
};

export default View;
