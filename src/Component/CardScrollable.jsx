import React from 'react'
import { useDataLayerValue } from '../Context/UseContext'
import './CardScroll.css';
import { List,ListItem,ListItemButton,ListItemText,ListItemAvatar,Avatar,
Box
} from '@mui/material';
const CardScrollable = () => {
    const {fetchedData,isHomeOpen,setIsHomeOpen,setCurrentProfile}=useDataLayerValue()
  return (
    <>
{isHomeOpen&&
  <Box   className='h-100 d-flex justify-content-center align-items-center'>
   <List  dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' ,height:"300px",overflow:"auto"}}>
      <ListItemText  primary={`Select an Account`} />
     {fetchedData.map((x,i) => {
       const labelId = `checkbox-list-secondary-label-${x.id}`;
       return (
         <ListItem
           key={x.id}
           disablePadding
           onClick={()=>{
             setCurrentProfile(()=>{
               return{
                 ...x,
                 index:i
               }})
             setIsHomeOpen(false)
           }} 
         >
           <ListItemButton>
             <ListItemAvatar>
               <Avatar
                 alt={`${x.name}id=${x.id}`}
                 src={x.profilepicture}
               />
             </ListItemAvatar>
             <ListItemText id={labelId} primary={`${x.name}`} />
           </ListItemButton>
         </ListItem>
       );
     })}
   </List>
   </Box>
}
 



    </>
  )
}

export default CardScrollable