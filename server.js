// console.log("hi")

const exp = require("express")
const useExp = exp()

useExp.listen(3000,()=>{console.log("3000")})

useExp.get("/ping",(req,res)=>{
    res.send("message")
})
