import React, { FC } from "react";
import { Form, Radio } from "antd";
import { ruleType, radioType } from "api/types";
interface TypeProps {
    label?: string;
    name?: string;
    rules?: ruleType[];
    radioList: radioType[];
}

const View: FC<TypeProps> = (props) => {
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
