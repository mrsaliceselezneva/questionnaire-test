import React, { FC } from "react";
import { Form } from "antd";
import FormButton from "components/FormButton";
import ButtonLink from "components/ButtonLink";
import {
    formParameterFinishType,
    dataButtonType,
    dataCancelType,
    dataTextAreaType,
} from "api/types";
import FormTextArea from "components/FormTextArea";
import { Wrapper, Bottom } from "./styles";

interface TypeProps {
    dataTextArea: dataTextAreaType;
    formParameter: formParameterFinishType;
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
