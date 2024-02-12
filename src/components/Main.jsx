import React, { useEffect, useState } from "react";
import Form from "../components/Form"
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase/config";




const Main = ({ user }) => {
  const notesCol=collection(db,"notes")
  const [note,setNote]=useState(null)
useEffect(()=>{
onSnapshot(notesCol,(snapshot)=>{
  const tempNote=[]
  snapshot.forEach((doc)=>tempNote.push({id:doc.id,...doc.data()})
  )
  setNote(tempNote)
})
},[])

console.log(note)
  return (
    <>
    <div className="flex justify-between font-bold p-4 border-b-[1px] border-gray-700 text-center">
    <header>
          Not Defteri
        </header>
      <button>Çıkış Yap</button>
        
    </div>
    <Form user={user} />
       
        
      </>
        );
        
};

export default Main;
