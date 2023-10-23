import View from "./View";
import React, { FC, useState } from "react";
import type { UploadFile } from "antd/es/upload/interface";
import type { RcFile, UploadProps } from "antd/es/upload";

//TODO: создать файл хелпер и перенести туда
const getBase64 = (file: RcFile): Promise<string> =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });

type dataFormUploadType = {
    label: string;
    name: string;
    rules: any;
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
        if (!file.url && !file.preview) {
            //TODO: попробуй избавиться от as RcFile
            file.preview = await getBase64(file.originFileObj as RcFile);
        }

        //TODO: попробуй избавиться as string
        setPreviewImage(file.url || (file.preview as string));
        setPreviewOpen(true);
        //TODO: использовать "!" не очень хорошо, лучше написать условие
        setPreviewTitle(file.name || file.url!.substring(file.url!.lastIndexOf("/") + 1));
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
