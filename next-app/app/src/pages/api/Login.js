export default (req,res)=>{
    let body = req['body'];
    console.log(body);
    res.end(JSON.stringify({"mesage":"sample response"}));
}