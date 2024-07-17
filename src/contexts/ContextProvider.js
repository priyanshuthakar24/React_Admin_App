import { createContext, useContext, useState } from "react";


const StateContext = createContext();
const initalState = {
    chat: false,
    cart: false,
    useProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {

    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setisClicked] = useState(initalState);

    const [screenSize, setScreenSize] = useState(undefined)
    const handleClick = (clicked) => {
        setisClicked({ ...initalState, [clicked]: true })
    }
    return <StateContext.Provider value={{ activeMenu, setActiveMenu, isClicked, setisClicked, handleClick, screenSize, setScreenSize }}
    >{children}</StateContext.Provider>
}

export const useStateContext = () => useContext(StateContext);