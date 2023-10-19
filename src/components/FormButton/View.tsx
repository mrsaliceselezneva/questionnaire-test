import React, { FC } from "react";
import { Form } from "antd";
import { StyledForm } from "./styles";
import { Button } from "antd";

interface TypeProps {
    title: string;
}

const View: FC<TypeProps> = (props: any) => {
    const { title } = props;

    return (
        <StyledForm wrapperCol={{ offset: 8, span: 16 }}>
            <Button type='primary' htmlType='submit'>
                {title}
            </Button>
        </StyledForm>
    );
};

export default View;
