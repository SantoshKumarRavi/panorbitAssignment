import React from 'react'
import { useDataLayerValue } from '../Context/UseContext'
import { ListItemButton,ListItemText,ListItemAvatar,Avatar} from '@mui/material';

const ProfileAdditionalUsers = ({increase,currentIndex}) => {
    const {fetchedData,setCurrentProfile}=useDataLayerValue()

    return (
    <div className='w-100' onClick={()=>
        setCurrentProfile(()=>{
          return{
            ...fetchedData[((currentIndex+increase)%fetchedData.length)],
            index:((currentIndex+increase)%fetchedData.length)
          }})
      }
      style={{backgroundColor:"#FFFFFF"}}

      >
      {fetchedData.filter((y,i)=>i===((currentIndex+increase)%fetchedData.length)).map((obj)=>{
          const{id,name,profilepicture}=obj
        return(
            <ListItemButton style={{height:"50px",width:"100%"}}>
                <ListItemAvatar key={id}  style={{width:"5%"}}>
                <Avatar
                  alt={`${name}id=${id}`}
                  src={profilepicture}
                  className="w-80"
                />
              </ListItemAvatar>
              <ListItemText  primary={`${name}`} />
            </ListItemButton>

        )
      })
      }
      </div>

  )
}

export default ProfileAdditionalUsers