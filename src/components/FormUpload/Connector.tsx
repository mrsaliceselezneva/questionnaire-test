import React, { FC, useState } from "react";
import { getBase64 } from "api/helpers";
import type { UploadFile } from "antd/es/upload/interface";
import type { UploadProps } from "antd/es/upload";
import { ruleType } from "api/types";
import View from "./View";

type dataFormUploadType = {
    label: string;
    name: string;
    rules: ruleType[];
};

interface TypeProps {
    dataUpload: dataFormUploadType;
}

const Connector: FC<TypeProps> = (props) => {
    const { dataUpload } = props;

    const [previewOpen, setPreviewOpen] = useState(false);
    const [previewImage, setPreviewImage] = useState("");
    const [previewTitle, setPreviewTitle] = useState("");
    const [fileList, setFileList] = useState<UploadFile[]>([]);

    const handleCancel = () => setPreviewOpen(false);

    const handlePreview = async (file: UploadFile) => {
        if (file.originFileObj && !file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setPreviewImage(file.url || String(file.preview));
        setPreviewOpen(true);
        if (file.url)
            setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf("/") + 1));
    };

    const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) =>
        setFileList(newFileList);

    return (
        <View
            {...dataUpload}
            fileList={fileList}
            handlePreview={handlePreview}
            handleChange={handleChange}
            previewOpen={previewOpen}
            previewTitle={previewTitle}
            handleCancel={handleCancel}
            previewImage={previewImage}
        />
    );
};

export default Connector;
