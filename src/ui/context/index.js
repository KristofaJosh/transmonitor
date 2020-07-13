import {createContext} from "react";

const ConstantContext = createContext(true);
export const VariableProvider = ConstantContext.Provider;


export default ConstantContext;