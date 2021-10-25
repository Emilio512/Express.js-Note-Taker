const fs = require ("fs")
const{v4:uuidv4} = require("uuid")
const router = require ("express").Router()
    
router.get("/notes",(req,res)=>{
    let data = JSON.parse(fs.readFileSync("./db/db.json","utf-8"))
    res.json(data)
})

router.post("/notes",(req,res)=>{
    const addNotes = req.body
    addNotes.id = uuidv4()
    let data = JSON.parse(fs.readFileSync("./db/db.json","utf-8"))
    data.push(addNotes)
    fs.writeFileSync("./db/db.json",JSON.stringify(data))
    res.json(data)
})
module.exports = router