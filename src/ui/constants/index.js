import React, {useReducer} from "react";
import {Color} from "./siteColors";
import {VariableProvider} from "../context";


const Constants = {
    Color,
};


export const ConstantProvider = ({children}) => {

    const initialState = {isSidBarOpen: false, isProfileOpen: false};


    function reducer(state, action) {
        if (action.type === 'toggleSideBar' && window.innerWidth <= 900) {
            return {...state, isSidBarOpen: !state.isSidBarOpen};
        }
        if (action.type === 'toggleProfile' && window.innerWidth <= 900) {
            return {...state, isProfileOpen: !state.isProfileOpen};
        } else {
            return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);


    const AllConstants = {
        ...Constants,
        store: state,
        dispatch: dispatch,
    };


    return (
        <VariableProvider value={AllConstants}>
            {children}
        </VariableProvider>
    )
};

export default {
    ...Constants,
}