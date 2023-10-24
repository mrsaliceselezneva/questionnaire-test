import React, { FC } from "react";
import { Upload, Form, Modal } from "antd";
import type { UploadFile } from "antd/es/upload/interface";
import type { UploadProps } from "antd/es/upload";
import { PlusOutlined } from "@ant-design/icons";
import { StyledUpload, StyledImg } from "./styles";

type ruleType = { required: boolean; message: string };
interface TypeProps {
    label: string;
    name: string;
    rules: ruleType[];
    fileList: UploadFile[];
    handlePreview: (file: UploadFile) => void;
    handleChange: UploadProps["onChange"];
    previewOpen: boolean;
    previewTitle: string;
    handleCancel: () => void;
    previewImage: string;
}

const View: FC<TypeProps> = (props) => {
    const {
        label,
        name,
        rules,
        fileList,
        handlePreview,
        handleChange,
        previewOpen,
        previewTitle,
        handleCancel,
        previewImage,
    } = props;

    const uploadButton = (
        <div>
            <PlusOutlined />
            <StyledUpload>Загрузить</StyledUpload>
        </div>
    );

    return (
        <>
            <Form.Item name={name} label={label} rules={rules}>
                <Upload
                    listType='picture-card'
                    fileList={fileList}
                    onPreview={handlePreview}
                    onChange={handleChange}
                    beforeUpload={(file) => {
                        return false;
                    }}
                >
                    {!(fileList.length > 0) && uploadButton}
                </Upload>
            </Form.Item>
            <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                <StyledImg alt='фото профиля' src={previewImage} />
            </Modal>
        </>
    );
};

export default View;
