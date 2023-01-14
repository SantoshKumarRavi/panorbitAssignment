import React from 'react'
import { useDataLayerValue } from './Context/UseContext'
import { Box, MenuItem, Multiselect,Grid, Stack, Typography } from "@mui/material";
import { Paper,List,ListItem,ListItemButton,ListItemText,ListItemAvatar,Checkbox,Avatar} from '@mui/material';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const ProfileDetails = () => {
  const {fetchedData,isHomeOpen,setIsHomeOpen,currentProfile,setCurrentProfile}=useDataLayerValue()
  // const defaultProps = {
  //   center: {
  //     lat: 10.99835602,
  //     lng: 77.01502627
  //   },
  //   zoom: 11
  // };
  return (
  <Box style={{backgroundColor:'#FFFFFF',width:"100%",height:"89%"}}>
  <Grid style={{height:"100%"}} container >
  <Grid  style={{backgroundColor:"#FFFFFF",height:"100%"}} className='d-flex justify-content-center' item xs={12} md={4} lg={4} sm={12}>
  <Stack style={{width:"100%"}}  direction={'column'} >
  {fetchedData.filter((y,i)=>i===((currentProfile.index))).map((obj)=>{
    const{name,username,email,phone,website,company:{name:companyName,catchPhrase,bs}}=obj
        return <React.Fragment key={obj.id}>
                <Box style={{height:"150px",backgroundColor:"#FFFFFF"}} className='d-flex justify-content-center align-items-center'>
                 <ListItemAvatar  className="h-100">
                    <Avatar
                      alt={`${obj.name}id=${obj.id}`}
                      src={obj.profilepicture}
                      className="w-100 h-100"
                    />
                  </ListItemAvatar>
                </Box>
                <Box >{name}</Box>
                <Box className='d-flex justify-content-start' ><Typography component={"label"} style={{width:"40%"}} align="right">Username</Typography><Typography component={"label"} align="right">:</Typography><Typography align="left"  style={{width:"60%"}} component={"label"}>{username}</Typography> </Box>
                <Box className='d-flex justify-content-start' ><Typography component={"label"} style={{width:"40%"}} align="right">Email</Typography><Typography component={"label"} align="right">:</Typography><Typography align="left"  style={{width:"60%"}} component={"label"}>{email}</Typography> </Box>
                <Box className='d-flex justify-content-start' ><Typography component={"label"} style={{width:"40%"}} align="right">Phone</Typography><Typography component={"label"} align="right">:</Typography><Typography align="left"  style={{width:"60%"}} component={"label"}>{phone}</Typography> </Box>
                <Box className='d-flex justify-content-start' ><Typography component={"label"} style={{width:"40%"}} align="right">Website </Typography><Typography component={"label"} align="right">:</Typography><Typography align="left"  style={{width:"60%"}} component={"label"}>{website }</Typography> </Box>
                company
                <Box className='d-flex justify-content-start' ><Typography component={"label"} style={{width:"40%"}} align="right">Name </Typography><Typography component={"label"} align="right">:</Typography><Typography align="left"  style={{width:"60%"}} component={"label"}>{companyName }</Typography> </Box>
                <Box className='d-flex justify-content-start'><Typography   component={"label"} style={{width:"40%"}} align="right">catchPhrase </Typography><Typography component={"label"} align="right">:</Typography><Typography align="left"  style={{width:"60%"}} component={"label"}>{catchPhrase }</Typography> </Box>
                <Box className='d-flex justify-content-start'><Typography component={"label"} style={{width:"40%"}} align="right">bs</Typography><Typography component={"label"} align="right">:</Typography><Typography align="left"  style={{width:"60%"}} component={"label"}>{bs}</Typography> </Box>
        </React.Fragment >
      })
      }
  </Stack>

  </Grid>
  <Grid style={{height:"100%"}}  item xs={12} md={8} lg={8} sm={12}>
  <Stack direction={'column'} className="align-items-start ps-3 w-100">
  {fetchedData.filter((y,i)=>i===((currentProfile.index))).map((obj)=>{
const{address:{street,suite,city,zipcode,geo:{lat,lng}}}=obj
    return <React.Fragment key={obj.id}>
            <Typography className='ps-3'>Address</Typography>
            <Box className='w-100 d-flex justify-content-start'><Typography component={"label"} style={{width:"15%"}} align="right">street</Typography><Typography component={"label"} align="right">:</Typography><Typography align="left"  style={{width:"60%"}} component={"label"}>{street}</Typography> </Box>
            <Box className='w-100  d-flex justify-content-start'><Typography component={"label"} style={{width:"15%"}} align="right">suite</Typography><Typography component={"label"} align="right">:</Typography><Typography align="left"  style={{width:"60%"}} component={"label"}>{suite}</Typography> </Box>
            <Box className='w-100  d-flex justify-content-start'><Typography component={"label"} style={{width:"15%"}} align="right">city</Typography><Typography component={"label"} align="right">:</Typography><Typography align="left"  style={{width:"60%"}} component={"label"}>{city}</Typography> </Box>
            <Box className='w-100  d-flex justify-content-start'><Typography component={"label"} style={{width:"15%"}} align="right">zipcode</Typography><Typography component={"label"} align="right">:</Typography><Typography align="left"  style={{width:"60%"}} component={"label"}>{zipcode}</Typography> </Box>
            <Box className='mx-4'  style={{backgroundColor:"blue",height:"250px",width:"90%"}}>
              <img  className='w-100 h-100' src="https://www.thestatesman.com/wp-content/uploads/2020/04/googl_ED.jpg"/>
            </Box>
            <Stack direction={'row'} className="w-100 pe-5 justify-content-end align-items-center">
            <Box >Lat : {lat }&nbsp;&nbsp; </Box>
            <Box >Lon :{lng}</Box>
            </Stack>
          
             
        
    </React.Fragment >
  })
  }


  </Stack>
  </Grid>
</Grid>

{/* 
<div style={{ height: '100vh', width: '100%',position:"absolute" }}>
                <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
          >
    <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>
    </div> */}
    </Box>
  )
}

export default ProfileDetails