import { useState } from "react";
import Header from "./Header";
import { NextSeo } from 'next-seo';

export default function FirstPost() {
   const [name,setName] = useState([]);
   const getApiRes=()=>{
      //reqres.in/api/users
         setName(name=>['rff','34rwer','awefasdf'])
   }
   return (
      <>
      <Header/>
         <h1>My First Post</h1>
         <NextSeo
      title="12-jun Usage Example"
      description="A short description goes here."
    />
         <h2 onClick={()=>getApiRes()}>Load Data </h2>
         {
            name.map((obj,index)=>{
               return <h1 key={index}>{obj}</h1>
            })
         }
      </>	  
   )
}