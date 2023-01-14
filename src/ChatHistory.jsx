import React from 'react'
import { useDataLayerValue } from './Context/UseContext'
import { ListItem,ListItemText,ListItemAvatar,Avatar} from '@mui/material';

const ChatHistory = () => {
const {fetchedData,
    currentChat,
}=useDataLayerValue()
  return (
    <>
    {currentChat!==null&&
                <div style={{position:"absolute",bottom:"10px",right:"350px",width:"200px",backgroundColor:"darkseagreen"}} >
                <div  style={{width:"100%"}} className='d-flex flex-column justify-content-center align-items-center'>
                <div 
                >
                {fetchedData.filter((y,i)=>i===currentChat).map((obj)=>{
                    return <div key={obj.id} style={{width:"100%"}}>
                            <ListItem
                                style={{backgroundColor:"blue",color:"#FFFFFF"}}
                            >
                            <ListItemAvatar>
                            <Avatar
                                alt={`${obj.name}id=${obj.id}`}
                                src={obj.profilepicture}
                            />
                            </ListItemAvatar>
                            <ListItemText  primary={`${obj.name}`} />
                            </ListItem>
                        <div style={{width:"150px"}} className='d-flex flex-column align-items-end'>
                        <div style={{backgroundColor:"#FFFFFF",marginBottom:"5px",color:"black"}}>chat messages </div>
                        <div style={{backgroundColor:"#FFFFFF",marginBottom:"5px",color:"black"}}>chat messages </div>
                        <div style={{backgroundColor:"#FFFFFF",marginBottom:"5px",color:"black"}}>chat messages </div>
                        <div style={{backgroundColor:"#FFFFFF",marginBottom:"5px",color:"black"}}>chat messages </div>
                        </div>
                        <div className='w-100 h-100' style={{border:"2px solid black",backgroundColor:"#FFFFFF"}}>
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