import React, { FC } from "react";
import { Button } from "antd";
import { StyledForm } from "./styles";

interface TypeProps {
    title: string;
}

const View: FC<TypeProps> = (props) => {
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
