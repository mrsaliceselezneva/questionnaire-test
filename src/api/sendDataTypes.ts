import React from "react";

type fileType = {
    uid: string;
    lastModified: number;
    lastModifiedDate: string;
    name: string;
    size: number;
    type: string;
    percen: number;
    originFileObj: {
        uid: string;
    };
    thumbUrl: string;
};

type onFinishPersonalType = {
    email: string;
    surname: string;
    name: string;
    patronymic: string;
    gender: string;
};

type onFinishPhotoType = {
    email: string;
    upload: {
        file: {
            uid: string;
        };
        fileList: fileType[];
    };
};

type onFinishSkillsType = { email: string; select: string[] };

type onFinishAboutType = { email: string; textArea: string };

type sendDataType =
    | onFinishPersonalType
    | onFinishPhotoType
    | onFinishSkillsType
    | onFinishAboutType;

export type { sendDataType };
