import React from "react";
import Header from "./Header";

class Home2 extends React.Component{

    //state variable declaration
    state ={
        "name":"test name",
        "mobile":"65464648",
        "personDetails":[],
        "nameList":[
            {"name":"t3st",age:45,"mobile":"12346464"},
            {"name":"swefwefwe",age:445,"mobile":"90946464"},
            {"name":"swewefrfwe",age:43455,"mobile":"464t33464"}
        ]
    }

    getApi=async ()=>{
        let serverData = await fetch("https://reqres.in/api/users?page=2",{method:"GET"});
        let json = await serverData.json();
        this.setState({"personDetails":json['data']});
        console.log(json);
    }
    
    render(){
        return(
            <>
              <Header/>
                <h1>This is Home2 ...</h1>
                {this.state.name}
                {this.state.mobile}
                <button onClick={()=>this.getApi()}>Call Api</button>    
                {
                    this.state.nameList.map((obj)=>{
                            return <h2>{obj.name}--{obj.age} --{obj.mobile}</h2>
                    })
                }
                 {
                    this.state.personDetails.map((obj)=>{
                        return <h2>{obj.first_name}--{obj.email} --{obj.last_name}</h2>                    })
                }
            </>

        )
    }
}
export default  Home2;