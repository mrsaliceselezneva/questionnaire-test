import React, { FC } from "react";
import { StyledDiv, StyledTitle, StyledInput } from "./styles";
import { Button, Checkbox, Form, Input, Radio } from "antd";

interface TypeProps {
    label?: string;
    name?: string;
    rules?: any;
    radioList?: { value: string; title: string }[];
}

type FieldType = {
    surname?: string;
    name?: string;
    patronymic?: string;
};

const View: FC<TypeProps> = (props: any) => {
    const { label, name, rules, radioList } = props;

    return (
        <Form.Item label={label} name={name} rules={rules}>
            <Radio.Group>
                {radioList.map((radio) => (
                    <Radio value={radio.value} key={radio.value}>
                        {radio.title}
                    </Radio>
                ))}
            </Radio.Group>
        </Form.Item>
    );
};

export default View;
