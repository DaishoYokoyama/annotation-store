import { http } from "@/apis/client";

export const getDataSample = () => http.get<string>("/sample");
