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
//TODO: убрать any, у тебя и так указан TypeProps
const View: FC<TypeProps> = (props: any) => {
    const { label, name, rules } = props;
    //TODO: после того как уберешь any <FieldType> не нужно будет
    return (
        <Form.Item<FieldType> label={label} name={name} rules={rules}>
            <Input />
        </Form.Item>
    );
};

export default View;
