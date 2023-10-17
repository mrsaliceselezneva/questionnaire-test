import React, { FC } from "react";
import { StyledDiv, StyledTitle, StyledInput } from "./styles";
import ImgCrop from "antd-img-crop";
import { Upload, Form, Modal, Input } from "antd";
import type { UploadFile } from "antd/es/upload/interface";
import type { RcFile, UploadProps } from "antd/es/upload";
import FormButton from "components/FormButton";
import { PlusOutlined } from "@ant-design/icons";

interface TypeProps {
    label: string;
    name: string;
    rules: any;
    fileList: any;
    handlePreview: any;
    handleChange: any;
    previewOpen: any;
    previewTitle: any;
    handleCancel: any;
    previewImage: any;
}

const View: FC<TypeProps> = (props: any) => {
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

    type FieldType = {
        surname?: string;
        name?: string;
        patronymic?: string;
    };

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Загрузить</div>
        </div>
    );

    return (
        <>
            <Form.Item name={name} label={label} rules={rules}>
                <Upload
                    action='https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188'
                    listType='picture-card'
                    fileList={fileList}
                    onPreview={handlePreview}
                    onChange={handleChange}
                    beforeUpload={(file) => {
                        return false;
                    }}
                >
                    {fileList.length > 0 ? null : uploadButton}
                </Upload>
            </Form.Item>
            <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
                <img alt='фото профиля' style={{ width: "100%" }} src={previewImage} />
            </Modal>
        </>
    );
};

export default View;
