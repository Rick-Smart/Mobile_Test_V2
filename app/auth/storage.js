import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

const key = "authToken";

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("error storing the auth token", error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getitemAsync(key);
  } catch (error) {
    console.log("error getting the auth token", error);
  }
};

const removeToken = async () => {
  try {
    await SecureStore.removeitemAsync(key);
  } catch (error) {
    console.log("error removing auth token", error);
  }
};

const getUser = async () => {
  const token = await getToken();
  return token ? jwtDecode(token) : null;
};

export default {
  getUser,
  storeToken,
  removeToken,
};
