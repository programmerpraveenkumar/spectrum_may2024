//reference
import { useRef, useState } from "react";
import Header from "./Header";

function Contact(){
    //it will b update in the ui when it s updated..
    const [name,setName] = useState('this s react app');
    const [email,setEmail] = useState('test@gmail.com');
    const [nameList,setNameList] = useState(['testerr','test','test2','test3']);
    const [personDetailList,setPersonDetailList] = 
    useState([
        {"name":"sfwe",age:45,"mobile":"12346464"},
        {"name":"swefwefwe",age:445,"mobile":"90946464"},
        {"name":"swewefrfwe",age:43455,"mobile":"464t33464"}
    ]);

    let nameRef = useRef();
    let emailRef = useRef();
    let msgRef = useRef();
    const handleClick=()=>{
        //read the value from the input box
        let firstname = nameRef.current.value;
        let email = emailRef.current.value;
        let msg = msgRef.current.value;
        setName(firstname);
        setEmail(email);
        // if(firstname == ''){
        //     alert("first name is empty");
        // }else if(email == ''){
        //     alert("Email is empty");
        // }else if(msg == ''){
        //     alert("Message is empty");
        // }else{
        //     alert("everything is fine");
        // }

        console.log(firstname,email,msg);
       // alert("button clicked");
    }
    return(
        <>
            <Header/>
            {/* binding the state variable */}
          <h1>{name}</h1>
          <h1>{email}</h1>
          {
            nameList.map((obj)=>{
                    return <h2>{obj}</h2>
            })
          }
          {
            personDetailList.map((obj)=>{
                    return <h2>{obj.name}--{obj.age} --{obj.mobile}</h2>
            })
          }
            <section className="form">
            <h1>Contact Form</h1>
            <div>
                <input type="text" ref={nameRef} placeholder="First Name"/>
            </div>
            <div>
                <input type="text" ref={emailRef} placeholder="Email"/>
            </div>
            <div>
                <textarea ref={msgRef} placeholder="Enter Message"/>
            </div>
            <div>
                <button onClick={()=>handleClick()}>Send</button>    
            </div>
            </section>
        </>
    )
}


export default Contact;
