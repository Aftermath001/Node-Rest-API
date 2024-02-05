const router = require("express").Router();

router.get("/",(req,res)=>{
    res.send("hey its auth routes")
})
module.exports = router