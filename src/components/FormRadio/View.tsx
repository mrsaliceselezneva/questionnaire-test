import React, { FC } from "react";
import { Form, Radio } from "antd";

type radioType = { value: string; title: string };

interface TypeProps {
    label?: string;
    name?: string;
    rules?: any;
    radioList?: radioType[];
}

const View: FC<TypeProps> = (props: any) => {
    const { label, name, rules, radioList } = props;

    return (
        <Form.Item label={label} name={name} rules={rules}>
            <Radio.Group>
                {radioList.map((radio: radioType) => (
                    <Radio value={radio.value} key={radio.value}>
                        {radio.title}
                    </Radio>
                ))}
            </Radio.Group>
        </Form.Item>
    );
};

export default View;
