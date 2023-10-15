import React, { FC } from "react";
import { StyledDiv, StyledTitle, StyledInput } from "./styles";
import { Button, Checkbox, Form, Input, Radio } from "antd";

interface TypeProps {
    label?: string;
    name?: string;
    rules?: any;
}

const View: FC<TypeProps> = (props: any) => {
    const { label, name, rules } = props;

    type FieldType = {
        surname?: string;
        name?: string;
        patronymic?: string;
    };

    return (
        <Form.Item<FieldType> label={label} name={name} rules={rules}>
            <Input />
        </Form.Item>
    );
};

export default View;
