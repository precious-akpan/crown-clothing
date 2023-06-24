import {
  createUserDocumentFromAuth,
  onAuthStateChangeListener,
} from "../utils/firebase.utils";

import {createContext, useEffect, useReducer} from "react";
import {createAction} from "../utils/reducer/reducer.utils";

const INITIAL_STATE = {currentUser: null}
const userReducer = (state, action) => {
    const {type, payload} = action;
    switch (type) {
        case 'ADD_USER':
            return {...state, currentUser: payload}
        default:
            throw new Error(`Unhandled type: ${type} error`)
    }
}
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({children}) => {
    const [{currentUser}, dispatch] = useReducer(userReducer, INITIAL_STATE)
    console.log(currentUser);
    const setCurrentUser = (user) => dispatch(createAction('ADD_USER', user))
    const value = {currentUser, setCurrentUser};
    useEffect(() => {
        return onAuthStateChangeListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user)
            }
            setCurrentUser(user)
        });
    }, []);
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
