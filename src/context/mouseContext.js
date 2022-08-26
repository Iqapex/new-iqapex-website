import { useState } from "react";
import { createContext } from "react";

export const mouseContext = createContext()

const MouseContextProvider = (props) => {
    const [mouseEnter, setMouseEnter] = useState(null)
    const [className, setClassName] = useState('')

    const mouseEnterHandler = () => {
        setMouseEnter(true)
        setClassName('no_cursor')
    }
    
    const mouseLeaveHandler = () => {
        setMouseEnter(false)
        setClassName('')
    }

    return(
        <mouseContext.Provider value={{mouseEnter, mouseEnterHandler, mouseLeaveHandler, className}}>
            {props.children}
        </mouseContext.Provider>
    )
}

export default MouseContextProvider