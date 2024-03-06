// console.log("hi")

const exp = require("express")
const App = exp()

App.listen(3000,()=>{console.log("3000")})

App.get("/ping",(req,res)=>{
    res.send("message")
})
