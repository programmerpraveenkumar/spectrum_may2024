export default function Authenticated(Component){
    //read the value from localstorage.
    const status = false;
    return()=>{
        if(!status){
            return <h1>Please Login</h1>
        }
        return <Component />;
    }
}