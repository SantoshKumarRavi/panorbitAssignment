import React from 'react'
import { useDataLayerValue } from './Context/UseContext'
import Chats from './Chats'
import ProfileAdditionalUsers from './Component/ProfileAdditionalUsers'
import { Box, MenuItem, Multiselect,Grid, Stack } from "@mui/material";
import {Typography} from "@material-ui/core";
import ProfileDetails from './ProfileDetails'
import Post from './Post'
import Gallery from './Gallery'
import Todo from './Todo'
import ChatHistory from './ChatHistory'
import SideBar from './SideBar'
import SignOutCard from './SignOutCard';
import { Paper,List,ListItem,ListItemButton,ListItemText,ListItemAvatar,Checkbox,Avatar} from '@mui/material';

const UserProfile = () => {
    const {fetchedData,isHomeOpen,setIsHomeOpen,currentProfile,setCurrentProfile,currentTab,setCurrentTab,
      setIsChatOpen,setCurrentChat,isSignOutOpen,setIsSignOutOpen}=useDataLayerValue()
   
    return (
    <>
    {!isHomeOpen&&
    <>
<Grid className='h-100' container >
  <Grid  className='d-flex justify-content-center py-4' item xs={2} md={2} lg={2} sm={2}>
        <SideBar/>
  </Grid>
  <Grid   item xs={10} md={10} lg={10} sm={10} className="my-4">
  <Stack  direction="row" className="justify-content-between px-4">
<Box   className='d-flex justify-content-center align-items-center'><Typography>{currentTab}</Typography></Box>
<Box>
    {fetchedData.filter((y,i)=>i===((currentProfile.index))).map((obj)=>{
        return <div onClick={()=>setIsSignOutOpen((pre)=>!pre)}  key={obj.name}>
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
</Box>
</Stack>
      <hr style={{padding:"0px",margin:"0px"}}  />
      {currentTab==="ProfileDetails"&&<ProfileDetails/>}
      {currentTab==="Post"&&<Post/>} 
      {currentTab==="Gallery"&&<Gallery/>}
      {currentTab==="Todo"&&<Todo/>}
      {isSignOutOpen&&<SignOutCard/>}
  </Grid>
</Grid>
  <Chats/>
  <ChatHistory/>
        </>
        }
    </>
  )
}

export default UserProfile