import React, { FC } from "react";
import { StyledLink, StyledButton } from "./styles";
import { Divider, Space, Typography, Button } from "antd";
import ButtonLink from "components/ButtonLink";

const View: FC = () => {
    const data = {
        to: "/",
        text: "Главная",
        type: "link",
    };

    return (
        <Space split={<Divider type='vertical' />}>
            <ButtonLink data={data} />
        </Space>
    );
};

export default View;
