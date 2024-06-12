export default(req,res)=>{
    console.log(req['query']);
    let {name,mobile} = req['query'];
    res.end(JSON.stringify({"message":"this is for admin..!!!"+name+" "+mobile}))
}