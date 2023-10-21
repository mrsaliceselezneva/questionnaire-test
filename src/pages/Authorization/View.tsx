import React, { FC } from "react";
import Wrapper from "./styles";
import { Button } from "antd";
import { BiLogoGoogle } from "react-icons/bi";
interface TypeProps {
    login: any;
}

const View: FC<TypeProps> = (props) => {
    const { login } = props;

    return (
        <Wrapper>
            <Button type='primary' onClick={() => login()}>
                войти c <BiLogoGoogle />
            </Button>
        </Wrapper>
    );
};

export default View;
