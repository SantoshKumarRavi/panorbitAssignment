import React from 'react'
import ProfileAdditionalUsers from './Component/ProfileAdditionalUsers'
import { useDataLayerValue } from './Context/UseContext'
import { Box,Stack, Button } from "@mui/material";
import { ListItemAvatar,Avatar} from '@mui/material';

const SignOutCard = () => {
    const {fetchedData,setIsHomeOpen,currentProfile,setCurrentTab,
        setIsChatOpen,setCurrentChat,setIsSignOutOpen}=useDataLayerValue()
        function signOut(){
            setIsHomeOpen(true)
            setCurrentTab("ProfileDetails")
            setIsChatOpen(false)
            setCurrentChat(null)
            setIsSignOutOpen(false)
        }
  return (
    <div style={{position:"absolute",top:"100px",right:"30px",border:"2px solid black"}}>
  <Stack style={{backgroundColor:""}}  direction={'column'} >
  {fetchedData.filter((y,i)=>i===((currentProfile.index))).map((obj)=>{
    const{id,name,email,profilepicture}=obj
        return <React.Fragment key={id}>
                <Box style={{height:"50px",backgroundColor:"#FFFFFF"}} className='d-flex justify-content-center align-items-center'>
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
        <Box style={{backgroundColor:"#FFFFFF"}}  >
             <Button style={{backgroundColor:"red",color:"#FFFFFF"}}onClick={()=>signOut()}>
             Sign out
             </Button>
        </Box>
        

  </Stack>
        

    </div>
  )
}

export default SignOutCard