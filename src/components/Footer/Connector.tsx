import React from "react";
import colors from "styles/colors";
import View from "./View";

const Connector = () => {
    const name = "Полувесов Артём Алексеевич";
    const phone = "+7 (927) 807-07-27";
    const linkTg = "https://t.me/Alice_Selezneva";
    const linkVk = "https://vk.com/ironart00";

    const dataName = {
        text: name,
        fontWeight: 500,
        fontSize: 17,
        lineHeight: 16,
        color: colors.blueColor,
        margin: 5,
        isLink: false,
    };

    const dataPhone = {
        text: phone,
        fontWeight: 600,
        fontSize: 17,
        lineHeight: 16,
        color: colors.blueColor,
        isLink: false,
    };

    const dataTg = {
        link: linkTg,
        isVk: false,
    };

    const dataVk = {
        link: linkVk,
        isVk: true,
    };

    return <View dataName={dataName} dataPhone={dataPhone} dataTg={dataTg} dataVk={dataVk} />;
};

export default Connector;
