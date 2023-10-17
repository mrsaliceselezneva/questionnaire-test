import React, { FC } from "react";
import { Form } from "antd";
import FormButton from "components/FormButton";
import FormUpload from "components/FormUpload";
import { Wrapper } from "./styles";

type formParameter = {
    name: string;
    labelCol: object;
    wrapperCol: object;
    onFinish: any;
    onFinishFailed: any;
    autoComplete: string;
};

type dataFormUploadType = {
    label: string;
    name: string;
    rules: any;
};

type dataFormButtonType = {
    title: string;
};
interface TypeProps {
    formParameter: formParameter;
    dataButton: dataFormButtonType;
    dataUpload: dataFormUploadType;
}

const View: FC<TypeProps> = (props) => {
    const { formParameter, dataButton, dataUpload } = props;

    return (
        <Wrapper>
            <Form {...formParameter}>
                <FormUpload dataUpload={dataUpload} />
                <FormButton {...dataButton} />
            </Form>
        </Wrapper>
    );
};

export default View;
