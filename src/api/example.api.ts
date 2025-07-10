import axiosInstance from "@/api/axiosInstance";

export const getExamples = () => {
  return axiosInstance.get("/examples");
};
