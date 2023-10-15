import React, { FC } from "react";
import { Wrapper } from "./styles";
import FormInput from "components/FormInput";
import FormRadio from "components/FormRadio";
import { Button, Form } from "antd";

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

interface TypeProps {
    formParameter: formParameter;
    dataSurname: dataFormInputType;
    dataName: dataFormInputType;
    dataPatronymic: dataFormInputType;
    dataRadio: dataFormRadioType;
}

const View: FC<TypeProps> = (props) => {
    const { formParameter, dataSurname, dataName, dataPatronymic, dataRadio } = props;

    return (
        <Wrapper>
            <Form {...formParameter}>
                <FormInput {...dataSurname} />
                <FormInput {...dataName} />
                <FormInput {...dataPatronymic} />

                <FormRadio {...dataRadio} />

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type='primary' htmlType='submit'>
                        Вперёд
                    </Button>
                </Form.Item>
            </Form>
        </Wrapper>
    );
};

export default View;
