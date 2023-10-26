import axios from "axios";
import { sendDataType } from "api/sendDataTypes";

const instance = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
});

const sendRequest = (url: string, method: string, data?: sendDataType) =>
    instance.request({ url, method, data }).then((responce) => responce.data);

export { sendRequest };
