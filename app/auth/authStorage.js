import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";
const key = "authToken";

const storeToken = async authToken => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("Store Token Error", error);
  }
};

const getToken = async () => {
  try {
    const authToken = await SecureStore.getItemAsync(key);
    console.log(authToken);
    return authToken;
  } catch (error) {
    console.log("Get Token Error", error);
  }
};

const getUser = async () => {
  const authToken = await getToken();
  if (authToken) return jwtDecode(authToken);
  return null;
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Remove Token Error", error);
  }
};

export default {
  storeToken,
  getToken,
  getUser,
  removeToken
};
