// console.log("hi")

const exp = require("express");
const useExp = exp();

useExp.get("/", (req, res) => {
  res.send("basic message");
});

useExp.get("/ping", (req, res) => {
  res.send("message");
});

useExp.listen(3000, () => {
  console.log("Server is running on 3000");
});
