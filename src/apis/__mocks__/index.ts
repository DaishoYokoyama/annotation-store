import { AxiosRequestConfig, AxiosResponse, AxiosResponseHeaders } from "axios";
import * as apis from "@/apis";

const mockResponse = (data: any): AxiosResponse => ({
  status: 200,
  statusText: "",
  headers: {},
  config: {},
  data,
});

export const getDataSample = jest.fn<ReturnType<typeof apis.getDataSample>, []>(
  () => Promise.resolve(mockResponse(""))
);
