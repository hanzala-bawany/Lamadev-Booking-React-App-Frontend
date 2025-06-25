import { createContext, useReducer } from "react";

const initial_state = {
    user: null,
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
        case "login_error":
            return {
                user: null,
                loading: false,
                error: action.payLoad
            };
        default:
            return initial_state;

    }
}

export const authContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(authReducer, initial_state)

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