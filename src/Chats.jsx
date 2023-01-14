import React from 'react'
import { useDataLayerValue } from './Context/UseContext'
import { Paper,List,ListItem,ListItemButton,ListItemText,ListItemAvatar,Checkbox,Avatar} from '@mui/material';

const Chats = () => {
const {isChatOpen,setIsChatOpen,fetchedData,isHomeOpen,setIsHomeOpen,currentProfile,setCurrentProfile,
  currentChat,setCurrentChat
}=useDataLayerValue()

  return (
    <div  style={{position:"absolute",bottom:"10px",right:"30px",width:"250px",color:"#FFFFFF"}}>
    <div className='d-flex flex-column justify-content-center align-items-center'>
    <div onClick={()=>{
          setIsChatOpen((pre)=>!pre)
          if(isChatOpen){
            setCurrentChat(null)
          }
    }
      } 
      className='w-100 d-flex flex-column justify-content-center align-items-center'
      style={{height:"40px",backgroundColor:"blue"}}
      > Chats</div>
    <div style={{display:isChatOpen?"block":"none",width:"250px",backgroundColor:"#FFFFFF",color:"black"}}
    >
      <div className='d-flex flex-column justify-content-center align-items-start' style={{overflow:"auto",height:"300px"}}>
      {fetchedData.filter((y,i)=>i!==currentProfile.index).map((obj)=>{
        return <div onClick={()=>setCurrentChat(()=>parseInt(obj.id)-1)} key={obj.name}>
           <ListItem>
              <ListItemAvatar>
               <Avatar
                 alt={`${obj.name}id=${obj.id}`}
                 src={obj.profilepicture}
               />
             </ListItemAvatar>
             <ListItemText  primary={`${obj.name}`} />
             </ListItem>
         


          </div>
      })
      }
      </div>
   

    </div>
    </div>
    </div>
  )
}

export default Chats