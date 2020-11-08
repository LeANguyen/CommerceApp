import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.5.102:9000/api"
});

export default apiClient;
