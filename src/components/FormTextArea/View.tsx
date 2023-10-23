import React, { FC } from "react";
import { Form, Input } from "antd";

interface TypeProps {
    label: string;
    name: string;
    rows: number;
}

const { TextArea } = Input;

const View: FC<TypeProps> = (props: any) => {
    const { label, name, rows } = props;

    return (
        <>
            <Form.Item label={label} name={name}>
                <TextArea rows={rows} />
            </Form.Item>
        </>
    );
};

export default View;
