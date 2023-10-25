import React from "react";

type ruleType = { required: boolean; message: string };

type radioType = { value: string; title: string };

type dataTextType = {
    to: string;
    text: string;
    fontWeight: number;
    fontSize: number;
    lineHeight: number;
    color: string;
    colorHover: string;
    isLink: boolean;
};
type itemType = { title: string; link: string };

type dataButtonType = {
    title: string;
};

type dataCancelType = {
    to: string;
    text: string;
    isDanger: boolean;
};

type dataTextAreaType = {
    label: string;
    name: string;
    rows: number;
};

type colType = {
    span: number;
};

type styleType = {
    width: string;
};

type formParameterType = {
    name: string;
    labelCol?: colType;
    wrapperCol?: colType;
    style?: styleType;
    autoComplete: string;
};

type formParameterFinishType = {
    name: string;
    labelCol?: colType;
    wrapperCol?: colType;
    style?: styleType;
    onFinish: (values: any) => void;
    onFinishFailed: (values: any) => void;
    autoComplete: string;
};

type dataFormInputType = { label: string; name: string; rules: ruleType[] };

type dataRadioType = {
    label: string;
    name: string;
    rules: ruleType[];
    radioList: radioType[];
};

type dataFormUploadType = {
    label: string;
    name: string;
    rules: ruleType[];
};

type dataSelectType = {
    label: string;
    name: string;
};

export type {
    ruleType,
    radioType,
    dataTextType,
    itemType,
    formParameterType,
    dataButtonType,
    dataCancelType,
    dataTextAreaType,
    formParameterFinishType,
    dataFormInputType,
    dataRadioType,
    dataFormUploadType,
    dataSelectType,
};
