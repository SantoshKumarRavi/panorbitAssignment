import React from 'react'
import { useDataLayerValue } from './Context/UseContext'
import { Paper,List,ListItem,ListItemButton,ListItemText,ListItemAvatar,Checkbox,Avatar} from '@mui/material';

const ChatHistory = () => {
const {isChatOpen,setIsChatOpen,fetchedData,isHomeOpen,setIsHomeOpen,currentProfile,setCurrentProfile,
    currentChat,setCurrentChat
}=useDataLayerValue()
  return (
    <>
    {currentChat!==null&&
                <div style={{position:"absolute",bottom:"10px",right:"350px",width:"200px"}} >
                <div  style={{width:"100%"}} className='d-flex flex-column justify-content-center align-items-center'>
                <div 
                // style={{display:isChatOpen?"block":"none",width:"150px"}}
                >
                {fetchedData.filter((y,i)=>i===currentChat).map((obj)=>{
                    return <div key={obj.id} style={{width:"100%"}}>
                            <ListItem
                                style={{backgroundColor:"blue"}}
                            >
                            <ListItemAvatar>
                            <Avatar
                                alt={`${obj.name}id=${obj.id}`}
                                src={obj.profilepicture}
                            />
                            </ListItemAvatar>
                            <ListItemText  primary={`${obj.name}`} />
                            </ListItem>
                        <div style={{backgroundColor:"#FFFFFF",width:"150px"}} className='d-flex flex-column align-items-end'>
                        <div style={{backgroundColor:"ActiveBorder",marginBottom:"5px"}}>chat messages </div>
                        <div style={{backgroundColor:"ActiveBorder",marginBottom:"5px"}}>chat messages </div>
                        <div style={{backgroundColor:"ActiveBorder",marginBottom:"5px"}}>chat messages </div>
                        <div style={{backgroundColor:"ActiveBorder",marginBottom:"5px"}}>chat messages </div>
                        </div>
                        <div className='w-100 h-100' style={{border:"2px solid black"}}>
                            &nbsp;
                             </div>

                    </div>
                })
                }
                </div>
                </div>
                </div>
    }
    </>
   


    )
}

export default ChatHistory