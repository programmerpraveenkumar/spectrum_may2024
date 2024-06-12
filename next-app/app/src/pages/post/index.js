import Header from "../Header";
import styles from '../../css/style.css';
import { NextSeo } from 'next-seo';
export default function FirstPost(props) {
   return (
      <>
              <Header/>
              <NextSeo
      title="Post Page"
      description="A short description goes here."
    />
            {props.users.map((userObj)=>{
               return(<>
                   <h1>{userObj.first_name}</h1>
                   <img src={userObj.avatar}/>
               </>)
            })}
         <h1 className="red">My First route</h1>
         <img className="hill" src="hill.jpg"/>
      </>	  
   )
}

export async function getServerSideProps() {
   const res = await fetch('https://reqres.in/api/users?page=1')
   const json = await res.json()
   return {
      props: { users: json.data}
   }
}