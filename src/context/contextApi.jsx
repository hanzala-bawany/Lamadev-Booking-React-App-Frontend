import { createContext, useReducer } from "react";

const initial_state = {
    city: undefined,
    date: JSON.parse(localStorage.getItem("searchDate")) || [] ,
    destination: JSON.parse(localStorage.getItem("searchOption")) || {
        adult: undefined,
        children: undefined,
        room: undefined 
    } 
}

export  const searchContext = createContext(initial_state)

const searchReducer = (state, action) => {
    switch (action.type) {

        case "new_search":
            return action.payLoad;
        case "reset_search":
            return initial_state;
        default:    
            return state;

    }
}

export const SearchContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(searchReducer, initial_state)

    return (
        <searchContext.Provider value={{
            city: state.city,
            date: state.date,
            destination: state.destination,
            option: state.option,
            dispatch
        }}>
            {children}
        </searchContext.Provider>
    )

}