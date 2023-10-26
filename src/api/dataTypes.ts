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

type onFinishPersonalType = { surname: string; name: string; patronymic: string; gender: string };

type onFinishPhotoType = {
    upload: {
        file: {
            uid: string;
        };
        fileList: fileType[];
    };
};

type onFinishSkillsType = { select: string[] };

type onFinishAboutType = { textArea: string };

type fourType = onFinishPersonalType | onFinishPhotoType | onFinishSkillsType | onFinishAboutType;

export type { fourType };
