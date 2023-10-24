import React, { FC } from "react";
import { Select, Form, SelectProps } from "antd";

interface TypeProps {
    label: string;
    name: string;
    options: SelectProps["options"];
}

const View: FC<TypeProps> = (props: any) => {
    const { label, name, options } = props;

    return (
        <>
            <Form.Item label={label} name={name}>
                <Select
                    mode='multiple'
                    allowClear
                    style={{ width: "100%" }}
                    placeholder={label}
                    options={options}
                />
            </Form.Item>
        </>
    );
};

export default View;
