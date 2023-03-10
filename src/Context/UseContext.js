import React, { createContext, useContext, useEffect, useState } from "react";

export const DataLayerContext = createContext();

export const DataLayer = ({ children }) =>{
const[data,setData]=useState([])
const[isHomeOpen,setIsHomeOpen]=useState(true)
const[currentProfile,setCurrentProfile]=useState({})
const[isChatOpen,setIsChatOpen]=useState(false)
const[currentTab,setCurrentTab]=useState("ProfileDetails")
const[currentChat,setCurrentChat]=useState(null)
const[isSignOutOpen,setIsSignOutOpen]=useState(false)

useEffect(()=>{
fetch("https://panorbit.in/api/users.json").then((res)=>{
return res.json()
}).then((x)=>{
    setData(()=>x.users)
})
},[])

let overallValues={
    fetchedData:data,
    isHomeOpen:isHomeOpen,
    setIsHomeOpen:setIsHomeOpen,
    currentProfile:currentProfile,
    setCurrentProfile:setCurrentProfile,
    isChatOpen:isChatOpen,
    setIsChatOpen:setIsChatOpen,
    currentTab:currentTab,
    setCurrentTab:setCurrentTab,
    currentChat:currentChat,
    setCurrentChat:setCurrentChat,
    isSignOutOpen:isSignOutOpen,
    setIsSignOutOpen:setIsSignOutOpen

}
return(
    <DataLayerContext.Provider value={overallValues}>
    {children}
  </DataLayerContext.Provider>
) 
};

export const useDataLayerValue = () => useContext(DataLayerContext);