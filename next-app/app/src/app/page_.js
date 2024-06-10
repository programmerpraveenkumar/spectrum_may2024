import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
// import { useState } from "react";
async function loadImg(){
  const imgGet= await fetch('https://reqres.in/api/users',{method:"GET"})
  const imgs= await imgGet.json();
  return imgs;
}
export default async function Home2() {
  return (
    <><h1>this is hom2</h1></>
  )
}
export async function Home() {
  let firstname = 'adfwd';
  let email = "test@gmail.com";
  let name = ['test','t3wts2','test4','sfger'];
  let persondetailsList = [
    {"name":"sdf1","mobile":54446},
    {"name":"sdf2","mobile":1544},
    {"name":"sdf3","mobile":344},
    {"name":"sdf4","mobile":444}
  ];
  const imgs = await loadImg();
  console.log("response ",imgs);
  return (
   <>
     <h1>this is next app {firstname}</h1>
     <h2>my email is {email}</h2>
     {
      name.map((obj)=>{
          return <h1>{obj}</h1>
      })
     }
      {
      persondetailsList.map((obj)=>{
          return <h1>{obj.name}-{obj.mobile}</h1>
      })
     }
    
    </>
  );
}
