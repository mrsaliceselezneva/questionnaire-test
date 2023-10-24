import React, { FC } from "react";
import { Link, IconVk, IconTg } from "./styles";

interface TypeProps {
    link: string;
    isVk: boolean;
}

const View: FC<TypeProps> = (props) => {
    const { link, isVk } = props;

    const icon = isVk ? <IconVk /> : <IconTg />;

    return <Link href={link}>{icon}</Link>;
};

export default View;
