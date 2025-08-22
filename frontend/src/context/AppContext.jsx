import { createContext } from "react";
import {doctors} from "../assets/assets";
import { assets } from "../assets/assets";

export const AppContext = createContext()



const AppContextProvider = () => {


    const value = {
        doctors

    }
    return (
        <AppContext.Provider>
            {props.children}
        </AppContext.Provider>
    )


}

