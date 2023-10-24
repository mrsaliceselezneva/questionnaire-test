import React, { FC } from "react";
import { Form, Input } from "antd";

type ruleType = { required: boolean; message: string };
interface TypeProps {
    label?: string;
    name?: string;
    rules?: ruleType[];
}

type FieldType = {
    surname?: string;
    name?: string;
    patronymic?: string;
};

const View: FC<TypeProps> = (props: any) => {
    const { label, name, rules } = props;

    return (
        <Form.Item<FieldType> label={label} name={name} rules={rules}>
            <Input />
        </Form.Item>
    );
};

export default View;
