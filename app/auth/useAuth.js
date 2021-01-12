import { useContext } from "react";
import jwtDecode from "jwt-decode";
import AuthContext from "./context";
import authStorage from "./authStorage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const login = authToken => {
    // when user login succesfully => a jwt is returned
    // => then decode the jwt to get the user's info
    const user = jwtDecode(authToken);

    // store the user's info into the context for global usage
    setUser(user);

    // store the jwt to the storage
    // the jwt is for calling protected api
    authStorage.storeToken(authToken);
  };

  const logout = () => {
    // remove the user's info from the context
    setUser(null);

    // remove the jwt from the storage
    authStorage.removeToken();
  };

  return { user, login, logout };
};
