import * as SecureStore from "expo-secure-store";

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
    return authToken;
  } catch (error) {
    console.log("Get Token Error", error);
  }
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
  removeToken
};
