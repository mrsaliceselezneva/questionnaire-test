import React, { FC } from "react";
import { Upload, Form, Modal } from "antd";
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
                    action='http://localhost:3000/img'
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
