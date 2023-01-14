import React from 'react'
import { useDataLayerValue } from './Context/UseContext'
import CardScrollable from './Component/CardScrollable'
import UserProfile from './UserProfile'
const Home = () => {
    let datas=useDataLayerValue()
  return (
    <div style={{width:"100vw",height:"100vh"}}>
        <CardScrollable/>
        <UserProfile/>
    </div>
  )
}

export default Home