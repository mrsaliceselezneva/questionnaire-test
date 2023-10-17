import React, { FC } from "react";
import { Button, Checkbox, Form, Input, Radio } from "antd";

interface TypeProps {
    title: string;
}

const View: FC<TypeProps> = (props: any) => {
    const { title } = props;

    return (
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type='primary' htmlType='submit'>
                {title}
            </Button>
        </Form.Item>
    );
};

export default View;
