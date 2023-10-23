import axios from "axios";

const instance = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
});

const sendRequest = (url: string, method: string, data?: any) =>
    instance.request({ url, method, data }).then((responce) => responce.data);

const onFinishFailed = (errorInfo: any) => {
    console.log(errorInfo);
    console.log("Failed:", errorInfo);
};

export { sendRequest, onFinishFailed };
