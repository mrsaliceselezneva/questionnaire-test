import React from "react";
import View from "./View";

const Connector = () => {
    const data = {
        name: "Полувесов Артём Алексеевич",
        phone: "+7 (927) 807-07-27",
        linkTg: "https://t.me/Alice_Selezneva",
        linkVk: "https://vk.com/ironart00",
    };

    return <View {...data} />;
};

export default Connector;
