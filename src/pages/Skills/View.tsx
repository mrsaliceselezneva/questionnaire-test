import React, { FC } from "react";
import { Form } from "antd";
import FormButton from "components/FormButton";
import ButtonLink from "components/ButtonLink";
import FormSelect from "components/FormSelect";
import { formParameterFinishType, dataButtonType, dataCancelType, dataSelectType } from "api/types";
import { Wrapper, Bottom } from "./styles";

interface TypeProps {
    dataSelect: dataSelectType;
    formParameter: formParameterFinishType;
    dataButton: dataButtonType;
    dataCancel: dataCancelType;
}

const View: FC<TypeProps> = (props) => {
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
