import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import { useDataLayerValue } from "./Context/UseContext";
import { Box, MenuItem, Multiselect,Grid } from "@mui/material";
const Tabs=["ProfileDetails","Post","Gallery","Todo"]

const useStyles = makeStyles((theme) => ({
  AppBar: {width:"70%",
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center"
},
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginBottom:'20px',
    "&:hover": {cursor: "pointer" }
  }
}));
const SideBar = () => {
    const classes = useStyles();
    const theme = useTheme();
    const {fetchedData,isHomeOpen,setIsHomeOpen,currentProfile,setCurrentProfile,currentTab,setCurrentTab,
        setIsChatOpen,setCurrentChat}=useDataLayerValue()
    return (
        <Box style={{border:"2px solid black"}} className={classes?.AppBar}>
             <Box  className="d-flex flex-column">
             {Tabs.map((currTab,i)=><div key={i}  style={{marginTop:i==0?"20px":""}} className={classes.link} onClick={()=>setCurrentTab(()=>currTab)}>
                <Typography style={{color:currentTab===currTab?"blue":"black"}}>{currTab}</Typography>
                {(i!==(Tabs.length-1))&&<hr/>}
                </div>)}
             </Box>
            
        </Box>
      );
}

export default SideBar