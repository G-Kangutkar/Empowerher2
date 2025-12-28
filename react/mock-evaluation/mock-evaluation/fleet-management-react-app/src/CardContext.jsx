import { createContext, useCallback, useContext, useState } from "react";

const CardContext = createContext();
export const useCard = useContext(CardContext);
const CardProvider=({children})=>{
    const[card,setCard]=useState([]);

    const updateCard= useCallback((id,driverName)=>{
        setCard(prev=> prev.map(prevs=> prevs.id === id? {...prevs,driverName:driverName}:prevs))
    },[]);

    const deleteCard = useCallback(()=>{
        setCard(prev=>prev.filter(prevs=>prevs.id === id))

    },[])

    return(
        <CardContext.Provider value={{updateCard, deleteCard}} >
            {children}

        </CardContext.Provider>
    )


}
export default CardProvider;