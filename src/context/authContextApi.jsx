import { createContext, useEffect, useReducer } from "react";

const initial_state = {
    user: JSON.parse(localStorage.getItem("loginUser")) || null,
    loading: false,
    error: null
}

export const authContext = createContext(initial_state)

const authReducer = (state, action) => {
    switch (action.type) {

        case "login_start":
            return {
                user: null,
                loading: true,
                error: null
            };
        case "login_success":
            return {
                user: action.payLoad,
                loading: false,
                error: null
            };
        case "login_failure":
            return {
                user: null,
                loading: false,
                error: action.payLoad
            };
        case "logout":
            return {
                user: null,
                loading: false,
                error: null
            };
        default:
            return state;

    }
}


export const AuthContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, initial_state)
    console.log(state, "state in auth context api");
    useEffect(() => {
        if (state.user) {
            localStorage.setItem("loginUser", JSON.stringify(state.user))
        } else {
            localStorage.removeItem("loginUser")
        }
    }, [state.user])


    return (
        <authContext.Provider value={{
            user: state.user,
            loading: state.loading,
            error: state.error,
            dispatch
        }}>
            {children}
        </authContext.Provider>
    )

}