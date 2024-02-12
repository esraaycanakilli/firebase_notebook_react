import React, { useEffect, useState } from 'react'
import Main from '../components/Main'
import { auth } from '../firebase/config'
import { onAuthStateChanged } from 'firebase/auth'


const FeedPage = () => {
  const [user,setUser]=useState()

  useEffect(()=>{
    onAuthStateChanged(auth,(res)=>{
      setUser(res)
    })
  },[])
  return (
 <Main user={user}/>
  )
}

export default FeedPage