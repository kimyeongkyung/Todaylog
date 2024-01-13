// import axios, { AxiosError } from "axios";

// import { checkRefreshToken } from "@/utils/checkRefreshToken";

// import { MARKET_BASE_URL } from "./baseUrl";

// export type CustomAxiosError = AxiosError<{ message?: string; error?: string }>;

// export type CustomError = Error | CustomAxiosError;

// const client = axios.create({
//   baseURL: MARKET_BASE_URL,
//   withCredentials: true,
// });
// const serverUrl = "http://localhost:4000";

// export const server = axios.create({
//   baseURL: serverUrl,
//   withCredentials: true,
// });

// client.interceptors.request.use(
//   (config) => {
//     // 요청이 전달되기 전에 작업 수행
//     return config;
//   },
//   (error) => {
//     // 요청 오류가 있는 경우 작업 수행
//     return Promise.reject(error);
//   }
// );

// client.interceptors.response.use(
//   (config) => {
//     // 요청이 전달되기 전에 작업 수행
//     return config;
//   },
//   async (error: AxiosError) => {
//     const redirectUrl = `${window.location.origin}${window.location.search}`;
//     switch (error.response?.status) {
//       case 401: {
//         await checkRefreshToken({ redirectUrl });
//         return Promise.reject(error);
//       }
//       default:
//         return Promise.reject(error);
//     }
//   }
// );

// export default client;
