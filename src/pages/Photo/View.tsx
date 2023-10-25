import React, { FC } from "react";
import { Form } from "antd";
import FormButton from "components/FormButton";
import FormUpload from "components/FormUpload";
import ButtonLink from "components/ButtonLink";
import {
    formParameterFinishType,
    dataButtonType,
    dataCancelType,
    dataFormUploadType,
} from "api/types";
import { Wrapper, Bottom } from "./styles";

interface TypeProps {
    formParameter: formParameterFinishType;
    dataButton: dataButtonType;
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
