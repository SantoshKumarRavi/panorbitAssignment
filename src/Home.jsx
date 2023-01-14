import React from 'react'
import CardScrollable from './Component/CardScrollable'
import UserProfile from './UserProfile'
const Home = () => {
  return (
    <div style={{width:"100vw",height:"100vh"}}>
        <CardScrollable/>
        <UserProfile/>
    </div>
  )
}

export default Home