const router = require("express").Router();

router.get("/",(req,res)=>{
    res.send("hey its user routes")
})
module.exports = router