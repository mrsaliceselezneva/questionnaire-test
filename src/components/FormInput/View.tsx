import React, { FC } from "react";
import { Form, Input } from "antd";
import { ruleType } from "api/types";
interface TypeProps {
    label?: string;
    name?: string;
    rules?: ruleType[];
}

const View: FC<TypeProps> = (props) => {
    const { label, name, rules } = props;

    return (
        <Form.Item label={label} name={name} rules={rules}>
            <Input />
        </Form.Item>
    );
};

export default View;
