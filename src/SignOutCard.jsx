import React from 'react'
import ProfileAdditionalUsers from './Component/ProfileAdditionalUsers'
import { useDataLayerValue } from './Context/UseContext'
import { Box, MenuItem, Multiselect,Grid, Stack, Typography, Button } from "@mui/material";
import { Paper,List,ListItem,ListItemButton,ListItemText,ListItemAvatar,Checkbox,Avatar} from '@mui/material';

const SignOutCard = () => {
    const {fetchedData,isHomeOpen,setIsHomeOpen,currentProfile,setCurrentProfile,currentTab,setCurrentTab,
        setIsChatOpen,setCurrentChat}=useDataLayerValue()
        function signOut(){
            setIsHomeOpen(true)
            setCurrentTab("ProfileDetails")
            setIsChatOpen(false)
            setCurrentChat(null)
        }
  return (
    <div style={{position:"absolute",top:"100px",right:"30px"}}>
  <Stack style={{backgroundColor:"blue"}}  direction={'column'} >
  {fetchedData.filter((y,i)=>i===((currentProfile.index))).map((obj)=>{
    const{id,name,username,email,phone,profilepicture,website,company:{name:companyName,catchPhrase,bs}}=obj
        return <React.Fragment key={id}>
                <Box style={{height:"50px",backgroundColor:"red"}} className='d-flex justify-content-center align-items-center'>
                 <ListItemAvatar  className="h-100">
                    <Avatar
                      alt={`${name}id=${id}`}
                      src={profilepicture}
                      className="w-100 h-100"
                    />
                  </ListItemAvatar>
                </Box>
                <Box>
                {name}
                </Box>
                <Box>
                {email}
                </Box>

                </React.Fragment>
                }
         )}
        <ProfileAdditionalUsers increase={1} currentIndex={currentProfile.index}/>
        <ProfileAdditionalUsers increase={2} currentIndex={currentProfile.index}/>
        <Box  >
             <Button style={{backgroundColor:"red"}}onClick={()=>signOut()}>
             Sign out
             </Button>
        </Box>
        

  </Stack>
        

    </div>
  )
}

export default SignOutCard