import { create } from "apisauce";
import cache from "../utility/cache";

const apiClient = create({
  // 192.168.5.102 - Home
  // 10.247.201.219 - School
  baseURL: "http://192.168.5.102:9000/api"
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;
