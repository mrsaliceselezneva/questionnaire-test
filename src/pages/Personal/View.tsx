import React, { FC } from "react";
import { Form } from "antd";
import FormInput from "components/FormInput";
import FormRadio from "components/FormRadio";
import FormButton from "components/FormButton";
import ButtonLink from "components/ButtonLink";
import {
    formParameterFinishType,
    dataButtonType,
    dataCancelType,
    dataFormInputType,
    dataRadioType,
} from "api/types";
import { Wrapper, Bottom } from "./styles";

interface TypeProps {
    formParameter: formParameterFinishType;
    dataSurname: dataFormInputType;
    dataName: dataFormInputType;
    dataPatronymic: dataFormInputType;
    dataRadio: dataRadioType;
    dataButton: dataButtonType;
    dataCancel: dataCancelType;
}

const View: FC<TypeProps> = (props) => {
    const {
        formParameter,
        dataSurname,
        dataName,
        dataPatronymic,
        dataRadio,
        dataButton,
        dataCancel,
    } = props;

    return (
        <Wrapper>
            <Form {...formParameter}>
                <FormInput {...dataSurname} key={dataSurname.name} />
                <FormInput {...dataName} key={dataName.name} />
                <FormInput {...dataPatronymic} key={dataPatronymic.name} />

                <FormRadio {...dataRadio} />
                <Bottom>
                    <ButtonLink data={dataCancel} />
                    <FormButton {...dataButton} />
                </Bottom>
            </Form>
        </Wrapper>
    );
};

export default View;
