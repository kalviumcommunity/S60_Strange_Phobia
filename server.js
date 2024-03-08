// console.log("hi")

const exp = require("express")
const useExp = exp()

useExp.get("/",(req,res)=>{
    res.send("basic message")
})
useExp.get("/",(req,res)=>{
    res.send("message")
})
useExp.use(exp.static('public'));

useExp.listen(3000,()=>{console.log("3000")});


