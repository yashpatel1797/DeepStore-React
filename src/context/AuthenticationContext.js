import { createContext, useContext, useReducer } from "react";
import { authReducer } from "reducer/authReducer";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const { firstName } = JSON.parse(localStorage.getItem('userData')) || { firstName: "" }
    let tokenDetails = localStorage.getItem("token") || { token: '' }
    const [{ isLogin, token, userDetails }, authDispatch] = useReducer(authReducer, {
        isLogin: (tokenDetails !== ''),
        token: tokenDetails,
        userDetails: firstName
    })

    return (<AuthContext.Provider value={{ isLogin, token, userDetails, authDispatch }}>
        {children}
    </AuthContext.Provider>)
}

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth }